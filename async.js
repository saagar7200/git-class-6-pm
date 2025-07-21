// setTimeout
// setInterval


// asynchronous js

// callback

// const child = (x) =>{
//     console.log('child')
// }

// function parent (callback) {
// // task
// const x = 10

// callback(10)
// }

// !both are same
// parent(child)

// parent(() =>{
//     console.log('child')
// })

const register = (callback) => {
  setTimeout(() => {
    console.log("user register");
    callback(null, { id: 1, email: "abc@gmail.com", pass: "123456" });
  }, 3000);
};

const login = (callback) => {
  setTimeout(() => {
    console.log("login user");
    callback(null, { id: 1, email: "abc@gmail.com" });
  }, 4000);
};

const getProfile = (id) => {
  setTimeout(() => {
    console.log("get user profile for user", id);
  }, 1000);
};

// register();
// login();
// getProfile()

register((error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
  login((err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    getProfile((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
      getProfile((err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
        getProfile(data.id);
      });
    });
  });
});

// task

// call back hell
// pyramid of doom

register(() => {
  log(() => {
    log(() => {
      log(() => {
        log(() => {
          log(() => {});
        });
      });
    });
  });
});




// promise  & async await

// es6

// typescript

// node js