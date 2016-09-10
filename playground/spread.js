// function add(a,b) {
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));
//
// var groupA = ['Ian', 'Jara'];
// var groupB = ['Tony', 'Justin'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final)

var personOne = ['Mark', 32];
var personTwo = ['Jara', 36];
//Hi <<name>>, you are XX

function greet(name, age) {
  console.log('Hello ' + name + ', you are ' + age + ' years old.');
}

greet(...personOne);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var finel = ['Mark', ...names];
//Hello <<name>>

function greetTwo(names) {
  names.forEach(function(name) {
    console.log('Hello ' + name);
  });
}

greetTwo(names);
