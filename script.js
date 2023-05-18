
let images = [1,3,4,6];
let i =0;
let element = document.querySelector(".slider");


function changeSrc(){
  if(i<images.length-1){i++}
  else{i=0;}

document.getElementById("test").classList.add("fadeout");
setTimeout(()=>{
document.getElementById("test").src="media/cake"+images[i]+".jpg";
setTimeout(()=>{document.getElementById("test").classList.remove("fadeout")},50)

},3000)

}


setInterval(changeSrc,6000)
