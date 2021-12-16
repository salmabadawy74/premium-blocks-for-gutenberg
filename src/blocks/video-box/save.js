import classnames from 'classnames'
import onChangeVideoURL from "./index";
import hexToRgba from "../../components/hex-to-rgba"

const save = props => {

    const { className } = props;

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

    const mainClasses = classnames(className, 'premium-video-box');

    return (
        <div
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
                        backgroundColor: playStyles[0].playBack
                            ? hexToRgba(playStyles[0].playBack, playStyles[0].playOpacity)
                            : "transparent",
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
                        backgroundColor: descStyles[0].videoDescBack
                            ? hexToRgba(descStyles[0].videoDescBack, descStyles[0].videoDescOpacity)
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
};

export default save;