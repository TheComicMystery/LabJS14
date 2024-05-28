const regex = /d(b+)(?=d)/gi;
const str = "cdbBdbsbz";
let result = [];
let match;
while ((match = regex.exec(str)) !== null) {
    result.push(match[0]);
}
console.log(result); // ["dbBd", "bB", "d"]
