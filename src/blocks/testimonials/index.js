import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";

const className = 'premium-testimonial';

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

registerBlockType('premium/testimonial', {
    title: __('Premium Testimonial'),
    icon: 'format-quote',
    category: 'premium-blocks',
    attributes: {
        align: {
            type: 'string',
            default: 'center',  
        },
        authorImgId: {
            type: 'string', 
        },
        authorImgUrl: {
            type: 'string',
        },
        imgRadius: {
            type: 'string',
            default: '50%',
        },
        imgSize: {
            type: 'number',
        },
        imgBorder: {
            type: 'number',
            default: '1',
        },
        imgBorderColor: {
            type: 'string',
        },
        text: {
            source: 'array',
            selector: '.premium-testimonial__text',
        },
        titleTag: {
            type: 'string',
            default: 'H3',  
        },
        title: {
            type: 'array',
            selector: '.premium-testimonial__author',
        },
        authorComTag: {
            type: 'string',
            default: 'H4',  
        },
        authorCom: {
            type: 'array',
            selector: '.premium-testimonial__author_comp',
        },
        quotSize: {
            type: 'number', 
        },
        quotColor: {
            type: 'string',
            default: 'rgba(110,193,228,0.2)',  
        },
        bodyColor: {
            type: 'string',
        },
        bodySize: {
            type: 'number',
        },
        bodyLine: {
            type: 'number',
        },
        bodyTop: {
            type: 'number',
        },
        bodyBottom: {
            type: 'number',
        },
    },
    
    
    edit: (props)   => {
        const { isSelected, setAttributes } = props;
        const {
            align,
            authorImgId,
            authorImgUrl,
            imgRadius,
            imgSize,
            imgBorder,
            imgBorderColor,
            text,
            titleTag,
            title,
            authorComTag,
            authorCom,
            quotSize,
            quotColor,
            bodyColor,
            bodySize,
            bodyLine,
            bodyTop,
            bodyBottom
        } = props.attributes;
        const ALIGNS = [
            {
                value: 'left',
                label: 'Left'
            },
            {
                value: 'center',
                label: 'Center'
            },
            {
                value: 'right',
                label: 'Right'
            },
        ];
        const RADIUS = [
            {
                value: "0",
                label: "Square"
            },
            {
                value: "50%",
                label: "Circle"
            },
            {
                value: "15px",
                label: "Rounded"
            },
        ];
        
        return [
            isSelected && (
                <BlockControls key='controls'>
                    <AlignmentToolbar
                        value={align}
                        onChange={ newAlign => setAttributes( { align: newAlign } ) }
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls
                    key={"inspector"}
                >   
                    <PanelBody
                       title={__('Content')}
                       initialOpen={false}
                    >
                        <PanelColor
                            label={__('Color')}
                            colorValue={bodyColor}
                        >
                            <ColorPalette
                                value={bodyColor}
                                onChange= { newColor => setAttributes( { bodyColor: newColor } ) }
                            />
                        </PanelColor>
                        <RangeControl
                            label={__('Font Size (PX)')}
                            value={bodySize}
                            min='10'
                            max='80'
                            onChange={ newSize => setAttributes( { bodySize: newSize } ) }
                        />
                        <RangeControl
                            label={__('Line Height (PX)')}
                            value={bodyLine}
                            min='10'
                            max='50'
                            onChange={ newSize => setAttributes( { bodyLine: newSize } ) }
                        />
                        <RangeControl
                            label={__('Margin Top (PX)')}
                            value={bodyTop}
                            onChange={ newSize => setAttributes( { bodyTop: newSize } ) }
                        />
                        <RangeControl
                            label={__('Margin Bottom (PX)')}
                            value={bodyBottom}
                            onChange={ newSize => setAttributes( { bodyBottom: newSize } ) }
                        />
                        
                    </PanelBody>
                    
                    <PanelBody
                       title={__('Author')}
                       initialOpen={true}
                    >
                        { authorImgUrl &&
                            <img src={ authorImgUrl } width="100%" height="auto" />
                        }
                        <MediaUpload
                            allowedTypes={ ["image"] }
                            onSelect={ media => {
                                setAttributes( {
                                    authorImgId: media.id,
                                    authorImgUrl: ( 'undefined' === typeof media.sizes.thumbnail ) ? media.url : media.sizes.thumbnail.url 
                                } )
                            } }
                            type="image"
                            value={ authorImgId }
                            render={({ open }) => (
                                <IconButton
                                    label={ __( "Change Author Image" ) }
                                    icon="edit"
                                    onClick={ open }
                                >{ __("Change Author Image") }</IconButton>
                            )}
                        />
                        { authorImgUrl && (
                            <SelectControl
                                label={__('Image Style')}
                                options={RADIUS}
                                value={imgRadius}
                                onChange={ newWeight => setAttributes( { imgRadius: newWeight } ) }
                            />
                        ) }
                        { authorImgUrl && (
                            <RangeControl
                                label={__('Size')}
                                max='200'
                                value={imgSize}
                                onChange={newSize => setAttributes( { imgSize: newSize } ) }
                            />
                        ) }
                        { authorImgUrl && (
                            <RangeControl
                                label={__('Border Width (PX)')}
                                value={imgBorder}
                                onChange={newSize => setAttributes( { imgBorder: newSize } ) }
                            />
                        ) }
                        { authorImgUrl && (
                            <PanelColor
                                label={__('Border Color')}
                                colorValue={imgBorderColor}
                            >
                                <ColorPalette
                                    value={imgBorderColor}
                                    onChange= { newColor => setAttributes( { imgBorderColor: newColor } ) }
                                />
                            </PanelColor>
                        ) }
                        <p>{__('Author HTML Tag')}</p>
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
                    </PanelBody>
                    <PanelBody
                       title={__('Company')}
                       initialOpen={false}
                    >
                       <Toolbar
                           controls={
                               '123456'.split('').map( ( tag ) => (
                               {
                                   icon: 'heading',
                                   isActive: 'H' + tag === authorComTag,
                                   onClick: () => setAttributes( { authorComTag: 'H' + tag } ),
                                   subscript: tag
                                   }
                               )
                           )
                       }
                       />
                    </PanelBody>
                   <PanelBody
                      title={__('Quotations')}
                      initialOpen={false}
                   >
                      <RangeControl
                          label={__('Size (EM)')}
                          value={quotSize}
                          min='1'
                          max='12'
                          onChange={newSize => setAttributes( { quotSize: newSize } ) }
                      />
                      <PanelColor
                          label={__('Color')}
                          colorValue={quotColor}
                      >
                          <ColorPalette
                              value={quotColor}
                              onChange= { newColor => setAttributes( { quotColor: newColor } ) }
                          />
                      </PanelColor>
                      
                   </PanelBody>
                   
                    
                   
                </InspectorControls>
            ),
            <div
                className={`${className}__wrap`}
            >
                <div 
                    className={`${className}__container`}
                >
                    <span
                        className={`${className}__upper`}
                    >
                        <PremiumUpperQuote
                            size={quotSize}
                            color={quotColor}
                        />
                    </span>
                    <div
                        className={`${className}__content`}
                        style={{
                            textAlign: align,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap`}
                        >
                            { authorImgUrl && (
                                <img
                                    className={`${className}__img`}
                                    src={`${authorImgUrl}`}
                                    alt="Author"
                                    style={{
                                        borderWidth: imgBorder + 'px',
                                        borderRadius: imgRadius,
                                        borderColor: imgBorderColor,
                                        width: imgSize + 'px',
                                        height: imgSize + 'px',
                                    }}
                                />
                            ) }
                        </div>
                        <div
                            className={`${className}__text_wrap`}
                        >
                            <div>
                                <RichText
                                    tagName={'p'}
                                    className={`${className}__text`}
                                    onChange={newText => setAttributes( { text: newText } ) }
                                    value={text}
                                    placeholder= 'Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.'
                                    style={{
                                        color: bodyColor,
                                        fontSize: bodySize + 'px',
                                        lineHeight: bodyLine + 'px',
                                        marginTop: bodyTop + 'px',
                                        marginBottom: bodyBottom + 'px',
                                    }}
                                    isSelected={isSelected}
                                    keepPlaceholderOnFocus
                                />
                            </div>
                        </div>
                        <span 
                            className={`${className}__info`}
                        >
                            <RichText
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__author`}
                                onChange={newText => setAttributes( { title: newText } ) }
                                placeholder={__('John Doe')}
                                value={title}
                                isSelected={false}
                                keepPlaceholderOnFocus
                            />
                            <span className={`${className}__sep`}> - </span>
                            <RichText
                                tagName={authorComTag.toLowerCase()}
                                className={`${className}__author_comp`}
                                onChange={newText => setAttributes( { authorCom: newText } ) }
                                placeholder={__('Company Name')}
                                value={authorCom}
                                isSelected={false}
                                keepPlaceholderOnFocus
                            />

                        </span>
                    </div>
                    <span
                        className={`${className}__lower`}
                    >
                        <PremiumLowerQuote
                            size={quotSize}
                            color={quotColor}
                        />
                    </span>
                    
                </div>
            </div>
            
        ];
    },
    save: (props)   => {
        const {
            align,
            authorImgId,
            authorImgUrl,
            imgRadius,
            imgBorder,
            imgBorderColor,
            imgSize,
            text,
            titleTag,
            title,
            authorComTag,
            authorCom,
            quotSize,
            quotColor,
            bodyColor,
            bodySize,
            bodyLine,
            bodyTop,
            bodyBottom,
        } = props.attributes;
        return [
            <div
                className={`${className}__wrap`}
            >
                <div 
                    className={`${className}__container`}
                >
                    <span
                        className={`${className}__upper`}
                    >
                        <PremiumUpperQuote
                            size={quotSize}
                            color={quotColor}
                        />
                    </span>
                    <div
                        className={`${className}__content`}
                        style={{
                            textAlign: align,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap`}
                        >
                            { authorImgUrl && (
                                <img
                                    className={`${className}__img`}
                                    src={`${authorImgUrl}`}
                                    alt="Author"
                                    style={{
                                        borderWidth: imgBorder + 'px',
                                        borderRadius: imgRadius,
                                        borderColor: imgBorderColor,
                                        width: imgSize + 'px',
                                        height: imgSize + 'px'
                                    }}
                                />
                            ) }
                        </div>
                        <div
                            className={`${className}__text_wrap`}
                        >
                            <div>
                                <RichText.Content
                                    tagName={'p'}
                                    className={`${className}__text`}
                                    value={text}
                                    style={{
                                        color: bodyColor,
                                        fontSize: bodySize + 'px',
                                        lineHeight: bodyLine + 'px',
                                        marginTop: bodyTop + 'px',
                                        marginBottom: bodyBottom + 'px',
                                    }}
                                />
                            </div>
                        </div>
                        <span 
                            className={`${className}__info`}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__author`}
                                value={title}
                            />
                            <span className={`${className}__sep`}> - </span>
                            <RichText.Content
                                tagName={authorComTag.toLowerCase()}
                                className={`${className}__author_comp`}
                                value={authorCom}
                            />

                        </span>
                    </div>
                    <span
                        className={`${className}__lower`}
                    >
                        <PremiumLowerQuote
                            color={quotColor}
                            size={quotSize}
                        />
                    </span>
                    
                </div>
            </div>
            
        ];
    }
});