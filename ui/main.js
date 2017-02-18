console.log('Loaded!');
//change the text
/*var element= document.getElementById('maintext');
element.innerHTML='new value';*/

//move the image
var img=document.getElementById('madi');
var marginleft=0;
function moveRight(){
    marginleft=marginleft+1;
    img.style.marginleft+"px";
}
madi.onclick=function(){
  img.style.marginleft='100px';
  var interval=setInterval(moveRight,50);
};