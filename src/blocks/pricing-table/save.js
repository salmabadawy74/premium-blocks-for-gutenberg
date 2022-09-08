import classnames from "classnames";
import { filterJsCss, generateCss } from "../../components/HelperFunction";

const { RichText, useBlockProps } = wp.blockEditor;

const save = props => {
    const { className } = props;

    const {
        title,
        desc,
        titleChecked,
        descChecked,
        priceChecked,
        btnChecked,
        btnText,
        btnLink,
        badgeChecked,
        listChecked,
        listItems,
        blockId,
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
        titleTextShadow,
        tableBoxShadow,
        tableBorder,
        buttonBorder,
        titleTypography,
        slashTypography,
        currTypography,
        priceTypography,
        dividerTypography,
        durationTypography,
        listTypography,
        descTypography,
        buttonTypography,
        badgeTypography,
    } = props.attributes;


    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .premium-pricing-table__button_link:hover`] = {
            'color': `${buttonStyles?.[0]?.btnHoverColor}!important`,
            'background': `${buttonStyles?.[0]?.btnHoverBack}!important`
        };

        return generateCss(styles);
    }

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-pricing-table ${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            style={filterJsCss({
                backgroundColor: tableStyles[0].tableBack,
                borderStyle: tableBorder.borderType,
                borderColor: tableBorder.borderColor,
                boxShadow: `${tableBoxShadow.horizontal}px ${tableBoxShadow.vertical}px ${tableBoxShadow.blur}px ${tableBoxShadow.color} ${tableBoxShadow.position}`
            })}
        >
            {badgeChecked && (
                <div
                    className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgeStyles[0].badgePos}`}
                >
                    <div
                        className={`premium-pricing-table__badge`}
                        style={filterJsCss({
                            borderRightColor:
                                "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                            borderTopColor: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                            borderBottomWidth: badgeStyles[0].badgeSize + "px",
                            borderRightWidth: badgeStyles[0].badgeSize + "px",
                            borderTopWidth: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : "none",
                            borderLeftWidth: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : "none"
                        })}
                    >
                        <RichText.Content
                            tagName='span'
                            value={badgeStyles[0].badgeText}
                            style={filterJsCss({
                                color: badgeStyles[0].badgeColor,
                                fontStyle: badgeTypography?.fontStyle,
                                fontFamily: badgeTypography?.fontFamily,
                                fontWeight: badgeTypography?.fontWeight,
                                textDecoration: badgeTypography?.textDecoration,
                                textTransform: badgeTypography?.textTransform,
                                width: badgeStyles[0].badgeWidth + "px",
                                top: badgeStyles[0].badgeTop + "px",
                                left: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                right: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto"
                            })}
                        />
                    </div>
                </div>
            )}
            {titleChecked && (
                <div
                    className={`premium-pricing-table__title_wrap`}
                    style={filterJsCss({
                        background: titleStyles[0].titleBack,
                    })}
                >
                    <RichText.Content
                        tagName={titleStyles[0].titleTag.toLowerCase()}
                        className={`premium-pricing-table__title`}
                        value={title}
                        style={filterJsCss({
                            color: titleStyles[0].titleColor,
                            fontStyle: titleTypography?.fontStyle,
                            fontFamily: titleTypography?.fontFamily,
                            fontWeight: titleTypography?.fontWeight,
                            textDecoration: titleTypography?.textDecoration,
                            textTransform: titleTypography?.textTransform,
                            textShadow: `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`
                        })}
                    />
                </div>
            )}
            {priceChecked && (
                <div
                    className={`premium-pricing-table__price_wrap`}
                    style={filterJsCss({
                        backgroundColor: priceStyles[0].priceBack
                    })}
                >
                    {priceStyles[0].slashPrice && (
                        <strike
                            className={`premium-pricing-table__slash`}
                            style={filterJsCss({
                                color: priceStyles[0].slashColor,
                                fontStyle: slashTypography?.fontStyle,
                                fontFamily: slashTypography?.fontFamily,
                                fontWeight: slashTypography?.fontWeight,
                                textDecoration: slashTypography?.textDecoration,
                                textTransform: slashTypography?.textTransform,
                            })}
                        >
                            {priceStyles[0].slashPrice}
                        </strike>
                    )}
                    {priceStyles[0].currPrice && (
                        <span
                            className={`premium-pricing-table__currency`}
                            style={filterJsCss({
                                color: priceStyles[0].currColor,
                                fontStyle: currTypography?.fontStyle,
                                fontFamily: currTypography?.fontFamily,
                                fontWeight: currTypography?.fontWeight,
                                textDecoration: currTypography?.textDecoration,
                                textTransform: currTypography?.textTransform,
                            })}
                        >
                            {priceStyles[0].currPrice}
                        </span>
                    )}
                    {priceStyles[0].valPrice && (
                        <span
                            className={`premium-pricing-table__val`}
                            style={filterJsCss({
                                color: priceStyles[0].valColor,
                                fontStyle: priceTypography?.fontStyle,
                                fontFamily: priceTypography?.fontFamily,
                                fontWeight: priceTypography?.fontWeight,
                                textDecoration: priceTypography?.textDecoration,
                                textTransform: priceTypography?.textTransform,
                            })}
                        >
                            {priceStyles[0].valPrice}
                        </span>
                    )}
                    {priceStyles[0].divPrice && (
                        <span
                            className={`premium-pricing-table__divider`}
                            style={filterJsCss({
                                color: priceStyles[0].divColor,
                                fontStyle: dividerTypography?.fontStyle,
                                fontFamily: dividerTypography?.fontFamily,
                                fontWeight: dividerTypography?.fontWeight,
                                textDecoration: dividerTypography?.textDecoration,
                                textTransform: dividerTypography?.textTransform,
                            })}
                        >
                            {priceStyles[0].divPrice}
                        </span>
                    )}
                    {priceStyles[0].durPrice && (
                        <span
                            className={`premium-pricing-table__dur`}
                            style={filterJsCss({
                                color: priceStyles[0].durColor,
                                fontStyle: durationTypography?.fontStyle,
                                fontFamily: durationTypography?.fontFamily,
                                fontWeight: durationTypography?.fontWeight,
                                textDecoration: durationTypography?.textDecoration,
                                textTransform: durationTypography?.textTransform,
                            })}
                        >
                            {priceStyles[0].durPrice}
                        </span>
                    )}
                </div>
            )}
            {listChecked && (
                <div
                    className={`premium-pricing-table__list_wrap`}
                >
                    <RichText.Content
                        value={listItems}
                        tagName={'ul'}
                        multiline="li"
                        className={`premium-pricing-table__list list-${featureStyles[0].listStyle}`}
                        style={filterJsCss({
                            color: featureStyles[0].listColor,
                            background: featureStyles[0].listBack,
                            listStyleType: "check" !== featureStyles[0].listStyle ? featureStyles[0].listStyle : "none",
                            listStylePosition: "inside",
                            fontStyle: listTypography?.fontStyle,
                            fontFamily: listTypography?.fontFamily,
                            fontWeight: listTypography?.fontWeight,
                            textDecoration: listTypography?.textDecoration,
                            textTransform: listTypography?.textTransform,
                        })} />

                </div>
            )}
            {descChecked && (
                <div className={`premium-pricing-table__desc_wrap`}>
                    <RichText.Content
                        tagName="p"
                        className={`premium-pricing-table__desc`}
                        value={desc}
                        style={filterJsCss({
                            color: descStyles[0].descColor,
                            background: descStyles[0].descBack,
                            fontStyle: descTypography?.fontStyle,
                            fontFamily: descTypography?.fontFamily,
                            fontWeight: descTypography?.fontWeight,
                            textDecoration: descTypography?.textDecoration,
                            textTransform: descTypography?.textTransform,
                        })}
                    />
                </div>
            )}
            {btnChecked && (
                <div
                    className={`premium-pricing-table__button`}
                    style={filterJsCss({
                        width: buttonStyles[0].btnWidth + "%"
                    })}
                >
                    <a
                        class={`premium-pricing-table__button_link`}
                        href={btnLink}
                        target={buttonStyles[0].btnTarget ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        style={filterJsCss({
                            color: buttonStyles[0].btnColor,
                            background: buttonStyles[0].btnBack ? buttonStyles[0].btnBack : "transparent",
                            fontStyle: buttonTypography?.fontStyle,
                            fontFamily: buttonTypography?.fontFamily,
                            fontWeight: buttonTypography?.fontWeight,
                            textDecoration: buttonTypography?.textDecoration,
                            textTransform: buttonTypography?.textTransform,
                            borderStyle: buttonBorder.borderType,
                            borderColor: buttonBorder.borderColor,
                        })}
                    >
                        <RichText.Content
                            tagName="span"
                            onChange={newText =>
                                setAttributes({ btnText: newText })
                            }
                            value={btnText}
                            style={filterJsCss({
                                textTransform: buttonStyles[0].btnUpper ? "uppercase" : "none"
                            })}
                        />
                    </a>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: loadStyles()
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default save;