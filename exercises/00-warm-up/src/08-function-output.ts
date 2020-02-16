export {};

function getNumber() {
  return Math.random() * 10;
}

const result = getNumber(); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}

// export {};

// function trimWord(word: string): string {
//   return  word.trim();
// }

// const result = trimWord("  CODELEX ");
// console.log(result); // Expected output: "CODELEX"