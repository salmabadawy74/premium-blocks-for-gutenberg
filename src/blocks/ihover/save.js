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
        spinnerBorderW,
        spinnerFirstColor,
        spinnerSecondColor,
        linkCheck,
        linkUrl,
        target,
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
        containerBgColor,
        containerShadowColor,
        containerShadowBlur,
        containerShadowHorizontal,
        containerShadowVertical,
        containerShadowPosition,
        containerPadTop,
        containerPadRight,
        containerPadBottom,
        containerPadLeft

    } = props.attributes;

    const mainClasses = classnames(className, "premium-ihover");

    return (
        <div className={`${mainClasses}__container`}>
            <div className={`premium-ihover__list`} style={{ textAlign: imgAlign || "center" }}>

                <div className={`premium-ihover__item-wrap`}
                    style={{
                        borderRadius: (imgBorderRadius || "0") + "%",
                        backgroundColor: containerBgColor || "transparent",
                        paddingTop: (containerPadTop || "0") + "px",
                        paddingRight: (containerPadRight || "0") + "px",
                        paddingBottom: (containerPadBottom || "0") + "px",
                        paddingLeft: (containerPadLeft || "0") + "px"
                    }}
                >
                    {linkCheck && linkUrl && (
                        <a
                            className={`premium-ihover__link`}
                            href={linkCheck && linkUrl}
                            target={target && "_blank"}
                        >
                            <div className={("premium-ihover__item ") + hoverEffect} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                {(hoverEffect === "style20" && (

                                    <div className='premium-ihover-spinner' style='z-index: 1;'></div> ,
                                    <div class='premium-ihover__spinner'
                                        style={{
                                            borderWidth: (spinnerBorderW || "0" + "px"),
                                            borderRadius: (imgBorderRadius || "0") + "%",
                                            borderTopColor: (spinnerFirstColor || "#6ec1e4"),
                                            borderLeftColor: (spinnerFirstColor || "#6ec1e4"),
                                            borderBottomColor: (spinnerSecondColor || "#54595f"),
                                            borderRightColor: (spinnerSecondColor || "#54595f")
                                        }}
                                    >

                                    </div>
                                )
                                )}
                                <div className={`premium-ihover__img-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                    <div className={`premium-ihover__img-front`}>
                                        <div className={`premium-ihover__img-inner-wrap`}></div>
                                        {imgUrl && (
                                            <img className={`premium-ihover__img`} src={imgUrl}
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
                                <div className={`premium-ihover__info-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                    <div className={`premium-ihover__info-back`}
                                        style={{
                                            borderRadius: (imgBorderRadius || "50") + "%",
                                            backgroundColor: overlayColor || "transparent", opacity: overlayColor ? 1 - overlayOpacity / 100 : 1,
                                            boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`
                                        }}
                                    >
                                        <div className={`premium-ihover__content`}>
                                            <div className={`premium-ihover__content-wrap`} style={{ textAlign: contentAlign || "center" }}>

                                                {iconCheck && (
                                                    <div className={`premium-ihover__icon-wrap`}>

                                                        {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                                            <p className={`premium-ihover__icon_alert`}>
                                                                {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                            </p>
                                                        )}
                                                        {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                            <i
                                                                className={`premium-ihover__icon  ${iconSelected}`}
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
                                                    <div className={`premium-ihover__title-wrap`}>
                                                        <RichText.Content
                                                            tagName="h4"
                                                            className={`premium-ihover__title`}
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
                                                        />
                                                    </div>
                                                )}

                                                <div className={`premium-ihover__divider`}>
                                                    <span className={`premium-ihover__divider-line`}></span>
                                                </div>

                                                {descCheck && (
                                                    <div className={`premium-ihover__description`}>
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

                        <div className={("premium-ihover__item ") + hoverEffect} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                            {(hoverEffect === "style20" && (

                                <div className='premium-ihover-spinner' style='z-index: 1;'></div> ,
                                <div class='premium-ihover__spinner'
                                    style={{
                                        borderWidth: (spinnerBorderW || "0" + "px"),
                                        borderRadius: (imgBorderRadius || "0") + "%",
                                        borderTopColor: (spinnerFirstColor || "#6ec1e4"),
                                        borderLeftColor: (spinnerFirstColor || "#6ec1e4"),
                                        borderBottomColor: (spinnerSecondColor || "#54595f"),
                                        borderRightColor: (spinnerSecondColor || "#54595f")
                                    }}
                                >

                                </div>
                            )
                            )}
                            <div className={`premium-ihover__img-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                <div className={`premium-ihover__img-front`}>
                                    <div className={`premium-ihover__img-inner-wrap`}></div>
                                    {imgUrl && (
                                        <img className={`premium-ihover__img`} src={imgUrl}
                                            style={{
                                                width: (imgSize || "300") + "px", height: (imgSize || "300") + "px", borderRadius: (imgBorderRadius || "50") + "%",
                                                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                                            }}
                                        />
                                    )}
                                    {!imgUrl && <DefaultImage />}
                                </div>
                            </div>
                            <div className={`premium-ihover__info-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                <div className={`premium-ihover__info-back`}
                                    style={{
                                        borderRadius: (imgBorderRadius || "50") + "%",
                                        backgroundColor: overlayColor || "transparent", opacity: overlayColor ? 1 - overlayOpacity / 100 : 1,
                                        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`
                                    }}
                                >
                                    <div className={`premium-ihover__content`}>
                                        <div className={`premium-ihover__content-wrap`} style={{ textAlign: contentAlign || "center" }}>

                                            {iconCheck && (
                                                <div className={`premium-ihover__icon-wrap`}>

                                                    {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                                        <p className={`premium-ihover__icon_alert`}>
                                                            {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                        </p>
                                                    )}
                                                    {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                        <i
                                                            className={`premium-ihover__icon  ${iconSelected}`}
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
                                                <div className={`premium-ihover__title-wrap`}>
                                                    <RichText.Content
                                                        tagName="h4"
                                                        className={`premium-ihover__title`}
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
                                                    />
                                                </div>
                                            )}

                                            {descCheck && (
                                                <div className={`premium-ihover__description`}>
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
                                                    />
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )}
                    {!linkCheck && linkUrl && (

                        <div className={("premium-ihover__item ") + hoverEffect} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                            {(hoverEffect === "style20" && (

                                <div className='premium-ihover-spinner' style='z-index: 1;'></div> ,
                                <div class='premium-ihover__spinner'
                                    style={{
                                        borderWidth: (spinnerBorderW || "0" + "px"),
                                        borderRadius: (imgBorderRadius || "0") + "%",
                                        borderTopColor: (spinnerFirstColor || "#6ec1e4"),
                                        borderLeftColor: (spinnerFirstColor || "#6ec1e4"),
                                        borderBottomColor: (spinnerSecondColor || "#54595f"),
                                        borderRightColor: (spinnerSecondColor || "#54595f")
                                    }}
                                >

                                </div>
                            )
                            )}
                            <div className={`premium-ihover__img-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                <div className={`premium-ihover__img-front`}>
                                    <div className={`premium-ihover__img-inner-wrap`}></div>
                                    {imgUrl && (
                                        <img className={`premium-ihover__img`} src={imgUrl}
                                            style={{
                                                width: (imgSize || "300") + "px", height: (imgSize || "300") + "px", borderRadius: (imgBorderRadius || "50") + "%",
                                                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                                            }}
                                        />
                                    )}
                                    {!imgUrl && <DefaultImage />}
                                </div>
                            </div>
                            <div className={`premium-ihover__info-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                                <div className={`premium-ihover__info-back`}
                                    style={{
                                        borderRadius: (imgBorderRadius || "50") + "%",
                                        backgroundColor: overlayColor || "transparent", opacity: overlayColor ? 1 - overlayOpacity / 100 : 1,
                                        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`
                                    }}
                                >
                                    <div className={`premium-ihover__content`}>
                                        <div className={`premium-ihover__content-wrap`} style={{ textAlign: contentAlign || "center" }}>

                                            {iconCheck && (
                                                <div className={`premium-ihover__icon-wrap`}>

                                                    {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                                        <p className={`premium-ihover__icon_alert`}>
                                                            {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                        </p>
                                                    )}
                                                    {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                        <i
                                                            className={`premium-ihover__icon  ${iconSelected}`}
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
                                                <div className={`premium-ihover__title-wrap`}>
                                                    <RichText.Content
                                                        tagName="h4"
                                                        className={`premium-ihover__title`}
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
                                                    />
                                                </div>
                                            )}

                                            {descCheck && (
                                                <div className={`premium-ihover__description`}>
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