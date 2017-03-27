 


var submit=document.getElementById('submit1');
 submit.onclick=function(){
     
     //create a request object
var request=new XMLHttpRequest();
//capture response and store variable
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      //take action
      if(request.status==200){
            
         alert('User Created Successfully');
      }else if (request.status===403){alert('Username/password is incorrect');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }
      }
  //not done ignore it
}; 
 var username1=document.getElementById('username1').value;
 var password1=document.getElementById('password1').value;
 console.log(username1);
 console.log(password1);
 //var name= nameInput.value;
//make a request
if(username1===""||password1===""){alert("Username/password is incorrect")}
else{
request.open('POST','http://yoyousuf67.imad.hasura-app.io/create-user',true);

request.setRequestHeader('Content-type','application/json');
request.send(JSON.stringify({username: username1, password:password1}));
}

     //make a request to the server and send the name
     
 };