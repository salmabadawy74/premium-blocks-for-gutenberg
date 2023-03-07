import classnames from "classnames"
import {
    generateCss,
} from '@pbg/helpers';

const {
    InnerBlocks, useBlockProps
} = wp.blockEditor

export default function save(props) {

    const { attributes, className } = props

    const {
        blockId = '',
        layoutPos,
        iconPosition,
        bulletIconStyles,
        bulletIconBorder,
        titleStyles,
        generalStyles,
        generalBorder,
        dividerStyles,
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

        styles[`.${blockId} .premium-bullet-list__content-icon .premium-bullet-list-icon, .${blockId} .premium-bullet-list__content-icon img`] = {
            'overflow': 'hidden',
            'color': bulletIconStyles[0].bulletIconColor,
            'background-color': bulletIconStyles[0].bulletIconBackgroundColor,
            'border-style': bulletIconBorder?.borderType,
            'border-color': `${bulletIconBorder?.borderColor}`,
        };

        styles[`.${blockId} .premium-bullet-list__wrapper`] = {
            'border-style': generalBorder?.borderType,
            'border-color': `${generalBorder?.borderColor}`,
            'overflow': 'hidden',
            'background-color': generalStyles[0].generalBackgroundColor,
            'box-shadow': `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
        };

        styles[`.${blockId} .premium-bullet-list__content-wrap`] = {
            'display': iconPosition == "before" ? "flex" : "inline-flex",
        };

        styles[`.${blockId} .premium-bullet-list__label`] = {
            'color': titleStyles[0].titleColor,
            'text-shadow': `${titlesTextShadow.horizontal}px ${titlesTextShadow.vertical}px ${titlesTextShadow.blur}px ${titlesTextShadow.color}`,
            'font-style': titleTypography?.fontStyle,
            'text-decoration': titleTypography?.textDecoration,
            'text-transform': titleTypography?.textTransform,
        };

        styles[`.${blockId} .premium-bullet-list__wrapper:hover .premium-bullet-list-icon`] = {
            'color': `${bulletIconStyles?.[0]?.bulletIconHoverColor}!important`,
            'background-color': `${bulletIconStyles?.[0]?.bulletIconHoverBackgroundColor}!important`
        };
        styles[
            `.${blockId} .premium-bullet-list__wrapper:hover .premium-bullet-list__label-wrap .premium-bullet-list__label`
        ] = {
            color: `${titleStyles?.[0]?.titleHoverColor}!important`,
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
                <InnerBlocks.Content />
            </ul>
        </div>
    )
}