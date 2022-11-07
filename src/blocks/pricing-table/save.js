import classnames from "classnames";
import { filterJsCss, generateCss } from '@pbg/helpers';

const { RichText, useBlockProps, InnerBlocks } = wp.blockEditor;

const save = props => {
    const { className } = props;

    const {
        badgeChecked,
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        buttonStyles,
        badgeStyles,
        tableStyles,
        tableBoxShadow,
        tableBorder,
        badgeTypography,
    } = props.attributes;

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
            <InnerBlocks.Content />
        </div>
    );
};

export default save;