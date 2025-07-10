// // vs code -> text editor
// // nodejs



// // javascript
// // dynamic typed, interpreted

// // 

// // console.log(2 + 5)

// // let const var


// // let number1 = 2;

// // // let number1 =10
// // let number2 = 5;

// // const sum = number1 + number2
// // const sum = 2

// // console.log(sum)



// // data types 
// // premitives 
// // 1. number (integer , float)
// let x = 10
// let y = 12.7
// // 2. string (char)

// let user1 = 'Ram'
// let user1Age = 30
// let user2 = "user1"
// // let greet = 'hello user1'

// // template literal -> ``
// let greet = `Hello ${user1}`

// // console.log(greet)

// // 3. boolean (true,false)

// const isUser = true 
// const isAdmin = false 


// let num = null;

// // console.log(num)

// num = 100

// // console.log(num)

// // 5.undefined

// // 4.null

// // non premitive

// // object 

// // person 
// // product
// // object literal {}

// let product = {
//    name :'Water bottle',
//    price : 200,
//    brand:'Bagmati',
// //    key:'this is key'
// }

// let productName = product.name


// //? read 

// //! 1. dot notation
// // console.log(product.price)
// //! 2. bracket notation
// // console.log(product['brand'])

// //? modify

// product.price = 300
// product['name'] = 'keyboard'

// //? adding new properties

// product['rgbLight'] = true


// // console.log(product)



// let key = 'name'

// // console.log('product key',product[key]) //keyboard


// // array
// const numbers = [12,3,4,5,8,12,4]

// console.log(numbers[0])
// console.log(numbers.length)
// console.log(numbers)

// //? add new element
// //
// numbers.push(120,12,57,899)
// console.log(numbers)


// // const lastEl = numbers.pop()

// // console.log(lastEl)


// // console.log(numbers)



// // functions
// // array methods

// // user  
// const userName = 'Sagar bhandari'
// const phone = '9865374070'
// const email ='rsaagar7200@gmail.com'

// // [1,2,3,4,]
// // [[1,2],[3,4,]]

// // [name,phone,email]


// // const user = [['Sagar bhandari','9865374070','rsaagar7200@gmail.com'],['Sagar bhandari','9865374070','rsaagar7200@gmail.com']]
// // const userB = ['Sagar bhandari','9865374070','rsaagar7200@gmail.com']

// const usr = {
//    name:'Sagar bhandari',
//    phone:'9865374070',
//    email:'rsaagar7200@gmail.com'
// }

// const user = [
//    {
//    name:'Sagar Bhandari',
//    phone:'9865374070',
//    email:'rsaagar7200@gmail.com'
// },
// {
//    name:'Sagar Bhandari',
//    phone:'9865374070',
//    email:'rsaagar7200@gmail.com'
// }]



// function
//! function_name
//! function body
//! argumnets
//! parameters
// retrun type

// function declaration

function function_name (){
// body
}


// const x = 20

// parameter
// function add (a,b){
//    // body
//    const sum = a + b
//    return sum
// }

// // calling function
// // !arguments
// const result = add(40,50)
// console.log(result)
// // !arguments
// const sum =  add(400,5000)

// console.log(sum)





// function expression

const add = function (a,b) {

   return a + b
}

const result = add(20,50)

console.log(result)

// arrow function
const addition = (a,b) => {
   return a + b

}

console.log(addition(30,30))


// call back function 
// hof











