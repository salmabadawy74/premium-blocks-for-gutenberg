import { InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
    const { attributes } = props;
    const { id } = attributes;

    const {
        blockId
    } = this.props.attributes;
    const mainClasses = classnames(className, "premium-switcher-child");


    return (
        <div className={`${mainClasses} ${blockId}`}
        >
            ff
            {/* <InnerBlocks.Content /> */}
        </div>
    );
}