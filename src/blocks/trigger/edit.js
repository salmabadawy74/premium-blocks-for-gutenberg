import { __ } from '@wordpress/i18n';
import classnames from "classnames";
import { useBlockProps, 
    InnerBlocks, 
    InspectorControls, 
    BlockControls,
    AlignmentToolbar } from '@wordpress/block-editor';
import {
    Fragment,
    useEffect,
    useState
} from '@wordpress/element';
import { withSelect } from '@wordpress/data'
import { PanelBody, TextControl, TabPanel, ToggleControl, SelectControl } from '@wordpress/components';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBorder from "../../components/premium-border";
import RadioComponent from '../../components/radio-control';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import SpacingControl from '../../components/premium-responsive-spacing'
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

 
function Edit(props) {

const [ isEditing, setEditing ] = useState(false);
const {  attributes, setAttributes, className } = props;

useEffect(() => {
    setAttributes({ block_id: props.clientId })
}, [])
const { triggerLabel, 
    iconSize,
    iconAlignment, 
    displayFloat, 
    floatPosition, 
    block_id, 
    triggerStyles, 
    canvasStyles, 
    triggerSpacing, 
    triggerBorder,
    vOffset,
    hOffset,
    hideDesktop,
    hideTablet,
    hideMobile
    } = attributes;

const onChangeText = ( newText ) => {
    setAttributes( { triggerLabel: newText } );
};

const triggerSpacingTop = getPreviewSize(props.deviceType, triggerSpacing.Desktop.top, triggerSpacing.Tablet.top, triggerSpacing.Mobile.top);
const triggerSpacingRight = getPreviewSize(props.deviceType, triggerSpacing.Desktop.right, triggerSpacing.Tablet.right, triggerSpacing.Mobile.right);
const triggerSpacingBottom = getPreviewSize(props.deviceType, triggerSpacing.Desktop.bottom, triggerSpacing.Tablet.bottom, triggerSpacing.Mobile.bottom);
const triggerSpacingLeft = getPreviewSize(props.deviceType, triggerSpacing.Desktop.left, triggerSpacing.Tablet.left, triggerSpacing.Mobile.left);

const setTriggerStyles = (style, value) => {
    const newTStyles = { ...triggerStyles };
    newTStyles[style] = value;
    setAttributes({ triggerStyles: newTStyles });
}
const setCanvasStyles = (color, value) => {
    const newCStyles = { ...canvasStyles };
    newCStyles[color] = value;
    setAttributes({ canvasStyles: newCStyles });
};
function getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
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

    return (
        <Fragment>
            <BlockControls group="block">
                <AlignmentToolbar
                    value={ iconAlignment }
                    onChange={( newAlignment ) => {
                        setAttributes({ iconAlignment: newAlignment });
                    }}
                    
            />   
            </BlockControls> 
            
            <InspectorControls>
            <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__('Trigger', 'premium-blocks-for-gutenberg')}
                            initialOpen={true}
                        >
                            <TextControl
                                label={__('Trigger Label', 'premium-blocks-for-gutenberg')}
                                value={attributes.triggerLabel}
                                onChange={(val) => setAttributes({ triggerLabel: val })}
                            />
                            <RadioComponent
                                choices={["right", "left"]}
                                value={triggerStyles.labelPosition}
                                onChange={newValue => setTriggerStyles('labelPosition', newValue )}
                                label={__("Label Alignment", 'premium-blocks-for-gutenberg')}
                            />
                            <RadioComponent
                                choices={["simple", "outline", "solid"]}
                                value={triggerStyles.style}
                                onChange={newValue => setTriggerStyles('style', newValue )}
                                label={__("Icon Style", 'premium-blocks-for-gutenberg')}
                            />

                            <ToggleControl
                            label={__("Float", 'premium-blocks-for-gutenberg')}
                            checked={displayFloat}
                            onChange={value => setAttributes({ displayFloat: value })}
                            />

                            {attributes.displayFloat && (
                                <fragment>
                                <SelectControl
                                label={__('Position', 'premium-blocks-for-gutenberg')}
                                value={floatPosition}
                                onChange={newValue => setAttributes({floatPosition: newValue })}
                                options={[
                                    { label: __("Top Right", "premium-blocks-for-gutenberg"), value: "topright" },
                                    { label: __("Top Left", "premium-blocks-for-gutenberg"), value: "topleft" },
                                    { label: __("Bottom Right", "premium-blocks-for-gutenberg"), value: "bottomright" },
                                    { label: __("Bottom Left", "premium-blocks-for-gutenberg"), value: "bottomleft" }
                                ]}
                                
                                
                                />
                                <ResponsiveRangeControl
                                    label={__('Vertical Offset', 'premium-blocks-for-gutenberg')}
                                    value={vOffset}
                                    onChange={value => setAttributes({ vOffset: value })}
                                    min={0}
                                    max={200}
                                    step={1}
                                    showUnit={true}
                                    units={['px', '%']}
                                    defaultValue={20}
                                />
                                <ResponsiveRangeControl
                                    label={__('Horizontal Offset', 'premium-blocks-for-gutenberg')}
                                    value={hOffset}
                                    onChange={value => setAttributes({ hOffset: value })}
                                    min={0}
                                    max={200}
                                    step={1}
                                    showUnit={true}
                                    units={['px', '%']}
                                    defaultValue={20}
                                />
                                </fragment>
                            )}
                                        
                            
                </PanelBody>
                <PanelBody
                    title={__('Canvas', 'premium-blocks-for-gutenberg')}
                    initialOpen={false}
                >
                    
                    <RadioComponent
                        choices={["right", "left", "full"]}
                        value={canvasStyles.layout}
                        onChange={newValue => setCanvasStyles('layout', newValue )}
                        label={__("Layout style", 'premium-blocks-for-gutenberg')}
                    />

                </PanelBody>
                </InspectorTab>
                <InspectorTab key={'style'}>
                    <PanelBody
                        title={__('Trigger', 'premium-blocks-for-gutenberg')}
                        initialOpen={true}
                    >
                        <ResponsiveRangeControl
                                label={__('Icon Size', 'premium-blocks-for-gutenberg')}
                                value={iconSize}
                                onChange={value => setAttributes({ iconSize: value })}
                                min={0}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={['px']}
                                defaultValue={20}
                        />
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
                                                    label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                                                    colorValue={triggerStyles.iconColor}
                                                    colorDefault={''}
                                                    onColorChange={(newValue) => setTriggerStyles('iconColor', newValue )}
                                                />
                                                <AdvancedPopColorControl
                                                    label={__("Label Color", 'premium-blocks-for-gutenberg')}
                                                    colorValue={triggerStyles.labelColor}
                                                    colorDefault={''}
                                                    onColorChange={newValue => setTriggerStyles('labelColor', newValue )}
                                                /> 
                                                {triggerStyles.style === 'solid' && 
                                                    <AdvancedPopColorControl
                                                    label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                                    colorValue={triggerStyles.iconBgColor}
                                                    colorDefault={''} 
                                                    onColorChange={newValue => setTriggerStyles('iconBgColor', newValue )}
                                                    />
                                                }
                                            </Fragment>
                                        );
                                    }
                                    if ("hover" === tab.name) {
                                        tabout = (
                                            <Fragment>
                                                <AdvancedPopColorControl
                                                    label={__("Icon Hover Color", 'premium-blocks-for-gutenberg')}
                                                    colorValue={triggerStyles.iconHoverColor}
                                                    colorDefault={''}
                                                    onColorChange={newValue => setTriggerStyles('iconHoverColor', newValue )}
                                                />
                                                <AdvancedPopColorControl
                                                    label={__("Label Hover Color", 'premium-blocks-for-gutenberg')}
                                                    colorValue={triggerStyles.labelHoverColor}
                                                    colorDefault={''}
                                                    onColorChange={newValue => setTriggerStyles('labelHoverColor', newValue )}
                                                />
                                                {triggerStyles.style === 'solid' && 
                                                <AdvancedPopColorControl
                                                    label={__("Background Hover Color", 'premium-blocks-for-gutenberg')}
                                                    colorValue={triggerStyles.iconBgHoverColor}
                                                    colorDefault={''}
                                                    onColorChange={newValue => setTriggerStyles('iconBgHoverColor', newValue )}
                                                />
                                            }
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
                            {(triggerStyles.style === 'outline' ||  triggerStyles.style === 'solid')&& 
                            <fragment>
                            <PremiumBorder
                                label={__('Border', 'premium-blocks-for-gutenberg')}
                                value={triggerBorder}
                                onChange={(value) => setAttributes({ triggerBorder: value })}
                            />
                            <AdvancedPopColorControl
                                    label={__("Border Hover Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={triggerStyles.borderHoverColor}
                                    colorDefault={''}
                                    onColorChange={(newValue) => setTriggerStyles( 'borderHoverColor' , newValue )}
                                />
                                </fragment>
                            }
                    </PanelBody>
                    <PanelBody
                        title={__('Canvas Area', 'premium-blocks-for-gutenberg')}
                        initialOpen={false}
                    >
                        <AdvancedPopColorControl
                        label={__("Background Canvas Area", 'premium-blocks-for-gutenberg')}
                        colorValue={canvasStyles.canvasBgColor}
                        colorDefault={''}
                        onColorChange={newValue => setCanvasStyles('canvasBgColor', newValue )}
                        />
                        <AdvancedPopColorControl
                            label={__("Overlay Background", 'premium-blocks-for-gutenberg')}
                            colorValue={canvasStyles.overlayBgColor}
                            colorDefault={''}
                            onColorChange={newValue => setCanvasStyles('overlayBgColor', newValue )}
                        />
                        {(canvasStyles.layout === 'right' || canvasStyles.layout === 'left' ) && 
                            (<ResponsiveSingleRangeControl
                                label={__("Canvas Width", 'premium-blocks-for-gutenberg')}
                                value={canvasStyles.width}
                                onChange={newValue => setCanvasStyles('width', newValue )}
                                min={0}
                                max={700}
                                step={1}
                                showUnit={true}
                                units={['px']}
                                defaultValue={400}
                            />)
                         }
                        <SpacingControl
                        label={__('Padding', 'premium-blocks-for-gutenberg')}
                        value={triggerSpacing}
                        onChange={(value) => setAttributes({ triggerSpacing: value })}
                        showUnits={true}
                        responsive={true}
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

            <style>
            {`
            #block-${block_id} .toggle-button:hover {
                background-color:${triggerStyles.iconBgHoverColor} !important;
            }
            #block-${block_id} .toggle-button:hover svg {
                fill:${triggerStyles.iconHoverColor} !important;
            }
            #block-${block_id} .toggle-button:hover .trigger-label {
                color:${triggerStyles.labelHoverColor} !important;
            }
            #block-${block_id} .toggle-button[data-style="solid"] {
                background-color: ${triggerStyles.iconBgColor} ;
            }
            #block-${block_id} .toggle-button[data-style="outline"] {
                border-style: ${triggerBorder.borderType};
                border-top-width: ${triggerBorder && triggerBorder.borderWidth.Desktop.top}px;
                border-right-width: ${triggerBorder && triggerBorder.borderWidth.Desktop.right}px;
                border-bottom-width: ${triggerBorder && triggerBorder.borderWidth.Desktop.bottom}px;
                border-left-width: ${triggerBorder && triggerBorder.borderWidth.Desktop.left}px;
                border-radius: ${triggerBorder && triggerBorder.borderRadius.Desktop.top || 0}px ${triggerBorder && triggerBorder.borderRadius.Desktop.right || 0}px ${triggerBorder && triggerBorder.borderRadius.Desktop.bottom || 0}px ${triggerBorder && triggerBorder.borderRadius.Desktop.left || 0}px !important;
                border-color: ${triggerBorder && triggerBorder.borderColor};
            }
            #block-${block_id} .toggle-button[data-style="outline"]:hover {
                border-color: ${triggerStyles.borderHoverColor} !important;
            }
            #block-${block_id}.float-position-topright {
                top: ${(vOffset[props.deviceType] || 20) + vOffset.unit};
                right: ${(hOffset[props.deviceType] || 20) + hOffset.unit};
            }
            .is-sidebar-opened #block-${block_id}.float-position-topright,
            .is-sidebar-opened #block-${block_id}.float-position-bottomright {
                margin-right: 282px !important;
            }
            .is-sidebar-opened #block-${block_id}.float-position-bottomright,
            .is-sidebar-opened #block-${block_id}.float-position-bottomright {
                margin-top: 40px !important;
            }
             #block-${block_id}.float-position-topleft {
                 top: ${(vOffset[props.deviceType] || 20) + vOffset.unit};
                 left: ${(hOffset[props.deviceType] || 20) + hOffset.unit};
             }
             #block-${block_id}.float-position-bottomright {
                bottom: ${(vOffset[props.deviceType] || 20) + vOffset.unit};
                right: ${(hOffset[props.deviceType] || 20) + hOffset.unit};
            }
            #block-${block_id}.float-position-bottomleft {
                bottom: ${(vOffset[props.deviceType] || 20) + vOffset.unit};
                left: ${(hOffset[props.deviceType] || 20) + hOffset.unit};
            }
            #block-${block_id} .gpb-trigger-canvas-container[data-layout="right"] .gpb-popup-content,
            #block-${block_id} .gpb-trigger-canvas-container[data-layout="left"] .gpb-popup-content {
                width: ${canvasStyles.width}px;
            }
        `}
        </style>  
               
            <div { ...useBlockProps({
                className: classnames(
                        className,
                        `${isEditing ? "active" : ""} ${hideDesktop} ${hideTablet} ${hideMobile} ${attributes.displayFloat ? `float-position-${floatPosition}` : ""}`
                ),
            }) }>
            <div className={`premium-trigger-container`}>
            <div className={`gpb-trigger-icon-container has-icon-align-${ iconAlignment }`}>
                    <a className={`toggle-button ${isEditing ? "toggled" : ""}`} 
                    data-style={triggerStyles.style}
                    data-label={triggerStyles.labelPosition}
                        onClick={ () => setEditing( true )
                        }
                        >
                        {triggerLabel &&
                        <span
                            className={`trigger-label`}
                            onChange={ onChangeText }
                            value={triggerLabel}
                            placeholder={ __( 'Menu', 'premium-blocks-for-gutenberg' ) }
                            style={{color: triggerStyles.labelColor }}
                        >{triggerLabel}</span>}
                        <svg style={{fontSize: (iconSize[props.deviceType] || 20) + iconSize.unit, fill:`${triggerStyles.iconColor}`}} height="1.5em" viewBox="0 -53 384 384" width="1.5em" xmlns="http://www.w3.org/2000/svg">
					<path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
					<path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
					<path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path></svg>
                        
                    </a>
                </div>
				{isEditing && (
                    <div className="gpb-trigger-canvas-container" role="dialog" data-layout={canvasStyles.layout} >
                        <div role="presentation" className="gpb-popup-overlay" onClick={() => setEditing(false)} style={{
                        backgroundColor: `${canvasStyles.overlayBgColor}`,
                    }}></div>
                        <div className="gpb-popup-content gpb-desktop-popup-content"
                        style={{
                            paddingTop: triggerSpacingTop && `${triggerSpacingTop}${triggerSpacing.unit ? triggerSpacing.unit : 'px'}`,
                            paddingBottom: triggerSpacingBottom && `${triggerSpacingBottom}${triggerSpacing.unit ? triggerSpacing.unit : 'px'}`,
                            paddingLeft: triggerSpacingLeft && `${triggerSpacingLeft}${triggerSpacing.unit ? triggerSpacing.unit : 'px'}`,
                            paddingRight: triggerSpacingRight && `${triggerSpacingRight}${triggerSpacing.unit ? triggerSpacing.unit : 'px'}`,
                            backgroundColor: `${canvasStyles.canvasBgColor}`,
                            
                        }}
                        >
                        <div className="gpb-popup-header">
                                <a id="gpb-toggle-button-close" className="toggle-button-close">
                                    <span className="gpb-close-icon" onClick={() => setEditing(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg></span>
                                </a>
                                <div className="gpb-popup-body-content">
                                <InnerBlocks />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
				</div></div>
                </Fragment>
    )
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)

