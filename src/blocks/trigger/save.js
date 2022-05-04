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

                    {
                        <div className={`gpb-trigger-container has-icon-align-${ iconAlignment }`} data-label={triggerStyles.labelPosition}>
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
                            }
                    <div className="gpb-trigger-wrap" role="dialog" data-layout={canvasStyles.layout} 
                    style={ {
                        display: "none",
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
                                    <span className="gpb-close-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" version="1.1">
                                    <path d="M 23.648438 21.964844 C 24.070312 22.4375 24.046875 23.15625 23.601562 23.601562 C 23.15625 24.046875 22.4375 24.070312 21.964844 23.648438 L 12 13.683594 L 2.035156 23.648438 C 1.5625 24.070312 0.84375 24.046875 0.398438 23.601562 C -0.046875 23.15625 -0.0703125 22.4375 0.351562 21.964844 L 10.316406 12 L 0.351562 2.035156 C 0.0195312 1.742188 -0.121094 1.289062 -0.015625 0.855469 C 0.0898438 0.425781 0.425781 0.0898438 0.855469 -0.015625 C 1.289062 -0.121094 1.742188 0.0195312 2.035156 0.351562 L 12 10.316406 L 21.964844 0.351562 C 22.4375 -0.0703125 23.15625 -0.046875 23.601562 0.398438 C 24.046875 0.84375 24.070312 1.5625 23.648438 2.035156 L 13.683594 12 Z M 23.648438 21.964844 "></path>
                                    </svg></span>
                                </a>
                            
                                <div className="gpb-popup-body-content">
                                <InnerBlocks.Content />
                                </div>
                            </div>
                            
                        </div>
                    </div>	
         </div>
     );
}