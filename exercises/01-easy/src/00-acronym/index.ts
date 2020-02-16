import { Words } from "../19-word-count";

/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

//STEPS 1. Able to split sentence using gaps
//2. Find first letter of each word
//3.

var letters = [];
function parse(input: string) {
  var words = input
    .replace(/[`~!@#$%^&*()_|+\=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .split(/[ -]+/);
  var letters: string[] = [];
  words.forEach(word => letters.push(word.charAt(0)));
  var upperCase: string[] = [];
  letters.forEach(letter => upperCase.push(letter.toLocaleUpperCase()));
  console.log(letters);
  return upperCase.join("");
}

export { parse };
