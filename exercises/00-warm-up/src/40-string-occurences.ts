export { };

const count = (textOne, textTwo) => {

    return textOne
        .toLowerCase()
        .match((new RegExp(textTwo, 'g')) || [])
        .length
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
