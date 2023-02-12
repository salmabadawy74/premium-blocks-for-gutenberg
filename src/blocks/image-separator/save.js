import classnames from "classnames";
import { filterJsCss, generateCss } from '@pbg/helpers';
import {
    GenIcon,
    FaIco,
    Ico
} from "@pbg/components";
const { useBlockProps } = wp.blockEditor;

export default function save(props) {

    const { className } = props

    const {
        blockId,
        iconType,
        imageURL,
        link,
        url,
        gutter,
        imgFilter,
        imgFilterHover,
        linkTarget,
        iconStyles,
        imgFit,
        imgMaskURL,
        maskSize,
        maskPosition,
        iconBorder,
        hideDesktop,
        hideTablet,
        hideMobile,
        icons
    } = props.attributes

    let target = (linkTarget) ? "_blank" : "_self";

    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId} .premium-image-separator-container:hover img`] = {
            'filter': `brightness(${imgFilterHover?.bright}% ) contrast(${imgFilterHover?.contrast}% ) saturate(${imgFilterHover?.saturation}%) blur(${imgFilterHover?.blur}px) hue - rotate(${imgFilterHover?.hue}deg)!important`
        };
        styles[` .${blockId} .premium-image-separator-container .premium-image-separator-icon:hover`] = {
            'color': `${iconStyles[0].iconColorHover} !important`,
            'background-color': `${iconStyles[0].iconBGColorHover} !important`
        };
        return generateCss(styles);
    }

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-image-separator ${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
        >
            <style dangerouslySetInnerHTML={{ __html: loadStyles() }} />
            <div
                className={`premium-image-separator-container`}
                style={filterJsCss({
                    transform: `translateY(${gutter}%)`,
                    filter: iconType === 'image' ? `brightness( ${imgFilter?.bright}% ) contrast( ${imgFilter?.contrast}% ) saturate( ${imgFilter?.saturation}% ) blur( ${imgFilter?.blur}px ) hue-rotate( ${imgFilter?.hue}deg )` : ""
                })}
            >
                <a className="premium-image-separator-link" href={link && url} target={target} rel="noopener noreferrer">
                    {iconType === 'icon' &&
                        // <i
                        //     className={`${iconStyles[0].icon}`}
                        //     style={filterJsCss({
                        //         color: iconStyles[0].iconColor,
                        //         backgroundColor: iconStyles[0].iconBGColor,
                        //         borderColor: iconBorder.borderColor,
                        //         borderStyle: iconBorder.borderType
                        //     })} />
                        <GenIcon className={`premium-image-separator-icon ${iconStyles[0].icon}`}
                            name={iconStyles[0].icon}
                            icon={('fa' === iconStyles[0].icon.substring(0, 2) ? FaIco[iconStyles[0].icon] : Ico[iconStyles[0].icon])}
                            strokeWidth={('fe' === iconStyles[0].icon.substring(0, 2) ? icons[0].width : undefined)}
                            style={filterJsCss({
                                color: iconStyles[0].iconColor,
                                backgroundColor: iconStyles[0].iconBGColor,
                                borderColor: iconBorder.borderColor,
                                borderStyle: iconBorder.borderType
                            })}
                        />
                    }
                    {iconType === 'image' && imageURL && < img
                        src={imageURL}
                        style={filterJsCss({
                            borderColor: iconStyles[0].advancedBorder ? "" : iconBorder.borderColor,
                            borderStyle: iconStyles[0].advancedBorder ? "" : iconBorder.borderType,
                            maskSize: `${maskSize}`,
                            maskPosition: `${maskPosition}`,
                            maskImage: imgMaskURL ? `url("${imgMaskURL}")` : '',
                            WebkitMaskImage: imgMaskURL ? `url("${imgMaskURL}")` : '',
                            WebkitMaskSize: `${maskSize}`,
                            WebkitMaskPosition: `${maskPosition}`,
                            objectFit: `${imgFit}`,
                        })} />
                    }
                </a>
            </div>
        </div>
    )
}