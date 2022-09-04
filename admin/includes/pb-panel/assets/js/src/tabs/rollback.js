import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import Container from "../common/Container";
import Warning from "../common/warning";
import Popup from "../common/popup";

const RollBack = () => {
    const { system_info } = PremiumBlocksPanelData;

    const previousVersions = system_info.pb_previous_versions;

    const [previousVersionSelect, setPreviousVersion] = useState(previousVersions[0].value);
    const [openPopup, setopenPopup] = useState(false);

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
                    <select
                        id="location"
                        name="location"
                        className="pb-select"
                        onBlur={(e) => { setPreviousVersion(e.target.value); }}
                    >
                        {
                            (previousVersions || []).map((version) => {
                                return (
                                    <option key={version.value} value={version.value}>{version.label}</option>
                                );
                            })
                        }
                    </select>
                    <a className="pb-button secondary primary" onClick={rollbackButtonClickHandler}>Rollback</a>
                    <Warning title={__(' Warning: Please backup your database before making the rollback.', 'premium-blocks-for-gutenberg')} />
                </div>
            </div>
            {openPopup &&
                <Popup
                    openPopup={openPopup}
                    setopenPopup={setopenPopup}
                    previousVersionSelect={previousVersionSelect}
                    header={__('Rollback to Previous Version', 'premium-blocks-for-gutenberg')}
                    message={__(`Are you sure you want to reinstall version ${previousVersionSelect}?`, 'premium-blocks-for-gutenberg')}
                />
            }
        </Container>
    );
};

export default RollBack;