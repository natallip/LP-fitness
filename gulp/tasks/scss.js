module.exports = function () {

    /* *************** Sass:Dev *************** */
    $.gulp.task('scss', () => {
        return $.gulp
            .src($.paths.source.scss)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(err => {
                    return {
                        title: 'Style',
                        message: err.message
                    }
                })
            }))
            .pipe($.gp.sourcemaps.init({includeContent: true, sourceRoot: '/source'}))
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 6 versions'],
                cascade: true
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.paths.dest.css))
            .pipe($.browserSync.stream());
    });

    /* *************** Sass:Production *************** */
    $.gulp.task('scss:prod', () => {
        return $.gulp
            .src($.paths.source.scss)
            .pipe($.gp.sass({
                outputStyle: 'compressed'
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 6 versions'],
                cascade: true
            }))
            .pipe($.gulp.dest($.paths.dest.css))
    });
};