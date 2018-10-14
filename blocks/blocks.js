( function( blocks, i18n, element ) {
	var el = element.createElement;
	var children = blocks.source.children;
	var BlockControls = wp.blocks.BlockControls;
	var AlignmentToolbar = wp.blocks.AlignmentToolbar;
	var MediaUploadButton = wp.blocks.MediaUploadButton;
	var InspectorControls = wp.blocks.InspectorControls;
	var TextControl = wp.blocks.InspectorControls.TextControl;
	var SelectControl = wp.blocks.InspectorControls.SelectControl;
    var h = (wp.blocks.InspectorControls.RangeControl, wp.blocks.InspectorControls.ToggleControl, wp.blocks.InspectorControls.SelectControl, wp.blocks);
    var Color = h.ColorPalette;
    var backColor = h.ColorPalette;

	blocks.registerBlockType( 'gfblocks/pa-gfb-title', { // The name of our block. Must be a string with prefix. Example: my-plugin/my-custom-block.
		title: i18n.__( 'Premium Title' ), // The title of our block.
		icon: 'heart', // Dashicon icon for our block. Custom icons can be added using inline SVGs.
		category: 'common', // The category of the block.
		attributes: { // Necessary for saving block content.
			titleOne: {
				type: 'array',
				source: 'children',
				selector: '.pa-gfb-title',
			},
			alignment: {
				type: 'string',
				default: 'center',
			},
            color: {
				type: 'string',
			},
            backgroundColor: {
				type: 'string',
			},
		},
		edit: function( props ) {

			var focus = props.focus;
			var focusedEditable = props.focus ? props.focus.editable || 'titleOne' : null;
			var alignment = props.attributes.alignment;
			var attributes = props.attributes;

			function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
			}
		    
            function onChangeColor( newColor ) {
				props.setAttributes( { color: newColor } );
			}
            
            function onChangeBackColor( newBackColor ) {
				props.setAttributes( { backgroundColor: newBackColor } );
			}

			return [
				!! focus && el( // Display controls when the block is clicked on.
					blocks.BlockControls,
					{ key: 'controls' },
					el(
						blocks.AlignmentToolbar,
						{
							value: alignment,
							onChange: onChangeAlignment,
						}
					),
				),
				!! focus && el(
					blocks.InspectorControls,
					{ key: 'inspector' },
					el( 'div', { className: 'components-block-description' }, // A brief description of our block in the inspector.
						el( 'p', {}, i18n.__( 'Premium Title options.' ) ),
                    el( 'h3', {}, i18n.__( 'Select Title Color' ) ), // The number of columns.
                    el(
						Color,
						{
							type: 'string',
                            onChange: onChangeColor,
						}
					),
                    el( 'h3', {}, i18n.__( 'Select Title Background Color' ) ), // The number of columns.
                    el(
						backColor,
						{
							type: 'string',
                            onChange: onChangeBackColor,
						}
					),
					),
				),
				el( 'div', { className: props.className + ' pa-gfb-outer-container' },
					el( 'div', {
						className: 'pa-gfb-inner-container'
					},
						el( 'div', {
							className: 'pa-gfb-title-container', style: { textAlign: alignment } },
							el( blocks.Editable, {
								tagName: 'h3',
								className: 'pa-gfb-title pa-gfb-title',
                                style: { color: attributes.color, backgroundColor: attributes.backgroundColor },
								inline: true,
								placeholder: i18n.__( 'Premium Title' ),
								value: attributes.titleOne,
								onChange: function( newTitle ) {
									props.setAttributes( { titleOne: newTitle } );
								},
								focus: focusedEditable === 'titleOne' ? focus : null,
								onFocus: function( focus ) {
									props.setFocus( _.extend( {}, focus, { editable: 'titleOne' } ) );
								},
							} ),
						),
					),	
				)
			];
		},

		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			return (
				el( 'div', { className: props.className + ' pa-gfb-outer-container' },
					el( 'div', {
						className: 'pa-gfb-inner-container'
					},
						el( 'div', { className: 'pa-gfb-title-container', style: { textAlign: attributes.alignment } },
							el( 'h3', { className: 'pa-gfb-title' , style: { color: attributes.color, backgroundColor: attributes.backgroundColor }  }, attributes.titleOne ),
						),
					),
				)
			);
		},
	} );

} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element,
);