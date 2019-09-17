
const save = props => {
    const {
        hoverEffect,
        imgSize,
        imgBorderRadius,
        imgName
    } = props.attributes;

    return (
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
    );

};

export default save;