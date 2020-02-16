/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    
  var newArray = [];
  var max = Math.max.apply(null, array);
  console.log(max);

  for (var i = array.length; i--; ) {
    if (newArray[i] === max) newArray.splice(i, 1);
    newArray.push(array[i]);
  }
  return Math.max.apply(null, newArray);
}

export { secondLargest };
