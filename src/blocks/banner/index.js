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

registerBlockType('premium/banner', {
        title: __('Banner'),
        icon: 'admin-page',
        category: 'premium-blocks',
        attributes: {
            imageID: {
                type: 'number'
            },
            imageURL: {
                type: 'string',
                source: 'attribute',
                attribute: 'src',
                selector: '.premium-banner__img'
            },
            title: {
                type: 'array',
                source: 'children',
                selector: '.premium-banner__title'
            },
            titleTag: {
                type: 'string',
                default: 'H3'
            },
            desc: {
                type: 'array',
                source: 'children',
                selector: '.premium-banner__desc'
            },
            contentAlign: {
                type: 'string',
                default: 'left'
            },
            effect: {
                type: 'string',
                default: 'effect1'
            },
            hoverEffect: {
                type: 'string',
                default: 'none'
            },
            height: {
                type: 'string',
                default: 'default'
            },
            minHeight: {
                type: 'number'
            },
            verAlign: {
                type: 'string',
                default: 'top'
            },
            hovered: {
                type: 'boolean',
                default: false
            },
            responsive: {
                type: 'boolean',
                default: false
            },
            background: {
                type: 'string'
            },
            opacity: {
                type: 'number',
                default: '100'
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
            titleColor: {
                type: 'string',
                default: '#6ec1e4'
            },
            titleSize: {
                type: 'number',
                default: '20'
            },
            titleLine: {
                type: 'number',
            },
            titleWeight: {
                type: 'number'
            },
            descColor: {
                type: 'string',
                default: '#000'
            },
            descSize: {
                type: 'number',
                default: '20'
            },
            descLine: {
                type: 'number',
            },
            descWeight: {
                type: 'number'
            },
            urlCheck: {
                type: 'boolean',
                default: false
            },
            target: {
                type: 'boolean',
                default: false
            },
            url: {
                type: 'string',
                source: 'attribute',
                attribute: 'href',
                selector: '.premium-banner__link'
            }
        },
        edit: (props)   => {
            const { isSelected, setAttributes, className } = props;
            const {
                imageID,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleSize,
                titleLine,
                titleWeight,
                descColor,
                descSize,
                descLine,
                descWeight,
                urlCheck,
                url,
                target
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
            const EFFECTS = [
                {
                    value: 'effect1',
                    label: 'Effect 1'
                },
                {
                    value: 'effect2',
                    label: 'Effect 2'
                },
                {
                    value: 'effect3',
                    label: 'Effect 3'
                },
                {
                    value: 'effect4',
                    label: 'Effect 4'
                },
                {
                    value: 'effect5',
                    label: 'Effect 5'
                },
                {
                    value: 'effect6',
                    label: 'Effect 6'
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
            const HOVER = [
                {
                    value: 'none',
                    label: 'None'
                },
                {
                    value: 'zoomin',
                    label: 'Zoom In'
                },
                {
                    value: 'zoomout',
                    label: 'Zoom Out'
                },
                {
                    value: 'scale',
                    label: 'Scale'
                },
                {
                    value: 'gray',
                    label: 'Gray Scale'
                },
                {
                    value: 'blur',
                    label: 'Blur'
                },
                {
                    value: 'bright',
                    label: 'Bright'
                },
                {
                    value: 'sepia',
                    label: 'Sepia'
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
            const HEIGHT = [
                {
                    value: 'default',
                    label: 'Default'
                },
                {
                    value: 'custom',
                    label: 'Custom'
                }
            ];
            let blockClass = className.replace('wp-block-','');
            return [                
                isSelected && (
                    <BlockControls key='controls'>
                        <AlignmentToolbar
                            value={contentAlign}
                            onChange={newAlign => setAttributes( { contentAlign: newAlign } ) }
                        />
                        <Toolbar
                        >
                            <MediaUpload
                                onSelect={ media => setAttributes( {
                                    imageURL: media.url,
                                    imageID: media.id
                                } ) }
                                value={imageID}
                                type="image"
                                render={ ( { open } ) => (
                                    <IconButton
                                        className="components-toolbar__control"
                                        label={__('Edit Image')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                ) }
                            />
                        </Toolbar>
                    </BlockControls>
                ),
                isSelected && imageURL && (
                    <InspectorControls key={"inspector"}
                    >
                        <PanelBody
                            title={__('General Settings')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__('Effect')}
                                value={effect}
                                onChange={newEffect => setAttributes( { effect: newEffect } ) }
                                options={EFFECTS}
                            />
                            <SelectControl
                                label={__('Image Hover Effect')}
                                options={HOVER}
                                value={hoverEffect}
                                onChange={newEffect => setAttributes( { hoverEffect: newEffect } ) }
                            />
                            <CheckboxControl
                                label={__('Always Hovered')}
                                checked={hovered}
                                onChange={check => setAttributes( { hovered: check} ) }
                            />
                            <SelectControl
                                label={__('Height')}
                                options={HEIGHT}
                                value={height}
                                onChange={newHeight  => setAttributes( { height: newHeight } ) }
                            />
                            <p>{ 'custom' === height && __('Min Height (PX)')}</p>
                            { 'custom' === height && (
                                <RangeControl
                                    value={minHeight}
                                    min='10'
                                    max='500'
                                    onChange={newSize => setAttributes( { minHeight: newSize } ) }
                                />
                            ) }
                            { 'custom' === height && (
                                <SelectControl
                                    label={__('Vertical Align')}
                                    options={ALIGNS}
                                    value={verAlign}
                                    onChange={newValue => setAttributes( { verAlign: newValue } ) }
                                />
                            ) }
                            <PanelColor
                                title={__('Background Color')}
                                colorValue={background}
                            >
                                <ColorPalette
                                    value={background}
                                    onChange={newColor => setAttributes( { background: newColor } ) }
                                />
                            </PanelColor>
                            <RangeControl
                                label={__('Opacity')}
                                value={opacity}
                                min='1'
                                max='100'
                                onChange={ newOpacity => setAttributes( { opacity: newOpacity } ) }
                            />
                            <SelectControl
                                label={__('Border Type')}
                                options={BORDER}
                                value={borderType}
                                onChange={newType => setAttributes( { borderType: newType})}
                            />
                            { 'none' != borderType && (
                            <RangeControl
                                label={__('Border  Width')}
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
                            <CheckboxControl
                                label={__('Link')}
                                checked={urlCheck}
                                onChange={newCheck => setAttributes( { urlCheck: newCheck } ) }
                            />
                            { urlCheck && ( <CheckboxControl
                                label={__('Open link in new tab')}
                                checked={target}
                                onChange={ newValue => setAttributes( { target: newValue } ) }
                            /> ) }
                            <CheckboxControl
                                label={__('Hide Description on Mobiles')}
                                checked={responsive}
                                onChange={newValue => setAttributes( { responsive: newValue } ) }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Title Settings')}
                            initialOpen={false}
                        >
                            <p>{__('HTML Tag')}</p>
                            <Toolbar
                                controls={
                                    '123456'.split('').map( ( tag ) => (
                                    {
                                        icon: 'heading',
                                        isActive: 'H' + tag === titleTag,
                                        onClick: () => setAttributes( { titleTag: 'H' + tag } ),
                                        subscript: tag
                                    }
                                    ))
                                }
                            />
                        <PanelColor
                            title={__('Color')}
                            colorValue={titleColor}
                        >
                        <ColorPalette
                            value={ titleColor }
                            onChange={newColor => setAttributes( { titleColor: newColor } ) }
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
                        </PanelBody>
                        <PanelBody
                            title={__('Description Settings')}
                            initialOpen={false}
                        >
                            <PanelColor
                            title={__('Color')}
                            colorValue={descColor}
                        >
                        <ColorPalette
                            value={ descColor }
                            onChange={newColor => setAttributes( { descColor: newColor } ) }
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
                        </PanelBody>
                    </InspectorControls>
                ),
                <div
                    className={`${blockClass} ${blockClass}__responsive_${responsive}`}
                >
                { ! imageURL && ( <MediaUpload
                    onSelect={media => setAttributes({
                        imageURL: media.url,
                        imageID: media.id
                    })}
                    type="image"
                    value={imageID}
                    render={ ( {open} ) => (
                        <Button
                            className="button"
                            onClick={open}
                        >
                            {__('Upload Banner Image')}
                        </Button>
                    ) }
                /> ) }
                { imageURL && (
                    
                    <div
                        className={`${blockClass}__inner ${blockClass}__min ${blockClass}__${effect} ${blockClass}__${hoverEffect} hover_${hovered}`}
                        style={{
                            backgroundColor: background,
                            border: borderType,
                            borderWidth: borderWidth + 'px',
                            borderRadius: borderRadius + 'px',
                            borderColor: borderColor
                        }}
                    >
                        { ( urlCheck && <URLInput
                            value={url}
                            onChange={newURL => setAttributes( { url: newURL } ) }
                        /> ) }
                        <div
                            className={`${blockClass}__img_wrap ${blockClass}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign
                            }}
                        >
                            <img
                                className={`${blockClass}__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    opacity: opacity / 100,
                                }}
                            />
                        </div>
                        
                        <div
                            className={`${blockClass}__content`}
                        >
                            <div
                                className={`${blockClass}__title_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText
                                    tagName={titleTag.toLowerCase()}
                                    className={`${blockClass}__title`}
                                    placeholder={__('Awesome Title!!')}
                                    value={title}
                                    isSelected={false}
                                    onChange={newText => setAttributes( { title: newText } ) }
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + 'px',
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + 'px'
                                    }}
                                />
                            </div>
                            <div
                                className={`${blockClass}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText
                                    tagName='p'
                                    className={`${blockClass}__desc`}
                                    placeholder={__('Cool Description!!')}
                                    value={desc}
                                    isSelected={false}
                                    onChange={newText => setAttributes( { desc: newText } ) }
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + 'px',
                                        fontWeight: descWeight,
                                        lineHeight: descLine + 'px'
                                    }}
                                />
                            </div>
                            
                        </div>
                        
                    </div>
                ) }
                </div>
            ];
        },
        save: (props)   => {
            const {
                className,
                attributes: {
                    imageID,
                    imageURL,
                    title,
                    titleTag,
                    desc,
                    contentAlign,
                    effect,
                    hoverEffect,
                    height,
                    minHeight,
                    verAlign,
                    hovered,
                    responsive,
                    background,
                    opacity,
                    borderType,
                    borderWidth,
                    borderRadius,
                    borderColor,
                    titleColor,
                    titleSize,
                    titleWeight,
                    titleLine,
                    descColor,
                    descSize,
                    descWeight,
                    descLine,
                    urlCheck,
                    url,
                    target
                }
            } = props;
            let blockClass = 'premium-banner';
            return (
                <div
                    className={`${blockClass} ${blockClass}__responsive_${responsive}`}
                >
                
                    <div
                        className={`${blockClass}__inner ${blockClass}__min ${blockClass}__${effect} ${blockClass}__${hoverEffect} hover_${hovered}`}
                        style={{
                            backgroundColor: background,
                            border: borderType,
                            borderWidth: borderWidth + 'px',
                            borderRadius: borderRadius + 'px',
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${blockClass}__img_wrap ${blockClass}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign
                            }}
                        >
                            <img
                                className={`${blockClass}__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    opacity: opacity / 100,
                                }}
                            />
                        </div>
                        
                        
                        <div
                            className={`${blockClass}__content`}
                        >
                            <div
                                className={`${blockClass}__title_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${blockClass}__title`}
                                    placeholder={__('Awesome Title!!')}
                                    value={title}
                                    isSelected={false}
                                    onChange={newText => setAttributes( { title: newText } ) }
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + 'px',
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + 'px'
                                    }}
                                />
                            </div>
                            <div
                                className={`${blockClass}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText.Content
                                    tagName='p'
                                    className={`${blockClass}__desc`}
                                    placeholder={__('Cool Description!!')}
                                    value={desc}
                                    isSelected={false}
                                    onChange={newText => setAttributes( { desc: newText } ) }
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + 'px',
                                        fontWeight: descWeight,
                                        lineHeight: descLine + 'px'
                                    }}
                                />
                            </div>
                            
                        </div>
                        { urlCheck && '' !== url && ( 
                           <a
                            className={`${blockClass}__link`}
                            href={url}
                            target={ target && '_blank' }
                            />
                        ) }
                    </div>
                
                </div>
            );
        }
    }
);