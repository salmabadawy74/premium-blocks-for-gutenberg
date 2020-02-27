import classnames from "classnames"
import styling from "./styling"
import PremiumRange from "../../components/premium-range-responsive";

const { __ } = wp.i18n

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    MediaUpload,
    ColorPalette,
    RichText
} = wp.blockEditor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    Toolbar,
    TextControl,
    ToggleControl,
    TextareaControl,
} = wp.components


class edit extends Component {

    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-content-switcher-" + this.props.clientId)
        document.head.appendChild($style)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            showLabel,
            firstLabel,
            secondLabel,
            display,
            firstContent,
            secondContent,
            switchCheck,
            firstcontentlign,
            secondcontentlign,
            switchSize,
            switchSizeTablet,
            switchSizeType,
            switchSizeMobile
        } = attributes

        const DISPLAY = [
            {
                label: __("Block"),
                value: "block"
            },
            {
                label: __("Inline"),
                value: "inline"
            }
        ];
        const ALIGNS = ["left", "center", "right"];

        const changeSwitch = () => {
            setAttributes({ switchCheck: !switchCheck })
        }

        var element = document.getElementById("premium-style-content-switcher-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const addFontToHead = fontFamily => {
            const head = document.head;
            const link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href =
                "https://fonts.googleapis.com/css?family=" +
                fontFamily.replace(/\s+/g, "+") +
                ":" +
                "regular";
            head.appendChild(link);
        };

        const onChangeTitleFamily = fontFamily => {
            setAttributes({ titleFont: fontFamily });
            if (!fontFamily) {
                return;
            }
            addFontToHead(fontFamily);
        };
        const mainClasses = classnames(className, "premium-content-switcher");
        return [
            isSelected && (
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(value) => {
                            setAttributes({ align: value })
                        }}
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls>
                    <PanelBody
                        title={__("General Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Show Labels")}
                            checked={showLabel}
                            onChange={newCheck => setAttributes({ showLabel: newCheck })}
                        />
                        {showLabel && (
                            <Fragment>
                                <TextControl
                                    label={__("First Label")}
                                    value={firstLabel}
                                    onChange={value => setAttributes({ firstLabel: value })}
                                />
                                <TextControl
                                    label={__("Second Label")}
                                    value={secondLabel}
                                    onChange={value => setAttributes({ secondLabel: value })}
                                />
                                <SelectControl
                                    label={__("Display")}
                                    options={DISPLAY}
                                    value={display}
                                    onChange={newValue => setAttributes({ display: newValue })}
                                />
                            </Fragment>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("First Content")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextareaControl
                            label={__("Content")}
                            value={firstContent}
                            onChange={value => setAttributes({ firstContent: value })}
                        />
                        <p>{__("Alignment")}</p>
                        <Toolbar
                            controls={ALIGNS.map(contentAlign => ({
                                icon: "editor-align" + contentAlign,
                                isActive: contentAlign === firstcontentlign,
                                onClick: () => setAttributes({ firstcontentlign: contentAlign })
                            }))}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Second Content")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextareaControl
                            label={__("Content")}
                            value={secondContent}
                            onChange={value => setAttributes({ secondContent: value })}
                        />
                        <p>{__("Alignment")}</p>
                        <Toolbar
                            controls={ALIGNS.map(contentAlign => ({
                                icon: "editor-align" + contentAlign,
                                isActive: contentAlign === secondcontentlign,
                                onClick: () => setAttributes({ secondcontentlign: contentAlign })
                            }))}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Switcher Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: switchSizeType, label: __("switchSizeType") }}
                            range={{ value: switchSize, label: __("switchSize") }}
                            rangeMobile={{ value: switchSizeMobile, label: __("switchSizeMobile") }}
                            rangeTablet={{ value: switchSizeTablet, label: __("switchSizeTablet") }}
                            rangeLabel={__("Size")}
                        />
                    </PanelBody>
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{
                textAlign: align,
            }} id={`${mainClasses}-wrap-${this.props.clientId}`}>
                <div className={`premium-content-switcher`}
                    style={{
                        textAlign: align,
                    }}>
                    <div className={`premium-content-switcher-toggle-${display}`}
                        style={{
                            textAlign: align,
                            justifyContent: align == "right" ? "flex-end" : align
                        }}>
                        {showLabel && (<div className="premium-content-switcher-first-label">
                            <h3>{firstLabel}</h3>
                        </div>
                        )}
                        <div className="premium-content-switcher-toggle-switch">
                            <label className="premium-content-switcher-toggle-switch-label">
                                <input type="checkbox" onClick={() => changeSwitch()} />
                                <span className="premium-content-switcher-toggle-switch-slider round"></span>
                            </label>
                        </div>
                        {showLabel && (<div className="premium-content-switcher-second-label">
                            <h3>{secondLabel}</h3>
                        </div>
                        )}
                    </div>
                    <div className="premium-content-switcher-list">
                        <ul className="premium-content-switcher-two-content">
                            <li className={`premium-content-switcher-${switchCheck ? "is-hidden" : "is-visible"}`}>
                                <RichText
                                    tagName="p"
                                    className={`premium-content-switcher-first-content`}
                                    value={firstContent}
                                    onChange={value => {
                                        setAttributes({ firstContent: value })
                                    }}
                                    style={{
                                        textAlign: firstcontentlign,
                                        justifyContent: firstcontentlign
                                    }}
                                />
                            </li>
                            <li className={`premium-content-switcher-${switchCheck ? "is-visible" : "is-hidden"}`}>
                                <RichText
                                    tagName="p"
                                    className={`premium-content-switcher-second-content`}
                                    value={secondContent}
                                    onChange={value => {
                                        setAttributes({ secondContent: value })
                                    }}
                                    style={{
                                        textAlign: secondcontentlign,
                                        justifyContent: secondcontentlign
                                    }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        ]
    }
}

export default edit