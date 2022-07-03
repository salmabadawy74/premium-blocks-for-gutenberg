import classnames from "classnames";
import { filterJsCss, generateCss } from "../../components/HelperFunction";

const { RichText } = wp.blockEditor;

const save = props => {
    const { className } = props;

    const {
        contentAlign,
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
        buttonBorder
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .premium-pricing-table__button_link:hover`] = {
            'color': `${buttonStyles?.[0]?.btnHoverColor}!important`,
            'background': `${buttonStyles?.[0]?.btnHoverBack}!important`
        };

        return generateCss(styles);
    }

    const mainClasses = classnames(className, "premium-pricing-table");

    return (
        <div
            className={`${mainClasses} ${blockId} ${hideDesktop || ''} ${hideTablet || ''} ${hideMobile || ''}`}
            style={filterJsCss({
                textAlign: contentAlign,
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
                        <span
                            style={filterJsCss({
                                color: badgeStyles[0].badgeColor,
                                fontWeight: badgeStyles[0].badgeWeight,
                                textTransform: badgeStyles[0].badgeUpper ? "uppercase" : "none",
                                letterSpacing: badgeStyles[0].badgeLetter + "px",
                                fontStyle: badgeStyles[0].badgeStyle,
                                width: badgeStyles[0].badgeWidth + "px",
                                top: badgeStyles[0].badgeTop + "px",
                                left: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                right: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto"
                            })}
                        >
                            {badgeStyles[0].badgeText}                       </span>
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
                            letterSpacing: titleStyles[0].titleLetter + "px",
                            textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                            fontStyle: titleStyles[0].titleStyle,
                            fontWeight: titleStyles[0].titleWeight,
                            lineHeight: titleStyles[0].titleLine + "px",
                            textShadow: `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`
                        })}
                    />
                </div>
            )}
            {priceChecked && (
                <div
                    className={`premium-pricing-table__price_wrap`}
                    style={filterJsCss({
                        backgroundColor: priceStyles[0].priceBack,
                        justifyContent: contentAlign
                    })}
                >
                    {priceStyles[0].slashPrice && (
                        <strike
                            className={`premium-pricing-table__slash`}
                            style={filterJsCss({
                                color: priceStyles[0].slashColor,
                                fontWeight: priceStyles[0].slashWeight,
                                alignSelf: priceStyles[0].slashV
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
                                fontWeight: priceStyles[0].currWeight,
                                alignSelf: priceStyles[0].currV
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
                                fontWeight: priceStyles[0].valWeight,
                                alignSelf: priceStyles[0].valV
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
                                fontWeight: priceStyles[0].divWeight,
                                alignSelf: priceStyles[0].divV
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
                                fontWeight: priceStyles[0].durWeight,
                                alignSelf: priceStyles[0].durV
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
                    <ul
                        className={`premium-pricing-table__list list-${featureStyles[0].listStyle}`}
                        style={filterJsCss({
                            color: featureStyles[0].listColor,
                            background: featureStyles[0].listBack,
                            listStyle: "check" !== featureStyles[0].listStyle ? featureStyles[0].listStyle : "none",
                            listStylePosition: "inside",
                            fontWeight: featureStyles[0].listWeight,
                            textTransform: featureStyles[0].listUpper ? "uppercase" : "none",
                            letterSpacing: featureStyles[0].listLetter + "px",
                            fontStyle: featureStyles[0].listItemsStyle,
                            lineHeight: featureStyles[0].listLine + "px",
                        })}
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
                        style={filterJsCss({
                            color: descStyles[0].descColor,
                            background: descStyles[0].descBack,
                            fontWeight: descStyles[0].descWeight,
                            letterSpacing: descStyles[0].descLetter + "px",
                            fontStyle: descStyles[0].descStyle,
                            lineHeight: descStyles[0].descLine + "px",
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
                            fontWeight: buttonStyles[0].btnWeight,
                            letterSpacing: buttonStyles[0].btnLetter + "px",
                            fontStyle: buttonStyles[0].btnStyle,
                            lineHeight: buttonStyles[0].btnLine + "px",
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