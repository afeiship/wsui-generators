(function() {
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task(
    'styles',
    gulp.parallel(function() {
      return gulp
        .src('src/*.scss')
        .pipe($.concat('webkit-sass-generators.scss'))
        .pipe(gulp.dest('dist'));
    })
  );
})();
