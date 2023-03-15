import {
    gradientBackground,
    borderCss,
    paddingCss,
    marginCss,
    typographyCss,
    generateCss,
} from "@pbg/helpers";
export const loadStyles = (attributes, deviceType) => {
    const { } = attributes;
    const styles = {};
    styles[`.${blockId}.premium-blog-wrap > .premium-blog-post-outer-container > .premium-blog-post-container`] = {
        ...gradientBackground(blogContainerBackground),
        ...BorderValue,
        ...marginCss(blogMargin, deviceType),
        ...paddingCss(blogPadding, deviceType),
        boxShadow: `${blogBoxShadow.horizontal || 0}px ${blogBoxShadow.vertical || 0
            }px ${blogBoxShadow.blur || 0}px ${blogBoxShadow.color}`,
    };
    styles[`.${blockId}.premium-blog-wrap > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-content-wrapper `] = {
        ...gradientBackground(containerBackground),
        ...marginCss(margin, deviceType),
        ...paddingCss(padding, deviceType),
        boxShadow: `${boxShadow.horizontal || 0}px ${boxShadow.vertical || 0
            }px ${boxShadow.blur || 0}px ${boxShadow.color
            }`,
    }
    styles[`.${blockId}.premium-blog-wrap > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-content-wrapper > .premium-blog-post-content `] = {
        color: color,
        ...typographyCss(contentTypography, deviceType),
        ...marginCss(margin, deviceType),
    }
    styles[`.${blockId}.premium-blog-wrap > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-content-wrapper > .premium-blog-inner-container > .premium-blog-entry-meta > .premium-blog-meta-data > * `] = {
        ...typographyCss(metaTypography, deviceType),
        color: metaColor,
    }
    styles[`.${blockId}.premium-blog-wrap > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-content-wrapper > .premium-blog-inner-container > .premium-blog-entry-meta > .premium-blog-meta-data:hover > * `] = {
        color: metaHoverColor
    }
    styles[`.${blockId}.premium-blog-wrap > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-content-wrapper > .premium-blog-inner-container > .premium-blog-entry-meta > .premium-blog-meta-separator `] = {
        color: sepColor
    }
    styles[`.${blockId}.premium-blog-wrap > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-content-wrapper > .premium-blog-inner-container > .premium-blog-entry-title >*`] = {
        ...typographyCss(Typography, deviceType),
        color: textColor,

    }
    styles[`.${blockId}.premium-blog-wrap > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-content-wrapper > .premium-blog-inner-container > .premium-blog-entry-title `] = {
        marginBottom: bottomSpacing[deviceType] + bottomSpacing["unit"],

    }
    styles[`.${blockId}.premium-blog-wrap > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-content-wrapper > .premium-blog-inner-container > .premium-blog-entry-title:hover > *`] = {
        color: hoverColor,
    }
    styles[`.${blockId} .premium-blog-thumbnail-container .premium-bottom-shape svg`] = {
        width: `${shapeBottom.width[deviceType]}${shapeBottom.width["unit"]}`,
        height: `${shapeBottom.height[deviceType]}${shapeBottom.height["unit"]}`,
        fill: `${shapeBottom["color"]}`,
    };
    styles[`.${blockId} > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-thumb-effect-wrapper > .premium-blog-thumbnail-container img `] = {
        "object-fit": `${thumbnail}`,
        height: `100%`,
        filter: `brightness( ${filter.bright}% ) contrast( ${filter.contrast}% ) saturate( ${filter.saturation}% ) blur( ${filter.blur}px ) hue-rotate( ${filter.hue}deg )`,
    };
    styles[`.${blockId} > .premium-blog-post-outer-container > .premium-blog-post-container > .premium-blog-thumb-effect-wrapper > .premium-blog-thumbnail-container `] = {
        height: `${height[deviceType]}${height["unit"]}!important`,
    };
    styles[`.${blockId} > .premium-blog-post-outer-container > .premium-blog-post-container > ..premium-blog-thumb-effect-wrapper > .premium-blog-thumbnail-container:hover img `] = {
        filter: `brightness( ${Hoverfilter.bright}% ) contrast( ${Hoverfilter.contrast}% ) saturate( ${Hoverfilter.saturation}% ) blur( ${Hoverfilter.blur}px ) hue-rotate( ${Hoverfilter.hue}deg )`,
    };

    return generateCss(styles);
};
