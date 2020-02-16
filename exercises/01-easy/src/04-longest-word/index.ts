/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {

  var wordsSplitArray = sen
    .replace(/[`~!@#$%^&*()_|+\=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .split(/[ -]+/);
  var wordLengthArray = [];

  for (var i = 0; i < wordsSplitArray.length; i++) {
    wordLengthArray.push(wordsSplitArray[i].length);
  }
  if (wordLengthArray == null || wordLengthArray.length == 0) {
    return -1;
  }

  var indexOfLongestWord = wordLengthArray.indexOf(
    Math.max(...wordLengthArray)
  );

  return wordsSplitArray[indexOfLongestWord];
  
}

export { longestWord };
