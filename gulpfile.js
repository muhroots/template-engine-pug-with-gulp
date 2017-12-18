const gulp = require('gulp')
const pug = require('gulp-pug')
const data = require('gulp-data')
const fs = require('file-system')
const watch = require('gulp-watch')
const htmlmin  = require('gulp-htmlmin')


gulp.task('views', () => {
  return gulp.src('./source/views/*.pug')
    .pipe(data(function(file) {
      return JSON.parse(fs.readFileSync('./source/config/config.json'))
    }))
    .pipe(pug({pretty: true }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public'))
})

gulp.task('watch', () => {
  gulp.watch(['./source/views/*.pug'], ['views'])
})