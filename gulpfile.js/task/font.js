const {src, dest} = require("gulp");

// Configs
const path = require("../config/path.js")
const app = require("../config/app.js")

// Plugins
const plumber = require("gulp-plumber"); // Обработка ошибок
const notify = require("gulp-notify"); // Обработка ошибок в виде уведомлений
const newer = require("gulp-newer"); // Обработка ошибок в виде уведомлений
const fonter = require("gulp-fonter"); // Обработка ошибок в виде уведомлений
const ttf2woff2 = require("gulp-ttf2woff2"); // Обработка ошибок в виде уведомлений



// Обработка Font
const font = () => {    // функция с любым именем
    return src(path.font.src) // Берем все файлы из каталога с расширением html
        // Plugins
        .pipe(plumber({ // При ошибки уведомления от Windows
            errorHandler: notify.onError(error => ({
                title: "FONT", // Название для уведомления
                message: error.message // Текст для уведомления (Тут просто текст ошибки)
            }))
        }))
        .pipe(newer(path.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.font.dest)) // И копируем его в папку public (название папки может быть любым)
        .pipe(ttf2woff2()) // И копируем его в папку public (название папки может быть любым)
        .pipe(dest(path.font.dest))
}

module.exports = font;