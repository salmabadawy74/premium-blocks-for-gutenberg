import React from 'react'
const { SelectControl, Button, ButtonGroup } = wp.components;
import PremiumBackground from './premium-background'
import map from 'lodash/map';
const { __ } = wp.i18n;
const { Fragment } = wp.element;
import AdvancedPopColorControl from './Color Control/ColorComponent'
import PremiumRangeControl from './premium-range-control'
export default function PremiumBackgroundControl({
    backgroundType, backgroundColor, backgroundImageID,
    backgroundImageURL, backgroundPosition, backgroundRepeat,
    backgroundSize, fixed, gradientType, setAttributes,
    saveContainerStyle, gradientLocationOne, gradientColorTwo,
    gradientLocationTwo, gradientAngle, gradientPosition }) {

    const gradTypes = [
        { key: 'linear', name: __('Linear') },
        { key: 'radial', name: __('Radial') },
    ];
    const bgType = [
        { key: 'solid', name: __('Solid') },
        { key: 'gradient', name: __('Gradient') },
    ];

    console.log(backgroundType, backgroundColor, backgroundImageID, backgroundImageURL);
    return (
        <Fragment>
            <div className="Premium-btn-size-settings-container">
                <h2 className="Premium-beside-btn-group">{__('Background Type', 'premium-block-for-gutenberg')}</h2>
                <ButtonGroup className="Premium-button-size-type-options" aria-label={__('Background Type', 'premium-block-for-gutenberg')}>
                    {map(bgType, ({ name, key }) => (
                        <Button
                            key={key}
                            className="Premium-btn-size-btn"
                            isSmall
                            onClick={() => setAttributes({ backgroundType: key })}
                        >
                            { name}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
            {'solid' === backgroundType && (
                <div className="Premium-inner-sub-section">
                    <PremiumBackground
                        type="color"
                        colorValue={backgroundColor}
                        onChangeColor={newValue =>
                            saveContainerStyle({
                                containerBack: newValue,
                            })
                        }
                    />
                    <PremiumBackground
                        imageID={backgroundImageID}
                        imageURL={backgroundImageURL}
                        backgroundPosition={backgroundPosition}
                        backgroundRepeat={backgroundRepeat}
                        backgroundSize={backgroundSize}
                        fixed={fixed}
                        onSelectMedia={media => {
                            saveContainerStyle({
                                backgroundImageID: media.id,
                                backgroundImageURL: media.url
                            });
                        }}
                        onRemoveImage={value =>
                            saveContainerStyle({
                                backgroundImageURL: "",
                                backgroundImageID: ""
                            })
                        }
                        onChangeBackPos={newValue =>
                            saveContainerStyle({ backgroundPosition: newValue })
                        }
                        onchangeBackRepeat={newValue =>
                            saveContainerStyle({ backgroundRepeat: newValue })
                        }
                        onChangeBackSize={newValue =>
                            saveContainerStyle({ backgroundSize: newValue })
                        }
                        onChangeFixed={check => saveContainerStyle({ fixed: check })}
                    />
                </div>
            )}
            {'gradient' === backgroundType && (
                <div className="Premium-inner-sub-section">
                    <AdvancedPopColorControl
                        label={__('Gradient Color 1', 'premium-block-for-gutenberg')}
                        colorValue={backgroundColor}
                        colorDefault={''}
                        onColorChange={value => {
                            saveContainerStyle({ containerBack: value })
                        }}
                    />

                    <PremiumRangeControl
                        label={__('Location', 'premium-block-for-gutenberg')}
                        value={gradientLocationOne}
                        onChange={(value) => {
                            saveContainerStyle({ gradientLocationOne: value })
                        }}
                        showUnit={false}
                        defaultValue={0}
                    />
                    <AdvancedPopColorControl
                        label={__('Gradient Color 2', 'premium-block-for-gutenberg')}
                        colorValue={gradientColorTwo}
                        colorDefault={'#777777'}
                        onColorChange={value => {
                            saveContainerStyle({ gradientColorTwo: value })
                        }}
                    />
                    <PremiumRangeControl
                        label={__('Location', 'premium-block-for-gutenberg')}
                        value={gradientLocationTwo}
                        onChange={(value) => {
                            saveContainerStyle({ gradientLocationTwo: value })
                        }}
                        showUnit={false}
                        defaultValue={0}
                    />
                    <div className="Premium-btn-size-settings-container">
                        <h2 className="Premium-beside-btn-group">{__('Gradient Type', 'premium-block-for-gutenberg')}</h2>
                        <ButtonGroup className="Premium-button-size-type-options" aria-label={__('Gradient Type', 'premium-block-for-gutenberg')}>
                            {map(gradTypes, ({ name, key }) => (
                                <Button
                                    key={key}
                                    className="Premium-btn-size-btn"
                                    isSmall
                                    onClick={() => {
                                        saveContainerStyle({ gradientType: key })
                                    }}
                                >
                                    { name}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </div>
                    { 'radial' !== (gradientType) && (
                        <PremiumRangeControl
                            label={__('Gradient Angle', 'premium-block-for-gutenberg')}
                            value={gradientAngle}
                            onChange={(value) => {
                                saveContainerStyle({ gradientAngle: value })
                            }}
                            showUnit={false}
                            defaultValue={0}
                            min={0}
                            max={360}
                        />
                    )}
                    { 'radial' === (gradientType) && (
                        <SelectControl
                            label={__('Gradient Position', 'premium-block-for-gutenberg')}
                            value={(gradientPosition)}
                            options={[
                                { value: 'center top', label: __('Center Top', 'premium-block-for-gutenberg') },
                                { value: 'center center', label: __('Center Center', 'premium-block-for-gutenberg') },
                                { value: 'center bottom', label: __('Center Bottom', 'premium-block-for-gutenberg') },
                                { value: 'left top', label: __('Left Top', 'premium-block-for-gutenberg') },
                                { value: 'left center', label: __('Left Center', 'premium-block-for-gutenberg') },
                                { value: 'left bottom', label: __('Left Bottom', 'premium-block-for-gutenberg') },
                                { value: 'right top', label: __('Right Top', 'premium-block-for-gutenberg') },
                                { value: 'right center', label: __('Right Center', 'premium-block-for-gutenberg') },
                                { value: 'right bottom', label: __('Right Bottom', 'premium-block-for-gutenberg') },
                            ]}
                            onChange={value => saveContainerStyle({ gradientPosition: value })}
                        />
                    )}
                </div>
            )}
        </Fragment>
    )
}
