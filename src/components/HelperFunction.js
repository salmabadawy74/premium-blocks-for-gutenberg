export const gradientBackground = (value) => {
    const {
        backgroundType,
        backgroundColor,
        backgroundRepeat,
        backgroundPosition,
        fixed,
        backgroundSize,
        gradientColorTwo,
        gradientPosition,
        gradientType,
        gradientLocationOne,
        gradientLocationTwo,
        gradientAngle,
        backgroundImageURL,
    } = value;
    let btnGrad, btnGrad2, btnbg;
    if (undefined !== backgroundType && "gradient" === backgroundType) {
        btnGrad =
            "transparent" === backgroundColor || undefined === backgroundColor
                ? "rgba(255,255,255,0)"
                : backgroundColor;
        btnGrad2 =
            undefined !== gradientColorTwo &&
                undefined !== gradientColorTwo &&
                "" !== gradientColorTwo
                ? gradientColorTwo
                : "#777";
        if ("radial" === gradientType) {
            btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        } else if ("radial" !== gradientType) {
            btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        }
    } else {
        btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : "";
    }
    return {
        backgroundColor: backgroundColor,
        backgroundImage: gradientValue(value),
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
    };
};
export const borderCss = (value, device) => {
    return {
        borderStyle: value?.borderType,
        borderTopWidth: value?.borderWidth?.[device]?.top,
        borderRightWidth: value?.borderWidth?.[device]?.right,
        borderBottomWidth: value?.borderWidth?.[device]?.bottom,
        borderLeftWidth: value?.borderWidth?.[device]?.left,
        borderColor: value?.borderColor,
        borderTopLeftRadius: `${value?.borderRadius?.[device]?.top || 0}px`,
        borderTopRightRadius: `${value?.borderRadius?.[device]?.right || 0}px`,
        borderBottomLeftRadius: `${value?.borderRadius?.[device]?.bottom || 0
            }px`,
        borderBottomRightRadius: `${value?.borderRadius?.[device]?.left || 0
            }px`,
    };
};
export const paddingCss = (value, device) => {
    return {
        paddingTop: value?.[device]?.top && `${value?.[device]?.top}${value?.unit}`,
        paddingRight: value?.[device]?.right && `${value?.[device]?.right}${value?.unit}`,
        paddingBottom: value?.[device]?.bottom && `${value?.[device]?.bottom}${value?.unit}`,
        paddingLeft: value?.[device]?.left && `${value?.[device]?.left}${value?.unit}`,
    };
};
export const marginCss = (value, device) => {
    return {
        marginTop: value?.[device]?.top && `${value?.[device]?.top}${value?.unit}`,
        marginRight: value?.[device]?.right && `${value?.[device]?.right}${value?.unit}`,
        marginBottom: value?.[device]?.bottom && `${value?.[device]?.bottom}${value?.unit}`,
        marginLeft: value?.[device]?.left && `${value?.[device]?.left}${value?.unit}`,
    };
};
export const typographyCss = (value, device) => {
    return {
        fontSize: value?.fontSize[device] && `${value?.fontSize[device]}${value?.fontSize?.unit}`,
        fontStyle: value?.fontStyle,
        fontFamily: value?.fontFamily,
        fontWeight: value?.fontWeight,
        letterSpacing: value?.letterSpacing[device] && `${value?.letterSpacing[device]}px`,
        textDecoration: value?.textDecoration,
        textTransform: value?.textTransform,
        lineHeight: value?.lineHeight[device] && `${value?.lineHeight[device]}px`,
    };
};

export const generateBlockId = (clientId) => {
    return clientId.split("-")[4];
};

