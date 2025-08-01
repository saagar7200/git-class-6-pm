
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
    age:number;
}


const m:IUser = {
    name:'abc',
    age:23,
}

console.log(m.name)

interface IUser2 extends IUser {
    email:string;
    phone:string
}

//! function 
// * parameter
//* return 

// * parameter type
const add = (x:number,y:number) =>{
    console.log( x + y)
}

add(10,20)

// * return type 
const mult = (a:number,b:number):number =>{
 return a * b

}

// ! not returning  value
const sub = (x:number,y:number):void =>{
    console.log( x - y)
}

//! interface type
const getUser = (user:IUser2):IUser2 =>{

    return user
}



// ! class
class Person {
     name:string 
    protected email:string //? protected property
    private password:string //? private property
     age:number
    constructor(name:string,email:string,password:string,age:number){
            this.name = name
            this.email = email
            this.password = password
            this.age = age
    }

    getName (){
        return this.name
    }

}


const hari = new Person('Hari','hari@gmail.com','password',45)

class Acountant  extends Person{

    // TODO: this class can access protected property email but can not access private property password

}

console.log(hari.name)
console.log(hari.age)

// ! Property 'password' is private and only accessible within class 'Person'.
//? console.log(hari.password)

// ! Property 'email' is protected and only accessible within class 'Person' and its subclasses.
//? console.log(hari.email)



//! type alias

// object type with type

type A = {
    name:string;
    age:number;
}

type B = {
    password:string;
    email:string
}


// ! intersection (&) and union (|)

type C = A & B
type D = A | B

const user :C = {
age:12,
name:'',
password:'',
email:''
}

const user2 :D = {
email:'',
password:''
}

type ID = number | string

const userId:ID= 12
const userId1:ID= 'USERID';



// enum
enum Role  {
    ADMIN = 'ADMIN',
    USER = 'USER',
    SUPER_ADMIN = 'SUPER_ADMIN',
    GUEST = 'GUEST'
}

// ! enum as type

interface z {
    name:string;
    role:Role
}

//! enum as value

const y:z = {
    name:'',
    role:Role.ADMIN
}










