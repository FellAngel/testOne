const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd // Убирает лишние пробелы (true/false)
    },

    webpack: {
        mode: isProd ? "production" : "development" // Меняй на production что бы сделать сокращения или development для разработчика (большой вес файла)
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats: ["ttf","woff", "eot", "svg"]
    }
}