/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";

export default function QuerySave({ attributes: { align } }) {
    const blockProps = useBlockProps.save({ className: `${align}` });
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);
    return <div {...innerBlocksProps} />;
}
