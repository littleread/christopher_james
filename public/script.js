$(function() {
  console.log("ready!");
  
  // Initialize collapse button
  $('.button-collapse').sideNav({
       menuWidth: 150, // Default is 300
       edge: 'right', // Choose the horizontal origin
       closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
       draggable: true // Choose whether you can drag to open on touch screens
     }
   );
  
  // Video Gallery
  $(".html5gallery-title-text-0").replaceWith($(".music-title-box-more-videos"));
  
  $(".html5gallery-left-0, .html5gallery-right-0").click(function() {
    $(".html5gallery-title-text-0").replaceWith($(".music-title-box-more-videos"));
  });
  
  (function() { 
    Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');
    Galleria.run('.galleria');
}());
  

});