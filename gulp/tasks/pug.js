module.exports = function () {

    /* *************** Pug:Dev *************** */
    $.gulp.task('pug', () => {
        return $.gulp.src($.paths.source.pug)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(err => {
                    return {
                        title: 'Pug',
                        message: err.message
                    }
                })
            }))
            .pipe($.gp.pug({
                locals: {
                    data: JSON.parse($.fs.readFileSync('./data/data.json', 'utf8'))
                },
                pretty: true
            }))
            .pipe($.gulp.dest($.paths.dest.html))
            .pipe($.browserSync.stream())
    });

    /* *************** Pug:Prod *************** */
    $.gulp.task('pug:prod', () => {
        return $.gulp.src($.paths.source.pug)
            .pipe($.gp.pug({
                locals: {
                    data: JSON.parse($.fs.readFileSync('./data/data.json', 'utf8'))
                },
                pretty: false
            }))
            .pipe($.gulp.dest($.paths.dest.html))
    });
};