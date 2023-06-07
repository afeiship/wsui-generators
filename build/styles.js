(function () {
  'use strict';

  var gulp = require('gulp');
  // var sass = require('gulp-sass')(require('sass'));
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
  });

  //styles
  gulp.task(
    'styles',
    gulp.parallel(function () {
      return gulp
        .src(['src/basic/*.scss', 'src/functions/*.scss', 'src/modules/*.scss'])
        .pipe($.concat('index.scss'))
        .pipe($.jswork.pkgHeader())
        .pipe(gulp.dest('dist'));
    })
  );
})();
