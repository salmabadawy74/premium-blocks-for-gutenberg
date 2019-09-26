import classnames from 'classnames';
import DefaultImage from "../../components/default-image";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
const { RichText } = wp.editor;

const { __ } = wp.i18n;

const save = props => {
    const { className } = props;

    const {
        imgUrl,
        imgSize,
        imgBorderRadius,
        hoverEffect,
        linkCheck,
        linkUrl,
        imgAlign,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        iconCheck,
        iconType,
        iconSelected,
        iconSize,
        iconUnit,
        iconColor,
        iconBackground,
        iconBorderType,
        iconBorderWidth,
        iconBorderColor,
        iconBorderRadius,
        iconPadTop,
        iconPadRight,
        iconPadBottom,
        iconPadLeft,
        padUnit,
        titleCheck,
        titleText,
        titleColor,
        titleSize,
        titlelineHeight,
        titleShadColor,
        titleShadBlur,
        titleShadHorizontal,
        titleShadVertical,
        titleMarTop,
        titleMarRight,
        titleMarBottom,
        titleMarLeft,
        titleMarUnit,
        descCheck,
        descText,
        descColor,
        descSize,
        desclineHeight,
        descShadColor,
        descShadBlur,
        descShadHorizontal,
        descShadVertical,
        descMarTop,
        descMarRight,
        descMarBottom,
        descMarLeft,
        descMarUnit,
        contentAlign,
        overlayColor,
        overlayOpacity,
        containerShadowColor,
        containerShadowBlur,
        containerShadowHorizontal,
        containerShadowVertical,
        containerShadowPosition,

    } = props.attributes;

    const mainClasses = classnames(className, "premium-ihover");

    return (
        <div className={`${mainClasses}-container`}>
            <div className={`premium-ihover-list`} style={{ textAlign: imgAlign || "center" }}>

                <div className={`premium-ihover-item-wrap`} style={{ borderRadius: (imgBorderRadius || "50") + "%", }}>
                    {linkCheck && linkUrl && (
                        <a
                            className={`premium-ihover-link`}
                            href={linkCheck && linkUrl}
                        >
                            <div className={("premium-ihover-item ") + hoverEffect} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>

                                <div className={`premium-ihover-img-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                    <div className={`premium-ihover-img-front`}>
                                        <div className={`premium-ihover-img-inner-wrap`}></div>
                                        {imgUrl && (
                                            <img className={`premium-ihover-img`} src={imgUrl}
                                                style={{
                                                    width: (imgSize || "300") + "px", height: (imgSize || "300") + "px", borderRadius: (imgBorderRadius || "50") + "%",
                                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                                    // boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`
                                                }}
                                            />
                                        )}
                                        {!imgUrl && <DefaultImage />}
                                    </div>
                                </div>
                                <div className={`premium-ihover-info-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                    <div className={`premium-ihover-info-back`}
                                        style={{
                                            borderRadius: (imgBorderRadius || "50") + "%",
                                            backgroundColor: overlayColor || "transparent", opacity: overlayColor ? 1 - overlayOpacity / 100 : 1,
                                            boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`
                                        }}
                                    >
                                        <div className={`premium-ihover-content`}>
                                            <div className={`premium-ihover-content-wrap`} style={{ textAlign: contentAlign || "center" }}>

                                                {iconCheck && (
                                                    <div className={`premium-ihover-icon-wrap`}>

                                                        {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                                            <p className={`premium-ihover-icon_alert`}>
                                                                {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                            </p>
                                                        )}
                                                        {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                            <i
                                                                className={`premium-ihover-icon  ${iconSelected}`}
                                                                style={{
                                                                    width: "auto",
                                                                    height: "100%",
                                                                    fontSize: (iconSize || 50) + (iconUnit || "px"),
                                                                    color: iconColor || "#fff",
                                                                    backgroundColor: iconBackground || "transparent",
                                                                    border: iconBorderType,
                                                                    borderWidth: iconBorderWidth + "px",
                                                                    borderRadius: iconBorderRadius + "px",
                                                                    borderColor: iconBorderColor || "transparent",
                                                                    paddingTop: (iconPadTop || "0") + (padUnit || "px"),
                                                                    paddingRight: (iconPadRight || "0") + (padUnit || "px"),
                                                                    paddingBottom: (iconPadBottom || "0") + (padUnit || "px"),
                                                                    paddingLeft: (iconPadLeft || "0") + (padUnit || "px"),
                                                                }}
                                                            />
                                                        )}

                                                    </div>
                                                )}

                                                {titleCheck && (
                                                    <div className={`premium-ihover-title-wrap`}>
                                                        <RichText.Content
                                                            tagName="h4"
                                                            className={`premium-ihover-title`}
                                                            value={titleText}
                                                            style={{
                                                                color: titleColor || "#fff",
                                                                fontSize: titleSize + "px",
                                                                lineHeight: titlelineHeight + "px",
                                                                textShadow: `${titleShadHorizontal}px ${titleShadVertical}px ${titleShadBlur}px ${titleShadColor}`,
                                                                marginTop: titleMarTop + (titleMarUnit || "px"),
                                                                marginBottom: titleMarBottom + (titleMarUnit || "px"),
                                                                marginLeft: titleMarLeft + (titleMarUnit || "px"),
                                                                marginRight: titleMarRight + (titleMarUnit || "px"),
                                                            }}
                                                            keepPlaceholderOnFocus
                                                        />
                                                    </div>
                                                )}

                                                <div className={`premium-ihover-divider`}>
                                                    <span className={`premium-ihover-divider-line`}></span>
                                                </div>

                                                {descCheck && (
                                                    <div className={`premium-ihover-description`}>
                                                        <RichText.Content
                                                            tagName="p"
                                                            value={descText}
                                                            style={{
                                                                color: descColor || "#fff",
                                                                fontSize: (descSize || "16") + "px",
                                                                lineHeight: desclineHeight + "px",
                                                                textShadow: `${descShadHorizontal}px ${descShadVertical}px ${descShadBlur}px ${descShadColor}`,
                                                                marginTop: descMarTop + (descMarUnit || "px"),
                                                                marginBottom: descMarBottom + (descMarUnit || "px"),
                                                                marginLeft: descMarLeft + (descMarUnit || "px"),
                                                                marginRight: descMarRight + (descMarUnit || "px"),
                                                            }}
                                                            keepPlaceholderOnFocus
                                                        />
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </a>
                    )}
                    {!linkUrl && (

                        <div className={("premium-ihover-item ") + hoverEffect} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>

                            <div className={`premium-ihover-img-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                <div className={`premium-ihover-img-front`}>
                                    <div className={`premium-ihover-img-inner-wrap`}></div>
                                    {imgUrl && (
                                        <img className={`premium-ihover-img`} src={imgUrl}
                                            style={{
                                                width: (imgSize || "300") + "px", height: (imgSize || "300") + "px", borderRadius: (imgBorderRadius || "50") + "%",
                                                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                                            }}
                                        />
                                    )}
                                    {!imgUrl && <DefaultImage />}
                                </div>
                            </div>
                            <div className={`premium-ihover-info-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                <div className={`premium-ihover-info-back`}
                                    style={{
                                        borderRadius: (imgBorderRadius || "50") + "%",
                                        backgroundColor: overlayColor || "transparent", opacity: overlayColor ? 1 - overlayOpacity / 100 : 1,
                                        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`
                                    }}
                                >
                                    <div className={`premium-ihover-content`}>
                                        <div className={`premium-ihover-content-wrap`} style={{ textAlign: contentAlign || "center" }}>

                                            {iconCheck && (
                                                <div className={`premium-ihover-icon-wrap`}>

                                                    {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                                        <p className={`premium-ihover-icon_alert`}>
                                                            {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                        </p>
                                                    )}
                                                    {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                        <i
                                                            className={`premium-ihover-icon  ${iconSelected}`}
                                                            style={{
                                                                width: "auto",
                                                                height: "100%",
                                                                fontSize: (iconSize || 50) + (iconUnit || "px"),
                                                                color: iconColor || "#fff",
                                                                backgroundColor: iconBackground || "transparent",
                                                                border: iconBorderType,
                                                                borderWidth: iconBorderWidth + "px",
                                                                borderRadius: iconBorderRadius + "px",
                                                                borderColor: iconBorderColor || "transparent",
                                                                paddingTop: (iconPadTop || "0") + (padUnit || "px"),
                                                                paddingRight: (iconPadRight || "0") + (padUnit || "px"),
                                                                paddingBottom: (iconPadBottom || "0") + (padUnit || "px"),
                                                                paddingLeft: (iconPadLeft || "0") + (padUnit || "px"),
                                                            }}
                                                        />
                                                    )}

                                                </div>
                                            )}

                                            {titleCheck && (
                                                <div className={`premium-ihover-title-wrap`}>
                                                    <RichText.Content
                                                        tagName="h4"
                                                        className={`premium-ihover-title`}
                                                        value={titleText}
                                                        style={{
                                                            color: titleColor || "#fff",
                                                            fontSize: titleSize + "px",
                                                            lineHeight: titlelineHeight + "px",
                                                            textShadow: `${titleShadHorizontal}px ${titleShadVertical}px ${titleShadBlur}px ${titleShadColor}`,
                                                            marginTop: titleMarTop + (titleMarUnit || "px"),
                                                            marginBottom: titleMarBottom + (titleMarUnit || "px"),
                                                            marginLeft: titleMarLeft + (titleMarUnit || "px"),
                                                            marginRight: titleMarRight + (titleMarUnit || "px"),
                                                        }}
                                                        keepPlaceholderOnFocus
                                                    />
                                                </div>
                                            )}

                                            <div className={`premium-ihover-divider`}>
                                                <span className={`premium-ihover-divider-line`}></span>
                                            </div>

                                            {descCheck && (
                                                <div className={`premium-ihover-description`}>
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={descText}
                                                        style={{
                                                            color: descColor || "#fff",
                                                            fontSize: (descSize || "16") + "px",
                                                            lineHeight: desclineHeight + "px",
                                                            textShadow: `${descShadHorizontal}px ${descShadVertical}px ${descShadBlur}px ${descShadColor}`,
                                                            marginTop: descMarTop + (descMarUnit || "px"),
                                                            marginBottom: descMarBottom + (descMarUnit || "px"),
                                                            marginLeft: descMarLeft + (descMarUnit || "px"),
                                                            marginRight: descMarRight + (descMarUnit || "px"),
                                                        }}
                                                        keepPlaceholderOnFocus
                                                    />
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )}
                </div>

            </div>
        </div>
    );

};

export default save;