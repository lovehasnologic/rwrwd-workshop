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

/*   responsiveRebuild('.js--responsiveProductImage', '.description', '.details', 750); */

});

$(window).bind("resize", function(){

  /*
var responsiveTimeoutFunction = null;
  clearTimeout(responsiveTimeoutFunction);
  responsiveTimeoutFunction = setTimeout(function(){
    responsiveRebuild('.js--responsiveProductImage', '.description', '.details', 750);
  },250);
*/

});











