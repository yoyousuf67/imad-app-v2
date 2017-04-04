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



var submit1=document.getElementById('doctor');
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
      request.open('GET','http://yoyousuf67.imad.hasura-app.io/doctor',true);
};

var submit2=document.getElementById('patients');
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
      request.open('GET','http://yoyousuf67.imad.hasura-app.io/patient',true);
};

var submit3=document.getElementById('rds');
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
      request.open('GET','http://yoyousuf67.imad.hasura-app.io/rd',true);
};