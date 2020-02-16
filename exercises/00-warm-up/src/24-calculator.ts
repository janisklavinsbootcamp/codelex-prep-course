export { };

function add(num1: number, num2: number) {
    return num1 + num2
}

function subtract(num1: number, num2: number) {
    return num1 - num2
}

function sum(sumArrayElements) {
    let sumTotal = 0;
    for (let num of sumArrayElements) {
        sumTotal = sumTotal + num
    }
    return sumTotal
}

function multiply(multiplyArrayElements) {
    let multiTotal = 1;
    for (var i = 0; i < multiplyArrayElements.length; i++) {
        multiTotal = multiTotal * multiplyArrayElements[i]
    }
    return multiTotal
}

function power(baseNumber, powerUp) {
    return Math.pow(baseNumber, powerUp)
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
