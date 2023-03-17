document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide', {
      type: 'slide',
      perPage: 3,
      gap: 20,
      autoplay: true,
      pauseOnHover: false,
      breakpoints: {
        768: {
          perPage: 2
        },
        576: {
          perPage: 1
        }
      },
      rewind:true
    }).mount();
  });
  