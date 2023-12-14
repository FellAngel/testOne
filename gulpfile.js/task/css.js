const {src, dest} = require("gulp");

// Configs
const path = require("../config/path.js")
const app = require("../config/app.js")

// Plugins
const plumber = require("gulp-plumber"); // Обработка ошибок
const notify = require("gulp-notify"); // Обработка ошибок в виде уведомлений
const fileInclude = require("gulp-file-include") // Вложенность файлов
const size = require("gulp-size") // Узнать размер странички
const concat = require("gulp-concat") // Узнать размер странички
const cssimport = require("gulp-cssimport") // Узнать размер странички
const autoprefixer = require("gulp-autoprefixer") // Узнать размер странички
const csso = require("gulp-csso") // Узнать размер странички
const rename = require("gulp-rename") // Узнать размер странички
const shorthand = require("gulp-shorthand") // Узнать размер странички
const groupCssMediaQueries = require("gulp-group-css-media-queries") // Узнать размер странички
const webpCss = require("gulp-webp-css") // Узнать размер странички


// Обработка CSS стрелочная функция
const css = () => {    // функция с любым именем
    return src(path.css.src, {sourcemaps: app.isDev}) // Берем все файлы из каталога с расширением html
        // Plugins
        .pipe(plumber({ // При ошибки уведомления от Windows
            errorHandler: notify.onError(error => ({
                title: "CSS", // Название для уведомления
                message: error.message // Текст для уведомления (Тут просто текст ошибки)
            }))
        }))
        .pipe(fileInclude())  // Плагин для шаблонизации (шаблонов для header, footer, body и т.д.)
        .pipe(concat("css/main.css"))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size({title: "CSS Size Before"}))
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev})) // И копируем его в папку public (название папки может быть любым)
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(size({title: "CSS Size After"}))
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev})) // И копируем его в папку public (название папки может быть любым)
}

module.exports = css;