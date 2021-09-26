// File built-in module FS
// there are 2 flavors: blocking or non-blocking - synchronously or async blocks

/*
const myFile = require('fs');

// const first = myFile.readFileSync('./content/first.txt', 'utf-8')
// const second = myFile.readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second);
 */


const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

// create new file
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})
// add property "flag: 'a'" to append to your file

console.log('done with this task');
console.log('starting the next task');


