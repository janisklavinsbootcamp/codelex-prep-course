/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {

  var arrString = str;
  var objCharacters: any = {};

  for (var i = 0; i < arrString.length; i++) {
    var character = arrString.charAt(i);
    if (objCharacters[character]) {
      objCharacters[character]++;
    } else {
      objCharacters[character] = 1;
    }
  }
  var arrKeys = Object.keys(objCharacters);
  var arrValues: any = Object.values(objCharacters);

  var largestOfValues = arrValues[0];
  for (var i = 0; i < arrValues.length; i++) {
    if (largestOfValues < arrValues[i]) {
      largestOfValues = arrValues[i];
    }
  }

  var maxValue = arrValues.indexOf(largestOfValues);

  return arrKeys[maxValue];
}

export { maxChar };

