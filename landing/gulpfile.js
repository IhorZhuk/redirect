const { src, dest, parallel, watch } = require('gulp');
const babel = require('gulp-babel');
const minify = require("gulp-babel-minify");
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');

const ops = {
  srcDir: 'src',
  distDir: 'dist'
}

function js() {
  return src(`${ops.srcDir}/js/**/*.js`)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(dest(`${ops.distDir}/js`));
}

function css() {
  return src(`${ops.srcDir}/scss/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(dest(`${ops.distDir}/css`));
}

function watchTask() {
  watch(`./../scss/**/*.scss`, css);
  watch(`${ops.srcDir}/scss/**/*.scss`, css);
  watch(`${ops.srcDir}/js/**/*.js`,js);
}

exports.watch = watchTask;
exports.default = parallel(css, js);