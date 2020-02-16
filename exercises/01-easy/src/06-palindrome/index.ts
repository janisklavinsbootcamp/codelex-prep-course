/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string) {

  var singleChars = str.split("");
  var backwardsStringArr = [];

  for (var i = str.length - 1; i >= 0; i--) {
    backwardsStringArr.push(singleChars[i]);
  }
  
  var stringToBeChecked = backwardsStringArr.join().replace(/[,]/gi, "");
  console.log(stringToBeChecked);
  if (str === stringToBeChecked) {
    return true;
  } else {
    return false;
  }

}

export { palindrome };
