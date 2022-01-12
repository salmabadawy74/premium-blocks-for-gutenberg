import videoBoxAttrs from "./attributes";
import onChangeVideoURL from "./index";

const className = "premium-video-box";

const deprecatedContent = [
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