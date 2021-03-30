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
        type,
        tabIndex,
        tabStyle,
    } = attributes

   const renderTabs = repeatertabs.map((item, index) => {
            return <li className = {
                `premium-tab-nav-list-item ${tabStyle == 'flipped' ? "premium-tab-nav-list-item-flipped" : ""} ${tabIndex-1== index ? 'tab-current' : ""}`
            } >
                <a className={`${tabStyle == 'flipped' ? "premium-tab-link-icon-flipped" : "premium-tab-link-icon"}`}>
                    {item.enableIcon ? <i className={`premium-tab-title-icon ${item.icon}`} /> : ""}
                    <p className="premium-tab-title">{item.title}</p>
                </a>
            </li>
        })

        const renderContents = repeatertabs.map((item, index) => {
          return <section id={`section-tab-content-${index}-${block_id}`} className={`premium-tab-content-section ${tabIndex-1 == index ? `content-current` : ""}`}>
                <div className="premium-tab-content">
                    <div className="premium-tab-content-wrap-inner">
                        <RichText.Content
                            tagName="p"
                            value={item.content}
                        />
                    </div>
                </div>
            </section>
        })

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id}`
        )}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-tab`} data-type={`${type}`} data-setting={`${block_id}`}>
                    <section className="premium-tab-section">
                        <div className={`premium-tab-container premium-tab-${type}`}>
                            <div className="premium-tab-nav"
                                style={{ textAlign: align }}>
                                <ul className={`premium-tab-nav-list premium-tab-${type}`}>
                                    {renderTabs}
                                </ul>
                            </div>
                            <div className={`premium-tab-content-wrap premium-tab-${type}`}>
                                {renderContents}
                            </div>
                            <div className="premium-tab-clearfix"></div>
                        </div>
                    </section>
                </div>
            </div>
    )
}