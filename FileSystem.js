const {readFile, readFileSync} = require('fs');

// Sync == Blocking 
// this is the blocking way of reading a file i.e it will keep others waiting till it reads the file

const txt = readFileSync('./hello.txt','utf-8');
console.log(txt);

// Non Blocking way
// the third arguement here is a callback functions

readFile('./hello.txt','utf-8',(err,txt) =>{
    console.log(txt);
})

console.log("Done reading the file");