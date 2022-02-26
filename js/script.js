// img hover 

var imagehoverText = document.querySelectorAll(".onhvr");
var imgon = document.querySelectorAll(".imghp");
// console.log(imgver);

for (let i = 0; i < imgon.length; i++) {
    imgon[i].addEventListener("mouseenter", function () {
        console.log("mouse is enter")
        imagehoverText[i].style.display = "flex";
        imgon[i].style.opacity = "0.4";
    });
    imgon[i].addEventListener("mouseout", function () {
        console.log("mouse is enter")
        imagehoverText[i].style.display = "none";
        imgon[i].style.opacity = "01";
    });
  
}

