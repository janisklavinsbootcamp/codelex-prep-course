export { };

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(text) {
    let firstHalf = text.split('@')[0];
    let secondHalf = text.split('@')[1];
    let firstThree = firstHalf.substring(0, 3);
    let newFirstHalf = firstThree + "...";
    return newFirstHalf + "@" + secondHalf;

}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
