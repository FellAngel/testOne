// function NOD (x, y) {
//     if (y > x) return NOD(y, x);
//     if (!y) return x;
//     return NOD(y, x % y);
// }
//
// let a = 3;
// let b = 7;
// let c = -6;
//
// const D = Math.sqrt((b**2) - (4 * a * c));
//
// if (D > 0) {
//     const xOne = (-b + D) / (2 * a)
//     const xTwo = (-b - D) / (2 * a)
//     console.log("Дискриминант: " + D + "\n\n");
//
//     if (xOne % 1 === 0) {
//         console.log("Первый корень: " + xOne);
//     } else {
//         const xOne_one = (-b + D);
//         const xOne_two = (2 * a);
//
//         const currentNOD = NOD(xOne_one, xOne_two);
//         console.log("Первый корень: " + (xOne_one / currentNOD) + "/" + (xOne_two / currentNOD))
//     }
//
//     if (xTwo % 1 === 0) {
//         console.log("Второй корень: " + xTwo);
//     } else {
//         const xTwo_one = (-b - D);
//         const xTwo_two = (2 * a);
//
//         const currentNOD = NOD(xTwo_one, xTwo_two);
//         console.log("Второй корень: " + (xTwo_one / currentNOD) + "/" + (xTwo_two / currentNOD))
//     }
// }
// else if (D === 0) {
//     console.log("Дискриминант: " + D + "\n\n");
//
//     const x = (-b / (2*a))
//
//     if (x%1 === 0) {
//         console.log("Дискрименант равен 0,\nОдин корень: " + x)
//     }
//     else {
//         const xOne = -b;
//         const xTwo = 2*a;
//
//         const currentNOD = NOD(xOne, xTwo);
//         console.log("Дискрименант равен 0,\nОдин корень: " + (xOne / currentNOD) + "/" + (xTwo / currentNOD))
//     }
// }
// else {
//     console.log("Дискрименант меньше 0, корней нет!")
// }

