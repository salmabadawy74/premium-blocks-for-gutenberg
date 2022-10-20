import classnames from "classnames";
import onChangeVideoURL from "./index";
import {
    AdvancedColorControl as AdvancedPopColorControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent as SpacingControl,
    PremiumFilters,
    DefaultImage,
    PremiumShadow,
    ResponsiveSingleRangeControl,
    WebfontLoader,
    InsideTabs,
    InsideTab,
    PremiumTypo,
    PremiumMediaUpload
} from '@pbg/components';
import { borderCss, paddingCss, typographyCss, generateBlockId, generateCss } from '@pbg/helpers';

const { withSelect } = wp.data

const {
    PanelBody,
    SelectControl,
    ToggleControl,
    Placeholder,
    Button,
    Toolbar,
    IconButton
} = wp.components;

const { useEffect, Fragment, useState } = wp.element;
const { InspectorControls, RichText, useBlockProps, BlockControls } = wp.blockEditor;
const { __ } = wp.i18n;

let isBoxUpdated = null;

function Edit(props) {
    const { setAttributes, className, clientId } = props;
    const videoboxRef = React.createRef();
    const [url, setUrl] = useState(null);

    useEffect(() => {
        setAttributes({
            blockId: "premium-video-box-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
        initVideoBox();
    }, []);

    useEffect(() => {
        clearTimeout(isBoxUpdated);
        isBoxUpdated = setTimeout(initVideoBox, 500);
    }, [isBoxUpdated]);

    const initVideoBox = () => {
        const { blockId, videoURL } = props.attributes;
        if (!blockId && !videoURL) return null;
        let videoBox = videoboxRef.current,
            video, src;
        if (videoBox) {
            videoBox.addEventListener("click", () => {
                videoBox.classList.add("video-overlay-false");
                let type = videoBox.getAttribute("data-type");
                if ("self" !== type) {
                    video = videoBox.getElementsByTagName("iframe")[0];
                    src = video.getAttribute("src");
                } else {
                    video = videoBox.getElementsByTagName("video")[0];
                }
                setTimeout(() => {
                    if ("self" !== type) {
                        video.setAttribute("src", src.replace("autoplay=0", "autoplay=1"));
                        console.log(src)
                    } else {
                        videoBox
                            .getElementsByClassName("premium-video-box__overlay")[0]
                            .remove();
                        video.play();
                    }
                }, 300);
            });
        }
    }

    const {
        blockId,
        videoType,
        videoURL,
        videoID,
        autoPlay,
        loop,
        controls,
        mute,
        overlay,
        playIcon,
        playLeft,
        hideDesktop,
        hideTablet,
        hideMobile,
        ratioValue,
        overlayStyles,
        playStyles,
        descStyles,
        videoDescTypography,
        playBorder,
        boxBorder,
        playPadding,
        descPadding,
        descShadow,
        boxShadow,
        overlayFilter
    } = props.attributes;

    const TYPE = [
        {
            value: "youtube",
            label: __("Youtube", 'premium-blocks-for-gutenberg')
        },
        {
            value: "vimeo",
            label: __("Vimeo", 'premium-blocks-for-gutenberg')
        },
        {
            value: "daily",
            label: __("Daily Motion", 'premium-blocks-for-gutenberg')
        },
        {
            value: "self",
            label: __("Self Hosted", 'premium-blocks-for-gutenberg')
        }
    ];

    const loopVideo = () => {
        if (videoURL && "youtube" === videoType) {
            if (videoURL.startsWith("http") || videoURL.startsWith("https")) {
                return loop
                    ? `1&playlist=${videoURL.replace(
                        "https://www.youtube.com/watch?v=",
                        ""
                    )}`
                    : "0";
            } else {
                return loop ? `1&playlist=${videoURL}` : "0";
            }
        } else {
            return loop ? "1" : "0";
        }
    };

    const changeVideoType = (newvalue) => {
        if (newvalue === "self") {
            setAttributes({ videoURL: "" })
        }
        setAttributes({ videoType: newvalue })
    }

    const saveOverlayStyles = (value) => {
        const newUpdate = overlayStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ overlayStyles: newUpdate });
    };

    const savePlayStyles = (value) => {
        const newUpdate = playStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ playStyles: newUpdate });
    };

    const saveDescritionStyle = (value) => {
        const newUpdate = descStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ descStyles: newUpdate });
    };

    let loadDescriptionGoogleFonts;
    if (videoDescTypography.fontFamily !== "Default") {
        const gconfig = {
            google: {
                families: [videoDescTypography?.fontFamily],
            },
        };
        loadDescriptionGoogleFonts = (
            <WebfontLoader config={gconfig}></WebfontLoader>
        );
    }

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-video-box__play:hover`] = {
            'color': `${playStyles[0].playHoverColor} !important`,
            'background-color': `${playStyles[0].playHoverBackColor} !important`
        };
        return generateCss(styles);
    }

    return (
        <Fragment>
            <BlockControls key="controls">
                <Toolbar>
                    <IconButton
                        label={__(
                            "Refresh this button when it conflict with other buttons styles",
                            "premium-blocks-for-gutenberg"
                        )}
                        icon="update"
                        className="components-toolbar__control"
                    />
                </Toolbar>
            </BlockControls>
            {videoURL && (
                <InspectorControls key={"inspector"}>
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("Video", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <SelectControl
                                    label={__("Video Type", 'premium-blocks-for-gutenberg')}
                                    options={TYPE}
                                    value={videoType}
                                    onChange={changeVideoType}
                                />
                                {videoURL && <button className="lottie-remove" onClick={(e) => {
                                    e.preventDefault();
                                    setAttributes({ videoURL: '' })
                                }}>{__('Remove Video', 'premium-blocks-for-gutenberg')}</button>}
                                {"self" === videoType && (
                                    <PremiumMediaUpload
                                        type="video"
                                        imageID={videoID}
                                        imageURL={videoURL}
                                        onSelectMedia={(media) => {
                                            setAttributes({
                                                videoURL: media.url,
                                                videoID: media.id
                                            })
                                        }}
                                        onRemoveImage={() => {
                                            setAttributes({
                                                videoURL: "",
                                                videoID: ""
                                            })
                                        }}
                                    />
                                )}
                                <ToggleControl
                                    label={__("Autoplay", 'premium-blocks-for-gutenberg')}
                                    checked={autoPlay}
                                    onChange={newCheck => setAttributes({ autoPlay: newCheck })}
                                    help={__("This option effect works when Overlay Image option is disabled", 'premium-blocks-for-gutenberg')}
                                />
                                {"daily" !== videoType && (
                                    <ToggleControl
                                        label={__("Loop", 'premium-blocks-for-gutenberg')}
                                        checked={loop}
                                        onChange={newCheck => setAttributes({ loop: newCheck })}
                                    />
                                )}
                                <ToggleControl
                                    label={__("Mute", 'premium-blocks-for-gutenberg')}
                                    checked={mute}
                                    onChange={newCheck => setAttributes({ mute: newCheck })}
                                />
                                {"vimeo" !== videoType && (
                                    <ToggleControl
                                        label={__("Player Controls", 'premium-blocks-for-gutenberg')}
                                        checked={controls}
                                        onChange={newCheck => setAttributes({ controls: newCheck })}
                                    />
                                )}
                                <ToggleControl
                                    label={__("Overlay Image", 'premium-blocks-for-gutenberg')}
                                    checked={overlay}
                                    onChange={newCheck => setAttributes({ overlay: newCheck })}
                                />
                                <SelectControl
                                    label={__('Aspect Ratio', 'premium-blocks-for-gutenberg')}
                                    value={ratioValue}
                                    options={
                                        [
                                            { label: '1:1', value: '11' },
                                            { label: '16:9', value: '169' },
                                            { label: '4:3', value: '43' },
                                            { label: '3:2', value: '32' },
                                            { label: '21:9', value: '219' },
                                            { label: '9:16', value: '916' }
                                        ]
                                    }
                                    onChange={(newValue) => setAttributes({ ratioValue: newValue })}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Video Box", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <PremiumShadow
                                    value={boxShadow}
                                    onChange={(value) => setAttributes({ boxShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__('Border', 'premium-blocks-for-gutenberg')}
                                    value={boxBorder}
                                    onChange={(value) => setAttributes({ boxBorder: value })}
                                />
                            </PanelBody>
                            {overlay && (
                                <PanelBody
                                    title={__("Overlay", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={overlayStyles[0].overlayImgID}
                                        imageURL={overlayStyles[0].overlayImgURL}
                                        onSelectMedia={media => {
                                            saveOverlayStyles({
                                                overlayImgID: media.id,
                                                overlayImgURL: media.url
                                            });
                                        }}
                                        onRemoveImage={() =>
                                            saveOverlayStyles({
                                                overlayImgID: "",
                                                overlayImgURL: ""
                                            })
                                        }
                                    />
                                    <PremiumFilters
                                        value={overlayFilter}
                                        onChange={(value) => setAttributes({ overlayFilter: value })}
                                    />
                                </PanelBody>
                            )}
                            {overlay && (
                                <Fragment>
                                    <PanelBody
                                        title={__("Play Icon", 'premium-blocks-for-gutenberg')}
                                        className="premium-panel-body"
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__("Enable Play Icon", 'premium-blocks-for-gutenberg')}
                                            checked={playIcon}
                                            onChange={newCheck => setAttributes({ playIcon: newCheck })}
                                        />
                                        {playIcon && (
                                            <Fragment>
                                                <ResponsiveSingleRangeControl
                                                    label={__("Size (PX)", 'premium-blocks-for-gutenberg')}
                                                    value={playStyles[0].playSize}
                                                    onChange={newValue => savePlayStyles({ playSize: newValue === undefined ? 20 : newValue })}
                                                    showUnit={false}
                                                    defaultValue={0}
                                                />
                                                <ResponsiveSingleRangeControl
                                                    label={__("Vertical Offset (%)", 'premium-blocks-for-gutenberg')}
                                                    value={playStyles[0].playTop}
                                                    onChange={newValue => savePlayStyles({ playTop: newValue === undefined ? 50 : newValue })}
                                                    showUnit={false}
                                                    defaultValue={0}
                                                />
                                                <InsideTabs>
                                                    <InsideTab tabTitle={__('Normal', 'premium-blocks-for-gutenberg')}>
                                                        <Fragment>
                                                            <AdvancedPopColorControl
                                                                label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                                                                colorValue={playStyles[0].playColor}
                                                                colorDefault={''}
                                                                onColorChange={newValue => savePlayStyles({ playColor: newValue, })}
                                                            />
                                                            <AdvancedPopColorControl
                                                                label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                                                                colorValue={playStyles[0].playBack}
                                                                onColorChange={newvalue => { savePlayStyles({ playBack: newvalue }) }}
                                                                colorDefault={``}
                                                            />
                                                            <Fragment>
                                                                <AdvancedPopColorControl
                                                                    label={__("Description Color", 'premium-blocks-for-gutenberg')}
                                                                    colorValue={descStyles[0].videoDescColor}
                                                                    colorDefault={''}
                                                                    onColorChange={newValue => saveDescritionStyle({ videoDescColor: newValue, })}
                                                                />
                                                                <AdvancedPopColorControl
                                                                    label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                                                                    colorValue={descStyles[0].videoDescBack}
                                                                    onColorChange={newvalue => { saveDescritionStyle({ videoDescBack: newvalue, }) }}
                                                                    colorDefault={``}
                                                                />
                                                            </Fragment>
                                                        </Fragment>
                                                    </InsideTab>
                                                    <InsideTab tabTitle={__('Hover', 'premium-blocks-for-gutenberg')}>
                                                        <Fragment>
                                                            <AdvancedPopColorControl
                                                                label={__("Icon Hover Color", 'premium-blocks-for-gutenberg')}
                                                                colorValue={playStyles[0].playHoverColor}
                                                                colorDefault={''}
                                                                onColorChange={newValue => savePlayStyles({ playHoverColor: newValue, })}
                                                            />
                                                            <AdvancedPopColorControl
                                                                label={__("Icon Hover Background Color", 'premium-blocks-for-gutenberg')}
                                                                colorValue={playStyles[0].playHoverBackColor}
                                                                colorDefault={''}
                                                                onColorChange={newValue => savePlayStyles({ playHoverBackColor: newValue, })}
                                                            />
                                                        </Fragment>
                                                    </InsideTab>
                                                </InsideTabs>
                                                <PremiumBorder
                                                    label={__('Border', 'premium-blocks-for-gutenberg')}
                                                    value={playBorder}
                                                    onChange={(value) => setAttributes({ playBorder: value })}
                                                />
                                                <hr />
                                                <SpacingControl
                                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                                    value={playPadding}
                                                    onChange={(value) => setAttributes({ playPadding: value })}
                                                    showUnits={true}
                                                    responsive={true}
                                                />
                                            </Fragment>
                                        )}
                                    </PanelBody>
                                </Fragment>
                            )}
                            <PanelBody
                                title={__("Video Description", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={videoDescTypography}
                                    onChange={newValue => setAttributes({ videoDescTypography: newValue })}
                                />
                                <PremiumShadow
                                    label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                    value={descShadow}
                                    onChange={(value) => setAttributes({ descShadow: value })}
                                />
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={descPadding}
                                    onChange={(value) => setAttributes({ descPadding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                                onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                                onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                            />
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
            )}
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-video-box ${blockId} video-overlay-${overlay} premium-aspect-ratio-${ratioValue}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                ref={videoboxRef}
                data-type={videoType}
                style={{
                    ...borderCss(boxBorder, props.deviceType),
                    boxShadow: `${boxShadow.horizontal || 0}px ${boxShadow.vertical ||
                        0}px ${boxShadow.blur || 10}px ${boxShadow.color} ${boxShadow.position}`,
                }}
            >
                <div >
                    {
                        !videoURL && "self" !== videoType && (
                            <Placeholder
                                label={__('Video Box ', 'premium-blocks-for-gutenberg')}
                                instructions={__(
                                    "Enter video ID, for example: z1hQgVpfTKU or Embed URL", 'premium-blocks-for-gutenberg'
                                )}
                                className={className}
                            >
                                <form onSubmit={() => setAttributes({ videoURL: url })}>
                                    <input
                                        type="url"
                                        value={url}
                                        className="components-placeholder__input"
                                        aria-label={__('Video Box', 'premium-blocks-for-gutenberg')}
                                        placeholder={__('Enter URL to embed here…', 'premium-blocks-for-gutenberg')}
                                        onChange={e => setUrl(e.target.value)}
                                    />
                                    <Button
                                        isPrimary
                                        disabled={!url}
                                        type="submit"
                                    >
                                        {__('Embed', 'premium-blocks-for-gutenberg')}
                                    </Button>
                                </form>
                            </Placeholder>
                        )

                    }
                    {
                        !videoURL && "self" === videoType && (
                            <p>{__('Please Click Insert to Select Video ', "premium-blocks-for-gutenberg")}</p>
                        )
                    }
                    {videoURL && (
                        <div>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: loadStyles()
                                }}
                            />
                            <div className={`premium-video-box__container`}>
                                <div>
                                    <div className={`premium-video-box-inner-wrap`}>
                                        <div className={`premium-video-box-video-container`}>
                                            {
                                                "self" !== videoType && (
                                                    <iframe
                                                        src={`${onChangeVideoURL(videoType, videoURL)}?autoplay=${overlay ? 0 : autoPlay
                                                            }&loop=${loopVideo()}&mute${"vimeo" == videoType ? "d" : ""
                                                            }=${mute}&rel="0"&controls=${controls ? "1" : "0"
                                                            }`}
                                                        frameborder="0"
                                                        gesture="media"
                                                        allow="encrypted-media"
                                                        allowfullscreen
                                                    />
                                                )
                                            }
                                            {"self" === videoType && (
                                                <video
                                                    src={videoURL}
                                                    loop={loop ? true : false}
                                                    muted={mute ? true : false}
                                                    autoplay={overlay ? false : autoPlay}
                                                    controls={controls ? true : false}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {overlay && overlayStyles[0].overlayImgURL && (
                                <div
                                    className={`premium-video-box__overlay`}
                                    style={{
                                        backgroundImage: `url('${overlayStyles[0].overlayImgURL}')`,
                                        filter: `brightness( ${overlayFilter.bright}% ) contrast( ${overlayFilter.contrast}% ) saturate( ${overlayFilter.saturation}% ) blur( ${overlayFilter.blur}px ) hue-rotate( ${overlayFilter.hue}deg )`
                                    }}
                                />
                            )}
                            {overlay && playIcon && !overlayStyles[0].overlayImgURL && <DefaultImage className="premium-video-box-image-container" />}
                            {overlay && playIcon && (
                                <div
                                    className={`premium-video-box__play`}
                                    style={{
                                        ...borderCss(playBorder, props.deviceType),
                                        ...paddingCss(playPadding, props.deviceType),
                                        top: playStyles[0].playTop + "%",
                                        left: playLeft + "%",
                                        color: playStyles[0].playColor,
                                        backgroundColor: playStyles[0].playBack,
                                    }}
                                >
                                    <i
                                        className={`premium-video-box__play_icon dashicons dashicons-controls-play`}
                                        style={{
                                            fontSize: playStyles[0].playSize + "px"
                                        }}
                                    />
                                </div>
                            )}
                            <div
                                className={`premium-video-box__desc`}
                                style={{
                                    ...paddingCss(descPadding, props.deviceType),
                                    backgroundColor: descStyles[0].videoDescBack,
                                    borderRadius: descStyles[0].videoDescBorderRadius,
                                    top: descStyles[0].descTop + "%",
                                    left: descStyles[0].descLeft + "%"
                                }}
                            >
                                <RichText
                                    tagName="p"
                                    className={`premium-video-box__desc_text`}
                                    value={descStyles[0].videoDescText}
                                    placeholder="Add caption"
                                    onChange={newText => saveDescritionStyle({ videoDescText: newText })}
                                    style={{
                                        ...typographyCss(videoDescTypography, props.deviceType),
                                        color: descStyles[0].videoDescColor,
                                        textShadow: `${descShadow.horizontal}px ${descShadow.vertical}px ${descShadow.blur}px ${descShadow.color}`
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            </div>
                        </div>
                    )}
                    {loadDescriptionGoogleFonts}
                </div>
            </div>
        </Fragment>
    );
}
export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)