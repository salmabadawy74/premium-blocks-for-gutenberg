
import React from 'react';
const { __, sprintf } = wp.i18n;;
const { Button, Tooltip } = wp.components;
const { useState, useEffect, Fragment } = wp.element;
const { useSelect, useDispatch } = wp.data;
import PremiumSpacing from './premium-spacing';

const SpacingControl = (props) => {
    const responsive = false;
    const defaultCache = { ...props };

    const [cachedValue, setCacheValue] = useState(defaultCache);



    useEffect(() => {
        let cachedValueUpdate = { ...cachedValue };

        if (undefined !== props) {
            cachedValueUpdate = { ...props, ...cachedValue };
            setCacheValue(cachedValueUpdate);
        }
    }, []);

    useEffect(() => {
        const cachedValueUpdate = { ...cachedValue };
        const propsValue = { ...props };
        if (
            JSON.stringify(cachedValueUpdate) !== JSON.stringify(propsValue)
        ) {
            setCacheValue(cachedValueUpdate);
        }
    }, [props]);


    const {
        label,
        unit,
        mUnit,
        tUnit,
        valueBottom,
        valueLeft,
        valueRight,
        valueTop,
        valueBottomTablet,
        valueLeftTablet,
        valueRightTablet,
        valueTopTablet,
        valueBottomMobile,
        valueLeftMobile,
        valueRightMobile,
        valueTopMobile,
        showUnits,
        setAttributes,
    } = props;
    const [deviceType, setDeviceType] = useState('Desktop');
    let customSetPreviewDeviceType = (device) => {
        setDeviceType(device);
    };
    if (wp.data.select('core/edit-post')) {
        const theDevice = useSelect((select) => {
            const {
                __experimentalGetPreviewDeviceType = null,
            } = select('core/edit-post');
            return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : 'Desktop';
        }, []);
        if (theDevice !== deviceType) {
            setDeviceType(theDevice);
        }
        const {
            __experimentalSetPreviewDeviceType = null,
        } = useDispatch('core/edit-post');
        customSetPreviewDeviceType = (device) => {
            __experimentalSetPreviewDeviceType(device);
            setDeviceType(device);
        };
    }
    const devices = ['Desktop', 'Tablet', 'Mobile'];
    useEffect(() => {
        let cachedValueUpdate = { ...cachedValue };

        if (undefined !== props) {
            cachedValueUpdate = { ...props, ...cachedValue };
            setCacheValue(cachedValueUpdate);
        }
    }, []);

    useEffect(() => {
        const cachedValueUpdate = { ...cachedValue };
        const propsValue = { ...props };
        if (
            JSON.stringify(cachedValueUpdate) !== JSON.stringify(propsValue)
        ) {
            setCacheValue(cachedValueUpdate);
        }
    }, [props]);

    const onChangeUnits = (value) => {
        if ('Mobile' === deviceType) {
            setAttributes({ [mUnit.label]: value.unitValue });
        } else if ('Tablet' === deviceType) {
            setAttributes({ [tUnit.label]: value.unitValue });
        } else {
            setAttributes({ [unit.label]: value.unitValue });
        }
    };



    let unitSizes = [
        {
            name: __('Pixel', 'premium-blocks-for-gutenberg'),
            unitValue: 'px',
        },
        {
            name: __('Em', 'premium-blocks-for-gutenberg'),
            unitValue: 'em',
        },
        {
            name: __('%', 'premium-blocks-for-gutenberg'),
            unitValue: '%',
        },
    ];
    if (props.units) {
        unitSizes = props.units;
    }

    const onUnitSizeClick = (uSizes) => {
        const items = [];
        uSizes.map((key) =>
            items.push(
                <Tooltip
                    text={sprintf(
                        __('%s units', 'premium-blocks-for-gutenberg'),
                        key.name
                    )}
                >
                    <Button
                        key={key.unitValue}
                        className={'premium-range-control__units--' + key.name}
                        isSmall
                        isPrimary={
                            ('Desktop' === deviceType &&
                                unit.value === key.unitValue) ||
                            ('Mobile' === deviceType &&
                                mUnit.value === key.unitValue) ||
                            ('Tablet' === deviceType &&
                                tUnit.value === key.unitValue)
                        }
                        isSecondary={
                            unit.value !== key.unitValue ||
                            mUnit.value !== key.unitValue ||
                            tUnit.value !== key.unitValue
                        }
                        aria-pressed={
                            ('Desktop' === deviceType &&
                                unit.value === key.unitValue) ||
                            ('Mobile' === deviceType &&
                                mUnit.value === key.unitValue) ||
                            ('Tablet' === deviceType &&
                                tUnit.value === key.unitValue)
                        }
                        data-device-type={deviceType}
                        aria-label={sprintf(
                            __('%s units', 'premium-blocks-for-gutenberg'),
                            key.name
                        )}
                        onClick={() => onChangeUnits(key)}
                    >
                        {key.unitValue}
                    </Button>
                </Tooltip>
            )
        );

        return items;
    };
    const output = {};

    output.Desktop = (
        <Fragment>
            <PremiumSpacing
                topValue={valueTop}
                rightValue={valueRight}
                bottomValue={valueBottom}
                leftValue={valueLeft}
                setAttributes={setAttributes}
                cachedValue={cachedValue}
                device={"desktop"}

            />
        </Fragment>
    );
    output.Tablet = (
        <Fragment>
            <PremiumSpacing
                topValue={valueTopTablet}
                rightValue={valueRightTablet}
                bottomValue={valueBottomTablet}
                leftValue={valueLeftTablet}
                setAttributes={setAttributes}
                cachedValue={cachedValue}
                device={"tablet"}

            />
        </Fragment>
    );
    output.Mobile = (
        <Fragment>
            <PremiumSpacing
                topValue={valueTopMobile}
                rightValue={valueRightMobile}
                bottomValue={valueBottomMobile}
                leftValue={valueLeftMobile}
                setAttributes={setAttributes}
                cachedValue={cachedValue}
                device={"mobile"}

            />
        </Fragment>
    );

    return (
        <div className="premium-blocks-range-control">
            <header>
                <div className={`premium-slider-title-wrap`}>
                    <span className="customize-control-title premium-control-title">  {__("Padding")}</span>
                    <ul className="premium-responsive-control-btns premium-responsive-slider-btns">
                        {devices.map((device, key) => {
                            const activeClass = device === deviceType ? ' active' : '';
                            const icon = device.toLowerCase() === 'mobile' ? 'smartphone' : device.toLowerCase();
                            return <li key={key} className={`${device}${activeClass}`}>
                                <button type="button" className={`preview-${device}${activeClass}`} data-device={device}>
                                    <i class={`dashicons dashicons-${icon}`} onClick={() => {
                                        const nextDevice = key + 1 > devices.length - 1 ? devices[0] : devices[key + 1];
                                        customSetPreviewDeviceType(nextDevice)
                                            ;
                                    }} ></i>
                                </button>
                            </li>
                        })}
                    </ul>
                </div>
                {showUnits && (
                    <PremiumSizeUnits
                        activeUnit={selectedUnit}
                        onChangeSizeUnit={newValue =>
                            onChangePadSizeUnit(newValue)
                        }
                    />
                )}
            </header>

            {output[deviceType] ? output[deviceType] : output.Desktop}

        </div>

    );
};

export default SpacingControl;
