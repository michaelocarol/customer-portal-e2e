'use strict';

var path = require('path');
var gulp = require('gulp');
var selenium = require('selenium-standalone');
var webdriver = require('gulp-webdriver');

gulp.task('selenium', function (done) {
    selenium.install({
    logger: function (message) { }
  }, function(err){
        if(err) return done(err);
    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
    });
});

gulp.task( 'test:e2e', ['selenium'], function() {
  return gulp.src(path.join( __dirname, 'wdio.conf.js' ) )
    .pipe(webdriver() ).once( 'end', function () {
    } );
} );

gulp.task( 'test:e2e-core', function() {
  return gulp.src(path.join( __dirname, 'wdio-core-scenario.conf.js' ) )
    .pipe(webdriver() ).once( 'end', function () {
    } );
} );

gulp.task( 'test:e2e-ci', function() {
  return gulp.src(path.join( __dirname, 'wdio-core-ci.conf.js' ) )
    .pipe(webdriver() ).once( 'end', function () {
    } );
} );
