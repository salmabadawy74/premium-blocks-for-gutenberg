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
        type,
        tabIndex
    } = attributes

   const renderTabs = repeatertabs.map((item, index) => {
            return ( < div className = {
                `premium-tab-title-${type} ${tabIndex-1 == index? `premium-tab-title-active-${type}`: ""} `
              } >
               <a style={{color: titleColor}}>{item.title}</a>
            </div>
            )
        })

        const renderContents = repeatertabs.map((item, index) => {
          return ( < div className = {
                `premium-tab-content-${type} ${tabIndex-1 == index? `premium-tab-content-active-${type}`:""}`
              } >
                  <RichText.Content
                    tagName="p"
                    value={item.content}
                    onChange = {
                        (newText) => changeContentValue(newText, index)
                    }
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
            <div className={`premium-tab`} data-type={`${type}`}>
                <div className={`premium-tab-view-${type}`}
                
                    style={{
                        textAlign: align,
                    }}>
                      <div className={`premium-tab-title__wrap-view-${type}`}>
                    {
                      renderTabs
                    }
                    </div>
                    <div className={`premium-tab-content__wrap-view-${type}`}>
                    {
                      renderContents
                    }
                    </div>
                </div>
            </div>
            </div>
    )
}