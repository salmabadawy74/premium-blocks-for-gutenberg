const {
    __
} = wp.i18n;

const {
    registerBlockType
} = wp.blocks;

const {
    IconButton,
    Toolbar,
    Button,
    PanelBody,
    PanelColor,
    SelectControl,
    RangeControl,
    TextControl,
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

registerBlockType('premium/pricing-table', {
        title: __('Pricing Table'),
        icon: 'editor-table',
        category: 'premium-blocks',
        attributes: {
            contentAlign: {
                type: 'string',
                default: 'center'
            },
            tableBack: {
                type: 'string'
            },
            borderType: {
                type: 'string',
                default: 'none'
            },
            borderWidth: {
                type: 'number',
                default: '1'
            },
            borderRadius: {
                type: 'number',
                default: '0'
            },
            borderColor: {
                type: 'string'
            },
            tablePadding: {
                type: 'number',
                default: '0'
            },
            title: {
                type: 'array',
                source: 'children',
                selector: '.premium-pricing-table__title',
                default: 'Pricing Table'
            },
            titleTag: {
                type: 'string',
                default: 'H2'
            },
            titleColor: {
                type: 'string',
                default: '#6ec1e4'
            },
            titleSize: {
                type: 'number'
            },
            titleLine: {
                type: 'number',
            },
            titleWeight: {
                type: 'number'
            },
            titleBack: {
                type: 'string'
            },
            titleMargin: {
                type: 'number',
                default: '0'
            },
            titlePadding: {
                type: 'number',
                default: '0'
            },
            desc: {
                type: 'array',
                source: 'children',
                selector: '.premium-pricing-table__desc',
                default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            },
            descColor: {
                type: 'string',
                default: '#000'
            },
            descSize: {
                type: 'number'
            },
            descLine: {
                type: 'number',
            },
            descWeight: {
                type: 'number'
            },
            descBack: {
                type: 'string'
            },
            descMargin: {
                type: 'number',
                default: '0'
            },
            descPadding: {
                type: 'number',
                default: '0'
            },
            titleChecked: {
                type: 'boolean',
                default: true
            },
            descChecked: {
                type: 'boolean',
                default: true
            },
            priceChecked: {
                type: 'boolean',
                default: true
            },
            priceBack: {
                type: 'string'
            },
            priceMargin: {
                type: 'number'
            },
            pricePadding: {
                type: 'number'
            },
            slashPrice: {
                type: 'string'
            },
            slashColor: {
                type: 'string'
            },
            slashSize: {
                type: 'number'
            },
            currPrice: {
                type: 'string',
                default: '$'
            },
            currColor: {
                type: 'string'
            },
            currSize: {
                type: 'number'
            },
            valPrice: {
                type: 'string',
                default: '25'
            },
            valColor: {
                type: 'string'
            },
            valSize: {
                type: 'number'
            },
            divPrice: {
                type: 'string',
                default: '/'
            },
            divColor: {
                type: 'string'
            },
            divSize: {
                type: 'number'
            },
            durPrice: {
                type: 'string',
                default: 'm'
            },
            durColor: {
                type: 'string'
            },
            durSize: {
                type: 'number'
            },
            selectedStyle: {
                type: 'string',
                default: 'price'
            }
        },
        edit: (props)   => {
            const { isSelected, setAttributes, className } = props;
            const {
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleSize,
                titleLine,
                titleWeight,
                titleBack,
                titleMargin,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descSize,
                descLine,
                descWeight,
                descBack,
                descMargin,
                descPadding,
                priceChecked,
                priceBack,
                priceMargin,
                pricePadding,
                slashPrice,
                slashColor,
                slashSize,
                currPrice,
                currColor,
                currSize,
                valPrice,
                valColor,
                valSize,
                divPrice,
                divColor,
                divSize,
                durPrice,
                durColor,
                durSize,
                selectedStyle
                
            } = props.attributes;
            const ALIGNS = [
                {
                    value: 'flex-start',
                    label: 'Top'
                },
                {
                    value: 'center',
                    label: 'Middle'
                },
                {
                    value: 'flex-end',
                    label: 'Bottom'
                },
                {
                    value: 'inherit',
                    label: 'Full'
                }
            ];
            const PRICE = [
                {
                    value: 'slash',
                    label: 'Slashed Price'
                },
                {
                    value: 'curr',
                    label: 'Currency'
                },
                {
                    value: 'price',
                    label: 'Price'
                },
                {
                    value: 'divider',
                    label: 'Divider'
                },
                {
                    value: 'duration',
                    label: 'Duration'
                }
            ];
            const WEIGHT = [
                {
                    value: '100',
                    label: '100'
                },
                {
                    value: '200',
                    label: '200'
                },
                {
                    value: '300',
                    label: '300'
                },
                {
                    value: '400',
                    label: 'Normal'
                },
                {
                    value: '500',
                    label: '500'
                },
                {
                    value: '600',
                    label: '600'
                },
                {
                    value: '700',
                    label: '700'
                },
                {
                    value: '800',
                    label: '800'
                },
                {
                    value: '900',
                    label: 'Bold'
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
            let blockClass = className.replace('wp-block-','');
            
            return [                
                isSelected && (
                <BlockControls key='controls'>
                    <AlignmentToolbar
                        value={contentAlign}
                        onChange={ newAlign => setAttributes( { contentAlign: newAlign } ) }
                    />
                </BlockControls> ),
                isSelected && ( <InspectorControls key={'inspector'}>
                   { titleChecked && ( <PanelBody
                        title={__('Title')}
                        initialOpen={false}
                    >
                        <Toolbar
                            controls={
                                '123456'.split('').map( ( tag ) => (
                                    {
                                        icon: 'heading',
                                        isActive: 'H' + tag === titleTag,
                                        onClick: () => setAttributes( { titleTag: 'H' + tag } ),
                                        subscript: tag
                                    }
                                    )
                                )
                            }
                        />
                        <PanelColor
                            title={__('Text Color')}
                            colorValue={titleColor}
                        >
                            <ColorPalette
                                value={titleColor}
                                onChange={ newColor => setAttributes( { titleColor: newColor } ) }
                            />
                        </PanelColor>
                        <RangeControl
                            label={__('Font Size (PX)')}
                            value={titleSize}
                            min='10'
                            max='80'
                            onChange={newSize => setAttributes( { titleSize: newSize } ) }
                        />
                        <SelectControl
                            label={__('Font Weight')}
                            options={WEIGHT}
                            value={titleWeight}
                            onChange={ newWeight => setAttributes( { titleWeight: newWeight } ) }
                        />
                        <RangeControl
                            label={__('Line Height (PX)')}
                            value={titleLine}
                            onChange={ newValue => setAttributes( { titleLine: newValue } ) }
                        />
                        <PanelColor
                            title={__('Background Color')}
                            colorValue={titleBack}
                        >
                            <ColorPalette
                                value={titleBack}
                                onChange={ newColor => setAttributes( { titleBack: newColor } ) }
                            />
                        </PanelColor>
                        <RangeControl
                            label={__('Margin (PX)')}
                            value={titleMargin}
                            min='0'
                            max='100'
                            onChange={ newMargin => setAttributes( { titleMargin: newMargin } ) }
                        />
                        <RangeControl
                            label={__('Padding (PX)')}
                            value={titlePadding}
                            min='0'
                            max='100'
                            onChange={ newPadding => setAttributes( { titlePadding: newPadding } ) }
                        />
                    </PanelBody> ) }
                    { priceChecked && ( <PanelBody
                        title={__('Price')}
                        initialOpen={false}
                    >
                        <TextControl
                            label={ __( 'Slashed Price' ) }
                            value={slashPrice}
                            onChange={ ( value ) => setAttributes( { slashPrice: value } ) }
                        />
                        <TextControl
                            label={ __( 'Currency' ) }
                            value={currPrice}
                            onChange={ ( value ) => setAttributes( { currPrice: value } ) }
                        />
                        <TextControl
                            label={ __( 'Price' ) }
                            value={valPrice}
                            onChange={ ( value ) => setAttributes( { valPrice: value } ) }
                        />
                        <TextControl
                            label={ __( 'Divider' ) }
                            value={divPrice}
                            onChange={ ( value ) => setAttributes( { divPrice: value } ) }
                        />
                        <TextControl
                            label={ __( 'Duration' ) }
                            value={durPrice}
                            onChange={ ( value ) => setAttributes( { durPrice: value } ) }
                        />
                        <SelectControl
                            label={__('Element to Style')}
                            options={PRICE}
                            value={selectedStyle}
                            onChange={ newElem => setAttributes( { selectedStyle: newElem } ) }
                        />
                        { 'slash' === selectedStyle && (
                        <PanelColor
                            title={__('Text Color')}
                            colorValue={slashColor}
                        >
                            <ColorPalette
                                value={slashColor}
                                onChange={ newColor => setAttributes( { slashColor: newColor } ) }
                            />
                        </PanelColor> ) }
                        { 'slash' === selectedStyle && (
                        <RangeControl
                            label={__('Font Size (PX)')}
                            value={slashSize}
                            min='10'
                            max='80'
                            onChange={newSize => setAttributes( { slashSize: newSize } ) }
                        /> ) }
                        { 'curr' === selectedStyle && (
                            <PanelColor
                            title={__('Text Color')}
                            colorValue={currColor}
                        >
                            <ColorPalette
                                value={currColor}
                                onChange={ newColor => setAttributes( { currColor: newColor } ) }
                            />
                        </PanelColor>
                        ) }
                        { 'curr' === selectedStyle && (
                        <RangeControl
                            label={__('Font Size (PX)')}
                            value={currSize}
                            min='10'
                            max='80'
                            onChange={newSize => setAttributes( { currSize: newSize } ) }
                        /> ) }
                        { 'price' === selectedStyle && (
                            <PanelColor
                            title={__('Text Color')}
                            colorValue={valColor}
                        >
                            <ColorPalette
                                value={valColor}
                                onChange={ newColor => setAttributes( { valColor: newColor } ) }
                            />
                        </PanelColor>
                        ) }
                        { 'price' === selectedStyle && (
                        <RangeControl
                            label={__('Font Size (PX)')}
                            value={valSize}
                            min='10'
                            max='80'
                            onChange={newSize => setAttributes( { valSize: newSize } ) }
                        /> ) }
                        { 'divider' === selectedStyle && (
                            <PanelColor
                            title={__('Text Color')}
                            colorValue={divColor}
                        >
                            <ColorPalette
                                value={divColor}
                                onChange={ newColor => setAttributes( { divColor: newColor } ) }
                            />
                        </PanelColor>
                        ) }
                        { 'divider' === selectedStyle && (
                        <RangeControl
                            label={__('Font Size (PX)')}
                            value={divSize}
                            min='10'
                            max='80'
                            onChange={newSize => setAttributes( { divSize: newSize } ) }
                        /> ) }
                        { 'duration' === selectedStyle && (
                            <PanelColor
                            title={__('Text Color')}
                            colorValue={durColor}
                        >
                            <ColorPalette
                                value={durColor}
                                onChange={ newColor => setAttributes( { durColor: newColor } ) }
                            />
                        </PanelColor>
                        ) }
                        { 'duration' === selectedStyle && (
                        <RangeControl
                            label={__('Font Size (PX)')}
                            value={durSize}
                            min='10'
                            max='80'
                            onChange={newSize => setAttributes( { durSize: newSize } ) }
                        /> ) }
                        <PanelColor
                            title={__('Container Background Color')}
                            colorValue={priceBack}
                        >
                            <ColorPalette
                                value={priceBack}
                                onChange={ newColor => setAttributes( { priceBack: newColor } ) }
                            />
                        </PanelColor>
                        <RangeControl
                            label={__('Container Margin (PX)')}
                            value={priceMargin}
                            min='0'
                            max='100'
                            onChange={ newMargin => setAttributes( { priceMargin: newMargin } ) }
                        />
                        <RangeControl
                            label={__('Container Padding (PX)')}
                            value={pricePadding}
                            min='0'
                            max='100'
                            onChange={ newPadding => setAttributes( { pricePadding: newPadding } ) }
                        />
                    </PanelBody> ) }
                    { descChecked && ( <PanelBody
                        title={__('Description')}
                        initialOpen={false}
                    >
                        <PanelColor
                            title={__('Text Color')}
                            colorValue={descColor}
                        >
                            <ColorPalette
                                value={descColor}
                                onChange={ newColor => setAttributes( { descColor: newColor } ) }
                            />
                        </PanelColor>
                        <RangeControl
                            label={__('Font Size (PX)')}
                            value={descSize}
                            min='10'
                            max='80'
                            onChange={newSize => setAttributes( { descSize: newSize } ) }
                        />
                        <SelectControl
                            label={__('Font Weight')}
                            options={WEIGHT}
                            value={descWeight}
                            onChange={ newWeight => setAttributes( { descWeight: newWeight } ) }
                        />
                        <RangeControl
                            label={__('Line Height (PX)')}
                            value={descLine}
                            onChange={ newValue => setAttributes( { descLine: newValue } ) }
                        />
                        <PanelColor
                            title={__('Background Color')}
                            colorValue={descBack}
                        >
                            <ColorPalette
                                value={titleBack}
                                onChange={ newColor => setAttributes( { descBack: newColor } ) }
                            />
                        </PanelColor>
                        <RangeControl
                            label={__('Margin (PX)')}
                            value={descMargin}
                            min='0'
                            max='100'
                            onChange={ newMargin => setAttributes( { descMargin: newMargin } ) }
                        />
                        <RangeControl
                            label={__('Padding (PX)')}
                            value={descPadding}
                            min='0'
                            max='100'
                            onChange={ newPadding => setAttributes( { descPadding: newPadding } ) }
                        />
                    </PanelBody> ) }
                    <PanelBody
                        title={__('Display Options')}
                        initialOpen={false}
                    >
                        <CheckboxControl
                            label={__('Title')}
                            checked={titleChecked}
                            onChange={ newValue => setAttributes( { titleChecked: newValue } ) }
                        />
                        <CheckboxControl
                            label={__('Price')}
                            checked={priceChecked}
                            onChange={ newValue => setAttributes( { priceChecked: newValue } ) }
                        />
                        <CheckboxControl
                            label={__('Description')}
                            checked={descChecked}
                            onChange={ newValue => setAttributes( { descChecked: newValue } ) }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__('Table')}
                        initialOpen={false}
                    >
                        <PanelColor
                            title={__('Background Color')}
                            colorValue={tableBack}
                        >
                            <ColorPalette
                                value={tableBack}
                                onChange={ newColor => setAttributes( { tableBack: newColor } ) }
                            />
                        </PanelColor>
                        <SelectControl
                            label={__('Border Type')}
                            options={BORDER}
                            value={borderType}
                            onChange={newType => setAttributes( { borderType: newType})}
                        />
                        { 'none' != borderType && (
                        <RangeControl
                            label={__('Border Width')}
                            value={borderWidth}
                            min='0'
                            max='50'
                            onChange={newWidth => setAttributes( { borderWidth: newWidth } ) }
                        /> ) }
                        { 'none' != borderType && (
                            <PanelColor
                                title={__('Border Color')}
                                colorValue={borderColor}
                            >
                                <ColorPalette
                                    value={borderColor}
                                    onChange={newColor => setAttributes( { borderColor: newColor } ) }
                                />
                            </PanelColor>
                        ) }
                        <RangeControl
                            label={__('Border Radius')}
                            value={borderRadius}
                            min='0'
                            max='150'
                            onChange={newRadius => setAttributes({borderRadius: newRadius } ) }
                        />
                        <RangeControl
                            label={__('Padding')}
                            value={tablePadding}
                            min='0'
                            max='50'
                            onChange={ newValue => setAttributes( { tablePadding: newValue } ) }
                        /> 
                    </PanelBody>
                </InspectorControls> ),
                
                <div
                    className={`${blockClass}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + 'px',
                        borderRadius: borderRadius + 'px',
                        borderColor: borderColor,
                        padding: tablePadding + 'px'
                    }}
                >
                    { titleChecked && ( <div
                        className={`${blockClass}__title_wrap`}
                    >
                        <RichText
                            tagName={titleTag.toLowerCase()}
                            className={`${blockClass}__title`}
                            onChange={newText => setAttributes( { title: newText } ) }
                            placeholder={__('Awesome Title')}
                            value={title}
                            isSelected={false}
                            style={{
                                color: titleColor,
                                background: titleBack,
                                fontSize: titleSize + 'px',
                                fontWeight: titleWeight,
                                lineHeight: titleLine + 'px',
                                margin: titleMargin + 'px',
                                padding: titlePadding + 'px'
                            }}
                        />
                    </div> ) }
                    { priceChecked && ( <div
                        className={`${blockClass}__price_wrap`}
                        style={{
                            background: priceBack,
                            margin: priceMargin + 'px',
                            padding: pricePadding + 'px',
                        }}
                    >
                        { '' !== slashPrice &&(
                            <strike
                                className={`${blockClass}__slash`}
                                style={{
                                    color: slashColor,
                                    fontSize: slashSize + 'px'
                                }}
                            >{slashPrice}</strike>
                        )}
                        { '' !== currPrice &&(
                            <span
                                className={`${blockClass}__currency`}
                                style={{
                                    color: currColor,
                                    fontSize: currSize + 'px'
                                }}
                            >{currPrice}</span>
                        )}
                        { '' !== valPrice &&(
                            <span
                                className={`${blockClass}__val`}
                                style={{
                                    color: valColor,
                                    fontSize: valSize + 'px'
                                }}
                            >{valPrice}</span>
                        )}
                        { '' !== divPrice &&(
                            <span
                                className={`${blockClass}__divider`}
                                style={{
                                    color: divColor,
                                    fontSize: divSize + 'px'
                                }}
                            >{divPrice}</span>
                        )}
                        { '' !== durPrice &&(
                            <span
                                className={`${blockClass}__dur`}
                                style={{
                                    color: durColor,
                                    fontSize: durSize + 'px'
                                }}
                            >{durPrice}</span>
                        )}
                    </div> ) }
                    { descChecked && ( <div
                        className={`${blockClass}__desc_wrap`}
                    >
                        <RichText
                            tagName='p'
                            className={`${blockClass}__desc`}
                            onChange={newText => setAttributes( { desc: newText } ) }
                            value={desc}
                            isSelected={false}
                            style={{
                                color: descColor,
                                background: descBack,
                                fontSize: descSize + 'px',
                                fontWeight: descWeight,
                                lineHeight: descLine + 'px',
                                margin: descMargin + 'px',
                                padding: descPadding + 'px'
                            }}
                        />
                    </div> ) }
                </div>
                    
            ];
        },
        save: (props)   => {
            const {
                className,
                attributes: {
                    contentAlign,
                    tableBack,
                    borderType,
                    borderWidth,
                    borderRadius,
                    borderColor,
                    tablePadding,
                    titleChecked,
                    title,
                    titleTag,
                    titleColor,
                    titleSize,
                    titleLine,
                    titleWeight,
                    titleBack,
                    titleMargin,
                    titlePadding,
                    descChecked,
                    desc,
                    descColor,
                    descSize,
                    descLine,
                    descWeight,
                    descBack,
                    descMargin,
                    descPadding,
                    priceChecked,
                    priceBack,
                    priceMargin,
                    pricePadding,
                    slashPrice,
                    slashColor,
                    slashSize,
                    currPrice,
                    currColor,
                    currSize,
                    valPrice,
                    valColor,
                    valSize,
                    divPrice,
                    divColor,
                    divSize,
                    durPrice,
                    durColor,
                    durSize
                }
            } = props;
            let blockClass = 'premium-pricing-table';
            return (
                <div
                    className={`${blockClass}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + 'px',
                        borderRadius: borderRadius + 'px',
                        borderColor: borderColor,
                        padding: tablePadding + 'px'
                    }}
                >
                    { titleChecked && ( <div
                        className={`${blockClass}__title_wrap`}
                    >
                        <RichText.Content
                            tagName={titleTag.toLowerCase()}
                            className={`${blockClass}__title`}
                            onChange={newText => setAttributes( { title: newText } ) }
                            placeholder={__('Awesome Title')}
                            value={title}
                            isSelected={false}
                            style={{
                                color: titleColor,
                                background: titleBack,
                                fontSize: titleSize + 'px',
                                fontWeight: titleWeight,
                                lineHeight: titleLine + 'px',
                                margin: titleMargin + 'px',
                                padding: titlePadding + 'px',
                            }}
                        />
                    </div> ) }
                    { priceChecked && ( <div
                        className={`${blockClass}__price_wrap`}
                        style={{
                            background: priceBack,
                            margin: priceMargin + 'px',
                            padding: pricePadding + 'px',
                        }}
                    >
                        { '' !== slashPrice &&(
                            <strike
                                className={`${blockClass}__slash`}
                                style={{
                                    color: slashColor,
                                    fontSize: slashSize + 'px'
                                }}
                            >{slashPrice}</strike>
                        )}
                        { '' !== currPrice &&(
                            <span
                                className={`${blockClass}__currency`}
                                style={{
                                    color: currColor,
                                    fontSize: currSize + 'px'
                                }}
                            >{currPrice}</span>
                        )}
                        { '' !== valPrice &&(
                            <span
                                className={`${blockClass}__val`}
                                style={{
                                    color: valColor,
                                    fontSize: valSize + 'px'
                                }}
                            >{valPrice}</span>
                        )}
                        { '' !== divPrice &&(
                            <span
                                className={`${blockClass}__divider`}
                                style={{
                                    color: divColor,
                                    fontSize: divSize + 'px'
                                }}
                            >{divPrice}</span>
                        )}
                        { '' !== durPrice &&(
                            <span
                                className={`${blockClass}__dur`}
                                style={{
                                    color: durColor,
                                    fontSize: durSize + 'px'
                                }}
                            >{durPrice}</span>
                        )}
                    </div> ) }
                    { descChecked && ( <div
                        className={`${blockClass}__desc_wrap`}
                    >
                        <RichText.Content
                            tagName='p'
                            className={`${blockClass}__desc`}
                            onChange={newText => setAttributes( { desc: newText } ) }
                            value={desc}
                            isSelected={false}
                            style={{
                                color: descColor,
                                background: descBack,
                                fontSize: descSize + 'px',
                                fontWeight: descWeight,
                                lineHeight: descLine + 'px',
                                margin: descMargin + 'px',
                                padding: descPadding + 'px',
                            }}
                        />
                    </div> ) }
                </div>
            );
        }
    }
);