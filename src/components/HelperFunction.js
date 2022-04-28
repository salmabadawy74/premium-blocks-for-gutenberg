export const videoBackground = (backgroundType, videoSource, videoURL, bgExternalVideo) => {
    if (backgroundType == 'video') {
        if (videoSource == 'local') {
            if (videoURL) {
                return (
                    <div className="premium-blocks-video-bg-wrap">
                        <video className="premium-blocks-video-bg" autoPlay muted loop>
                            <source src={videoURL} />
                        </video>
                    </div>
                )
            }
        }
        if (videoSource == 'external') {
            if (bgExternalVideo) {
                let video = bgExternalVideo,
                    src = '';
                if (video.match('youtube|youtu\.be')) {
                    let id = 0;
                    if (video.match('embed') && video.split(/embed\//)[1]) {
                        id = video.split(/embed\//)[1].split('"')[0];
                    } else if (video.split(/v\/|v=|youtu\.be\//)[1]) {
                        id = video.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
                    }
                    src = '//www.youtube.com/embed/' + id + '?playlist=' + id + '&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&wmode=transparent&widgetid=1';
                } else if (video.match('vimeo\.com')) {
                    let id = video.split(/video\/|https:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
                    src = "//player.vimeo.com/video/" + id + "?autoplay=1&loop=1&title=0&byline=0&portrait=0"
                }
                return (
                    <div className="premium-blocks-video-bg-wrap"><iframe src={src} frameBorder="0" allowFullScreen></iframe></div>
                )
            }
        }
    }
}
export const gradientBackground = (backgroundType, containerBack, gradientColorTwo, gradientType, gradientPosition, gradientLocationOne, gradientLocationTwo, gradientAngle, backgroundImageURL) => {
    let btnGrad, btnGrad2, btnbg;
    if (undefined !== backgroundType && 'gradient' === backgroundType) {
        btnGrad = ('transparent' === containerBack || undefined === containerBack ? 'rgba(255,255,255,0)' : containerBack);
        btnGrad2 = (undefined !== gradientColorTwo && undefined !== gradientColorTwo && '' !== gradientColorTwo ? gradientColorTwo : '#777');
        if ('radial' === gradientType) {
            btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        } else if ('radial' !== gradientType) {
            btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        }
    } else {
        btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : ''
    }
    return btnbg;
}
export const animationAttr = (data) => {
    if (typeof data !== 'undefined' && typeof data.name !== 'undefined' && data.openAnimation) {
        return { 'data-premiumanimation': JSON.stringify(data) }
    } else {
        return {}
    }
}