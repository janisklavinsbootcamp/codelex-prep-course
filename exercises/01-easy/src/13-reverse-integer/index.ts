/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {

  var intToString = int.toString().split("");
  var backwardsIntArr = [];

  if (int > 0) {
    for (var i = intToString.length - 1; i >= 0; i--) {
      backwardsIntArr.push(intToString[i]);
    }
    var outputInt = backwardsIntArr
      .join()
      .replace(/[,]/gi, "")
      .replace(/^0+/, "");
    var output = parseInt(outputInt, 10);
    return output;
  } else {
    backwardsIntArr.push(intToString[0]);
    for (var i = intToString.length - 1; i > 0; i--) {
      backwardsIntArr.push(intToString[i]);
    }
    var outputInt = backwardsIntArr
      .join()
      .replace(/[,]/gi, "")
      .replace(/^0+/, "");
    var output = parseInt(outputInt, 10);
    return output;
  }
}

export { reverse };
