console.log('Loaded!');

//change text of main text 
var element = document.getElementById('main-text');

element.innerHTML ='hey yo ';

//move the image 
var img= document.getElementById('madi');
function moveRight(){
    marginleft= marginleft + 10;
img.style.marginleft = marginleft +'px';
    }
img.onclick = function(){
    var interval = setInterval(moveRight,100);
};