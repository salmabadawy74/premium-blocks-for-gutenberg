import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";
import { Fragment } from "react";

const attributes = {
    "blockId": {
        "type": "string"
    },
    "hideDesktop": {
        "type": "boolean",
        "default": false
    },
    "hideTablet": {
        "type": "boolean",
        "default": false
    },
    "hideMobile": {
        "type": "boolean",
        "default": false
    },
    "showIcon": {
        "type": "boolean",
        "default": true
    },
    "title": {
        "type": "string"
    },
    "iconType": {
        "type": "string",
        "default": "icon"
    },
    "icon": {
        "type": "string",
        "default": "ic_circleRight"
    },
    "enableLink": {
        "type": "boolean",
        "default": false
    },
    "linkURL": {
        "type": "string",
        "default": "#"
    },
    "openInNewTab": {
        "type": "boolean",
        "default": false
    },
    "imageID": {
        "type": "string"
    },
    "imageURL": {
        "type": "string"
    },
    "layoutPos": {
        "type": "string"
    },
    "divider": {
        "type": "boolean",
        "default": false
    },
    "bulletIconFontSize": {
        "type": "object",
        "default": {
            "Desktop": 20,
            "Tablet": 20,
            "Mobile": 20,
            "unit": "px"
        }
    },
    "icons": {
        "type": "array",
        "default": [
            {
                "iconn": "ic_circleRight",
                "link": "",
                "target": "_self",
                "size": "20",
                "width": "2",
                "title": "",
                "style": "default"
            }
        ]
    }
}

const deprecated = {
    attributes: attributes,
    migrate: (attributes) => {
        let newAttributes = {
            "bulletIconFontSize": {
                "Desktop": 20,
                "Tablet": 20,
                "Mobile": 20,
                "unit": "px"
            },
            "icons": [
                {
                    "iconn": "ic_circleRight",
                    "link": "",
                    "target": "_self",
                    "size": "20",
                    "width": "2",
                    "title": "",
                    "style": "default"
                }
            ],
            "icon": "ic_circleRight"
        }
        return Object.assign(attributes, newAttributes)
    },
    save: props => {
        const { attributes, className } = props;

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
            layoutPos
        } = attributes;

        const blockProps = useBlockProps.save({
            className: classnames(blockId, 'premium-bullet-list__wrapper', {
                ['premium-desktop-hidden']: hideDesktop,
                ['premium-tablet-hidden']: hideTablet,
                ['premium-mobile-hidden']: hideMobile,
            }),
        })

        return (
            <Fragment>
                <li {...blockProps}>
                    <div className={`premium-bullet-list__content-wrap`}>

                        {showIcon && (
                            <div className='premium-bullet-list__icon-wrap'>

                                {iconType === 'icon' && (
                                    <span className='premium-bullet-list__content-icon'>
                                        <i className={icon} />
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
            </Fragment>
        );
    }
};

export default deprecated