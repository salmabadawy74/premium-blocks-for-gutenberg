import googleFonts from "./premium-fonts";
import WebFont from 'webfontloader';
import Select from "react-select";
import PremiumRangeControl from './premium-range-control';

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const {
    SelectControl,
    ToggleControl,
    Dropdown,
    Button,
} = wp.components;

export default class PremiumTypo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fontFamily: this.props.fontFamily
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.fontFamily !== this.state.fontFamily) {
            WebFont.load({
                google: {
                    families: this.state.fontFamily
                }
            });

        }
    }
    render() {
        const {
            components,
            size,
            weight,
            style,
            spacing,
            line,
            upper,
            setAttributes,
            fontFamily,
            onChangeFamily = () => { },
            onChangeSize = () => { },
            onChangeWeight = () => { },
            onChangeStyle = () => { },
            onChangeSpacing = () => { },
            onChangeLine = () => { },
            onChangeUpper = () => { },
            onResetClick = () => { },
        } = this.props;

        const STYLE = [
            {
                value: "normal",
                label: "Normal",
            },
            {
                value: "italic",
                label: "Italic",
            },
            {
                value: "oblique",
                label: "Oblique",
            },
        ];
        const fonts = [
            { value: "", label: __("Default", 'premium-block-for-gutenberg'), weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
            { value: "Arial", label: "Arial", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
            { value: "Helvetica", label: "Helvetica", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
            { value: "Times New Roman", label: "Times New Roman", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
            { value: "Georgia", label: "Georgia", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
        ]

        let fontWeight = ""
        Object.keys(googleFonts).map((k, v) => {
            fonts.push(
                { value: k, label: k, weight: googleFonts[k].weight }
            )
            if (k === fontFamily) {
                fontWeight = googleFonts[k].weight

            }
        })

        if (fontWeight === "") {
            fontWeight = fonts[0].weight
        }
        const fontWeightObj = []

        fontWeight.forEach(function (item) {
            fontWeightObj.push(
                { value: item, label: item }
            )
        })

        const onFontfamilyChange = (value) => {
            onFontChange(weight, value.label)
            onChangeFamily(value.value)
        }

        const onFontChange = (weight, fontFamily) => {
            let font_flag
            let new_value
            if (typeof googleFonts[fontFamily] == "object") {
                const gfontsObj = googleFonts[fontFamily].weight
                if (typeof gfontsObj == "object") {
                    gfontsObj.forEach(function (item) {
                        if (weight.value == item) {
                            font_flag = false
                        } else {
                            new_value = item
                            font_flag = true
                            setAttributes({ [weight.label]: new_value })
                            return
                        }
                    })
                }
            }
        }
        return (
            <div className="premium-control-toggle">
                <strong>{__("Typography")}</strong>
                <Dropdown
                    className="premium-control-toggle-btn"
                    contentClassName="premium-control-toggle-content"
                    position="bottom right"
                    renderToggle={({ isOpen, onToggle }) => (
                        <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                            <i className="dashicons dashicons-edit" />
                        </Button>
                    )}
                    renderContent={() => (
                        <Fragment>
                            {components.includes("size") && (
                                <PremiumRangeControl
                                    label={__("Font Size (PX)")}
                                    value={size}
                                    min="10"
                                    max="80"
                                    defaultValue={''}
                                    onChange={onChangeSize}
                                    showUnit={false}
                                />
                            )}
                            {components.includes("responsiveSize") && (
                                <PremiumRangeControl
                                    label={__("Font Size", 'premium-block-for-gutenberg')}
                                    responsive={true}
                                    value={{
                                        'desktop': this.props.fontSize.value,
                                        "tablet": this.props.fontSizeTablet.value,
                                        'mobile': this.props.fontSizeMobile.value
                                    }}
                                    onChange={value => setAttributes({ [this.props.fontSize.label]: value })}
                                    onChangeTablet={value => setAttributes({ [this.props.fontSizeTablet.label]: value })}
                                    onChangeMobile={value => setAttributes({ [this.props.fontSizeMobile.label]: value })}
                                    showUnit={true}
                                    defaultValue={''}
                                    unit={this.props.fontSizeType.value}
                                    onChangeUnit={key => setAttributes({ [this.props.fontSizeType.label]: key })}
                                    units={["px", "em"]}
                                />
                            )}

                            {components.includes('family') && (
                                <Select
                                    options={fonts}
                                    value={{ value: this.props.fontFamily, label: __(`${this.props.fontFamily}`), weight: fontWeightObj }}
                                    isMulti={false}
                                    maxMenuHeight={300}
                                    onChange={onFontfamilyChange}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                />

                            )}
                            {components.includes("weight") && (
                                <SelectControl
                                    label={__("Font Weight", 'premium blocks for gutenberg')}
                                    value={weight}
                                    onChange={onChangeWeight}
                                    options={
                                        fontWeightObj
                                    }
                                />
                            )}
                            {components.includes("style") && (
                                <SelectControl
                                    label={__("Style")}
                                    options={STYLE}
                                    value={style}
                                    onChange={onChangeStyle}
                                    onResetClick={onResetClick}
                                />
                            )}
                            {components.includes("upper") && (
                                <ToggleControl
                                    label={__("Uppercase")}
                                    checked={upper}
                                    onChange={onChangeUpper}
                                    onResetClick={onResetClick}
                                />
                            )}
                            {components.includes("spacing") && (
                                <PremiumRangeControl
                                    label={__("Letter Spacing (PX)")}
                                    value={spacing}
                                    onChange={onChangeSpacing}
                                    defaultValue={''}
                                    onChange={onChangeSpacing}
                                    showUnit={false}
                                />
                            )}
                            {components.includes("line") && (
                                <PremiumRangeControl
                                    label={__("Line Height (PX)")}
                                    value={line}
                                    onChange={onChangeLine}
                                    defaultValue={''}
                                    onChange={onChangeLine}
                                    showUnit={false}
                                />
                            )}

                        </Fragment>
                    )}
                />
            </div>
        );
    }
}
