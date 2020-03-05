import classnames from "classnames"

const {
    RichText
} = wp.editor

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        showLabel,
        firstLabel,
        secondLabel,
        display,
        firstContent,
        secondContent,
        switchCheck,
        firstcontentlign,
        secondcontentlign,
        switchRadius,
        firstLabelColor,
        firstLabelWeight,
        firstLabelLetter,
        firstLabelUpper,
        firstLabelStyle,
        secondLabelColor,
        secondLabelWeight,
        secondLabelLetter,
        secondLabelUpper,
        secondLabelStyle,
        shadowColor,
        shadowBlur,
        shadowHorizontal,
        shadowVertical,
        firstContentColor,
        firstContentBGColor,
        secondContentColor,
        secondContentBGColor,
        effect,
        slide
    } = attributes

    const changeSwitch = () => {
        setAttributes({ switchCheck: !switchCheck })
    }

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id} ${switchCheck}`
        )}
            id={`premium-block-${block_id}`}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-content-switcher`}
                style={{
                    textAlign: align,
                }}>
                <div className={`premium-content-switcher-toggle-${display}`}
                    style={{
                        textAlign: align,
                        justifyContent: align == "right" ? "flex-end" : align,
                        alignItems: align
                    }}>
                    {showLabel && (<div className="premium-content-switcher-first-label">
                        <h3 style={{
                            color: firstLabelColor,
                            letterSpacing: firstLabelLetter + "px",
                            textTransform: firstLabelUpper ? "uppercase" : "none",
                            fontStyle: firstLabelStyle,
                            fontWeight: firstLabelWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                        }}>{firstLabel}</h3>
                    </div>
                    )}
                    <div className="premium-content-switcher-toggle-switch">
                        <label className={`premium-content-switcher-toggle-switch-label ${block_id}`}>
                            <input type="checkbox" />
                            <span className="premium-content-switcher-toggle-switch-slider round"
                                style={{
                                    borderRadius: switchRadius + "px"
                                }}></span>
                        </label>
                    </div>
                    {showLabel && (<div className="premium-content-switcher-second-label">
                        <h3 style={{
                            color: secondLabelColor,
                            letterSpacing: secondLabelLetter + "px",
                            textTransform: secondLabelUpper ? "uppercase" : "none",
                            fontStyle: secondLabelStyle,
                            fontWeight: secondLabelWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                        }}>{secondLabel}</h3>
                    </div>
                    )}
                </div>
                <div className={`premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`}>
                    <ul className="premium-content-switcher-two-content">
                        <li className={`premium-content-switcher-is-visible premium-content-switcher-first-list ${block_id}`}
                            style={{
                                background: firstContentBGColor
                            }}>
                            <RichText.Content
                                tagName="div"
                                format="string"
                                className={`premium-content-switcher-first-content`}
                                value={firstContent}
                                style={{
                                    textAlign: firstcontentlign,
                                    justifyContent: firstcontentlign,
                                    color: firstContentColor
                                }}
                            />
                        </li>
                        <li className={`premium-content-switcher-is-hidden premium-content-switcher-second-list ${block_id}`}
                            style={{
                                background: secondContentBGColor
                            }}>
                            <RichText.Content
                                tagName="div"
                                format="string"
                                className={`premium-content-switcher-second-content`}
                                value={secondContent}
                                style={{
                                    textAlign: secondcontentlign,
                                    justifyContent: secondcontentlign,
                                    color: secondContentColor
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}