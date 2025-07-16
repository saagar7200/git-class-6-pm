// const  bibek = {
//     name:'Bibek',
//     age:25,
//     email:'bibekshah425@gmail.com',
//     getEmail(){

//     }
// }

// const obj = new Object()

// const  sagar = {
//     name:'Sagar',
//     age:27,
//     email:'rsaagar7200@gmail.com'
// }

// const  sagar_koirala = {
//     name:'Sagar',
//     age:27,
//     email:'rsaagar7200@gmail.com'
// }

// class Person {
//     #age
//   constructor(name, age, email) {
//     this.name = name;
//     this.#age = age;
//     this.email = email;
//   }

//   getEmail(ammount) {

//     return this.email;
//   }

//   getAge (){
//     return this.#age
//   }
// }

// const bibek = new Person("bibek", 25, "bibekshah425@gmail.com");
// const sagar = new Person("sagar", 25, "sagar@gmail.com");

// console.log(bibek.getEmail());
// console.log(sagar.getAge());


// static methods

// class mathUtils {


//     static add (x,y){
//         return x + y
//     }

// }

// class Calculator {
//     static add (x,y){
//             return x + y;
//     }
// }

 
class Calculator {
    static add (x,y){
        return x + y;
    };
 
    static subtract (x,y){
        return x - y;
    };
 
    static divide (x,y){
        return x / y;
    };
 
    static multiply (x,y){
        return x * y;
    };
}
 
console.log(Calculator.add(15,3))
console.log(Calculator.subtract(15,3))
console.log(Calculator.divide(15,3))
console.log(Calculator.multiply(15,3))
 



// calulator

// const math = new mathUtils()

// console.log(mathUtils.add(10,29))

//TODO: task 
// ? class -> Account(account_holder_name,initial_balance)
//! private balance 
//? methods -> deposit , withdraw , inquiary_balance , get account detail.
// 





// inheritance

class Person {
  constructor(name,  email) {
    this.name = name;
    this.email = email;
  }

  getEmail() {

    return this.email;
  }

  
}


class Student extends Person {
   
    constructor(name,email,section,roll_no,grade){  
        super(name,email)
        this.grade = section;
        this.roll_no = roll_no;
        this.section = grade;
    }

  
}

const std = new Student('abc','abc@gmail.com','A',21,'12');
const bibek = new Person("bibek", "bibekshah425@gmail.com");

console.log(std)
console.log(bibek.getEmail())
console.log(std.getEmail())
