const { src, dest, series } = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
  return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
}

exports.default = series(compileSass);
