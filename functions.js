// // block of code
// // {
// //

// // }
// // dry

// function function_name() {
// function body
// }

// // function_name();
// // ? function declaration
// // function greet() {
// //   console.log("hello world");
// // }

// // greet();

// // ? function with parameter

// // let name = "hari";

// // function greet(name, age) {
// //   console.log("hello", name, age);
// // }

// // // console.log(name);

// // greet("Hari", 20);
// // greet("Shyam", 40);
// // greet();

// // ? default parameter
// // function greet(name = "Guest", age = "age is not provided") {
// //   console.log("hello", name, age);
// // }

// // greet("Hari", 20);
// // greet("Shyam", 40);
// // greet();

// // function greet(user) {
// //   console.log("Hello", user.name);
// // }

// // const user = {
// //   name: "Hari",
// // };

// // greet(user);

// // function with return type

// function add(a = 0, b = 0) {
//   //   let sum = a + b;
//   //   return sum;

//   return a + b;
// }

// const result = add(20, 30);

// console.log(result);
// console.log(add());

// //? function expression
// //? anonymous function

// const div = function (a, b) {
//   return a / b;
// };

// console.log(div(20, 10));

// // let modulus = function (a, b) {
// //   return a % b;
// // };

// //! arrow function

// let modulus = (a, b) => {
//   return a % b;
// };

// console.log(modulus(21, 10));

// let greet = (name) => {
//   console.log("hello", name);
// };

// greet("Shyam");

//! call back

// const greet = function () {

// }

const parent = (callback) => {
  console.log("hello from parent");
  callback("sagar");
};

const child = (name) => {
  console.log("hello from child", name);
};

parent(child);

// hof
// function -> takes function  input  or return function as output / both

// const parent = () => {
//   console.log("hello from parent");
//   const child = (name) => {
//     console.log("hello from child", name);
//   };

//   return child;
//   // callback("sagar");
// };

// const childFunction = parent();

// console.log(childFunction);
// childFunction("hello");
