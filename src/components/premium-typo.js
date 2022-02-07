import googleFonts from "./premium-fonts";
import WebFont from 'webfontloader';
import PremiumRangeControl from './premium-range-control'

const { __ } = wp.i18n;
const { Component } = wp.element;

const {
    SelectControl,
    Popover,
    TextControl
} = wp.components;

export default class PremiumTypo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fontFamily: this.props.fontFamily || "System Default",
            line: this.props.line,
            upper: this.props.upper,//
            sizeUnit: this.props.sizeUnit || 'px',
            isVisible: false,
            currentView: '',
            search: this.props.fontFamily || "System Default",
            showUnit: this.props.showUnit || false
        }

        this.defaultValue = {
            fontFamily: "System Default",
            variation: '400',
            size: {
                desktop: "15",
                "desktop-unit": "px",
                tablet: "",
                "tablet-unit": "px",
                mobile: "",
                "mobile-unit": "px",
            },
            sizeUnit: "px",
            line: {
                desktop: "",
                "desktop-unit": "px",
                tablet: "",
                "tablet-unit": "px",
                mobile: "",
                "mobile-unit": "px",
            },
            spacing: {
                desktop: "",
                "desktop-unit": "px",
                tablet: "",
                "tablet-unit": "px",
                mobile: "",
                "mobile-unit": "px",
            },

            "text-transform": "none",
            "text-decoration": "none",
        };

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
            setAttributes,
            onChangeFamily = () => { },
            onChangeSize = () => { },
            onChangeSizeTablet = () => { },
            onChangeSizeMobile = () => { },
            onChangeSizeUnit = () => { },
            onChangeWeight = () => { },
            onChangeStyle = () => { },
            onChangeSpacing = () => { },
            onChangeLine = () => { },
            onChangeLineUnit = () => { },
            onChangeLetterUnit = () => { },
            onChangeUpper = () => { },
            onResetClick = () => { },
            onChangeTextTransform = () => { },
            onChangeTextDecoration = () => { },
            size,
            line,
            weight,
            spacing,
            style,
            titleLineUnit,
            titleLetterUnit,
            textTransform,
            textDecoration,
            fontSizeMobile,
            fontSizeTablet,
            fontSize,
            fontSizeType
        } = this.props;

        const {
            fontFamily,
            upper,
            sizeUnit,
            isVisible,
            currentView,
            search,
            showUnit
        } = this.state;

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

        const toggleVisible = (v) => {
            this.setState({
                isVisible: true,
                currentView: v
            })
        };

        const setSearch = (v) => {
            this.setState({
                search: v
            })
        }

        const changeFont = (v) => {
            this.setState({
                fontFamily: v.value,
                search: v.value,
            })
            onFontfamilyChange(v)
        }

        const renderFonts = fonts.map((item, index) => {
            return (< div className={`kmt-typography-single-font ${item.label == fontFamily ? 'active' : ''}`} key={index} onClick={() => changeFont(item)}>
                <span className="kmt-font-name">{item.label}</span>
            </div>
            )
        })

        const renderVariations = fonts.map((item, index) => {
            if (item.value == fontFamily) {
                return ((item.weight || []).map((weights, i) => {
                    return <li key={i} className={`${weights == weight ? 'active' : ''}`} onClick={() => { onChangeWeight(weights) }}>
                        <span className="kmt-variation-name">
                            {weights}
                        </span>
                    </li>
                }))
            }
        })

        return (
            <div className="premium-control-toggle kmt-typography">
                <header>
                    <span className="customize-control-title kmt-control-title">
                        <strong>{__("Typography")}</strong>
                    </span>
                </header>
                <div className="kmt-typography-wrapper">
                    <div className="kmt-typohraphy-value">
                        <div className="kmt-typography-title-container">
                            {components.includes('family') &&
                                <span
                                    className="kmt-font"
                                    onClick={() => {
                                        toggleVisible("fonts")
                                    }}
                                >
                                    <span>
                                        {fontFamily}
                                    </span>
                                    {isVisible && currentView == 'fonts' && components.includes('family') &&
                                        <Popover>
                                            <div className="kmt-option-modal kmt-typography-modal">
                                                <div className="kmt-typography-container">
                                                    <div style={{ top: '0px', right: '0px', left: `0px` }}>
                                                        <ul className="kmt-typography-top kmt-switch-panel kmt-static">
                                                            <li className="kmt-font">
                                                                <TextControl
                                                                    value={search}
                                                                    type="search"
                                                                    onChange={(value) => setSearch(value)}
                                                                />
                                                            </li>
                                                        </ul>
                                                        <ul className="kmt-typography-fonts" style={{ width: `100%` }}>
                                                            <div>
                                                                <ul>
                                                                    {renderFonts}
                                                                </ul>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover>
                                    }

                                </span>
                            }
                            <span
                                className="kmt-size"
                                onClick={() => {
                                    toggleVisible("options")
                                }}
                            >
                                {size}{sizeUnit}
                                {isVisible && currentView == 'options' &&
                                    <Popover>
                                        <div className=" kmt-typography-modal">
                                            <div className="kmt-typography-container">
                                                <ul className="kmt-typography-options" style={{ width: `100%` }}>
                                                    {components.includes("size") && (
                                                        <li className="customize-control-kmt-slider">
                                                            <PremiumRangeControl
                                                                defaultValue={0}
                                                                label={__("Font Size")}

                                                                value={{
                                                                    'desktop': fontSize,
                                                                    'tablet': fontSizeTablet,
                                                                    'mobile': fontSizeMobile,
                                                                }}

                                                                onChange={onChangeSize}
                                                                onChangeTablet={onChangeSizeTablet}
                                                                onChangeMobile={onChangeSizeMobile}
                                                                showUnit={showUnit}
                                                                responsive={true}
                                                                onChangeUnit={onChangeSizeUnit}
                                                                unit={fontSizeType}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("line") && (
                                                        <li className="customize-control-kmt-slider">
                                                            <PremiumRangeControl
                                                                label={__("Line Height")}
                                                                value={line}
                                                                onChange={onChangeLine}
                                                                defaultValue={''}
                                                                showUnit={showUnit}
                                                                responsive={true}
                                                                onChangeUnit={onChangeLineUnit}
                                                                unit={titleLineUnit}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("spacing") && (
                                                        <li className="customize-control-kmt-slider">
                                                            <PremiumRangeControl
                                                                label={__("Letter Spacing")}
                                                                value={spacing}
                                                                onChange={onChangeSpacing}
                                                                defaultValue={''}
                                                                onChange={onChangeSpacing}
                                                                showUnit={showUnit}
                                                                responsive={true}
                                                                onChangeUnit={onChangeLetterUnit}
                                                                unit={titleLetterUnit}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("style") && (
                                                        <li className="customize-control-kmt-slider">
                                                            <SelectControl
                                                                label={__("Style")}
                                                                options={STYLE}
                                                                value={style}
                                                                onChange={onChangeStyle}
                                                                onResetClick={onResetClick}
                                                            />
                                                        </li>
                                                    )}
                                                    <li className="kmt-typography-variant">
                                                        {components.includes("upper") && (
                                                            <ul className="kmt-text-transform">
                                                                {['capitalize', 'uppercase'].map((variant) => (
                                                                    <li
                                                                        key={variant}
                                                                        onClick={() => onChangeTextTransform(variant)}
                                                                        className={`${textTransform == variant ? 'active' : ''}`}
                                                                        data-variant={variant}>
                                                                        <i className="kmt-tooltip-top">
                                                                            {variant}
                                                                        </i>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        <ul className="kmt-text-decoration">
                                                            {['line-through', 'underline'].map((variant) => (
                                                                <li
                                                                    key={variant}
                                                                    onClick={() => onChangeTextDecoration(variant)}
                                                                    className={`${textDecoration == variant ? 'active' : ''}`}
                                                                    data-variant={variant}>
                                                                    <i className="kmt-tooltip-top">
                                                                        {variant}
                                                                    </i>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Popover>
                                }
                            </span>
                            {components.includes("weight") && (
                                <span
                                    className="kmt-weight"
                                    onClick={() => {
                                        toggleVisible("variations")
                                    }}
                                >{weight}
                                    {isVisible && currentView == 'variations' &&
                                        <Popover>
                                            <div className="kmt-option-modal kmt-typography-modal">
                                                <div className="kmt-typography-container">
                                                    <ul className="kmt-typography-variations">{renderVariations}</ul>
                                                </div>
                                            </div>
                                        </Popover>
                                    }
                                </span>
                            )}
                        </div>

                        <div className="kmt-spacing-btn-reset-wrap">
                            <button
                                className="kmt-reset-btn "
                                disabled={
                                    JSON.stringify(this.state) ===
                                    JSON.stringify(this.defaultValue)
                                }
                                onClick={(e) => {
                                    onResetClick();
                                    e.preventDefault();
                                    this.setState({ ...this.state, ...this.defaultValue })
                                }}
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
