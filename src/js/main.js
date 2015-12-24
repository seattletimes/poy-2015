require("./lib/social");
require("./lib/ads");
// var track = require("./lib/tracking");

var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));

var gallery = document.querySelector(".gallery");
gallery.classList.add("js-active");
//start the first slide
// var slideNumber = window.location.hash.length ? window.location.hash.replace("#", "") * 1: 0;

document.querySelector(".gallery .slide").classList.add("show");

var slides = qsa(".slide");
var first = slides[0];
var last = slides.pop();

var changeSlide = function() {
  var isNext = this.classList.contains("next");
  var currentSlide = document.querySelector(".slide.show");
  var nextSlide = isNext ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
  if (!nextSlide || !nextSlide.classList.contains("slide")) {
    return;
  }
  currentSlide.classList.remove("show");
  nextSlide.classList.add("show");
  if (nextSlide == first) {
    gallery.classList.add("first");
  } else {
    gallery.classList.remove("first");
  }
  if (nextSlide == last) {
    gallery.classList.add("last");
  } else {
    gallery.classList.remove("last");
  }
}

qsa(".gallery .button").forEach(el => el.addEventListener("click", changeSlide));

document.querySelector(".show-caption").addEventListener("change", function(e) {
  if (this.checked) {
    gallery.classList.remove("hide-captions");
  } else {
    gallery.classList.add("hide-captions");
  }
});