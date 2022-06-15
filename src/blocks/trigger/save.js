 /**
  * WordPress dependencies
  */
 import {
     InnerBlocks,
     useBlockProps
 } from '@wordpress/block-editor';
 import classnames from "classnames";
 export default function Save(props) {
    const { attributes, className } = props;
    const { block_id, 
        iconSize,
        iconAlignment,
        triggerLabel,
        triggerStyles, 
        canvasStyles, 
        triggerBorder,
        displayFloat,
        floatPosition,
        vOffset,
        hOffset,
        hideDesktop,
        hideTablet,
        hideMobile
     } = attributes;

    const blockProps = useBlockProps.save({
        // id: `premium-trigger-${block_id}`,
         className: classnames(
            className, 
            'premium-trigger',
            `${block_id} ${hideDesktop} ${hideTablet} ${hideMobile} ${attributes.displayFloat ? `float-position-${floatPosition}` : ""}`
         )
     });

     return (
         <div { ...blockProps }>
             <style>
            {`
            .${block_id} .toggle-button:hover {
                background-color:${triggerStyles.iconBgHoverColor} !important;
            }
            .${block_id} .toggle-button:hover svg {
                fill:${triggerStyles.iconHoverColor} !important;
            }
            .${block_id} .toggle-button:hover .trigger-label {
                color:${triggerStyles.labelHoverColor} !important;
            }
            .${block_id} .toggle-button[data-style="solid"] {
                background-color: ${triggerStyles.iconBgColor} ;
            }
            .${block_id} .toggle-button[data-style="outline"], 
            .${block_id} .toggle-button[data-style="solid"]{
                border-style: ${triggerBorder.borderType};
                border-color: ${triggerBorder.borderColor};
            }
            .${block_id} .toggle-button[data-style="outline"]:hover,
            .${block_id} .toggle-button[data-style="solid"]:hover {
                border-color: ${triggerStyles.borderHoverColor} !important;
            }
            .${block_id} .premium-trigger-canvas-container[data-layout="right"] .premium-popup-content,
            .s${block_id} .premium-trigger-canvas-container[data-layout="left"] .premium-popup-content {
                width: ${canvasStyles.width}px;
            }
        `}
        </style>  
                        <div className={`premium-trigger-container`}>
                        <div className={`premium-trigger-icon-container has-icon-align-${ iconAlignment }`}>
                            <a className={`toggle-button`} 
                                data-style={triggerStyles.style}
                                data-label={triggerStyles.labelPosition} 
                                onClick={ () => setEditing( true ) }
                            >
                                
                            {triggerLabel &&
                                <span className='trigger-label' style={{color: triggerStyles.labelColor }}>{triggerLabel}</span>
                            }
                                <svg style={{fill:`${triggerStyles.iconColor}`}} height="1.5em" viewBox="0 -53 384 384" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                    <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                    <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                </svg>
                            </a>
                        </div>
                            
                    <div className="premium-trigger-canvas-container" data-layout={canvasStyles.layout}>
                        <div role="presentation" className="premium-popup-overlay" style={{backgroundColor: `${canvasStyles.overlayBgColor}`,}}></div>
                        <div className="premium-popup-content"
                        style={{
                            backgroundColor: `${canvasStyles.canvasBgColor}`
                        }}>
                            <div className="premium-popup-header">

                            <a id="premium-toggle-button-close" className="toggle-button-close">
                                    <span className="premium-close-icon" style={{
                        fill: `${canvasStyles.closeIconColor}`,
                    }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg></span>
                                </a>
                            
                                <div className="premium-popup-body-content">
                                <InnerBlocks.Content />
                                </div>
                            </div>
                            
                        </div>
                    </div>	
                    </div></div>
                   
     );
}