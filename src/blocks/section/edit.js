import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumBackgroundControl from '../../components/Premium-Background-Control'

import SpacingComponent from '../../components/premium-responsive-spacing';
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
const { __ } = wp.i18n;
import MultiButtonsControl from '../../components/responsive-radio';
import Icons from "../../components/icons";
import { borderCss, gradientBackground, marginCss, paddingCss } from "../../components/HelperFunction";


const { PanelBody, ToggleControl, SelectControl, Button, ButtonGroup } = wp.components;

const { Fragment } = wp.element;
const { withSelect } = wp.data


const {
    BlockControls,
    AlignmentToolbar,
    InnerBlocks,
    InspectorControls
} = wp.blockEditor;

const CONTENT = [
    ["core/paragraph", { content: __("Insert your text or select a block ", 'premium-blocks-for-gutenberg') }]
];
// function getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
//     if (device === 'Mobile') {
//         if (undefined !== mobileSize && '' !== mobileSize) {
//             return mobileSize;
//         } else if (undefined !== tabletSize && '' !== tabletSize) {
//             return tabletSize;
//         }
//     } else if (device === 'Tablet') {
//         if (undefined !== tabletSize && '' !== tabletSize) {
//             return tabletSize;
//         }
//     }
//     return desktopSize;
// }
const edit = props => {
    const { isSelected, className, setAttributes } = props;

    const {
        stretchSection,
        innerWidthType,
        isUpdated,
        horAlign,
        height,
        innerWidth,
        minHeight,
        minHeightUnit,
        vPos,
        block_id,
        hideDesktop,
        hideTablet,
        hideMobile,
        containerStyles,

        border,
        padding,
        margin,
        background,
        boxShadow,
    } = props.attributes;

    const WIDTH = [
        {
            value: "boxed",
            label: __("Boxed", 'premium-blocks-for-gutenberg')
        },
        {
            value: "full",
            label: __("Full Width", 'premium-blocks-for-gutenberg')
        }
    ];
    const HEIGHT = [
        {
            value: "fit",
            label: __("Fit to Screen", 'premium-blocks-for-gutenberg')
        },
        {
            value: "min",
            label: __("Min Height", 'premium-blocks-for-gutenberg')
        }
    ];
    const VPOSITION = [
        {
            value: "top",
            label: __("Top", 'premium-blocks-for-gutenberg')
        },
        {
            value: "middle",
            label: __("Middle", 'premium-blocks-for-gutenberg')
        },
        {
            value: "bottom",
            label: __("Bottom", 'premium-blocks-for-gutenberg')
        }
    ];
    const mainClasses = classnames(className, "premium-container",
        {
            ' premium-desktop-hidden': hideDesktop,
            ' premium-tablet-hidden': hideTablet,
            ' premium-mobile-hidden': hideMobile,
        });

    return [

        isSelected && (
            <InspectorControls key="inspector">
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__("General Settings", 'premium-blocks-for-gutenberg')}
                            className={`premium-panel-body premium-stretch-section`}
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__("Stretch Section", 'premium-blocks-for-gutenberg')}
                                checked={stretchSection}
                                onChange={check => setAttributes({ stretchSection: check })}
                                help={__("This option stretches the section to the full width of the page using JS. You will need to reload the page after you enable this option for the first time.", 'premium-blocks-for-gutenberg')}
                            />
                            {stretchSection && (
                                <SelectControl
                                    label={__("Content Width", 'premium-blocks-for-gutenberg')}
                                    options={WIDTH}
                                    value={innerWidthType}
                                    onChange={newValue => setAttributes({ innerWidthType: newValue })}
                                />
                            )}
                            {"boxed" === innerWidthType && stretchSection && (
                                <ResponsiveSingleRangeControl
                                    label={__("Max Width", 'premium-blocks-for-gutenberg')}
                                    value={innerWidth}
                                    min="1"
                                    max="1600"
                                    onChange={newValue => setAttributes({ innerWidth: newValue })}
                                    defaultValue={0}
                                    showUnit={false}
                                />
                            )}
                            <SelectControl
                                label={__("Height", 'premium-blocks-for-gutenberg')}
                                options={HEIGHT}
                                value={height}
                                onChange={newValue => setAttributes({ height: newValue })}
                            />
                            {"min" === height && (
                                <Fragment>
                                    <ResponsiveSingleRangeControl
                                        label={__("Min Height", 'premium-blocks-for-gutenberg')}
                                        value={minHeight}
                                        min="1"
                                        max="800"
                                        onChange={newValue => setAttributes({ minHeight: newValue })}
                                        units={["px", "vh", "vw"]}
                                        defaultValue={0}
                                        onChangeUnit={newValue => setAttributes({ minHeightUnit: newValue })}
                                        showUnit={true}
                                        unit={minHeightUnit}
                                    />
                                </Fragment>
                            )}
                            <SelectControl
                                label={__("Content Position", 'premium-blocks-for-gutenberg')}
                                help={__(
                                    "If you have two or more inner columns then this option will work only on the preview page", 'premium-blocks-for-gutenberg'
                                )}
                                options={VPOSITION}
                                value={vPos}
                                onChange={newValue => setAttributes({ vPos: newValue })}
                            />
                            <MultiButtonsControl
                                choices={[
                                    {
                                        value: "left",
                                        label: __("Left"),
                                        icon: Icons.alignLeft,
                                    },
                                    {
                                        value: "center",
                                        label: __("Center"),
                                        icon: Icons.alignCenter,
                                    },
                                    {
                                        value: "right",
                                        label: __("Right"),
                                        icon: Icons.alignRight,
                                    },
                                ]}
                                value={horAlign}
                                onChange={(align) =>
                                    setAttributes({ horAlign: align })
                                }
                                label={__(
                                    "Align Content",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__("Background", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumBackgroundControl
                                value={background}
                                onChange={(value) => setAttributes({ background: value })}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Border", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >

                            <PremiumBorder
                                label={__("Border", 'premium-blocks-for-gutenberg')}
                                value={border}
                                onChange={(value) => setAttributes({ border: value })}
                            />
                            <hr />
                            <PremiumShadow
                                label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                boxShadow={true}
                                value={boxShadow}
                                onChange={(value) => setAttributes({ boxShadow: value })}
                            />

                        </PanelBody>

                        <PanelBody
                            title={__("Spacings", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >

                            <SpacingComponent
                                value={margin}
                                responsive={true}
                                showUnits={true}
                                label={__("Margin", 'premium-blocks-for-gutenberg')}
                                onChange={(value) => setAttributes({ margin: value })}
                            />
                            <SpacingComponent
                                value={padding}
                                responsive={true}
                                showUnits={true}
                                label={__("Padding", 'premium-blocks-for-gutenberg')}
                                onChange={(value) => setAttributes({ padding: value })}
                            />

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
            className={`${mainClasses} premium-container__stretch_${stretchSection} premium-container__${innerWidthType} `}
            style={{
                textAlign: horAlign,
                minHeight:
                    "fit" === height ? "100vh" : minHeight + minHeightUnit,
                ...borderCss(border, props.deviceType),
                ...gradientBackground(background, props.deviceType),
                ...marginCss(margin, props.deviceType),
                ...paddingCss(padding, props.deviceType),
                boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`
            }}
        >
            <div
                className={`premium-container__content_wrap premium-container__${vPos}`}
                style={{
                    maxWidth: "boxed" == innerWidthType && stretchSection
                        ? innerWidth
                            ? innerWidth + "px"
                            : "1140px"
                        : "100%",
                    minHeight: "fit" === height ? "100vh" : minHeight + minHeightUnit,
                }}
            >
                <div className={`premium-container__content_inner`}>
                    <InnerBlocks template={CONTENT} />
                </div>
            </div>
        </div>
    ];
};

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    return {
        deviceType: deviceType
    }
})(edit)