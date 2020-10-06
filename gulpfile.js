const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const rename = require('gulp-rename');

const mainFiles = [
    'src/library/toposort/toposort.js',
    'node_modules/jquery/dist/jquery.js',
    'src/assets/js/h5p-jquery.js',
    'src/assets/js/h5pintegration.js',
    'src/library/h5p-php-library/js/h5p-content-type.js',
    'src/library/h5p-php-library/js/h5p-event-dispatcher.js',
    'src/library/h5p-php-library/js/h5p-x-api-event.js',
    'src/library/h5p-php-library/js/h5p-x-api.js',
    'src/library/h5p-php-library/js/h5p.js',
    'src/assets/js/h5p-overwrite.js'
];

const frameFiles = [
    'node_modules/jquery/dist/jquery.js',
    'src/assets/js/h5p-jquery.js',
    'src/library/h5p-php-library/js/h5p-event-dispatcher.js',
    'src/library/h5p-php-library/js/h5p-action-bar.js',
    'src/library/h5p-php-library/js/h5p-content-type.js',
    'src/library/h5p-php-library/js/h5p-event-dispatcher.js',
    'src/library/h5p-php-library/js/h5p-x-api-event.js',
    'src/library/h5p-php-library/js/h5p-x-api.js',
    'src/library/h5p-php-library/js/h5p.js',
    'src/assets/js/h5p-overwrite.js'
];

function clean_dist () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
};

function compile_js() {
    return gulp.src('src/assets/js/h5pintegration.es6')
        .pipe(babel({
            'presets': ["@babel/preset-env"]
        }))
        .pipe(gulp.dest('src/assets/js'));
};

function concat_main_js() {
    return gulp.src(mainFiles)
        .pipe(concat('h5p-standalone-main.js'))
        .pipe(gulp.dest('dist/js'));
};

function concat_frame_js() {
    return gulp.src(frameFiles)
        .pipe(concat('h5p-standalone-frame.js'))
        .pipe(gulp.dest('dist/js'));
};

function minify_js() {
    return gulp.src('dist/js/*.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('dist/js'));
};

function copy_css() {
    return gulp.src('src/library/h5p-php-library/styles/*.css')
        .pipe(gulp.dest('dist/styles'));
};

function copy_fonts() {
    return gulp.src('src/library/h5p-php-library/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
};

function copy_workspace() {
    return gulp.src('src/workspace/**')
        .pipe(gulp.dest('dist/workspace'));
}

function copy_favicon() {
    return gulp.src('src/favicon.ico')
        .pipe(gulp.dest('dist/'));
}

function copy_index() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
}

gulp.task('default', gulp.series(clean_dist, gulp.parallel(gulp.series([compile_js, gulp.parallel(concat_main_js, concat_frame_js), minify_js]), copy_css, copy_fonts, copy_workspace, copy_favicon, copy_index)));
