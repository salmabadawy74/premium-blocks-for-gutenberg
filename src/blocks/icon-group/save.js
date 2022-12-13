import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import classnames from "classnames";
import { filterJsCss } from '@pbg/helpers';

export default function save({ attributes }) {
    const {
        blockId,
        groupAlign,
        hideDesktop,
        hideTablet,
        hideMobile,
        groupIconBorder,
        groupIconColor,
        groupIconBack,
        groupIconHoverColor,
        groupIconHoverBack
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames('premium-icon-group', blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    })

    const loadStyles = () => {
        const styles = {};

        styles[` .${blockId} .premium-icon-group-horizontal:hover, .${blockId} .premium-icon-group-vertical:hover`] = {
            color: `${groupIconHoverColor} !important`,
            "background-color": `${groupIconHoverBack} !important`,
        };

        return generateCss(styles);
    }

    return <div {...blockProps}>
        <style>{loadStyles()}</style>
        <div
            className={`premium-icon-group-${groupAlign}`}
            style={filterJsCss({
                borderStyle: groupIconBorder?.borderType,
                borderColor: groupIconBorder?.borderColor,
                color: groupIconColor,
                backgroundColor: groupIconBack
            })}
        >
            <InnerBlocks.Content />
        </div>
    </div>;
}