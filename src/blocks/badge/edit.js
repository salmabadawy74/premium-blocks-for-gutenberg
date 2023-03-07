
import { withSelect } from '@wordpress/data';
import { useEffect } from 'react';
import {
    InspectorControls,
    useBlockProps,
    RichText
} from "@wordpress/block-editor";
import { Fragment } from 'react';
import classnames from "classnames";
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
} from '@wordpress/components';
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumResponsiveTabs,
    AdvancedColorControl as AdvancedPopColorControl,
    WebfontLoader,
    PremiumTypo,
    ResponsiveSingleRangeControl,
    RadioComponent,
    BlockContent,
    AdvancedTabOptions
} from "@pbg/components";
import { generateBlockId, typographyCss } from '@pbg/helpers';

function Edit(props) {
    const { clientId, attributes, setAttributes, deviceType } = props;
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        color,
        typography,
        text,
        position,
        vOffset,
        hOffset,
        backgroundColor,
        textWidth,
        badgeSize,
    } = attributes;

    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId:
                "premium-badge-" + generateBlockId(clientId),
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(blockId, `premium-badge-${position}`, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        style: {
            position: 'absolute',
            zIndex: 99,
            top: `${vOffset || 0}px`,
            [position]: `${hOffset || 0}px`,
        }
    });

    let loadGoogleFonts;
    if (typography?.fontFamily !== 'Default') {
        const fontConfig = {
            google: {
                families: [typography?.fontFamily],
            },
        }
        loadGoogleFonts = (
            <WebfontLoader config={fontConfig}>
            </WebfontLoader>
        )
    }

    return <Fragment>
        <InspectorControls>
            <InspectorTabs tabs={["layout", "style", "advance"]}>
                <InspectorTab key={"layout"}>
                    <PanelBody
                        title={__("Display Options", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <ResponsiveSingleRangeControl
                            label={__("Text Width", 'premium-blocks-for-gutenberg')}
                            value={textWidth}
                            onChange={newValue => setAttributes({ textWidth: newValue })}
                            showUnit={false}
                            defaultValue={1}
                            max={200}
                            step={1}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Badge Size", 'premium-blocks-for-gutenberg')}
                            value={badgeSize}
                            onChange={newValue => setAttributes({ badgeSize: newValue })}
                            showUnit={false}
                            defaultValue={1}
                            max={250}
                            step={1}
                        />
                        <RadioComponent
                            choices={[
                                {
                                    value: "left",
                                    label: __(
                                        "Left",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.arrowLeft,
                                },
                                {
                                    value: "right",
                                    label: __(
                                        "Right",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.arrowRight,
                                },
                            ]}
                            value={position}
                            onChange={(newEffect) => setAttributes({ position: newEffect })}
                            label={__(
                                "Position",
                                "premium-blocks-for-gutenberg"
                            )}
                            showIcons={true}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Vertical Offset", 'premium-blocks-for-gutenberg')}
                            value={vOffset}
                            onChange={newValue => setAttributes({ vOffset: newValue })}
                            showUnit={false}
                            defaultValue={1}
                            max={100}
                            step={1}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Horizontal Offset", 'premium-blocks-for-gutenberg')}
                            value={hOffset}
                            onChange={newValue => setAttributes({ hOffset: newValue })}
                            showUnit={false}
                            defaultValue={1}
                            max={150}
                            step={1}
                        />
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={"style"}>
                    <PanelBody
                        title={__("General Styles", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                            value={typography}
                            onChange={newValue => setAttributes({ typography: newValue })}
                        />
                        <AdvancedPopColorControl
                            label={__("Color", "premium-blocks-for-gutenberg")}
                            colorValue={color}
                            colorDefault={""}
                            onColorChange={(value) => setAttributes({ color: value })}
                        />
                        <AdvancedPopColorControl
                            label={__("Background Color", "premium-blocks-for-gutenberg")}
                            colorValue={backgroundColor}
                            colorDefault={""}
                            onColorChange={(value) => setAttributes({ backgroundColor: value })}
                        />
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={"advance"}>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) =>
                            setAttributes({
                                hideDesktop: value,
                            })
                        }
                        onChangeTablet={(value) =>
                            setAttributes({
                                hideTablet: value,
                            })
                        }
                        onChangeMobile={(value) =>
                            setAttributes({
                                hideMobile: value,
                            })
                        }
                    />
                    <AdvancedTabOptions {...props} />
                </InspectorTab>
            </InspectorTabs>
        </InspectorControls>
        <div {...blockProps}>
            <div className='premium-badge-wrap' style={{
                borderRightColor:
                    "right" === position ? backgroundColor : "transparent",
                borderTopColor: "left" === position ? backgroundColor : "transparent",
                borderBottomWidth: "right" === position && `${badgeSize}px`,
                borderRightWidth: `${badgeSize}px`,
                borderTopWidth: "left" === position && `${badgeSize}px`,
            }}>
                <BlockContent blockProps={props}>
                    <RichText
                        tagName='span'
                        onChange={newText => saveBadgeStyles({ badgeText: newText })}
                        placeholder={__("Popular", 'premium-blocks-for-gutenberg')}
                        value={text}
                        style={{
                            ...typographyCss(typography, deviceType),
                            color: color,
                            width: `${textWidth}px`,
                        }}
                        keepPlaceholderOnFocus
                    />
                </BlockContent>
            </div>
        </div>
        {loadGoogleFonts}
    </Fragment>;
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        // Editor preview device.
        deviceType: deviceType
    }
})(Edit)


