import { useBlockProps } from "@wordpress/block-editor";
import classnames from "classnames";
import { generateCss } from '@pbg/helpers';
import { DefaultImage } from '@pbg/components';

export default function save({ attributes, className }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        ImgUrl,
        imageBorder,
        imageFilter,
        hoverEffect
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames('premium-image', blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    })

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-image-wrap img`] = {
            "border-style": `${imageBorder?.borderType}`,
            "border-color": `${imageBorder?.borderColor}`,
            'filter': `brightness( ${imageFilter.bright}% ) contrast( ${imageFilter.contrast}% ) saturate( ${imageFilter.saturation}% ) blur( ${imageFilter.blur}px ) hue-rotate( ${imageFilter.hue}deg )`
        };

        return generateCss(styles);
    }

    return <div {...blockProps}>
        <style
            dangerouslySetInnerHTML={{
                __html: loadStyles(),
            }}
        />
        <div className={`premium-image-container`}>
            <div className={`premium-image-wrap premium-image-wrap-${hoverEffect}`}>
                {ImgUrl && (
                    <img
                        className={`premium-image-img`}
                        src={`${ImgUrl}`}
                        alt="image"
                    />
                )}
                {!ImgUrl && (<DefaultImage className={className} />)}
            </div>

        </div>
    </div>;
}