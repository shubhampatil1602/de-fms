var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Login and Sign Up
let x = document.querySelector("#login");
let y = document.querySelector("#register");
let z = document.querySelector("#btn");
        

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "243px";
}
        
function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "57px";
}

// my bookings
function openBookings() {
  window.location.href = "bookings.html";
}