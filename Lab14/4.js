const str = "Java Script";
const regex = /(\w+)\s(\w+)/;
const newStr = str.replace(regex, "$2, $1");
console.log(newStr); // "Script, Java"
