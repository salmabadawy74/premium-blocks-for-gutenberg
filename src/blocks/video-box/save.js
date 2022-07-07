import classnames from 'classnames'
import onChangeVideoURL from "./index";
import DefaultImage from "../../components/default-image";
import { typographyCss, filterJsCss } from '../../components/HelperFunction'

const {
    RichText
} = wp.editor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        videoType,
        videoURL,
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
        ratioValue,
        overlayStyles,
        playStyles,
        descStyles,
        videoDescTypography,
        playBorder,
        boxBorder,
        descShadow,
        boxShadow
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

    const renderCss = (
        <style>
            {`
                .${blockId} .premium-video-box__play:hover {
                    color: ${playStyles[0].playHoverColor} !important;
                    background-color: ${playStyles[0].playHoverBackColor} !important;
                }
            `}
        </style>
    );

    return (
        videoURL && (
            <div
                className={classnames(className,
                    "premium-video-box", `video-overlay-${overlay} ${blockId} ${hideDesktop} ${hideTablet} ${hideMobile} premium-aspect-ratio-${ratioValue}`)}
                data-type={videoType}
                style={filterJsCss({
                    borderStyle: boxBorder.borderType,
                    // borderWidth: boxStyles[0].borderBoxUpdated
                    //     ? `${boxStyles[0].boxBorderTop}px ${boxStyles[0].boxBorderRight}px ${boxStyles[0].boxBorderBottom}px ${boxStyles[0].boxBorderLeft}px`
                    //     : boxStyles[0].boxBorderWidth + "px",
                    // borderRadius: boxStyles[0].boxBorderRadius + "px",
                    borderColor: boxBorder.borderColor,
                    boxShadow: `${boxShadow.horizontal || 0}px ${boxShadow.vertical ||
                        0}px ${boxShadow.blur || 0}px ${boxShadow.color} ${boxShadow.position}`,
                })}
            >
                {renderCss}
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
                        style={filterJsCss({
                            backgroundImage: `url('${overlayStyles[0].overlayImgURL}')`,
                            filter: `brightness( ${overlayStyles[0].bright}% ) contrast( ${overlayStyles[0].contrast}% ) saturate( ${overlayStyles[0].saturation}% ) blur( ${overlayStyles[0].blur}px ) hue-rotate( ${overlayStyles[0].hue}deg )`
                        })}
                    />
                )}
                {overlay && playIcon && <DefaultImage className="premium-video-box-image-container" />}
                {overlay && playIcon && (
                    <div
                        className={`premium-video-box__play`}
                        style={filterJsCss({
                            top: playStyles[0].playTop + "%",
                            left: playLeft + "%",
                            color: playStyles[0].playColor,
                            backgroundColor: playStyles[0].playBack,
                            borderStyle: playBorder.borderType,
                            // borderWidth: playStyles[0].borderPlayUpdated
                            //     ? `${playStyles[0].playBorderTop}px ${playStyles[0].playBorderRight}px ${playStyles[0].playBorderBottom}px ${playStyles[0].playBorderLeft}px`
                            //     : playStyles[0].playBorderWidth + "px",
                            // borderRadius: playStyles[0].playBorderRadius + "px",
                            borderColor: playBorder.borderColor,
                            // padding: playStyles[0].playPadding + "px"
                        })}
                    >
                        <i
                            className={`premium-video-box__play_icon dashicons dashicons-controls-play`}
                            style={filterJsCss({
                                fontSize: playStyles[0].playSize + "px"
                            })}
                        />
                    </div>
                )}
                <div
                    className={`premium-video-box__desc`}
                    style={{
                        color: descStyles[0].videoDescColor,
                        backgroundColor: descStyles[0].videoDescBack,
                        borderRadius: descStyles[0].videoDescBorderRadius,
                        top: descStyles[0].descTop + "%",
                        left: descStyles[0].descLeft + "%"
                    }}
                >
                    <RichText.Content
                        tagName="p"
                        className={`premium-video-box__desc_text`}
                        value={descStyles[0].videoDescText}
                        placeholder="Add caption"
                        style={{
                            ...typographyCss(videoDescTypography, props.deviceType),
                            textShadow: `${descShadow.horizontal}px ${descShadow.vertical}px ${descShadow.blur}px ${descShadow.color}`
                        }}
                        keepPlaceholderOnFocus
                    />
                </div>
            </div>
        )
    );
};

export default save;