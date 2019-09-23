/*
 * index.js
 * Copyright (C) 2019 Devon Proctor <devon.proctor@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
import {CircleMode, DirectMode, DragCircleMode, SimpleSelectMode} from 'mapbox-gl-draw-circle';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
const mapboxgl = require('mapbox-gl');
const MapboxDraw = require('@mapbox/mapbox-gl-draw');

mapboxgl.accessToken =
    'pk.eyJ1IjoiZHBybyIsImEiOiJjamhrNG03N2gweHFrMzdxb3A3ZXc2MDd2In0.FC_fu8WvE7POuOeYMUGHyg';

var map = new mapboxgl.Map({
  container : 'map',                            // container id
  style : 'mapbox://styles/mapbox/streets-v11', // hosted style id
  center : [ -98.583333, 39.833333 ],           // starting position
  zoom : 3                                      // starting zoom
});

var draw = new MapboxDraw({
  // displayControlsDefault: false,
  // controls: {
  // polygon: true,
  // trash: true
  //},
  defaultMode : "draw_circle",
  userProperties: true,
  modes : {
    draw_circle : CircleMode,
    drag_circle : DragCircleMode,
    direct_select : DirectMode,
    simple_select : SimpleSelectMode
  }

});
map.addControl(draw);

draw.changeMode("draw_circle", {initialRadiusInKm: 1000})

//map.on('draw.create', updateArea);
//map.on('draw.delete', updateArea);
//map.on('draw.update', updateArea);

//function updateArea(e) {
  //var data = draw.getAll();
  //var answer = document.getElementById('calculated-area');
  //if (data.features.length > 0) {
    //var area = turf.area(data);
    //// restrict to area to 2 decimal points
    //var rounded_area = Math.round(area * 100) / 100;
    //answer.innerHTML =
        //'<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
  //} else {
    //answer.innerHTML = '';
    //if (e.type !== 'draw.delete')
      //alert("Use the draw tools to draw a polygon!");
  //}
//}
