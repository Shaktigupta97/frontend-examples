$('#open-side-nav').on('click', function(){
  // var side_nav_ele = $('#side-nav');

  $('#side-nav').toggleClass('open');

  // if(side_nav_ele.hasClass('open')){
  //   side_nav_ele.removeClass('open');
  // } else {
  //   side_nav_ele.addClass('open');
  // }
});

/** Load Particle JS Container */
particlesJS.load('particles-js', '/assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});