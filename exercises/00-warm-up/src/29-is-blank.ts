export { };

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(checkIfBlank: string): boolean {
    var a = checkIfBlank;
    if (typeof checkIfBlank !== "string") {
        return true
    } else if (a.trim() === "") {
        return true
    }
    else {
        return false
    }
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false

