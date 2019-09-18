import DefaultImage from "../../components/default-image";

const save = props => {
    const {
        imgUrl,
        imgId,
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

    } = props.attributes;

    return (
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
                                    { imgUrl &&(
                                        <img className="premium-ihover-img" src={ imgUrl }
                                            style={{ 
                                                    width:(imgSize || "300")+"px" , height:(imgSize || "300")+"px" , borderRadius: (imgBorderRadius || "50") + "%" ,
                                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` 
                                            }}
                                        />
                                    )}
                                    { !imgUrl && <DefaultImage/> }
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

                { linkCheck && linkUrl && (
                    <a
                        className={`premium-ihover-link`}
                        href={linkCheck && linkUrl}
                    />
                )}

            </div>

            {/* this line only for test */}
            <p style={{textAlign: "center"}}>hello ihover effect {hoverEffect}</p>

        </div>   
    );

};

export default save;