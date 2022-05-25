import React from 'react'
const { SelectControl, Button, ButtonGroup, Tooltip } = wp.components;
// import { FontAwesomeEnabled } from "../../assets/js/settings";

import PremiumBackground from './premium-background'
import map from 'lodash/map';
const { __ } = wp.i18n;
const { Fragment, useState } = wp.element;
import AdvancedPopColorControl from './Color Control/ColorComponent'
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
export default function PremiumBackgroundControl({ value, onChange }) {
    let defaultValues = {
        'backgroundType': '',
        'backgroundColor': '',
        'backgroundImageID': '',
        'backgroundImageURL': '',
        'backgroundPosition': '',
        'backgroundRepeat': '',
        'backgroundSize': '',
        'fixed': false,
        'gradientLocationOne': "",
        'gradientColorTwo': '',
        'gradientLocationTwo': '',
        'gradientAngle': '',
        'gradientPosition': '',
        'gradientType': ''
    }
    value = value ? { ...defaultValues, ...value } : defaultValues
    const [state, setState] = useState(value)

    const gradTypes = [
        { key: 'linear', name: __('Linear') },
        { key: 'radial', name: __('Radial') },
    ];

    const bgType = [
        { key: 'solid', icon: "fa fa-paint-brush", tooltip: __('Classic') },
        { key: 'gradient', icon: "fa fa-barcode", tooltip: __('Gradient') },
    ];
    const onChangeBackground = (item, value) => {
        const updatedState = { ...state };
        updatedState[item] = value
        setState(updatedState)
        onChange(updatedState)
    }
    const { backgroundType, backgroundColor,
        backgroundImageID, backgroundImageURL,
        backgroundPosition, backgroundRepeat,
        backgroundSize, fixed, gradientLocationOne, gradientColorTwo,
        gradientLocationTwo, gradientAngle, gradientPosition, gradientType } = state

    return (
        <Fragment>
            <div className="Premium-btn-size-settings-container">
                <h2 className="Premium-beside-btn-group">{__('Background Type', 'premium-blocks-for-gutenberg')}</h2>
                <ButtonGroup className="Premium-button-size-type-options" aria-label={__('Background Type', 'premium-blocks-for-gutenberg')}>
                    {map(bgType, ({ icon, key, tooltip }) => (
                        <Tooltip text={tooltip}>
                            <Button
                                key={key}
                                className="Premium-btn-size-btn"
                                isSmall
                                isPrimary={backgroundType === key}
                                onClick={() => onChangeBackground('backgroundType', key)}
                            >
                                {tooltip}
                            </Button>
                        </Tooltip>
                    ))}
                </ButtonGroup>
            </div>
            {'solid' === backgroundType && (
                <div className="Premium-inner-sub-section">
                    <PremiumBackground
                        type="color"
                        colorValue={backgroundColor}
                        onChangeColor={newValue => onChangeBackground('backgroundColor', newValue)}
                    />
                    <PremiumBackground
                        imageID={backgroundImageID}
                        imageURL={backgroundImageURL}
                        backgroundPosition={backgroundPosition}
                        backgroundRepeat={backgroundRepeat}
                        backgroundSize={backgroundSize}
                        fixed={fixed}
                        onSelectMedia={media => { onChangeBackground('backgroundImageURL', media.url) }}
                        onRemoveImage={() => onChangeBackground('backgroundImageURL', '')}
                        onChangeBackPos={newValue => onChangeBackground('backgroundPosition', newValue)}
                        onchangeBackRepeat={newValue => onChangeBackground('backgroundRepeat', newValue)}
                        onChangeBackSize={newValue => onChangeBackground('backgroundSize', newValue)}
                        onChangeFixed={check => onChangeBackground('fixed', check)}
                    />
                </div>
            )}
            {'gradient' === backgroundType && (
                <div className="Premium-inner-sub-section">
                    <AdvancedPopColorControl
                        label={__('Gradient Color 1', 'premium-blocks-for-gutenberg')}
                        colorValue={backgroundColor}
                        colorDefault={''}
                        onColorChange={value => { onChangeBackground('backgroundColor', value) }}
                    />
                    <ResponsiveSingleRangeControl
                        label={__('Location', 'premium-blocks-for-gutenberg')}
                        value={gradientLocationOne}
                        onChange={(value) => onChangeBackground('gradientLocationOne', value)}
                        showUnit={false}
                        defaultValue={0}
                    />
                    <AdvancedPopColorControl
                        label={__('Gradient Color 2', 'premium-blocks-for-gutenberg')}
                        colorValue={gradientColorTwo}
                        colorDefault={'#777777'}
                        onColorChange={value => onChangeBackground('gradientColorTwo', value)}
                    />
                    <ResponsiveSingleRangeControl
                        label={__('Location', 'premium-blocks-for-gutenberg')}
                        value={gradientLocationTwo}
                        onChange={(value) => onChangeBackground('gradientLocationTwo', value)}
                        showUnit={false}
                        defaultValue={0}
                    />
                    <div className="Premium-btn-size-settings-container">
                        <h2 className="Premium-beside-btn-group">{__('Gradient Type', 'premium-blocks-for-gutenberg')}</h2>
                        <ButtonGroup className="Premium-button-size-type-options" aria-label={__('Gradient Type', 'premium-blocks-for-gutenberg')}>
                            {map(gradTypes, ({ name, key }) => (
                                <Button
                                    key={key}
                                    className="Premium-btn-size-btn"
                                    isSmall
                                    isPrimary={gradientType === key}
                                    onClick={() => onChangeBackground('gradientType', key)}
                                >
                                    {name}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </div>
                    {'radial' !== (gradientType) && (
                        <ResponsiveSingleRangeControl
                            label={__('Gradient Angle', 'premium-blocks-for-gutenberg')}
                            value={gradientAngle}
                            onChange={(value) => onChangeBackground('gradientAngle', value)}
                            showUnit={false}
                            defaultValue={0}
                            min={0}
                            max={360}
                        />
                    )}
                    {'radial' === (gradientType) && (
                        <SelectControl
                            label={__('Gradient Position', 'premium-blocks-for-gutenberg')}
                            value={(gradientPosition)}
                            options={[
                                { value: 'center top', label: __('Center Top', 'premium-blocks-for-gutenberg') },
                                { value: 'center center', label: __('Center Center', 'premium-blocks-for-gutenberg') },
                                { value: 'center bottom', label: __('Center Bottom', 'premium-blocks-for-gutenberg') },
                                { value: 'left top', label: __('Left Top', 'premium-blocks-for-gutenberg') },
                                { value: 'left center', label: __('Left Center', 'premium-blocks-for-gutenberg') },
                                { value: 'left bottom', label: __('Left Bottom', 'premium-blocks-for-gutenberg') },
                                { value: 'right top', label: __('Right Top', 'premium-blocks-for-gutenberg') },
                                { value: 'right center', label: __('Right Center', 'premium-blocks-for-gutenberg') },
                                { value: 'right bottom', label: __('Right Bottom', 'premium-blocks-for-gutenberg') },
                            ]}
                            onChange={value => onChangeBackground('gradientPosition', value)}
                        />
                    )}
                </div>
            )}
        </Fragment>
    )
}
