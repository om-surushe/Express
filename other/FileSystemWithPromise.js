// this performs the task in a non bocking way
const {readFile} = require('fs').promises;

async function hello(){
    const file = await readFile('./hello.txt','utf-8');
    console.log(file)
}

hello();
console.log("Here");