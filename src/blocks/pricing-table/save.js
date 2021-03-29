import classnames from "classnames";
import hexToRgba from "hex-to-rgba";
const { RichText } = wp.blockEditor;
const save = props => {
    const { className } = props;
    const {
        borderUpdated,
        btnBorderUpdated,
        priceOpacity,
        tableOpacity,
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
        slashWeight,
        slashV,
        currPrice,
        currColor,
        currWeight,
        currV,
        valPrice,
        valColor,
        valWeight,
        valV,
        divPrice,
        divColor,
        divWeight,
        divV,
        durPrice,
        durColor,
        durWeight,
        durV,
        btnChecked,
        btnText,
        btnLink,
        btnTarget,
        btnColor,
        btnHoverColor,
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
        btnBorderTop,
        btnBorderRight,
        btnBorderBottom,
        btnBorderLeft,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
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
        badgeWeight,
        badgeLetter,
        badgeStyle,
        badgeUpper,
        badgeText,
        listChecked,
        listColor,
        listWeight,
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
        block_id,
        hideDesktop,
        hideTablet,
        hideMobile
    } = props.attributes;
    const mainClasses = classnames(className, "premium-pricing-table");
    return (
        <div
            id={`${mainClasses}-${block_id}`}
            className={`${mainClasses} premium-pricing-table-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: contentAlign,
                backgroundColor: tableBack
                    ? hexToRgba(tableBack, tableOpacity)
                    : "transparent",
                borderStyle: borderType,
                borderWidth: borderUpdated
                    ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                    : borderWidth + "px",
                borderRadius: borderRadius + "px",
                borderColor: borderColor,
                padding: tablePadding + "px",
                boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`
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
                                "right" === badgePos
                                    ? badgeBack
                                    : "transparent",
                            borderTopColor:
                                "left" === badgePos ? badgeBack : "transparent",
                            borderBottomWidth: badgeSize + "px",
                            borderRightWidth: badgeSize + "px",
                            borderTopWidth:
                                "left" === badgePos ? badgeSize + "px" : "none",
                            borderLeftWidth:
                                "right" === badgePos ? badgeSize + "px" : "none"
                        }}
                    >
                        <span
                            style={{
                                color: badgeColor,
                                fontWeight: badgeWeight,
                                textTransform: badgeUpper
                                    ? "uppercase"
                                    : "none",
                                letterSpacing: badgeLetter + "px",
                                fontStyle: badgeStyle,
                                width: badgeWidth + "px",
                                top: badgeTop + "px",
                                left:
                                    "left" === badgePos
                                        ? badgeHorizontal + "px"
                                        : "auto",
                                right:
                                    "right" === badgePos
                                        ? badgeHorizontal + "px"
                                        : "auto"
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
                        paddingBottom: titleMarginB + "px"
                    }}
                >
                    <RichText.Content
                        tagName={titleTag.toLowerCase()}
                        className={`premium-pricing-table__title`}
                        value={title}
                        style={{
                            color: titleColor,
                            background: titleBack,
                            letterSpacing: titleLetter + "px",
                            textTransform: titleUpper ? "uppercase" : "none",
                            fontStyle: titleStyle,
                            fontWeight: titleWeight,
                            lineHeight: titleLine + "px",
                            marginBottom: titleMarginB + "px",
                            padding: titlePadding + "px",
                            textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
                        }}
                    />
                </div>
            )}
            {priceChecked && (
                <div
                    className={`premium-pricing-table__price_wrap`}
                    style={{
                        backgroundColor: priceBack
                            ? hexToRgba(priceBack, priceOpacity)
                            : "transparent",
                        marginTop: priceMarginT + "px",
                        marginBottom: priceMarginB + "px",
                        padding: pricePadding + "px",
                        justifyContent: contentAlign
                    }}
                >
                    {slashPrice && (
                        <strike
                            className={`premium-pricing-table__slash`}
                            style={{
                                color: slashColor,
                                fontWeight: slashWeight,
                                alignSelf: slashV
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
                                fontWeight: currWeight,
                                alignSelf: currV
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
                                fontWeight: valWeight,
                                alignSelf: valV
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
                                fontWeight: divWeight,
                                alignSelf: divV
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
                                fontWeight: durWeight,
                                alignSelf: durV
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
                        marginBottom: listMarginB + "px"
                    }}
                >
                    <ul
                        className={`premium-pricing-table__list list-${listStyle}`}
                        style={{
                            color: listColor,
                            background: listBack,
                            padding: listPadding + "px",
                            listStyle:
                                "check" !== listStyle ? listStyle : "none",
                            listStylePosition: "inside",
                            fontWeight: listWeight,
                            letterSpacing: listLetter + "px",
                            textTransform: listUpper ? "uppercase" : "none",
                            fontStyle: listItemsStyle,
                            lineHeight: listLine + "px",
                            textAlign: featsAlign ? featsAlign : contentAlign
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
                            fontWeight: descWeight,
                            lineHeight: descLine + "px",
                            letterSpacing: descLetter + "px",
                            fontStyle: descStyle,
                            marginTop: descMarginT + "px",
                            marginBottom: descMarginB + "px",
                            padding: descPadding + "px"
                        }}
                    />
                </div>
            )}
            {btnChecked && (
                <div
                    className={`premium-pricing-table__button`}
                    style={{
                        width: btnWidth + "%"
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
                            fontWeight: btnWeight,
                            letterSpacing: btnLetter + "px",
                            fontStyle: btnStyle,
                            lineHeight: btnLine + "px",
                            marginTop: btnMarginT,
                            marginBottom: btnMarginB,
                            padding: btnPadding + btnPaddingU,
                            borderStyle: btnBorderType,
                            borderWidth: btnBorderUpdated
                                ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                : btnBorderWidth + "px",
                            borderRadius: btnBorderRadius + "px",
                            borderColor: btnBorderColor
                        }}
                    >
                        <RichText.Content
                            tagName="span"
                            onChange={newText =>
                                setAttributes({ btnText: newText })
                            }
                            value={btnText}
                            style={{
                                textTransform: btnUpper ? "uppercase" : "none"
                            }}
                        />
                    </a>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-pricing-table-${block_id} .premium-pricing-table__button_link:hover {`,
                                `color: ${btnHoverColor} !important;`,
                                `background: ${btnHoverBack} !important`,
                                "}"
                            ].join("\n")
                        }}
                    />
                </div>
            )}
        </div>
    );
};
export default save;