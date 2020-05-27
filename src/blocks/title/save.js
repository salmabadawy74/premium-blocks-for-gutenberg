import classnames from "classnames"

const {
  Fragment
} = wp.element;

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        style,
        title,
        iconValue,
        iconType,
        icon,
        iconPosition,
        imageURL,
        link,
        url,
        iconAlign,
        stripePosition,
        stripeAlign,
    } = attributes
    

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id}`
        )}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-title`} style={{
                textAlign: align,
              }}>
                <div className={`${style} ${style}-${align}`}>
                  <h2 className={`premium-title-header premium-title-${style}__wrap ${align} ${iconValue?iconPosition:""} ${iconPosition=='top'? `premium-title-${iconAlign}`:""}`}>
                    {style === 'style7' ? <Fragment>
                      {iconPosition !='top' && iconValue && <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                        <span className={`premium-title-style7-stripe-span`}></span>
                        </span>
                      }
                      {!iconValue &&<span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                        <span className={`premium-title-style7-stripe-span`}></span>
                        </span>
                      }
                      <div className={`premium-title-style7-inner-title`}>
                      {
                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                      }
                      {
                        iconValue && iconType == 'image' && < img className = {`premium-title-icon`} src = {imageURL}/>
                      }
                      {iconPosition ==='top' &&<span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                        <span className={`premium-title-style7-stripe-span`}></span>
                        </span>
                      }
                      <span className={`premium-title-text-title`}>{title}</span>
                      </div>
                      </Fragment>
                      : <Fragment>
                        {iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                        }
                        {
                          iconValue && iconType == 'image' && < img className = {`premium-title-icon`} src = {imageURL}/>
                        }
                      <span className={`premium-title-text-title`}>{title}</span>
                      </Fragment>
                    }
                    {link && <a href={`${url}`}></a>}
                  </h2>
                </div>
                </div>
            </div>
    )
}