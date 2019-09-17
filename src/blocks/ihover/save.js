
const save = props => {
    const {
        hoverEffect,
        imgName
    } = props.attributes;

    return (
        <div className = "premium-ihover-container">
            <div className = "premium-ihover-list">
                <div className = "premium-ihover-item-wrap">
                    <div className = { ("premium-ihover-item ") + hoverEffect }>
                        <div className="premium-ihover-img-wrap">
                            <div className="premium-ihover-img-front">
                                <div className="premium-ihover-img-inner-wrap"></div>
                                <img className="premium-ihover-img" src={ ("http://localhost:8888/nesma/wp-content/plugins/premium-blocks-for-gutenberg-master/assets/img/") + imgName } />
                            </div>
                        </div>
                        <div className="premium-ihover-info-wrap">
                            <div className="premium-ihover-info-back">
                                <div className="premium-ihover-content">
                                    <div className="premium-ihover-content-wrap">
                                        <div className="premium-ihover-title-wrap">
                                            <i className="premium-ihover-icon fa fa-picture-o"></i>
                                            <h4 className="premium-ihover-title">Your Title</h4>
                                        </div>
                                        <div className="premium-ihover-description">
                                            <p style={{fontSize:"17px"}}>Unlimited design and customization possibilities with iHover Elementor Widget</p>
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