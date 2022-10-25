import classnames from "classnames"
import {
    generateCss,
    filterJsCss,
} from '@pbg/helpers';
const {
    Fragment,
} = wp.element

const {
    RichText, useBlockProps
} = wp.blockEditor

export default function save(props) {

    const { attributes, className } = props

    const {
        blockId = '',
        layoutPos,
        iconPosition,
        repeaterBulletList,
        bulletIconStyles,
        bulletIconBorder,
        titleStyles,
        generalStyles,
        generalBorder,
        dividerStyles,
        divider,
        dividerStyle,
        titlesTextShadow,
        boxShadow,
        hoverBoxShadow,
        titleTypography,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .premium-bullet-list__content-icon i:hover`] = {
            'color': `${bulletIconStyles?.[0]?.bulletIconHoverColor}!important`,
            'background-color': `${bulletIconStyles?.[0]?.bulletIconHoverBackgroundColor}!important`
        };
        styles[`.${blockId} .premium-bullet-list__label-wrap .premium-bullet-list__label:hover`] = {
            'color': `${titleStyles?.[0]?.titleHoverColor}!important`
        };
        styles[`.${blockId} .premium-bullet-list__wrapper:hover`] = {
            'background-color': `${generalStyles?.[0]?.generalHoverBackgroundColor}!important`,
            'box-shadow': `${hoverBoxShadow?.horizontal}px ${hoverBoxShadow?.vertical}px ${hoverBoxShadow?.blur}px ${hoverBoxShadow?.color} ${hoverBoxShadow?.position}!important`
        };

        styles[`.${blockId} .premium-bullet-list-divider-block:not(:last-child)::after`] = {
            'border-top-style': dividerStyle,
            'border-top-color': dividerStyles?.[0]?.dividerColor,
        };

        styles[`.${blockId} .premium-bullet-list-divider-inline:not(:last-child)::after`] = {
            'border-left-style': dividerStyle,
            'border-left-color': dividerStyles?.[0]?.dividerColor,
        };

        return generateCss(styles);
    }

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-bullet-list ${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
        >
            <style>{loadStyles()}</style>
            <ul className={`premium-bullet-list-${layoutPos} premium-bullet-list`}>
                {
                    repeaterBulletList.map((icon, index) => {

                        let image_icon_html = ""
                        if (icon.showBulletIcon) {
                            if (icon.image_icon == "icon") {
                                if (icon.icon) {
                                    image_icon_html = <span className="premium-bullet-list__content-icon" key={index}>
                                        <i
                                            className={`${icon.icon}`}
                                            style={filterJsCss({
                                                overflow: 'hidden',
                                                color: bulletIconStyles?.[0]?.bulletIconColor,
                                                backgroundColor: bulletIconStyles?.[0]?.bulletIconBackgroundColor,
                                                borderStyle: bulletIconBorder?.borderType,
                                                borderColor: bulletIconBorder?.borderColor,
                                            })}
                                        />
                                    </span>
                                }
                            } else {
                                if (icon.imageURL) {
                                    image_icon_html = <img
                                        src={icon.imageURL}
                                        key={index}
                                        style={filterJsCss({
                                            overflow: 'hidden',
                                            borderStyle: bulletIconBorder?.borderType,
                                            borderColor: bulletIconBorder?.borderColor,
                                        })}
                                    />
                                }
                            }
                        }

                        let target = (icon.linkTarget) ? "_blank" : "_self"
                        let link_url = (icon.disableLink) ? icon.link : "/"

                        if (!icon.disableLink) {
                            return (
                                <Fragment>
                                    <li
                                        className={classnames(
                                            `premium-bullet-list-content${index}`,
                                            "premium-bullet-list__wrapper"
                                        )}
                                        key={index}
                                        style={filterJsCss({
                                            overflow: 'hidden',
                                            backgroundColor: generalStyles?.[0]?.generalBackgroundColor,
                                            borderStyle: generalBorder?.borderType,
                                            borderColor: generalBorder?.borderColor,
                                            boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                                        })}
                                    >
                                        <div className={`premium-bullet-list__content-wrap`} style={filterJsCss({
                                            display: iconPosition == "before" ? "flex" : "inline-flex",
                                            flexDirection: iconPosition == "top" ? "column" : iconPosition == "after" ? 'row-reverse' : "",
                                        })}>
                                            <span className={`premium-bullet-list__icon-wrap`}
                                                style={filterJsCss({
                                                    overflow: repeaterBulletList?.[index]?.image_icon == 'image' ? "hidden" : "",
                                                })}
                                            >{image_icon_html}</span>
                                            <div className="premium-bullet-list__label-wrap">
                                                <RichText.Content
                                                    tagName="span"
                                                    value={repeaterBulletList?.[index]?.label}
                                                    className='premium-bullet-list__label'
                                                    style={filterJsCss({
                                                        fontStyle: titleTypography?.fontStyle,
                                                        fontFamily: titleTypography?.fontFamily,
                                                        fontWeight: titleTypography?.fontWeight,
                                                        textDecoration: titleTypography?.textDecoration,
                                                        textTransform: titleTypography?.textTransform,
                                                        color: titleStyles?.[0]?.titleColor,
                                                        textShadow: `${titlesTextShadow.horizontal}px ${titlesTextShadow.vertical}px ${titlesTextShadow.blur}px ${titlesTextShadow.color}`,
                                                    })} />
                                            </div>
                                        </div>
                                    </li>
                                    {divider &&
                                        <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
                                    }
                                </Fragment>
                            )
                        } else {

                            return (
                                <Fragment>
                                    <li
                                        className={classnames(
                                            `premium-bullet-list-content${index}`,
                                            "premium-bullet-list__wrapper"
                                        )}
                                        key={index}
                                        style={filterJsCss({
                                            listStyleType: 'none',
                                            overflow: 'hidden',
                                            backgroundColor: generalStyles?.[0]?.generalBackgroundColor,
                                            borderStyle: generalBorder?.borderType,
                                            borderColor: generalBorder?.borderColor,
                                            boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                                        })}
                                    >
                                        <a
                                            href={link_url}
                                            target={target}
                                            rel="noopener noreferrer"
                                        >
                                            <div className={`premium-bullet-list__content-wrap`} style={filterJsCss({
                                                display: iconPosition == "before" ? "flex" : "inline-flex",
                                                flexDirection: iconPosition == "top" ? "column" : iconPosition == "after" ? 'row-reverse' : "",
                                            })}>
                                                <span className={`premium-bullet-list__icon-wrap`}
                                                    style={filterJsCss({
                                                        overflow: repeaterBulletList?.[index]?.image_icon == 'image' ? "hidden" : "",
                                                    })}
                                                >{image_icon_html}</span>
                                                <div className="premium-bullet-list__label-wrap">
                                                    <RichText.Content
                                                        tagName="span"
                                                        value={repeaterBulletList?.[index]?.label}
                                                        className='premium-bullet-list__label'
                                                        style={filterJsCss({
                                                            fontStyle: titleTypography?.fontStyle,
                                                            fontFamily: titleTypography?.fontFamily,
                                                            fontWeight: titleTypography?.fontWeight,
                                                            textDecoration: titleTypography?.textDecoration,
                                                            textTransform: titleTypography?.textTransform,
                                                            color: titleStyles?.[0]?.titleColor,
                                                            textShadow: `${titlesTextShadow.horizontal}px ${titlesTextShadow.vertical}px ${titlesTextShadow.blur}px ${titlesTextShadow.color}`,
                                                        })} />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {divider &&
                                        <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
                                    }
                                </Fragment>
                            )
                        }

                    })
                }
            </ul>
        </div>
    )
}