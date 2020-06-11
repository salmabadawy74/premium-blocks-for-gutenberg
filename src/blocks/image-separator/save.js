import classnames from "classnames"

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        iconType,
        icon,
        imageURL,
        link,
        url,
        linkTarget
    } = attributes

    let target = (linkTarget) ? "_blank" : "_self"

    return (
        <div
          className={classnames(
              className,
              `premium-block-${block_id}`
          )} id={`premium-image-separator-${block_id}`}
          style={{
              textAlign: align,
          }}>
          <div className={`premium-image-separator-container`} style={{
            textAlign: align}}
          >
            {
              iconType === 'icon' && <i className={`${icon}`}/>
            }
            {
              iconType === 'image' && < img src = {imageURL}/>
            }
            {link && <a className="premium-image-separator-link" href={`${url}`} target={target} rel="noopener noreferrer"></a>}
          </div>
        </div>
    )
}