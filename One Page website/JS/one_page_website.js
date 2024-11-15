// Open the Modal
function openModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "block";
    }
  }
  
  // Close the Modal
  function closeModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  let slideIndex = 1;
  showSlides(slideIndex); // Initialize the slideshow with the first slide
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  // Function to show the specified slide based on the current slideIndex
  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
  
    // Wrap around if 'n' is greater than the number of slides or less than 1
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
  
    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    // Remove "active" class from all dots (thumbnails)
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    // Display the current slide if available
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }
  
    // Set active class for the corresponding dot and update caption text
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active";
      if (captionText) {
        captionText.innerHTML = dots[slideIndex - 1].alt;
      }
    }
  }
  