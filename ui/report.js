var submit=document.getElementById('logout');
submit.onclick=function(){
     
     var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      if(request.status==200){
      alert("logged out succcessfully");
       window.open('/',"_self");
      }else if (request.status===403){alert('Error detected');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }
      }
};
}; 
      request.open('GET','http://yoyousuf67.imad.hasura-app.io/logout',true);
      request.send(null);
