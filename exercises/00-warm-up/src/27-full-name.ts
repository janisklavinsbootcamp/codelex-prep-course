export { };

/**
 * Create a function called fullName, which concatenates two strings together
 */

function fullName(name: string, lastName: string) {
   return name.concat(' ').concat(lastName);

}

console.log(fullName("John", "Doe")); //Expected output: 'John Doe'
