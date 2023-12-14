// Обработка HTML стрелочная функция
const html = () => {    // функция с любым именем

    // Для исключений используется стандартный '!'
    // Тут как и везде '*' будем равна 'всё' или же все файлы,папки и т.д. а '**' будет равны все файлы и папки далее к примеру
    // return src("./src/**/*.*") - все файлы и папки в 'src'
    // return src(["./src/**/*.css", "src/**/*.js"]) - все файлы и папки в 'src' с .css и .js
    // return src("./src/html/index.html") // Берем файл index.html из указанного пути
    // return src("./src/{html,css}/*.{html,css}") // Берем все файлы из каталога html и css с расширениями html и css

    return $.gulp.src($.path.html.src) // Берем все файлы из каталога с расширением html
        // Plugins
        .pipe($.gp.plumber({ // При ошибки уведомления от Windows
            errorHandler: $.gp.notify.onError(error => ({
                title: "HTML", // Название для уведомления
                message: error.message // Текст для уведомления (Тут просто текст ошибки)
            }))
        }))
        .pipe($.gp.fileInclude())  // Плагин для шаблонизации (шаблонов для header, footer, body и т.д.)
        .pipe($.gp.webpHtml())
        .pipe($.gp.size({title: "HTML Size Before"}))
        .pipe($.gp.htmlmin($.app.htmlmin))
        .pipe($.gp.size({title: "HTML Size After"}))
        .pipe($.gulp.dest($.path.html.dest)) // И копируем его в папку public (название папки может быть любым)
}

module.exports = html;