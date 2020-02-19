const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

const css = [
    './src/scss/main.scss',
    './src/scss/settings.scss',
    './src/scss/_fonts.scss',
    './src/scss/slick.scss',
    './src/scss/slick-theme.scss'
]
const js = [
    './src/js/jquery.min.js',
    './src/js/slick.min.js',
    './src/js/main.js'
]

gulp.task('styles', () => {
    return gulp.src(css)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
    return gulp.src(js)
        .pipe(concat('scripts.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
});

gulp.task('del', () => {
    return del(['build/*'])
});

gulp.task('compress', () => {
    return gulp.src('./src/media/**')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./build/media/'))
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });

    gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
    gulp.watch('./src/media/**', gulp.series('compress'))
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('del', gulp.parallel('styles', 'scripts', 'compress'), 'watch'));