// // scope
// // varibale declaration
// //  var, let ,const ,
// // function

// // ? Scopes
// //* 1. global  scope
// //* 2. block scope
// // {

// // }
// //* 3. function scope (local)
// //* 4. lexical scope

// //! global scope
// let global_let = "Global Let";
// const global_const = "Global const";
// var global_var = "Global var";

// // console.log(global_let);
// // console.log(global_var);
// // console.log(global_const);

// //! block

// if (true) {
//   //   let block_let = "block Let";
//   //   const block_const = "block const";
//     var block_var = "block var";
//   //   console.log("block", block_let);
//   //   console.log("block", block_var);
//   //   console.log("block", block_const);
// }

// // console.log("global", block_let);
// // console.log("global", block_const);
// console.log("global", block_var);

// //! function scope

// function scope() {
//   let function_let = "function Let";
//   const function_const = "function const";
//   var function_var = "function var";
//       let a =100

//   if(true){
//       let a =10
//       console.log(a) //10

//     }
//     console.log(a) //10

//   console.log("function", function_let);
//   console.log("function", function_var);
//   console.log("function", function_const);
// }

// scope();

// // console.log("global", function_let);
// // console.log("global", function_const);
// // console.log("global", function_var);

//* 4. lexical scope

//   const parent_var = "global parent";


function parent() {
//   const parent_var = "parent";
  // console.log(child_var)

  function child() {
    const child_var = "children";
//   const parent_var = "child parent var";

    function children() {
      console.log("children", parent_var);
    }
    children();

    console.log("child", parent_var);
    console.log("child", child_var);
  }

  child();
}

parent();
