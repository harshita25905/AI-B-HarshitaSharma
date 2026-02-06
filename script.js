const fs = require('node:fs')

// fs.writeFile("myfile.txt", "helooo",
//     function(err){
//         if(err) console.error(err);
//         else console.log("no error");
//     }
// )

// fs.appendFile("myfile.txt", "helooo",
//     function(err){
//         if(err) console.error(err);
//         else console.log("no error");
//     }
// )

// fs.rename("myfile.txt", "newfile.txt",
//     function(err){
//         if(err) console.error(err);
//         else console.log("no error");
//     }
// )

// fs.copyFile("newfile.txt", "./anotherfile.txt",
//     function(err){
//         if(err) console.error(err);
//         else console.log("no error");
//     }
// )

// const http = require("http");

// const server =  http.createServer((req, res) =>{
//     if(req.url=="/"){
//     res.end("This is home page")
// }
// if(req.url=="/about"){
//     res.end("This is about page")
// }
// if(req.url=="/profile"){
//     res.end("This is the profile Page")
// }
// })


// server.listen(3000);


const express = require('express');
const app = express();

app.use(function(req,res, next){
    console.log("Middleware running");
    next();
});

app.get('/', function(req,res){
    res.send('hello world ');
})
app.get('/profile', function(req,res){
    res.send('This is the profile page');
})

app.listen(3000);
