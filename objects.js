// // objects
// // non primitive
// //? pass by ref
// //? mutable
// // const obj = {}

// // object literal {}
// // const obj = {

// // }

// const person = {
//   name: "Person name",
//   age: 10,
//   key: "key value",
// };

// // read
// //? dot notation
// let name = person.name;
// console.log(name);
// //? bracket notation

// console.log(person["age"]);

// const key = "name";

// console.log(person[key]);
// console.log(person["full name"]);

// // update / modify

// person.name = "Alice";
// person["age"] = 30;

// person.address = "xyz";

// console.log(person);

// delete person.key;
// // console.log(person.hasOwnProperty("key"));
// console.log(person.hasOwnProperty(key));

// const person = {
//   // !properties
//   name: "Person name",
//   age: 10,
//   address: {
//     city: "",
//     street: "",
//   },
//   //   !methods
//   speak() {
//     console.log("hello");
//   },
//   greet() {
//     console.log("hello");
//   },
// };

// person.greet();

// new Object()
// {}

// Object methods

// ? freeze
// person.address = "xyz";
// person.name = "alice";

// // !
// Object.freeze(person);

// person.email = "xyz";
// console.log(person);

// ! seal
// person.address = "xyz";

// !
// Object.seal(person);

// person.name = "alice";

// person.email = "xyz";
// console.log(person);

//
// console.log(Object.keys(person));
// console.log(Object.values(person));

// console.log(Object.entries(person));

// console.log(Object.isFrozen(person));

// es6
const person = {
  // !properties
  name: "Alice",
  age: 10,
  address: "ktm",
  email: "abc@gmail.com",
  phone: "5463",
};

// destructuring

// const { name, age } = person;
// console.log(name, age);

// rest operator (...)

// const rest = {
//     address: "ktm",
//   email: "abc@gmail.com",
// }

const { name, age, ...others } = person;

console.log(others);

// spread operator (...)

const ob2 = {
  phone: "123456",
};

const obj = { ...others, ...ob2 };
// const newObj = Object.assign(ob2, others);

console.log(obj);
