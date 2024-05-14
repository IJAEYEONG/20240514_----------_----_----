var fs = require('fs')
const http = require('http');
const url = require('url');
const objec1 = require('./module/templateHTML.js')
const test2 = require('./module/test1.js')
const test3 = require('./module/test2.js')
const test4 = require('./module/test3.js')
const test5 = require('./module/test4.js')


const server = http.createServer(function(request, response){
  let _url =request.url;
  let queryData = url.parse(_url,true).query;
  let pathname = url.parse(_url,true).pathname;
    console.log(queryData.id);
    if(pathname=== "/") {
      if(queryData.id === undefined) {
        const generatedHTML = objec1.HTML();
        response.end(generatedHTML)
      }
    }
      else if(pathname ==='/test1'){
      if(queryData.id===undefined){
        const test = test2.HTML();
        response.end(test)
      }
    }else if(pathname ==='/test2'){
      if(queryData.id===undefined){
        const test = test3.HTML();
        response.end(test)
      }
    }else if(pathname ==='/test3'){
      if(queryData.id===undefined){
        const test = test4.HTML();
        response.end(test)
      }
      
  }else if(pathname ==='/test4'){
    if(queryData.id===undefined){
      const test = test5.HTML();
      response.end(test)
    }
  }
  else {
    response.writeHead(404); // 페이지가 정상적으로 출력되면 200, 오류페이지면 404.
    response.end('NOT FOUND'); //화면출력하는부분
  }
});

server.listen(8080);