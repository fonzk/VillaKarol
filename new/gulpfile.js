var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssnested = require('postcss-nested')
var browserSync = require('browser-sync').create()
// servidor de desarrollo

gulp.task('serve',function(){
browserSync.init({

server: {
    baseDir: './dist'

        }

    })
})

// tarea para procesar el CSS

gulp.task('css',function(){
var processors =[
autoprefixer({browsers:['>50%','ie 8']}),
cssnested

]
return gulp.src('./src/*.css')
.pipe(postcss(processors)) 
.pipe(gulp.dest('./dist/css'))
.pipe(browserSync.stream())

})
//tarea para vigilar los cambios

gulp.task('watch', function(){

gulp.watch('./src/*.css', ['css'])
gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task ('default', ['watch', 'serve'])