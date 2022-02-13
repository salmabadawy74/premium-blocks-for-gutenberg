import googleFonts from "./premium-fonts";
import WebFont from 'webfontloader';

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
            return (< div className={`premium-typography-single-font ${item.label == fontFamily ? 'active' : ''}`} key={index} onClick={() => changeFont(item)}>
                <span className="premium-font-name">{item.label}</span>
            </div>
            )
        })

        const renderVariations = fonts.map((item, index) => {
            if (item.value == fontFamily) {
                return ((item.weight || []).map((weights, i) => {
                    return <li key={i} className={`${weights == weight ? 'active' : ''}`} onClick={() => { onChangeWeight(weights) }}>
                        <span className="premium-variation-name">
                            {weights}
                        </span>
                    </li>
                }))
            }
        })

        return (
            <div className="premium-control-toggle premium-typography">
                <header>
                    <span className="customize-control-title premium-control-title">
                        <strong>{__("Typography")}</strong>
                    </span>
                </header>
                <div className="premium-typography-wrapper">
                    <div className="premium-typohraphy-value">
                        <div className="premium-typography-title-container">
                            {components.includes('family') &&
                                <span
                                    className="premium-font"
                                    onClick={() => {
                                        toggleVisible("fonts")
                                    }}
                                >
                                    <span>
                                        {fontFamily}
                                    </span>
                                    {isVisible && currentView == 'fonts' && components.includes('family') &&
                                        <Popover>
                                            <div className="premium-option__modal ">
                                                <div className="premium-typography-container">
                                                    <div style={{ top: '0px', right: '0px', left: `0px` }}>
                                                        <ul className="premium-typography-top premium-switch-panel premium-static">
                                                            <li className="premium-font">
                                                                <TextControl
                                                                    value={search}
                                                                    type="search"
                                                                    onChange={(value) => setSearch(value)}
                                                                />
                                                            </li>
                                                        </ul>
                                                        <ul className="premium-typography-fonts" style={{ width: `100%` }}>
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
                                className="premiumsize"
                                onClick={() => {
                                    toggleVisible("options")
                                }}
                            >
                                {size}{sizeUnit}
                                {isVisible && currentView == 'options' &&
                                    <Popover>
                                        <div className=" ">
                                            <div className="premiumtypography-container">
                                                <ul className="premiumtypography-options" style={{ width: `100%` }}>
                                                    {components.includes("size") && (
                                                        <li className="customize-control-premiumslider">
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
                                                        <li className="customize-control-premiumslider">
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
                                                        <li className="customize-control-premiumslider">
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
                                                        <li className="customize-control-premiumslider">
                                                            <SelectControl
                                                                label={__("Style")}
                                                                options={STYLE}
                                                                value={style}
                                                                onChange={onChangeStyle}
                                                                onResetClick={onResetClick}
                                                            />
                                                        </li>
                                                    )}
                                                    <li className="premiumtypography-variant">
                                                        {components.includes("upper") && (
                                                            <ul className="premiumtext-transform">
                                                                {['capitalize', 'uppercase'].map((variant) => (
                                                                    <li
                                                                        key={variant}
                                                                        onClick={() => onChangeTextTransform(variant)}
                                                                        className={`${textTransform == variant ? 'active' : ''}`}
                                                                        data-variant={variant}>
                                                                        <i className="premiumtooltip-top">
                                                                            {variant}
                                                                        </i>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        <ul className="premiumtext-decoration">
                                                            {['line-through', 'underline'].map((variant) => (
                                                                <li
                                                                    key={variant}
                                                                    onClick={() => onChangeTextDecoration(variant)}
                                                                    className={`${textDecoration == variant ? 'active' : ''}`}
                                                                    data-variant={variant}>
                                                                    <i className="premiumtooltip-top">
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
                                    className="premiumweight"
                                    onClick={() => {
                                        toggleVisible("variations")
                                    }}
                                >{weight}
                                    {isVisible && currentView == 'variations' &&
                                        <Popover>
                                            <div className="premiumoption ">
                                                <div className="premiumtypography-container">
                                                    <ul className="premiumtypography-variations">{renderVariations}</ul>
                                                </div>
                                            </div>
                                        </Popover>
                                    }
                                </span>
                            )}
                        </div>

                        <div className="premiumspacing-btn-reset-wrap">
                            <button
                                className="premiumreset-btn "
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
