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
                template={[['core/paragraph']]}
                templateLock={false}
            />
        </div>
    )
}
export default Edit;