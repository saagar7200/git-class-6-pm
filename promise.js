// ? Promise
// ? an object reresents the eventual completion or failure of an aynchromous task.
//! states of promises
// * Pending
// * fullfilled
// * rejected

//! promise class
//? new Promise()

// ! generating promise
const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (error) {
        reject({ message: "get user failed" });
      }
      resolve({ id: 1, email: "abc@gmail.com" });
    }, 3000);
  });
};

const getPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (error) {
        reject({ message: "get post failed" });
      }
      resolve([
        { id: 1, title: "post 1" },
        { id: 2, title: "post 2" },
      ]);
    }, 4000);
  });
};

const getComments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (error) {
        reject({ message: "get comments failed" });
      }

      resolve([
        { id: 1, title: "comment 1" },
        { id: 2, title: "comment 2" },
      ]);
    }, 3000);
  });
};

//! handling promise
// getUser()
// .then((data) => {
//   console.log("then");
//   console.log(data);
// })
// .catch((error)=>{
// console.log(error)
// });

// ! handling multile nested promises
// ? promise chaining
// getUser()
// .then((data) => {
//   console.log(data);
//   return getPost()
// })
// .then((data)=>{
//     console.log(data)
//     return getComments()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
// console.log(error)
// });

// console.log(promise)
// promise.then

// console.log("ts1")
// console.log("ts1")
// console.log("ts1")
// console.log("ts1")
// console.log("ts1")
// console.log("ts1")
// console.log("ts1")

// trycatch & event loop

// !async await
//

console.log("start");

// const getUsers = async () => {
//   try {
//     const data = await getUser();
//     console.log(data);

//     const posts = await getPost();
//     console.log(posts);

//     const comments = await getComments();
//     console.log(comments);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUsers();

// fetch()
console.log("end");

// promise chain
fetch('https://jsonplaceholder.typicode.com/posts/12').then((response )=>{
  // console.log(response)
  return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})


// async await

const fethPosts = async() =>{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const post = await response.json()

    console.log(post)

    
  } catch (error) {
    console.log(error)
  }

}
fethPosts()




// event loop




// single threaded ->  single call stack add2()
// event loop
// timers   -> 3sec
// () => {
  //     let error = false;
  //   console.log("time up")
  // }


// js engine
// 1.  call stack  
// 2. event loop
// 3.macro task queue (callback queue)
//4. micro task queue

// 29 ,
// 29
// 29
// 29


const add = () =>{
  console.log(10 + 19)
}

add() 
add()

 setTimeout(() => {
      let error = false;
    console.log("time up")
  }, 3000);

add()
add()