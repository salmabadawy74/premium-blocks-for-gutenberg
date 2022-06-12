import { __ } from '@wordpress/i18n';
import classnames from "classnames";
import { withSelect, dispatch, subscribe, select } from '@wordpress/data'
import {
    InspectorControls,
    RichText,
    useBlockProps,
    InnerBlocks
} from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(props) {

    const { attributes, setAttributes, className } = props;
    console.log("hello")
    const {
        blockId
    } = this.props.attributes;
    const mainClasses = classnames(className, "premium-switcher-child");

    return (
        <div
            className={`${mainClasses} ${blockId}`}
        >
            ff
            {/* <InnerBlocks
                template={[['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' }]]}
                templateLock={false}
            /> */}
        </div>
    )
}
export default Edit