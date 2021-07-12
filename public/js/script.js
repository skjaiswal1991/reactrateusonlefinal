jQuery(document).ready(function($) {
"use strict";
    $("#main-carousel").owlCarousel({
 
      navigation : true, // Show next and prev buttons
	  items:1,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 

});