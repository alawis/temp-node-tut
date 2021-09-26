const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`sum is : ${num1 + num2}`);
}

addValues();

//NOTES: When you have a function in a module, even without export, will run when you require it | function call executed
// - this is especially useful with a third party modules
// require - is used for importing modules