var gulp = require('gulp-help')(require('gulp')),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

gulp.task('connect', 'Starts a server for LiveReload', function() {
  connect.server({
    root: './src/',
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
  gulp.watch(['./src/**/*.*'], ['reload']);
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/*.s*ss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./src/css'));
});

gulp.task('default', 'Runs by default', ['sass', 'connect', 'watch']);
