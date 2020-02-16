/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string) {
  var singleChars = str.split("");
  var backwardsStringArr = [];

  for (var i = str.length - 1; i >= 0; i--) {
    backwardsStringArr.push(singleChars[i]);
  }
  var reverseString = backwardsStringArr.join().replace(/[,]/gi, "");
  return reverseString;
}

export { reverse };
