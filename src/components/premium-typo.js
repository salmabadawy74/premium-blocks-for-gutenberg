import googleFonts from "./premium-fonts";
import ResponsiveRangeControl from "./RangeControl/responsive-range-control";
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
import FontsList from "./typography/fontList";
const { __ } = wp.i18n;
const { Component } = wp.element;
const { SelectControl, Popover } = wp.components;
function fuzzysearch(needle, haystack) {
    var hlen = haystack.length
    var nlen = needle.length
    if (nlen > hlen) {
        return false
    }
    if (nlen === hlen) {
        return needle === haystack
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needle.charCodeAt(i)
        while (j < hlen) {
            if (haystack.charCodeAt(j++) === nch) {
                continue outer
            }
        }
        return false
    }
    return true
}
export default class PremiumTypo extends Component {
    constructor() {
        super(...arguments);
        let FontSize;
        if (this.props.components.includes("responsiveSize")) {
            FontSize = {
                'Desktop': '',
                'Tablet': '',
                'Mobile': '',
                unit: 'px'
            }
        } else {
            FontSize = ''
        }
        let defaultValues = {
            "font-weight": '',
            'font-style': '',
            'text-transform': '',
            'letter-spacing': '',
            'font-family': 'Default',
            'line-height': '',
            'text-decoration': '',
            'font-size': FontSize
        }
        this.state = {
            sizeUnit: FontSize['unit'] || 'px',
            isVisible: false,
            currentView: '',
            search: "",
            showUnit: this.props.showUnit || false,
            device: 'Desktop',
            value: this.props.value ? { ...defaultValues, ...this.props.value } : this.props.value
        }
    }
    componentDidUpdate(prevProps) {
        let previewDevice = wp.data &&
            wp.data.select &&
            wp.data.select('core/edit-post') &&
            wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType ? wp.data
                .select('core/edit-post')
                .__experimentalGetPreviewDeviceType()
            : 'Desktop';
        if (this.state.device !== previewDevice) {
            this.setState({ device: previewDevice })
        }
    }
    render() {
        const { components, onChange } = this.props;
        const { value, sizeUnit, isVisible, currentView, search, device } = this.state;
        const STYLE = [
            { value: "normal", label: __("Normal", 'premium-blocks-for-gutenberg') },
            { value: "italic", label: __("Italic", 'premium-blocks-for-gutenberg') },
            { value: "oblique", label: __("Oblique", 'premium-blocks-for-gutenberg') },
        ];
        const fonts = [
            { value: "Default", label: __("Default", 'premium-blocks-for-gutenberg'), weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
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
            if (k === value['font-family']) {
                fontWeight = googleFonts[k].weight

            }
        })
        if (fontWeight === "") {
            fontWeight = fonts[0].weight
        }
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
            if (item.value == value['font-family']) {
                return ((item.weight || []).map((weights, i) => {
                    return <li key={i} className={`${weights == value['font-weight'] ? 'active' : ''}`} onClick={() => changeTypography('font-weight', weights)}>
                        <span className="premium-variation-name">
                            {weights}
                        </span>
                    </li>
                }))
            }
        })
        const changeTypography = (item, value) => {
            const initialState = { ...this.state.value }
            initialState[item] = value;
            onChange(initialState)
            this.setState({ value: initialState })
        }
        const linearFonts = fonts.filter(family => fuzzysearch(search.toLowerCase(), family['value'].toLowerCase()))
        const fontSize = components.includes("responsiveSize") ? value['font-size'][device] : value['font-size']
        return (
            <div className="premium-control-toggle premium-typography">
                <header>
                    <span className="customize-control-title premium-control-title">
                        <strong>{__('Typography', 'premium-blocks-for-gutenberg')}</strong>
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
                                        {value['font-family']}
                                    </span>
                                    {isVisible && currentView == 'fonts' && components.includes('family') &&
                                        <Popover className="premium-typography-option premium-font-family__modal" onClose={toggleClose}>
                                            <div className="premium-option-modal ">
                                                <div className="premium-typography-container">
                                                    <div style={{ top: '0px', right: '0px', left: `0px` }}>
                                                        <ul className="premium-typography-top premium-switch-panel premium-static">
                                                            <li className="premium-font">
                                                                <input
                                                                    value={search}
                                                                    autoFocus
                                                                    onKeyUp={(e) => {
                                                                        if (e.keyCode == 13) {
                                                                            if (linearFonts.length > 0) {
                                                                                changeTypography("font-family", linearFonts[0])
                                                                                this.setState({ search: '' })
                                                                            }
                                                                        }
                                                                    }}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    onChange={({ target: { value } }) =>
                                                                        this.setState({ search: value })
                                                                    }
                                                                />
                                                                <svg width="8" height="8" viewBox="0 0 15 15">
                                                                    {currentView === 'search' && (
                                                                        <path d="M8.9,7.5l4.6-4.6c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L7.5,6.1L2.9,1.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.6,4.6l-4.6,4.6c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l4.6-4.6l4.6,4.6c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L8.9,7.5z" />
                                                                    )}
                                                                    {currentView !== 'search' && (
                                                                        <path d="M14.6,14.6c-0.6,0.6-1.4,0.6-2,0l-2.5-2.5c-1,0.7-2.2,1-3.5,1C2.9,13.1,0,10.2,0,6.6S2.9,0,6.6,0c3.6,0,6.6,2.9,6.6,6.6c0,1.3-0.4,2.5-1,3.5l2.5,2.5C15.1,13.1,15.1,14,14.6,14.6z M6.6,1.9C4,1.9,1.9,4,1.9,6.6s2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7C11.3,4,9.2,1.9,6.6,1.9z" />
                                                                    )}
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                        <FontsList
                                                            linearFontsList={linearFonts}
                                                            value={value['font-family']}
                                                            onPickFamily={(value) => { changeTypography('font-family', value) }}
                                                        />
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
                                {fontSize}{sizeUnit}
                                {isVisible && currentView == 'options' &&
                                    <Popover className="premium-typography-option" onClose={toggleClose}>
                                        <div className=" ">
                                            <div className="premium-typography-container">
                                                <ul className="premium-typography-options" style={{ width: `100%` }}>
                                                    {components.includes("size") && (
                                                        <li className="customize-control-premium-slider">
                                                            <ResponsiveSingleRangeControl
                                                                label={__("Font Size (PX)", 'premium-blocks-for-gutenberg')}
                                                                value={value['font-size']}
                                                                min="10"
                                                                max="80"
                                                                defaultValue={20}
                                                                onChange={(value) => { changeTypography('font-size', value) }}
                                                                showUnit={false}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("responsiveSize") && (
                                                        <li className="customize-control-premium-slider">
                                                            <ResponsiveRangeControl
                                                                label={__("Font Size", 'premium-blocks-for-gutenberg')}
                                                                value={value['font-size']}
                                                                onChange={value => changeTypography('font-size', value)}
                                                                showUnit={true}
                                                                defaultValue={20}
                                                                units={["px", "em"]}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("line") && (
                                                        <li className="customize-control-premium-slider">
                                                            <ResponsiveSingleRangeControl
                                                                label={__("Line Height (PX)", 'premium-blocks-for-gutenberg')}
                                                                value={value['line-height']}
                                                                onChange={(value) => { changeTypography('line-height', value) }}
                                                                defaultValue={1}
                                                                showUnit={false}
                                                                min={0}
                                                                max={200}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("spacing") && (
                                                        <li className="customize-control-premium-slider">
                                                            <ResponsiveSingleRangeControl
                                                                label={__("Letter Spacing (PX)", 'premium-blocks-for-gutenberg')}
                                                                value={value['letter-spacing']}
                                                                onChange={(value) => { changeTypography('letter-spacing', value) }}
                                                                defaultValue={''}
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
                                                                label={__("Style", 'premium-blocks-for-gutenberg')}
                                                                options={STYLE}
                                                                value={value['font-style']}
                                                                onChange={(value) => { changeTypography('font-style', value) }}
                                                            // onResetClick={onResetClick}
                                                            />
                                                        </li>
                                                    )}
                                                    {components.includes("Upper") && (<li className="premium-typography-variant">
                                                        <ul className="premium-text-transform">
                                                            {['capitalize', 'uppercase'].map((variant) => (
                                                                <li
                                                                    key={variant}
                                                                    onClick={() => { changeTypography('text-transform', variant) }}
                                                                    className={`${value['text-transform'] == variant ? 'active' : ''}`}
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
                                                                    onClick={() => { changeTypography('text-decoration', variant) }}
                                                                    className={`${value['text-decoration'] == variant ? 'active' : ''}`}
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
                                >{value['font-weight']}
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
                    </div>
                </div>
            </div>
        );

    }
}