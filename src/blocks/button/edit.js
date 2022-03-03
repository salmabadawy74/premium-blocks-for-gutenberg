import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
const { __ } = wp.i18n;
const { PanelBody, SelectControl, ToggleControl, TabPanel } = wp.components;
const { Fragment, Component } = wp.element;
const { InspectorControls, AlignmentToolbar, BlockControls, RichText, URLInput } = wp.blockEditor;
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
                label: __("Small", 'premium-blocks-for-gutenberg')
            },
            {
                value: "md",
                label: __("Medium", 'premium-blocks-for-gutenberg')
            },
            {
                value: "lg",
                label: __("Large", 'premium-blocks-for-gutenberg')
            },
            {
                value: "block",
                label: __("Block", 'premium-blocks-for-gutenberg')
            }
        ];

        const DIRECTION = [
            {
                value: "top",
                label: __("Top to Bottom", 'premium-blocks-for-gutenberg')
            },
            {
                value: "bottom",
                label: __("Bottom to Top", 'premium-blocks-for-gutenberg')
            },
            {
                value: "left",
                label: __("Left to Right", 'premium-blocks-for-gutenberg')
            },
            {
                value: "right",
                label: __("Right to Left", 'premium-blocks-for-gutenberg')
            }
        ];

        const SHUTTER = [
            {
                value: "shutouthor",
                label: __("Shutter out Horizontal", 'premium-blocks-for-gutenberg')
            },
            {
                value: "shutoutver",
                label: __("Shutter out Vertical", 'premium-blocks-for-gutenberg')
            },
            {
                value: "scshutoutver",
                label: __("Scaled Shutter Vertical", 'premium-blocks-for-gutenberg')
            },
            {
                value: "scshutouthor",
                label: __("Scaled Shutter Horizontal", 'premium-blocks-for-gutenberg')
            },
            {
                value: "dshutinver",
                label: __("Tilted Left", 'premium-blocks-for-gutenberg')
            },
            {
                value: "dshutinhor",
                label: __("Tilted Right", 'premium-blocks-for-gutenberg')
            }
        ];

        const RADIAL = [
            {
                value: "radialin",
                label: __("Radial In", 'premium-blocks-for-gutenberg')
            },
            {
                value: "radialout",
                label: __("Radial Out", 'premium-blocks-for-gutenberg')
            },
            {
                value: "rectin",
                label: __("Rectangle In", 'premium-blocks-for-gutenberg')
            },
            {
                value: "rectout",
                label: __("Rectangle Out", 'premium-blocks-for-gutenberg')
            }
        ];

        const EFFECTS = [
            {
                value: "none",
                label: __("None", 'premium-blocks-for-gutenberg')
            },
            {
                value: "slide",
                label: __("Slide", 'premium-blocks-for-gutenberg')
            },
            {
                value: "shutter",
                label: __("Shutter", 'premium-blocks-for-gutenberg')
            },
            {
                value: "radial",
                label: __("Radial", 'premium-blocks-for-gutenberg')
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
                        title={__("General Settings", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            options={EFFECTS}
                            label={__("Hover Effect", 'premium-blocks-for-gutenberg')}
                            value={effect}
                            onChange={onChangeHover}
                        />
                        {"slide" === effect && (
                            <SelectControl
                                options={DIRECTION}
                                label={__("Direction", 'premium-blocks-for-gutenberg')}
                                value={effectDir}
                                onChange={newValue => setAttributes({ effectDir: newValue })}
                            />
                        )}
                        {"shutter" === effect && (
                            <SelectControl
                                options={SHUTTER}
                                label={__("Shutter Direction", 'premium-blocks-for-gutenberg')}
                                value={effectDir}
                                onChange={newValue => setAttributes({ effectDir: newValue })}
                            />
                        )}
                        {"radial" === effect && (
                            <SelectControl
                                options={RADIAL}
                                label={__("Style", 'premium-blocks-for-gutenberg')}
                                value={effectDir}
                                onChange={newValue => setAttributes({ effectDir: newValue })}
                            />
                        )}
                        <SelectControl
                            options={SIZE}
                            label={__("Button Size", 'premium-blocks-for-gutenberg')}
                            value={btnSize}
                            onChange={newSize => setAttributes({ btnSize: newSize })}
                        />
                        <ToggleControl
                            label={__("Open link in new tab", 'premium-blocks-for-gutenberg')}
                            checked={btnTarget}
                            onChange={newValue => setAttributes({ btnTarget: newValue })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Text Style", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                            setAttributes={saveTextStyles}
                            fontSizeType={{
                                value: textStyles[0].textSizeUnit,
                                label: __("textSizeUnit", 'premium-blocks-for-gutenberg'),
                            }}
                            fontSize={textStyles[0].textSize}
                            fontSizeMobile={textStyles[0].textSizeMobile}
                            fontSizeTablet={textStyles[0].textSizeTablet}
                            fontFamily={textStyles[0].textFontFamily}

                            weight={textStyles[0].textWeight}
                            style={textStyles[0].textStyle}
                            spacing={textStyles[0].textLetter}
                            upper={textStyles[0].textUpper}
                            line={textStyles[0].textLine}
                            onChangeSize={newSize => saveTextStyles({ textSize: newSize })}
                            onChangeTabletSize={newSize => saveTextStyles({ textSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveTextStyles({ textSizeMobile: newSize })}
                            onChangeWeight={newWeight =>
                                saveTextStyles({ textWeight: newWeight })
                            }
                            onChangeLine={newValue => saveTextStyles({ textLine: newValue })}
                            onChangeSize={newSize => saveTextStyles({ textSize: newSize })}
                            onChangeStyle={newStyle => saveTextStyles({ textStyle: newStyle })}
                            onChangeSpacing={newValue => saveTextStyles({ textLetter: newValue })}
                            onChangeFamily={(fontFamily) => saveTextStyles({ textFontFamily: fontFamily })}
                            onChangeUpper={check => saveTextStyles({ textUpper: check })}
                        />
                        <PremiumTextShadow
                            color={textStyles[0].shadowColor}
                            blur={textStyles[0].shadowBlur}
                            horizontal={textStyles[0].shadowHorizontal}
                            vertical={textStyles[0].shadowVertical}
                            onChangeColor={newColor => saveTextStyles({ shadowColor: newColor })}
                            onChangeBlur={newBlur => saveTextStyles({ shadowBlur: newBlur })}
                            onChangehHorizontal={newValue => saveTextStyles({ shadowHorizontal: newValue })}
                            onChangeVertical={newValue => saveTextStyles({ shadowVertical: newValue })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Button Style", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <strong>{__("Colors", 'premium-blocks-for-gutenberg')}</strong>
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
                                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={btnStyles[0].textColor}
                                                colorDefault={''}
                                                onColorChange={newValue => saveBtnStyles({ textColor: newValue, })}
                                            />
                                            <AdvancedPopColorControl
                                                label={__('Background Color')}
                                                colorValue={btnStyles[0].backColor}
                                                colorDefault={''}
                                                onColorChange={newvalue => saveBtnStyles({ backColor: newvalue, })}
                                            />
                                        </Fragment>
                                    );
                                }
                                if ("hover" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Text Hover Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={btnStyles[0].textHoverColor}
                                                colorDefault={''}
                                                onColorChange={newValue => saveBtnStyles({ textHoverColor: newValue, })}
                                            />
                                            <AdvancedPopColorControl
                                                label={"radial" !== effect
                                                    ? __("Background Hover Color", 'premium-blocks-for-gutenberg')
                                                    : __("Background Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={btnStyles[0].backHoverColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    saveBtnStyles({
                                                        backHoverColor: newValue,
                                                        slideColor: newValue,
                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Border Hover Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={btnStyles[0].borderHoverColor}
                                                colorDefault={''}
                                                onColorChange={newValue => saveBtnStyles({ borderHoverColor: newValue, })}
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
                                saveBtnStyles({ borderColor: colorValue })
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
                            onChangeColor={newColor => saveBtnStyles({ btnShadowColor: newColor === undefined ? "transparent" : newColor })}
                            onChangeBlur={newBlur => saveBtnStyles({ btnShadowBlur: newBlur === undefined ? 0 : newBlur })}
                            onChangehHorizontal={newValue => saveBtnStyles({ btnShadowHorizontal: newValue === undefined ? 0 : newValue })}
                            onChangeVertical={newValue => saveBtnStyles({ btnShadowVertical: newValue === undefined ? 0 : newValue })}
                            onChangePosition={newValue => saveBtnStyles({ btnShadowPosition: newValue === undefined ? 0 : newValue })}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Padding", 'premium-blocks-for-gutenberg')}
                            value={btnStyles[0].padding}
                            onChange={newValue => saveBtnStyles({ padding: newValue })}
                            defaultValue={0}
                            onChangeUnit={newValue => saveBtnStyles({ paddingU: newValue })}
                            showUnit={true}
                            unit={btnStyles[0].paddingU}
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
                        backgroundColor: btnStyles[0].backColor,
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