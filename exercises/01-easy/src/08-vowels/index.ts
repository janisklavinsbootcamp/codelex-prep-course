/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
  
  var wordsSplitArray = s.toLowerCase().split("");
  var amountOfVowels = 0;

  for (var i = 0; i < wordsSplitArray.length; i++) {
    if (
      wordsSplitArray[i] === "a" ||
      wordsSplitArray[i] === "e" ||
      wordsSplitArray[i] === "e" ||
      wordsSplitArray[i] === "i" ||
      wordsSplitArray[i] === "o" ||
      wordsSplitArray[i] === "u"
    ) {
      amountOfVowels++;
    }
  }

  return amountOfVowels;
}

export { vowels };

//A E I O U
