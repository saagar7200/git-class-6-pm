
// let y;
// let x = 10

// y =()=>{

// }

// memory creation phase (complilation phse)
// x: 10
// hoist: () => {
//     console.log("hoisted");
// }
// execution phase
// 

// console.log(x) //undefined
 
// var x = 10

// console.log(x) //10

// console.log(hoist)
hoist()

var hoist =  () => {
    console.log("hoisted");
}

// function hoist () {
//     console.log("hoisted");
// }
const  z = 100


// let const 
// TDZ
console.log(y)


const  y = 100
const  x = 100


console.log(y)