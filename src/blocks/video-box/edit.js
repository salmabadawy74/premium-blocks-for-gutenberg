import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";
import onChangeVideoURL from "./index";
import FONTS from "../../components/premium-fonts";
import PremiumMediaUpload from "../../components/premium-media-upload";
import styling from './styling';
import PremiumBackground from "../../components/premium-background";
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";

const {
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    TextareaControl,
    ToggleControl,
    TabPanel,
} = wp.components;

const { Component, Fragment } = wp.element;

const { InspectorControls, ColorPalette } = wp.blockEditor;

const { __ } = wp.i18n;

let isBoxUpdated = null;

class edit extends Component {
    constructor() {
        super(...arguments);

        this.initVideoBox = this.initVideoBox.bind(this);
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId })
        if (!attributes.videoBoxId) {
            setAttributes({ videoBoxId: "premium-video-box-" + clientId });
        }
        this.props.setAttributes({ classMigrate: true });
        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-videoBox-" + this.props.clientId.substr(0, 6)
        );
        document.head.appendChild($style);
        this.initVideoBox();
    }

    componentDidUpdate() {
        clearTimeout(isBoxUpdated);
        isBoxUpdated = setTimeout(this.initVideoBox, 500);
    }

    initVideoBox() {

        const { videoBoxId } = this.props.attributes;

        if (!videoBoxId) return null;

        let videoBox = document.getElementById(videoBoxId),
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

    render() {
        const { isSelected, setAttributes, className, clientId } = this.props;

        const {
            block_id,
            borderPlayUpdated,
            borderBoxUpdated,
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
            classMigrate,
            hideDesktop,
            hideTablet,
            hideMobile,
            colorStyles,
            boxStyles,
            overlayStyles,
            playStyles,
            descStyles
        } = this.props.attributes;

        const TYPE = [
            {
                value: "youtube",
                label: __("Youtube")
            },
            {
                value: "vimeo",
                label: __("Vimeo")
            },
            {
                value: "daily",
                label: __("Daily Motion")
            },
            {
                value: "self",
                label: __("Self Hosted")
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

        const addFontToHead = fontFamily => {
            const head = document.head;
            const link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href =
                "https://fonts.googleapis.com/css2?family=" +
                fontFamily.replace(/\s/g, '+').replace(/\"/g, "") + "&display=swap";
            head.appendChild(link);
        };

        const onChangeDescFamily = fontFamily => {
            setAttributes({ videoDescFamily: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        let element = document.getElementById(
            "premium-style-videoBox-" + clientId.substr(0, 6)
        );
        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }
        const mainClasses = classnames(className, "premium-video-box");

        const changeVideoType = (newvalue) => {
            if (newvalue === "self") {
                setAttributes({ videoURL: "" })
            }
            setAttributes({ videoType: newvalue })
        }

        return [
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <PanelBody
                        title={__("Video")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <SelectControl
                            label={__("Video Type")}
                            options={TYPE}
                            value={videoType}
                            onChange={changeVideoType}
                        />
                        {"self" !== videoType && (
                            <TextControl
                                className="premium-text-control"
                                label={__("Video URL")}
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
                            label={__("Autoplay")}
                            checked={autoPlay}
                            onChange={newCheck => setAttributes({ autoPlay: newCheck })}
                            help={__(
                                "This option effect works when Overlay Image option is disabled"
                            )}
                        />
                        {"daily" !== videoType && (
                            <ToggleControl
                                label={__("Loop")}
                                checked={loop}
                                onChange={newCheck => setAttributes({ loop: newCheck })}
                            />
                        )}
                        <ToggleControl
                            label={__("Mute")}
                            checked={mute}
                            onChange={newCheck => setAttributes({ mute: newCheck })}
                        />
                        {"vimeo" !== videoType && (
                            <ToggleControl
                                label={__("Player Controls")}
                                checked={controls}
                                onChange={newCheck => setAttributes({ controls: newCheck })}
                            />
                        )}
                        {"youtube" === videoType && (
                            <ToggleControl
                                label={__("Show Related Videos")}
                                checked={relatedVideos}
                                onChange={newCheck =>
                                    setAttributes({ relatedVideos: newCheck })
                                }
                            />
                        )}
                        <ToggleControl
                            label={__("Overlay Image")}
                            checked={overlay}
                            onChange={newCheck => setAttributes({ overlay: newCheck })}
                        />
                    </PanelBody>
                    {overlay && (
                        <PanelBody
                            title={__("Overlay")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumMediaUpload
                                type="image"
                                imageID={overlayImgID}
                                imageURL={overlayImgURL}
                                onSelectMedia={media => {
                                    setAttributes({
                                        overlayImgID: media.id,
                                        overlayImgURL: media.url
                                    });
                                }}
                                onRemoveImage={() =>
                                    setAttributes({
                                        overlayImgID: "",
                                        overlayImgURL: ""
                                    })
                                }
                            />

                            <PremiumFilters
                                blur={blur}
                                bright={bright}
                                contrast={contrast}
                                saturation={saturation}
                                hue={hue}
                                onChangeBlur={value =>
                                    setAttributes({ blur: value === undefined ? 0 : value })
                                }
                                onChangeBright={value =>
                                    setAttributes({
                                        bright: value === undefined ? 100 : value
                                    })
                                }
                                onChangeContrast={value =>
                                    setAttributes({
                                        contrast: value === undefined ? 100 : value
                                    })
                                }
                                onChangeSat={value =>
                                    setAttributes({
                                        saturation: value === undefined ? 100 : value
                                    })
                                }
                                onChangeHue={value =>
                                    setAttributes({ hue: value === undefined ? 100 : value })
                                }
                            />
                        </PanelBody>
                    )}
                    {overlay && (
                        <Fragment>
                            <PanelBody
                                title={__("Play Icon")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ToggleControl
                                    label={__("Enable Play Icon")}
                                    checked={playIcon}
                                    onChange={newCheck => setAttributes({ playIcon: newCheck })}
                                />
                                {playIcon && (
                                    <Fragment>
                                        <RangeControl
                                            label={__("Size (PX)")}
                                            value={playSize}
                                            onChange={newValue =>
                                                setAttributes({
                                                    playSize: newValue === undefined ? 20 : newValue
                                                })
                                            }
                                        />

                                        <RangeControl
                                            label={__("Vertical Offset (%)")}
                                            value={playTop}
                                            onChange={newValue =>
                                                setAttributes({
                                                    playTop: newValue === undefined ? 50 : newValue
                                                })
                                            }
                                        />
                                        <PremiumBorder
                                            borderType={playBorderType}
                                            borderWidth={playBorderWidth}
                                            top={playBorderTop}
                                            right={playBorderRight}
                                            bottom={playBorderBottom}
                                            left={playBorderLeft}
                                            borderColor={playBorderColor}
                                            borderRadius={playBorderRadius}
                                            onChangeType={(newType) =>
                                                setAttributes({ playBorderType: newType })
                                            }
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    borderPlayUpdated: true,
                                                    playBorderTop: top,
                                                    playBorderRight: right,
                                                    playBorderBottom: bottom,
                                                    playBorderLeft: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) =>
                                                setAttributes({ playBorderColor: colorValue.hex })
                                            }
                                            onChangeRadius={(newrRadius) =>
                                                setAttributes({ playBorderRadius: newrRadius })
                                            }
                                        />
                                        <RangeControl
                                            label={__("Padding (PX)")}
                                            value={playPadding}
                                            onChange={newValue =>
                                                setAttributes({
                                                    playPadding: newValue === undefined ? 20 : newValue
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                            </PanelBody>
                            <PanelBody
                                title={__("Video Description")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ToggleControl
                                    label={__("Enable Video Description")}
                                    checked={videoDesc}
                                    onChange={newCheck => setAttributes({ videoDesc: newCheck })}
                                />
                                {videoDesc && (
                                    <Fragment>
                                        <TextareaControl
                                            label={__("Description Text")}
                                            value={videoDescText}
                                            onChange={newText =>
                                                setAttributes({ videoDescText: newText })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Font Family")}
                                            value={videoDescFamily}
                                            options={FONTS}
                                            onChange={onChangeDescFamily}
                                        />
                                        <PremiumTypo
                                            components={[
                                                "responsiveSize",
                                                "weight",
                                                "style",
                                                "upper",
                                                "spacing",
                                            ]}
                                            setAttributes={setAttributes}
                                            fontSizeType={{
                                                value: videoDescSizeUnit,
                                                label: __("videoDescSizeUnit"),
                                            }}
                                            fontSize={{
                                                value: videoDescSize,
                                                label: __("videoDescSize"),
                                            }}
                                            fontSizeMobile={{
                                                value: videoDescSizeMobile,
                                                label: __("videoDescSizeMobile"),
                                            }}
                                            fontSizeTablet={{
                                                value: videoDescSizeTablet,
                                                label: __("videoDescSizeTablet"),
                                            }}
                                            weight={videoDescWeight}
                                            onChangeWeight={newWeight =>
                                                setAttributes({ videoDescWeight: newWeight })
                                            }
                                            style={videoDescStyle}
                                            spacing={videoDescLetter}
                                            upper={videoDescUpper}
                                            onChangeStyle={newStyle =>
                                                setAttributes({ videoDescStyle: newStyle })
                                            }
                                            onChangeSpacing={newValue =>
                                                setAttributes({ videoDescLetter: newValue })
                                            }
                                            onChangeUpper={check =>
                                                setAttributes({ videoDescUpper: check })
                                            }
                                        />
                                        <RangeControl
                                            label={__("Vertical Offset (%)")}
                                            value={descTop}
                                            onChange={newValue =>
                                                setAttributes({
                                                    descTop: newValue === undefined ? 50 : newValue
                                                })
                                            }
                                        />
                                        <RangeControl
                                            label={__("Border Radius (px)")}
                                            value={videoDescBorderRadius}
                                            onChange={newValue =>
                                                setAttributes({
                                                    videoDescBorderRadius:
                                                        newValue === undefined ? 0 : newValue
                                                })
                                            }
                                        />
                                        <PremiumTextShadow
                                            color={descShadowColor}
                                            blur={descShadowBlur}
                                            horizontal={descShadowHorizontal}
                                            vertical={descShadowVertical}
                                            onChangeColor={newColor =>
                                                setAttributes({
                                                    descShadowColor: newColor.hex || "transparent"
                                                })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({ descShadowBlur: newBlur || "0" })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({
                                                    descShadowHorizontal: newValue || "0"
                                                })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({ descShadowVertical: newValue || "0" })
                                            }
                                        />
                                        <RangeControl
                                            label={__("Padding (PX)")}
                                            value={videoDescPadding}
                                            onChange={newValue =>
                                                setAttributes({
                                                    videoDescPadding:
                                                        newValue === undefined ? 20 : newValue
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                            </PanelBody>
                        </Fragment>
                    )}
                    <PanelBody
                        title={__("Colors")}
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
                                            <p>{__("Icon Color")}</p>
                                            <ColorPalette
                                                value={playColor}
                                                onChange={newValue =>
                                                    setAttributes({
                                                        playColor: newValue,
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Icon Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={
                                                    playBack
                                                }
                                                onChangeColor={newvalue => {
                                                    setAttributes({ playBack: newvalue })
                                                }}
                                                opacityValue={
                                                    playOpacity
                                                }
                                                onChangeOpacity={value => {
                                                    setAttributes({ playOpacity: value })
                                                }}
                                            />
                                            {videoDesc && (
                                                <Fragment>
                                                    <p>{__("Description Color")}</p>
                                                    <ColorPalette
                                                        value={videoDescColor}
                                                        onChange={newValue =>
                                                            setAttributes({
                                                                videoDescColor: newValue,
                                                            })
                                                        }
                                                        allowReset={true}
                                                    />
                                                    <p>{__("Description Background Color")}</p>
                                                    <PremiumBackground
                                                        type="color"
                                                        colorValue={
                                                            videoDescBack
                                                        }
                                                        onChangeColor={newvalue => {
                                                            setAttributes({
                                                                videoDescBack: newvalue,
                                                            })
                                                        }}
                                                        opacityValue={
                                                            videoDescOpacity
                                                        }
                                                        onChangeOpacity={value => {
                                                            setAttributes({
                                                                videoDescOpacity: value,
                                                            })
                                                        }}
                                                    />
                                                </Fragment>
                                            )}
                                        </Fragment>
                                    );
                                }
                                if ("hover" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <p>{__("Icon Hover Color")}</p>
                                            <ColorPalette
                                                value={playHoverColor}
                                                onChange={newValue =>
                                                    setAttributes({
                                                        playHoverColor: newValue,
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Icon Hover Background Color")}</p>
                                            <ColorPalette
                                                value={playHoverBackColor}
                                                onChange={newValue =>
                                                    setAttributes({
                                                        playHoverBackColor: newValue,
                                                    })
                                                }
                                                allowReset={true}
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
                        title={__("Box Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumBorder
                            borderType={boxBorderType}
                            borderWidth={boxBorderWidth}
                            top={boxBorderTop}
                            right={boxBorderRight}
                            bottom={boxBorderBottom}
                            left={boxBorderLeft}
                            borderColor={boxBorderColor}
                            borderRadius={boxBorderRadius}
                            onChangeType={(newType) =>
                                setAttributes({ boxBorderType: newType })
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    borderBoxUpdated: true,
                                    boxBorderTop: top,
                                    boxBorderRight: right,
                                    boxBorderBottom: bottom,
                                    boxBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ boxBorderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ boxBorderRadius: newrRadius })
                            }
                        />
                        <PremiumBoxShadow
                            inner={true}
                            color={shadowColor}
                            blur={shadowBlur}
                            horizontal={shadowHorizontal}
                            vertical={shadowVertical}
                            position={shadowPosition}
                            onChangeColor={newColor =>
                                setAttributes({
                                    shadowColor:
                                        newColor === undefined ? "transparent" : newColor.hex
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    shadowBlur: newBlur === undefined ? 0 : newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    shadowHorizontal: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    shadowVertical: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangePosition={newValue =>
                                setAttributes({
                                    shadowPosition: newValue === undefined ? 0 : newValue
                                })
                            }
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
                id={videoBoxId}
                className={`${mainClasses} video-overlay-${overlay} premium-video-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                data-type={videoType}
                style={{
                    borderStyle: boxStyles[0].boxBorderType,
                    borderWidth: borderBoxUpdated
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
                            `color: ${colorStyles[0].playHoverColor} !important;`,
                            `background-color: ${colorStyles[0].playHoverBackColor} !important;`,
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
                            color: colorStyles[0].playColor,
                            backgroundColor: colorStyles[0].playBack
                                ? hexToRgba(colorStyles[0].playBack, colorStyles[0].playOpacity)
                                : "transparent",
                            borderStyle: playStyles[0].playBorderType,
                            borderWidth: borderPlayUpdated
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
                            color: videoDescColor,
                            backgroundColor: colorStyles[0].videoDescBack
                                ? hexToRgba(colorStyles[0].videoDescBack, colorStyles[0].videoDescOpacity)
                                : "transparent",
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
                                textShadow: `${descStyles[0].descShadowHorizontal}px ${descStyles[0].descShadowVertical}px ${descStyles[0].descShadowBlur}px ${descStyles[0].descStyles[0].descShadowColor}`,
                                fontStyle: descStyles[0].videoDescStyle
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
