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
try{
  particlesJS.load('particles-js', '/assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
} catch (err) {}


try{
  var scene = document.getElementById('ml-parallax');
  var parallaxInstance = new Parallax(scene);
} catch (err) {}



function functionSequence(){
  $('#pre-loader').animate({
    'top': -100 + '%',
    'opacity': 0
  }, 500, function(){
    $(this).remove();
  });
}

// =========================================================
// On Load
// =========================================================
if (window.addEventListener) {
  window.addEventListener('load', function () {
    functionSequence();
  });
} else {
  window.attachEvent('onload', function () {
    functionSequence();
  });
}