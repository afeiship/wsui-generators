(function() {
  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task(
    'test',
    gulp.parallel(function() {
      return gulp
        .src('docs/*.scss')
        .pipe($.sass({ outputStyle: 'expanded' }).on('error', $.sass.logError))
        .pipe(gulp.dest('docs'));
    })
  );
})();
