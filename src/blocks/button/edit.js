import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumBackground from "../../components/premium-background";
import hexToRgba from "../../components/hex-to-rgba";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import PremiumRangeControl from "../../components/premium-range-control";


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

const { withSelect } = wp.data


export class edit extends Component {

    constructor() {
        super(...arguments);
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }
    getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
        if (device === 'Mobile') {
            if (undefined !== mobileSize && '' !== mobileSize) {
                return mobileSize;
            } else if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        } else if (device === 'Tablet') {
            if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        }
        return desktopSize;
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
            hideTablet,
            hideMobile,
            borderWidth,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
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
            this.props.setAttributes({ effect: newValue });
            switch (newValue) {
                case "slide":
                    this.props.setAttributes({ effectDir: "top" });
                    break;
                case "shutter":
                    this.props.setAttributes({ effectDir: "shutouthor" });
                    break;
                case "radial":
                    this.props.setAttributes({ effectDir: "radialin" });
                    break;
            }
        };
        setAttributes({ block_id: blockId });

        const saveTextStyles = (value) => {
            const newUpdate = textStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                textStyles: newUpdate,
            });
        }
        const saveBtnStyles = (value) => {
            const newUpdate = btnStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                btnStyles: newUpdate,
            });
        }

        const mainClasses = classnames(className, "premium-button");

        const btnFontSize = this.getPreviewSize(this.props.deviceType, textStyles[0].textSize, textStyles[0].textSizeTablet, textStyles[0].textSizeMobile);
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
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
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
                            fontFamily={textStyles[0].textFontFamily}
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
                            onChangeFamily={(fontFamily) => saveTextStyles({ textFontFamily: fontFamily })}
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
                            borderWidth={borderWidth}
                            top={borderTop}
                            right={borderRight}
                            bottom={borderBottom}
                            left={borderLeft}
                            borderColor={btnStyles[0].borderColor}
                            borderRadius={btnStyles[0].borderRadius}
                            onChangeType={(newType) => saveBtnStyles({ borderType: newType })}
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
                        {/* <PremiumSizeUnits
                            onChangeSizeUnit={newValue => saveBtnStyles({ paddingU: newValue })}
                        />
                        <RangeControl
                            label={__("Padding")}
                            value={btnStyles[0].padding}
                            onChange={newValue => saveBtnStyles({ padding: newValue })}
                        /> */}
                        <PremiumRangeControl
                            label={__("Padding")}
                            value={btnStyles[0].padding}
                            onChange={newValue => saveBtnStyles({ padding: newValue })}
                            units={['px', 'em', 'rem']}
                            defaultValue={0}
                            onChangeUnit={newValue => saveBtnStyles({ paddingU: newValue })}
                            showUnit={true}
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
                            `color: ${btnStyles[0].textHoverColor} !important;`,
                            `border-color: ${btnStyles[0].borderHoverColor} !important;`,
                            "}",
                            `#premium-button-wrap-${block_id}.premium-button__none .premium-button:hover {`,
                            `background-color: ${btnStyles[0].backHoverColor} !important;`,
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
                        color: btnStyles[0].textColor,
                        backgroundColor: btnStyles[0].backColor
                            ? hexToRgba(btnStyles[0].backColor, btnStyles[0].backOpacity)
                            : "transparent",
                        fontFamily: textStyles[0].textFontFamily,
                        letterSpacing: textStyles[0].textLetter + "px",
                        fontSize: btnFontSize + textStyles[0].textSizeUnit,
                        textTransform: textStyles[0].textUpper ? "uppercase" : "none",
                        fontStyle: textStyles[0].textStyle,
                        lineHeight: textStyles[0].textLine + "px",
                        fontWeight: textStyles[0].textWeight,
                        textShadow: `${textStyles[0].shadowHorizontal}px ${textStyles[0].shadowVertical}px ${textStyles[0].shadowBlur}px ${textStyles[0].shadowColor}`,
                        boxShadow: `${btnStyles[0].btnShadowHorizontal}px ${btnStyles[0].btnShadowVertical}px ${btnStyles[0].btnShadowBlur}px ${btnStyles[0].btnShadowColor} ${btnStyles[0].btnShadowPosition}`,
                        padding: btnStyles[0].padding + btnStyles[0].paddingU,
                        borderStyle: btnStyles[0].borderType,
                        borderWidth: borderButton
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : borderWidth + "px",
                        borderRadius: btnStyles[0].borderRadius + "px",
                        borderColor: btnStyles[0].borderColor
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

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)