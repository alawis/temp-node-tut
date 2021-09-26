// function passed in as an argument and executed later... convention: use cb for callback

function makeUpperCase (value) {
    console.log(value.toUpperCase());
}
// makeUpperCase('alawi')

//reversing string
function reverseName (name){
    console.log(name.split('').reverse().join(''));
}

function handleName (name, cb) {
    const fullName = `${name} sayid`
    cb(fullName)

}

handleName('alawi', makeUpperCase)
handleName('alawi', reverseName)

//can also pass regular function directly, see example below
handleName('susan', function(value){
    console.log(value)
})

//using arrow functions
handleName('susan', (value) => {
    console.log(value)
})

// callacks are very useful in array methods, setTimeout, event listeners etc. 

//event listeners
const btn = document.querySelector('.btn');

//eventlistener requires 2 arguments, name of event and callback function
btn.addEventListener('click', function(){
    console.log('hellow world!');
})