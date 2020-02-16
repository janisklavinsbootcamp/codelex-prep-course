export { };

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (libraryObject) => {

  return ("Already read" + " '" + libraryObject[0].title + "' by " + libraryObject[0].author + ".") + '\n' +
    ("Already read" + " '" + libraryObject[1].title + "' by " + libraryObject[1].author + ".") + '\n' +
    ("You still need to read" + " '" + libraryObject[2].title + "' by " + libraryObject[2].author + ".")
};
console.log(showStatus(library));

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/