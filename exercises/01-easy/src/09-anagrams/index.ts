/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
  
  var stringACleanUp = stringA
    .replace(/[`~!@#$%^&*()_|+\=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .toLowerCase();
  var stringBCleanUp = stringB
    .replace(/[`~!@#$%^&*()_|+\=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .toLowerCase();

  var freqA: any = {};
  for (var i = 0; i < stringACleanUp.length; i++) {
    var character = stringACleanUp.charAt(i);
    if (freqA[character]) {
      freqA[character]++;
    } else {
      freqA[character] = 1;
    }
  }

  var StringAKeys = Object.keys(freqA)
    .sort()
    .toString();
  var StringAValues = Object.values(freqA)
    .sort()
    .toString();

  var freqB: any = {};

  for (var i = 0; i < stringBCleanUp.length; i++) {
    var character2 = stringBCleanUp.charAt(i);
    if (freqB[character2]) {
      freqB[character2]++;
    } else {
      freqB[character2] = 1;
    }
  }

  var StringBKeys = Object.keys(freqB)
    .sort()
    .toString();
  var StringBValues = Object.values(freqB)
    .sort()
    .toString();

  if (StringAKeys == StringBKeys && StringAValues == StringBValues) {
    return true;
  } else {
    return false;
  }
}

export { anagrams };
