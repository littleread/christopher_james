$(function() {
  console.log("ready!");

  // Initialize collapse button
  $('.button-collapse').sideNav({
    menuWidth: 150, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens
  });


  $('.slider').slider();
  
  // for (var i = 0; i < $('.hover_box')[0].children.length; i++) {
  //   var attrib = elem.attributes[i];
  //   if (attrib.specified) {
  //     console.log(attrib.name + " = " + attrib.value);
  //   }
  // }
  
  // 
  // $('.hover_box a img').hover(function() {
  //   $(this).stop().animate({
  //     opacity: .4
  //   }, 200);
  //   $('.video_text').removeClass('hide');
  // }, function() {
  //   $(this).stop().animate({
  //     opacity: 1
  //   }, 500);
  //   $('.video_text').addClass('hide');
  // });




});