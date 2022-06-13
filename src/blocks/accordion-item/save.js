/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from "classnames";

export default function save(props) {
    const { className } = props;

    const {
        blockId,
        description,
        direction,
        titleTag,
        arrowPosition,
        contentType,
        title
    } = props.attributes;
    const blockProps = useBlockProps.save({ className: classnames(className, blockId, 'premium-accordion__content_wrap') });

    return (
        <div {...blockProps}>
            <div
                className={`premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowPosition}`}
            >
                <div className={`premium-accordion__title`}>
                    <RichText.Content
                        tagName={titleTag.toLowerCase()}
                        className={`premium-accordion__title_text`}
                        value={title}
                    />
                </div>
                <div className={`premium-accordion__icon_wrap`}>
                    <svg
                        className={`premium-accordion__icon premium-accordion__closed`}
                        role="img"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                    </svg>
                </div>
            </div>
            <div
                className={`premium-accordion__desc_wrap premium-accordion__desc_close`}
            >
                {"text" === contentType && (
                    <RichText.Content
                        tagName="p"
                        className={`premium-accordion__desc`}
                        value={description}
                    />
                )}
                {"block" === contentType && <InnerBlocks templateLock={false} />}
            </div>
        </div>
    );
}