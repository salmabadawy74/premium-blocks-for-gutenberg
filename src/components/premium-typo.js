import PremiumResponsive from "./premium-responsive";
import googleFonts from "./premium-fonts";
import WebFont from 'webfontloader';
import Select from "react-select";
import PremiumRangeControl from './premium-range-control';
import TypoComponent from './typo-control/outside-typo'

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const {
    SelectControl,
    ToggleControl,
    Dropdown,
    Button,
    Popover,
    TextControl
} = wp.components;

export default class PremiumTypo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fontFamily: this.props.fontFamily || "System Default",
            size: this.props.size,
            weight: this.props.weight, //
            style: this.props.style,//
            spacing: this.props.spacing,
            line: this.props.line,
            upper: this.props.upper,//
            sizeUnit: this.props.sizeUnit || 'px',
            isVisible: false,
            currentView: '',
            search: this.props.fontFamily || "System Default",
        }

        this.defaultValue = {
            fontFamily: "System Default",
            variation: 'n4',
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
            onChangeWeight = () => { },
            onChangeStyle = () => { },
            onChangeSpacing = () => { },
            onChangeLine = () => { },
            onChangeUpper = () => { },
            onResetClick = () => { },
        } = this.props;

        const {
            fontFamily,
            size,
            weight,
            style,
            spacing,
            line,
            upper,
            sizeUnit,
            isVisible,
            currentView,
            search,

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

        // const [isVisible, setIsVisible] = useState(false);
        const toggleVisible = (v) => {
            console.log(v)
            setAttributes({ isVisible: true })
            this.setState({
                isVisible: true,
                currentView: v
            })
            // setIsVisible((state) => !state);
        };

        const setSearch = (v) => {
            this.setState({
                search: v
            })
        }

        const changeFont = (v) => {
            console.log(v)
            this.setState({
                fontFamily: v.value
            })
            onFontfamilyChange(v)
        }

        const renderFonts = fonts.map((item, index) => {
            return (< div className={`kmt-typography-single-font active`} key={index} onClick={(v) => changeFont(item)}>
                <span className="kmt-font-name">{item.label}</span>
            </div>
            )
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
                            <span
                                className="kmt-font"
                                onClick={() => {
                                    toggleVisible("fonts")
                                }}
                            >
                                <span>
                                    {fontFamily}
                                </span>
                                {isVisible && currentView == 'fonts' &&
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
                            <span
                                className="kmt-size"
                                onClick={() => {
                                    toggleVisible("options")
                                }}
                            >
                                {size}{sizeUnit}
                                {isVisible && currentView == 'options' && <Popover><span>options</span></Popover>}

                            </span>
                            <span
                                className="kmt-weight"
                                onClick={() => {
                                    toggleVisible("variations")
                                }}
                            >{weight}
                                {isVisible && currentView == 'variations' && <Popover><span>variations</span></Popover>}
                            </span>
                        </div>
                        {/* <Button variant="secondary" onClick={() => toggleVisible()}>
                        Toggle Popover!
                        {isVisible && <Popover>Popover is toggled!</Popover>}
                    </Button> */}
                        {/* <TypoComponent fontFamily={fontFamily} size={size} sizeUnit={sizeUnit} weight={weight} /> */}
                        <div className="kmt-spacing-btn-reset-wrap">
                            <button
                                className="kmt-reset-btn "
                                disabled={
                                    JSON.stringify(this.state) ===
                                    JSON.stringify(this.defaultValue)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({ ...this.state, ...this.defaultValue })
                                }}
                            ></button>
                        </div>
                    </div>
                </div>
                {/* <Dropdown
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
                                <PremiumResponsive
                                    type={this.props.fontSizeType}
                                    typeLabel={this.props.fontSizeType.label}
                                    sizeMobile={this.props.fontSizeMobile}
                                    sizeMobileLabel={this.props.fontSizeMobile.label}
                                    sizeTablet={this.props.fontSizeTablet}
                                    sizeTabletLabel={this.props.fontSizeTablet.label}
                                    size={this.props.fontSize}
                                    sizeLabel={this.props.fontSize.label}
                                    sizeMobileText={
                                        !this.props.fontSizeLabel
                                            ? __("Font Size")
                                            : this.props.fontSizeLabel
                                    }
                                    sizeTabletText={
                                        !this.props.fontSizeLabel
                                            ? __("Font Size")
                                            : this.props.fontSizeLabel
                                    }
                                    sizeText={
                                        !this.props.fontSizeLabel
                                            ? __("Font Size")
                                            : this.props.fontSizeLabel
                                    }
                                    steps={0.1}
                                    onResetClick={onResetClick}
                                    {...this.props}
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
                /> */}
            </div>
        );
    }
}
