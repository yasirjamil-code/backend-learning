const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my homepage by 232");
  } else if (req.url === "/about") {
    res.end("Welcome to my about page by 232");
  } else if (req.url === "/contact") {
    res.end("Welcome to my contact page by 232");
  } else {
    res.end(`
      <h1>Ooops!</h1>
      <p>we can't find this page</p>
      <a href='/'>Back To Home</a>
    `);
  }
});

server.listen(3000);
 