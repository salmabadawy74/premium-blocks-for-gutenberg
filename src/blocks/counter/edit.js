
import { withSelect } from '@wordpress/data';
import { useEffect } from 'react';
import { generateBlockId, typographyCss, paddingCss, marginCss } from '@pbg/helpers';
import {
    InspectorControls,
    useBlockProps,
    RichText
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    WebfontLoader,
    PremiumTypo,
    MultiButtonsControl,
    Icons
} from '@pbg/components';
import { Fragment } from 'react';
import classnames from "classnames";
import { __ } from '@wordpress/i18n';

function Edit({ clientId, attributes, setAttributes, deviceType }) {

    const {
        blockId,
        increment,
        prefix,
        suffix,
        hideDesktop,
        hideTablet,
        hideMobile,
        numberStyles,
        suffixStyles,
        prefixStyles,
        numberTypography,
        prefixTypography,
        suffixTypography,
        prefixPadding,
        prefixMargin,
        numberPadding,
        numberMargin,
        suffixPadding,
        suffixMargin,
        time,
        delay,
        align
    } = attributes;

    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId:
                "premium-counter-" + generateBlockId(clientId),
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames('premium-counter', blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        style: {
            justifyContent: align?.[deviceType]
        }
    });

    const googleFonts = [];
    if (numberTypography?.fontFamily !== 'Default') {
        googleFonts.push(numberTypography?.fontFamily);
    }
    if (suffixTypography?.fontFamily !== 'Default') {
        googleFonts.push(suffixTypography?.fontFamily);
    }
    if (prefixTypography?.fontFamily !== 'Default') {
        googleFonts.push(prefixTypography?.fontFamily);
    }
    const fontConfig = {
        google: {
            families: googleFonts,
        },
    }
    let loadGoogleFonts;
    if (googleFonts.length > 0) {
        loadGoogleFonts = (
            <WebfontLoader config={fontConfig}>
            </WebfontLoader>
        )
    }

    const saveNumberStyles = (value) => {
        const newUpdate = numberStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ numberStyles: newUpdate });
    };

    const savePrefixStyle = (value) => {
        const newUpdate = prefixStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ prefixStyles: newUpdate });
    };

    const saveSuffixStyle = (value) => {
        const newUpdate = suffixStyles.map((item, i) => {
            if (0 === i) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ suffixStyles: newUpdate });
    };


    return <Fragment>
        <InspectorControls>
            <InspectorTabs tabs={["layout", "style", "advance"]}>
                <InspectorTab key={"layout"}>
                    <PanelBody
                        title={__("Counter", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <ToggleControl
                            label={__(
                                "Prefix",
                                "premium-blocks-for-gutenberg"
                            )}
                            checked={prefix}
                            onChange={(check) =>
                                setAttributes({ prefix: check })
                            }
                        />
                        <ToggleControl
                            label={__(
                                "Suffix",
                                "premium-blocks-for-gutenberg"
                            )}
                            checked={suffix}
                            onChange={(check) =>
                                setAttributes({ suffix: check })
                            }
                        />
                        <TextControl
                            label={__(
                                "Counting Time",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={time}
                            onChange={(value) =>
                                setAttributes({ time: value })
                            }
                            help={__(
                                "Set counting time in milliseconds, for example: 1000",
                                "premium-blocks-for-gutenberg"
                            )}
                        />
                        <TextControl
                            label={__(
                                "Delay",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={delay}
                            onChange={(value) =>
                                setAttributes({ delay: value })
                            }
                            help={__(
                                "Set delay in milliseconds, for example: 10",
                                "premium-blocks-for-gutenberg"
                            )}
                        />
                        <MultiButtonsControl
                            choices={[
                                {
                                    value: "left",
                                    label: __(
                                        "Left",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.alignLeft,
                                },
                                {
                                    value: "center",
                                    label: __(
                                        "Center",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.alignCenter,
                                },
                                {
                                    value: "right",
                                    label: __(
                                        "Right",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.alignRight,
                                },
                            ]}
                            value={align}
                            onChange={(alignn) =>
                                setAttributes({ align: alignn })
                            }
                            label={__(
                                "Alignment",
                                "premium-blocks-for-gutenberg"
                            )}
                            showIcons={true}
                        />
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={"style"}>
                    <PanelBody
                        title={__("Number", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <PremiumTypo
                            value={numberTypography}
                            onChange={(newValue) =>
                                setAttributes({
                                    numberTypography: newValue,
                                })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                "Number Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={numberStyles[0].numberColor}
                            colorDefault={""}
                            onColorChange={(newValue) =>
                                saveNumberStyles({ numberColor: newValue })
                            }
                        />
                        <hr />
                        <SpacingComponent
                            value={numberMargin}
                            responsive={true}
                            showUnits={true}
                            label={__(
                                "Margin",
                                "premium-blocks-for-gutenberg"
                            )}
                            onChange={(value) =>
                                setAttributes({ numberMargin: value })
                            }
                        />
                        <SpacingComponent
                            value={numberPadding}
                            responsive={true}
                            showUnits={true}
                            label={__(
                                "Padding",
                                "premium-blocks-for-gutenberg"
                            )}
                            onChange={(value) =>
                                setAttributes({ numberPadding: value })
                            }
                        />
                    </PanelBody>
                    {prefix && (
                        <PanelBody
                            title={__(
                                "Prefix",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                value={prefixTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        prefixTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Text Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={prefixStyles[0].prefixColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    savePrefixStyle({
                                        prefixColor: newValue,
                                    })
                                }
                            />
                            <hr />
                            <SpacingComponent
                                value={prefixMargin}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ prefixMargin: value })
                                }
                            />
                            <SpacingComponent
                                value={prefixPadding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ prefixPadding: value })
                                }
                            />
                        </PanelBody>
                    )}
                    {suffix && (
                        <PanelBody
                            title={__(
                                "Suffix",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                value={suffixTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        suffixTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Text Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={suffixStyles[0].suffixColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    saveSuffixStyle({
                                        suffixColor: newValue,
                                    })
                                }
                            />
                            <hr />
                            <SpacingComponent
                                value={suffixMargin}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ suffixMargin: value })
                                }
                            />
                            <SpacingComponent
                                value={suffixPadding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ suffixPadding: value })
                                }
                            />
                        </PanelBody>
                    )}
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
            <div className={`premium-countup__desc`}>
                {prefix && (
                    <RichText
                        className={`premium-countup__prefix`}
                        value={prefixStyles[0].prefixTxt}
                        onChange={(value) =>
                            savePrefixStyle({ prefixTxt: value })
                        }
                        style={{
                            color: prefixStyles[0].prefixColor,
                            marginRight: `${prefixStyles[0].prefixGap}px`,
                            ...typographyCss(
                                prefixTypography,
                                deviceType
                            ),
                            ...marginCss(
                                prefixMargin,
                                deviceType
                            ),
                            ...paddingCss(
                                prefixPadding,
                                deviceType
                            ),
                        }}
                        tagName="p"
                    />
                )}
                <RichText
                    className={`premium-countup__increment`}
                    value={`${increment}`}
                    onChange={(value) =>
                        setAttributes({ increment: value })
                    }
                    style={{
                        color: numberStyles[0].numberColor,
                        ...typographyCss(
                            numberTypography,
                            deviceType
                        ),
                        ...marginCss(numberMargin, deviceType),
                        ...paddingCss(numberPadding, deviceType),
                    }}
                    tagName="p"
                    data-interval={time}
                    data-delay={delay}
                />
                {suffix && (
                    <RichText
                        className={`premium-countup__suffix`}
                        value={suffixStyles[0].suffixTxt}
                        onChange={(value) =>
                            saveSuffixStyle({ suffixTxt: value })
                        }
                        style={{
                            color: suffixStyles[0].suffixColor,
                            ...typographyCss(
                                suffixTypography,
                                deviceType
                            ),
                            ...marginCss(
                                suffixMargin,
                                deviceType
                            ),
                            ...paddingCss(
                                suffixPadding,
                                deviceType
                            ),
                        }}
                        tagName="p"
                    />
                )}
            </div>
            {loadGoogleFonts}
        </div>
    </Fragment>;
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        // Editor preview device.
        deviceType: deviceType
    }
})(Edit)


