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
    return gulp.src([
      'src/_init.scss',
      'src/_background-color.scss',
      'src/_blank.scss',
      'src/_border-color.scss',
      'src/_border-radius.scss',
      'src/_color.scss',
      'src/_font-size.scss',
      'src/_grid.scss',
      'src/_line.scss',
      'src/_line-clamp.scss',
      'src/_line-height.scss',
      'src/_margin.scss',
      'src/_padding.scss',
      'src/_width.scss'
    ])
      .pipe($.concat('webkit-sass-generators.scss'))
      .pipe(gulp.dest('dist'));
  });

}());
