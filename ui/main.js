//counter code
var button=document.getElementById('counter');
var counter=0;

button.onclick=function(){
    
//create a request object
var request=new XMLHttpRequest();

//capture response and store variable
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      //take action
      if(request.status==200){
         //capture a list of names and render it as a list
         var names=request.responseText;
         names=JSON.parse(names);
     
         var list='';
         for(var i=0;i<names.length;i++){
             list += '<li>'+ names[i]+ '<li>';
         }
         var ul=document.getElementById('namelist');
         ul.innerHTML=list;
      }
  }  
  //not done ignore it
}; 
//make a request
request.open('GET','http://yoyousuf67.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);
 };
 
 //submit name
 var nameInput=document.getElementById('name');
 var name= nameInput.value;
 var submit=document.getElementById('submit_btn');
 submit.onclick=function(){
     //make a request to the server and send the name
 };