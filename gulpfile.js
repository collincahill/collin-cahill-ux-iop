'use strict';

var gulp = require('gulp-help')(require('gulp')),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
		nodemon = require('gulp-nodemon'),
		browserSync = require('browser-sync').create(),
		exec = require('child_process').exec;

gulp.task('connect', 'Starts a server for LiveReload', function() {
  connect.server({
    root: ['src/html', 'src/css', 'src/js', './'],
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
  gulp.watch(['./src/js/*.js'], ['lint']);
  gulp.watch(['./src/**/*.*', '!./src/data/db/*.*', '!./src/data/db/**/*.*'], ['reload']);
});

gulp.task('sass', 'Preprocesses SASS styles', function() {
  return gulp.src('./src/sass/*.s*ss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./src/css'));
});

gulp.task('lint', function() {
  return gulp.src('./src/js/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('db', 'Runs the Mongo Daemon', function(cb) {
	exec('mongod --dbpath ./src/data/db &', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('browser-sync', 'Starts browser-sync in conjunction with nodaemon', function() {
	browserSync.init({
		files: ['./src/**/*', '!./src/data/**']
	});
});

gulp.task('server', 'Runs the server with database API.', function(cb) {
	nodemon({
		script: 'server.js',
		ext: 'js html'
	});
});

gulp.task('default', 'Runs by default', ['db', 'sass', 'lint', 'server']);
