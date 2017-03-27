
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
