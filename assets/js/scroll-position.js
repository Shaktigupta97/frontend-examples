$(window).scroll(function (event) {
  // Scroll position of windows
  var win_scroll_pos = $(window).scrollTop();

  // Element position in page
  var ele_position = $('#jumbotron-box').offset().top;

  // Get relative scroll position
  var scroll_position_ele = ele_position - win_scroll_pos;
  
  // var scroll = $('#jumbotron-box').scrollTop();
  

  console.log(scroll_position_ele);
});