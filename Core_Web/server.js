const http = require('http')
const fs = require('fs')
const express = require('express');
const port = 3000
const app = express();
const server = http.createServer(function(req,res){
   res.writeHead(200, { 'Content-Type': 'text/html'})
   fs.readFile('/Users/warren_lazarraga/Programming_projects/Hackathon2023/Core_Web/core.html', function(error,data){
    if(error){
        res.writeHead(404)
        res.write('Error: File Not Found')
    } else {
        res.write(data)
    }
    res.end()
   })
   app.use(express.static( "/Users/warren_lazarraga/Programming_projects/Hackathon2023/Core_Web/core.css" ));
})

server.listen(port, function(error){
    if(error){
        console.log('wrong')
    } else{
        console.log('server is listening on port ' + port)
    }
})