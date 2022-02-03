import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumSizeUnits from "../../components/premium-size-units";
import FONTS from "../../components/premium-fonts";
import hexToRgba from "hex-to-rgba";
import styling from './styling';
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import AdvancedPopColorControl from '../../components/premium-color-control'

const { __ } = wp.i18n;

const {
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl,
    TabPanel,
} = wp.components;

const { Fragment, Component } = wp.element;

const {
    InspectorControls,
    AlignmentToolbar,
    BlockControls,
    RichText,
    URLInput,
} = wp.blockEditor;

export default class edit extends Component {

    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        this.props.setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-button-" + this.props.clientId.substr(0, 6)
        );
        document.head.appendChild($style);
    }
    render() {
        const { isSelected, setAttributes, className, clientId: blockId } = this.props;

        const {
            block_id,
            borderButton,
            btnText,
            btnSize,
            btnAlign,
            btnLink,
            btnTarget,
            effect,
            effectDir,
            textColor,
            textHoverColor,
            backColor,
            backOpacity,
            backHoverColor,
            slideColor,
            textSizeUnit,
            textSize,
            textSizeTablet,
            textSizeMobile,
            textFontFamily,
            textWeight,
            textLetter,
            textUpper,
            textLine,
            textStyle,
            borderType,
            borderWidth,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            borderRadius,
            borderColor,
            borderHoverColor,
            shadowBlur,
            shadowColor,
            shadowHorizontal,
            shadowVertical,
            padding,
            paddingU,
            btnShadowBlur,
            btnShadowColor,
            btnShadowHorizontal,
            btnShadowVertical,
            btnShadowPosition,
            hideDesktop,
            hideTablet,
            hideMobile
        } = this.props.attributes;

        const SIZE = [
            {
                value: "sm",
                label: __("Small")
            },
            {
                value: "md",
                label: __("Medium")
            },
            {
                value: "lg",
                label: __("Large")
            },
            {
                value: "block",
                label: __("Block")
            }
        ];
        const DIRECTION = [
            {
                value: "top",
                label: __("Top to Bottom")
            },
            {
                value: "bottom",
                label: __("Bottom to Top")
            },
            {
                value: "left",
                label: __("Left to Right")
            },
            {
                value: "right",
                label: __("Right to Left")
            }
        ];
        const SHUTTER = [
            {
                value: "shutouthor",
                label: __("Shutter out Horizontal")
            },
            {
                value: "shutoutver",
                label: __("Shutter out Vertical")
            },
            {
                value: "scshutoutver",
                label: __("Scaled Shutter Vertical")
            },
            {
                value: "scshutouthor",
                label: __("Scaled Shutter Horizontal")
            },
            {
                value: "dshutinver",
                label: __("Tilted Left")
            },
            {
                value: "dshutinhor",
                label: __("Tilted Right")
            }
        ];
        const RADIAL = [
            {
                value: "radialin",
                label: __("Radial In")
            },
            {
                value: "radialout",
                label: __("Radial Out")
            },
            {
                value: "rectin",
                label: __("Rectangle In")
            },
            {
                value: "rectout",
                label: __("Rectangle Out")
            }
        ];
        const EFFECTS = [
            {
                value: "none",
                label: __("None")
            },
            {
                value: "slide",
                label: __("Slide")
            },
            {
                value: "shutter",
                label: __("Shutter")
            },
            {
                value: "radial",
                label: __("Radial")
            }
        ];

        const onChangeHover = newValue => {
            setAttributes({ effect: newValue });
            switch (newValue) {
                case "slide":
                    setAttributes({ effectDir: "top" });
                    break;
                case "shutter":
                    setAttributes({ effectDir: "shutouthor" });
                    break;
                case "radial":
                    setAttributes({ effectDir: "radialin" });
                    break;
            }
        };
        setAttributes({ block_id: blockId });

        const addFontToHead = fontFamily => {
            const head = document.head;
            const link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href =
                "https://fonts.googleapis.com/css2?family=" +
                fontFamily.replace(/\s/g, '+').replace(/\"/g, "") + "&display=swap";
            head.appendChild(link);
        };

        const onChangeTextFamily = fontFamily => {
            setAttributes({ textFontFamily: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        const mainClasses = classnames(className, "premium-button");

        var element = document.getElementById(
            "premium-style-button-" + blockId.substr(0, 6)
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }

        return [
            isSelected && "block" != btnSize && (
                <BlockControls key="controls">
                    <AlignmentToolbar
                        value={btnAlign}
                        onChange={newAlign => setAttributes({ btnAlign: newAlign })}
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <PanelBody
                        title={__("General Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            options={EFFECTS}
                            label={__("Hover Effect")}
                            value={effect}
                            onChange={onChangeHover}
                        />
                        {"slide" === effect && (
                            <SelectControl
                                options={DIRECTION}
                                label={__("Direction")}
                                value={effectDir}
                                onChange={newValue => setAttributes({ effectDir: newValue })}
                            />
                        )}
                        {"shutter" === effect && (
                            <SelectControl
                                options={SHUTTER}
                                label={__("Shutter Direction")}
                                value={effectDir}
                                onChange={newValue => setAttributes({ effectDir: newValue })}
                            />
                        )}
                        {"radial" === effect && (
                            <SelectControl
                                options={RADIAL}
                                label={__("Style")}
                                value={effectDir}
                                onChange={newValue => setAttributes({ effectDir: newValue })}
                            />
                        )}
                        <SelectControl
                            options={SIZE}
                            label={__("Button Size")}
                            value={btnSize}
                            onChange={newSize => setAttributes({ btnSize: newSize })}
                        />
                        <ToggleControl
                            label={__("Open link in new tab")}
                            checked={btnTarget}
                            onChange={newValue => setAttributes({ btnTarget: newValue })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Text Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Font Family")}
                            value={textFontFamily}
                            options={FONTS}
                            onChange={onChangeTextFamily}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: textSizeUnit,
                                label: __("textSizeUnit"),
                            }}
                            fontSize={{
                                value: textSize,
                                label: __("textSize"),
                            }}
                            fontSizeMobile={{
                                value: textSizeMobile,
                                label: __("textSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: textSizeTablet,
                                label: __("textSizeTablet"),
                            }}
                            weight={textWeight}
                            style={textStyle}
                            spacing={textLetter}
                            upper={textUpper}
                            line={textLine}
                            onChangeSize={newSize => setAttributes({ textSize: newSize })}
                            onChangeSizeTablet={newSize => setAttributes({ textSizeTablet: newSize })}
                            onChangeSizeMobile={newSize => setAttributes({ textSizeMobile: newSize })}
                            onChangeWeight={newWeight =>
                                setAttributes({ textWeight: newWeight })
                            }
                            onChangeLine={newValue => setAttributes({ textLine: newValue })}
                            onChangeSize={newSize => setAttributes({ textSize: newSize })}
                            onChangeStyle={newStyle => setAttributes({ textStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                setAttributes({ textLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ textUpper: check })}
                        />
                        <PremiumTextShadow
                            color={shadowColor}
                            blur={shadowBlur}
                            horizontal={shadowHorizontal}
                            vertical={shadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({ shadowColor: newColor })
                            }
                            onChangeBlur={newBlur => setAttributes({ shadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                setAttributes({ shadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({ shadowVertical: newValue })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Button Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <strong>{__("Colors")}</strong>
                        <TabPanel
                            className="premium-color-tabpanel"
                            activeClass="active-tab"
                            tabs={[
                                {
                                    name: "normal",
                                    title: "Normal",
                                    className: "premium-tab",
                                },
                                {
                                    name: "hover",
                                    title: "Hover",
                                    className: "premium-tab",
                                },
                            ]}
                        >
                            {(tab) => {
                                let tabout;
                                if ("normal" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Text Color", 'premium-block-for-gutenberg')}
                                                colorValue={textColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    setAttributes({
                                                        textColor: newValue,
                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={"radial" !== effect
                                                    ? __("Background Color")
                                                    : __("Background Hover Color")}
                                                colorValue={backColor}
                                                colorDefault={''}
                                                onColorChange={newvalue =>
                                                    setAttributes({
                                                        backColor: newvalue,
                                                    })}
                                            />

                                        </Fragment>
                                    );
                                }
                                if ("hover" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Text Hover Color", 'premium-block-for-gutenberg')}
                                                colorValue={textHoverColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    setAttributes({
                                                        textHoverColor: newValue,
                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={"radial" !== effect
                                                    ? __("Background Hover Color", 'premium-block-for-gutenberg')
                                                    : __("Background Color", 'premium-block-for-gutenberg')}
                                                colorValue={backHoverColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    setAttributes({
                                                        backHoverColor: newValue,
                                                        slideColor: newValue,
                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Border Hover Color", 'premium-block-for-gutenberg')}
                                                colorValue={borderHoverColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    setAttributes({
                                                        borderHoverColor: newValue,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    );
                                }
                                return (
                                    <div>
                                        {tabout}
                                        <hr />
                                    </div>
                                );
                            }}
                        </TabPanel>
                        <PremiumBorder
                            borderType={borderType}
                            borderWidth={borderWidth}
                            top={borderTop}
                            right={borderRight}
                            bottom={borderBottom}
                            left={borderLeft}
                            borderColor={borderColor}
                            borderRadius={borderRadius}
                            onChangeType={(newType) => setAttributes({ borderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    borderButton: true,
                                    borderTop: top,
                                    borderRight: right,
                                    borderBottom: bottom,
                                    borderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ borderColor: colorValue })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ borderRadius: newrRadius })
                            }
                        />
                        <PremiumBoxShadow
                            label="Shadow"
                            inner={true}
                            color={btnShadowColor}
                            blur={btnShadowBlur}
                            horizontal={btnShadowHorizontal}
                            vertical={btnShadowVertical}
                            position={btnShadowPosition}
                            onChangeColor={newColor =>
                                setAttributes({
                                    btnShadowColor:
                                        newColor === undefined ? "transparent" : newColor
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    btnShadowBlur: newBlur === undefined ? 0 : newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    btnShadowHorizontal: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    btnShadowVertical: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangePosition={newValue =>
                                setAttributes({
                                    btnShadowPosition: newValue === undefined ? 0 : newValue
                                })
                            }
                        />
                        <PremiumSizeUnits
                            onChangeSizeUnit={newValue => setAttributes({ paddingU: newValue })}
                        />
                        <RangeControl
                            label={__("Padding")}
                            value={padding}
                            onChange={newValue => setAttributes({ padding: newValue })}
                        />
                    </PanelBody>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                        onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                        onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                    />
                </InspectorControls>
            ),
            <div
                id={`premium-button-wrap-${block_id}`}
                className={`${mainClasses}__wrap premium-button__${effect} premium-button__${effectDir} premium-button-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{ textAlign: btnAlign }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-button-wrap-${block_id} .premium-button:hover {`,
                            `color: ${textHoverColor} !important;`,
                            `border-color: ${borderHoverColor} !important;`,
                            "}",
                            `#premium-button-wrap-${block_id}.premium-button__none .premium-button:hover {`,
                            `background-color: ${backHoverColor} !important;`,
                            "}",
                            `#premium-button-wrap-${block_id}.premium-button__slide .premium-button::before,`,
                            `#premium-button-wrap-${block_id}.premium-button__shutter .premium-button::before,`,
                            `#premium-button-wrap-${block_id}.premium-button__radial .premium-button::before {`,
                            `background-color: ${slideColor}`,
                            "}"
                        ].join("\n")
                    }}
                />
                <RichText
                    className={`premium-button premium-button__${btnSize}`}
                    value={btnText}
                    onChange={value => setAttributes({ btnText: value })}
                    style={{
                        color: textColor,
                        backgroundColor: backColor
                            ? hexToRgba(backColor, backOpacity)
                            : "transparent",
                        fontFamily: textFontFamily,
                        letterSpacing: textLetter + "px",
                        textTransform: textUpper ? "uppercase" : "none",
                        fontStyle: textStyle,
                        lineHeight: textLine + "px",
                        fontWeight: textWeight,
                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                        boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                        padding: padding + paddingU,
                        borderStyle: borderType,
                        borderWidth: borderButton
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor
                    }}
                    keepPlaceholderOnFocus
                />
                <URLInput
                    value={btnLink}
                    onChange={newLink => setAttributes({ btnLink: newLink })}
                />
            </div>
        ];
    }
};

