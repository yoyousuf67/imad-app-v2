var submit=document.getElementById('logout');
submit.onclick=function(){
     
     var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      if(request.status==200){
        
         alert('Logged out Successfully');
          window.open('/',"_self");
 }
      else if (request.status===403){alert('Error detected');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }
      }
};
      console.log('request sent');
      request.open('GET','http://yoyousuf67.imad.hasura-app.io/logout',true);
      request.send(null);
};



var submit=document.getElementById('doctor');
submit.onclick=function(){
     
     var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      if(request.status==200){
       var dbdetail= request.responseText;
      var span=document.getElementById('details');
    span.innerHTML=dbdetail.toString();
 }
      else if (request.status===403){alert('Error detected');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }
      }
};
      console.log('request sent');
      request.open('GET','http://yoyousuf67.imad.hasura-app.io/doctor',true);
};

var submit=document.getElementById('patients');
submit.onclick=function(){
     
     var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      if(request.status==200){
       var dbdetail= request.responseText;
      var span=document.getElementById('details');
    span.innerHTML=dbdetail.toString();
 }
      else if (request.status===403){alert('Error detected');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }
      }
};
      console.log('request sent');
      request.open('GET','http://yoyousuf67.imad.hasura-app.io/patient',true);
};

var submit=document.getElementById('rds');
submit.onclick=function(){
     
     var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request.readyState==XMLHttpRequest.DONE){
      if(request.status==200){
       var dbdetail= request.responseText;
      var span=document.getElementById('details');
    span.innerHTML=dbdetail.toString();
 }
      else if (request.status===403){alert('Error detected');
      }
      else if(request.status===500){
              alert('Something went wrong on server');
              
          }
      }
};
      console.log('request sent');
      request.open('GET','http://yoyousuf67.imad.hasura-app.io/rd',true);
};