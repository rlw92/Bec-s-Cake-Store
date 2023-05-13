
let images = [1,2,3,4,5,6];
let i =0;
function changeSrc(){
if(i<images.length-1){i++}
else{i=0;}

document.getElementById("test").src="media/cake"+images[i]+".jpg";

}

let element = document.querySelector(".slider");


//cannot figure out how to get this to work
function fade() {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);


        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
            },50);

}

setInterval(changeSrc,3000)
