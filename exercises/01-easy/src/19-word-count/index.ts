/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  str: string;

  constructor() {
    this.str = "";
  }

  count(str: string) {
    var inputToArr: any = str
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace("[\\t\\n\\r]+", " ")
      .split(" ");
    var ArrToObj: any = {};

    for (var i = 0; i < inputToArr.length; i++) {
      const index = inputToArr.indexOf("");
      if (index > -1) {
        inputToArr.splice(index, 1);
      }
    }

    console.log(inputToArr);

    for (var i = 0; i < inputToArr.length; i++) {
      var character = inputToArr[i];
      if (ArrToObj[character]) {
        ArrToObj[character]++;
      } else {
        ArrToObj[character] = 1;
      }
    }


    return ArrToObj;
  }

}

export { Words };
