import classnames from "classnames"

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        iconValueFront,
        iconTypeFront,
        iconFront,
        imageURLFront,
        titleValueFront,
        titleFront,
        descFront,
        descValueFront,
        verticalalignFront,
        horizontalalignFront,
        iconValueBack,
        iconTypeBack,
        iconBack,
        imageURLBack,
        link,
        url,
        titleValueBack,
        titleBack,
        descBack,
        descValueBack,
        verticalalignBack,
        horizontalalignBack,
        effect,
        flipDir,
        animation,
        linkTarget
    } = attributes
    
    let target = (linkTarget) ? "_blank" : "_self"

    return (
        <div
            className={classnames(
                className,
                `premium-block-${block_id}`
            )} id={`premium-flip-box-${block_id}`}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-flip-style-${effect}`} data-animation={`${animation}`}>
                <div className={`premium-flip-box`} style={{
                textAlign: align
              }}>
                <div className={`premium-flip-front premium-flip-front${flipDir}`} style={{textAlign: align}}>
                  <div className="premium-flip-front-overlay">
                    <div className="premium-flip-front-content-container">
                      <div className="premium-flip-front-content" style={{ justifyContent: horizontalalignFront, alignItems: verticalalignFront }}>
                        <div className="premium-flip-text-wrapper">
                          {
                            iconValueFront && iconTypeFront === 'icon' && <i className={`premium-flip-front-icon ${iconFront}`}/>
                          }
                          {
                            iconValueFront && iconTypeFront === 'image' && < img className = {`premium-flip-front-image`} src = {imageURLFront}/>
                          }
                          {
                            titleValueFront && < h3 className = "premium-flip-front-title" >{titleFront}</h3>
                          }
                          {
                            descValueFront&& <div className="premium-flip-front-description">
                              {descFront}
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`premium-flip-back premium-flip-back${flipDir}`} style={{textAlign: align}}>
                  <div className="premium-flip-back-overlay">
                    <div className="premium-flip-back-content-container">
                      {link && <a className="premium-flip-box-full-link" href={`${url}`}
                      target={target} rel="noopener noreferrer"></a>}
                      <div className="premium-flip-back-content" style={{ justifyContent: horizontalalignBack, alignItems: verticalalignBack }}>
                        <div className="premium-flip-back-text-wrapper">
                          {
                            iconValueBack && iconTypeBack === 'icon' && <i className={`premium-flip-back-icon ${iconBack}`}/>
                          }
                          {
                            iconValueBack && iconTypeBack === 'image' && < img className = {`premium-flip-back-image`} src = {imageURLBack}/>
                          }
                          {
                            titleValueBack && < h3 className = "premium-flip-back-title" >{titleBack}</h3>
                          }
                          {
                            descValueBack&& <div className="premium-flip-back-description">
                              {descBack}
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )
}