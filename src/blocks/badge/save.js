import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";
import { filterJsCss } from '@pbg/helpers';

export default function save({ attributes }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        color,
        typography,
        text,
        position,
        vOffset,
        hOffset,
        backgroundColor,
        textWidth,
        badgeSize,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(blockId, `premium-badge-${position}`, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        style: {
            top: `${vOffset || 0}px`,
            [position]: `${hOffset || 0}px`,
        }
    })

    return <div {...blockProps}>
        <div className='premium-badge-wrap' style={filterJsCss({
            borderRightColor:
                "right" === position ? backgroundColor : "transparent",
            borderTopColor: "left" === position ? backgroundColor : "transparent",
            borderBottomWidth: "right" === position && `${badgeSize}px`,
            borderRightWidth: `${badgeSize}px`,
            borderTopWidth: "left" === position && `${badgeSize}px`,
        })}>
            <RichText.Content
                tagName='span'
                value={text}
                style={filterJsCss({
                    color: color,
                    width: `${textWidth}px`
                })}
            />
        </div>
    </div>;
}



