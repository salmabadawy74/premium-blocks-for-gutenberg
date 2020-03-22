import classnames from "classnames"

const {
    RichText
} = wp.editor

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        repeatertabs,
        titleColor,
    } = attributes

     const renderTabs = repeatertabs.map((item, index) => {
            return ( < div className = {
                  `premium-tab-title ${item.active? "premium-tab-title-active": ""}`
                } >
               <a style={{color: titleColor}}>{item.title}</a>
            </div>
            )
        })

        const renderContents = repeatertabs.map((item, index) => {
          return ( < div className = {
                `premium-tab-content ${item.active? "premium-tab-content-active": ""}`
              } >
                  < RichText.Content
                    tagName="p"
                    value={item.content}
                    />
            </div>
            )
        })

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id}`
        )}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-tab`}
                    style={{
                        textAlign: align,
                    }}>
                      <div className="premium-tab-title__wrap">
                    {
                      renderTabs
                    }
                    </div>
                    <div className="premium-tab-content__wrap">
                    {
                      renderContents
                    }
                    </div>
                </div>
            </div>
    )
}