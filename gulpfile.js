const gulp = require('gulp');
const eslint = require('gulp-eslint');

const paths = {
  'src': {
    'js' : ['background.js', 'content.js']
  }
}

// Lint Task
gulp.task('lint', function(){
  return gulp.src(paths.src.js)
    .pipe(eslint())
    .pipe(eslint.format())
});

// Watch Task
gulp.task('watch', function(){
  gulp.watch(paths.src.js, ['lint']);
});

// Default Task
gulp.task('default', ['lint', 'watch']);
