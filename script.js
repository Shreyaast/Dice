var roll_btn=document.getElementById("roll_btn")
roll_btn.addEventListener("click",function(e){
    
    
    var randomno1=Math.floor(Math.random()*6)+1
var randomimg1="assets/dice"+randomno1+".png"
// console.log(randomno1)
// console.log(randomimg1)
var img1=document.getElementById("img1")
img1.setAttribute("src",randomimg1)


var randomno2=Math.floor(Math.random()*6)+1
var randomimg2="assets/dice"+randomno2+".png"
// console.log(randomno2)
// console.log(randomimg2)
var img2=document.getElementById("img2")
img2.setAttribute("src",randomimg2)


var respointer=document.getElementById("res")
if(randomno1>randomno2)
respointer.innerHTML="player 1 won"
else if(randomno2>randomno1)
respointer.innerHTML="player 2 won"
else
respointer.innerHTML="Draw"

})