

('#popular-search').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsiveClass: true,
    autoplay:false,
    responsive: {
      0: {
        items: 1,
        margin: 20,
        stagePadding: 20,
      },
      600: {
        items: 1,
        margin: 20,
        stagePadding: 50,
      },
      1000: {
        items: 4
      }
    }
  });
  $('#top-videos').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsiveClass: true,
    autoplay:false,
    responsive: {
      0: {
        items: 1,
        margin: 20,
        stagePadding: 20,
      },
      600: {
        items: 1,
        margin: 20,
        stagePadding: 50,
      },
      1000: {
        items: 4
      }
    }
  });
  $('#most-popular-search.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 20,
        stagePadding: 20,
      },
      600: {
        items: 1,
        margin: 20,
        stagePadding: 50,
      },
      1000: {
        items: 4
      }
    }
  });