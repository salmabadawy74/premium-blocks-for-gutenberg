import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";
import { filterJsCss, gradientBackground } from '../../components/HelperFunction';

export default function save({ attributes }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        text,
        textTag,
        border,
        textShadow,
        color,
        background
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(blockId, 'premium-text', {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        style: filterJsCss({
            borderStyle: border?.borderType,
            borderColor: border?.borderColor,
            ...gradientBackground(background)
        })
    })

    return <div {...blockProps}>
        <RichText.Content
            tagName={textTag}
            value={text}
            className="premium-text-wrap"
            style={filterJsCss({
                color: color,
                textShadow: `${textShadow?.horizontal}px ${textShadow?.vertical}px ${textShadow?.blur}px ${textShadow?.color}`,
            })}
        />
    </div>;
}



