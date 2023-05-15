
let images = [1,2,3,4,5,6];
let i =0;
let element = document.querySelector(".slider");
function changeSrc(){
if(i<images.length-1){i++}
else{i=0;}
document.getElementById("test").style.opacity = "1"
document.getElementById("test").src="media/cake"+images[i]+".jpg";
}



function fadeout(){document.getElementById("test").style.opacity = "0.4"}

setInterval(fadeout,1500)
setInterval(changeSrc,3000)
