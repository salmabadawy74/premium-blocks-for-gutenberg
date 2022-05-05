/**
 * External dependencies
 */
 import { closeSmall } from '@wordpress/icons';

 /**
  * WordPress dependencies
  */
 import {
     InnerBlocks,
     useBlockProps
 } from '@wordpress/block-editor';
 export default function Save({attributes}) {
    const { block_id, iconAlignment, triggerLabel, triggerStyles, canvasStyles, spacing, iconSize, triggerBorderTop, triggerBorderRight, triggerBorderLeft, triggerBorderBottom } = attributes;
    const blockProps = useBlockProps.save({
         id: `premium-trigger-${block_id}`,
         className: ``,
     });
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
     let padding = spacing.padding ? spacing.padding : defaultSpacingValue;
     const onChangePadding = (side, value, device) => {
         const newPadding = { ...padding };
         newPadding[device][side] = value;
         setAttributes({ spacing: { ...spacing, padding: newPadding } });
     }
    // const [ isEditing, setEditing ] = useState( false );

     return (
         <div { ...blockProps }>
             <style>
            {`
            #premium-trigger-${block_id} .toggle-button:hover {
                background-color:${triggerStyles.iconBgHoverColor} !important;
            }
            #premium-trigger-${block_id} .toggle-button:hover svg {
                fill:${triggerStyles.iconHoverColor} !important;
            }
            #premium-trigger-${block_id} .toggle-button:hover .trigger-label {
                color:${triggerStyles.labelHoverColor} !important;
            }
            #premium-trigger-${block_id} .toggle-button[data-style="solid"] {
                background-color: ${triggerStyles.iconBgColor} ;
            }
            #premium-trigger-${block_id} .toggle-button[data-style="outline"] {
                border-style: ${triggerStyles.borderType} !important;
                border-top-width: ${triggerBorderTop}px !important;
                border-right-width: ${triggerBorderRight}px !important;
                border-bottom-width: ${triggerBorderBottom}px !important;
                border-left-width: ${triggerBorderLeft}px !important;
                border-color: ${triggerStyles.borderColor} !important;
                border-radius: ${triggerStyles.borderRadius}px !important;
            }
            #premium-trigger-${block_id} .toggle-button[data-style="outline"]:hover {
                border-color: ${triggerStyles.borderHoverColor} !important;
            }


        `}
        </style>  

                    
                        <div className={`premium-trigger-container`}>
                        <div className={`gpb-trigger-icon-container has-icon-align-${ iconAlignment }`} data-label={triggerStyles.labelPosition}>
                            <a className={`toggle-button`}
                                data-style={triggerStyles.style} 
                                data-label={triggerStyles.labelPosition}
                                onClick={ () => setEditing( true ) }
                            >
                            {triggerLabel &&
                                <span className='trigger-label'>{triggerLabel}</span>
                            }
                                <svg style={{fontSize: `${iconSize}px` , fill:`${triggerStyles.iconColor}`}} height="1.5em" viewBox="0 -53 384 384" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                    <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                    <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                </svg>
                            </a>
                        </div>
                            
                    <div className="gpb-trigger-canvas-container" data-layout={canvasStyles.layout} 
                    style={ {
                        //display: "none",
                        width: canvasStyles.width + 'px',
                        
                    }}    
                    >
                        <div role="presentation" className="gpb-popup-overlay" style={{backgroundColor: `${canvasStyles.overlayBgColor}`,}}></div>
                        <div className="gpb-popup-content gpb-desktop-popup-content"
                        style={{
                            paddingTop: `${padding.desktop.top}px`,
                            paddingRight: `${padding.desktop.right}px`,
                            paddingBottom: `${padding.desktop.bottom}px`,
                            paddingLeft: `${padding.desktop.left}px`,
                            backgroundColor: `${canvasStyles.canvasBgColor}`,
                        }}>
                            <div className="gpb-popup-header">

                            <a id="gpb-toggle-button-close" className="toggle-button-close">
                                    <span className="gpb-close-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg></span>
                                </a>
                            
                                <div className="gpb-popup-body-content">
                                <InnerBlocks.Content />
                                </div>
                            </div>
                            
                        </div>
                    </div>	
                    </div></div>
                   
     );
}