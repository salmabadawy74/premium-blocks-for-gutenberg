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
    const { iconAlignment } = attributes;
    {
     const blockProps = useBlockProps.save({
         id: attributes.id,
         className: `text-icon-align-${ iconAlignment }`,
     });
    // const [ isEditing, setEditing ] = useState( false );
     const { triggerLabel } = attributes;
     return (
         <div { ...blockProps }>
             {/* <a className={`toggle-button header-toggle-button`} 
                        onClick={ () => setEditing( true ) }
                    >
                        <span
                            className={`trigger-label`}
                        />
                        {triggerLabel && <span className='trigger-label' style={{ padding: '0 .4em' }}>{triggerLabel}</span>}
                        <i
                        className={`dashicon dashicons dashicons-menu-alt`}
                    />
                        
                    </a> */}
                    {
                        //<a class="gpb-toggle-button toggle-button header-toggle-button" rel="main-header-menu" data-target="#site-navigation" data-label="" data-style="" aria-controls='site-navigation' aria-expanded='false'>
                        <a className={`toggle-button header-toggle-button`} 
                            onClick={ () => setEditing( true ) }
                        >
                        {triggerLabel &&
                            <span className='trigger-label' style={{ padding: '0 .4em' }}>{triggerLabel}</span>
                         }
                        <svg height="1.5em" viewBox="0 -53 384 384" width="1.5em" xmlns="http://www.w3.org/2000/svg">
					<path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
					<path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
					<path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path></svg>
                    </a>
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
 };
}