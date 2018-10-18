const {
    __
} = wp.i18n;

const { 
    registerBlockType
} = wp.blocks;

const {
    Toolbar,
    PanelBody,
    PanelColor,
    SelectControl,
    TextControl,
    RangeControl,
    CheckboxControl
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
        },
        firstColor: {
            type: 'string',
            default: '#6ec1e4'
        },
        firstSize: {
            type: 'number',
            default: '20'
        },
        firstBackground: {
            type: 'string'
        },
        firstBorderType: {
            type: 'string',
            default: 'none'
        },
        firstBorderWidth: {
            type: 'number',
            default: '0'
        },
        firstBorderRadius: {
            type: 'number',
            default: '0'
        },
        firstBorderColor: {
            type: 'string'
        },
        firstMargin: {
            type: 'number',
            default: '0'
        },
        firstPadding: {
            type: 'number',
            default: '0'
        },
        firstClip: {
            type: 'boolean',
            default: false
        },
        firstClipColor: {
            type: 'string'
        },
        secondColor: {
            type: 'string',
            default: '#54595f'
        },
        secondSize: {
            type: 'number',
            default: '20'
        },
        secondBackground: {
            type: 'string'
        },
        secondBorderType: {
            type: 'string',
            default: 'none'
        },
        secondBorderWidth: {
            type: 'number',
            default: '0'
        },
        secondBorderRadius: {
            type: 'number',
            default: '0'
        },
        secondBorderColor: {
            type: 'string'
        },
        secondMargin: {
            type: 'number',
            default: '0'
        },
        secondPadding: {
            type: 'number',
            default: '0'
        },
        secondClip: {
            type: 'boolean',
            default: false
        },
        secondClipColor: {
            type: 'string'
        },
        
    },
	
	edit: (props) => {
        
        const { setAttributes, isSelected, className } = props;
        const {
            contentAlign,
            firstHeading,
            secondHeading,
            titleTag,
            display,
            firstColor,
            firstBackground,
            firstSize,
            firstBorderType,
            firstBorderWidth,
            firstBorderRadius,
            firstBorderColor,
            firstPadding,
            firstMargin,
            firstClip,
            firstClipColor,
            secondColor,
            secondBackground,
            secondSize,
            secondBorderType,
            secondBorderWidth,
            secondBorderRadius,
            secondBorderColor,
            secondPadding,
            secondMargin,
            secondClip,
            secondClipColor,
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
        const BORDER = [
            {
                value: "none",
                label: "None"
            },
            {
                value: "solid",
                label: "Solid"
            },
            {
                value: "double",
                label: "Double"
            },
            {
                value: "dotted",
                label: "Dotted"
            },
            {
                value: "dashed",
                label: "Dashed"
            },
            {
                value: "groove",
                label: "Groove"
            }
        ];
        
        return [
            isSelected && ( 
                <BlockControls key="controls">
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
            
                <PanelBody
                    title={__('First Heading')}
                    initialOpen={false}
                >   
                    <CheckboxControl
                        label={__('Clipped')}
                        checked={firstClip}
                        onChange={ newValue => setAttributes( { firstClip: newValue } ) }
                    />
                    <PanelColor
                        title={__('Color')}
                        colorValue={firstColor}
                    >
                        <ColorPalette
                            value={ firstColor }
                            onChange={newColor => setAttributes( { firstColor: newColor } ) }
                        />
                    </PanelColor>
                    <p>{__('Font Size')}</p>
                    <RangeControl
                        value={firstSize}
                        min='10'
                        max='80'
                        onChange={newSize => setAttributes( { firstSize: newSize } ) }
                    />
                    { ! firstClip && ( <PanelColor
                        title={__('Background Color')}
                        colorValue={firstBackground}
                    >
                        <ColorPalette
                            value={ firstBackground }
                            onChange={newColor => setAttributes( { firstBackground: newColor } ) }
                        />
                        </PanelColor>  ) }
                    { firstClip && ( <PanelColor
                        title={__('Second Color')}
                        colorValue={firstClipColor}
                    >
                        <ColorPalette
                            value={ firstClipColor }
                            onChange={newColor => setAttributes( { firstClipColor: newColor } ) }
                        />
                    </PanelColor>  ) }
                    <SelectControl
                        label={__('Border Type')}
                        options={BORDER}
                        value={firstBorderType}
                        onChange={newType => setAttributes({firstBorderType: newType})}
                    />
                    <p>{ 'none' != firstBorderType && ( __('Border Width') ) }</p>
                    { 'none' != firstBorderType && (
                    <RangeControl
                        value={firstBorderWidth}
                        min='0'
                        max='50'
                        onChange={newWidth => setAttributes({firstBorderWidth: newWidth } ) }
                    /> ) }
                    { 'none' != firstBorderType && (
                        <PanelColor
                            title={__('Border Color')}
                            colorValue={firstBorderColor}
                        >
                            <ColorPalette
                                value={firstBorderColor}
                                onChange={newColor => setAttributes( { firstBorderColor: newColor } ) }
                            />
                        </PanelColor>
                    ) }
                    <p>{ 'none' != firstBorderType && ( __('Border Radius') ) }</p>
                    { 'none' != firstBorderType && (
                    <RangeControl
                        value={firstBorderRadius}
                        min='0'
                        max='150'
                        onChange={newRadius => setAttributes({firstBorderRadius: newRadius } ) }
                    /> ) }
                    <p>{__('Margin')}</p>
                    <RangeControl
                        value={firstMargin}
                        min='0'
                        max='100'
                        onChange={newMargin => setAttributes( { firstMargin: newMargin } ) }
                    />
                    <p>{__('Padding')}</p>
                    <RangeControl
                        value={firstPadding}
                        min='0'
                        max='100'
                        onChange={newPadding => setAttributes({firstPadding: newPadding } ) }
                    />
            
                </PanelBody>
                <PanelBody
                    title={__('Second Heading')}
                    initialOpen={false}
                >
                    <CheckboxControl
                        label={__('Clipped')}
                        checked={secondClip}
                        onChange={ newValue => setAttributes( { secondClip: newValue } ) }
                    />
                    <PanelColor
                        title={__('Color')}
                        colorValue={secondColor}
                    >
                        <ColorPalette
                            value={secondColor}
                            onChange={ newColor => setAttributes( { secondColor: newColor } ) }
                        />
                    </PanelColor>
                    <RangeControl
                        title={__('Font Size')}
                        min='10'
                        max='80'
                        value={secondSize}
                        onChange={newSize => setAttributes( { secondSize: newSize } ) }
                    />
                    { ! secondClip && ( <PanelColor
                        title={__('Background Color')}
                        colorValue={secondBackground}
                    >
                        <ColorPalette
                            value={secondBackground}
                            onChange={ newColor => setAttributes( { secondBackground: newColor } ) }
                        />
                    </PanelColor> ) }
                    { secondClip && ( <PanelColor
                        title={__('Second Color')}
                        colorValue={secondClipColor}
                    >
                        <ColorPalette
                            value={secondClipColor}
                            onChange={ newColor => setAttributes( { secondClipColor: newColor } ) }
                        />
                    </PanelColor> ) }
                    <SelectControl
                        label={__('Border Type')}
                        options={BORDER}
                        value={secondBorderType}
                        onChange={newType => setAttributes({secondBorderType: newType})}
                    />
                    <p>{ 'none' != secondBorderType && ( __('Border Width') ) }</p>
                     { 'none' != secondBorderType && ( 
                        <RangeControl
                        value={secondBorderWidth}
                        min='0'
                        max='50'
                        onChange={newWidth => setAttributes({secondBorderWidth: newWidth } ) }
                    /> ) }
                    { 'none' != secondBorderType && (
                        <PanelColor
                            title={__('Border Color')}
                            colorValue={secondBorderColor}
                        >
                            <ColorPalette
                                value={secondBorderColor}
                                onChange={newColor => setAttributes( { secondBorderColor: newColor } ) }
                            />
                        </PanelColor>
                    )}
                    <p>{ 'none' != secondBorderType && ( __('Border Radius') )}</p>
                    { 'none' != secondBorderType && (
                    <RangeControl
                        value={secondBorderRadius}
                        min='0'
                        max='150'
                        onChange={newRadius => setAttributes({secondBorderRadius: newRadius } ) }
                    /> ) }
                    <p>{__('Margin')}</p>
                    <RangeControl
                        value={secondMargin}
                        min='0'
                        max='100'
                        onChange={newMargin => setAttributes( { secondMargin: newMargin } ) }
                    />
                    <p>{__('Padding')}</p>
                    <RangeControl
                        value={secondPadding}
                        min='0'
                        max='100'
                        onChange={newPadding => setAttributes({secondPadding: newPadding } ) }
                    />
                </PanelBody>
                </InspectorControls>
            ),
            ( 
                
            <div
                className={`${className}__container`}
                style={{textAlign: contentAlign }}
                >
                <h2
                    className={`${className}__title`} 
                >
                    <span className={`${className}__first`} style={{
                        display: display,
                        color: firstColor,
                        backgroundColor: firstBackground,
                        fontSize: firstSize + 'px',
                        border: firstBorderType,
                        borderWidth: firstBorderWidth + 'px',
                        borderRadius: firstBorderRadius + 'px',
                        borderColor: firstBorderColor,
                        padding: firstPadding + 'px',
                        margin: firstMargin + 'px'
                    }}>{ firstHeading }</span>
                    <span className={`${className}__second`} style={{
                        display: display,
                        color: secondColor,
                        backgroundColor: secondBackground,
                        fontSize: secondSize + 'px',
                        border: secondBorderType,
                        borderWidth: secondBorderWidth + 'px',
                        borderRadius: secondBorderRadius + 'px',
                        borderColor: secondBorderColor,
                        padding: secondPadding + 'px',
                        margin: secondMargin + 'px'
                    }}>{ secondHeading }</span>
                </h2>
                
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