import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumSizeUnits from "../../components/premium-size-units";
import FONTS from "../../components/premium-fonts";
import PremiumBackground from "../../components/premium-background";
import hexToRgba from "hex-to-rgba";
import styling from './styling';
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";

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
    ColorPalette,
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
            borderButton,
            btnText,
            btnSize,
            btnAlign,
            btnLink,
            btnTarget,
            effect,
            effectDir,
            slideColor,
            block_id,
            hideDesktop,
            classMigrate,
            hideTablet,
            hideMobile,
            textStyles,
            btnStyles
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
            props.setAttributes({ effect: newValue });
            switch (newValue) {
                case "slide":
                    props.setAttributes({ effectDir: "top" });
                    break;
                case "shutter":
                    props.setAttributes({ effectDir: "shutouthor" });
                    break;
                case "radial":
                    props.setAttributes({ effectDir: "radialin" });
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
                            value={textStyles[0].textFontFamily}
                            options={FONTS}
                            onChange={onChangeTextFamily}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                            setAttributes={saveTextStyles}
                            fontSizeType={{
                                value: textStyles[0].textSizeUnit,
                                label: __("textSizeUnit"),
                            }}
                            fontSize={{
                                value: textStyles[0].textSize,
                                label: __("textSize"),
                            }}
                            fontSizeMobile={{
                                value: textStyles[0].textSizeMobile,
                                label: __("textSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: textStyles[0].textSizeTablet,
                                label: __("textSizeTablet"),
                            }}
                            weight={textStyles[0].textWeight}
                            style={textStyles[0].textStyle}
                            spacing={textStyles[0].textLetter}
                            upper={textStyles[0].textUpper}
                            line={textStyles[0].textLine}
                            onChangeSize={newSize => saveTextStyles({ textSize: newSize })}
                            onChangeSizeTablet={newSize => saveTextStyles({ textSizeTablet: newSize })}
                            onChangeSizeMobile={newSize => saveTextStyles({ textSizeMobile: newSize })}
                            onChangeWeight={newWeight =>
                                saveTextStyles({ textWeight: newWeight })
                            }
                            onChangeLine={newValue => saveTextStyles({ textLine: newValue })}
                            onChangeSize={newSize => saveTextStyles({ textSize: newSize })}
                            onChangeStyle={newStyle => saveTextStyles({ textStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                saveTextStyles({ textLetter: newValue })
                            }
                            onChangeUpper={check => saveTextStyles({ textUpper: check })}
                        />
                        <PremiumTextShadow
                            color={textStyles[0].shadowColor}
                            blur={textStyles[0].shadowBlur}
                            horizontal={textStyles[0].shadowHorizontal}
                            vertical={textStyles[0].shadowVertical}
                            onChangeColor={newColor =>
                                saveTextStyles({ shadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => saveTextStyles({ shadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveTextStyles({ shadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveTextStyles({ shadowVertical: newValue })
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
                                            <p>{__("Text Color")}</p>
                                            <ColorPalette
                                                value={btnStyles[0].textColor}
                                                onChange={newValue =>
                                                    saveBtnStyles({
                                                        textColor: newValue,
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <p>
                                                {"radial" !== effect
                                                    ? __("Background Color")
                                                    : __("Background Hover Color")}
                                            </p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={btnStyles[0].backColor}
                                                onChangeColor={newvalue =>
                                                    saveBtnStyles({
                                                        backColor: newvalue,
                                                    })
                                                }
                                                opacityValue={btnStyles[0].backOpacity}
                                                onChangeOpacity={value =>
                                                    saveBtnStyles({
                                                        backOpacity: value,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    );
                                }
                                if ("hover" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <p>{__("Text Hover Color")}</p>
                                            <ColorPalette
                                                value={btnStyles[0].textHoverColor}
                                                onChange={newValue =>
                                                    saveBtnStyles({
                                                        textHoverColor: newValue,
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <p>
                                                {"radial" !== effect
                                                    ? __("Background Hover Color")
                                                    : __("Background Color")}
                                            </p>
                                            <ColorPalette
                                                value={btnStyles[0].backHoverColor}
                                                onChange={newValue =>
                                                    saveBtnStyles({
                                                        backHoverColor: newValue,
                                                        slideColor: newValue,
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Border Hover Color")}</p>
                                            <ColorPalette
                                                value={btnStyles[0].borderHoverColor}
                                                onChange={newValue =>
                                                    saveBtnStyles({
                                                        borderHoverColor: newValue,
                                                    })
                                                }
                                                allowReset={true}
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
                            borderType={btnStyles[0].borderType}
                            borderWidth={btnStyles[0].borderWidth}
                            top={btnStyles[0].borderTop}
                            right={btnStyles[0].borderRight}
                            bottom={btnStyles[0].borderBottom}
                            left={btnStyles[0].borderLeft}
                            borderColor={btnStyles[0].borderColor}
                            borderRadius={btnStyles[0].borderRadius}
                            onChangeType={(newType) => saveBtnStyles({ borderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                saveBtnStyles({
                                    borderButton: true,
                                    borderTop: top,
                                    borderRight: right,
                                    borderBottom: bottom,
                                    borderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                saveBtnStyles({ borderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveBtnStyles({ borderRadius: newrRadius })
                            }
                        />
                        <PremiumBoxShadow
                            label="Shadow"
                            inner={true}
                            color={btnStyles[0].btnShadowColor}
                            blur={btnStyles[0].btnShadowBlur}
                            horizontal={btnStyles[0].btnShadowHorizontal}
                            vertical={btnStyles[0].btnShadowVertical}
                            position={btnStyles[0].btnShadowPosition}
                            onChangeColor={newColor =>
                                saveBtnStyles({
                                    btnShadowColor:
                                        newColor === undefined ? "transparent" : newColor.hex
                                })
                            }
                            onChangeBlur={newBlur =>
                                saveBtnStyles({
                                    btnShadowBlur: newBlur === undefined ? 0 : newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                saveBtnStyles({
                                    btnShadowHorizontal: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                saveBtnStyles({
                                    btnShadowVertical: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangePosition={newValue =>
                                saveBtnStyles({
                                    btnShadowPosition: newValue === undefined ? 0 : newValue
                                })
                            }
                        />
                        <PremiumSizeUnits
                            onChangeSizeUnit={newValue => saveBtnStyles({ paddingU: newValue })}
                        />
                        <RangeControl
                            label={__("Padding")}
                            value={btnStyles[0].padding}
                            onChange={newValue => saveBtnStyles({ padding: newValue })}
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

