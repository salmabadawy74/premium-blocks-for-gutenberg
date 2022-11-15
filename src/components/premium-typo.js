import googleFonts from "./premium-fonts";
import ResponsiveRangeControl from "./RangeControl/responsive-range-control";
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
import FontsList from "./typography/fontList";
const { __ } = wp.i18n;
const { Component } = wp.element;
const { SelectControl, Popover } = wp.components;
function fuzzysearch(needle, haystack) {
    var hlen = haystack.length;
    var nlen = needle.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needle === haystack;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needle.charCodeAt(i);
        while (j < hlen) {
            if (haystack.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}
export default class PremiumTypo extends Component {
    constructor() {
        super(...arguments);

        let defaultValues = {
            fontWeight: "",
            fontStyle: "",
            textTransform: "",
            letterSpacing: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            fontFamily: "Default",
            lineHeight: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            textDecoration: "",
            fontSize: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
        };
        this.state = {
            sizeUnit: "px",
            isVisible: false,
            currentView: "",
            search: "",
            showUnit: this.props.showUnit || false,
            device: "Desktop",
            value: this.props.value,
            defaultValue: defaultValues,
        };
    }
    componentDidUpdate(prevProps) {
        let previewDevice =
            wp.data &&
                wp.data.select &&
                wp.data.select("core/edit-post") &&
                wp.data.select("core/edit-post").__experimentalGetPreviewDeviceType
                ? wp.data
                    .select("core/edit-post")
                    .__experimentalGetPreviewDeviceType()
                : "Desktop";
        if (this.state.device !== previewDevice) {
            this.setState({ device: previewDevice });
        }
    }
    render() {
        const { onChange, title = true } = this.props;
        const {
            value,
            sizeUnit,
            isVisible,
            currentView,
            search,
            device,
        } = this.state;
        const STYLE = [
            {
                value: "normal",
                label: __("Normal", "premium-blocks-for-gutenberg"),
            },
            {
                value: "italic",
                label: __("Italic", "premium-blocks-for-gutenberg"),
            },
            {
                value: "oblique",
                label: __("Oblique", "premium-blocks-for-gutenberg"),
            },
        ];
        const fonts = [
            {
                value: "Default",
                label: __("Default", "premium-blocks-for-gutenberg"),
                weight: [
                    __("Default", "premium-blocks-for-gutenberg"),

                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                ],
                google: false,
            },
            {
                value: "Arial",
                label: "Arial",
                weight: [
                    __("Default", "premium-blocks-for-gutenberg"),

                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                ],
                google: false,
            },
            {
                value: "Helvetica",
                label: "Helvetica",
                weight: [
                    __("Default", "premium-blocks-for-gutenberg"),

                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                ],
                google: false,
            },
            {
                value: "Times New Roman",
                label: "Times New Roman",
                weight: [
                    __("Default", "premium-blocks-for-gutenberg"),

                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                ],
                google: false,
            },
            {
                value: "Georgia",
                label: "Georgia",
                weight: [
                    __("Default", "premium-blocks-for-gutenberg"),

                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                ],
                google: false,
            },
        ];
        let fontWeight = "";
        Object.keys(googleFonts).map((k, v) => {
            fonts.push({
                value: k,
                label: k,
                weight: googleFonts[k].weight,
                google: true,
            });
            if (k === value["fontFamily"]) {
                fontWeight = googleFonts[k].weight;
            }
        });
        if (fontWeight === "") {
            fontWeight = fonts[0].weight;
        }
        const toggleVisible = (v) => {
            this.setState({
                isVisible: true,
                currentView: v,
            });
        };
        const toggleClose = () => {
            if (this.state.isVisible === true) {
                this.setState({
                    isVisible: false,
                    currentView: "",
                });
            }
        };
        const renderVariations = fonts.map((item, index) => {
            if (item.value == value["fontFamily"]) {
                return (item.weight || []).map((weights, i) => {
                    return (
                        <li
                            key={i}
                            className={`${weights == value["fontWeight"] ? "active" : ""
                                }`}
                            onClick={() =>
                                changeTypography("fontWeight", weights)
                            }
                        >
                            <span className="premium-variation-name">
                                {weights}
                            </span>
                        </li>
                    );
                });
            }
        });
        const changeTypography = (item, v) => {
            let initialState = { ...value };
            initialState[item] = v;

            this.setState({ value: initialState });
            onChange(initialState);
        };
        const linearFonts = fonts.filter((family) =>
            fuzzysearch(search.toLowerCase(), family["value"].toLowerCase())
        );
        const fontSize = value["fontSize"][device];
        return (
            <div className="premium-control-toggle premium-typography premium-blocks__base-control">
                {title && (
                    <header>
                        <span className=" premium-control-title">
                            {__("Typography", "premium-blocks-for-gutenberg")}
                        </span>
                    </header>
                )}
                <div className="premium-typography-wrapper">
                    <div className="premium-typohraphy-value">
                        <div className="premium-typography-title-container">
                            <span
                                className="premium-font"
                                onClick={() => {
                                    toggleVisible("fonts");
                                }}
                            >
                                <span>{value["fontFamily"]}</span>
                                {isVisible && currentView == "fonts" && (
                                    <Popover
                                        className="premium-typography-option premium-font-family__modal"
                                        onClose={toggleClose}
                                    >
                                        <div className="premium-option-modal ">
                                            <div className="premium-typography-container">
                                                <div
                                                    style={{
                                                        top: "0px",
                                                        right: "0px",
                                                        left: `0px`,
                                                    }}
                                                >
                                                    <ul className="premium-typography-top premium-switch-panel premium-static">
                                                        <li className="premium-font">
                                                            <input
                                                                value={search}
                                                                autoFocus
                                                                onKeyUp={(
                                                                    e
                                                                ) => {
                                                                    if (
                                                                        e.keyCode ==
                                                                        13
                                                                    ) {
                                                                        if (
                                                                            linearFonts.length >
                                                                            0
                                                                        ) {
                                                                            changeTypography(
                                                                                "fontFamily",
                                                                                linearFonts[0]
                                                                            );
                                                                            this.setState(
                                                                                {
                                                                                    search:
                                                                                        "",
                                                                                }
                                                                            );
                                                                        }
                                                                    }
                                                                }}
                                                                onClick={(e) =>
                                                                    e.stopPropagation()
                                                                }
                                                                onChange={({
                                                                    target: {
                                                                        value,
                                                                    },
                                                                }) =>
                                                                    this.setState(
                                                                        {
                                                                            search: value,
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                            <svg
                                                                width="8"
                                                                height="8"
                                                                viewBox="0 0 15 15"
                                                            >
                                                                {currentView ===
                                                                    "search" && (
                                                                        <path d="M8.9,7.5l4.6-4.6c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L7.5,6.1L2.9,1.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.6,4.6l-4.6,4.6c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l4.6-4.6l4.6,4.6c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L8.9,7.5z" />
                                                                    )}
                                                                {currentView !==
                                                                    "search" && (
                                                                        <path d="M14.6,14.6c-0.6,0.6-1.4,0.6-2,0l-2.5-2.5c-1,0.7-2.2,1-3.5,1C2.9,13.1,0,10.2,0,6.6S2.9,0,6.6,0c3.6,0,6.6,2.9,6.6,6.6c0,1.3-0.4,2.5-1,3.5l2.5,2.5C15.1,13.1,15.1,14,14.6,14.6z M6.6,1.9C4,1.9,1.9,4,1.9,6.6s2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7C11.3,4,9.2,1.9,6.6,1.9z" />
                                                                    )}
                                                            </svg>
                                                        </li>
                                                    </ul>
                                                    <FontsList
                                                        linearFontsList={
                                                            linearFonts
                                                        }
                                                        value={
                                                            value["fontFamily"]
                                                        }
                                                        onPickFamily={(
                                                            value
                                                        ) => {
                                                            changeTypography(
                                                                "fontFamily",
                                                                value
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Popover>
                                )}
                            </span>

                            <span
                                className="premium-size"
                                onClick={() => {
                                    toggleVisible("options");
                                }}
                            >
                                {fontSize}
                                {sizeUnit}
                                {isVisible && currentView == "options" && (
                                    <Popover
                                        className="premium-typography-option"
                                        onClose={toggleClose}
                                    >
                                        <div className=" ">
                                            <div className="premium-typography-container">
                                                <ul
                                                    className="premium-typography-options"
                                                    style={{ width: `100%` }}
                                                >
                                                    <li className="customize-control-premium-slider">
                                                        <ResponsiveRangeControl
                                                            label={__(
                                                                "Font Size",
                                                                "premium-blocks-for-gutenberg"
                                                            )}
                                                            value={
                                                                value[
                                                                "fontSize"
                                                                ]
                                                            }
                                                            onChange={(value) =>
                                                                changeTypography(
                                                                    "fontSize",
                                                                    value
                                                                )
                                                            }
                                                            showUnit={true}
                                                            units={["px", "em"]}
                                                        />
                                                    </li>
                                                    <li className="customize-control-premium-slider">
                                                        <ResponsiveRangeControl
                                                            label={__(
                                                                "Line Height (PX)",
                                                                "premium-blocks-for-gutenberg"
                                                            )}
                                                            value={
                                                                value[
                                                                "lineHeight"
                                                                ]
                                                            }
                                                            onChange={(value) =>
                                                                changeTypography(
                                                                    "lineHeight",
                                                                    value
                                                                )
                                                            }
                                                            showUnit={false}
                                                            min={0}
                                                            max={200}
                                                        />
                                                    </li>
                                                    <li className="customize-control-premium-slider">
                                                        <ResponsiveRangeControl
                                                            label={__(
                                                                "Letter Spacing (PX)",
                                                                "premium-blocks-for-gutenberg"
                                                            )}
                                                            value={
                                                                value[
                                                                "letterSpacing"
                                                                ]
                                                            }
                                                            onChange={(value) =>
                                                                changeTypography(
                                                                    "letterSpacing",
                                                                    value
                                                                )
                                                            }
                                                            showUnit={false}
                                                            step={0.1}
                                                            min={-5}
                                                            max={15}
                                                        />
                                                    </li>
                                                    <li className="customize-control-premium-slider">
                                                        <SelectControl
                                                            label={__(
                                                                "Style",
                                                                "premium-blocks-for-gutenberg"
                                                            )}
                                                            options={STYLE}
                                                            value={
                                                                value[
                                                                "fontStyle"
                                                                ]
                                                            }
                                                            onChange={(
                                                                value
                                                            ) => {
                                                                changeTypography(
                                                                    "fontStyle",
                                                                    value
                                                                );
                                                            }}
                                                        />
                                                    </li>
                                                    <li className="premium-typography-variant">
                                                        <ul className="premium-text-transform">
                                                            {[
                                                                "capitalize",
                                                                "uppercase",
                                                                "none",
                                                            ].map((variant) => (
                                                                <li
                                                                    key={
                                                                        variant
                                                                    }
                                                                    onClick={() => {
                                                                        changeTypography(
                                                                            "textTransform",
                                                                            variant
                                                                        );
                                                                    }}
                                                                    className={`${value[
                                                                        "textTransform"
                                                                    ] ==
                                                                        variant
                                                                        ? "active"
                                                                        : ""
                                                                        }${variant ===
                                                                            "none"
                                                                            ? " dashicons dashicons-remove"
                                                                            : ""
                                                                        }`}
                                                                    data-variant={
                                                                        variant
                                                                    }
                                                                >
                                                                    <i className="premium-tooltip-top">
                                                                        {
                                                                            variant
                                                                        }
                                                                    </i>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <ul className="premium-text-decoration">
                                                            {[
                                                                "line-through",
                                                                "underline",
                                                                "none",
                                                            ].map((variant) => (
                                                                <li
                                                                    key={
                                                                        variant
                                                                    }
                                                                    onClick={() => {
                                                                        changeTypography(
                                                                            "textDecoration",
                                                                            variant
                                                                        );
                                                                    }}
                                                                    className={`${value[
                                                                        "textDecoration"
                                                                    ] ==
                                                                        variant
                                                                        ? "active"
                                                                        : ""
                                                                        }${variant ===
                                                                            "none"
                                                                            ? " dashicons dashicons-remove"
                                                                            : ""
                                                                        }`}
                                                                    data-variant={
                                                                        variant
                                                                    }
                                                                >
                                                                    <i className="premium-tooltip-top">
                                                                        {
                                                                            variant
                                                                        }
                                                                    </i>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Popover>
                                )}
                            </span>

                            <span
                                className="premium-weight"
                                onClick={() => {
                                    toggleVisible("variations");
                                }}
                            >
                                {value["fontWeight"]}
                                {isVisible && currentView == "variations" && (
                                    <Popover
                                        className="premium-typography-option"
                                        onClose={toggleClose}
                                    >
                                        <div className="premium-typography-option-modal ">
                                            <div className="premium-typography-container">
                                                <ul className="premium-typography-variations">
                                                    {renderVariations}
                                                </ul>
                                            </div>
                                        </div>
                                    </Popover>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
