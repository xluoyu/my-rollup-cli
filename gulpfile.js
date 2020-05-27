/*
 * @Author: your name
 * @Date: 2020-05-26 11:23:47
 * @LastEditTime: 2020-05-27 16:13:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test/Users/haotang/Desktop/test/timeTable/gulpfile.js
 */ 
const IsBuild = process.argv[2] == 'build'
const gulp = require('gulp')
const eslint = require('gulp-eslint')
const clear = require('clear')
const {rollup} = require('rollup')
const babel = require('rollup-plugin-babel')
const {uglify} = require('rollup-plugin-uglify')
const moduleName = 'TimeTable'
const destName = 'time-table'

// gulp.task('lint', () => {
//     clear();
//     gulp.src(['src/**.js'])
//     .pipe(eslint())
//     .pipe(eslint.format())
//     .pipe(eslint.failAfterError())
// })

function lint (cb) {
    clear();
    gulp.src(['src/**.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    cb()
}

function buildDev (cb) {
    rollup({
        input: 'src/index.js',
        plugins: [babel()]
    }).then(bundle => {
        bundle.write({
            name: moduleName,
            format: 'umd',
            file: `dist/${destName}.js`,
            sourcemap: true
        })
        cb()
    })
}
// gulp.task('build:dev', ['lint'], () => {
//     return rollup({
//         entry: 'src/index.js',
//         plugins: [babel()]
//     }).then(bundle => {
//         bundle.write({
//             moduleName,
//             format: 'umd',
//             dest: `dist/${destName}.js`,
//             sourceMap: true
//         })
//     })
// })

function buildProd(cb) {
    rollup({
        input: 'src/index.js',
        plugins: [babel(),uglify()]
    }).then(bundle => {
        bundle.write({
            name: moduleName,
            format: 'umd',
            file: `dist/${destName}.min.js`,
            sourcemap: false
        })
        cb()
    })
}

// gulp.task('build:prod', ['lint'], () => {
//     return rollup({
//         entry: 'src/index.js',
//         plugins: [babel()]
//     }).then(bundle => {
//         bundle.write({
//             moduleName,
//             format: 'umd',
//             dest: `dist/${destName}.js`,
//             sourceMap: false
//         })
//     })
// })

// gulp.task('default', ['lint', 'build:dev', 'build:prod'])
exports.default = gulp.series(lint,gulp.parallel(buildDev, buildProd))