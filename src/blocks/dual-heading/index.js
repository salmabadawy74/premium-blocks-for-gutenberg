const {
    __
} = wp.i18n;

const { 
    registerBlockType
} = wp.blocks;

const {
    Toolbar,
    PanelBody,
    SelectControl,
    TextControl
} = wp.components;
const {
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	RichText,
	MediaUpload,
	ColorPalette,
	URLInput
} = wp.editor;

registerBlockType( 'premium/dheading-block', {
	title: __('Dual Heading'),
	icon: 'editor-paragraph',
	category: 'premium-blocks', 
    attributes: {
        align: {
            type: 'string',
            default: 'center'
        },
        firstHeading: {
            type: 'array',
            source: 'children',
            default: 'Premium '
//            selector: `.${className}__first`
        },
        secondHeading: {
            type: 'array',
            source: 'children',
            default: 'Blocks'
//            selector: `.${className}__first`
        },
        titleTag: {
            type: 'string',
            default: 'h2'
        },
        display: {
            type: 'string',
            default: 'inline'
        }
        
    },
	
	edit: (props) => {
        
        const { setAttributes, isSelected, className } = props;
        const {
            contentAlign,
            firstHeading,
            secondHeading,
            titleTag,
            display
        } = props.attributes;
        const DISPLAY = [
            {
                value: "inline",
                label: "Inline"
            },
            {
                value: "block",
                label: "Block"
            }
        ];
        
        return [
            isSelected && ( <BlockControls key="controls">
                <AlignmentToolbar
                    value={contentAlign}
                    
                    onChange={newAlign => setAttributes({ contentAlign: newAlign })}
                />
            </BlockControls> ),
            isSelected && (
                <InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("General Settings")}
                    initialOpen={false}
                >
                    <TextControl
                        label={ __( 'First Heading' ) }
                        type="url"
                        value={ firstHeading }
                        onChange={ ( value ) => setAttributes( { firstHeading: value } ) }
                    />
                    <TextControl
                        label={ __( 'Second Heading' ) }
                        type="url"
                        value={ secondHeading }
                        onChange={ ( value ) => setAttributes( { secondHeading: value } ) }
                    />
                    <p>{ __('HTML Tag') }</p>
                    <Toolbar
                        controls={ '123456'.split( '' ).map( ( tag ) => ( {
                            icon: 'heading',
                            isActive: 'H' + tag === titleTag,
                            onClick: () => setAttributes( { titleTag: 'H' + tag } ),
                            subscript: tag,
                        } ) ) }
                    />
                    <SelectControl
                        label={__('Display')}
                        value={display}
                        options={DISPLAY}
                        onChange={ ( value ) => setAttributes( { display: value } ) }
                                
                    />
                </PanelBody>
                </InspectorControls>
            ),
            ( <div
                className={`${className}__container`}
                style={{textAlign: contentAlign }}
                >
                <h1
                    
                >
                    <span className={`${className}__first`} style={{display: display}}>{ firstHeading }</span>
                    <span className={`${className}__second`} style={{display: display}}>{ secondHeading }</span>
                </h1>
                
            </div>
            )
            
        ];
    
    },

	save: (props) => {
        const {
            align,
            firstHeading,
            secondHeading,
            contentAlign,
            className
        } = props;
        
        return [
            <div
                className={`${className}__container`}
                
            >
                <span className={`${className}__first`}>Hello</span>
                <span className={`${className}__second`}>World</span>
            </div>
        ];
        
    }
} );