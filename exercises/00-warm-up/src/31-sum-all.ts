export { };

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

// const sumAll = function (num1: number, num2: number) {
//     var sumTotal =0;
//     for (var i = num1; i <= num2; i++) {
//         sumTotal = sumTotal + i
//     }
//     return sumTotal
// };

// console.log(sumAll(1, 4)); // Expected output: 10


const sumAll2 = function (start, end) {
    let array = []
    for (let i = start; i < end; i++) {
        array.push(i)
    }

    console.log(array)
}
console.log(sumAll2(1, 4));