global.$ = {
    // Packets
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    browserSync: require("browser-sync").create(),

    // Configuration
    path: require("./config/path.js"),
    app: require("./config/app.js")
}

const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create(); // Создание сервера для авто-обновления странички

// Configs
const path = require("./config/path.js")
const app = require("./config/app.js")

// Tasks
// const clear = require("./task/clear")
// const server = require("./task/server")
// const html = require("./task/html")
// const scss = require("./task/scss.js")
// const js = require("./task/js.js")
// const img = require("./task/img.js")
// const font = require("./task/font")

const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true});


// Наблюдение
const watcher = () => {
    watch($.path.html.watch, task.html).on("all", $.browserSync.reload) // Сделить за изменениями для любых .html в этом катологе
    watch($.path.scss.watch, task.scss).on("all", $.browserSync.reload) // Сделить за изменениями для любых .html в этом катологе
    watch($.path.js.watch, task.js).on("all", $.browserSync.reload) // Сделить за изменениями для любых .html в этом катологе
    watch($.path.img.watch, task.img).on("all", $.browserSync.reload) // Сделить за изменениями для любых .html в этом катологе
    watch($.path.font.watch, task.font()).on("all", $.browserSync.reload) // Сделить за изменениями для любых .html в этом катологе
}

const build = $.gulp.series(
    task.clear,
    $.gulp.parallel(task.html,task.scss, task.js, task.img, task.font),
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, task.server) // Одновременно запуск и 'server' и 'watcher'
);

// Задачи
exports.html = task.html; // экспорт.любое имя = имя нужной функции
exports.scss = task.scss; // экспорт.любое имя = имя нужной функции
// exports.watch = watcher; // присвоение gulp.watch значения watcher
exports.clear = task.clear; // очистка
exports.js = task.js; // JavaScript
exports.img = task.img; // JavaScript
exports.font = task.font; // JavaScript

// Общая задача для сборки
exports.default = $.app.isProd
? build
: dev;