let slideIndex = new Array(35).fill(1);

let slideId = [
  "mySlides0", "mySlides1", "mySlides2", "mySlides3", 
  "mySlides4", "mySlides5", "mySlides6", "mySlides7"
];

// Triggers the sliders once the page elements load
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < slideId.length; i++) {
    showSlides(1, i);
  }
});

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  
  if (x.length === 0) return; 

  if (n > x.length) { slideIndex[no] = 1; }    
  if (n < 1) { slideIndex[no] = x.length; }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  x[slideIndex[no]-1].style.display = "block";  
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}