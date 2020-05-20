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
        image,
        link,
        url,
        iconAlign,
        stripePosition,
        stripeAlign,
    } = attributes
    console.log(image);
    

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
                <div className={`${style}`}>
                  <h2 className={`premium-title-header premium-title-${style}__wrap ${iconValue?iconPosition:""} ${iconPosition=='top'? `premium-title-${iconAlign}`:""}`}>
                    {
                      iconValue && iconType == 'icon' && style != 'style7' && <i className={`premium-title-icon ${icon}`}/>
                    }
                    {
                      iconValue && iconType == 'image' && image && style != 'style7' && < img className = {`premium-title-icon`} src = {image.url}/>
                    }
                      {style == 'style7' ? !iconValue ?<Fragment> <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                        <span className={`premium-title-style7-stripe-span`}></span>
                        </span>
                        <span className={`premium-title-text-title`}>{title}</span>
                        </Fragment>
                      : iconPosition !='top'? <Fragment><span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                      <span className={`premium-title-style7-stripe-span`}></span>
                      </span>
                    <div className={`premium-title-style7-inner-title`}>
                      {
                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                      }
                      {
                        iconValue && iconType == 'image' && image && < img className = {`premium-title-icon`} src = {image.url}/>
                      }
                      <span className={`premium-title-text-title`}>{title}</span>
                      </div>
                      </Fragment>
                      : <div className={`premium-title-style7-inner-title`}>
                      {
                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                      }
                      {
                        iconValue && iconType == 'image' && image && < img className = {`premium-title-icon`} src = {image.url}/>
                      }
                      {iconPosition =='top' &&<span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                      <span className={`premium-title-style7-stripe-span`}></span>
                      </span>
                    }
                      <span className={`premium-title-text-title`}>{title}</span>
                      </div>
                      :<span className={`premium-title-text-title`}>{title}</span>
                    }
                    {link && <a href={`${url}`}></a>}
                  </h2>
                </div>
                </div>
            </div>
    )
}