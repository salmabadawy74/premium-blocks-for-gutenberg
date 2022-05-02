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
    const { block_id, iconAlignment, triggerLabel, triggerStyles, iconSize } = attributes;
    const blockProps = useBlockProps.save({
         id: `premium-trigger-${block_id}`,
         className: ``,
     });

    // const [ isEditing, setEditing ] = useState( false );

     return (
         <div { ...blockProps }>

                    {
                        <div className={`gpb-trigger-container has-icon-align-${ iconAlignment }`} data-label={triggerStyles.labelPosition}>
                            <a className={`toggle-button`}
                                data-style={triggerStyles.style} 
                                style={{backgroundColor: triggerStyles.iconBgColor}}
                                onClick={ () => setEditing( true ) }
                            >
                            {triggerLabel &&
                                <span className='trigger-label'>{triggerLabel}</span>
                            }
                                <svg style={{fontSize: `${iconSize}px` , fill:`${triggerStyles.iconColor}`, backgroundColor:`${triggerStyles.iconBgColor}`}} height="1.5em" viewBox="0 -53 384 384" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                    <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                    <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                </svg>
                            </a>
                        </div>
                            }
                    <div className="gpb-trigger-wrap" style={{ display: "none" }} role="dialog">
                        <div role="presentation" className="gpb-popup-overlay"></div>
                        <div className="gpb-popup-content gpb-desktop-popup-content">
                            <div className="gpb-popup-header">
                                <button id="gpb-toggle-button-close" className="toggle-button-close">
                                    <span className="gpb-close-icon">☓</span>
                                </button>
                                <div className="gpb-popup-body-content">
                                <InnerBlocks.Content />
                                </div>
                            </div>
                            
                        </div>
                    </div>	
                    {/* {//isEditing && (
                    <div className="premium-popup__modal_wrap" role="dialog">
                        <div role="presentation" className="premium-popup__modal_wrap_overlay" style={{ background: 'black' }} onClick={() => setEditing(true)} >
                        </div>
                            <button className='close-button'>☓</button>
							<InnerBlocks.Content />
                        </div>
              //  )
            } */}
         </div>
     );
}