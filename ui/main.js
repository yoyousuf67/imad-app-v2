/*//counter code
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
      var counter= request.responseText;
      var span=document.getElementById('count');
    span.innerHTML=counter.toString();
      }
  }  
  //not done ignore it
}; 
//make a request
request.open('GET','http://yoyousuf67.imad.hasura-app.io/counter',true);
request.send(null);
 };*/
 
 //submit username,pasword to login

 var submit=document.getElementById('submit_btn');
 submit.onclick=function(){
     
     //create a request object
var request=new XMLHttpRequest();

//capture response and store variable
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      //take action
      if(request.status==200){
            //capture a list of names and render it as a list
       /* var names=request.responseText;
        names=JSON.parse(names);
         var list='';
         for(var i=0;i<names.length;i++){
             list += '<li>'+names[i]+ '</li>';
         }
         var ul=document.getElementById('namelist');
         ul.innerHTML=list;*/
         alert('Logged in Successfully');
          window.open("ui/report.html","_self");
      }else if (request.status===403){alert('Forbidden Request');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }else if(request.status===404){
              alert('Invalid Credentials');
          }
      }
  //not done ignore it
}; 
 var username=document.getElementById('username').value;
 var password=document.getElementById('password').value;
 console.log(username);
 console.log(password);
 //var name= nameInput.value;
//make a request
request.open('POST','http://yoyousuf67.imad.hasura-app.io/login',true);

request.setRequestHeader('Content-type','application/json');
request.send(JSON.stringify({username: username, password:password}));

     //make a request to the server and send the name
     
 };