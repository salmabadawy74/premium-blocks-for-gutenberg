import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";
import onChangeVideoURL from "./index";
import PremiumMediaUpload from "../../components/premium-media-upload";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl /single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'

const { withSelect } = wp.data

const {
    PanelBody,
    SelectControl,
    TextControl,
    TextareaControl,
    ToggleControl,
    TabPanel,
} = wp.components;

const { Component, Fragment } = wp.element;

const { InspectorControls } = wp.blockEditor;

const { __ } = wp.i18n;

let isBoxUpdated = null;

class edit extends Component {
    constructor() {
        super(...arguments);
        this.initVideoBox = this.initVideoBox.bind(this);
        this.getPreviewSize = this.getPreviewSize.bind(this);
        this.videoboxRef = React.createRef()
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId })
        if (!attributes.videoBoxId) {
            setAttributes({ videoBoxId: "premium-video-box-" + clientId });
        }
        this.props.setAttributes({ classMigrate: true });
        this.initVideoBox();
    }

    componentDidUpdate() {
        clearTimeout(isBoxUpdated);
        isBoxUpdated = setTimeout(this.initVideoBox, 500);
    }

    initVideoBox() {
        const { videoBoxId } = this.props.attributes;
        if (!videoBoxId) return null;
        let videoBox = this.videoboxRef.current,
            video, src;
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
                } else {
                    videoBox
                        .getElementsByClassName("premium-video-box__overlay")[0]
                        .remove();
                    video.play();
                }
            }, 300);
        });
    }

    getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
        if (device === 'Mobile') {
            if (undefined !== mobileSize && '' !== mobileSize) {
                return mobileSize;
            } else if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        } else if (device === 'Tablet') {
            if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        }
        return desktopSize;
    }

    render() {
        const { isSelected, setAttributes, className, clientId } = this.props;

        const {
            block_id,
            videoBoxId,
            videoType,
            videoURL,
            videoID,
            autoPlay,
            loop,
            controls,
            relatedVideos,
            mute,
            overlay,
            videoDesc,
            playIcon,
            playLeft,
            hideDesktop,
            hideTablet,
            hideMobile,
            boxStyles,
            overlayStyles,
            playStyles,
            descStyles
        } = this.props.attributes;

        const TYPE = [
            {
                value: "youtube",
                label: __("Youtube", 'premium-block-for-gutenberg')
            },
            {
                value: "vimeo",
                label: __("Vimeo", 'premium-block-for-gutenberg')
            },
            {
                value: "daily",
                label: __("Daily Motion", 'premium-block-for-gutenberg')
            },
            {
                value: "self",
                label: __("Self Hosted", 'premium-block-for-gutenberg')
            }
        ];

        const loopVideo = () => {
            if ("youtube" === videoType) {
                if (videoURL.startsWith("http")) {
                    return loop
                        ? `1&playlist=${videoURL.replace(
                            "https://www.youtube.com/embed/",
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

        const getHelp = Type => {
            switch (Type) {
                case "youtube":
                    return __(
                        "Enter video ID, for example: z1hQgVpfTKU or Embed URL, for example: https://www.youtube.com/embed/07d2dXHYb94"
                    );
                case "vimeo":
                    return __(
                        "Enter video ID, for example: 243244233 or Embed URL, for example: https://player.vimeo.com/video/243244233"
                    );
                case "daily":
                    return __(
                        "Enter video ID, for example: x5gifqg or Embed URL, for example: https://dailymotion.com/embed/video/x5gifqg"
                    );
            }
        };

        const mainClasses = classnames(className, "premium-video-box");

        const changeVideoType = (newvalue) => {
            if (newvalue === "self") {
                setAttributes({ videoURL: "" })
            }
            setAttributes({ videoType: newvalue })
        }
        const textSize = this.getPreviewSize(this.props.deviceType, descStyles[0].videoDescSize, descStyles[0].videoDescSizeTablet, descStyles[0].videoDescSizeMobile);

        const saveBoxStyle = (value) => {
            const newUpdate = boxStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ boxStyles: newUpdate });
        };

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
            const newUpdate = playStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ playStyles: newUpdate });
        };

        const saveDescritionStyle = (value) => {
            const newUpdate = descStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ descStyles: newUpdate });
        };

        return [
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <PanelBody
                        title={__("Video", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <SelectControl
                            label={__("Video Type", 'premium-block-for-gutenberg')}
                            options={TYPE}
                            value={videoType}
                            onChange={changeVideoType}
                        />
                        {"self" !== videoType && (
                            <TextControl
                                className="premium-text-control"
                                label={__("Video URL", 'premium-block-for-gutenberg')}
                                value={videoURL}
                                placeholder={__("Enter Video ID, Embed URL or Video URL")}
                                onChange={newURL => setAttributes({ videoURL: newURL })}
                                help={getHelp(videoType)}
                            />
                        )}
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
                            label={__("Autoplay", 'premium-block-for-gutenberg')}
                            checked={autoPlay}
                            onChange={newCheck => setAttributes({ autoPlay: newCheck })}
                            help={__(
                                "This option effect works when Overlay Image option is disabled", 'premium-block-for-gutenberg'
                            )}
                        />
                        {"daily" !== videoType && (
                            <ToggleControl
                                label={__("Loop", 'premium-block-for-gutenberg')}
                                checked={loop}
                                onChange={newCheck => setAttributes({ loop: newCheck })}
                            />
                        )}
                        <ToggleControl
                            label={__("Mute", 'premium-block-for-gutenberg')}
                            checked={mute}
                            onChange={newCheck => setAttributes({ mute: newCheck })}
                        />
                        {"vimeo" !== videoType && (
                            <ToggleControl
                                label={__("Player Controls", 'premium-block-for-gutenberg')}
                                checked={controls}
                                onChange={newCheck => setAttributes({ controls: newCheck })}
                            />
                        )}
                        {"youtube" === videoType && (
                            <ToggleControl
                                label={__("Show Related Videos", 'premium-block-for-gutenberg')}
                                checked={relatedVideos}
                                onChange={newCheck => setAttributes({ relatedVideos: newCheck })}
                            />
                        )}
                        <ToggleControl
                            label={__("Overlay Image", 'premium-block-for-gutenberg')}
                            checked={overlay}
                            onChange={newCheck => setAttributes({ overlay: newCheck })}
                        />
                    </PanelBody>
                    {overlay && (
                        <PanelBody
                            title={__("Overlay", 'premium-block-for-gutenberg')}
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
                                blur={blur}
                                bright={overlayStyles[0].bright}
                                contrast={overlayStyles[0].contrast}
                                saturation={overlayStyles[0].saturation}
                                hue={overlayStyles[0].hue}
                                onChangeBlur={value => saveOverlayStyles({ blur: value === undefined ? 0 : value })}
                                onChangeBright={value => saveOverlayStyles({ bright: value === undefined ? 100 : value })}
                                onChangeContrast={value => saveOverlayStyles({ contrast: value === undefined ? 100 : value })}
                                onChangeSat={value => saveOverlayStyles({ saturation: value === undefined ? 100 : value })}
                                onChangeHue={value => saveOverlayStyles({ hue: value === undefined ? 100 : value })}
                            />
                        </PanelBody>
                    )}
                    {overlay && (
                        <Fragment>
                            <PanelBody
                                title={__("Play Icon", 'premium-block-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ToggleControl
                                    label={__("Enable Play Icon", 'premium-block-for-gutenberg')}
                                    checked={playIcon}
                                    onChange={newCheck => setAttributes({ playIcon: newCheck })}
                                />
                                {playIcon && (
                                    <Fragment>
                                        <ResponsiveSingleRangeControl
                                            label={__("Size (PX)", 'premium-block-for-gutenberg')}
                                            value={playStyles[0].playSize}
                                            onChange={newValue => savePlayStyles({ playSize: newValue === undefined ? 20 : newValue })}
                                            showUnit={false}
                                            defaultValue={0}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Vertical Offset (%)", 'premium-block-for-gutenberg')}
                                            value={playStyles[0].playTop}
                                            onChange={newValue => savePlayStyles({ playTop: newValue === undefined ? 50 : newValue })}
                                            showUnit={false}
                                            defaultValue={0}
                                        />
                                        <PremiumBorder
                                            borderType={playStyles[0].playBorderType}
                                            borderWidth={playStyles[0].playBorderWidth}
                                            top={playStyles[0].playBorderTop}
                                            right={playStyles[0].playBorderRight}
                                            bottom={playStyles[0].playBorderBottom}
                                            left={playStyles[0].playBorderLeft}
                                            borderColor={playStyles[0].playBorderColor}
                                            borderRadius={playStyles[0].playBorderRadius}
                                            onChangeType={(newType) => savePlayStyles({ playBorderType: newType })}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                savePlayStyles({
                                                    borderPlayUpdated: true,
                                                    playBorderTop: top,
                                                    playBorderRight: right,
                                                    playBorderBottom: bottom,
                                                    playBorderLeft: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) => savePlayStyles({ playBorderColor: colorValue })}
                                            onChangeRadius={(newrRadius) => savePlayStyles({ playBorderRadius: newrRadius })}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Padding (PX)")}
                                            value={playStyles[0].playPadding}
                                            onChange={newValue => savePlayStyles({ playPadding: newValue === undefined ? 20 : newValue })}
                                            showUnit={false}
                                            defaultValue={0}
                                        />
                                    </Fragment>
                                )}
                            </PanelBody>
                            <PanelBody
                                title={__("Video Description", 'premium-block-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ToggleControl
                                    label={__("Enable Video Description", 'premium-block-for-gutenberg')}
                                    checked={videoDesc}
                                    onChange={newCheck => setAttributes({ videoDesc: newCheck })}
                                />
                                {videoDesc && (
                                    <Fragment>
                                        <TextareaControl
                                            label={__("Description Text", 'premium-block-for-gutenberg')}
                                            value={descStyles[0].videoDescText}
                                            onChange={newText => saveDescritionStyle({ videoDescText: newText })}
                                        />

                                        <PremiumTypo
                                            components={[
                                                "responsiveSize",
                                                "weight",
                                                "style",
                                                "upper",
                                                "spacing",
                                                "family"
                                            ]}
                                            setAttributes={saveDescritionStyle}
                                            fontSizeType={{
                                                value: descStyles[0].videoDescSizeUnit,
                                                label: __("videoDescSizeUnit", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSize={descStyles[0].videoDescSize}
                                            fontSizeMobile={descStyles[0].videoDescSizeMobile}
                                            fontSizeTablet={descStyles[0].videoDescSizeTablet}
                                            onChangeSize={newSize => saveDescritionStyle({ videoDescSize: newSize })}
                                            onChangeTabletSize={newSize => saveDescritionStyle({ videoDescSizeTablet: newSize })}
                                            onChangeMobileSize={newSize => saveDescritionStyle({ videoDescSizeMobile: newSize })}
                                            fontFamily={descStyles[0].videoDescFamily}
                                            weight={descStyles[0].videoDescWeight}
                                            onChangeWeight={newWeight =>
                                                saveDescritionStyle({ videoDescWeight: newWeight })
                                            }
                                            style={descStyles[0].videoDescStyle}
                                            spacing={descStyles[0].videoDescLetter}
                                            upper={descStyles[0].videoDescUpper}
                                            onChangeStyle={newStyle => saveDescritionStyle({ videoDescStyle: newStyle })}
                                            onChangeSpacing={newValue => saveDescritionStyle({ videoDescLetter: newValue })}
                                            onChangeUpper={check => saveDescritionStyle({ videoDescUpper: check })}
                                            onChangeFamily={(fontFamily) => saveDescritionStyle({ videoDescFamily: fontFamily })}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Vertical Offset (%)", 'premium-block-for-gutenberg')}
                                            value={descStyles[0].descTop}
                                            onChange={newValue => saveDescritionStyle({ descTop: newValue === undefined ? 50 : newValue })}
                                            showUnit={false}
                                            defaultValue={0}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Border Radius (px)", 'premium-block-for-gutenberg')}
                                            value={descStyles[0].videoDescBorderRadius}
                                            onChange={newValue => saveDescritionStyle({ videoDescBorderRadius: newValue === undefined ? 0 : newValue })}
                                            showUnit={false}
                                            defaultValue={0}
                                        />
                                        <PremiumTextShadow
                                            color={descStyles[0].descShadowColor}
                                            blur={descStyles[0].descShadowBlur}
                                            horizontal={descStyles[0].descShadowHorizontal}
                                            vertical={descStyles[0].descShadowVertical}
                                            onChangeColor={newColor => saveDescritionStyle({ descShadowColor: newColor || "transparent" })}
                                            onChangeBlur={newBlur => saveDescritionStyle({ descShadowBlur: newBlur || "0" })}
                                            onChangehHorizontal={newValue => saveDescritionStyle({ descShadowHorizontal: newValue || "0" })}
                                            onChangeVertical={newValue => saveDescritionStyle({ descShadowVertical: newValue || "0" })}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Padding (PX)", 'premium-block-for-gutenberg')}
                                            value={descStyles[0].videoDescPadding}
                                            onChange={newValue => saveDescritionStyle({ videoDescPadding: newValue === undefined ? 20 : newValue })}
                                            showUnit={false}
                                            defaultValue={0}
                                        />
                                    </Fragment>
                                )}
                            </PanelBody>
                        </Fragment>
                    )}
                    <PanelBody
                        title={__("Colors", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TabPanel
                            className="Premium-color-tabpanel"
                            activeClass="active-tab"
                            tabs={[
                                {
                                    name: "normal",
                                    title: "Normal",
                                    className: "premium-tab",
                                },
                                {
                                    name: "hover",
                                    title: "Hover",
                                    className: "premium-tab",
                                },
                            ]}
                        >
                            {(tab) => {
                                let tabout;
                                if ("normal" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Icon Color", '')}
                                                colorValue={playStyles[0].playColor}
                                                colorDefault={''}
                                                onColorChange={newValue => savePlayStyles({ playColor: newValue, })}
                                            />
                                            <AdvancedPopColorControl
                                                label={__(`Background Color`)}
                                                colorValue={playStyles[0].playBack}
                                                onColorChange={newvalue => { savePlayStyles({ playBack: newvalue }) }}
                                                colorDefault={``}
                                            />
                                            {videoDesc && (
                                                <Fragment>
                                                    <AdvancedPopColorControl
                                                        label={__("Description Color", '')}
                                                        colorValue={descStyles[0].videoDescColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue => setAttributes({ videoDescColor: newValue, })}
                                                    />
                                                    <AdvancedPopColorControl
                                                        label={__(`Background Color`)}
                                                        colorValue={descStyles[0].videoDescBack}
                                                        onColorChange={newvalue => { saveDescritionStyle({ videoDescBack: newvalue, }) }}
                                                        colorDefault={``}
                                                    />
                                                </Fragment>
                                            )}
                                        </Fragment>
                                    );
                                }
                                if ("hover" === tab.name) {
                                    tabout = (
                                        <Fragment>

                                            <AdvancedPopColorControl
                                                label={__("Icon Hover Color", 'premium-block-for-gutenberg')}
                                                colorValue={playStyles[0].playHoverColor}
                                                colorDefault={''}
                                                onColorChange={newValue => savePlayStyles({ playHoverColor: newValue, })}
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Icon Hover Background Color", 'premium-block-for-gutenberg')}
                                                colorValue={playStyles[0].playHoverBackColor}
                                                colorDefault={''}
                                                onColorChange={newValue => savePlayStyles({ playHoverBackColor: newValue, })}
                                            />
                                        </Fragment>
                                    );
                                }
                                return (
                                    <div>
                                        {tabout}
                                        <hr />
                                    </div>
                                );
                            }}
                        </TabPanel>
                    </PanelBody>
                    <PanelBody
                        title={__("Box Style", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumBorder
                            borderType={boxStyles[0].boxBorderType}
                            borderWidth={boxStyles[0].boxBorderWidth}
                            top={boxStyles[0].boxBorderTop}
                            right={boxStyles[0].boxBorderRight}
                            bottom={boxStyles[0].boxBorderBottom}
                            left={boxStyles[0].boxBorderLeft}
                            borderColor={boxStyles[0].boxBorderColor}
                            borderRadius={boxStyles[0].boxBorderRadius}
                            onChangeType={(newType) =>
                                saveBoxStyle({ boxBorderType: newType })
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                saveBoxStyle({
                                    borderBoxUpdated: true,
                                    boxBorderTop: top,
                                    boxBorderRight: right,
                                    boxBorderBottom: bottom,
                                    boxBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) => saveBoxStyle({ boxBorderColor: colorValue })}
                            onChangeRadius={(newrRadius) => saveBoxStyle({ boxBorderRadius: newrRadius })}
                        />
                        <PremiumBoxShadow
                            inner={true}
                            color={boxStyles[0].shadowColor}
                            blur={boxStyles[0].shadowBlur}
                            horizontal={boxStyles[0].shadowHorizontal}
                            vertical={boxStyles[0].shadowVertical}
                            position={boxStyles[0].shadowPosition}
                            onChangeColor={newColor => saveBoxStyle({ shadowColor: newColor === undefined ? "transparent" : newColor })}
                            onChangeBlur={newBlur => saveBoxStyle({ shadowBlur: newBlur === undefined ? 0 : newBlur })}
                            onChangehHorizontal={newValue => saveBoxStyle({ shadowHorizontal: newValue === undefined ? 0 : newValue })}
                            onChangeVertical={newValue => saveBoxStyle({ shadowVertical: newValue === undefined ? 0 : newValue })}
                            onChangePosition={newValue => saveBoxStyle({ shadowPosition: newValue === undefined ? 0 : newValue })}
                        />
                    </PanelBody>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                        onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                        onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                    />
                </InspectorControls>
            ),
            <div
                ref={this.videoboxRef}
                id={videoBoxId}
                className={`${mainClasses} video-overlay-${overlay} premium-video-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                data-type={videoType}
                style={{
                    borderStyle: boxStyles[0].boxBorderType,
                    borderWidth: boxStyles[0].borderBoxUpdated
                        ? `${boxStyles[0].boxBorderTop}px ${boxStyles[0].boxBorderRight}px ${boxStyles[0].boxBorderBottom}px ${boxStyles[0].boxBorderLeft}px`
                        : boxStyles[0].boxBorderWidth + "px",
                    borderRadius: boxStyles[0].boxBorderRadius + "px",
                    borderColor: boxStyles[0].boxBorderColor,
                    boxShadow: `${boxStyles[0].shadowHorizontal}px ${boxStyles[0].shadowVertical}px ${boxStyles[0].shadowBlur}px ${boxStyles[0].shadowColor} ${boxStyles[0].shadowPosition}`
                }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#${videoBoxId} .premium-video-box__play:hover {`,
                            `color: ${playStyles[0].playHoverColor} !important;`,
                            `background-color: ${playStyles[0].playHoverBackColor} !important;`,
                            "}"
                        ].join("\n")
                    }}
                />
                <div className={`premium-video-box__container`}>
                    {"self" !== videoType && (
                        <iframe
                            src={`${onChangeVideoURL(videoType, videoURL)}?autoplay=${overlay ? 0 : autoPlay
                                }&loop=${loopVideo()}&mute${"vimeo" == videoType ? "d" : ""
                                }=${mute}&rel=${relatedVideos ? "1" : "0"}&controls=${controls ? "1" : "0"
                                }`}
                            frameborder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowfullscreen
                        />
                    )}
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
                {overlay && overlayStyles[0].overlayImgURL && (
                    <div
                        className={`premium-video-box__overlay`}
                        style={{
                            backgroundImage: `url('${overlayStyles[0].overlayImgURL}')`,
                            filter: `brightness( ${overlayStyles[0].bright}% ) contrast( ${overlayStyles[0].contrast}% ) saturate( ${overlayStyles[0].saturation}% ) blur( ${overlayStyles[0].blur}px ) hue-rotate( ${overlayStyles[0].hue}deg )`
                        }}
                    />
                )}
                {overlay && playIcon && (
                    <div
                        className={`premium-video-box__play`}
                        style={{
                            top: playStyles[0].playTop + "%",
                            left: playLeft + "%",
                            color: playStyles[0].playColor,
                            backgroundColor: playStyles[0].playBack,
                            borderStyle: playStyles[0].playBorderType,
                            borderWidth: playStyles[0].borderPlayUpdated
                                ? `${playStyles[0].playBorderTop}px ${playStyles[0].playBorderRight}px ${playStyles[0].playBorderBottom}px ${playStyles[0].playBorderLeft}px`
                                : playStyles[0].playBorderWidth + "px",
                            borderRadius: playStyles[0].playBorderRadius + "px",
                            borderColor: playStyles[0].playBorderColor,
                            padding: playStyles[0].playPadding + "px"
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
                {overlay && videoDesc && (
                    <div
                        className={`premium-video-box__desc`}
                        style={{
                            color: descStyles[0].videoDescColor,
                            backgroundColor: descStyles[0].videoDescBack,
                            padding: descStyles[0].videoDescPadding,
                            borderRadius: descStyles[0].videoDescBorderRadius,
                            top: descStyles[0].descTop + "%",
                            left: descStyles[0].descLeft + "%"
                        }}
                    >
                        <p
                            className={`premium-video-box__desc_text`}
                            style={{
                                fontFamily: descStyles[0].videoDescFamily,
                                fontWeight: descStyles[0].videoDescWeight,
                                letterSpacing: descStyles[0].videoDescLetter + "px",
                                textTransform: descStyles[0].videoDescUpper ? "uppercase" : "none",
                                textShadow: `${descStyles[0].descShadowHorizontal}px ${descStyles[0].descShadowVertical}px ${descStyles[0].descShadowBlur}px ${descStyles[0].descShadowColor}`,
                                fontStyle: descStyles[0].videoDescStyle,
                                fontSize: `${textSize}${descStyles[0].videoDescSizeUnit}`
                            }}
                        >
                            <span>{descStyles[0].videoDescText}</span>
                        </p>
                    </div>
                )}
            </div>
        ];

    }
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)