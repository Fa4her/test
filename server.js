let http = require("http");
let fs = require("fs");
let socket_io = require("socket.io");

let server = http.createServer((req, res)=>{
  if (req.url==="/"){
    let a = 0;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(fs.readFileSync("./index.html"));
  } else if (req.url==="/send_location.js"){
    res.writeHead(200, {"Content-Type": "text/javascript"});
    res.end(fs.readFileSync("./send_location.js"));
  }
}).listen(process.env.PORT || 8000); 

let io = socket_io(server);