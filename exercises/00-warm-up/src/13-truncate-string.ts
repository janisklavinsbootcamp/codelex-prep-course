export { };


function truncateString(valueToTruncate: string, letters: number) {
    return valueToTruncate.substring(0, letters);
}



console.log(truncateString("CODELEX", 4)); // Expected output: CODE


