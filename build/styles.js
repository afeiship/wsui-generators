(function() {
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*']
  });

  //styles
  gulp.task(
    'styles',
    gulp.parallel(function() {
      return gulp
        .src('src/*.scss')
        .pipe($.concat('index.scss'))
        .pipe($.feizheng.pkgHeader())
        .pipe(gulp.dest('dist'));
    })
  );
})();
