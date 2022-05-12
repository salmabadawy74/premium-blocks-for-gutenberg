import React from 'react';
const { Fragment, useState, useEffect } = wp.element;
const { __ } = wp.i18n;


function PremiumSpacing(props) {

    const { showUnits, topValue, rightValue, bottomValue, leftValue, setAttributes, cachedValue, device } = props;
    let defaultValue = {
        valueTop: {
            value: 0,
            label: 'titleBorderTop',
        },

        valueRight: {
            value: 0,
            label: 'titleBorderRight',
        },

        valueBottom: {
            value: 0,
            label: 'titleBorderBottom',
        },

        valueLeft: {
            value: 0,
            label: 'titleBorderLeft',

        }
    }
    const [link, setLink] = useState(false)
    const [cached, setCached] = useState(cachedValue ? cachedValue : defaultValue)
    const onLinkClickHandler = () => {
        let linkValue = topValue.value;
        changeLinkedValues(linkValue);
    };

    const onChangeTopValue = (event, value = '') => {
        let newValue = value;
        if ('' === value && '' !== event) {
            newValue =
                event.target.value === ''
                    ? ''
                    : Number(event.target.value);
        }
        if (link) {
            changeLinkedValues(newValue);
        }
        setAttributes({ [topValue.label]: newValue });
    }

    const onChangeRightValue = (event, value = '') => {
        let newValue = value;
        if ('' === value && '' !== event) {
            newValue =
                event.target.value === ''
                    ? ''
                    : Number(event.target.value);
        }
        if (link) {
            changeLinkedValues(newValue);
        }
        setAttributes({ [rightValue.label]: newValue });
    };

    const onChangeBottomValue = (event, value = '') => {
        let newValue = value;
        if ('' === value && '' !== event) {
            newValue =
                event.target.value === ''
                    ? ''
                    : Number(event.target.value);
        }
        if (link) {
            changeLinkedValues(newValue);
        }
        setAttributes({ [bottomValue.label]: newValue });
    };

    const changeLinkedValues = (newValue) => {
        setAttributes({ [topValue.label]: newValue });
        setAttributes({ [rightValue.label]: newValue });
        setAttributes({ [bottomValue.label]: newValue });
        setAttributes({ [leftValue.label]: newValue });
    };


    const onChangeLeftValue = (event, value = '') => {
        let newValue = value;
        if ('' === value && '' !== event) {
            newValue =
                event.target.value === ''
                    ? ''
                    : Number(event.target.value);
        }
        if (link) {
            changeLinkedValues(newValue);
        }
        setAttributes({ [leftValue.label]: newValue });
    };

    let linkHtml = '';

    if (link) {
        linkHtml = (
            <span
                className="premium-spacing-control__link premium-spacing-control-connected dashicons dashicons-admin-links "
                onClick={() => {
                    setLink(false)
                }}
            ></span>
        );
    }
    else {
        linkHtml = (
            <span
                className="premium-spacing-control__link premium-spacing-control-disconnected dashicons dashicons-editor-unlink"
                onClick={() => {
                    onLinkClickHandler();
                    setLink(true)
                }}
            ></span>
        );
    }
    const resetValues = () => {
        const cachedValueUpdate = { ...cached };
        setCached(cachedValueUpdate);

        switch (device) {
            case 'desktop':
                onChangeTopValue('', cached.valueTop.value);
                onChangeRightValue(
                    '',

                    cached.valueRight.value
                );
                onChangeBottomValue(
                    '',
                    cached.valueBottom.value
                );
                onChangeLeftValue('', cached.valueLeft.value);
                break;
            case 'tablet':
                onChangeTopValue(
                    '',
                    cached.valueTopTablet.value
                );
                onChangeRightValue(
                    '',
                    'tablet',
                    cached.valueRightTablet.value
                );
                onChangeBottomValue(
                    '',
                    cached.valueBottomTablet.value
                );
                onChangeLeftValue(
                    '',
                    cached.valueLeftTablet.value
                );
                break;
            case 'mobile':
                onChangeTopValue(
                    '',
                    cached.valueTopMobile.value
                );
                onChangeRightValue(
                    '',
                    cached.valueRightMobile.value
                );
                onChangeBottomValue(
                    '',
                    cached.valueBottomMobile.value
                );
                onChangeLeftValue(
                    '',
                    cached.valueLeftMobile.value
                );
                break;
        }
    };
    return (
        <div className={`premium-spacing-responsive`}>
            {props.label && <header className="premium-control-label-container">
                <div className={`premium-slider-title-wrap`}>
                    {props.label}
                </div>
                {showUnits && (
                    <PremiumSizeUnits
                        activeUnit={selectedUnit}
                        onChangeSizeUnit={newValue =>
                            onChangeMarSizeUnit(newValue)
                        }
                    />
                )}
            </header>}
            <div className={`premium-spacing-responsive-outer-wrapper`}>
                <div className={`input-wrapper premium-spacing-responsive-wrapper`}>
                    <ul className={`premium-spacing-wrapper`}>
                        <li className={`premium-spacing-input-item`}>
                            <input
                                className={`premium-spacing-input`}
                                type="number"
                                onChange={(e) => onChangeTopValue(e)}
                                value={topValue.value}
                                min={0}
                            />
                            <span className={`premium-spacing-title`}>{__(`Top`)}</span>
                        </li>
                        <li className={`premium-spacing-input-item`}>
                            <input
                                className={`premium-spacing-input`}
                                type="number"
                                onChange={(e) => onChangeRightValue(e)}
                                value={rightValue.value}
                                min={0}
                            />
                            <span className={`premium-spacing-title`}>{__(`Right`)}</span>
                        </li>
                        <li className={`premium-spacing-input-item`}>
                            <input
                                className={`premium-spacing-input`}
                                type="number"
                                onChange={(e) => onChangeBottomValue(e)}
                                value={bottomValue.value}
                                min={0}
                            />
                            <span className={`premium-spacing-title`}>{__(`Bottom`)}</span>
                        </li>
                        <li className={`premium-spacing-input-item`}>
                            <input
                                className={`premium-spacing-input`}
                                type="number"
                                onChange={(e) => onChangeLeftValue(e)}
                                value={leftValue.value}
                                min={0}
                            />
                            <span className={`premium-spacing-title`}>{__(`Left`)}</span>
                        </li>
                        <li>
                            <button
                                className={`linked-btn is-button dashicons dashicons-${link ? "admin-links connected" : "editor-unlink disconnected"
                                    }`}
                                onClick={() => {
                                    onLinkClickHandler();
                                    setLink(!link)
                                }}
                            />
                        </li>
                    </ul>
                </div>
                <div className="premium-spacing-btn-reset-wrap">
                    <button
                        className="premium-reset-btn "
                        onClick={(e) => {
                            e.preventDefault();
                            resetValues();
                        }}
                    ></button>
                </div>
            </div>

        </div >
    )
}

export default PremiumSpacing
