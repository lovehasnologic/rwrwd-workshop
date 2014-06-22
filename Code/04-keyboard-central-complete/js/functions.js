/* Move Items Based on Viewport Size */
var responsiveRebuild = function(targetItem, smallPlacement, largePlacement, targetWidth){

  /* Get Browser Width */
  if($('html').hasClass('ltie9') == true) {
    var browserWidth = document.body.clientWidth;
  } else {
    var browserWidth = window.outerWidth;
  }

  /* Move Item On Trigger */
  if(browserWidth >= targetWidth) {
    $(targetItem).insertBefore($(largePlacement));
  } else {
    $(targetItem).insertBefore($(smallPlacement));
  }

  console.log((browserWidth >= targetWidth))
};

$(document).ready(function(){

  /* Item we're moving || Narrow width insert before || Large width insert before || Size */
  responsiveRebuild('.js--responsiveProductImage', '.description', '.l--rail .details', 750);

});

$(window).bind("resize", function(){

  /* Create an empty timeout variable */
  var responsiveTimeoutFunction = null;

  /* Clear it as the page resizes */
  clearTimeout(responsiveTimeoutFunction);

  /* Insert a function into the timeout that only runs after a quarter second (250ms) */
  responsiveTimeoutFunction = setTimeout(function(){

    /* Item we're moving || Narrow width insert before || Large width insert before || Size */
    responsiveRebuild('.js--responsiveProductImage', '.description', '.l--rail .details', 750);

  },250);

});











