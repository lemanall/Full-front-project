window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 125) {
    console.log("salam");
  }
});
function myFunction(x) {
  x.classList.toggle("change");
  var active = document.getElementById("new-dropdown");
  // active.classList.toggle("visible");*/
  var openDrop = document.querySelector("#new-dropdown");
  openDrop.classList.toggle("active");
}
function newFunction() {
  var openCart = document.querySelector(".minipup");
  openCart.classList.toggle("slowly");
}
$(document).ready(function () {
  $(".main-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navigation: true,
    dots: false,
    
    transitionStyle: "scaleUp",
    navigationText: [
      "<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>",
    ],
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });
});
$(document).ready(function () {
  $(".second_carusel").owlCarousel({
    loop: true,
    items: 3,
    dots: false,
    margin: 50,
    loop: true,
    dots: true,
    pullDrag: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});
$(document).ready(function () {
  $(".slider-carusel").owlCarousel({
    // loop: true,
    items: 3,
    margin: 70,
    //autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});
$(document).ready(function () {
  $(".newSlider").owlCarousel({
    loop: true,
    items: 4,
    dots: false,
    margin: 40,
    
    pullDrag: true,
   
    responsive: {
      0: { items: 1 },
      768: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  });
});
$(document).ready(function () {
  $(".text-slider").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    
    
    pullDrag: true,
   
   
  });
});
$(document).ready(function () {
  $(".picture-slide").owlCarousel({
    loop: true,
    items: 4,
    dots: false,
    
    loop: true,
    
    
    
    responsive: {
      0: { items: 1 },
      768: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  });
});
$(document).ready(function () {
  $(".logo-slide").owlCarousel({
    loop: true,
    items: 3,
    dots: false,
    margin: 40,
    autoplay: true,
    pullDrag: true,
    autoplayTimeout: 2000,
    responsive: {
      0: { items: 1 },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});