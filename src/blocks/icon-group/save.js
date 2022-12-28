import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import classnames from "classnames";
import { filterJsCss, generateCss } from '@pbg/helpers';

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
        groupIconHoverBack,
        hoverEffect
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

        styles[` .${blockId} .premium-icon-group-container i:hover`] = {
            color: `${groupIconHoverColor}`,
            "background-color": `${groupIconHoverBack}`
        };

        styles[` .${blockId} .premium-icon-group-container i`] = {
            color: `${groupIconColor}`,
            "background-color": `${groupIconBack}`,
            'border-color': `${groupIconBorder && groupIconBorder.borderColor}`,
            'border-style': `${groupIconBorder && groupIconBorder.borderType}`,
        };

        return generateCss(styles);
    }

    return <div {...blockProps}>
        <style>{loadStyles()}</style>
        <div
            className={`premium-icon-group-container premium-icon-group-${groupAlign}`}
        >
            <InnerBlocks.Content />
        </div>
    </div>;
}