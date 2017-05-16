var gulp = require('gulp-help')(require('gulp')),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('connect', 'Starts a server for LiveReload', function() {
  connect.server({
    root: ['src/html', 'src/css', 'src/js'],
    port: 1820,
    livereload: true
  });
});

gulp.task('reload', 'Reloads project files', function() {
  gulp.src('./src/**/*.*')
      .pipe(connect.reload());
});

gulp.task('watch', 'Watches for changes in project files, calls reload task when changes occur', function() {
  gulp.watch(['./src/sass/*.s*ss'], ['sass']);
  gulp.watch(['./src/css/*.css'], ['prefix']);
  gulp.watch(['./src/**/*.*'], ['reload']);
});

gulp.task('sass', 'Preprocesses SASS styles', function() {
  return gulp.src('./src/sass/*.s*ss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./src/css'));
});

gulp.task('prefix', 'Add missing vendor prefixes to CSS', function() {
  gulp.src('./src/css/*.css')
      .pipe(autoprefixer())
      .pipe(gulp.dest('./src/css'));
});

gulp.task('default', 'Runs by default', ['sass', 'prefix', 'connect', 'watch']);
