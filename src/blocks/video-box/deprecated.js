import videoBoxAttrs from "./attributes";
import onChangeVideoURL from "./index";
import hexToRgba from 'hex-to-rgba'

const className = "premium-video-box";
const { __ } = wp.i18n;

const attributes = {
    block_id: {
        type: 'string'
    },
    borderPlayUpdated: {
        type: "boolean",
        default: false
    },
    borderBoxUpdated: {
        type: "boolean",
        default: false
    },
    videoBoxId: {
        type: "string"
    },
    videoType: {
        type: "string",
        default: "youtube"
    },
    videoURL: {
        type: "string",
        default: "07d2dXHYb94"
    },
    videoID: {
        type: "string"
    },
    autoPlay: {
        type: "boolean",
        default: false
    },
    loop: {
        type: "boolean",
        default: false
    },
    controls: {
        type: "boolean",
        default: true
    },
    relatedVideos: {
        type: "boolean",
        default: false
    },
    mute: {
        type: "boolean",
        default: false
    },
    overlay: {
        type: "boolean",
        default: false
    },
    overlayImgID: {
        type: "string"
    },
    overlayImgURL: {
        type: "string"
    },
    blur: {
        type: "number",
        default: 0
    },
    bright: {
        type: "number",
        default: 100
    },
    contrast: {
        type: "number",
        default: 100
    },
    saturation: {
        type: "number",
        default: 100
    },
    hue: {
        type: "number",
        default: 0
    },
    playTop: {
        type: "number"
    },
    playIcon: {
        type: "boolean",
        default: true
    },
    playSize: {
        type: "number"
    },
    playColor: {
        type: "string"
    },
    playBack: {
        type: "string"
    },
    playOpacity: {
        type: "number",
        default: "1"
    },
    playHoverColor: {
        type: "string"
    },
    playHoverBackColor: {
        type: "string"
    },
    playPadding: {
        type: "number"
    },
    playBorderType: {
        type: "string",
        default: "none"
    },
    playBorderWidth: {
        type: "number",
        default: "1"
    },
    playBorderRadius: {
        type: "number"
    },
    playBorderColor: {
        type: "string"
    },
    videoDescText: {
        type: "string"
    },
    videoDesc: {
        type: "boolean"
    },
    descLeft: {
        type: "number"
    },
    descTop: {
        type: "number"
    },
    videoDescSize: {
        type: "number"
    },
    videoDescSizeUnit: {
        type: "string",
        default: 'px'
    },
    videoDescSizeMobile: {
        type: 'number'
    },
    videoDescSizeTablet: {
        type: 'number'
    },
    videoDescFamily: {
        type: "string"
    },
    videoDescWeight: {
        type: "number"
    },
    videoDescLetter: {
        type: "number"
    },
    videoDescStyle: {
        type: "string"
    },
    videoDescUpper: {
        type: "boolean"
    },
    videoDescColor: {
        type: "string"
    },
    videoDescBack: {
        type: "string"
    },
    videoDescOpacity: {
        type: "number",
        default: "1"
    },
    videoDescPadding: {
        type: "number"
    },
    videoDescBorderRadius: {
        type: "number"
    },
    descShadowColor: {
        type: "string"
    },
    descShadowBlur: {
        type: "number",
        default: "0"
    },
    descShadowHorizontal: {
        type: "number",
        default: "0"
    },
    descShadowVertical: {
        type: "number",
        default: "0"
    },
    boxBorderType: {
        type: "string",
        default: "none"
    },
    boxBorderWidth: {
        type: "number",
        default: "1"
    },
    boxBorderTop: {
        type: "number"
    },
    boxBorderRight: {
        type: "number"
    },
    boxBorderBottom: {
        type: "number"
    },
    boxBorderLeft: {
        type: "number"
    },
    playBorderTop: {
        type: "number"
    },
    playBorderRight: {
        type: "number"
    },
    playBorderBottom: {
        type: "number"
    },
    playBorderLeft: {
        type: "number",
    },
    boxBorderRadius: {
        type: "number"
    },
    boxBorderColor: {
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    shadowPosition: {
        type: "string",
        default: ""
    },

    // Old props
    playLeft: {
        type: "number"
    },
    classMigrate: {
        type: 'boolean',
        default: false
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    }
}
const new_Attributes = {
    boxStyles: {
        type: 'array',
        default: [
            {
                boxBorderType: 'none',
                boxBorderWidth: 1,
                boxBorderTop: '',
                boxBorderRight: '',
                boxBorderBottom: '',
                boxBorderLeft: '',
                boxBorderRadius: '',
                boxBorderColor: '',
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: '',
                shadowPosition: '',
                borderBoxUpdated: false
            }
        ]
    },
    overlayStyles: {
        type: 'array',
        default: [
            {
                overlayImgID: '',
                overlayImgURL: '',
                blur: 0,
                bright: 100,
                contrast: 100,
                saturation: 100,
                hue: 0,
            }
        ]
    },
    playStyles: {
        type: 'array',
        default: [
            {
                playTop: '',
                playSize: '',
                playPadding: '',
                playBorderType: 'none',
                playBorderWidth: 1,
                playBorderRadius: '',
                playBorderColor: '',
                playBorderTop: '',
                playBorderRight: '',
                playBorderBottom: '',
                playBorderLeft: '',
                playColor: '',
                playBack: '',
                playOpacity: 1,
                playHoverColor: '',
                playHoverBackColor: '',
                borderPlayUpdated: false

            }
        ]

    },
    descStyles: {
        type: 'array',
        default: [
            {
                videoDescText: '',
                videoDescFamily: __('Default'),
                videoDescSize: '',
                videoDescSizeUnit: 'px',
                videoDescSizeMobile: '',
                videoDescSizeTablet: '',
                videoDescWeight: '',
                videoDescLetter: '',
                videoDescStyle: '',
                videoDescUpper: false,
                videoDescPadding: '',
                videoDescBorderRadius: '',
                descShadowColor: '',
                descShadowBlur: 0,
                descShadowHorizontal: 0,
                descShadowVertical: 0,
                descLeft: '',
                descTop: '',
                videoDescColor: '',
                videoDescBack: '',
                videoDescOpacity: 1,
            }
        ]
    }
}
const new_deprecated_Attributes = {
    ratioValue: {
        type: "string",
        default: '169'
    }
}
const deprecated_attributes = Object.assign(attributes, new_Attributes)
const deprecated_attributes_1_2 = Object.assign(deprecated_attributes, new_deprecated_Attributes)
const deprecatedContent = [
    {
        attributes: deprecated_attributes,
        migrate: (attributes) => {
            let newAttributes = {
                blockId: attributes.block_id ? `premium-video-box-${attributes.block_id.split('-')[6]}` : '',
                videoDescTypography: {
                    'fontWeight': attributes.descStyles[0].videoDescWeight,
                    'fontStyle': attributes.descStyles[0].videoDescStyle,
                    'textTransform': attributes.descStyles[0].videoDescUpper,
                    'letterSpacing': attributes.descStyles[0].videoDescLetter,
                    'fontFamily': attributes.descStyles[0].videoDescFamily,
                    'lineHeight': '',
                    'fontSize': {
                        'Desktop': attributes.descStyles[0].videoDescSize,
                        "Tablet": attributes.descStyles[0].videoDescSizeTablet,
                        "Mobile": attributes.descStyles[0].videoDescSizeMobile,
                        'unit': attributes.descStyles[0].videoDescSizeUnit,
                    }
                },
                playBorder: {
                    borderColor: attributes.playStyles[0].playBorderColor,
                    borderType: attributes.playStyles[0].playBorderType,
                    borderRadius: {
                        "Desktop": {
                            top: attributes.playStyles[0].playBorderRadius,
                            right: attributes.playStyles[0].playBorderRadius,
                            bottom: attributes.playStyles[0].playBorderRadius,
                            left: attributes.playStyles[0].playBorderRadius,
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    },
                    borderWidth: {
                        "Desktop": {
                            top: attributes.playStyles[0].borderBoxUpdated ? attributes.playStyles[0].boxBorderTop : attributes.playStyles[0].boxBorderWidth,
                            right: attributes.playStyles[0].borderBoxUpdated ? attributes.playStyles[0].playBorderRight : attributes.playStyles[0].boxBorderWidth,
                            bottom: attributes.playStyles[0].borderBoxUpdated ? attributes.playStyles[0].playBorderBottom : attributes.playStyles[0].boxBorderWidth,
                            left: attributes.playStyles[0].borderBoxUpdated ? attributes.playStyles[0].playBorderLeft : attributes.playStyles[0].boxBorderWidth
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    }
                },
                boxBorder: {
                    borderColor: attributes.boxStyles[0].boxBorderColor,
                    borderType: attributes.boxStyles[0].boxBorderType,
                    borderRadius: {
                        "Desktop": {
                            top: attributes.boxStyles[0].boxBorderRadius,
                            right: attributes.boxStyles[0].boxBorderRadius,
                            bottom: attributes.boxStyles[0].boxBorderRadius,
                            left: attributes.boxStyles[0].boxBorderRadius,
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    },
                    borderWidth: {
                        "Desktop": {
                            top: attributes.boxStyles[0].borderBoxUpdated ? attributes.boxStyles[0].boxBorderTop : attributes.boxStyles[0].boxBorderWidth,
                            right: attributes.boxStyles[0].borderBoxUpdated ? attributes.boxStyles[0].boxBorderRight : attributes.boxStyles[0].boxBorderWidth,
                            bottom: attributes.boxStyles[0].borderBoxUpdated ? attributes.boxStyles[0].boxBorderBottom : attributes.boxStyles[0].boxBorderWidth,
                            left: attributes.boxStyles[0].borderBoxUpdated ? attributes.boxStyles[0].boxBorderLeft : attributes.boxStyles[0].boxBorderWidth
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    }
                },
                playPadding: {
                    "Desktop": {
                        top: attributes.playStyles[0].playPadding,
                        right: attributes.playStyles[0].playPadding,
                        bottom: attributes.playStyles[0].playPadding,
                        left: attributes.playStyles[0].playPadding
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    unit: "px"
                },
                descPadding: {
                    "Desktop": {
                        top: attributes.descStyles[0].videoDescPadding,
                        right: attributes.descStyles[0].videoDescPadding,
                        bottom: attributes.descStyles[0].videoDescPadding,
                        left: attributes.descStyles[0].videoDescPadding
                    },
                    "Tablet": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    "Mobile": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    unit: 'px'
                },
                descShadow: {
                    'color': attributes.descStyles[0].descShadowColor,
                    'blur': attributes.descStyles[0].descShadowBlur,
                    'horizontal': attributes.descStyles[0].descShadowHorizontal,
                    'vertical': attributes.descStyles[0].descShadowVertical
                },
                boxShadow: {
                    'color': attributes.boxStyles[0].shadowColor,
                    'blur': attributes.boxStyles[0].shadowBlur,
                    'horizontal': attributes.boxStyles[0].shadowHorizontal,
                    'vertical': attributes.boxStyles[0].shadowVertical,
                    'position': attributes.boxStyles[0].shadowPosition
                }
            };
            return Object.assign(attributes, newAttributes)
        },
        save: (props) => {
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
                classMigrate,
                hideDesktop,
                hideTablet,
                hideMobile,
                boxStyles,
                overlayStyles,
                playStyles,
                descStyles,
                ratioValue
            } = props.attributes;

            const loopVideo = () => {
                if (videoURL && "youtube" === videoType) {
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

            const mainClasses = classnames(className, 'premium-video-box');


            return (
                videoURL && (
                    <div
                        id={videoBoxId}
                        className={`${mainClasses} video-overlay-${overlay} premium-video-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile} premium-aspect-ratio-${ratioValue}`}
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
                            <div>
                                <div className={`premium-video-box-inner-wrap`}>
                                    <div className={`premium-video-box-video-container`}>
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
                                </div>
                            </div>
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
                                        fontStyle: descStyles[0].videoDescStyle
                                    }}
                                >
                                    <span>{descStyles[0].videoDescText}</span>
                                </p>
                            </div>
                        )}
                    </div>
                )
            );
        }
    },
    {
        attributes: deprecated_attributes_1_2,
        save: (props) => {
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
                classMigrate,
                hideDesktop,
                hideTablet,
                hideMobile,
                boxStyles,
                overlayStyles,
                playStyles,
                descStyles
            } = props.attributes;

            const loopVideo = () => {
                if (videoURL && "youtube" === videoType) {
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


            return (

                videoURL && (
                    <div
                        id={videoBoxId}
                        className={`${className} video-overlay-${overlay} premium-video-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
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
                                        fontStyle: descStyles[0].videoDescStyle
                                    }}
                                >
                                    <span>{descStyles[0].videoDescText}</span>
                                </p>
                            </div>
                        )}
                    </div>
                )
            );
        }
    },
    {
        attributes: deprecated_attributes,
        save: (props) => {
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
                classMigrate,
                hideDesktop,
                hideTablet,
                hideMobile,
                boxStyles,
                overlayStyles,
                playStyles,
                descStyles
            } = props.attributes;
            const loopVideo = () => {
                if (videoURL && "youtube" === videoType) {
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

            return (
                <div
                    id={videoBoxId}
                    className={`${className} video-overlay-${overlay} premium-video-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
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
                                    fontStyle: descStyles[0].videoDescStyle
                                }}
                            >
                                <span>{descStyles[0].videoDescText}</span>
                            </p>
                        </div>
                    )}
                </div>
            );
        }
    },
    {
        attributes: deprecated_attributes,
        migrate: attributes => {
            let newAttributes = {
                boxStyles: [
                    {
                        boxBorderType: attributes.boxBorderType,
                        boxBorderWidth: attributes.boxBorderWidth,
                        boxBorderTop: attributes.boxBorderTop,
                        boxBorderRight: attributes.boxBorderRight,
                        boxBorderBottom: attributes.boxBorderBottom,
                        boxBorderLeft: attributes.boxBorderLeft,
                        boxBorderRadius: attributes.boxBorderRadius,
                        boxBorderColor: attributes.boxBorderColor,
                        shadowColor: attributes.shadowColor,
                        shadowBlur: attributes.shadowBlur,
                        shadowHorizontal: attributes.shadowHorizontal,
                        shadowVertical: attributes.shadowVertical,
                        shadowPosition: attributes.shadowPosition,
                        borderBoxUpdated: attributes.borderBoxUpdated
                    }
                ],
                overlayStyles: [
                    {
                        overlayImgID: attributes.overlayImgID,
                        overlayImgURL: attributes.overlayImgURL,
                        blur: attributes.blur,
                        bright: attributes.bright,
                        contrast: attributes.contrast,
                        saturation: attributes.saturation,
                        hue: attributes.hue,
                    }
                ],
                playStyles: [
                    {
                        playTop: attributes.playTop,
                        playSize: attributes.playSize,
                        playPadding: attributes.playPadding,
                        playBorderType: attributes.playBorderType,
                        playBorderWidth: attributes.playBorderWidth,
                        playBorderRadius: attributes.playBorderRadius,
                        playBorderColor: attributes.playBorderColor,
                        playBorderTop: attributes.playBorderTop,
                        playBorderRight: attributes.playBorderRight,
                        playBorderBottom: attributes.playBorderBottom,
                        playBorderLeft: attributes.playBorderLeft,
                        playColor: attributes.playColor,
                        playBack: attributes.playBack,
                        playOpacity: attributes.playOpacity,
                        playHoverColor: attributes.playHoverColor,
                        playHoverBackColor: attributes.playHoverBackColor,
                        borderPlayUpdated: attributes.borderPlayUpdated
                    }
                ],
                descStyles: [
                    {
                        videoDescText: attributes.videoDescText,
                        videoDescFamily: attributes.videoDescFamily,
                        videoDescSize: attributes.videoDescSize,
                        videoDescSizeUnit: attributes.videoDescSizeUnit,
                        videoDescSizeMobile: attributes.videoSizeMobile,
                        videoDescSizeTablet: attributes.videoDescSizeTablet,
                        videoDescWeight: attributes.videoDescWeight,
                        videoDescLetter: attributes.videoDescLetter,
                        videoDescStyle: attributes.videoDescStyle,
                        videoDescUpper: attributes.videoDescUpper,
                        videoDescPadding: attributes.videoDescPadding,
                        videoDescBorderRadius: attributes.videoDescBorderRadius,
                        descShadowColor: attributes.descShadowColor,
                        descShadowBlur: attributes.descShadowBlur,
                        descShadowHorizontal: attributes.descShadowHorizontal,
                        descShadowVertical: attributes.descShadowVertical,
                        descLeft: attributes.descLeft,
                        descTop: attributes.descTop,
                        videoDescColor: attributes.videoDescColor,
                        videoDescBack: attributes.videoDescBack,
                        videoDescOpacity: attributes.videoDescOpacity,
                    }
                ]
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const {
                block_id,
                borderPlayUpdated,
                borderBoxUpdated,
                videoBoxId,
                videoType,
                videoURL,
                autoPlay,
                loop,
                mute,
                relatedVideos,
                controls,
                overlay,
                overlayImgURL,
                blur,
                contrast,
                saturation,
                bright,
                hue,
                playTop,
                playLeft,
                playIcon,
                playColor,
                playHoverColor,
                playHoverBackColor,
                playSize,
                playPadding,
                playBack,
                playOpacity,
                playBorderColor,
                playBorderWidth,
                playBorderRadius,
                playBorderType,
                videoDesc,
                descTop,
                descLeft,
                videoDescText,
                videoDescColor,
                videoDescBack,
                videoDescOpacity,
                videoDescPadding,
                videoDescFamily,
                videoDescWeight,
                videoDescLetter,
                videoDescStyle,
                videoDescUpper,
                videoDescBorderRadius,
                descShadowBlur,
                descShadowColor,
                descShadowHorizontal,
                descShadowVertical,
                boxBorderColor,
                boxBorderWidth,
                boxBorderTop,
                boxBorderRight,
                boxBorderBottom,
                boxBorderLeft,
                playBorderTop,
                playBorderRight,
                playBorderBottom,
                playBorderLeft,
                boxBorderRadius,
                boxBorderType,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;

            const loopVideo = () => {
                if (videoURL && "youtube" === videoType) {
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

            return (
                <div
                    id={videoBoxId}
                    className={`${className} video-overlay-${overlay}  premium-video-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    data-type={videoType}
                    style={{
                        borderStyle: boxBorderType,
                        borderWidth: borderBoxUpdated
                            ? `${boxBorderTop}px ${boxBorderRight}px ${boxBorderBottom}px ${boxBorderLeft}px`
                            : boxBorderWidth + "px",
                        borderRadius: boxBorderRadius + "px",
                        borderColor: boxBorderColor,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#${videoBoxId} .premium-video-box__play:hover {`,
                                `color: ${playHoverColor} !important;`,
                                `background-color: ${playHoverBackColor} !important;`,
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
                                controls={controls ? true : false}
                                autoplay={overlay ? false : autoPlay}
                            />
                        )}
                    </div>
                    {overlay && overlayImgURL && (
                        <div
                            className={`premium-video-box__overlay`}
                            style={{
                                backgroundImage: `url('${overlayImgURL}')`,
                                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                            }}
                        />
                    )}
                    {overlay && playIcon && (
                        <div
                            className={`premium-video-box__play`}
                            style={{
                                top: playTop + "%",
                                left: playLeft + "%",
                                color: playColor,
                                backgroundColor: playBack ? hexToRgba(playBack, playOpacity) : 'transparent',
                                borderStyle: playBorderType,
                                borderWidth: borderPlayUpdated
                                    ? `${playBorderTop}px ${playBorderRight}px ${playBorderBottom}px ${playBorderLeft}px`
                                    : playBorderWidth + "px",
                                borderRadius: playBorderRadius + "px",
                                borderColor: playBorderColor,
                                padding: playPadding + "px"
                            }}
                        >
                            <i
                                className={`premium-video-box__play_icon dashicons dashicons-controls-play`}
                                style={{
                                    fontSize: playSize + "px"
                                }}
                            />
                        </div>
                    )}
                    {overlay && videoDesc && (
                        <div
                            className={`premium-video-box__desc`}
                            style={{
                                color: videoDescColor,
                                backgroundColor: videoDescBack ? hexToRgba(videoDescBack, videoDescOpacity) : "transparent",
                                padding: videoDescPadding,
                                borderRadius: videoDescBorderRadius,
                                top: descTop + "%",
                                left: descLeft + "%"
                            }}
                        >
                            <p
                                className={`premium-video-box__desc_text`}
                                style={{
                                    fontFamily: videoDescFamily,
                                    fontWeight: videoDescWeight,
                                    letterSpacing: videoDescLetter + "px",
                                    textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                                    textTransform: videoDescUpper ? "uppercase" : "none",
                                    fontStyle: videoDescStyle
                                }}
                            >
                                <span>{videoDescText}</span>
                            </p>
                        </div>
                    )}
                </div>
            );
        }
    },
    {
        attributes: videoBoxAttrs,
        save: props => {
            const {
                videoBoxId,
                videoType,
                videoURL,
                autoPlay,
                loop,
                mute,
                relatedVideos,
                controls,
                overlay,
                overlayImgURL,
                blur,
                contrast,
                saturation,
                bright,
                hue,
                playTop,
                playLeft,
                playIcon,
                playColor,
                playHoverColor,
                playHoverBackColor,
                playSize,
                playPadding,
                playBack,
                playBorderColor,
                playBorderWidth,
                playBorderRadius,
                playBorderType,
                videoDesc,
                descTop,
                descLeft,
                videoDescText,
                videoDescColor,
                videoDescBack,
                videoDescPadding,
                videoDescSize,
                videoDescFamily,
                videoDescWeight,
                videoDescLetter,
                videoDescStyle,
                videoDescUpper,
                videoDescBorderRadius,
                boxBorderColor,
                boxBorderWidth,
                boxBorderRadius,
                boxBorderType,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition
            } = props.attributes;
            const loopVideo = () => {
                if (videoURL && "youtube" === videoType) {
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
            return (
                <div
                    id={videoBoxId}
                    className={`${className} video-overlay-${overlay}`}
                    data-type={videoType}
                    style={{
                        border: boxBorderType,
                        borderWidth: boxBorderWidth + "px",
                        borderRadius: boxBorderRadius + "px",
                        borderColor: boxBorderColor,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#${videoBoxId} .${className}__play:hover {`,
                                `color: ${playHoverColor} !important;`,
                                `background-color: ${playHoverBackColor} !important;`,
                                "}"
                            ].join("\n")
                        }}
                    />
                    <div className={`${className}__container`}>
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
                                controls={controls ? true : false}
                                autoplay={overlay ? false : autoPlay}
                            />
                        )}
                    </div>
                    {overlay && overlayImgURL && (
                        <div
                            className={`${className}__overlay`}
                            style={{
                                backgroundImage: `url('${overlayImgURL}')`,
                                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                            }}
                        />
                    )}
                    {overlay && playIcon && (
                        <div
                            className={`${className}__play`}
                            style={{
                                top: playTop + "%",
                                left: playLeft + "%",
                                color: playColor,
                                backgroundColor: playBack,
                                border: playBorderType,
                                borderWidth: playBorderWidth + "px",
                                borderRadius: playBorderRadius + "px",
                                borderColor: playBorderColor,
                                padding: playPadding + "px"
                            }}
                        >
                            <i
                                className={`${className}__play_icon dashicons dashicons-controls-play`}
                                style={{
                                    fontSize: playSize + "px"
                                }}
                            />
                        </div>
                    )}
                    {overlay && videoDesc && (
                        <div
                            className={`${className}__desc`}
                            style={{
                                color: videoDescColor,
                                backgroundColor: videoDescBack,
                                padding: videoDescPadding,
                                borderRadius: videoDescBorderRadius,
                                top: descTop + "%",
                                left: descLeft + "%"
                            }}
                        >
                            <p
                                className={`${className}__desc_text`}
                                style={{
                                    fontSize: videoDescSize + "px",
                                    fontFamily: videoDescFamily,
                                    fontWeight: videoDescWeight,
                                    letterSpacing: videoDescLetter + "px",
                                    textTransform: videoDescUpper ? "uppercase" : "none",
                                    fontStyle: videoDescStyle
                                }}
                            >
                                <span>{videoDescText}</span>
                            </p>
                        </div>
                    )}
                </div>
            );
        }
    },
    {
        attributes: videoBoxAttrs,
        migrate: attributes => {
            let newAttributes = {
                videoDescFamily: ""
            };
            return Object.assign(attributes, newAttributes);
        },
        save: props => {
            const {
                videoBoxId,
                videoType,
                videoURL,
                autoPlay,
                loop,
                mute,
                relatedVideos,
                controls,
                overlay,
                overlayImgURL,
                blur,
                contrast,
                saturation,
                bright,
                hue,
                playTop,
                playLeft,
                playIcon,
                playColor,
                playHoverColor,
                playHoverBackColor,
                playSize,
                playPadding,
                playBack,
                playBorderColor,
                playBorderWidth,
                playBorderRadius,
                playBorderType,
                videoDesc,
                descTop,
                descLeft,
                videoDescText,
                videoDescColor,
                videoDescBack,
                videoDescPadding,
                videoDescSize,
                videoDescWeight,
                videoDescLetter,
                videoDescStyle,
                videoDescUpper,
                videoDescBorderRadius,
                boxBorderColor,
                boxBorderWidth,
                boxBorderRadius,
                boxBorderType,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition
            } = props.attributes;
            const loopVideo = () => {
                if (videoURL && "youtube" === videoType) {
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
            return (
                <div
                    id={videoBoxId}
                    className={`${className} video-overlay-${overlay}`}
                    data-type={videoType}
                    style={{
                        border: boxBorderType,
                        borderWidth: boxBorderWidth + "px",
                        borderRadius: boxBorderRadius + "px",
                        borderColor: boxBorderColor,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#${videoBoxId} .${className}__play:hover {`,
                                `color: ${playHoverColor} !important;`,
                                `background-color: ${playHoverBackColor} !important;`,
                                "}"
                            ].join("\n")
                        }}
                    />
                    <div className={`${className}__container`}>
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
                                controls={controls ? true : false}
                                autoplay={overlay ? false : autoPlay}
                            />
                        )}
                    </div>
                    {overlay && overlayImgURL && (
                        <div
                            className={`${className}__overlay`}
                            style={{
                                backgroundImage: `url('${overlayImgURL}')`,
                                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                            }}
                        />
                    )}
                    {overlay && playIcon && (
                        <div
                            className={`${className}__play`}
                            style={{
                                top: playTop + "%",
                                left: playLeft + "%",
                                color: playColor,
                                backgroundColor: playBack,
                                border: playBorderType,
                                borderWidth: playBorderWidth + "px",
                                borderRadius: playBorderRadius + "px",
                                borderColor: playBorderColor,
                                padding: playPadding + "px"
                            }}
                        >
                            <i
                                className={`${className}__play_icon dashicons dashicons-controls-play`}
                                style={{
                                    fontSize: playSize + "px"
                                }}
                            />
                        </div>
                    )}
                    {overlay && videoDesc && (
                        <div
                            className={`${className}__desc`}
                            style={{
                                color: videoDescColor,
                                backgroundColor: videoDescBack,
                                padding: videoDescPadding,
                                borderRadius: videoDescBorderRadius,
                                top: descTop + "%",
                                left: descLeft + "%"
                            }}
                        >
                            <p
                                className={`${className}__desc_text`}
                                style={{
                                    fontSize: videoDescSize + "px",
                                    fontWeight: videoDescWeight,
                                    letterSpacing: videoDescLetter + "px",
                                    textTransform: videoDescUpper ? "uppercase" : "none",
                                    fontStyle: videoDescStyle
                                }}
                            >
                                <span>{videoDescText}</span>
                            </p>
                        </div>
                    )}
                </div>
            );
        }
    },
    {
        attributes: videoBoxAttrs,
        save: props => {
            const {
                videoBoxId,
                videoType,
                videoURL,
                autoPlay,
                loop,
                mute,
                controls,
                overlay,
                overlayImgURL,
                blur,
                contrast,
                saturation,
                bright,
                hue,
                playTop,
                playLeft,
                playIcon,
                playColor,
                playHoverColor,
                playHoverBackColor,
                playSize,
                playPadding,
                playBack,
                playBorderColor,
                playBorderWidth,
                playBorderRadius,
                playBorderType,
                videoDesc,
                descTop,
                descLeft,
                videoDescText,
                videoDescColor,
                videoDescBack,
                videoDescPadding,
                videoDescSize,
                videoDescWeight,
                videoDescLetter,
                videoDescStyle,
                videoDescUpper,
                videoDescBorderRadius,
                boxBorderColor,
                boxBorderWidth,
                boxBorderRadius,
                boxBorderType,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition
            } = props.attributes;
            const loopVideo = () => {
                if ("youtube" === videoType) {
                    if (videoURL && videoURL.startsWith("http")) {
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
            return (
                <div
                    id={videoBoxId}
                    className={`${className} video-overlay-${overlay}`}
                    data-type={videoType}
                    style={{
                        border: boxBorderType,
                        borderWidth: boxBorderWidth + "px",
                        borderRadius: boxBorderRadius + "px",
                        borderColor: boxBorderColor,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#${videoBoxId} .${className}__play:hover {`,
                                `color: ${playHoverColor} !important;`,
                                `background-color: ${playHoverBackColor} !important;`,
                                "}"
                            ].join("\n")
                        }}
                    />
                    <div className={`${className}__container`}>
                        {"self" !== videoType && (
                            <iframe
                                src={`${onChangeVideoURL(videoType, videoURL)}?autoplay=${overlay ? 0 : autoPlay
                                    }&loop=${loopVideo()}&mute${"vimeo" == videoType ? "d" : ""
                                    }=${mute}&controls=${controls ? "1" : "0"}`}
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
                                controls={controls ? true : false}
                                autoplay={overlay ? false : autoPlay}
                            />
                        )}
                    </div>
                    {overlay && overlayImgURL && (
                        <div
                            className={`${className}__overlay`}
                            style={{
                                backgroundImage: `url('${overlayImgURL}')`,
                                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                            }}
                        />
                    )}
                    {overlay && playIcon && (
                        <div
                            className={`${className}__play`}
                            style={{
                                top: playTop + "%",
                                left: playLeft + "%",
                                color: playColor,
                                backgroundColor: playBack,
                                border: playBorderType,
                                borderWidth: playBorderWidth + "px",
                                borderRadius: playBorderRadius + "px",
                                borderColor: playBorderColor,
                                padding: playPadding + "px"
                            }}
                        >
                            <i
                                className={`${className}__play_icon dashicons dashicons-controls-play`}
                                style={{
                                    fontSize: playSize + "px"
                                }}
                            />
                        </div>
                    )}
                    {overlay && videoDesc && (
                        <div
                            className={`${className}__desc`}
                            style={{
                                color: videoDescColor,
                                backgroundColor: videoDescBack,
                                padding: videoDescPadding,
                                borderRadius: videoDescBorderRadius,
                                top: descTop + "%",
                                left: descLeft + "%"
                            }}
                        >
                            <p
                                className={`${className}__desc_text`}
                                style={{
                                    fontSize: videoDescSize + "px",
                                    fontWeight: videoDescWeight,
                                    letterSpacing: videoDescLetter + "px",
                                    textTransform: videoDescUpper ? "uppercase" : "none",
                                    fontStyle: videoDescStyle
                                }}
                            >
                                <span>{videoDescText}</span>
                            </p>
                        </div>
                    )}
                </div>
            );
        }
    }
];

export default deprecatedContent;