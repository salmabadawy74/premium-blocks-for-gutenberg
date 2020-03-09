import classnames from "classnames"
import styling from "./styling"
import PremiumRange from "../../components/premium-range-responsive";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumPaddingR from "../../components/premium-padding-responsive";
import PremiumBorder from "../../components/premium-border";

const { __ } = wp.i18n

let isBoxUpdated = null;

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
    RichText
} = wp.editor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    Toolbar,
    TextControl,
    ToggleControl,
} = wp.components

class edit extends Component {

    constructor() {
        super(...arguments);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-progress-bar-" + this.props.clientId)
        document.head.appendChild($style)
    }


    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            multiStage,
            percentage,
            label,
            progressBarHeight,
            progressBarHeightTablet,
            progressBarHeightType,
            progressBarHeightMobile,
            progressBarRadius,
            progressBarRadiusTablet,
            progressBarRadiusType,
            progressBarRadiusMobile,
            progressBarbgColor,
            progressBarColor,
            labelColor,
            LabelfontSize,
            LabelfontSizeMobile,
            LabelfontSizeTablet,
            LabelfontSizeType,
            LabelWeight,
            LabelStyle,
            LabelUpper,
            LabelLetter,
            percentageColor,
            percentagefontSize,
            percentagefontSizeMobile,
            percentagefontSizeTablet,
            percentagefontSizeType,
            percentageWeight,
            percentageStyle,
            percentageLetter,
            progress,
            repeaterItems
        } = attributes

        var element = document.getElementById("premium-style-progress-bar-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const mainClasses = classnames(className, "premium-progress-bar");
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
                        title={__("Progress Bar (Tab)")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Multiple Stage")}
                            checked={multiStage}
                            onChange={newCheck => setAttributes({ multiStage: newCheck })}
                        />
                        {!multiStage && (
                            <Fragment>
                                <TextControl
                                    label={__("Label")}
                                    value={label}
                                    onChange={value => setAttributes({ label: value })}
                                />
                                <TextControl
                                    label={__("Percentage")}
                                    value={percentage}
                                    onChange={value => setAttributes({ percentage: value })}
                                />
                            </Fragment>
                        )}
                        {/* <TextControl
                            label={__("Progress")}
                            value={progress}
                            onChange={value => setAttributes({ progress: value })}
                        /> */}
                        <RangeControl
                            label={__("Progress")}
                            value={progress}
                            min="1"
                            max="100"
                            onChange={value => setAttributes({ progress: value })}
                        />
                        <Fragment>
                            <div className="premium-progress-bar-control-content">
                                <label>
                                    <span className="premium-progress-bar-control-title">Label</span>
                                </label>
                                <div></div>
                                <div>
                                    <button
                                        className={"premium-progress-bar-btn"}
                                        onClick={() => {
                                            return setAttributes({
                                              repeaterItems: repeaterItems.concat([
                                                {
                                                  title: __("Label"),
                                                  percentage: __("50")
                                                }
                                              ])
                                            });
                                          }}
                                    >
                                        <i className="dashicons dashicons-plus premium-progress-bar-icon" />
                                        {__("Add New Item")}
                                    </button>
                                </div>
                            </div>
                        </Fragment>
                    </PanelBody>
                    <PanelBody
                        title={__("Progress Bar Style (Tab)")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: progressBarHeightType, label: __("progressBarHeightType") }}
                            range={{ value: progressBarHeight, label: __("progressBarHeight") }}
                            rangeMobile={{ value: progressBarHeightMobile, label: __("progressBarHeightMobile") }}
                            rangeTablet={{ value: progressBarHeightTablet, label: __("progressBarHeightTablet") }}
                            rangeLabel={__("Height")}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: progressBarRadiusType, label: __("progressBarRadiusType") }}
                            range={{ value: progressBarRadius, label: __("progressBarRadius") }}
                            rangeMobile={{ value: progressBarRadiusMobile, label: __("progressBarRadiusMobile") }}
                            rangeTablet={{ value: progressBarRadiusTablet, label: __("progressBarRadiusTablet") }}
                            rangeLabel={__("Border Radius")}
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={progressBarbgColor}
                            onChange={newValue =>
                                setAttributes({
                                    progressBarbgColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Progressbar Color")}</p>
                        <ColorPalette
                            value={progressBarColor}
                            onChange={newValue =>
                                setAttributes({
                                    progressBarColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Label Style (Tab)")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={labelColor}
                            onChange={newValue =>
                                setAttributes({
                                    labelColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: LabelfontSizeType, label: __("LabelfontSizeType") }}
                            fontSize={{ value: LabelfontSize, label: __("LabelfontSize") }}
                            fontSizeMobile={{ value: LabelfontSizeMobile, label: __("LabelfontSizeMobile") }}
                            fontSizeTablet={{ value: LabelfontSizeTablet, label: __("LabelfontSizeTablet") }}
                            weight={LabelWeight}
                            style={LabelStyle}
                            spacing={LabelLetter}
                            upper={LabelUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ LabelWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ LabelStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ LabelLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ LabelUpper: check })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Percentage Style (Tab)")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={percentageColor}
                            onChange={newValue =>
                                setAttributes({
                                    percentageColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: percentagefontSizeType, label: __("percentagefontSizeType") }}
                            fontSize={{ value: percentagefontSize, label: __("percentagefontSize") }}
                            fontSizeMobile={{ value: percentagefontSizeMobile, label: __("percentagefontSizeMobile") }}
                            fontSizeTablet={{ value: percentagefontSizeTablet, label: __("percentagefontSizeTablet") }}
                            weight={percentageWeight}
                            style={percentageStyle}
                            spacing={percentageLetter}
                            onChangeWeight={newWeight =>
                                setAttributes({ percentageWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ percentageStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ percentageLetter: newValue })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{
                textAlign: align,
            }}>
                <div className={`premium-progress-bar`}
                    style={{
                        textAlign: align,
                    }}>
                    {!multiStage && (
                        <p className="premium-progress-bar-left-label">
                            <span>{label}</span>
                        </p>
                    )}
                    {!multiStage && (
                        <p className="premium-progress-bar-right-label">
                            <span>{percentage}</span>
                        </p>
                    )}
                    {multiStage && (
                        <div className="premium-progress-bar-multiple-label">
                            <p className="premium-progress-bar-center-label">
                                {label}
                                <span className="premium-progress-bar-percentage">{percentage}</span>
                            </p>
                        </div>
                    )}
                    <div className="premium-progress-bar-clear"></div>
                    <div className="premium-progress-bar-progress">
                        <div className="premium-progress-bar-progress-bar"></div>
                    </div>
                </div>
            </div>
        ]
    }
}

export default edit