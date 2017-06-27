var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify      = require('gulp-uglifyjs'),
    imagemin    = require('gulp-imagemin');
  

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on ('error', sass.logError))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});  

gulp.task('browser-sync', function() {
	browserSync({
      server: {
      	baseDir:'app'
      	}
	});
}); 

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin([

    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
   
    ]))
   
    .pipe(gulp.dest('dist/img'));
});


gulp.task('watch', ['browser-sync' , 'sass'], function() {
	gulp.watch('app/sass/**/*.scss' , ['sass']);
	gulp.watch('app/*.html' , browserSync.reload);
	gulp.watch('app/js/**/*.js' , browserSync.reload);
});  


gulp.task('build', ['img', 'sass'] , function(){
	var buildCss = gulp.src('app/css/main.css')
	.pipe(gulp.dest('dist/css'));

	var buidJs = gulp.src([
		'app/js/main.js',
		'app/js/jquery.min.js',
		'app/js/slick.min.js'])
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});