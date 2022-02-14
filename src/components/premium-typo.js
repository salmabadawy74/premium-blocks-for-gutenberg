import googleFonts from "./premium-fonts";
import ResponsiveRangeControl from "./RangeControl /responsive-range-control";
import ResponsiveSingleRangeControl from "./RangeControl /single-range-control";
import FontsList from "./typography/fontList";
const { __ } = wp.i18n;
const { Component } = wp.element;
const { SelectControl, Popover, TextControl } = wp.components;

export default class PremiumTypo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fontFamily: this.props.fontFamily || '',
            line: this.props.line,
            upper: this.props.upper,
            weight: this.props.weight,
            size: this.props.size,
            sizeUnit: this.props.sizeUnit || 'px',
            isVisible: false,
            currentView: '',
            search: this.props.fontFamily || "System Default",
            showUnit: this.props.showUnit || false
        }
    }

    render() {
        const {
            components,
            size,
            style,
            spacing,
            line,
            setAttributes,
            fontFamily = '',
            textTransform,
            textDecoration,
            onChangeTextTransform = () => { },
            onChangeTextDecoration = () => { },
            onChangeFamily = () => { },
            onChangeSize = () => { },
            onChangeWeight = () => { },
            onChangeStyle = () => { },
            onChangeSpacing = () => { },
            onChangeLine = () => { },
            onResetClick = () => { },
        } = this.props;

        const {
            sizeUnit,
            isVisible,
            currentView,
            search,
            showUnit,
            weight
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
                { value: k, label: k, weight: googleFonts[k].weight, google: true }
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

        const toggleVisible = (v) => {
            this.setState({
                isVisible: true,
                currentView: v
            })
        };

        const toggleClose = () => {
            if (this.state.isVisible === true) {
                this.setState({
                    isVisible: false,
                    currentView: ''
                });
            }
        };

        const renderVariations = fonts.map((item, index) => {
            if (item.value == fontFamily) {
                return ((item.weight || []).map((weights, i) => {
                    return <li key={i} className={`${weights == weight ? 'active' : ''}`} onClick={() => { this.setState({ weight: weights }), onChangeWeight(weights) }}>
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
                        <strong>{__("Typography", 'premium-block-for-gutenberg')}</strong>
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
                                        <Popover className="premium-typography-option premium-font-family__modal" onClose={toggleClose}>
                                            <div className="premium-option-modal ">
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
                                                        <FontsList linearFontsList={fonts} value={this.state.fontFamily} onPickFamily={onChangeFamily} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover>
                                    }
                                </span>
                            }
                            <span
                                className="premium-size"
                                onClick={() => {
                                    toggleVisible("options")
                                }}
                            >
                                {size}{sizeUnit}
                                {isVisible && currentView == 'options' &&
                                    <Popover className="premium-typography-option" onClose={toggleClose}>
                                        <div className=" ">
                                            <div className="premium-typography-container">
                                                <ul className="premium-typography-options" style={{ width: `100%` }}>
                                                    {components.includes("size") && (
                                                        <li className="customize-control-premium-slider">
                                                            <ResponsiveSingleRangeControl
                                                                label={__("Font Size (PX)", 'premium-block-for-gutenberg')}
                                                                value={size}
                                                                min="10"
                                                                max="80"
                                                                defaultValue={20}
                                                                onChange={onChangeSize}
                                                                showUnit={false}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("responsiveSize") && (
                                                        <li className="customize-control-premium-slider">
                                                            <ResponsiveRangeControl
                                                                label={__("Font Size", 'premium-block-for-gutenberg')}
                                                                value={this.props.fontSize.value}
                                                                onChange={value => setAttributes({ [this.props.fontSize.label]: value })}
                                                                tabletValue={this.props.fontSizeTablet.value}
                                                                onChangeTablet={value => setAttributes({ [this.props.fontSizeTablet.label]: value })}
                                                                mobileValue={this.props.fontSizeMobile.value}
                                                                onChangeMobile={value => setAttributes({ [this.props.fontSizeMobile.label]: value })}
                                                                onChangeUnit={key => setAttributes({ [this.props.fontSizeType.label]: key })}
                                                                unit={this.props.fontSizeType.value}
                                                                showUnit={true}
                                                                defaultValue={20}
                                                                units={["px", "em"]}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("line") && (
                                                        <li className="customize-control-premium-slider">
                                                            <ResponsiveSingleRangeControl
                                                                label={__("Line Height (PX)", 'premium-block-for-gutenberg')}
                                                                value={line}
                                                                onChange={onChangeLine}
                                                                defaultValue={1}
                                                                onChange={onChangeLine}
                                                                showUnit={false}
                                                                min={5}
                                                                max={200}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("spacing") && (
                                                        <li className="customize-control-premium-slider">
                                                            <ResponsiveSingleRangeControl

                                                                label={__("Letter Spacing (PX)", 'premium-block-for-gutenberg')}
                                                                value={spacing}
                                                                onChange={onChangeSpacing}
                                                                defaultValue={''}
                                                                onChange={onChangeSpacing}
                                                                showUnit={false}
                                                                step={0.1}
                                                                min={-5}
                                                                max={15}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("style") && (
                                                        <li className="customize-control-premium-slider">
                                                            <SelectControl
                                                                label={__("Style", 'premium-block-for-gutenberg')}
                                                                options={STYLE}
                                                                value={style}
                                                                onChange={onChangeStyle}
                                                                onResetClick={onResetClick}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("Upper") && (<li className="premium-typography-variant">
                                                        <ul className="premium-text-transform">
                                                            {['capitalize', 'uppercase'].map((variant) => (
                                                                <li
                                                                    key={variant}
                                                                    onClick={() => onChangeTextTransform(variant)}
                                                                    className={`${textTransform == variant ? 'active' : ''}`}
                                                                    data-variant={variant}>
                                                                    <i className="premium-tooltip-top">
                                                                        {variant}
                                                                    </i>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                    )}
                                                    {components.includes("Decoration") && (<li className="premium-typography-variant">

                                                        <ul className="premium-text-decoration">
                                                            {['line-through', 'underline'].map((variant) => (
                                                                <li
                                                                    key={variant}
                                                                    onClick={() => onChangeTextDecoration(variant)}
                                                                    className={`${textDecoration == variant ? 'active' : ''}`}
                                                                    data-variant={variant}>
                                                                    <i className="premium-tooltip-top">
                                                                        {variant}
                                                                    </i>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </Popover>
                                }
                            </span>
                            {components.includes("weight") && (
                                <span
                                    className="premium-weight"
                                    onClick={() => {
                                        toggleVisible("variations")
                                    }}
                                >{weight}
                                    {isVisible && currentView == 'variations' &&
                                        <Popover className="premium-typography-option" onClose={toggleClose}>
                                            <div className="premium-typography-option-modal ">
                                                <div className="premium-typography-container">
                                                    <ul className="premium-typography-variations">{renderVariations}</ul>
                                                </div>
                                            </div>
                                        </Popover>
                                    }
                                </span>
                            )}
                        </div>

                        <div className="premium-spacing-btn-reset-wrap">
                            <button
                                className="premium-reset-btn "
                                disabled={
                                    JSON.stringify(this.state) ===
                                    JSON.stringify(this.defaultValue)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            ></button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
