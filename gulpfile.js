const gulp =require('gulp');
const babel =require('gulp-babel');
gulp.task('build', (done) => {
   gulp.src('./*.js')
      .pipe(babel())
      .pipe(gulp.dest('./dist'));
      done();
});