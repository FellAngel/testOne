// Путь до директории с исходными файлами
const pathScr = "./src";

// Путь до директории с конечными файлами
const pathDest = "./public";

//Exports Paths
module.exports = {
    root: pathDest,

    html: {
        // Исходные файлы html
        src: pathScr + "/html/*.html",

        // Следить за этими файлами html
        watch: pathScr + "/html/**/*.html",

        // Конечный путь к html
        dest: pathDest
    },

    css: {
        // Исходные файлы html
        src: pathScr + "/css/*.css",

        // Следить за этими файлами html
        watch: pathScr + "/css/**/*.css",

        // Конечный путь к html
        dest: pathDest + "/css"
    },

    scss: {
        // Исходные файлы html
        src: pathScr + "/sass/*.{sass,scss}",

        // Следить за этими файлами html
        watch: pathScr + "/sass/**/*.{sass,scss}",

        // Конечный путь к html
        dest: pathDest + "/css"
    },

    js: {
        // Исходные файлы html
        src: pathScr + "/js/*.js",

        // Следить за этими файлами html
        watch: pathScr + "/js/**/*.js",

        // Конечный путь к html
        dest: pathDest + "/js"
    },

    img: {
        // Исходные файлы html
        src: pathScr + "/img/**/*.{png,jpg,jpeg,gif,svg}",

        // Следить за этими файлами html
        watch: pathScr + "/img/**/*.{png,jpg,jpeg,gif,svg}",

        // Конечный путь к html
        dest: pathDest + "/img"
    },

    font: {
        // Исходные файлы html
        src: pathScr + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",

        // Следить за этими файлами html
        watch: pathScr + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",

        // Конечный путь к html
        dest: pathDest + "/font"
    }
}