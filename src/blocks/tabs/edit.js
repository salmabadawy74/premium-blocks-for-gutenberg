
import { withSelect, withDispatch, dispatch, select } from '@wordpress/data';
import { useEffect } from 'react';
import {
    InspectorControls, useBlockProps
} from "@wordpress/block-editor";
import { Fragment } from 'react';
import classnames from "classnames";
import { Tooltip, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { createBlock } from '@wordpress/blocks';
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
const { getBlockOrder } = ! wp.blockEditor
	? select( 'core/editor' )
	: select( 'core/block-editor' );
const { updateBlockAttributes, insertBlock } = ! wp.blockEditor
? dispatch( 'core/editor' )
: dispatch( 'core/block-editor' );

function Edit(props) {
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
        tabHeaders ,
        tabActive
    } = attributes;

    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId:
                "premium-tabs-" + generateBlockId(clientId),
        });
    }, []);

    const { RichText, InnerBlocks, BlockControls, InspectorControls, MediaUpload } = wp.blockEditor;

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

    const updateTabsTitle = ( header, index ) => {
		const childBlocks = getBlockOrder( clientId );

		const newHeaders = tabHeaders.map( ( item, idx ) => {
			if ( index === idx ) {
				item = header;
			}
			return item;
		} );

		setAttributes( { tabHeaders: newHeaders } );
		updateBlockAttributes( childBlocks[ index ], { header } );
		updateTabTitle();
	};

    const updateTabTitle = () => {
		const childBlocks = getBlockOrder( clientId );

		childBlocks.forEach( ( childBlockId ) =>
			updateBlockAttributes( childBlockId, { tabHeaders } )
		);
	};

    const addTab = () => {
		const tabItemBlock = createBlock( 'premium/tab-item' );

		insertBlock( tabItemBlock, attributes.tabHeaders.length, clientId );
		setAttributes( {
			tabHeaders: [ ...attributes.tabHeaders, 'New Tab' ],
		} );
		props.resetTabOrder();
	};

    const updateTabsAttr = ( attrs ) => {
		const childBlocks = getBlockOrder( clientId );

		setAttributes( attrs );
		childBlocks.forEach( ( childBlockId ) =>
			updateBlockAttributes( childBlockId, attrs )
		);
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
            <div className={`premium-tab-body`}>
            <ul
					className={ `premium-tabs__panel` }
				>
					{ tabHeaders.map( ( header, index ) => (
						<li
							key={ index }
							className={ `premium-tab ${
								tabActive === index ? 'premium-tabs__active' : ''
							} ` }
							id={ `premium-tabs__tab${ index }` }
						>
							<a // eslint-disable-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events
								role='tab'
								tabIndex={ index }
								className={ `premium-tabs__icon-position- premium-tabs-list` }
								onClick={ () => {
									props.updateActiveTab( index );
								} }
								data-tab={ index }
							>
								<RichText
									tagName="p"
									value={ header }
									onChange={ ( value ) =>
										updateTabsTitle( value, index )
									}
									onSplit={ () => null }
									placeholder={ __(
										'Title…',
										'premium-blocks-for-gutenberg'
									) }
								/>
							</a>
						</li>
					) ) }
					<li className="premium-tab premium-tabs__add-tab" // eslint-disable-line jsx-a11y/click-events-have-key-events
						role='presentation' 
						tabIndex='0'
						onClick={ () => addTab() }>
						<Tooltip
							text={ __(
								'Add tab',
								'premium-blocks-for-gutenberg'
							) }
						>
								<Dashicon icon="plus" />
						</Tooltip>
						</li>
				</ul>
           
            <InnerBlocks
                template={ [
                    [ 'premium/tab-item' ],
                    [ 'premium/tab-item' ]
                ] }
                templateLock={ false }
                allowedBlocks={ [ 'premium/tab-item' ] }
            />
			</div>
            {loadGoogleFonts}
        </div>
    </Fragment>;
}

export default compose(
  withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        // Editor preview device.
        deviceType: deviceType,
    }
    }),
    withDispatch( ( dispatch, { clientId }, { select } ) => { // eslint-disable-line no-shadow
		const { getBlock } = select( 'core/block-editor' );
		const { updateBlockAttributes } = dispatch(
			'core/block-editor'
		);

		const block = getBlock( clientId );

		return {
            resetTabOrder() {
				for ( let i = 0; i < block.innerBlocks.length; i++ ) {
					updateBlockAttributes( block.innerBlocks[ i ].clientId, {
						id: i,
					} );
				}
			},
			updateActiveTab( tabActive ) {
				updateBlockAttributes( block.clientId, {
					tabActive,
				} );
				for ( let i = 0; i < block.innerBlocks.length; i++ ) {
					updateBlockAttributes( block.innerBlocks[ i ].clientId, {
						tabActive,
					} );
				}
				this.resetTabOrder();
			}
		};
	} )
)( Edit )


