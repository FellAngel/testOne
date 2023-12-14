const {src, dest} = require("gulp");

// Configs
const path = require("../config/path.js")
const app = require("../config/app.js")

// Plugins
const plumber = require("gulp-plumber"); // Обработка ошибок
const notify = require("gulp-notify"); // Обработка ошибок в виде уведомлений
const fileInclude = require("gulp-file-include") // Вложенность файлов
const size = require("gulp-size") // Узнать размер странички
const autoprefixer = require("gulp-autoprefixer") // Узнать размер странички
const csso = require("gulp-csso") // Узнать размер странички
const rename = require("gulp-rename") // Узнать размер странички
const shorthand = require("gulp-shorthand") // Узнать размер странички
const groupCssMediaQueries = require("gulp-group-css-media-queries") // Узнать размер странички
const sass = require("gulp-sass")(require("sass")); // Узнать размер странички
const sassGlob = require("gulp-sass-glob"); // Узнать размер странички
const webpCss = require("gulp-webp-css")
const gulpif = require("gulp-if"); // Узнать размер странички


// Обработка SCSS стрелочная функция
const scss = () => {    // функция с любым именем
    return src(path.scss.src, {sourcemaps: app.isDev}) // Берем все файлы из каталога с расширением html
        // Plugins
        .pipe(plumber({ // При ошибки уведомления от Windows
            errorHandler: notify.onError(error => ({
                title: "SCSS", // Название для уведомления
                message: error.message // Текст для уведомления (Тут просто текст ошибки)
            }))
        }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(fileInclude())  // Плагин для шаблонизации (шаблонов для header, footer, body и т.д.)
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size({title: "SCSS Size Before"}))
        .pipe(dest(path.scss.dest, {sourcemaps: app.isDev})) // И копируем его в папку public (название папки может быть любым)
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(size({title: "SCSS Size After"}))
        .pipe(dest(path.scss.dest, {sourcemaps: app.isDev})) // И копируем его в папку public (название папки может быть любым)
}

module.exports = scss;