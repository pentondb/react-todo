// // function add(a, b) {
// //     return a + b;
// // }
// // console.log(add(3, 1));

// // var toAdd = [9, 5];
// // console.log(add(...toAdd));

// var groupA = ['Derek', 'Vernon'];
// var groupB = ['Theresa'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person = ['Derek', 57];
var person2 = ['Vernon', 58];

function greet(name, age) {
    console.log(`Hi, ${name}, you are ${age}.`);
}

greet(...person);
greet(...person2);

var names = ['Derek','Vernon'];
var final = ['Lucy', ...names];
function loopy(arr) {
    arr.forEach(name => {
        console.log(`Hi, ${name}`);
    });
}
loopy(final);