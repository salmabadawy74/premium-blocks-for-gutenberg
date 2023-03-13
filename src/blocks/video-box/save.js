import classnames from 'classnames'
import onChangeVideoURL from "./index";
import {
    DefaultImage,
} from '@pbg/components';
import { filterJsCss, generateCss } from '@pbg/helpers';

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
        playBorder,
        boxBorder,
        descShadow,
        boxShadow,
        overlayFilter
    } = props.attributes;

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

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-video-box__play:hover`] = {
            'color': `${playStyles[0].playHoverColor} !important`,
            'background-color': `${playStyles[0].playHoverBackColor} !important`
        };
        return generateCss(styles);
    }

    return (
        videoURL && (
            <div
                className={classnames(className,
                    "premium-video-box", `${blockId} video-overlay-${overlay} premium-aspect-ratio-${ratioValue}`, {
                    ' premium-desktop-hidden': hideDesktop,
                    ' premium-tablet-hidden': hideTablet,
                    ' premium-mobile-hidden': hideMobile,
                })}
                data-type={videoType}
                style={filterJsCss({
                    borderStyle: boxBorder.borderType,
                    borderColor: boxBorder.borderColor,
                    boxShadow: `${boxShadow.horizontal || 0}px ${boxShadow.vertical ||
                        0}px ${boxShadow.blur || 10}px ${boxShadow.color} ${boxShadow.position}`,
                })}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles()
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
                                            }=${mute}&rel="0"&controls=${controls ? "1" : "0"
                                            }`}
                                        // frameborder="0"
                                        // gesture="media"
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
                            filter: `brightness( ${overlayFilter.bright}% ) contrast( ${overlayFilter.contrast}% ) saturate( ${overlayFilter.saturation}% ) blur( ${overlayFilter.blur}px ) hue-rotate( ${overlayFilter.hue}deg )`
                        })}
                    />
                )}
                {overlay && playIcon && !overlayStyles[0].overlayImgURL && <DefaultImage className="premium-video-box-image-container" />}
                {overlay && playIcon && (
                    <div
                        className={`premium-video-box__play`}
                        style={filterJsCss({
                            top: playStyles[0].playTop + "%",
                            left: playLeft + "%",
                            color: playStyles[0].playColor,
                            backgroundColor: playStyles[0].playBack,
                            borderStyle: playBorder.borderType,
                            borderColor: playBorder.borderColor
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
                    style={filterJsCss({
                        backgroundColor: descStyles[0].videoDescBack,
                        borderRadius: descStyles[0].videoDescBorderRadius,
                        top: descStyles[0].descTop + "%",
                        left: descStyles[0].descLeft + "%"
                    })}
                >
                    <RichText.Content
                        tagName="p"
                        className={`premium-video-box__desc_text`}
                        value={descStyles[0].videoDescText}
                        placeholder="Add caption"
                        style={filterJsCss({
                            color: descStyles[0].videoDescColor,
                            textShadow: `${descShadow.horizontal}px ${descShadow.vertical}px ${descShadow.blur}px ${descShadow.color}`
                        })}
                        keepPlaceholderOnFocus
                    />
                </div>
            </div>
        )
    );
};

export default save;