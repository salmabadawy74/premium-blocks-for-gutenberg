import React from 'react'
const { SelectControl, Button, ButtonGroup, Tooltip, TextControl
} = wp.components;
import { FontAwesomeEnabled } from "../../assets/js/settings";
import PremiumMediaUpload from './premium-media-upload'
import PremiumBackground from './premium-background'
import map from 'lodash/map';
const { __ } = wp.i18n;
const { Fragment } = wp.element;
import AdvancedPopColorControl from './Color Control/ColorComponent'
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
export default function PremiumBackgroundControl({
    backgroundType, backgroundColor, backgroundImageID,
    backgroundImageURL, backgroundPosition, backgroundRepeat,
    backgroundSize, fixed, gradientType, setAttributes,
    saveContainerStyle, gradientLocationOne, gradientColorTwo,
    gradientLocationTwo, gradientAngle, gradientPosition,
    videoSource, videoID, videoURL, bgExternalVideo, bgVideoFallbackID,
    bgVideoFallbackURL
}) {

    const gradTypes = [
        { key: 'linear', name: __('Linear', 'premium-blocks-for-gutenberg') },
        { key: 'radial', name: __('Radial', 'premium-blocks-for-gutenberg') },
    ];

    const bgType = [
        { key: 'solid', icon: "fa fa-image", tooltip: __('Classic', 'premium-blocks-for-gutenberg') },
        { key: 'gradient', icon: "fa fa-barcode", tooltip: __('Gradient', 'premium-blocks-for-gutenberg') },
        { key: "video", icon: 'fa fa-video-camera', tooltip: __('Video', 'premium-blocks-for-gutenberg') }
    ];

    return (
        <Fragment>
            <PremiumBackground
                type="color"
                colorValue={backgroundColor}
                onChangeColor={newValue =>
                    saveContainerStyle({
                        containerBack: newValue,
                    })
                }
            />
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
                                onClick={() => setAttributes({ backgroundType: key })}
                            >
                                {1 == FontAwesomeEnabled ? <i className={icon}></i> : tooltip}
                            </Button>
                        </Tooltip>
                    ))}
                </ButtonGroup>
            </div>
            {'solid' === backgroundType && (
                <div className="Premium-inner-sub-section">


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
                        onRemoveImage={() =>
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
                        label={__('Gradient Color 1', 'premium-blocks-for-gutenberg')}
                        colorValue={backgroundColor}
                        colorDefault={''}
                        onColorChange={value => {
                            saveContainerStyle({ containerBack: value })
                        }}
                    />
                    <ResponsiveSingleRangeControl
                        label={__('Location', 'premium-blocks-for-gutenberg')}
                        value={gradientLocationOne}
                        onChange={(value) => {
                            saveContainerStyle({ gradientLocationOne: value })
                        }}
                        showUnit={false}
                        defaultValue={0}
                    />
                    <AdvancedPopColorControl
                        label={__('Gradient Color 2', 'premium-blocks-for-gutenberg')}
                        colorValue={gradientColorTwo}
                        colorDefault={'#777777'}
                        onColorChange={value => {
                            saveContainerStyle({ gradientColorTwo: value })
                        }}
                    />
                    <ResponsiveSingleRangeControl
                        label={__('Location', 'premium-blocks-for-gutenberg')}
                        value={gradientLocationTwo}
                        onChange={(value) => {
                            saveContainerStyle({ gradientLocationTwo: value })
                        }}
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
                                    onClick={() => {
                                        saveContainerStyle({ gradientType: key })
                                    }}
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
                            onChange={(value) => {
                                saveContainerStyle({ gradientAngle: value })
                            }}
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
                            onChange={value => saveContainerStyle({ gradientPosition: value })}
                        />
                    )}
                </div>
            )}
            {
                'video' === backgroundType && (
                    <Fragment>
                        <SelectControl
                            label={__('Video Source', 'premium-blocks-for-gutenberg')}
                            value={videoSource}
                            options={[
                                { value: 'local', label: __('Local', 'premium-blocks-for-gutenberg') },
                                { value: 'external', label: __('External', 'premium-blocks-for-gutenberg') }
                            ]}
                            onChange={(val) => saveContainerStyle({ videoSource: val })}
                        />
                        {videoSource === 'external' ?
                            <TextControl
                                label={__('Video URL', "premium-blocks-for-gutenberg")}
                                value={bgExternalVideo || ""}
                                onChange={val => saveContainerStyle({ bgExternalVideo: val })}
                            />
                            :
                            <Fragment>
                                <p>{__('Video', "premium-blocks-for-gutenberg")}</p>
                                <PremiumMediaUpload
                                    type="video"
                                    imageID={videoID}
                                    imageURL={videoURL}
                                    onSelectMedia={media => {
                                        saveContainerStyle({
                                            videoID: media.id,
                                            videoURL: media.url
                                        });
                                    }}
                                    onRemoveImage={() =>
                                        saveContainerStyle({
                                            videoID: "",
                                            videoURL: ""
                                        })
                                    }
                                />
                            </Fragment>
                        }
                        <p>{__('Fallback Image (Poster)', 'premium-blocks-for-gutenberg')}</p>
                        <PremiumMediaUpload
                            type="image"
                            imageID={bgVideoFallbackID}
                            imageURL={bgVideoFallbackURL}
                            onSelectMedia={media => {
                                saveContainerStyle({
                                    bgVideoFallbackID: media.id,
                                    bgVideoFallbackURL: media.url
                                });
                            }}
                            onRemoveImage={() =>
                                saveContainerStyle({
                                    bgVideoFallbackURL: "",
                                    bgVideoFallbackURL: ""
                                })
                            }
                        />
                    </Fragment>
                )
            }
        </Fragment>
    )
}
