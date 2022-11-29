
import { withSelect } from '@wordpress/data';
import { useEffect } from 'react';
import { generateBlockId, typographyCss, borderCss, paddingCss, marginCss, gradientBackground } from '@pbg/helpers';
import {
    InspectorControls,
    useBlockProps,
    RichText
} from "@wordpress/block-editor";
import { Fragment } from 'react';
import classnames from "classnames";
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    WebfontLoader,
    PremiumShadow,
    PremiumTypo,
    MultiButtonsControl,
    Icons,
    PremiumBackgroundControl
} from '@pbg/components';
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

function Edit({ clientId, attributes, setAttributes, deviceType }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        text,
        typography,
        padding,
        margin,
        border,
        textShadow,
        align,
        color,
        background
    } = attributes;
    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId:
                "premium-text-" + generateBlockId(clientId),
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(blockId, 'premium-text', {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        style: {
            ...borderCss(border, deviceType),
            ...paddingCss(padding, deviceType),
            ...marginCss(margin, deviceType),
            ...gradientBackground(background)
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
                        title={__("Display", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <MultiButtonsControl
                            choices={[{ value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }]}
                            value={align}
                            onChange={(align) => setAttributes({ align: align })}
                            label={__("Text Align", "premium-blocks-for-gutenberg")}
                            showIcons={true} />
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={"style"}>
                    <PanelBody
                        title={__("General Styles", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <PremiumTypo
                            value={typography}
                            onChange={newValue => setAttributes({ typography: newValue })}
                        />
                        <PremiumBackgroundControl
                            value={background}
                            onChange={(value) =>
                                setAttributes({
                                    background: value,
                                })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Color", "premium-blocks-for-gutenberg")}
                            colorValue={color}
                            colorDefault={""}
                            onColorChange={(value) => setAttributes({ color: value })}
                        />
                        <PremiumShadow
                            label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                            value={textShadow}
                            onChange={(value) => setAttributes({ textShadow: value })}
                        />
                        <PremiumBorder
                            label={__("Border", "premium-blocks-for-gutenberg")}
                            value={border}
                            onChange={(value) => setAttributes({ border: value })}
                        />
                        <SpacingComponent value={margin} responsive={true} showUnits={true} label={__("Margin", "premium-blocks-for-gutenberg")} onChange={(value) => setAttributes({ margin: value })} />
                        <SpacingComponent value={padding} responsive={true} showUnits={true} label={__("Padding", "premium-blocks-for-gutenberg")} onChange={(value) => setAttributes({ padding: value })} />
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
                </InspectorTab>
            </InspectorTabs>
        </InspectorControls>
        <div {...blockProps}>
            <RichText
                tagName='p'
                onChange={newText => setAttributes({ text: newText })}
                placeholder={__("Type", 'premium-blocks-for-gutenberg')}
                value={text}
                style={{
                    textAlign: align?.[deviceType],
                    color: color,
                    textShadow: `${textShadow?.horizontal}px ${textShadow?.vertical}px ${textShadow?.blur}px ${textShadow?.color}`,
                    ...typographyCss(typography, deviceType),
                }}
                keepPlaceholderOnFocus
            />
            {loadGoogleFonts}
        </div>
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


