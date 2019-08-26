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
    'styles',
    gulp.parallel(function() {
      return gulp
        .src([
          'src/init.scss',
          'src/background-color.scss',
          'src/blank.scss',
          'src/border-color.scss',
          'src/border-radius.scss',
          'src/box.scss',
          'src/color.scss',
          'src/font-size.scss',
          'src/font-weight.scss',
          'src/grid.scss',
          'src/line.scss',
          'src/line-clamp.scss',
          'src/line-height.scss',
          'src/width.scss'
        ])
        .pipe($.concat('webkit-sass-generators.scss'))
        .pipe(gulp.dest('dist'));
    })
  );
})();
