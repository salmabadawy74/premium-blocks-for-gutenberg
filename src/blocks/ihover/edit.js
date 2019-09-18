import PremiumFilters from "../../components/premium-filters";
import PremiumBoxShadow from "../../components/premium-box-shadow";

// For Internationalization
const { __ } = wp.i18n;

//Define used components fron=m wordpress
const { PanelBody , SelectControl , RangeControl , ToggleControl ,TextControl } = wp.components;
const { InspectorControls , URLInput , AlignmentToolbar , ColorPalette } = wp.editor;

const edit = props => {

    const { isSelected, setAttributes, className } = props;
    const {    
        imgSize,
        imgBorderRadius,
        hoverEffect,
        linkCheck,
        linkUrl,
        imgAlign,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        overlayColor,
        overlayOpacity,
        containerShadowColor,
        containerShadowBlur,
        containerShadowHorizontal,
        containerShadowVertical,
        containerShadowPosition,
        imgName
    } = props.attributes;

    const Hover_Effects = [
        {
            value: "style18",
            label: __("Advertising")
        },
        {
            value: "style19",
            label: __("Book Cover")
        },
        {
            value: "style10",
            label: __("Backward")
        },
        {
            value: "style15",
            label: __("Faded In Background")
        },
        {
            value: "style17",
            label: __("Flash Rotation")
        },
        {
            value: "style16",
            label: __("Flip Door")
        },
        {
            value: "style4",
            label: __("Flip Background")
        },
        {
            value: "style9",
            label: __("Heroes Flying-Top")
        },
        {
            value: "style9-1",
            label: __("Heroes Flying-Bottom")
        },
        {
            value: "style9-2",
            label: __("Heroes Flying-Right")
        },
        {
            value: "style2",
            label: __("Reduced Image-Top")
        },
        {
            value: "style2-1",
            label: __("Reduced Image-Left")
        },
        {
            value: "style2-2",
            label: __("Reduced Image-Right")
        },
        {
            value: "style2-3",
            label: __("Reduced Image-Bottom")
        },
        {
            value: "style7",
            label: __("Rotated Image-Left")
        },
        {
            value: "style7-1",
            label: __("Rotated Image-right")
        },
        {
            value: "style8",
            label: __("Rotating Wheel-Left")
        },
        {
            value: "style8-1",
            label: __("Rotating Wheel-Top")
        },
        {
            value: "style8-2",
            label: __("Rotating Wheel-Bottom")
        },
        {
            value: "style8-3",
            label: __("Rotating Wheel-Right")
        },
        {
            value: "style13",
            label: __("Rotated Wheel Image-Left")
        },
        {
            value:"style1",
            label:__("Rotor Cube")
        },
        {
            value:"style11",
            label:__("Slided Out Image")
        },
        {
            value:"style12",
            label:__("Slided In Image")
        },
        {
            value: "style5",
            label: __("Zoom In")
        },
        {
            value: "style5-1",
            label: __("Zoom Out")
        },
        {
            value: "style20",
            label:__("spinner")
        }
    ];

    // 'style20'       => 'Spinner',

    return [
        isSelected && (
            <InspectorControls>

                {/* Image options */}

                <PanelBody
                    title={__("Image")}
                    className="premium-panel-body"
                    initialOpen={false}  
                >
                    <div className="premium-control-toggle">
                        <RangeControl
                            label={__("Img Size")}
                            value={imgSize}
                            onChange={newImgSize => setAttributes({ imgSize: newImgSize|| "300"})}
                            initialPosition={300}
                            allowReset={true}
                            min={100}
                            max={500}                            
                        /> 
                    </div>
                    <div className="premium-control-toggle">
                        <RangeControl
                            label={__("Border Radius")}
                            value={imgBorderRadius}
                            onChange={newImgBorderRadius => setAttributes({ imgBorderRadius: newImgBorderRadius|| "50"})}
                            initialPosition={50}
                            allowReset={true}
                            min={0}
                            max={100}                           
                        /> 
                    </div>
                    <div className="premium-control-toggle">
                        <SelectControl
                            label = {__("Hover Effects")}
                            options = {Hover_Effects}  
                            value = {hoverEffect}
                            onChange = { newhoverEffect => setAttributes({ hoverEffect : newhoverEffect }) }
                        />
                    </div>
                    <div className="premium-control-toggle">                    
                        <ToggleControl
                            label={__("Link")}
                            checked={linkCheck}
                            onChange={newLinkCheck => setAttributes({ linkCheck: newLinkCheck })}
                        />   
                    </div> 
                    <div className="premium-control-toggle">
                        <p><strong>{__("Alignment")}</strong></p>
                        <AlignmentToolbar
                            value={imgAlign}
                            onChange={ newimgAlign => setAttributes({ imgAlign: newimgAlign })}                        
                        />
                    </div>

                </PanelBody>

                {/* Img css filter option */}

                <PanelBody
                    title={__("Image Style")}
                    className="premium-panel-body"
                    initialOpen={false}                      
                >
                    <div className="premium-control-toggle">
                        <PremiumFilters
                            blur={blur}
                            bright={bright}
                            contrast={contrast}
                            saturation={saturation}
                            hue={hue}
                            onChangeBlur={value => setAttributes({ blur: value })}
                            onChangeBright={value => setAttributes({ bright: value })}
                            onChangeContrast={value => setAttributes({ contrast: value })}
                            onChangeSat={value => setAttributes({ saturation: value })}
                            onChangeHue={value => setAttributes({ hue: value })}
                        />
                    </div>    
                </PanelBody>

                {/* Content options */}

                <PanelBody
                    title={__("Content")}
                    className="premium-panel-body"
                    initialOpen={false}  
                >


                </PanelBody>

                {/* Container Style options */}

                <PanelBody
                    title={__("Container Style")}
                    className="premium-panel-body"
                    initialOpen={false}  
                >
                    <div className="premium-control-toggle">
                        <p>{__("Overlay Color")}</p>
                        <ColorPalette
                            value={overlayColor}
                            onChange ={ newValue => setAttributes({ overlayColor: newValue === undefined ? "transparent" : newValue })}
                            allowReset={true}
                        />
                        <RangeControl
                            label={__("Overlay Opacity")}
                            value={overlayOpacity}
                            min="1"
                            max="100"
                            onChange={ newOpacity => setAttributes({ overlayOpacity : newOpacity === undefined ? "50" : newOpacity })}
                        />
                    </div>
                    <div className="premium-control-toggle">
                        <p>{__("Box Shadow")}</p>
                        <PremiumBoxShadow
                            inner={true}
                            color={containerShadowColor}
                            blur={containerShadowBlur}
                            horizontal={containerShadowHorizontal}
                            vertical={containerShadowVertical}
                            position={containerShadowPosition}
                            onChangeColor={newColor => setAttributes({ containerShadowColor: newColor.hex || "transparent" }) }
                            onChangeBlur={newBlur => setAttributes({ containerShadowBlur: newBlur || "0" })}
                            onChangehHorizontal={newValue => setAttributes({ containerShadowHorizontal: newValue || "0" }) }
                            onChangeVertical={newValue => setAttributes({ containerShadowVertical: newValue || "0" })}
                            onChangePosition={newValue => setAttributes({ containerShadowPosition: newValue })}
                        />
                    </div>

                </PanelBody>

            </InspectorControls>
        ),
        <div className = "premium-ihover-container"  
             style={{
                     backgroundColor: overlayColor || "transparent" , opacity: overlayColor ? 1 - overlayOpacity / 100 : 1 ,
                     boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`
                    }}
        >
            <div className = "premium-ihover-list"  style={{ textAlign : imgAlign || "center" }}>
                <div className = "premium-ihover-item-wrap" style={{borderRadius: (imgBorderRadius || "50") + "%" }}>
                    <div className = { ("premium-ihover-item ") + hoverEffect }  style={{ width:(imgSize || "300")+"px" , height:(imgSize || "300")+"px" }}>
                                                    
                            <div className="premium-ihover-img-wrap"  style={{ width:(imgSize || "300")+"px" , height:(imgSize || "300")+"px"}}>
                                <div className="premium-ihover-img-front">
                                    <div className="premium-ihover-img-inner-wrap"></div>
                                    <img className="premium-ihover-img" src={ ("http://localhost:8888/nesma/wp-content/plugins/premium-blocks-for-gutenberg/assets/img/") + imgName }
                                         style={{ 
                                                    width:(imgSize || "300")+"px" , height:(imgSize || "300")+"px" , borderRadius: (imgBorderRadius || "50") + "%" ,
                                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` 
                                                }}
                                    />
                                </div>
                            </div>
                            <div className="premium-ihover-info-wrap"  style={{ width:(imgSize || "300")+"px" , height:(imgSize || "300")+"px"}}>
                                <div className="premium-ihover-info-back" style={{borderRadius: (imgBorderRadius || "50") + "%" }}>
                                    <div className="premium-ihover-content">
                                        <div className="premium-ihover-content-wrap">
                                            <div className="premium-ihover-title-wrap">
                                                {/* <i className="premium-ihover-icon fa fa-picture-o"></i> */}
                                                <h4 className="premium-ihover-title">Your Title</h4>
                                            </div>
                                            <div className="premium-ihover-divider">
                                                <span className="premium-ihover-divider-line"></span>
                                            </div>
                                            <div className="premium-ihover-description">
                                                <p style={{fontSize:"16px"}}>Unlimited design and customization possibilities with iHover gutenberg block</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>

            </div>

            {/* this line only for test */}
            <p style={{textAlign: "center"}}>hello ihover effect {hoverEffect}</p>
            { linkCheck &&(
                <URLInput
                    value={linkUrl}
                    onChange={newLinkUrl => setAttributes({ linkUrl: newLinkUrl })}            
                />
            )}
        </div>
    ];

};

export default edit;