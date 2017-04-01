
var submit=document.getElementById('logout');
 submit.onclick=function(){
     
     //create a request object
var request=new XMLHttpRequest();
//capture response and store variable
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      //take action
      if(request.status==200){
            
         alert('Logged Out Successfully');
          window.open('/',"_self");
         
      }
      else{alert('Some error occurred');
}}}};
request.open('GET','http://yoyousuf67.imad.hasura-app.io/logout',true);