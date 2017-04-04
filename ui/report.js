

var submit=document.getElementById('logout');
var submit1=document.getElementById('doctors');
var submit2=document.getElementById('patients');
var submit3=document.getElementById('rds');
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




submit1.onclick=function(){
     
     var request1=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request1.readyState==XMLHttpRequest.DONE){
      if(request1.status==200){
       var dbdetail= request.responseText;
      var span=document.getElementById('details');
    span.innerHTML=dbdetail.toString();
 }
      else if (request1.status===403){alert('Error detected');
      }
      else if(request1.status===500){
              alert('Something went wrong on server');
              
          }
      }
};
      console.log('request sent');
      request1.open('GET','http://yoyousuf67.imad.hasura-app.io/doctor',true);
};


submit2.onclick=function(){
     
     var request2=new XMLHttpRequest();
request2.onreadystatechange=function(){
  if(request2.readyState==XMLHttpRequest.DONE){
      if(request2.status==200){
       var dbdetail= request.responseText;
      var span=document.getElementById('details');
    span.innerHTML=dbdetail.toString();
 }
      else if (request2.status===403){alert('Error detected');
      }
      else if(request2.status===500){
              alert('Something went wrong on server');
              
          }
      }
};
      console.log('request sent');
      request2.open('GET','http://yoyousuf67.imad.hasura-app.io/patient',true);
};


submit3.onclick=function(){
     
     var request3=new XMLHttpRequest();
request3.onreadystatechange=function(){
  if(request3.readyState==XMLHttpRequest.DONE){
      if(request3.status==200){
       var dbdetail= request.responseText;
      var span=document.getElementById('details');
    span.innerHTML=dbdetail.toString();
 }
      else if (request3.status===403){alert('Error detected');
      }
      else if(request3.status===500){
              alert('Something went wrong on server');
              
          }
      }
};
      console.log('request sent');
      request3.open('GET','http://yoyousuf67.imad.hasura-app.io/rd',true);
};