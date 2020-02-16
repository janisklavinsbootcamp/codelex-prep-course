export { };

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(strFinal) {
  var newArray = [];
  for (var x = 0; x < strFinal.length; x++) {
    newArray.push(strFinal[x].charAt(0).toLowerCase().trim().replace("/", "").toUpperCase() +
      strFinal[x].slice(1).trim());
  }
  return newArray
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]

