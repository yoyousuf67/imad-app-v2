 

        function validateForm() {
            var x = document.forms["myForm"]["username"].value;
    var y= document.forms["myForm"]["password"].value
    if (x === ""||y==="") {
        alert("Name/Password must be filled out");
        return false;
    }
            else {return true;}
        }

var submit1=document.getElementById('submit1');
 submit1.onclick=function(){
     
     //create a request object
var request=new XMLHttpRequest();

//capture response and store variable
request.onreadystatechange=function(){
    if (validateForm()){
  if(request.readyState==XMLHttpRequest.DONE){
      //take action
      if(request.status==200){
         alert('User Created Successfully');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }
     } 
        else {alert('Invalid Username/Password');}
        
    }
 }; 
 console.log(x);
 console.log(y);
 //var name= nameInput.value;
//make a request
request.open('POST','http://yoyousuf67.imad.hasura-app.io/create-user',true);

request.setRequestHeader('Content-type','application/json');
request.send(JSON.stringify({username: x, password:y}));

     //make a request to the server and send the name
     
 };
