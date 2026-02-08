  // 1. Tracks the current slide for each of your 6 slideshows
  // Index:          0, 1, 2, 3, 4, 5
  let slideIndex = [1, 1, 1, 1, 1, 1]; 

  // 2. These are the exact class names used in your HTML
  let slideId = [
    "mySlides1", // Index 0 (Back2School)
    "mySlides2", // Index 1 (Holiday Spa)
    "mySlides3", // Index 2 (Cookies & Crafts)
    "mySlides4", // Index 3 (Fostercare)
    "mySlides5", // Index 4 (Military Spa)
    "mySlides6"  // Index 5 (Festivals)
  ]; 

  // 3. Initialize all 6 slideshows when the page loads
  for (let i = 0; i < slideId.length; i++) {
    showSlides(1, i);
  }

  // 4. The function called by your Prev/Next buttons
  function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
  }

  // 5. The core logic to hide/show images
  function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    
    // Safety check: if class doesn't exist, stop
    if (x.length === 0) return; 

    // Wrap around logic: go to first slide from last, or last from first
    if (n > x.length) { slideIndex[no] = 1; }    
    if (n < 1) { slideIndex[no] = x.length; }
    
    // Hide all images in this specific slideshow group
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    
    // Show the current active image
    x[slideIndex[no]-1].style.display = "block";  
  }

  // Your existing Navigation Toggle function
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }