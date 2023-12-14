const {src, dest} = require("gulp");

// Configs
const path = require("../config/path.js")
const app = require("../config/app.js")

// Plugins
const plumber = require("gulp-plumber"); // Обработка ошибок
const notify = require("gulp-notify"); // Обработка ошибок в виде уведомлений
const babel = require("gulp-babel"); // For Min size Js
// const uglify = require("gulp-uglify"); // For Js instead webPack
const webpack = require("webpack-stream"); // For Js


// Обработка JS стрелочная функция
const js = () => {    // функция с любым именем
    return src(path.js.src, {sourcemaps: app.isDev}) // Берем все файлы из каталога с расширением html
        // Plugins
        .pipe(plumber({ // При ошибки уведомления от Windows
            errorHandler: notify.onError(error => ({
                title: "JS", // Название для уведомления
                message: error.message // Текст для уведомления (Тут просто текст ошибки)
            }))
        }))
        .pipe(babel())
        .pipe(webpack(app.webpack))
        // .pipe(uglify())
        .pipe(dest(path.js.dest, {sourcemaps: app.isDev})) // И копируем его в папку public (название папки может быть любым)
}

module.exports = js;