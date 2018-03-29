$(document).ready(function(){
  $(".column").css("display",'none');
  $(".column").slideDown(1500);
});

$(document).ready(function(){
  $(".landing-text").css("display",'none');
  $(".landing-text").slideDown(1500);
});

const menuButton = document.getElementById("menu-button");
const mobileNav = document.querySelector(".mobile-nav");

menuButton.addEventListener("click", openMenu);

function openMenu() {
  mobileNav.classList.toggle("is-open");
  this.classList.toggle("square");
}
function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.getElementById('navbar').style.display = "none";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('navbar').style.display = "block";

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

