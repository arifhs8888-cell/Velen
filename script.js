// Custom Scripts
document.addEventListener('DOMContentLoaded', function () {
    console.log('Elsey script loaded');

    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Testimonial Swiper
    var testimonialSwiper = new Swiper(".testimonialSwiper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".testimonialSwiper .swiper-pagination",
            clickable: true,
        },
    });
});
