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
const { triggerLabel, iconAlignment, iconSize, block_id, triggerStyles, canvasStyles } = attributes;
const onChangeText = ( newText ) => {
    setAttributes( { triggerLabel: newText } );
};
const defaultSize = {
    desktop: "",
    tablet: "",
    mobile: "",
    unit: "px"
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
    return (
        <Fragment>
            
            <InspectorControls>
                <PanelBody
                    title={__('General Settings', 'premium-blocks-for-gutenberg')}
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
                                            label={__("Background Icon Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={triggerStyles.iconBgColor}
                                            colorDefault={''} 
                                            onColorChange={newValue => setTriggerStyles('iconBgColor', newValue )}
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
                                            label={__("Background Icon Hover Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={triggerStyles.iconBgHoverColor}
                                            colorDefault={''}
                                            onColorChange={newValue => setTriggerStyles('iconBgHoverColor', newValue )}
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
                    
                </PanelBody>
                <PanelBody
                    title={__('Canvas Area', 'premium-blocks-for-gutenberg')}
                    initialOpen={true}
                >
                    <AdvancedPopColorControl
                        label={__("Background Canvas Area", 'premium-blocks-for-gutenberg')}
                        colorValue={canvasStyles.canvasBgColor}
                        colorDefault={''}
                        onColorChange={newValue => setTriggerStyles('canvasBgColor', newValue )}
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


        `}
        </style>         
            <div { ...useBlockProps({
                className: classnames(
                    ``
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
                    backgroundColor: triggerStyles.iconBgColor,
                    borderStyle: triggerStyles.borderType,
                    borderTopWidth: triggerStyles.triggerBorderTop,
                }
            }) }>
            <div className={`premium-trigger-container`}>
            <div className={`gpb-trigger-container has-icon-align-${ iconAlignment }`} data-label={triggerStyles.labelPosition}>
                    <a className={`toggle-button`} 
                    data-style={triggerStyles.style}
                    data-label={triggerStyles.labelPosition}
                        onClick={ () => setEditing( true ) }
                        style={{

                        }}
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
                        <svg style={{fontSize: `${iconSize}px`, fill:`${triggerStyles.iconColor}`, backgroundColor:`${triggerStyles.iconBgColor}`}} height="1.5em" viewBox="0 -53 384 384" width="1.5em" xmlns="http://www.w3.org/2000/svg">
					<path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
					<path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
					<path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path></svg>
                        
                    </a>
                </div>
				{isEditing && (
                    <div className="gpb-trigger-wrap" role="dialog">
                        <div role="presentation" className="gpb-popup-overlay" onClick={() => setEditing(false)}></div>
                        <div className="gpb-popup-content gpb-desktop-popup-content">
                        <div className="gpb-popup-header">
                                <button id="gpb-toggle-button-close" className="toggle-button-close">
                                    <span className="gpb-close-icon" onClick={() => setEditing(false)}>☓</span>
                                </button>
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

