const template = {
  
  HTML:function test(title,list,body,control){
    
    return`
    <!DOCTYPE html>
    <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  body{
    display: flex;
    justify-content: center;
  }
  body > div:first-child {
    width: 60%;
    height: 200px;
    display: flex;
    position: absolute;
    top: 50px;
  }
  body > div>div:first-child {
    width: 100%;
    height: 100px;
    position: absolute;
    top: 150px;
  }
  body > div>div:first-child>div{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  body > div>div:first-child>div>div{
    width: 150px;
    height: 50%;
    border-radius: 5px;
    box-sizing: content-box;
    margin-top: 10px;
    margin-right: 10px;
    text-align : center;
    line-height : 50px;
    
  }
    a {
    text-decoration: none;
    
   }
    body > div>div:nth-child(2){
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: center;
      background: #86DEA9;
      position: absolute;
      top: 250px;
      
    }
    body > div>div:first-child>div>div:nth-child(1){
      background-color: #D9D9D9;
    }
    body > div>div:first-child>div>div:nth-child(2){
      background-color: #BDDE86;
      
    }
    body > div>div:first-child>div>div:nth-child(3){
      background: #86DEA9;
    }
    body > div>div:first-child>div>div:nth-child(4){
      background-color: #86A9DE;
    }
    body > div>div:first-child>div>div:nth-child(5){
      background-color: #AD86DE;
    }
    body > div>div:nth-child(2)>div{
      display:flex;
      align-items:center;
    }
    h5{
      text-align : center;
      line-height : 200px;
    }
  </style>
  <title>Document</title>
</head>
  <body>
    <div>
      <div>
        <div class="content">
          <div OnClick="location.href ='http://localhost:8080/'" style="cursor:pointer;" >HOME</div>
          <div OnClick="location.href ='http://localhost:8080/test1'" style="cursor:pointer;" >Data Type</div>
          <div OnClick="location.href ='http://localhost:8080/test2'"style="cursor:pointer;" >Object & Array</div>
          <div OnClick="location.href ='http://localhost:8080/test3'" style="cursor:pointer;" >Function</div>
          <div OnClick="location.href ='http://localhost:8080/test4'" style="cursor:pointer;" >if & for</div>
        </div>
      </div>
      <div>
        <div><h5>Object & Array</h5></div>
      </div>
    </div>
    
  </body>
</html>`;},
    }
module.exports=template;