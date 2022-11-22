import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";
import { filterJsCss } from '@pbg/helpers';

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
    "typography": {
        "type": "object",
        "default": {
            "fontWeight": "400",
            "fontStyle": "",
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "fontFamily": "Default",
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "textDecoration": "",
            "textTransform": "",
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "color": {
        "type": "string",
        "default": "#fff"
    },
    "backgroundColor": {
        "type": "string",
        "default": "#793DC3"
    },
    "text": {
        "type": "string",
        "default": "Popular"
    },
    "textWidth": {
        "type": "number"
    },
    "badgeSize": {
        "type": "number"
    },
    "position": {
        "type": "string",
        "default": "right"
    },
    "vOffset": {
        "type": "number"
    },
    "hOffset": {
        "type": "number"
    }
}

const deprecated = {
    attributes: attributes,
    isEligible(attributes) {
        return !attributes.backgroundColor;
    },
    migrate: (attributes) => {
        let newAttributes = {
            backgroundColor: attributes.backgroundColor || 'var(--pbg-global-color1,#793dc3)',
        }
        return Object.assign(attributes, newAttributes)
    },
    save: ({ attributes }) => {
        const {
            blockId,
            hideDesktop,
            hideTablet,
            hideMobile,
            color,
            typography,
            text,
            position,
            vOffset,
            hOffset,
            backgroundColor,
            textWidth,
            badgeSize,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: classnames(blockId, `premium-badge-${position}`, {
                ['premium-desktop-hidden']: hideDesktop,
                ['premium-tablet-hidden']: hideTablet,
                ['premium-mobile-hidden']: hideMobile,
            }),
            style: {
                top: `${vOffset || 0}px`,
                [position]: `${hOffset || 0}px`,
            }
        })

        return <div {...blockProps}>
            <div className='premium-badge-wrap' style={filterJsCss({
                borderRightColor:
                    "right" === position ? backgroundColor : "transparent",
                borderTopColor: "left" === position ? backgroundColor : "transparent",
                borderBottomWidth: "right" === position && `${badgeSize}px`,
                borderRightWidth: `${badgeSize}px`,
                borderTopWidth: "left" === position && `${badgeSize}px`,
            })}>
                <RichText.Content
                    tagName='span'
                    value={text}
                    style={filterJsCss({
                        color: color,
                        width: `${textWidth}px`,
                        fontStyle: typography?.fontStyle,
                        fontFamily: typography?.fontFamily,
                        fontWeight: typography?.fontWeight,
                        textDecoration: typography?.textDecoration,
                        textTransform: typography?.textTransform,
                    })}
                />
            </div>
        </div>;
    }
};

export default deprecated