var submit=document.getElementById('logout');
submit.onclick=function(){
     
     var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      if(request.status==200){
           var request1=new XMLHttpRequest();
request1.onreadystatechange=function(){
  if(request1.readyState==XMLHttpRequest.DONE){
      if(request1.status==200){
         alert('Logged out Successfully');
          window.open('/',"_self");
      }}};
      request1.open('GET','http://yoyousuf67.imad.hasura-app.io/logout',true);
      }else if (request.status===403){alert('Error detected');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }
      }
};
}; 
      request.open('GET','http://yoyousuf67.imad.hasura-app.io/check-login',true);
      request.send(null);