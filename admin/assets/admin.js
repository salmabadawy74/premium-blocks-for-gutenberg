( function ( $ ){
    "use strict";
    
    $(".pb-checkbox").on("click", function(){
       if($(this).prop("checked") == true) {
           $(".pb-elements-table input").prop("checked", 1);
       }else if($(this).prop("checked") == false){
           $(".pb-elements-table input").prop("checked", 0);
       }
    });
   
    $( 'form#pbg-settings' ).on( 'submit', function(e) {
		e.preventDefault();
		$.ajax( {
			url: settings.ajaxurl,
			type: 'post',
			data: {
				action: 'pbg_settings',
				fields: $( 'form#pbg-settings' ).serialize(),
			},
            success: function( response ) {
				swal(
				  'Settings Saved!',
				  'Click OK to continue',
				  'success'
				);
			},
			error: function() {
				swal(
				  'Oops...',
				  'Something Wrong!',
				);
			}
		} );

	} );
    
    $( 'form#pb-maps' ).on( 'submit', function(e) {
		e.preventDefault();
		$.ajax( {
			url: settings.ajaxurl,
			type: 'post',
			data: {
				action: 'pb_maps',
				fields: $( 'form#pb-maps' ).serialize(),
			},
            success: function( response ) {
				swal(
				  'Settings Saved!',
				  'Click OK to continue',
				  'success'
				);
			},
			error: function() {
				swal(
				  'Oops...',
				  'Something Wrong!',
				);
			}
		} );

	} );
    
    
} )(jQuery);