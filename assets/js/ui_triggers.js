$(".dropdown-trigger").dropdown();

$(document).ready(function(){
  $('.sidenav').sidenav();
});

// window width
const intViewportWidth = window.innerWidth;
  // element to target
  const vertEl = document.querySelector('#section1-vertWrap');
console.log('w', intViewportWidth);
if (intViewportWidth < 993 ) {
  // remove class
  vertEl.classList.remove('valign-wrapper');
} else {
  // remove class
  vertEl.classList.add('valign-wrapper');

}