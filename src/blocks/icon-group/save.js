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

        styles[` .${blockId} .premium-icon-group-horizontal i:hover, .${blockId} .premium-icon-group-vertical i:hover`] = {
            color: `${groupIconHoverColor}`,
            "background-color": `${groupIconHoverBack}`
        };

        styles[` .${blockId} .premium-icon-group-horizontal i, .${blockId} .premium-icon-group-vertical i`] = {
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
            className={`premium-icon-group-${groupAlign} premium-icon__${hoverEffect}`}
        // style={filterJsCss({
        //     // borderStyle: groupIconBorder?.borderType,
        //     // borderColor: groupIconBorder?.borderColor,
        //     // color: groupIconColor,
        //     // backgroundColor: groupIconBack
        // })}
        >
            <InnerBlocks.Content />
        </div>
    </div>;
}