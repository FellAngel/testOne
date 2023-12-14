/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/contenxMaxWidth.js":
/*!***********************************!*\
  !*** ./src/js/contenxMaxWidth.js ***!
  \***********************************/
/***/ (function() {

eval("// const content = document.querySelector(\".content\");\r\n// const maxW = \"1280px\";\r\n//\r\n// if (content.offsetWidth < parseFloat(maxW)) {\r\n//     content.style.width = maxW;\r\n//     console.log(content.offsetWidth)\r\n// }\n\n//# sourceURL=webpack://gulp-starter/./src/js/contenxMaxWidth.js?");

/***/ }),

/***/ "./src/js/img.js":
/*!***********************!*\
  !*** ./src/js/img.js ***!
  \***********************/
/***/ (function() {

eval("let images = document.querySelector(\".main\");\r\nlet currentIndex = -1;\r\nlet photoName = \"\";\r\nlet i = 1000;\r\n\r\nfunction checkOpacity() {\r\n    if (images.style.opacity === '0.5') {\r\n        images.style.backgroundImage = photoName;\r\n        images.style.opacity = '1';\r\n    }\r\n}\r\n\r\nfunction changeOpacity() {\r\n    images.style.opacity = '0.51';\r\n    setTimeout(images.style.opacity = '0.5', 3000)\r\n}\r\n\r\n\r\nfunction changeImage() {\r\n\r\n    if (currentIndex < 2) {\r\n        currentIndex ++;\r\n    }\r\n    else {\r\n        currentIndex = 0;\r\n    }\r\n\r\n    switch (currentIndex) {\r\n        case 0:\r\n            photoName = 'url(\\'../img/images/photo1.png\\')'\r\n            break;\r\n        case 1:\r\n            photoName = 'url(\\'../img/images/photo2.png\\')'\r\n            break;\r\n        case 2:\r\n            photoName = 'url(\\'../img/images/photo3.png\\')'\r\n            break;\r\n    }\r\n\r\n    setTimeout(changeOpacity, 3000);\r\n}\r\n\r\n// Запускаем цикл изменения изображений каждые ? секунд\r\nchangeImage();\r\nsetInterval(changeImage, 3000);\r\nsetInterval(checkOpacity, 200);\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/img.js?");

/***/ }),

/***/ "./src/js/quadEq.js":
/*!**************************!*\
  !*** ./src/js/quadEq.js ***!
  \**************************/
/***/ (function() {

eval("// function NOD (x, y) {\r\n//     if (y > x) return NOD(y, x);\r\n//     if (!y) return x;\r\n//     return NOD(y, x % y);\r\n// }\r\n//\r\n// let a = 3;\r\n// let b = 7;\r\n// let c = -6;\r\n//\r\n// const D = Math.sqrt((b**2) - (4 * a * c));\r\n//\r\n// if (D > 0) {\r\n//     const xOne = (-b + D) / (2 * a)\r\n//     const xTwo = (-b - D) / (2 * a)\r\n//     console.log(\"Дискриминант: \" + D + \"\\n\\n\");\r\n//\r\n//     if (xOne % 1 === 0) {\r\n//         console.log(\"Первый корень: \" + xOne);\r\n//     } else {\r\n//         const xOne_one = (-b + D);\r\n//         const xOne_two = (2 * a);\r\n//\r\n//         const currentNOD = NOD(xOne_one, xOne_two);\r\n//         console.log(\"Первый корень: \" + (xOne_one / currentNOD) + \"/\" + (xOne_two / currentNOD))\r\n//     }\r\n//\r\n//     if (xTwo % 1 === 0) {\r\n//         console.log(\"Второй корень: \" + xTwo);\r\n//     } else {\r\n//         const xTwo_one = (-b - D);\r\n//         const xTwo_two = (2 * a);\r\n//\r\n//         const currentNOD = NOD(xTwo_one, xTwo_two);\r\n//         console.log(\"Второй корень: \" + (xTwo_one / currentNOD) + \"/\" + (xTwo_two / currentNOD))\r\n//     }\r\n// }\r\n// else if (D === 0) {\r\n//     console.log(\"Дискриминант: \" + D + \"\\n\\n\");\r\n//\r\n//     const x = (-b / (2*a))\r\n//\r\n//     if (x%1 === 0) {\r\n//         console.log(\"Дискрименант равен 0,\\nОдин корень: \" + x)\r\n//     }\r\n//     else {\r\n//         const xOne = -b;\r\n//         const xTwo = 2*a;\r\n//\r\n//         const currentNOD = NOD(xOne, xTwo);\r\n//         console.log(\"Дискрименант равен 0,\\nОдин корень: \" + (xOne / currentNOD) + \"/\" + (xTwo / currentNOD))\r\n//     }\r\n// }\r\n// else {\r\n//     console.log(\"Дискрименант меньше 0, корней нет!\")\r\n// }\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/quadEq.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/contenxMaxWidth.js"]();
/******/ 	__webpack_modules__["./src/js/img.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/quadEq.js"]();
/******/ 	
/******/ })()
;