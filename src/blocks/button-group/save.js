import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import classnames from "classnames";
import { generateCss } from '@pbg/helpers';

export default function save({ attributes }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        groupAlign,
        typography
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames('premium-button-group', blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    })

    const loadStyles = () => {
        const styles = {};

        styles[` .${blockId} .premium-button-group_wrap .premium-button .premium-button-text-edit`] = {
            "font-style": typography?.fontStyle,
            "font-family": typography?.fontFamily,
            "font-weight": typography?.fontWeight,
            "text-decoration": typography?.textDecoration,
            "text-transform": typography?.textTransform
        };

        return generateCss(styles);
    }

    return <div {...blockProps}>
        <style>{loadStyles()}</style>
        <div
            className={`premium-button-group_wrap premium-button-group-${groupAlign}`}
        >
            <InnerBlocks.Content />
        </div>
    </div>;
}