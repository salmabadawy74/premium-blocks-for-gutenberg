import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";
import { Fragment } from "react";
import {
    GenIcon,
    FaIco,
    Ico
} from "@pbg/components";

export default function save({ attributes }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        showIcon,
        title,
        iconType,
        icon,
        enableLink,
        linkURL,
        openInNewTab,
        imageURL,
        divider,
        layoutPos,
        icons
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(blockId, 'premium-bullet-list__wrapper', {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
    })

    return <Fragment>
        <li {...blockProps}>
            <div className={`premium-bullet-list__content-wrap`}>

                {showIcon && (
                    <div className='premium-bullet-list__icon-wrap'>

                        {iconType === 'icon' && (
                            <span className='premium-bullet-list__content-icon'>
                                <GenIcon className={`premium-bullet-list-icon ${icon}`}
                                    name={icon}
                                    icon={('fa' === icon.substring(0, 2) ? FaIco[icon] : Ico[icon])}
                                    strokeWidth={('fe' === icon.substring(0, 2) ? icons[0].width : undefined)}
                                />
                            </span>
                        )}
                        {iconType === 'image' && (
                            <img src={imageURL} alt={title} />
                        )}
                    </div>
                )}
                {enableLink && (
                    <a className='premium-bullet-list-link' href={linkURL} target={openInNewTab ? '_blank' : '_self'} rel="noopener noreferrer" />
                )}
                <div className='premium-bullet-list__label-wrap'>
                    <RichText.Content
                        tagName="span"
                        value={title}
                        className='premium-bullet-list__label'
                    />
                </div>
            </div>
        </li>
        {divider && (
            <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
        )}
    </Fragment>;
}