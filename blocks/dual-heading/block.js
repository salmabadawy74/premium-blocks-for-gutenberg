(function( blocks, i18n, element, editor, components ){
    
    var el = element.createElement;
    var __ = i18n.__;
    var richText = editor.RichText;
    var alignToolBar = editor.AlignmentToolbar;
    var blockControls = editor.BlockControls;
    var colorPalette = editor.ColorPalette;
    
    i18n.setLocaleData( window.premium_dheading.localeData, 'premium-gutenberg' );
    
    blocks.registerBlockType(
        'premium/dheading-block',
        {
            title: __('Dual Heading', 'premium-gutenberg'),
            icon: 'editor-paragraph',
            category: 'premium-blocks',
            attributes: {
                align: {
                    type: 'string',
                    default: 'none'
                },
                firstHeading: {
                    type: 'array',
                    source: 'children',
                    selector: 'h2'
                },
                secondHeading: {
                    type: 'array',
                    source: 'children',
                    selector: 'h2'
                }
            },
            edit: function( props ){
                
                var firstHeading = props.attributes.firstHeading;
                var secondHeading = props.attributes.secondHeading;
                var align = props.attributes.align;
                
                function onChangeFirst( newText ) {
                    props.setAttributes( { firstHeading: newText } );
                }
                
                function onChangeSecond( newText ) {
                    props.setAttributes( { secondHeading: newText } );
                }
                
                function onChangeAlign ( newAlign ) {
                    props.setAttributes( { align: newAlign === undefined ? 'center' : newAlign } );
                }
                
                return [
                    el(
                        alignToolBar,
                        {   value: align,
                            onChange: onChangeAlign
                        },
                    ),
                    el('div',
                        { 
                            className: props.className,
                            style: { textAlign: align }
                        },
                        el(
                            'h2',
                            {
                                className: 'premium-dheading-wrap'
                            },
                            el(
                                richText,
                                {
                                    tagName: 'span',
                                    placeholder: __('First Heading...', 'premium-gutenberg'),
                                    value: firstHeading,
                                    onChange: onChangeFirst
                                }
                            ),
                            el(
                                richText,
                                {
                                    tagName: 'span',
                                    placeholder: __('Second Heading...', 'premium-gutenberg'),
                                    value: secondHeading,
                                    onChange: onChangeSecond
                                }
                            )
                        ),
                    )
                ];
                
            },
            save: function(props){
                return (
                    el('div',
                        {
                            className: 'premium-dheading-' + props.attributes.align
                        },
                        el(
                            'h2',
                            {
                                className: 'premium-dheading-wrap'
                            },
                            el(
                                richText.Content,
                                {
                                    tagName: 'span',
                                    value: props.attributes.firstHeading,
                                    className: 'premium-dheading-first'
                                }
                            ),
                            el(
                                richText.Content,
                                {
                                    tagName: 'span',
                                    value: props.attributes.secondHeading,
                                    className: 'premium-dheading-second'   
                                }
                            )
                        ),
                    )
                );
            }
        }
    );
    
} (
    window.wp.blocks,
    window.wp.i18n,
    window.wp.element,
    window.wp.editor,
    window.wp.components
) );