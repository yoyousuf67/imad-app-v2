//counter code
var button=document.getElementById('counter');
var counter=0;

button.onclick=function(){
    
//create a request object
var request=new XMLHttpRequest();

//capture respinse and store variable
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      //take action
      if(requset.status==200){
      var counter= request.responseText;
      var span=document.getElementById('count');
    span.innerHTML=counter.toString();
      }
  }  
  //not done ignore it
}; 
//make a request
reqest.open('GET','http://yoyousuf67.imad.hasura-app.io/counter',true);
request.send(null);
 };