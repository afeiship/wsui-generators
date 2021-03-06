(function() {
  'use strict';

  var gulp = require('gulp');
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
