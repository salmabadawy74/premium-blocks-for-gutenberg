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
        type
    } = attributes

   const renderTabs = repeatertabs.map((item, index) => {
            return ( < div className = {
                  `premium-tab-title ${type== 'vertical'? "premium-tab-title-vertical":""} ${item.active? type== 'vertical'?"premium-tab-title-vertical-active": "premium-tab-title-active": ""} `
                } >
               <a style={{color: titleColor}}>{item.title}</a>
            </div>
            )
        })

        const renderContents = repeatertabs.map((item, index) => {
          return ( < div className = {
                `premium-tab-content ${type== 'vertical'? "premium-tab-content-vertical":""} ${item.active? type== 'vertical'?"premium-tab-content-vertical-active": "premium-tab-content-active": ""}`
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
            <div className={`premium-tab ${type =='vertical'?"premium-tab-view-vertical":""}`}
                    style={{
                        textAlign: align,
                    }}>
                      <div className={`${type =='vertical'?"premium-tab-title__wrap-view-vertical":"premium-tab-title__wrap"}`}>
                    {
                      renderTabs
                    }
                    </div>
                    <div className={`${type =='vertical'?"premium-tab-content__wrap-view-vertical":"premium-tab-content__wrap"}`}>
                    {
                      renderContents
                    }
                    </div>
                </div>
            </div>
    )
}