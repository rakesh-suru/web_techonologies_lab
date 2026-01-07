var http=require('http');
var fs=require('fs');
console.log('Server is running: localhost:8080'); 

http.createServer(function (req,res){
 fs.readFile('demofile.html',function(err,data){
  res.writeHead(200,{'content-type':'text/html'});
  res.write(data);
  res.end();
 });
}).listen(8080);
