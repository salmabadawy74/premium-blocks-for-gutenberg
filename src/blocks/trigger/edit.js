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
import { PanelBody, TextControl, Button, Popover } from '@wordpress/components';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';

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
// const trigger = () => {
//         return (
//             <a href="javascript:void(0)" className="bod-block-popup-trigger type_image">
                
//             </a>
//         );
// }

const [ isEditing, setEditing ] = useState(false);
const { isSelected, attributes, setAttributes, clientId, block_id, className } = props;

useEffect(() => {
    setAttributes({ block_id: props.clientId })
}, [])
const { triggerLabel, iconAlignment, iconSize } = attributes;
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
                    <ResponsiveSingleRangeControl
                        label={__("Icon Size", 'premium-blocks-for-gutenberg')}
                        value={attributes.iconSize}
                        onChange={(value) => setAttributes({ iconSize: value })}
                        defaultValue={40}
                        max={100}
                    />
                </PanelBody>
                <PanelBody
                    title={__('Canvas Area', 'premium-blocks-for-gutenberg')}
                    initialOpen={true}
                >

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
            <div { ...useBlockProps({
                className: classnames(
                    ``
                ),
                style: {
                    //iconSize: `${iconSize.desktop}${iconSize.unit}`
                }
            }) }>
            <div className={`premium-trigger-container`}>
            <div className={`gpb-trigger-container has-icon-align-${ iconAlignment }`}>
                    <a className={`toggle-button header-toggle-button`} 
                        onClick={ () => setEditing( true ) }
                    >
                        {triggerLabel &&
                        <span
                            className={`trigger-label`}
                            onChange={ onChangeText }
                            value={triggerLabel}
                            placeholder={ __( 'Menu', 'premium-blocks-for-gutenberg' ) }
                           // allowedFormats={ [] }
                        >{triggerLabel}</span>}
                        <svg style={{fontSize: `${iconSize}px`}} height="1.5em" viewBox="0 -53 384 384" width="1.5em" xmlns="http://www.w3.org/2000/svg">
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

