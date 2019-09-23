/*
 * Gruntfile.js
 * Copyright (C) 2019 Devon Proctor <devon.proctor@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      development: {
        src: 'index.js',
        dest: 'bundle.js',
        options : {
          browserifyOptions: {debug : true},
          //transform: [ [ "babelify", {"presets" : [ "es2015" ]}] ],
          transform: [
            [ "babelify", {
                "presets" : [ "@babel/preset-env" ],
                global:true,
              only: [
                //"node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css",
                "node_modules/mapbox-gl-draw-circle/index.js",
                "index.js"
              ]
            }],
            [ "browserify-css", { global: true}]
          ],
        },
        watch : true,
        keepAlive : true
      }
    },
    uglify: {
      options: {
        banner:
            '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {src: 'bundle.js', dest: 'bundle.min.js'}
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [ 'browserify:development', /*'uglify'*/ ]);
};
