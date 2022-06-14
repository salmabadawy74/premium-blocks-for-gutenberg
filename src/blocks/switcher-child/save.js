import classnames from "classnames"
import {
    InnerBlocks,
    useBlockProps
} from '@wordpress/block-editor';

export default function save(props) {

    const { attributes, className } = props

    const {
        blockId
    } = attributes

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-switcher-child ${blockId}`
                ),
            })}
        >
            <InnerBlocks.Content />
        </div>
    )
}