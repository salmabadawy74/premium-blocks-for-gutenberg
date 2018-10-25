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
    CheckBoxControl
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
                height
            } = props.attributes;
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
                },
                
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
                            <SelectControl
                                label={__('Height')}
                                options={HEIGHT}
                                value={height}
                                onChange={newHeight  => setAttributes( { height: newHeight } ) }
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
                        </PanelBody>
                    </InspectorControls>
                ),
                <div
                    className={blockClass}
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
                        className={`${blockClass}__inner ${blockClass}__min ${blockClass}__${effect} ${blockClass}__${hoverEffect}`}
                    >
                        <div
                            className={`${blockClass}__img_wrap ${blockClass}__${height}`}
                        >
                            <img
                                className={`${blockClass}__img`}
                                alt="Banner Image"
                                src={imageURL}
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
                    
                }
            } = props;
            let blockClass = 'premium-banner';
            return (
                <p>Hello World</p>
            );
        }
    }
);