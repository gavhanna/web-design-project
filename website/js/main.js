$(document).ready(function () {
  const menuButton = document.getElementById("menu-button");
  const mobileNav = document.querySelector(".mobile-nav");

  $(".landing-text").css("display", 'none');
  $("#reserve-container").css("display", 'none');
  $("#menu-container").css("display", 'none');
  $("#about-container").css("display", 'none');
  $(".contact-container").css("display", 'none');
  $(".landing-text").slideDown(1500);
  $("#reserve-container").fadeIn(2000);
  $("#menu-container").fadeIn(2000);
  $("#about-container").fadeIn(2000);
  $(".contact-container").fadeIn(2000);
  $(".column").css("display", 'none');
  $(".column").fadeIn(2000);

  reserve-container

  menuButton.addEventListener("click", openMenu);

  function openMenu() {
    mobileNav.classList.toggle("is-open");
    this.classList.toggle("square");
  }

});


function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.getElementById('navbar').style.visibility = "hidden";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('navbar').style.visibility = "visible";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

/* About */

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
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function go(){
  var x = document.forms["myform"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;}
  var y = document.forms["myform"]["people"].value;
    if (y == "") {
        alert("Number of guests field must be filled out");
        return false;}
  var z = document.forms["myform"]["date"].value;
    if (z == "") {
        alert("Date must be filled out");
        return false;}
  var h = document.forms["myform"]["time"].value;
    if (h == "") {
          alert("Time must be filled out");
          return false;}
  var i = document.forms["myform"]["email"].value;
    if (i == "") {
          alert("Email must be filled out");
          return false;}

  alert('We will contact you within an hour');
}
