// single threaded  -> one task at a time 
// callstack -> single

// regular function  



// children
// GEC

// let a = 10
// function add (b){
    
//      console.log(a + b)
// }

// add(20)
// add(40)


// closure


// function add (a){

//     function children (b){

//         console.log(a + b)
//     }

//     return children
// }



// const add10 =  add(10)
// const add20 =  add(20)

// add10(10)
// add10(20)
// add20(20)

function counter (){
    let count = 1

    return {
        increment:() => count += 1,
        decrement:() => count -= 1
    }
}

// counter1     counter2
//  count = 1   count = 1
//  count = 2   count = 1
//  count = 3   count = 1
//  count = 4   count = 1
//  count = 4   count = 2
 

const counter1 = counter()
const counter2 = counter()
const counter3 = counter()
const counter4 = counter()
const counter5 = counter()
const counter6 = counter()

console.log(counter1.increment())
console.log(counter1.increment())
// console.log(counter1.decrement())
console.log(counter1.increment()) //4
console.log(counter2.increment()) //5






