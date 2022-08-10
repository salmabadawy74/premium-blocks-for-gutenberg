import { __ } from '@wordpress/i18n';
import classnames from "classnames";
import {
    InnerBlocks,
    useBlockProps
} from '@wordpress/block-editor';

function Edit(props) {

    const { attributes, className } = props;

    const {
        blockId
    } = attributes
    const CONTENT = [
        ["core/paragraph", { content: __("Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.") }]
    ];
    return (
        <div
            {...useBlockProps({
                className: classnames(
                    className,
                    `premium-switcher-child ${blockId}`
                ),
            })}
        >
            <InnerBlocks
                template={CONTENT}
                templateLock={false}
            />
        </div>
    )
}
export default Edit;