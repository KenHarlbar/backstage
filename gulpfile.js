var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('styles', function() {
    return gulp.src('css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
})

gulp.task('watch', function() {
    gulp.watch('css/*.css', gulp.series('styles'))
})
