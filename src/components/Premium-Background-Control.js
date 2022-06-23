import React from 'react'
const { SelectControl, Button, ButtonGroup, Tooltip } = wp.components;
// import { FontAwesomeEnabled } from "../../assets/js/settings";
import PremiumMediaUpload from './premium-media-upload'
import PremiumBackground from './premium-background'
import map from 'lodash/map';
const { __ } = wp.i18n;
const { Fragment, useState } = wp.element;
import AdvancedPopColorControl from './Color Control/ColorComponent'
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
import RadioComponent from './radio-control';
export default function PremiumBackgroundControl({ value, onChange, backgroundVedio = false }) {
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
        'gradientType': '',
        'videoSource': 'local',
        'bgExternalVideo': '',
        'videoURL': '',
        'videoID': '',
        'bgVideoFallbackID': '',
        'bgVideoFallbackURL': ''

    }
    value = value ? { ...defaultValues, ...value } : defaultValues
    const [state, setState] = useState(value)

    const gradTypes = [
        { key: 'linear', name: __('Linear') },
        { key: 'radial', name: __('Radial') },
    ];

    const bgType = [
        { key: 'solid', icon: (<svg id="Accordion" fill="inherit" xmlns="http://www.w3.org/2000/svg" width="14.44" height="14.5" viewBox="0 0 21.44 21.5"><defs></defs><title>classic-background-icon</title><g id="Classic_Background" data-name="Classic Background"><path class="cls-1" d="M9.26,15.78h0a3.21,3.21,0,0,1,.95,1.88v-.08A3.23,3.23,0,0,0,9.26,15.78Z" transform="translate(-1.78 -1.75)" /><path class="cls-1" d="M22.58,2.38a2.18,2.18,0,0,0-2.34-.48,34.56,34.56,0,0,0-12,8.87L6.74,12.71a3.75,3.75,0,0,0-.42.62A4.79,4.79,0,0,0,2.07,17.6L1.8,20.05a2.88,2.88,0,0,0,.82,2.36,2.85,2.85,0,0,0,2,.84,1.72,1.72,0,0,0,.32,0L7.44,23a4.81,4.81,0,0,0,2.86-1.38,4.93,4.93,0,0,0,1.41-3,3.89,3.89,0,0,0,.52-.34l2-1.58A34.59,34.59,0,0,0,23.05,4.71,2.1,2.1,0,0,0,22.58,2.38ZM9.24,20.53a3.44,3.44,0,0,1-2,.94l-2.47.27a1.33,1.33,0,0,1-1.11-.39,1.39,1.39,0,0,1-.39-1.13l.27-2.46a3.33,3.33,0,0,1,3.24-3h.53l.33.07.2.05a3.24,3.24,0,0,1,1.39.86h0a3.23,3.23,0,0,1,.94,1.8v.2c0,.11,0,.22,0,.33A3.43,3.43,0,0,1,9.24,20.53Zm4-5-1.69,1.36a4,4,0,0,0-.2-.58,4.85,4.85,0,0,0-.63-1.07c-.13-.16-.28-.32-.43-.48a4,4,0,0,0-.49-.44l-.27-.19A3.16,3.16,0,0,0,9,13.76c-.19-.09-.38-.16-.57-.23l-.33-.1,1.36-1.72c.19-.24.4-.48.61-.73h0a4,4,0,0,1,4,3.84C13.77,15.07,13.51,15.29,13.26,15.49ZM21.67,4.14a0,0,0,0,0,0,0,33.73,33.73,0,0,1-6.31,9.4,5.47,5.47,0,0,0-4-3.91A33.16,33.16,0,0,1,20.78,3.3a.66.66,0,0,1,.73.15A.61.61,0,0,1,21.67,4.14Z" transform="translate(-1.78 -1.75)" /><path class="cls-1" d="M6.9,14.79h0Zm3.42-.07h0c.15.16.3.32.43.48A3.8,3.8,0,0,0,10.32,14.72Zm.42.48a4.85,4.85,0,0,1,.63,1.07A4,4,0,0,0,10.74,15.2Z" transform="translate(-1.78 -1.75)" /></g></svg>), tooltip: __('Classic', 'premium-blocks-for-gutenberg') },
        { key: 'gradient', icon: (<svg id="Accordion" fill="inherit" xmlns="http://www.w3.org/2000/svg" width="14.44" height="14.5" viewBox="0 0 21.75 19.7"><defs></defs><title>gradient-background-icon</title><path class="cls-1" d="M19.47,8,16,4.57c-1.43-1.43-2.57-2-3.68-1.91a5.41,5.41,0,0,0-3,1.91L3.71,10.15c-2.63,2.64-2.93,3.78,0,6.72l3.46,3.46c1.34,1.34,2.35,2,3.35,2s2-.68,3.37-2l5.57-5.58a5.24,5.24,0,0,0,1.85-3.12C21.4,10.51,20.83,9.4,19.47,8ZM4.78,11.21l5.57-5.57c.92-.93,1.54-1.49,2.24-1.49S13.91,4.6,15,5.64L18.41,9.1c1.33,1.33,1.45,2,1.42,2.43a1.46,1.46,0,0,1-.19.63,34,34,0,0,0-15.48-.32Zm13.63,2.48-5.57,5.57c-2.13,2.13-2.48,2.13-4.6,0L4.78,15.8c-1-1-1.57-1.64-1.65-2.18a32.55,32.55,0,0,1,15.51-.17Z" transform="translate(-1.62 -2.65)" /><path class="cls-1" d="M20.62,22.22A2.72,2.72,0,0,1,18.13,21a2.72,2.72,0,0,1,.24-2.74L19,17.18a1.87,1.87,0,0,1,1.58-1h0a1.9,1.9,0,0,1,1.59,1l.66,1.09A2.72,2.72,0,0,1,23.1,21,2.71,2.71,0,0,1,20.62,22.22Zm0-4.55s-.17.07-.29.28h0L19.66,19a1.32,1.32,0,0,0-.22,1.24,1.32,1.32,0,0,0,1.18.44,1.31,1.31,0,0,0,1.17-.44A1.32,1.32,0,0,0,21.57,19L20.91,18C20.79,17.75,20.67,17.67,20.61,17.67Zm-.93-.1h0Z" transform="translate(-1.62 -2.65)" /></svg>), tooltip: __('Gradient', 'premium-blocks-for-gutenberg') },
    ];
    if (backgroundVedio) {
        bgType.push({ key: "video", icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="14.44" height="14.5" viewBox="0 0 21.5 18.34"><defs></defs><title>video-background-icon</title><path class="cls-1" d="M22.12,6.39a2.36,2.36,0,0,0-2.53.39L18,7.91c-.09-3.29-1.51-4.58-5-4.58H6.71c-3.57,0-5,1.39-5,5v8.42c0,2.4,1.3,5,5,5H13c3.44,0,4.86-1.29,5-4.59l1.61,1.13a2.86,2.86,0,0,0,1.65.6,1.89,1.89,0,0,0,.87-.2,2.34,2.34,0,0,0,1.14-2.3V8.69A2.37,2.37,0,0,0,22.12,6.39ZM16.49,16.71c0,2.75-.71,3.46-3.46,3.46H6.71a3.14,3.14,0,0,1-3.46-3.46V8.29c0-2.75.71-3.46,3.46-3.46H13c2.75,0,3.46.71,3.46,3.46Zm5.26-.4c0,.59-.17.88-.33,1a.39.39,0,0,1-.17,0,1.55,1.55,0,0,1-.8-.33L18,15.26V9.73L20.45,8c.4-.27.77-.38,1-.28s.33.48.33,1Z" transform="translate(-1.75 -3.33)" /><path class="cls-1" d="M12,12.25A2.25,2.25,0,1,1,14.25,10,2.25,2.25,0,0,1,12,12.25Zm0-3a.75.75,0,1,0,.75.75A.76.76,0,0,0,12,9.25Z" transform="translate(-1.75 -3.33)" /></svg>), tooltip: __('Video', 'premium-blocks-for-gutenberg') })
    }
    const onChangeBackground = (item, value) => {
        const updatedState = { ...state };
        updatedState[item] = value
        setState(updatedState)
        onChange(updatedState)
    }
    const {
        backgroundType, backgroundColor, backgroundImageID, backgroundImageURL,
        backgroundPosition, backgroundRepeat, backgroundSize, fixed, bgExternalVideo,
        gradientLocationOne, gradientColorTwo, gradientLocationTwo, videoURL, videoID,
        gradientAngle, gradientPosition, gradientType, videoSource, bgVideoFallbackID,
        bgVideoFallbackURL } = state

    return (
        <Fragment>
            <div className="premium-btn-size-settings-container">
                <p className="premium-beside-btn-group">{__('Background Type', 'premium-blocks-for-gutenberg')}</p>
                <div className={`premium-background-type__wrap`} >
                    <ButtonGroup className="premium-button-size-type-options" aria-label={__('Background Type', 'premium-blocks-for-gutenberg')}>
                        {map(bgType, ({ icon, key, tooltip }) => (
                            <Tooltip text={tooltip}>
                                <Button
                                    key={key}
                                    className="premium-btn-size-btn"
                                    isSmall
                                    isPrimary={backgroundType === key}
                                    onClick={() => onChangeBackground('backgroundType', key)}
                                >
                                    {icon}
                                </Button>
                            </Tooltip>
                        ))}
                    </ButtonGroup>
                    <div className="premium-btn-reset-wrap">
                        <button
                            className="premium-reset-btn "
                            disabled={"" === backgroundType}
                            onClick={(e) => {
                                e.preventDefault()
                                setState(defaultValues)
                                onChange(defaultValues)
                            }}
                        ></button>
                    </div>
                </div>
            </div>
            {'solid' === backgroundType && (
                <div className="premium-inner-sub-section premium-blocks__base-control">
                    <PremiumBackground
                        type="color"
                        colorValue={backgroundColor}
                        colorDefault={''}
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
                <div className="Premium-inner-sub-section premium-blocks__base-control">
                    <AdvancedPopColorControl
                        label={__('Gradient Color 1', 'premium-blocks-for-gutenberg')}
                        colorValue={backgroundColor}
                        colorDefault={''}
                        onColorChange={value => onChangeBackground('backgroundColor', value)}
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
                    <div className="premium-btn-size-settings-container">
                        <h2 className="premium-beside-btn-group">{__('Gradient Type', 'premium-blocks-for-gutenberg')}</h2>
                        <ButtonGroup className="premium-button-size-type-options" aria-label={__('Gradient Type', 'premium-blocks-for-gutenberg')}>
                            {map(gradTypes, ({ name, key }) => (
                                <Button
                                    key={key}
                                    className="premium-btn-size-btn"
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
                            onChange={(val) => onChangeBackground('videoSource', val)}
                        />
                        {videoSource === 'external' ?
                            <TextControl
                                label={__('Video URL', "premium-blocks-for-gutenberg")}
                                value={bgExternalVideo || ""}
                                onChange={val => onChangeBackground('bgExternalVideo', val)}
                            />
                            :
                            <Fragment>
                                <p>{__('Video', "premium-blocks-for-gutenberg")}</p>
                                <PremiumMediaUpload
                                    type="video"
                                    imageID={videoID}
                                    imageURL={videoURL}
                                    onSelectMedia={media => onChangeBackground('videoURL', media.url)}
                                    onRemoveImage={() => onChangeBackground('videoURL', "")}
                                />
                            </Fragment>
                        }
                        <p>{__('Fallback Image (Poster)', 'premium-blocks-for-gutenberg')}</p>
                        <PremiumMediaUpload
                            type="image"
                            imageID={bgVideoFallbackID}
                            imageURL={bgVideoFallbackURL}
                            onSelectMedia={media => onChangeBackground('bgVideoFallbackURL', media.url)}
                            onRemoveImage={() => onChangeBackground('bgVideoFallbackURL', "")}
                        />
                    </Fragment>
                )
            }
        </Fragment>
    )
}