export const generateCss = (styles) => {
    let styleCss = "";
    for (const selector in styles) {
        const selectorStyles = styles[selector];
        const filteredStyles = Object.keys(selectorStyles)
            .map((property) => {
                const value = selectorStyles[property];
                const valueWithoutUnits = value
                    ? value
                        .toString()
                        .replaceAll(/px|em|rem|!important|%/g, "")
                        .replaceAll(/\s/g, "")
                    : "";
                if (
                    value &&
                    !value.toString().includes("undefined") &&
                    valueWithoutUnits
                ) {
                    return `${property}: ${value};`;
                }
            })
            .filter((style) => !!style)
            .join("\n");
        styleCss += `${selector}{
                    ${filteredStyles}
                }\n`;
    }

    return styleCss;
};

export const filterJsCss = (styles) => {
    const asArray = Object.entries(styles);

    const filtered = asArray.filter(([property, value]) => {
        const valueWithoutUnits = value
            ? value
                .toString()
                .replaceAll(/px|em|rem|!important|%/g, "")
                .replaceAll(/\s/g, "")
            : "";

        return (
            value &&
            !value.toString().includes("undefined") &&
            valueWithoutUnits
        );
    });
    const filteredStyles = Object.fromEntries(filtered);

    return filteredStyles;
};

export const videoBackground = (
    backgroundType,
    videoSource,
    videoURL,
    bgExternalVideo
) => {
    if (backgroundType == "video") {
        if (videoSource == "local") {
            if (videoURL) {
                return (
                    <div className="premium-blocks-video-bg-wrap">
                        <video
                            className="premium-blocks-video-bg"
                            autoPlay
                            muted
                            loop
                        >
                            <source src={videoURL} />
                        </video>
                    </div>
                );
            }
        }
        if (videoSource == "external") {
            if (bgExternalVideo) {
                let video = bgExternalVideo,
                    src = "";
                if (video.match("youtube|youtu.be")) {
                    let id = 0;
                    if (video.match("embed") && video.split(/embed\//)[1]) {
                        id = video.split(/embed\//)[1].split('"')[0];
                    } else if (video.split(/v\/|v=|youtu\.be\//)[1]) {
                        id = video
                            .split(/v\/|v=|youtu\.be\//)[1]
                            .split(/[?&]/)[0];
                    }
                    src =
                        "//www.youtube.com/embed/" +
                        id +
                        "?playlist=" +
                        id +
                        "&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&wmode=transparent&widgetid=1";
                } else if (video.match("vimeo.com")) {
                    let id = video
                        .split(/video\/|https:\/\/vimeo\.com\//)[1]
                        .split(/[?&]/)[0];
                    src =
                        "//player.vimeo.com/video/" +
                        id +
                        "?autoplay=1&loop=1&title=0&byline=0&portrait=0";
                }
                return (
                    <div className="premium-blocks-video-bg-wrap">
                        <iframe
                            src={src}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
            }
        }
    }
};

export const animationAttr = (data) => {
    if (
        typeof data !== "undefined" &&
        typeof data.name !== "undefined" &&
        data.openAnimation
    ) {
        return { "data-premiumanimation": JSON.stringify(data) };
    } else {
        return {};
    }
};
export const gradientValue = (value) => {
    const {
        backgroundType,
        backgroundColor,
        gradientColorTwo,
        gradientPosition,
        gradientType,
        gradientLocationOne,
        gradientLocationTwo,
        gradientAngle,
        backgroundImageURL,
    } = value;

    let btnGrad, btnGrad2, btnbg;
    if (undefined !== backgroundType && "gradient" === backgroundType) {
        btnGrad =
            "transparent" === backgroundColor || undefined === backgroundColor
                ? "rgba(255,255,255,0)"
                : backgroundColor;
        btnGrad2 =
            undefined !== gradientColorTwo &&
                undefined !== gradientColorTwo &&
                "" !== gradientColorTwo
                ? gradientColorTwo
                : "#777";
        if ("radial" === gradientType) {
            btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        } else if ("radial" !== gradientType) {
            btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        }
    } else {
        btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : "";
    }
    return btnbg;
};
