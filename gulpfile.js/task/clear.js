const del = require("del");

// Configs
const path = require("../config/path.js")

// Удаление директории public в начале
const clear = () => {
    return del(path.root);
}

module.exports = clear;