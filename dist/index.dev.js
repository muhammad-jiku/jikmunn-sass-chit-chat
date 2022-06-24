"use strict";

var _require = require('gulp'),
    src = _require.src,
    dest = _require.dest,
    watch = _require.watch,
    series = _require.series;

var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('index.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
  watch(['index.scss'], buildStyles);
}

exports["default"] = series(buildStyles, watchTask);