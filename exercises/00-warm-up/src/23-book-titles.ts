export { };

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

//const getTheTitles = booksToArray => {};

const pushTitlesToArray = []
function getTheTitles(booksToArray) {
  for (var i = 0; i < booksToArray.length; i++) {
    pushTitlesToArray.push(booksToArray[i].title)
  }
  return pushTitlesToArray
}



console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
