
//* implicit / infer
let a = 10
// a ='hello'
a =20


// let b;
// b =20
// b = 'hello'

// explicit
// let b:string;
// b =20
// b = 'hello'


//! data types supported by typescript
//? 1. number
let c:number = 10
//? 2. string
let d:string = 'good evening'
//? 3. boolean
let e:boolean = false
//? 4. null
let f:null = null;
//? 5. undefined
let g:undefined = undefined;

// !
//? any

let h:any
h = 10
h='good evening'

console.log(h.toUpperCase())

//? unknown 
let i:unknown
i=200
i='unknown type'
if(typeof i === 'string'){

    console.log(i.toUpperCase())
}

// ? function return type 
// * void


//! array
let j:number[] = [1,2,34,5,6,7]
let k:Array<string> = ['a','b']
//* let k:string[] = ['a','b']


//!tuples
// * fixed length array
// ['abc',true,46]
let tuple:[number,number,number] = [12.23,23,6]
let l:[string,number,boolean]=['',23,false]

// ! object
// * interface

interface IUser{
    name:string;
    age:number
    phone?:string
}


const m:IUser = {
    name:'abc',
    age:23,
    phone:'123456',
}

console.log(m.name)

const n:IUser = {
    age:12,
    name:'xyz',
    // phone:'123456'
}





