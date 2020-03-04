$(document).ready(function() {
  
    $('.navbar-collapse ul li a').click(function(){
     /* always close responsive nav after click */
    $('.navbar-toggle:visible').click();
      }); 
    
   $('a[href*="#"]:not([href="#"])').click((e) => {
      const target = $(e.target.hash);
  
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
  
        return false;
      }
    });
    var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  });