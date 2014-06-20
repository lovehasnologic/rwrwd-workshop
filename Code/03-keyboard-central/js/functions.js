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
    $(targetItem).prepend($(largePlacement));
  } else {
    $(targetItem).prepend($(smallPlacement));
  }
};

$(document).ready(function(){

  /* responsiveRebuild(); */

});

$(window).bind("resize", function(){

  var responsiveTimeoutFunction = null;
  clearTimeout(responsiveTimeoutFunction);
  responsiveTimeoutFunction = setTimeout(function(){
    /* responsiveRebuild(); */
  },250);

});
