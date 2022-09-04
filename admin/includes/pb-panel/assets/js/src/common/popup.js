import React, { useState, useEffect } from 'react';

const Popup = (props) => {
    const {
        openPopup,
        setopenPopup,
        previousVersionSelect
    } = props;

    const { system_info } = PremiumBlocksPanelData;

    const [open, setOpen] = useState(openPopup);

    useEffect(() => {
        setOpen(openPopup);
    }, [openPopup]);

    const onCancelClick = () => {
        setopenPopup(!openPopup);
    };

    const onOkClick = () => {
        const rollbackUrl = system_info.rollback_url_new.replace(
            'VERSION',
            previousVersionSelect
        );

        setopenPopup(false);
        window.location.href = rollbackUrl;
    }

    return <div className='pb-popup'>
        <div className="pb-popup-content">
            <div className="pb-popup-header">{props.header}</div>
            <div className="pb-popup-message">{props.message}</div>
            <div className="pb-popup-confirm-buttons-wrapper">
                <button className="pb-popup-buttons pb-popup-confirm-cancel" onClick={onCancelClick}>Cancel</button>
                <button className="pb-popup-buttons pb-popup-confirm-ok" onClick={onOkClick}>Continue</button>
            </div>
        </div>
    </div>
}

export default Popup