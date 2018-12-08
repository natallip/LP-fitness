/* *************** Clear public folder *************** */
module.exports = function () {
    $.gulp.task('clean:public', () => $.del(`./${$.paths.dest.baseDir}`));
};