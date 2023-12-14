const {src, dest} = require("gulp");

// Configs
const path = require("../config/path.js")
const app = require("../config/app.js")

// Plugins
const plumber = require("gulp-plumber"); // Обработка ошибок
const notify = require("gulp-notify"); // Обработка ошибок в виде уведомлений
const imagemin = require("gulp-imagemin"); // Обработка ошибок в виде уведомлений
const newer = require("gulp-newer"); // Обработка ошибок в виде уведомлений
const webp = require("gulp-webp"); // Обработка ошибок в виде уведомлений
const gulpif = require("gulp-if"); // Обработка ошибок в виде уведомлений



// Обработка IMG
const img = () => {    // функция с любым именем
    return src(path.img.src) // Берем все файлы из каталога с расширением html
        // Plugins
        .pipe(plumber({ // При ошибки уведомления от Windows
            errorHandler: notify.onError(error => ({
                title: "IMG", // Название для уведомления
                message: error.message // Текст для уведомления (Тут просто текст ошибки)
            }))
        }))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
        .pipe(dest(path.img.dest)) // И копируем его в папку public (название папки может быть любым)
}

module.exports = img;