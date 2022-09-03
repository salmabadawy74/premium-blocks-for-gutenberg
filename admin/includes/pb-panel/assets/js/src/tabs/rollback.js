import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import Container from "../common/Container";
import Warning from "../common/warning";
import Popup from "../common/popup";

// import RollBackConfirmPopup from './RollBackConfirmPopup';

const RollBack = () => {
    const { system_info } = PremiumBlocksPanelData;
    console.log(system_info)

    // const previousVersions = uag_react.global_data.uag_previous_versions;

    // const [previousVersionSelect, setPreviousVersion] = useState(previousVersions[0].value);
    const [openPopup, setopenPopup] = useState(false);
    const [confirmPopup, setconfirmPopup] = useState(false);

    const rollbackButtonClickHandler = () => {
        setopenPopup(true);
    };

    return (
        <Container>
            <div className='pb-section-info-wrap'>
                <div className='pb-section-info'>
                    <h4>{__('Rollback to Previous Version', 'premium-blocks-for-gutenberg')}</h4>
                    <p>
                        {
                            __(`Experiencing an issue with Premium Blocks version ${system_info.theme_version} ? Roll back to a previous version to help troubleshoot the issue.`, 'premium-blocks-for-gutenberg')
                        }
                    </p>
                </div>
                <div className='pb-section-info-cta'>
                    <a onClick={rollbackButtonClickHandler}>Rollback to Version {system_info.previous_version}</a>
                    <Warning title={__(' Warning: Please backup your database before making the rollback.', 'premium-blocks-for-gutenberg')} />
                </div>
            </div>
            {openPopup &&
                <Popup
                    openPopup={openPopup}
                    setopenPopup={setopenPopup}
                    header={__('Rollback to Previous Version', 'premium-blocks-for-gutenberg')}
                    message={__(`Are you sure you want to reinstall version ${system_info.previous_version}?`, 'premium-blocks-for-gutenberg')}
                />
            }
            {/* <RollBackConfirmPopup openPopup={ openPopup } setopenPopup={ setopenPopup } previousVersionSelect={ previousVersionSelect } setconfirmPopup={ setconfirmPopup } /> */}
        </Container>
    );
};

export default RollBack;
