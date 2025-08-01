import http from "http";
import express from "express";

const app = express();


const httpServer = http.createServer(app);

app.get("/", (req, res) => {
  // req.url
  res.send("<h1>Welcome to my home page</h1>");
});

app.get("/about", (req, res) => {

  console.log(req.url)
  let html = `
        <html>
        <body>
        <div>
        <h1>About us</h1>
        <h3>Phone: 9865374070</h3>
        <h3>Email: rsaagar7200@gmail.com</h3>
        </div>
        </body>
        
        </html>

  `;
  res.send(html);
});

// url -> http://localhost:8080/users
// users
app.get("/users", (req, res) => {
  // req.url
  res.send("<h1>get all users</h1>");
});



app.get("/users/:userId", (req, res) => {
  // req.url
  const id = req.params.userId
  res.send(`<h1>get user by id ${id}</h1>`);
});
// contact

// servces

httpServer.listen(8080, "localhost", () => {
  console.log("server is running at http://localhost:8080");
});





// rest api



//* parts of req objects
// ? 1. req.url  ->  use to get path of current request
// ? 1. req.params  ->  use to get parameter of current request
// * used to  implement dynamic routing  
