
// For Internationalization
const { __ } = wp.i18n;

//Define used components fron=m wordpress
const { PanelBody , SelectControl , RangeControl} = wp.components;
const { InspectorControls } = wp.editor;

const edit = props => {

    const { isSelected, setAttributes, className } = props;
    const {
        hoverEffect,
        imgSize,
        imgBorderRadius,
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

                </PanelBody>
            </InspectorControls>
        ),
        <div className = "premium-ihover-container">
            <div className = "premium-ihover-list">
                <div className = "premium-ihover-item-wrap" style={{borderRadius: (imgBorderRadius || "50") + "%" }}>
                    <div className = { ("premium-ihover-item ") + hoverEffect }  style={{ width:(imgSize || "300")+"px" , height:(imgSize || "300")+"px" }}>
                                                    
                            <div className="premium-ihover-img-wrap"  style={{ width:(imgSize || "300")+"px" , height:(imgSize || "300")+"px"}}>
                                <div className="premium-ihover-img-front">
                                    <div className="premium-ihover-img-inner-wrap"></div>
                                    <img className="premium-ihover-img" src={ ("http://localhost:8888/nesma/wp-content/plugins/premium-blocks-for-gutenberg/assets/img/") + imgName }  style={{ width:(imgSize || "300")+"px" , height:(imgSize || "300")+"px" , borderRadius: (imgBorderRadius || "50") + "%"  }}/>
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

        </div>
    ];

};

export default edit;