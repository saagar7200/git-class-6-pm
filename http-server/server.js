import http from "http";

console.log("server ");

//* creating http server

const httpServer = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/": {
        res.writeHead(200,{
            "content-type":'text/html'
        })
      res.end("Welcome to Home");
      break;
    }
    case "/users": {
      res.end("<h1>Welcome to User Page</h1>");
      break;
    }
    default: {
      res.end(`<h1>page not found for path ${req.url}</h1>`);
    }
  }
});

httpServer.listen(8080, "localhost", () => {
  console.log("server is running at http://localhost:8080");
});
