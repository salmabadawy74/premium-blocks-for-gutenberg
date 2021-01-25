jQuery(document).ready(function ($) {
  setTimeout(() => {
    
      var $blogElement = $( ".premium-blog-wrap" );
      var $blogPost = $blogElement.find( ".premium-blog-post-outer-container" );
      var equalHeight = $( '.equal-Height' );
    
  
  
      //Force posts inner boxes to take the same height
      function forceEqualHeight ()
      {
        var heights = new Array();
        equalHeight
          .find( ".premium-blog-post-container" )
          .each( function ( index, post )
          {
            var height = $( post ).outerHeight();
            heights.push( height );
          } );
        var maxHeight = Math.max.apply( null, heights );
        $blogElement
          .find( ".premium-blog-post-container" )
          .css( "height", maxHeight + "px" );
        $blogElement.find(".premium-blog-post-container").css("background",'#f5f5f5')
      }
    forceEqualHeight();
  
    
  }, 1000);
});
