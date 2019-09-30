import classnames from "classnames";

const { RichText } = wp.editor;

const save = props => {
    const { className } = props;

    const {
        id,
        frontTitle,
        frontTitleColor,
        frontDescription,
        frontDescriptionColor,
        frontBackgroundColor,
        backTitle,
        backTitleColor,
        backDescription,
        backDescriptionColor,
        backBackgroundColor,
        frontIconType,
        frontIconSelected,
        frontIconCheck,
        frontIconSize,
        frontIconColor,
        frontIconBackground,
        froIconBorderType,
        froIconBorderWidth,
        froIconBorderRadius,
        froIconBorderColor,
        frontIconPaddingTop,
        frontIconPaddingRight,
        frontIconPaddingBottom,
        frontIconPaddingLeft,
        frontIconMarginTop,
        frontIconMarginRight,
        frontIconMarginBottom,
        frontIconMarginLeft,
        frontIconUnit,
        frontTitleCheck,
        frontTitleSize,
        frontTitlelineHeight,
        frontTitleShadowColor,
        frontTitleShadowBlur,
        frontTitleShadowHorizontal,
        frontTitleShadowVertical,
        frontTitlePaddingTop,
        frontTitlePaddingRight,
        frontTitlePaddingBottom,
        frontTitlePaddingLeft,
        frontTitleMarginTop,
        frontTitleMarginRight,
        frontTitleMarginBottom,
        frontTitleMarginLeft,
        frontDescCheck,
        frontDescSize,
        frontDesclineHeight,
        frontDescShadowColor,
        frontDescShadowBlur,
        frontDescShadowHorizontal,
        frontDescShadowVertical,
        frontDescPaddingTop,
        frontDescPaddingRight,
        frontDescPaddingBottom,
        frontDescPaddingLeft,
        frontDescMarginTop,
        frontDescMarginRight,
        frontDescMarginBottom,
        frontDescMarginLeft,
        froMarUnit,
        froPadUnit,
        backMarUnit,
        backPadUnit,
        backIconType,
        backIconSelected,
        backIconCheck,
        backIconSize,
        backIconColor,
        backIconBackground,
        backIconBorderType,
        backIconBorderWidth,
        backIconBorderRadius,
        backIconBorderColor,
        backIconPaddingTop,
        backIconPaddingRight,
        backIconPaddingBottom,
        backIconPaddingLeft,
        backIconMarginTop,
        backIconMarginRight,
        backIconMarginBottom,
        backIconMarginLeft,
        backIconUnit,
        backTitleCheck,
        backTitleSize,
        backTitleLineHeight,
        backTitleShadowColor,
        backTitleShadowBlur,
        backTitleShadowHorizontal,
        backTitleShadowVertical,
        backTitlePaddingTop,
        backTitlePaddingRight,
        backTitlePaddingBottom,
        backTitlePaddingLeft,
        backTitleMarginTop,
        backTitleMarginRight,
        backTitleMarginBottom,
        backTitleMarginLeft,
        backDescCheck,
        backDescSize,
        backDesclineHeight,
        backDescShadowColor,
        backDescShadowBlur,
        backDescShadowHorizontal,
        backDescShadowVertical,
        backDescPaddingTop,
        backDescPaddingRight,
        backDescPaddingBottom,
        backDescPaddingLeft,
        backDescMarginTop,
        backDescMarginRight,
        backDescMarginBottom,
        backDescMarginLeft,
        alignFroHorizontal,
        alignFroVertical,
        alignBackHorizontal,
        alignBackVertical

    } = props.attributes;

    const mainClasses = classnames(className, "premium-flip");

    return (
        <div className={`${mainClasses}-container `} id={`premium-flip-${id}`} >
            <div className={`premium-flip-main-box `}>

                <div className={`premium-flip-front premium-flip-frontlr `} style={{ backgroundColor: frontBackgroundColor || "#767676" }}>
                    <div className={`premium-flip-front-overlay`}>
                        <div className={`premium-flip-front-content-container`}>
                            <div className={`premium-flip-front-content`} style={{ justifyContent: alignFroHorizontal, alignItems: alignFroVertical }}>
                                <div className={`premium-flip-text-wrapper PafadeInRevLeft`}>

                                    {frontIconCheck && (
                                        <div
                                            className={`premium-flipbox__froIcon`}
                                            style={{
                                                marginTop: (frontIconMarginTop|| "0") + (froMarUnit || "px"),
                                                marginRight: (frontIconMarginRight || "0") + (froMarUnit || "px"),
                                                marginBottom: (frontIconMarginBottom || "0") + (froMarUnit || "px"),
                                                marginLeft: (frontIconMarginLeft || "0") + (froMarUnit || "px"),
                                            }}
                                        >

                                            {frontIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                <p className={`premium-icon__alert`}>
                                                    {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                </p>
                                            )}
                                            {(frontIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                <i
                                                    className={`premium-icon ${frontIconSelected}`}
                                                    style={{
                                                        width: "auto",
                                                        height: "100%",
                                                        color: frontIconColor || "#000",
                                                        backgroundColor: frontIconBackground || "transparent",
                                                        fontSize: (frontIconSize || 50) + frontIconUnit,
                                                        border: froIconBorderType || "none",
                                                        borderWidth: (froIconBorderWidth || "0") + "px",
                                                        borderRadius: (froIconBorderRadius || "0") + "px",
                                                        borderColor: froIconBorderColor || "transparent",
                                                        paddingTop: (frontIconPaddingTop || "0") + (froPadUnit || "px"),
                                                        paddingRight: (frontIconPaddingRight || "0") + (froPadUnit || "px"),
                                                        paddingBottom: (frontIconPaddingBottom || "0") + (froPadUnit || "px"),
                                                        paddingLeft: (frontIconPaddingLeft || "0") + (froPadUnit || "px"),
                                                    }}
                                                />
                                            )}

                                        </div>
                                    )}

                                    {frontTitleCheck && (
                                        <RichText.Content
                                            tagName="h1"
                                            className={`premium-flip-front-title`}
                                            value={frontTitle}
                                            style={{
                                                color: frontTitleColor || "#000",
                                                fontSize: frontTitleSize + "px",
                                                lineHeight: frontTitlelineHeight + "px",
                                                textShadow: `${frontTitleShadowHorizontal}px ${frontTitleShadowVertical}px ${frontTitleShadowBlur}px ${frontTitleShadowColor}`,
                                                paddingTop: frontTitlePaddingTop + "px",
                                                paddingBottom: frontTitlePaddingBottom + "px",
                                                paddingLeft: frontTitlePaddingLeft + "px",
                                                paddingRight: frontTitlePaddingRight + "px",
                                                marginTop: frontTitleMarginTop + "px",
                                                marginBottom: frontTitleMarginBottom + "px",
                                                marginLeft: frontTitleMarginLeft + "px",
                                                marginRight: frontTitleMarginRight + "px",
                                            }}
                                        />
                                    )}
                                    {frontDescCheck && (
                                        <RichText.Content
                                            tagName="p"
                                            className={`premium-flip-front-description`}
                                            value={frontDescription}
                                            style={{
                                                color: frontDescriptionColor || "#000",
                                                fontSize: frontDescSize + "px",
                                                lineHeight: frontDesclineHeight + "px",
                                                textShadow: `${frontDescShadowHorizontal}px ${frontDescShadowVertical}px ${frontDescShadowBlur}px ${frontDescShadowColor}`,
                                                paddingTop: frontDescPaddingTop + "px",
                                                paddingBottom: frontDescPaddingBottom + "px",
                                                paddingLeft: frontDescPaddingLeft + "px",
                                                paddingRight: frontDescPaddingRight + "px",
                                                marginTop: frontDescMarginTop + "px",
                                                marginBottom: frontDescMarginBottom + "px",
                                                marginLeft: frontDescMarginLeft + "px",
                                                marginRight: frontDescMarginRight + "px",
                                            }}
                                        />
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`premium-flip-back premium-flip-backlr `} style={{ backgroundColor: backBackgroundColor || "#767676" }}>
                    <div className={`premium-flip-back-overlay`}>
                        <div className={`premium-flip-back-content-container`}>
                            <div className={`premium-flip-back-content`} style={{ justifyContent: alignBackHorizontal, alignItems: alignBackVertical }}>
                                <div className={`premium-flip-back-text-wrapper PafadeInRevRight`}>

                                    {backIconCheck && (
                                        <div
                                            className={`premium-flipbox__backIcon`}
                                            style={{
                                                marginTop: (backIconMarginTop || "0") + (backMarUnit || "px"),
                                                marginRight: (backIconMarginRight || "0") + (backMarUnit || "px"),
                                                marginBottom: (backIconMarginBottom || "0") + (backMarUnit || "px"),
                                                marginLeft: (backIconMarginLeft || "0") + (backMarUnit || "px"),
                                            }}
                                        >

                                            {backIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                <p className={`premium-icon__alert`}>
                                                    {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                </p>
                                            )}
                                            {(backIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                <i
                                                    className={`premium-icon ${backIconSelected}`}
                                                    style={{
                                                        width: "auto",
                                                        height: "100%",
                                                        color: backIconColor || "#000",
                                                        backgroundColor: backIconBackground || "transparent",
                                                        fontSize: (backIconSize || 50) + backIconUnit,
                                                        border: backIconBorderType || "none",
                                                        borderWidth: (backIconBorderWidth || "0") + "px",
                                                        borderRadius: (backIconBorderRadius || "0") + "px",
                                                        borderColor: backIconBorderColor || "transparent",
                                                        paddingTop: (backIconPaddingTop || "0") + (backPadUnit || "px"),
                                                        paddingRight: (backIconPaddingRight || "0") + (backPadUnit || "px"),
                                                        paddingBottom: (backIconPaddingBottom || "0") + (backPadUnit || "px"),
                                                        paddingLeft: (backIconPaddingLeft || "0") + (backPadUnit || "px"),
                                                    }}
                                                />
                                            )}
                                        </div>
                                    )}

                                    {backTitleCheck && (
                                        <RichText.Content
                                            tagName="h1"
                                            className={`premium-flip-back-title`}
                                            value={backTitle}
                                            style={{
                                                color: backTitleColor || "#000",
                                                fontSize: backTitleSize + "px",
                                                lineHeight: backTitleLineHeight + "px",
                                                textShadow: `${backTitleShadowHorizontal}px ${backTitleShadowVertical}px ${backTitleShadowBlur}px ${backTitleShadowColor}`,
                                                paddingTop: backTitlePaddingTop + "px",
                                                paddingBottom: backTitlePaddingBottom + "px",
                                                paddingLeft: backTitlePaddingLeft + "px",
                                                paddingRight: backTitlePaddingRight + "px",
                                                marginTop: backTitleMarginTop + "px",
                                                marginBottom: backTitleMarginBottom + "px",
                                                marginLeft: backTitleMarginLeft + "px",
                                                marginRight: backTitleMarginRight + "px",
                                            }}
                                        />
                                    )}
                                    {backDescCheck && (
                                        <RichText.Content
                                            tagName="p"
                                            className={`premium-flip-back-description`}
                                            value={backDescription}
                                            style={{
                                                color: backDescriptionColor || "#000",
                                                fontSize: backDescSize + "px",
                                                lineHeight: backDesclineHeight + "px",
                                                textShadow: `${backDescShadowHorizontal}px ${backDescShadowVertical}px ${backDescShadowBlur}px ${backDescShadowColor}`,
                                                paddingTop: backDescPaddingTop + "px",
                                                paddingBottom: backDescPaddingBottom + "px",
                                                paddingLeft: backDescPaddingLeft + "px",
                                                paddingRight: backDescPaddingRight + "px",
                                                marginTop: backDescMarginTop + "px",
                                                marginBottom: backDescMarginBottom + "px",
                                                marginLeft: backDescMarginLeft + "px",
                                                marginRight: backDescMarginRight + "px",
                                            }}
                                        />
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default save;