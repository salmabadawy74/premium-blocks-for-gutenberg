import attributes from "./attributes";

const className = "premium-pricing-table";

const { __ } = wp.i18n;

const { RichText } = wp.editor;

const deprecatedContent = [
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                borderLeft: "",
                borderTop: "",
                borderLeft: "",
                borderRight: "",
                btnBorderRight: "",
                btnBorderTop: "",
                btnBorderBottom: "",
                btnBorderLeft: "",
                borderUpdated: "",
                btnBorderUpdated: "",
                classMigrate: false,
                block_id: '',
                titleSizeUnit: 'px',
                titleSizeMobile: '',
                titleSizeTablet: '',
                valSizeUnit: "px",
                valSizeTablet: '',
                valSizeMobile: '',
                badgeTextUnit: "px",
                badgeTextSizeTablet: '',
                badgeTextSizeMobile: '',
                btnSizeUnit: 'px',
                btnSizeMobile: '',
                btnSizeTablet: '',
                currSizeUnit: 'px',
                currSizeMobile: '',
                currSizeTablet: '',
                descSizeUnit: 'px',
                descSizeMobile: '',
                descSizeTablet: '',
                divSizeUnit: 'px',
                divSizeMobile: '',
                divSizeTablet: '',
                durSizeUnit: "px",
                durSizeTablet: '',
                durSizeMobile: '',
                listSizeUnit: 'px',
                listSizeMobile: '',
                listSizeTablet: '',
                slashSizeUnit: 'px',
                slashSizeMobile: '',
                slashSizeTablet: '',
                tableOpacity: "",
                priceOpacity: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                tableShadowBlur,
                tableShadowColor,
                tableShadowHorizontal,
                tableShadowVertical,
                tableShadowPosition,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleSize,
                titleLetter,
                titleUpper,
                titleStyle,
                titleLine,
                titleWeight,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descSize,
                descLine,
                descWeight,
                descStyle,
                descLetter,
                descBack,
                descMarginT,
                descMarginB,
                descPadding,
                priceChecked,
                priceBack,
                priceMarginT,
                priceMarginB,
                pricePadding,
                slashPrice,
                slashColor,
                slashSize,
                slashWeight,
                slashV,
                currPrice,
                currColor,
                currSize,
                currWeight,
                currV,
                valPrice,
                valColor,
                valSize,
                valWeight,
                valV,
                divPrice,
                divColor,
                divSize,
                divWeight,
                divV,
                durPrice,
                durColor,
                durSize,
                durWeight,
                durV,
                btnChecked,
                btnText,
                btnLink,
                btnTarget,
                btnColor,
                btnHoverColor,
                btnSize,
                btnWeight,
                btnLine,
                btnLetter,
                btnUpper,
                btnStyle,
                btnBack,
                btnHoverBack,
                btnMarginT,
                btnMarginB,
                btnPadding,
                btnPaddingU,
                btnWidth,
                btnBorderType,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                badgeChecked,
                badgePos,
                badgeBack,
                badgeColor,
                badgeTop,
                badgeHorizontal,
                badgeWidth,
                badgeSize,
                badgeTextSize,
                badgeWeight,
                badgeLetter,
                badgeStyle,
                badgeUpper,
                badgeText,
                listChecked,
                listColor,
                listWeight,
                listSize,
                listItemsStyle,
                listLine,
                listUpper,
                listLetter,
                listBack,
                listItems,
                listMarginB,
                listMarginT,
                listPadding,
                listStyle,
                featsAlign,
                id,
            } = props.attributes;
            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        padding: tablePadding + "px",
                        boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`,
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgePos}`}
                        >
                            <div
                                className={`premium-pricing-table__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgePos ? badgeBack : "transparent",
                                    borderTopColor:
                                        "left" === badgePos ? badgeBack : "transparent",
                                    borderBottomWidth: badgeSize + "px",
                                    borderRightWidth: badgeSize + "px",
                                    borderTopWidth:
                                        "left" === badgePos ? badgeSize + "px" : "none",
                                    borderLeftWidth:
                                        "right" === badgePos ? badgeSize + "px" : "none",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: badgeTextSize + "px",
                                        color: badgeColor,
                                        fontWeight: badgeWeight,
                                        textTransform: badgeUpper ? "uppercase" : "none",
                                        letterSpacing: badgeLetter + "px",
                                        fontStyle: badgeStyle,
                                        width: badgeWidth + "px",
                                        top: badgeTop + "px",
                                        left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                                        right:
                                            "right" === badgePos ? badgeHorizontal + "px" : "auto",
                                    }}
                                >
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`premium-pricing-table__title_wrap`}
                            style={{
                                paddingTop: titleMarginT + "px",
                                paddingBottom: titleMarginB + "px",
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`premium-pricing-table__title`}
                                value={title}
                                style={{
                                    color: titleColor,
                                    background: titleBack,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    lineHeight: titleLine + "px",
                                    marginBottom: titleMarginB + "px",
                                    padding: titlePadding + "px",
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`premium-pricing-table__price_wrap`}
                            style={{
                                background: priceBack,
                                marginTop: priceMarginT + "px",
                                marginBottom: priceMarginB + "px",
                                padding: pricePadding + "px",
                                justifyContent: contentAlign,
                            }}
                        >
                            {slashPrice && (
                                <strike
                                    className={`premium-pricing-table__slash`}
                                    style={{
                                        color: slashColor,
                                        fontSize: slashSize + "px",
                                        fontWeight: slashWeight,
                                        alignSelf: slashV,
                                    }}
                                >
                                    {slashPrice}
                                </strike>
                            )}
                            {currPrice && (
                                <span
                                    className={`premium-pricing-table__currency`}
                                    style={{
                                        color: currColor,
                                        fontSize: currSize + "px",
                                        fontWeight: currWeight,
                                        alignSelf: currV,
                                    }}
                                >
                                    {currPrice}
                                </span>
                            )}
                            {valPrice && (
                                <span
                                    className={`premium-pricing-table__val`}
                                    style={{
                                        color: valColor,
                                        fontSize: valSize + "px",
                                        fontWeight: valWeight,
                                        alignSelf: valV,
                                    }}
                                >
                                    {valPrice}
                                </span>
                            )}
                            {divPrice && (
                                <span
                                    className={`premium-pricing-table__divider`}
                                    style={{
                                        color: divColor,
                                        fontSize: divSize + "px",
                                        fontWeight: divWeight,
                                        alignSelf: divV,
                                    }}
                                >
                                    {divPrice}
                                </span>
                            )}
                            {durPrice && (
                                <span
                                    className={`premium-pricing-table__dur`}
                                    style={{
                                        color: durColor,
                                        fontSize: durSize + "px",
                                        fontWeight: durWeight,
                                        alignSelf: durV,
                                    }}
                                >
                                    {durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`premium-pricing-table__list_wrap`}
                            style={{
                                marginTop: listMarginT + "px",
                                marginBottom: listMarginB + "px",
                            }}
                        >
                            <ul
                                className={`premium-pricing-table__list list-${listStyle}`}
                                style={{
                                    color: listColor,
                                    fontSize: listSize + "px",
                                    background: listBack,
                                    padding: listPadding + "px",
                                    listStyle: "check" !== listStyle ? listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: listWeight,
                                    letterSpacing: listLetter + "px",
                                    textTransform: listUpper ? "uppercase" : "none",
                                    fontStyle: listItemsStyle,
                                    lineHeight: listLine + "px",
                                    textAlign: featsAlign ? featsAlign : contentAlign,
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`premium-pricing-table__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`premium-pricing-table__desc`}
                                value={desc}
                                style={{
                                    color: descColor,
                                    background: descBack,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px",
                                    letterSpacing: descLetter + "px",
                                    fontStyle: descStyle,
                                    marginTop: descMarginT + "px",
                                    marginBottom: descMarginB + "px",
                                    padding: descPadding + "px",
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`premium-pricing-table__button`}
                            style={{
                                width: btnWidth + "%",
                            }}
                        >
                            <a
                                class={`premium-pricing-table__button_link`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                style={{
                                    color: btnColor,
                                    background: btnBack ? btnBack : "transparent",
                                    fontSize: btnSize + "px",
                                    fontWeight: btnWeight,
                                    letterSpacing: btnLetter + "px",
                                    fontStyle: btnStyle,
                                    lineHeight: btnLine + "px",
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                    padding: btnPadding + btnPaddingU,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={(newText) => setAttributes({ btnText: newText })}
                                    value={btnText}
                                    style={{
                                        textTransform: btnUpper ? "uppercase" : "none",
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${btnHoverColor} !important;`,
                                        `background: ${btnHoverBack} !important`,
                                        "}",
                                    ].join("\n"),
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            return Object.assign(attributes, { featsAlign: "" });
        },
        save: (props) => {
            const {
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                tableShadowBlur,
                tableShadowColor,
                tableShadowHorizontal,
                tableShadowVertical,
                tableShadowPosition,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleSize,
                titleLetter,
                titleUpper,
                titleStyle,
                titleLine,
                titleWeight,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descSize,
                descLine,
                descWeight,
                descStyle,
                descLetter,
                descBack,
                descMarginT,
                descMarginB,
                descPadding,
                priceChecked,
                priceBack,
                priceMarginT,
                priceMarginB,
                pricePadding,
                slashPrice,
                slashColor,
                slashSize,
                slashWeight,
                slashV,
                currPrice,
                currColor,
                currSize,
                currWeight,
                currV,
                valPrice,
                valColor,
                valSize,
                valWeight,
                valV,
                divPrice,
                divColor,
                divSize,
                divWeight,
                divV,
                durPrice,
                durColor,
                durSize,
                durWeight,
                durV,
                btnChecked,
                btnText,
                btnLink,
                btnTarget,
                btnColor,
                btnHoverColor,
                btnSize,
                btnWeight,
                btnLine,
                btnLetter,
                btnUpper,
                btnStyle,
                btnBack,
                btnHoverBack,
                btnMarginT,
                btnMarginB,
                btnPadding,
                btnPaddingU,
                btnWidth,
                btnBorderType,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                badgeChecked,
                badgePos,
                badgeBack,
                badgeColor,
                badgeTop,
                badgeHorizontal,
                badgeWidth,
                badgeSize,
                badgeTextSize,
                badgeWeight,
                badgeLetter,
                badgeStyle,
                badgeUpper,
                badgeText,
                listChecked,
                listColor,
                listWeight,
                listSize,
                listItemsStyle,
                listLine,
                listUpper,
                listLetter,
                listBack,
                listItems,
                listMarginB,
                listMarginT,
                listPadding,
                listStyle,
                id,
            } = props.attributes;
            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        padding: tablePadding + "px",
                        boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`,
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`${className}__badge_wrap ${className}__badge_${badgePos}`}
                        >
                            <div
                                className={`${className}__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgePos ? badgeBack : "transparent",
                                    borderTopColor:
                                        "left" === badgePos ? badgeBack : "transparent",
                                    borderBottomWidth: badgeSize + "px",
                                    borderRightWidth: badgeSize + "px",
                                    borderTopWidth:
                                        "left" === badgePos ? badgeSize + "px" : "none",
                                    borderLeftWidth:
                                        "right" === badgePos ? badgeSize + "px" : "none",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: badgeTextSize + "px",
                                        color: badgeColor,
                                        fontWeight: badgeWeight,
                                        textTransform: badgeUpper ? "uppercase" : "none",
                                        letterSpacing: badgeLetter + "px",
                                        fontStyle: badgeStyle,
                                        width: badgeWidth + "px",
                                        top: badgeTop + "px",
                                        left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                                        right:
                                            "right" === badgePos ? badgeHorizontal + "px" : "auto",
                                    }}
                                >
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                paddingTop: titleMarginT + "px",
                                paddingBottom: titleMarginB + "px",
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={title}
                                style={{
                                    color: titleColor,
                                    background: titleBack,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    lineHeight: titleLine + "px",
                                    marginBottom: titleMarginB + "px",
                                    padding: titlePadding + "px",
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`${className}__price_wrap`}
                            style={{
                                background: priceBack,
                                marginTop: priceMarginT + "px",
                                marginBottom: priceMarginB + "px",
                                padding: pricePadding + "px",
                                justifyContent: contentAlign,
                            }}
                        >
                            {slashPrice && (
                                <strike
                                    className={`${className}__slash`}
                                    style={{
                                        color: slashColor,
                                        fontSize: slashSize + "px",
                                        fontWeight: slashWeight,
                                        alignSelf: slashV,
                                    }}
                                >
                                    {slashPrice}
                                </strike>
                            )}
                            {currPrice && (
                                <span
                                    className={`${className}__currency`}
                                    style={{
                                        color: currColor,
                                        fontSize: currSize + "px",
                                        fontWeight: currWeight,
                                        alignSelf: currV,
                                    }}
                                >
                                    {currPrice}
                                </span>
                            )}
                            {valPrice && (
                                <span
                                    className={`${className}__val`}
                                    style={{
                                        color: valColor,
                                        fontSize: valSize + "px",
                                        fontWeight: valWeight,
                                        alignSelf: valV,
                                    }}
                                >
                                    {valPrice}
                                </span>
                            )}
                            {divPrice && (
                                <span
                                    className={`${className}__divider`}
                                    style={{
                                        color: divColor,
                                        fontSize: divSize + "px",
                                        fontWeight: divWeight,
                                        alignSelf: divV,
                                    }}
                                >
                                    {divPrice}
                                </span>
                            )}
                            {durPrice && (
                                <span
                                    className={`${className}__dur`}
                                    style={{
                                        color: durColor,
                                        fontSize: durSize + "px",
                                        fontWeight: durWeight,
                                        alignSelf: durV,
                                    }}
                                >
                                    {durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`${className}__list_wrap`}
                            style={{
                                marginTop: listMarginT + "px",
                                marginBottom: listMarginB + "px",
                            }}
                        >
                            <ul
                                className={`${className}__list list-${listStyle}`}
                                style={{
                                    color: listColor,
                                    fontSize: listSize + "px",
                                    background: listBack,
                                    padding: listPadding + "px",
                                    listStyle: "check" !== listStyle ? listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: listWeight,
                                    letterSpacing: listLetter + "px",
                                    textTransform: listUpper ? "uppercase" : "none",
                                    fontStyle: listItemsStyle,
                                    lineHeight: listLine + "px",
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`${className}__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={desc}
                                style={{
                                    color: descColor,
                                    background: descBack,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px",
                                    letterSpacing: descLetter + "px",
                                    fontStyle: descStyle,
                                    marginTop: descMarginT + "px",
                                    marginBottom: descMarginB + "px",
                                    padding: descPadding + "px",
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`${className}__button`}
                            style={{
                                width: btnWidth + "%",
                            }}
                        >
                            <a
                                class={`${className}__button_link`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                style={{
                                    color: btnColor,
                                    background: btnBack ? btnBack : "transparent",
                                    fontSize: btnSize + "px",
                                    fontWeight: btnWeight,
                                    letterSpacing: btnLetter + "px",
                                    fontStyle: btnStyle,
                                    lineHeight: btnLine + "px",
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                    padding: btnPadding + btnPaddingU,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={(newText) => setAttributes({ btnText: newText })}
                                    value={btnText}
                                    style={{
                                        textTransform: btnUpper ? "uppercase" : "none",
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${btnHoverColor} !important;`,
                                        `background: ${btnHoverBack} !important`,
                                        "}",
                                    ].join("\n"),
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            return Object.assign(attributes, { btnPaddingU: "" });
        },
        save: (props) => {
            const {
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleSize,
                titleLetter,
                titleUpper,
                titleStyle,
                titleLine,
                titleWeight,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descSize,
                descLine,
                descWeight,
                descStyle,
                descLetter,
                descBack,
                descMarginT,
                descMarginB,
                descPadding,
                priceChecked,
                priceBack,
                priceMarginT,
                priceMarginB,
                pricePadding,
                slashPrice,
                slashColor,
                slashSize,
                slashWeight,
                slashV,
                currPrice,
                currColor,
                currSize,
                currWeight,
                currV,
                valPrice,
                valColor,
                valSize,
                valWeight,
                valV,
                divPrice,
                divColor,
                divSize,
                divWeight,
                divV,
                durPrice,
                durColor,
                durSize,
                durWeight,
                durV,
                btnChecked,
                btnText,
                btnLink,
                btnTarget,
                btnColor,
                btnHoverColor,
                btnSize,
                btnWeight,
                btnLine,
                btnLetter,
                btnUpper,
                btnStyle,
                btnBack,
                btnHoverBack,
                btnMarginT,
                btnMarginB,
                btnPadding,
                btnWidth,
                btnBorderType,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                badgeChecked,
                badgePos,
                badgeBack,
                badgeColor,
                badgeTop,
                badgeHorizontal,
                badgeWidth,
                badgeSize,
                badgeTextSize,
                badgeWeight,
                badgeLetter,
                badgeStyle,
                badgeUpper,
                badgeText,
                listChecked,
                listColor,
                listWeight,
                listSize,
                listItemsStyle,
                listLine,
                listUpper,
                listLetter,
                listBack,
                listItems,
                listMarginB,
                listMarginT,
                listPadding,
                listStyle,
                id,
            } = props.attributes;
            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        padding: tablePadding + "px",
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`${className}__badge_wrap ${className}__badge_${badgePos}`}
                        >
                            <div
                                className={`${className}__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgePos ? badgeBack : "transparent",
                                    borderTopColor:
                                        "left" === badgePos ? badgeBack : "transparent",
                                    borderBottomWidth: badgeSize + "px",
                                    borderRightWidth: badgeSize + "px",
                                    borderTopWidth:
                                        "left" === badgePos ? badgeSize + "px" : "none",
                                    borderLeftWidth:
                                        "right" === badgePos ? badgeSize + "px" : "none",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: badgeTextSize + "px",
                                        color: badgeColor,
                                        fontWeight: badgeWeight,
                                        textTransform: badgeUpper ? "uppercase" : "none",
                                        letterSpacing: badgeLetter + "px",
                                        fontStyle: badgeStyle,
                                        width: badgeWidth + "px",
                                        top: badgeTop + "px",
                                        left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                                        right:
                                            "right" === badgePos ? badgeHorizontal + "px" : "auto",
                                    }}
                                >
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                paddingTop: titleMarginT + "px",
                                paddingBottom: titleMarginB + "px",
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={title}
                                style={{
                                    color: titleColor,
                                    background: titleBack,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    lineHeight: titleLine + "px",
                                    marginBottom: titleMarginB + "px",
                                    padding: titlePadding + "px",
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`${className}__price_wrap`}
                            style={{
                                background: priceBack,
                                marginTop: priceMarginT + "px",
                                marginBottom: priceMarginB + "px",
                                padding: pricePadding + "px",
                                justifyContent: contentAlign,
                            }}
                        >
                            {slashPrice && (
                                <strike
                                    className={`${className}__slash`}
                                    style={{
                                        color: slashColor,
                                        fontSize: slashSize + "px",
                                        fontWeight: slashWeight,
                                        alignSelf: slashV,
                                    }}
                                >
                                    {slashPrice}
                                </strike>
                            )}
                            {currPrice && (
                                <span
                                    className={`${className}__currency`}
                                    style={{
                                        color: currColor,
                                        fontSize: currSize + "px",
                                        fontWeight: currWeight,
                                        alignSelf: currV,
                                    }}
                                >
                                    {currPrice}
                                </span>
                            )}
                            {valPrice && (
                                <span
                                    className={`${className}__val`}
                                    style={{
                                        color: valColor,
                                        fontSize: valSize + "px",
                                        fontWeight: valWeight,
                                        alignSelf: valV,
                                    }}
                                >
                                    {valPrice}
                                </span>
                            )}
                            {divPrice && (
                                <span
                                    className={`${className}__divider`}
                                    style={{
                                        color: divColor,
                                        fontSize: divSize + "px",
                                        fontWeight: divWeight,
                                        alignSelf: divV,
                                    }}
                                >
                                    {divPrice}
                                </span>
                            )}
                            {durPrice && (
                                <span
                                    className={`${className}__dur`}
                                    style={{
                                        color: durColor,
                                        fontSize: durSize + "px",
                                        fontWeight: durWeight,
                                        alignSelf: durV,
                                    }}
                                >
                                    {durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`${className}__list_wrap`}
                            style={{
                                marginTop: listMarginT + "px",
                                marginBottom: listMarginB + "px",
                            }}
                        >
                            <ul
                                className={`${className}__list list-${listStyle}`}
                                style={{
                                    color: listColor,
                                    fontSize: listSize + "px",
                                    background: listBack,
                                    padding: listPadding + "px",
                                    listStyle: "check" !== listStyle ? listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: listWeight,
                                    letterSpacing: listLetter + "px",
                                    textTransform: listUpper ? "uppercase" : "none",
                                    fontStyle: listItemsStyle,
                                    lineHeight: listLine + "px",
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`${className}__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={desc}
                                style={{
                                    color: descColor,
                                    background: descBack,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px",
                                    letterSpacing: descLetter + "px",
                                    fontStyle: descStyle,
                                    marginTop: descMarginT + "px",
                                    marginBottom: descMarginB + "px",
                                    padding: descPadding + "px",
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`${className}__button`}
                            style={{
                                width: btnWidth + "%",
                            }}
                        >
                            <a
                                class={`${className}__button_link`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                style={{
                                    color: btnColor,
                                    background: btnBack ? btnBack : "transparent",
                                    fontSize: btnSize + "px",
                                    fontWeight: btnWeight,
                                    letterSpacing: btnLetter + "px",
                                    fontStyle: btnStyle,
                                    lineHeight: btnLine + "px",
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                    padding: btnPadding,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={(newText) => setAttributes({ btnText: newText })}
                                    value={btnText}
                                    style={{
                                        textTransform: btnUpper ? "uppercase" : "none",
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${btnHoverColor} !important;`,
                                        `background: ${btnHoverBack} !important`,
                                        "}",
                                    ].join("\n"),
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
];

export default deprecatedContent;