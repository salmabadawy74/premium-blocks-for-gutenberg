import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
const { __ } = wp.i18n;
import WebfontLoader from "../../components/typography/fontLoader"
import SpacingComponent from "../../components/premium-responsive-spacing";
import PremiumShadow from "../../components/PremiumShadow";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import { generateBlockId, generateCss } from '../../components/HelperFunction';
const { PanelBody, SelectControl, ToggleControl, TabPanel } = wp.components;
const { Fragment, Component } = wp.element;
const { InspectorControls, AlignmentToolbar, BlockControls, RichText, URLInput } = wp.blockEditor;
const { withSelect } = wp.data
export class edit extends Component {
    constructor() {
        super(...arguments);
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        if (!attributes.blockId) {
            setAttributes({ blockId: "premium-button-" + generateBlockId(clientId) });
        }
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
        const { isSelected, setAttributes, className } = this.props;
        const {
            btnText,
            btnSize,
            btnAlign,
            btnLink,
            btnTarget,
            effect,
            effectDir,
            slideColor,
            hideDesktop,
            hideTablet,
            hideMobile,
            border,
            btnStyles,
            typography,
            textShadow,
            boxShadow,
            padding,
            blockId
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


        let loadBtnGoogleFonts
        if (typography?.fontFamily !== 'Default') {
            const btnconfig = {
                google: {
                    families: [typography.fontFamily],
                },
            }
            loadBtnGoogleFonts = (
                <WebfontLoader config={btnconfig}>
                </WebfontLoader>
            )
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

        const loadStyles = () => {
            const styles = {};

            styles[`.${blockId} .premium-button:hover`] = {
                'color': `${btnStyles[0].textHoverColor}!important`,
                'border-color': `${btnStyles[0].borderHoverColor}!important`
            };
            styles[`.${blockId}.premium-button__none .premium-button:hover`] = {
                'background-color': `${btnStyles[0].backHoverColor}!important`
            };
            styles[`.${blockId}.premium-button__slide .premium-button::before, .${blockId}.premium-button__shutter .premium-button::before, .${blockId}.premium-button__radial .premium-button::before`] = {
                'background-color': `${slideColor}`,
            };

            return generateCss(styles);
        }

        const mainClasses = classnames(className, "premium-button");
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
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("General", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
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
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Button", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                    value={typography}
                                    onChange={newValue => setAttributes({ typography: newValue })}
                                />
                                <hr />
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
                                                        label={__('Background Color', 'premium-blocks-for-gutenberg')}
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
                                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                        colorValue={btnStyles[0].textHoverColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue => saveBtnStyles({ textHoverColor: newValue })}
                                                    />
                                                    <AdvancedPopColorControl
                                                        label={"radial" !== effect
                                                            ? __("Background Color", 'premium-blocks-for-gutenberg')
                                                            : __("Background Color", 'premium-blocks-for-gutenberg')}
                                                        colorValue={btnStyles[0].backHoverColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue => {
                                                            saveBtnStyles({
                                                                backHoverColor: newValue
                                                            })
                                                            setAttributes({
                                                                slideColor: newValue
                                                            });
                                                        }}
                                                    />
                                                    <AdvancedPopColorControl
                                                        label={__("Border Color", 'premium-blocks-for-gutenberg')}
                                                        colorValue={btnStyles[0].borderHoverColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue => saveBtnStyles({ borderHoverColor: newValue })}
                                                    />
                                                </Fragment>
                                            );
                                        }
                                        return (
                                            <div>
                                                {tabout}
                                            </div>
                                        );
                                    }}
                                </TabPanel>
                                <hr />
                                <PremiumShadow
                                    label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={false}
                                    value={textShadow}
                                    onChange={(value) => setAttributes({ textShadow: value })}
                                />
                                <PremiumShadow
                                    label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={true}
                                    value={boxShadow}
                                    onChange={(value) => setAttributes({ boxShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={border}
                                    borderType={border.borderType}
                                    borderColor={border.borderColor}
                                    borderWidth={border.borderWidth}
                                    borderRadius={border.borderRadius}
                                    onChange={(value) => setAttributes({ border: value })}
                                />
                                <hr />
                                <SpacingComponent value={padding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ padding: value })} />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                                onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                                onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                            />
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
            ),
            <div
                className={`${mainClasses}__wrap premium-button__${effect} ${blockId} premium-button__${effectDir} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{ textAlign: btnAlign }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles()
                    }}
                />
                <RichText
                    className={`premium-button premium-button__${btnSize}`}
                    value={btnText}
                    onChange={value => setAttributes({ btnText: value })}
                    style={{
                        color: btnStyles[0].textColor,
                        backgroundColor: btnStyles[0].backColor,
                        fontSize: `${typography?.fontSize?.[this.props.deviceType]}${typography?.fontSize?.unit || 'px'}`,
                        fontStyle: typography?.fontStyle,
                        fontFamily: typography?.fontFamily,
                        fontWeight: typography?.fontWeight,
                        letterSpacing: typography?.letterSpacing,
                        textDecoration: typography?.textDecoration,
                        textTransform: typography?.textTransform,
                        lineHeight: `${typography?.lineHeight}px`,
                        textShadow: `${textShadow?.horizontal}px ${textShadow?.vertical}px ${textShadow?.blur}px ${textShadow?.color}`,
                        boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                        paddingTop: `${padding?.[this.props.deviceType]?.top}${padding?.unit}`,
                        paddingRight: `${padding?.[this.props.deviceType]?.right}${padding?.unit}`,
                        paddingBottom: `${padding?.[this.props.deviceType]?.bottom}${padding?.unit}`,
                        paddingLeft: `${padding?.[this.props.deviceType]?.left}${padding?.unit}`,
                        borderStyle: border?.borderType,
                        borderTopWidth: border?.borderWidth?.[this.props.deviceType]?.top,
                        borderRightWidth: border?.borderWidth?.[this.props.deviceType]?.right,
                        borderBottomWidth: border?.borderWidth?.[this.props.deviceType]?.bottom,
                        borderLeftWidth: border?.borderWidth?.[this.props.deviceType]?.left,
                        borderColor: border?.borderColor,
                        borderTopLeftRadius: `${border?.borderRadius?.[this.props.deviceType]?.top || 0}px`,
                        borderTopRightRadius: `${border?.borderRadius?.[this.props.deviceType]?.right || 0}px`,
                        borderBottomLeftRadius: `${border?.borderRadius?.[this.props.deviceType]?.bottom || 0}px`,
                        borderBottomRightRadius: `${border?.borderRadius?.[this.props.deviceType]?.left || 0}px`,
                    }}
                    keepPlaceholderOnFocus
                />
                <URLInput
                    value={btnLink}
                    onChange={newLink => setAttributes({ btnLink: newLink })}
                />
                {loadBtnGoogleFonts}
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