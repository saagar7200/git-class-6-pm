// // key  value
// indexed type [0 - indexed]
// // list
// // []

// // const user1 = 'dsj'
// // const user2 = 'dsj'
// // const user3 = 'dsj'
// // const user4 = 'dsj'
// const users = ["user1", "user2"];
// // const user = [{},{}]

// const numbers = [1, 2, 3, 4, 5, 6];

// // const firstEl = numbers[0];
// // console.log(firstEl);
// // console.log(numbers[5]);

// //! adding element
// // ? form end push()
// // numbers.push(23, 45, 67);
// // console.log(numbers);
// // ? from begin unshift()
// console.log(numbers.length);
// numbers.unshift(746, 847, 98);

// //! removing
// // ? form end pop()
// // const lastEl = numbers.pop();
// // console.log(lastEl);

// // ? from begin shift()

// console.log(numbers.shift());

// console.log(numbers);

// // delete numbers[0];

// console.log(numbers.length);

// const numbers = [54, 756, 762.9, 64];
// 0 - indexed
//
// bracket []
// array_name[index]

// numbers.push(456, 87, 98);

// console.log(numbers);
// numbers.pop();

// console.log(numbers);
// // get/remove
// // shift()
// // console.log(numbers.shift());

// // add

// // unshift()
// // numbers.unshift(2,3,4,5)

// console.log(numbers.unshift(1, 2, 3, 4));

// console.log(numbers);

//

// leh -> 8
// 7

// console.log(numbers[0]);
// console.log(numbers.length);
// // last element
// console.log(numbers[numbers.length - 1]);
// const numbers = [10, 20, 54, 756, 762.9, 64, 30, 21, 1200];

//? add elelment
// end -> numbers.push(10)
// start -> unshift(10)

// ?remove element
// end -> pop()
// start -> shit()

// at()

// bracket [index]
//

// string []

// console.log(numbers.at(1));
// console.log(numbers[1]);
// console.log(numbers[numbers.length - 2]);
// console.log(numbers.at(-2));


// array methods
// indexOf

// console.log(numbers.indexOf(1000));
// console.log(numbers.lastIndexOf(10));

// // includes

// console.log(numbers.includes(20, 2));

// console.log(numbers.join("-"));

// ! higher order methods
// loop
// ? forEach

// const callback = (value, i, array) => {
//   console.log(value, i, array);
//   return value;
// };
// numbers.forEach(callback)

// numbers.forEach((value, i, array) => {
//   console.log(value, i, array);
//   return value;
// });

//? map
// [a,b,c,d]  => [a2,b2,c2,d2]
// doesnot modify original array
// return mapped aaray
// loop through each element and  applies maping login to each.

// const squired = numbers.map((value, index) => {
//   console.log(value);
//   return "x";
// });

// console.log(squired);
// console.log(numbers);

const numbers = [12, 20, 54, 756, 762];


//? filter
// returns new array 
// does not modify original array 

// const add  = (a,b) =>  a + b
// const square  = a =>  a * a
// console.log(add(12,23))



const evenNumbers =  numbers.filter((value,index) => value % 2 === 0)

// console.log(evenNumbers)



// reduce
const sum =  numbers.reduce((acc,value)=> {
  return acc + value
},10)

// console.log(sum)



// findIndex
// to query array
const index = numbers.findIndex((value)=> value === 200)

const value = numbers.find(value => value > 256)


// const nm  = [1,2,3].map(val => )
const users = [
  {
    name:'abc',
    id:1,
    // slug:'abc-1'
  },
   {
    name:'bcd',
    id:2
  },
  {
    name:'bcd',
    id:3
  }

]

// map ->  slug:bcd-1



// const mappedArray = users.map(user =>{

//   // user.slug = `${user.name}-${user.id}`

//    // return  user

//   return {
//     ...user,
//     slug:`${user.name}-${user.id}`
//   }

// })

console.log(mappedArray)




// [43.56.78.90.65]


const orders = [
  {
    userId:'',
    items:[
      {
        product:'',
        qty :3,
        totalAmt:5000

      },
      {
        product:'',
        qty :3,
        totalAmt:3000
      },
      {
        product:'',
        qty :3,
        totalAmt:30000
      }
    ],


  }
]

const totalAmt = orders[0].items.reduce((acc,item)=> acc+= item.totalAmt,0)

// console.log(totalAmt)


// console.log(value)
// arr.forEach -> loop through array -> return -> no
// arr.map   -> map to mappig logic  -> return new array -> does not modify the original array
// arr.filter -> use to filter out array -> return new array -> does not modify the original array
// arr.reduce -> reduce array to single value (calculate sum of each element of num array)
// arr.find((user) => user.id === id) => returns value  (first matching)
// arr.findIndex((user) => user.id === id) => returns index of first matching value



// every
const isEvenArray = numbers.every((number) => number % 2 === 0)
console.log(isEvenArray)

// some 
const isEvenExists = numbers.some((number) => number % 2 === 0)

console.log(isEvenExists)


// 
// splice
// modify original array
const nums = [1,2,3,4,5]

// arr.splice(start_index,delete_count, item1,item2,...itemn)

nums.splice(2,0,654,687,453)

console.log(nums)


