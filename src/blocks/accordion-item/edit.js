import { useEffect } from '@wordpress/element';
import { withSelect, useSelect } from '@wordpress/data';
import { generateBlockId } from '../../components/HelperFunction';
import classnames from "classnames";
import { RichText, InnerBlocks, useBlockProps, store as blockEditorStore } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function AccordionItemEdit({
    attributes,
    setAttributes,
    context,
    clientId,
    className,
    isSelected
}) {
    const { blockId, title, description } = attributes;
    const { titleTag, contentType, direction, arrowStyles } = context;
    // const iconClasse = ' premium-accordion__closed';
    const blockProps = useBlockProps({
        className: classnames(className, blockId, 'premium-accordion__content_wrap'),
    });
    useEffect(() => {
        setAttributes({ blockId: "premium-accordion-item-" + generateBlockId(clientId) });
    }, [])

    useEffect(() => {
        if (direction !== attributes.direction) {
            setAttributes({ direction: direction });
        }
        if (contentType !== attributes.contentType) {
            setAttributes({ contentType: contentType });
        }
        if (titleTag !== attributes.titleTag) {
            setAttributes({ titleTag: titleTag });
        }
        if (arrowStyles[0].arrowPos !== attributes.arrowPosition) {
            setAttributes({ arrowPosition: arrowStyles[0].arrowPos });
        }
    }, [titleTag, contentType, direction, arrowStyles]);

    const {
        isInnerBlockSelected,
    } = useSelect(
        (select) => {
            const { hasSelectedInnerBlock } = select(
                blockEditorStore
            );
            return {
                isInnerBlockSelected: hasSelectedInnerBlock(clientId, true),
            };
        },
        [clientId]
    );

    const initToggleBox = () => {
        const accordionTitles = document.querySelectorAll(".is-selected");

        accordionTitles.forEach((accordionTitle) => {
            const desc = accordionTitle.querySelectorAll(".premium-accordion__desc_wrap");
            const svg = accordionTitle.querySelectorAll(".premium-accordion__icon");

            if (desc[0].classList.contains("is-open")) {
                desc[0].classList.remove("is-open");
                svg[0].classList.remove("premium-accordion__closed");
            }
            else {
                const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
                accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
                    accordionTitleWithIsOpen.classList.remove("is-open");
                });
                const accordionSvgsWithIsOpen = document.querySelectorAll(".premium-accordion__closed");
                accordionSvgsWithIsOpen.forEach((accordionSvgWithIsOpen) => {
                    accordionSvgWithIsOpen.classList.remove("premium-accordion__closed");
                });
                desc[0].classList.add("is-open");
                svg[0].classList.add("premium-accordion__closed");
            }
        });
    };

    return <div {...blockProps} >
        <div
            className={`premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowStyles[0].arrowPos}`}
            onClick={() => initToggleBox()}
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
                    className={`premium-accordion__icon`}
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
            className={`premium-accordion__desc_wrap`}
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

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(AccordionItemEdit)