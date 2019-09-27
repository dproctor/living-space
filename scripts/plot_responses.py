#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2019 Devon Proctor <devon.proctor@gmail.com>
#
# Distributed under terms of the MIT license.
"""
Downloads Google sheet with form responses and outputs it as geojson.

Dev command: $ ls scripts/* | entr -c -s "python3 scripts/plot_responses.py -s 'https://docs.google.com/spreadsheets/d/1T1QVTlx_j5Uw2F9pRK9mFf4dOGoy2PhF8UOVIykf1ro/export?format=csv&id=1T1QVTlx_j5Uw2F9pRK9mFf4dOGoy2PhF8UOVIykf1ro&gid=634084350'"
"""

from __future__ import print_function

import argparse
import csv
import itertools
import re
import sys
from functools import partial
from io import StringIO

import pyproj
import requests
from shapely.geometry import Point
from shapely.ops import transform

KML_TEMPLATE = """<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Living space predictions</name>{}
{}
  </Document>
</kml>"""
LINESTYLE_TEMPLATE = """
    <Style id="{}">
      <LineStyle>
        <color>{}</color>
        <width>{}</width>
      </LineStyle>
    </Style>"""
CIRCLE_TEMPLATE = """    <Placemark>
      <name>{}'s guess for {}</name>
      <description>{}</description>
      <styleUrl>#{}</styleUrl>
      <LineString>
        <extrude>1</extrude>
        <tessellate>1</tessellate>
        <visibility>1</visibility>
        <altitudeMode>absolute</altitudeMode>
        <coordinates> {}
        </coordinates>
      </LineString>
</Placemark>"""

WIDTHS = ("4", "8", "12", "16", "20")
COLORS = ("ffe6194B", "ff3cb44b", "ffffe119", "ff4363d8", "fff58231")
NAMES = ('Mom', 'Chris', 'Haley', 'Devon', 'Doug')


def main(arguments):

    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter)

    parser.add_argument('-s',
                        '--sheet_url',
                        dest="sheet_url",
                        help="Google Sheets url",
                        type=str,
                        required=True)
    parser.add_argument('--from_email',
                        help="Only output guesses from specified person",
                        type=str)
    parser.add_argument('--for_name',
                        help="Only output guesses for specified person",
                        type=str)

    args = parser.parse_args(arguments)

    response = requests.get(args.sheet_url)
    assert response.status_code == 200, 'Download failed'

    reader = csv.reader(StringIO(response.content.decode("utf-8")))
    lines = []
    for line in reader:
        lines.append(line)
    data = {}
    for item in zip(*lines):
        data[item[0]] = item[1:]

    circles = []
    for i, email in enumerate(data['Email']):
        for name in NAMES:
            if args.from_email:
                if not re.search(args.from_email, email):
                    continue
            if args.for_name:
                if not re.search(args.for_name, name):
                    continue
            circles.append(_circle_kml(email, name, data, i))

    print(
        KML_TEMPLATE.format(
            "\n".join([
                LINESTYLE_TEMPLATE.format(c + w, c, w)
                for c, w in itertools.product(COLORS, WIDTHS)
            ]), "\n".join(circles)))


def _circle_kml(email: str, name: str, data: dict, i: int):
    center = [float(i) for i in data["{} (center)".format(name)][i].split(",")]
    radius = float(data["{} (radius)".format(name)][i])
    coordinates = _geodesic_point_buffer(center[1], center[0], radius)
    return CIRCLE_TEMPLATE.format(
        email, name, "{} + {}km".format(center, radius),
        COLORS[NAMES.index(name)] + WIDTHS[i],
        "\n".join([",".join([str(p) for p in point])
                   for point in coordinates]))


def _geodesic_point_buffer(lat, lon, km):
    # Azimuthal equidistant projection
    aeqd_proj = '+proj=aeqd +lat_0={lat} +lon_0={lon} +x_0=0 +y_0=0'
    proj_wgs84 = pyproj.Proj(init='epsg:4326')
    project = partial(pyproj.transform,
                      pyproj.Proj(aeqd_proj.format(lat=lat, lon=lon)),
                      proj_wgs84)
    buf = Point(0, 0).buffer(km * 1000)  # distance in metres
    return transform(project, buf).exterior.coords[:]


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
