import classnames from "classnames";

const { RichText } = wp.blockEditor;

const save = props => {
    const { className } = props;

    const {
        borderUpdated,
        btnBorderUpdated,
        contentAlign,
        borderColor,
        title,
        desc,
        titleChecked,
        descChecked,
        priceChecked,
        selectedStyle,
        btnChecked,
        btnText,
        btnLink,
        badgeChecked,
        listChecked,
        listItems,
        block_id,
        classMigrate,
        hideDesktop,
        hideTablet,
        hideMobile,
        titleStyles,
        priceStyles,
        featureStyles,
        descStyles,
        buttonStyles,
        badgeStyles,
        tableStyles,
        btnBorderTop,
        btnBorderRight,
        btnBorderBottom,
        btnBorderLeft,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
    } = props.attributes;

    const mainClasses = classnames(className, "premium-pricing-table");

    return (
        <div
            id={`${mainClasses}-${block_id}`}
            className={`${mainClasses} premium-pricing-table-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: contentAlign,
                backgroundColor: tableStyles[0].tableBack,
                borderStyle: tableStyles[0].borderType,
                borderWidth: borderUpdated
                    ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                    : tableStyles[0].borderWidth + "px",
                borderRadius: tableStyles[0].borderRadius + "px",
                borderColor: borderColor,
                padding: tableStyles[0].tablePadding + "px",
                boxShadow: `${tableStyles[0].tableShadowHorizontal}px ${tableStyles[0].tableShadowVertical}px ${tableStyles[0].tableShadowBlur}px ${tableStyles[0].tableShadowColor} ${tableStyles[0].tableShadowPosition}`
            }}
        >
            {badgeChecked && (
                <div
                    className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgeStyles[0].badgePos}`}
                >
                    <div
                        className={`premium-pricing-table__badge`}
                        style={{
                            borderRightColor:
                                "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                            borderTopColor: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                            borderBottomWidth: badgeStyles[0].badgeSize + "px",
                            borderRightWidth: badgeStyles[0].badgeSize + "px",
                            borderTopWidth: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : "none",
                            borderLeftWidth: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : "none"
                        }}
                    >
                        <span
                            style={{
                                color: badgeStyles[0].badgeColor,
                                fontWeight: badgeStyles[0].badgeWeight,
                                textTransform: badgeStyles[0].badgeUpper ? "uppercase" : "none",
                                letterSpacing: badgeStyles[0].badgeLetter + "px",
                                fontStyle: badgeStyles[0].badgeStyle,
                                width: badgeStyles[0].badgeWidth + "px",
                                top: badgeStyles[0].badgeTop + "px",
                                left: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                right: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto"
                            }}
                        >
                            {badgeStyles[0].badgeText}                       </span>
                    </div>
                </div>
            )}
            {titleChecked && (
                <div
                    className={`premium-pricing-table__title_wrap`}
                    style={{
                        paddingTop: titleStyles[0].titleMarginT + "px",
                        paddingBottom: titleStyles[0].titleMarginB + "px"
                    }}
                >
                    <RichText.Content
                        tagName={titleStyles[0].titleTag.toLowerCase()}
                        className={`premium-pricing-table__title`}
                        value={title}
                        style={{
                            color: titleStyles[0].titleColor,
                            background: titleStyles[0].titleBack,
                            letterSpacing: titleStyles[0].titleLetter + "px",
                            textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                            fontStyle: titleStyles[0].titleStyle,
                            fontWeight: titleStyles[0].titleWeight,
                            lineHeight: titleStyles[0].titleLine + "px",
                            padding: titleStyles[0].titlePadding + "px",
                            textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`
                        }}
                    />
                </div>
            )}
            {priceChecked && (
                <div
                    className={`premium-pricing-table__price_wrap`}
                    style={{
                        backgroundColor: priceStyles[0].priceBack,
                        marginTop: priceStyles[0].priceMarginT + "px",
                        marginBottom: priceStyles[0].priceMarginB + "px",
                        padding: priceStyles[0].pricePadding + "px",
                        justifyContent: contentAlign
                    }}
                >
                    {priceStyles[0].slashPrice && (
                        <strike
                            className={`premium-pricing-table__slash`}
                            style={{
                                color: priceStyles[0].slashColor,
                                fontWeight: priceStyles[0].slashWeight,
                                alignSelf: priceStyles[0].slashV
                            }}
                        >
                            { priceStyles[0].slashPrice}
                        </strike>
                    )}
                    {priceStyles[0].currPrice && (
                        <span
                            className={`premium-pricing-table__currency`}
                            style={{
                                color: priceStyles[0].currColor,
                                fontWeight: priceStyles[0].currWeight,
                                alignSelf: priceStyles[0].currV
                            }}
                        >
                            { priceStyles[0].currPrice}
                        </span>
                    )}
                    {priceStyles[0].valPrice && (
                        <span
                            className={`premium-pricing-table__val`}
                            style={{
                                color: priceStyles[0].valColor,
                                fontWeight: priceStyles[0].valWeight,
                                alignSelf: priceStyles[0].valV
                            }}
                        >
                            { priceStyles[0].valPrice}
                        </span>
                    )}
                    {priceStyles[0].divPrice && (
                        <span
                            className={`premium-pricing-table__divider`}
                            style={{
                                color: priceStyles[0].divColor,
                                fontWeight: priceStyles[0].divWeight,
                                alignSelf: priceStyles[0].divV
                            }}
                        >
                            { priceStyles[0].divPrice}
                        </span>
                    )}
                    {priceStyles[0].durPrice && (
                        <span
                            className={`premium-pricing-table__dur`}
                            style={{
                                color: priceStyles[0].durColor,
                                fontWeight: priceStyles[0].durWeight,
                                alignSelf: priceStyles[0].durV
                            }}
                        >
                            { priceStyles[0].durPrice}
                        </span>
                    )}
                </div>
            )}
            {listChecked && (
                <div
                    className={`premium-pricing-table__list_wrap`}
                    style={{
                        marginTop: featureStyles[0].listMarginT + "px",
                        marginBottom: featureStyles[0].listMarginB + "px"
                    }}
                >
                    <ul
                        className={`premium-pricing-table__list list-${featureStyles[0].listStyle}`}
                        style={{
                            color: featureStyles[0].listColor,
                            background: featureStyles[0].listBack,
                            padding: featureStyles[0].listPadding + "px",
                            listStyle: "check" !== featureStyles[0].listStyle ? featureStyles[0].listStyle : "none",
                            listStylePosition: "inside",
                            fontWeight: featureStyles[0].listWeight,
                            textTransform: featureStyles[0].listUpper ? "uppercase" : "none",
                            letterSpacing: featureStyles[0].listLetter + "px",
                            fontStyle: featureStyles[0].listItemsStyle,
                            lineHeight: featureStyles[0].listLine + "px",
                            textAlign: featureStyles[0].featsAlign ? featureStyles[0].featsAlign : contentAlign
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
                            color: descStyles[0].descColor,
                            background: descStyles[0].descBack,
                            fontWeight: descStyles[0].descWeight,
                            letterSpacing: descStyles[0].descLetter + "px",
                            fontStyle: descStyles[0].descStyle,
                            lineHeight: descStyles[0].descLine + "px",
                            marginTop: descStyles[0].descMarginT + "px",
                            marginBottom: descStyles[0].descMarginB + "px",
                            padding: descStyles[0].descPadding + "px"
                        }}
                    />
                </div>
            )}
            {btnChecked && (
                <div
                    className={`premium-pricing-table__button`}
                    style={{
                        width: buttonStyles[0].btnWidth + "%"
                    }}
                >
                    <a
                        class={`premium-pricing-table__button_link`}
                        href={btnLink}
                        target={buttonStyles[0].btnTarget ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        style={{
                            color: buttonStyles[0].btnColor,
                            background: buttonStyles[0].btnBack ? buttonStyles[0].btnBack : "transparent",
                            fontWeight: buttonStyles[0].btnWeight,
                            letterSpacing: buttonStyles[0].btnLetter + "px",
                            fontStyle: buttonStyles[0].btnStyle,
                            lineHeight: buttonStyles[0].btnLine + "px",
                            marginTop: buttonStyles[0].btnMarginT,
                            marginBottom: buttonStyles[0].btnMarginB,
                            padding: buttonStyles[0].btnPadding + buttonStyles[0].btnPaddingU,
                            borderStyle: buttonStyles[0].btnBorderType,
                            borderWidth: btnBorderUpdated
                                ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                : buttonStyles[0].btnBorderWidth + "px",
                            borderRadius: buttonStyles[0].btnBorderRadius + "px",
                            borderColor: buttonStyles[0].btnBorderColor
                        }}
                    >
                        <RichText.Content
                            tagName="span"
                            onChange={newText =>
                                setAttributes({ btnText: newText })
                            }
                            value={btnText}
                            style={{
                                textTransform: buttonStyles[0].btnUpper ? "uppercase" : "none"
                            }}
                        />
                    </a>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-pricing-table-${block_id} .premium-pricing-table__button_link:hover {`,
                                `color: ${buttonStyles[0].btnHoverColor} !important;`,
                                `background: ${buttonStyles[0].btnHoverBack} !important`,
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