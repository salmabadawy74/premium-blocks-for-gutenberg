import classnames from 'classnames'

const { InnerBlocks } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        block_id,
        contentStyles,
        triggerSettings,
        triggerStyles,
        triggerBorderTop,
        triggerBorderRight,
        triggerBorderBottom,
        triggerBorderLeft,
        triggerBorderTopH,
        triggerBorderRightH,
        triggerBorderBottomH,
        triggerBorderLeftH,
        triggerPaddingT,
        triggerPaddingR,
        triggerPaddingB,
        triggerPaddingL,
        triggerPaddingTTablet,
        triggerPaddingRTablet,
        triggerPaddingBTablet,
        triggerPaddingLTablet,
        triggerPaddingTMobile,
        triggerPaddingRMobile,
        triggerPaddingBMobile,
        triggerPaddingLMobile,
        headerStyles,
        headerBorderTop,
        headerBorderRight,
        headerBorderBottom,
        headerBorderLeft,
        upperStyles,
        upperBorderTop,
        upperBorderRight,
        upperBorderBottom,
        upperBorderLeft,
        upperPaddingT,
        upperPaddingR,
        upperPaddingB,
        upperPaddingL,
        upperPaddingTTablet,
        upperPaddingRTablet,
        upperPaddingBTablet,
        upperPaddingLTablet,
        upperPaddingTMobile,
        upperPaddingRMobile,
        upperPaddingBMobile,
        upperPaddingLMobile,
        lowerStyles,
        lowerBorderTop,
        lowerBorderRight,
        lowerBorderBottom,
        lowerBorderLeft,
        lowerPaddingT,
        lowerPaddingR,
        lowerPaddingB,
        lowerPaddingL,
        lowerPaddingTTablet,
        lowerPaddingRTablet,
        lowerPaddingBTablet,
        lowerPaddingLTablet,
        lowerPaddingTMobile,
        lowerPaddingRMobile,
        lowerPaddingBMobile,
        lowerPaddingLMobile,
        modalStyles,
        backgroundType,
        modalBorderTop,
        modalBorderRight,
        modalBorderBottom,
        modalBorderLeft,
        modalMarginT,
        modalMarginR,
        modalMarginB,
        modalMarginL,
        modalMarginTTablet,
        modalMarginRTablet,
        modalMarginBTablet,
        modalMarginLTablet,
        modalMarginTMobile,
        modalMarginRMobile,
        modalMarginBMobile,
        modalMarginLMobile,
        modalPaddingT,
        modalPaddingR,
        modalPaddingB,
        modalPaddingL,
        modalPaddingTTablet,
        modalPaddingRTablet,
        modalPaddingBTablet,
        modalPaddingLTablet,
        modalPaddingTMobile,
        modalPaddingRMobile,
        modalPaddingBMobile,
        modalPaddingLMobile
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-container');

    return (
        <div id={`premium-modal-box-${block_id}`} className={classnames(className, "premium-modal-box")} >
            <Button variant="secondary" >
                {__("Premium Modal Block", 'premium-blocks-for-gutenberg')}
            </Button>
            {isOpen && (
                <div className="premium-popup__modal_wrap">
                    <div role="presentation" className="premium-popup__modal_wrap_overlay" onClick={() => setOpen(false)}>
                    </div>
                    <div className="premium-popup__modal_content">
                        <div className={`premium-modal-box-modal-header`}>
                            <h3 className={`premium-modal-box-modal-title`}>
                                {contentStyles[0].titleText}
                            </h3>
                            <div className="premium-modal-box-close-button-container">
                                <button type="button" className="premium-modal-box-modal-close" onClick={() =>
                                    setOpen(false)
                                } >×</button>
                            </div>
                        </div>
                        <div className={`premium-modal-box-modal-body`}>
                            <InnerBlocks.content />
                        </div>
                        <div className={`premium-modal-box-modal-footer`}>
                            <button className={`premium-modal-box-modal-lower-close`} role="button" onClick={() => setOpen(false)}>
                                close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default save;