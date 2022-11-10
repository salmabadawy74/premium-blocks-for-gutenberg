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
        groupIconBorder
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames('premium-icon-group', blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    })

    return <div {...blockProps}>
        <div
            className={`premium-icon-group-${groupAlign}`}
            style={filterJsCss({
                borderStyle: groupIconBorder?.borderType,
                borderColor: groupIconBorder?.borderColor
            })}
        >
            <InnerBlocks.Content />
        </div>
    </div>;
}