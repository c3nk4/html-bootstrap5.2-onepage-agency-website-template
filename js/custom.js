
/* Projeler-Lightbox Start*/

  const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("bi", "bi-arrow-left-short", "lightbox-prev");
lightBoxNext.classList.add("bi", "bi-arrow-right-short", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);

/* Projeler-Lightbox End */

/*Accordion Start*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*Accordion End*/

/*Sayilar Start*/

"use strict"

document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".scroll-counter")

  elements.forEach(function(item) {
    item.counterAlreadyFired = false
    item.counterSpeed = item.getAttribute("data-counter-time") / 45
    item.counterTarget = +item.innerText
    item.counterCount = 0
    item.counterStep = item.counterTarget / item.counterSpeed

    item.updateCounter = function() {
      item.counterCount = item.counterCount + item.counterStep
      item.innerText = Math.ceil(item.counterCount)

      if (item.counterCount < item.counterTarget) {
        setTimeout(item.updateCounter, item.counterSpeed)
      } else {
        item.innerText = item.counterTarget
      }
    }
  })

  var isElementVisible = function isElementVisible(el) {
    var scroll = window.scrollY || window.pageYOffset
    var boundsTop = el.getBoundingClientRect().top + scroll
    var viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    }
    var bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    }
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    )
  }

  var handleScroll = function handleScroll() {
    elements.forEach(function(item, id) {
      if (true === item.counterAlreadyFired) return
      if (!isElementVisible(item)) return
      item.updateCounter()
      item.counterAlreadyFired = true
    })
  }

  window.addEventListener("scroll", handleScroll)
})

/*Sayilar End*/

/*Slider-Yorum Start*/

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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*Slider-Yorum End*/



