/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number) {

  let strings = n.toString();
  let indexOfDot = strings.indexOf(".");
  //Checks if num contains dot

  if (indexOfDot > -1) {
    strings = strings.slice(0, strings.indexOf("."));
  }
  let last = strings.charAt(strings.length - 1);
  if (
    last === "2" ||
    last === "4" ||
    last === "6" ||
    last === "8" ||
    last === "0"
  ) {
    return true;
  } else {
    return false;
  }
  
}

export { isEven };
