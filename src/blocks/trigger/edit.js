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
    useState,
    button,
    Modal 
} from '@wordpress/element';
import { PanelBody, TextControl, Button, Popover, TabPanel } from '@wordpress/components';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBorder from "../../components/premium-border";
import RadioComponent from '../../components/radio-control';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
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

 

export default function Edit(props) {

const [ isEditing, setEditing ] = useState(false);
const { isSelected, attributes, setAttributes, clientId, className } = props;

useEffect(() => {
    setAttributes({ block_id: props.clientId })
}, [])
const { triggerLabel, iconAlignment, iconSize, block_id, triggerStyles, canvasStyles, spacing, triggerBorderTop, triggerBorderRight, triggerBorderBottom, triggerBorderLeft } = attributes;
const onChangeText = ( newText ) => {
    setAttributes( { triggerLabel: newText } );
};
const defaultSize = {
    desktop: "",
    tablet: "",
    mobile: "",
    unit: "px"
};
const defaultSpacingValue = {
    desktop: {
        top: '',
        right: '',
        bottom: '',
        left: ''
    },
    tablet: {
        top: '',
        right: '',
        bottom: '',
        left: ''
    },
    mobile: {
        top: '',
        right: '',
        bottom: '',
        left: ''
    }
};
const onChangeIconSize = (value, device) => {
    const newSize = { ...iconSize };
    newSize[device] = value;
    setAttributes({ iconSize : newSize });
}

const setTriggerStyles = (color, value) => {
    const newColors = { ...triggerStyles };
    newColors[color] = value;
    setAttributes({ triggerStyles: newColors });
}
const setCanvasStyles = (color, value) => {
    const newColors = { ...canvasStyles };
    newColors[color] = value;
    setAttributes({ canvasStyles: newColors });
}
let padding = spacing.padding ? spacing.padding : defaultSpacingValue;
const onChangePadding = (side, value, device) => {
    const newPadding = { ...padding };
    newPadding[device][side] = value;
    setAttributes({ spacing: { ...spacing, padding: newPadding } });
}
    return (
        <Fragment>
            
            <InspectorControls>
                <PanelBody
                    title={__('Trigger Icon Settings', 'premium-blocks-for-gutenberg')}
                    initialOpen={true}
                >
                    <TextControl
                        label={__('Trigger Label', 'premium-blocks-for-gutenberg')}
                        value={attributes.triggerLabel}
                        onChange={(val) => setAttributes({ triggerLabel: val })}
                    />

                    <ResponsiveRangeControl
                        label={__('Icon Size', 'premium-blocks-for-gutenberg')}
                        value={attributes.iconSize}
                        onChange={(value) => setAttributes({ iconSize: value })}
                        tabletValue={attributes.iconSizeTablet}
                        onChangeTablet={(value) => setAttributes({ iconSizeTablet: value })}
                        mobileValue={attributes.iconSizeMobile}
                        onChangeMobile={(value) => setAttributes({ iconSizeMobile: value })}
                        min={0}
                        max={100}
                        step={1}
                        showUnit={true}
                        units={['px']}
                        defaultValue={20}
                    />
                    <RadioComponent
                        choices={["right", "left"]}
                        value={triggerStyles.labelPosition}
                        onChange={newValue => setTriggerStyles('labelPosition', newValue )}
                        label={__("Label Position", 'premium-blocks-for-gutenberg')}
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
                    
                    <RadioComponent
                        choices={["simple", "outline", "solid"]}
                        value={triggerStyles.style}
                        onChange={newValue => setTriggerStyles('style', newValue )}
                        label={__("Icon Style", 'premium-blocks-for-gutenberg')}
                    />

                    {triggerStyles.style === 'solid' && 
                    <fragment>
                        <AdvancedPopColorControl
                        label={__("Background Icon Color", 'premium-blocks-for-gutenberg')}
                        colorValue={triggerStyles.iconBgColor}
                        colorDefault={''} 
                        onColorChange={newValue => setTriggerStyles('iconBgColor', newValue )}
                        />
                        <AdvancedPopColorControl
                            label={__("Background Icon Hover Color", 'premium-blocks-for-gutenberg')}
                            colorValue={triggerStyles.iconBgHoverColor}
                            colorDefault={''}
                            onColorChange={newValue => setTriggerStyles('iconBgHoverColor', newValue )}
                        />
                    </fragment>
                    }
                    
                    {triggerStyles.style === 'outline' && 
                    <fragment>
                    <PremiumBorder
                        borderType={triggerStyles.borderType}
                        top={triggerBorderTop}
                        right={triggerBorderRight}
                        bottom={triggerBorderBottom}
                        left={triggerBorderLeft}
                        borderColor={triggerStyles.borderColor}
                        borderRadius={triggerStyles.borderRadius}
                        onChangeType={(newType) => setTriggerStyles( 'borderType' , newType )}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                triggerBorderTop: top,
                                triggerBorderRight: right,
                                triggerBorderBottom: bottom,
                                triggerBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) => setTriggerStyles( 'borderColor' , colorValue )}
                        onChangeRadius={(newRadius) => setTriggerStyles( 'borderRadius' , newRadius )}
                    />
                    <AdvancedPopColorControl
                            label={__("Border Hover Color", 'premium-blocks-for-gutenberg')}
                            colorValue={triggerStyles.borderHoverColor}
                            colorDefault={''}
                            onColorChange={newValue => setTriggerStyles('borderHoverColor', newValue )}
                        />
                        </fragment>
                    }
                                  
                    
                </PanelBody>
                <PanelBody
                    title={__('Canvas Area Settings', 'premium-blocks-for-gutenberg')}
                    initialOpen={true}
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
                    <RadioComponent
                        choices={["right", "left", "full"]}
                        value={canvasStyles.layout}
                        onChange={newValue => setCanvasStyles('layout', newValue )}
                        label={__("Layout style", 'premium-blocks-for-gutenberg')}
                    />
                    <ResponsiveSingleRangeControl
                            label={__("Canvas Width", 'premium-blocks-for-gutenberg')}
                            value={canvasStyles.width}
                            onChange={newValue => setCanvasStyles({ width: newValue === undefined ? 500 : newValue })}
                            defaultValue={500}
                            showUnit={false}
                    />
                    <PremiumResponsivePadding
                        directions={["all"]}
                        marginTop={padding.desktop.top}
                        paddingRight={padding.desktop.right}
                        paddingBottom={padding.desktop.bottom}
                        paddingLeft={padding.desktop.left}
                        paddingTopTablet={padding.tablet.top}
                        paddingRightTablet={padding.tablet.right}
                        paddingBottomTablet={padding.tablet.bottom}
                        paddingLeftTablet={padding.tablet.left}
                        paddingTopMobile={padding.mobile.top}
                        paddingRightMobile={padding.mobile.right}
                        paddingBottomMobile={padding.mobile.bottom}
                        paddingLeftMobile={padding.mobile.left}
                        onChangePaddingTop={
                            (device, newValue) => {
                                onChangePadding('top', newValue, device);
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                onChangePadding('right', newValue, device);
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                onChangePadding('bottom', newValue, device);
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                onChangePadding('left', newValue, device);
                            }
                        }
                    />

                </PanelBody>
            </InspectorControls>  
            <BlockControls group="block">
                <AlignmentToolbar
                    value={ iconAlignment }
                    onChange={( newAlignment ) => {
                        setAttributes({ iconAlignment: newAlignment });
                    }}
                    
                />
                
            </BlockControls> 
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
                border-style: ${triggerStyles.borderType} !important;
                border-top-width: ${triggerBorderTop}px !important;
                border-right-width: ${triggerBorderRight}px !important;
                border-bottom-width: ${triggerBorderBottom}px !important;
                border-left-width: ${triggerBorderLeft}px !important;
                border-color: ${triggerStyles.borderColor} !important;
                border-radius: ${triggerStyles.borderRadius}px !important;
            }
            #block-${block_id} .toggle-button[data-style="outline"]:hover {
                border-color: ${triggerStyles.borderHoverColor} !important;
            }


        `}
        </style>         
            <div { ...useBlockProps({
                className: classnames(
                    `${isEditing ? "active" : ""}`
                ),
                style: {
                    // marginTop: `${margin.desktop.top}px`,
                    // marginRight: `${margin.desktop.right}px`,
                    // marginBottom: `${margin.desktop.bottom}px`,
                    // marginLeft: `${margin.desktop.left}px`,
                    // paddingTop: `${padding.desktop.top}px`,
                    // paddingRight: `${padding.desktop.right}px`,
                    // paddingBottom: `${padding.desktop.bottom}px`,
                    // paddingLeft: `${padding.desktop.left}px`,
                    //backgroundColor: triggerStyles.iconBgColor,
                    //borderStyle: triggerStyles.borderType,
                    //borderTopWidth: triggerStyles.triggerBorderTop,
                }
            }) }>
            <div className={`premium-trigger-container`}>
            <div className={`gpb-trigger-container has-icon-align-${ iconAlignment }`}>
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
                           // allowedFormats={ [] }
                        >{triggerLabel}</span>}
                        <svg style={{fontSize: `${iconSize}px`, fill:`${triggerStyles.iconColor}`}} height="1.5em" viewBox="0 -53 384 384" width="1.5em" xmlns="http://www.w3.org/2000/svg">
					<path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
					<path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
					<path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path></svg>
                        
                    </a>
                </div>
				{isEditing && (
                    <div className="gpb-trigger-wrap" role="dialog" data-layout={canvasStyles.layout} >
                        <div role="presentation" className="gpb-popup-overlay" onClick={() => setEditing(false)} style={{
                        backgroundColor: `${canvasStyles.overlayBgColor}`,
                    }}></div>
                        <div className="gpb-popup-content gpb-desktop-popup-content"
                        style={{
                            paddingTop: `${padding.desktop.top}px`,
                            paddingRight: `${padding.desktop.right}px`,
                            paddingBottom: `${padding.desktop.bottom}px`,
                            paddingLeft: `${padding.desktop.left}px`,
                            backgroundColor: `${canvasStyles.canvasBgColor}`,
                        }}
                        >
                        <div className="gpb-popup-header">
                                <a id="gpb-toggle-button-close">
                                    <span className="gpb-close-icon" onClick={() => setEditing(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1">
                                    <path d="M 23.648438 21.964844 C 24.070312 22.4375 24.046875 23.15625 23.601562 23.601562 C 23.15625 24.046875 22.4375 24.070312 21.964844 23.648438 L 12 13.683594 L 2.035156 23.648438 C 1.5625 24.070312 0.84375 24.046875 0.398438 23.601562 C -0.046875 23.15625 -0.0703125 22.4375 0.351562 21.964844 L 10.316406 12 L 0.351562 2.035156 C 0.0195312 1.742188 -0.121094 1.289062 -0.015625 0.855469 C 0.0898438 0.425781 0.425781 0.0898438 0.855469 -0.015625 C 1.289062 -0.121094 1.742188 0.0195312 2.035156 0.351562 L 12 10.316406 L 21.964844 0.351562 C 22.4375 -0.0703125 23.15625 -0.046875 23.601562 0.398438 C 24.046875 0.84375 24.070312 1.5625 23.648438 2.035156 L 13.683594 12 Z M 23.648438 21.964844 "></path>
                                    </svg></span>
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
    );
    
}

