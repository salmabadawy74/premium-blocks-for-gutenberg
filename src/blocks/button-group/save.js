import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import classnames from "classnames";

export default function save({ attributes }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        groupAlign
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames('premium-button-group', blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    })

    return <div {...blockProps}>
        <div
            className={`premium-button-group_wrap premium-button-group-${groupAlign}`}
        >
            <InnerBlocks.Content />
        </div>
    </div>;
}