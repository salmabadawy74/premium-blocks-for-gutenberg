import classnames from "classnames"
const { InnerBlocks, useBlockProps } = wp.blockEditor;

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