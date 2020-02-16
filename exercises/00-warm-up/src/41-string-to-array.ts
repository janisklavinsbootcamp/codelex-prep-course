export { };


function stringToArray(inputString) {
    return inputString
        .toString()
        .split(' ')
}

console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
