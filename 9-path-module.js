const path = require('path');


//path separator
console.log(path.sep);

//join
const filePath = path.join('\content', 'generic', 'test.txt')

console.log(filePath);

//access basename
const base = path.basename(filePath)
console.log(base);

//absolute path - using path.resolve
const absolute = path.resolve(__dirname, 'content', 'generic', 'test.txt');
console.log(absolute);