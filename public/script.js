$(function() {
  console.log("ready!");
  
  // Video Gallery
  $(".html5gallery-title-text-0").replaceWith($(".music-title-box-more-videos"));

  $(".html5gallery-left-0, .html5gallery-right-0").click(function() {
    $(".html5gallery-title-text-0").replaceWith($(".music-title-box-more-videos"));
  });
  
  // $(document).scroll(function() {
  //   var y = $(this).scrollTop();
  //   if (y > 1) {
  //     $('.nav-wrapper').fadeIn();
  //   } else {
  //     $('.nav-wrapper').fadeOut();
  //   }
  // 
  // });
  
  // SideNav
  // $('.button-collapse').sideNav({
  //   menuWidth: 300, // Default is 300
  //   edge: 'right', // Choose the horizontal origin
  //   closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  //   draggable: true // Choose whether you can drag to open on touch screens
  // });
  // 
  // // Slider
  // $('.slider').slider();
  // // Pause slider
  // $('.slider').slider('pause');
  // // Start slider
  // $('.slider').slider('start');
  // // Next slide
  // $('.slider').slider('next');
  // // Previous slide
  // $('.slider').slider('prev');
  

});