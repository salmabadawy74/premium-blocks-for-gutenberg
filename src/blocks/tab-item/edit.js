
import { withSelect, select } from '@wordpress/data';
// import { useEffect } from wp.element;
import {
    InspectorControls, useBlockProps, InnerBlocks
} from "@wordpress/block-editor";
import classnames from "classnames";
import { __ } from '@wordpress/i18n';
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumBorder,
    PremiumResponsiveTabs,
    MultiButtonsControl,
    PremiumBackgroundControl,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    WebfontLoader,
    PremiumTypo,
    SpacingComponent,
    ResponsiveRangeControl,
    InsideTabs,
    InsideTab
} from "@pbg/components";
import { generateBlockId, generateCss, typographyCss, borderCss, paddingCss, marginCss, gradientBackground } from '@pbg/helpers';
const { Fragment, useEffect } = wp.element;

function Edit( props ) {
    const { attributes, setAttributes, clientId, deviceType } = props;
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        align,
        width,
        color,
        boxShadow,
        typography,
        border,
        padding,
        margin,
        background,
        hoverColor,
        tabActive,
        id
    } = props.attributes;

   
    

    useEffect(() => {
        // Set block id.
		const { getBlockRootClientId, getBlockAttributes } = ! wp.blockEditor
			? select( 'core/editor' )
			: select( 'core/block-editor' );
		const rootBlockId = getBlockRootClientId( clientId );
		const rootBlockAttrs = getBlockAttributes( rootBlockId );
		setAttributes( { blockId: " premium-tab-item-" + generateBlockId(clientId) } );
		setAttributes( { tabActive: rootBlockAttrs.tabActive } );

		// Apply parent style if newly inserted
		if ( rootBlockAttrs !== null && rootBlockAttrs.needUpdate !== false ) {
			Object.keys( rootBlockAttrs ).map( ( attribute ) =>
				attributes[ attribute ] = rootBlockAttrs[ attribute ]
			)
		}
        // setAttributes({
        //     blockId:
        //         " premium-tab-item-" + generateBlockId(clientId),
        // });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        style: {
            textAlign: align?.[deviceType],
            width: width?.[deviceType],
            color: color,
            boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
            ...typographyCss(typography, deviceType),
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

    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId}:hover`] = {
            "color": `${hoverColor}!important`
        }

        return generateCss(styles);
    };

    return <Fragment>
        <InspectorControls>
            <InspectorTabs tabs={["layout", "style", "advance"]}>
                <InspectorTab key={"layout"}>
                    <ResponsiveRangeControl
                        label={__("Size", 'premium-blocks-for-gutenberg')}
                        value={width}
                        units={['px', '%']}
                        onChange={newValue => setAttributes({ width: newValue })}
                        showUnit={true}
                        min={1}
                        max={1000}
                    />
                    <MultiButtonsControl
                        choices={[{ value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }]}
                        value={align}
                        onChange={(align) => setAttributes({ align: align })}
                        label={__("Align", "premium-blocks-for-gutenberg")}
                        showIcons={true} />
                </InspectorTab>
                <InspectorTab key={"style"}>
                    <PremiumTypo
                        components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
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
                    <InsideTabs>
                        <InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
                            <AdvancedPopColorControl
                                label={__("Color", "premium-blocks-for-gutenberg")}
                                colorValue={color}
                                colorDefault={""}
                                onColorChange={(value) => setAttributes({ color: value })}
                            />
                        </InsideTab>
                        <InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
                            <AdvancedPopColorControl
                                label={__("Color", "premium-blocks-for-gutenberg")}
                                colorValue={hoverColor}
                                colorDefault={""}
                                onColorChange={(value) => setAttributes({ hoverColor: value })}
                            />
                        </InsideTab>
                    </InsideTabs>
                    <PremiumShadow
                        label={__("Box Shadow", "premium-blocks-for-gutenberg")}
                        value={boxShadow}
                        onChange={(value) => setAttributes({ boxShadow: value })}
                        boxShadow={true}
                    />
                    <PremiumBorder
                        label={__("Border")}
                        value={border}
                        onChange={(value) => setAttributes({ border: value })}
                    />
                    <SpacingComponent value={margin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ margin: value })} />
                    <SpacingComponent value={padding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ padding: value })} />
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
            <style>{loadStyles()}</style>

            <div
			className={ `premium-tabs__body-container premium-inner-tab-${ blockId }` }
			style={ { display: id === tabActive ? 'block' : 'none' } }
			aria-labelledby={ `premium-tabs__tab${ blockId }` }
		>{console.log(id)}
        {console.log(tabActive)}
			<InnerBlocks
				template={[ [ 'core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' } ] ]}
				templateLock={false}
			/>
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


