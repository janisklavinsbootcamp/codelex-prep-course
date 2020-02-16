/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {private  _rows: number[][]
  private _columns: number[][]

  constructor(input: string) {
      this._rows = Matrix.parseRows(input)
      this._columns = Matrix.transpose(this.rows)
  }

  get rows(): number[][] {
      return this._rows
  }

  get columns(): number[][] {
      return this._columns
  }

  static parseRows(input: string): number[][] {
      return input.split('\n').map(Matrix.parseRow)
  }

  static parseRow(row: string): number[] {
      return Array.from(row.trim().split(' '), Number)
  }

  static transpose(input: number[][]): number[][] {
      const transposed: number[][] = []

      for (let i = 0; i < input.length; i += 1) {
          for (let j = 0; j < input[i].length; j += 1) {
              if (transposed.length <= j) {
                  transposed[j] = []
              }

              transposed[j].push(input[i][j])
          }
      }

      return transposed
  }
}

export { Matrix };




// //1. count the number of /n line break expressions located in the input string (numberOfRows = (/n count) + 1)
// var input = "89 1903 3\n18 3 1\n9 4 800"
// var numberOfRows = input.match(/\n/g).length + 1
// console.log(numberOfRows)
// //2. clean up the string, and push characters to a new array
// var arr = input.replace(/\n/g,' ').replace(/\s\s+/g, ' ').trim().split(" ")
// console.log(arr)
// //3. count the amount of elements to be inserted in each row (amountOfElements = array.length / number of rows )
// var countSubArrayElements = arr.length / numberOfRows
// console.log(countSubArrayElements)

// //4. push amountOfElements to numberOfRows, myMatrix is created.
// var myMatrix = []
// var i,j,temparray,chunk = countSubArrayElements;
// for (i=0,j=arr.length; i<j; i+=chunk) {
//     temparray = arr.slice(i,i+chunk);
//    myMatrix.push(temparray)
// }
// console.log(myMatrix)

// //5. create a function to extract specified row from matrix
// var r = 0;
// console.log(myMatrix[r])

// //6. create a function to extract specified column from matrix
// var n = 0;
// const arrayColumn = (inputMatrix, n) => inputMatrix.map(x => x[n]);
// console.log(arrayColumn(myMatrix, n))
