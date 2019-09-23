# Living Space

A tool for family members to mark predictions for where everyone will be living
in 5? years.

Mapbox interactive map with draw tools
), so people can
create circles with variable radius, one for each family member.

The score is a likelihood, using input circles as two dimensinoal normal
distribution.

## Components
- Frontend
  - [mapbox-gl-draw](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-draw/)
		for creating circles.
	- [circle mode](https://github.com/iamanvesh/mapbox-gl-draw-circle)
	- [api docs](https://github.com/mapbox/mapbox-gl-draw/blob/master/docs/API.md)

  - Google form for submitting data
    - email
    - mean, variance for each family member
- Database
  - Google form writes to a sheet
- Hosting
  - Github pages on devonproctor.com/living-space

TODO:
	- Use Grunt to build Node javascript
