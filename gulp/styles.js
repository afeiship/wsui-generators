(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task('styles',function() {
    return gulp.src('src/**')
      .pipe($.concat('webkit-sass-generators.scss'))
      .pipe(gulp.dest('dist'));
  });

}());
