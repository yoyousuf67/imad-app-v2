
var submit1=document.getElementById('submit2');
 submit1.onclick=function(){
     
     //create a request object
var request=new XMLHttpRequest();

//capture response and store variable
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      //take action
      if(request.status==200){
         alert('User Created Successfully');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }
      }
 }; 
 var username=document.getElementById('username').value;
 var password=document.getElementById('password').value;
 console.log(username);
 console.log(password);
 //var name= nameInput.value;
//make a request
request.open('POST','http://yoyousuf67.imad.hasura-app.io/create-user',true);

request.setRequestHeader('Content-type','application/json');
request.send(JSON.stringify({username: username, password:password}));

     //make a request to the server and send the name
     
 };
