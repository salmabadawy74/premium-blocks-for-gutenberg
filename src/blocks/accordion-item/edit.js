import {
    useEffect,
    useState
} from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { generateBlockId } from '../../components/HelperFunction';
import classnames from "classnames";
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function AccordionItemEdit({
    attributes,
    setAttributes,
    context,
    clientId,
    className
}) {
    const { blockId, title, description } = attributes;
    const { titleTag, contentType, direction, arrowStyles } = context;
    const [isOpen, setIsOpen] = useState(true);
    const iconClasse = isOpen ? ' premium-accordion__closed' : '';
    const blockProps = useBlockProps({
        className: classnames(className, blockId, 'premium-accordion__content_wrap'),
    });
    useEffect(() => {
        if (!blockId) {
            setAttributes({ blockId: "premium-accordion-item-" + generateBlockId(clientId) });
        }
    }, [])

    return <div {...blockProps}>
        <div
            className={`premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowStyles[0].arrowPos}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className={`premium-accordion__title`}>
                <RichText
                    tagName={titleTag.toLowerCase()}
                    className={`premium-accordion__title_text`}
                    onChange={newText =>
                        setAttributes({ title: newText })
                    }
                    placeholder={__("Awesome Title", 'premium-blocks-for-gutenberg')}
                    value={title}
                />
            </div>
            <div className={`premium-accordion__icon_wrap`}>
                <svg
                    className={`premium-accordion__icon${iconClasse}`}
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
            className={`premium-accordion__desc_wrap${isOpen ? ' premium-accordion__desc_close' : ''}`}
        >
            {"text" === contentType && (
                <RichText
                    tagName="p"
                    className={`premium-accordion__desc`}
                    placeholder={__("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 'premium-blocks-for-gutenberg')}
                    onChange={newText =>
                        setAttributes({ description: newText })
                    }
                    value={description}
                />
            )}
            {"block" === contentType && <InnerBlocks templateLock={false} />}
        </div>
    </div>;
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(AccordionItemEdit)