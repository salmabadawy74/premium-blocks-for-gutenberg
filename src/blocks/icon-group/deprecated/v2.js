import classnames from "classnames";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { filterJsCss, generateCss } from '@pbg/helpers';

const attributes = {
    "blockId": {
        "type": "string"
    },
    "hideDesktop": {
        "type": "boolean",
        "default": ""
    },
    "hideTablet": {
        "type": "boolean",
        "default": ""
    },
    "hideMobile": {
        "type": "boolean",
        "default": ""
    },
    "align": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "groupAlign": {
        "type": "string",
        "default": "horizontal"
    },
    "iconsSize": {
        "type": "object",
        "default": {
            "Desktop": "",
            "Tablet": "",
            "Mobile": "",
            "unit": "px"
        }
    },
    "groupIconMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0"
            },
            "Tablet": {
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0"
            },
            "Mobile": {
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0"
            },
            "unit": "px"
        }
    },
    "groupIconPadding": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0"
            },
            "Tablet": {
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0"
            },
            "Mobile": {
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0"
            },
            "unit": "px"
        }
    },
    "groupIconBorder": {
        "type": "object",
        "default": {
            "borderColor": "",
            "borderType": "none",
            "borderRadius": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            },
            "borderWidth": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            }
        }
    },
    "groupIconColor": {
        "type": "string",
        "default": ""
    },
    "groupIconBack": {
        "type": "string",
        "default": ""
    },
    "groupIconHoverColor": {
        "type": "string",
        "default": ""
    },
    "groupIconHoverBack": {
        "type": "string",
        "default": ""
    },
    "hoversEffect": {
        "type": "string",
        "default": "none",
        "context": true
    }
}

const deprecated = {
    attributes: attributes,
    migrate: (attributes) => {
        let newAttributes = {
            iconsSize: {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            hoversEffect: attributes.hoverEffect ? attributes.hoverEffect : 'none'
        }
        return Object.assign(attributes, newAttributes)
    },
    save: props => {
        const { attributes, className } = props;

        const {
            blockId,
            groupAlign,
            hideDesktop,
            hideTablet,
            hideMobile,
            groupIconBorder,
            groupIconColor,
            groupIconBack,
            groupIconHoverColor,
            groupIconHoverBack,
            hoverEffect
        } = attributes;

        const blockProps = useBlockProps.save({
            className: classnames('premium-icon-group', blockId, {
                ['premium-desktop-hidden']: hideDesktop,
                ['premium-tablet-hidden']: hideTablet,
                ['premium-mobile-hidden']: hideMobile,
            })
        })

        const loadStyles = () => {
            const styles = {};

            styles[` .${blockId} .premium-icon-group-container i:hover`] = {
                color: `${groupIconHoverColor}`,
                "background-color": `${groupIconHoverBack}`
            };

            styles[` .${blockId} .premium-icon-group-container i`] = {
                color: `${groupIconColor}`,
                "background-color": `${groupIconBack}`,
                'border-color': `${groupIconBorder && groupIconBorder.borderColor}`,
                'border-style': `${groupIconBorder && groupIconBorder.borderType}`,
            };

            return generateCss(styles);
        }

        return (
            <div {...blockProps}>
                <style>{loadStyles()}</style>
                <div
                    className={`premium-icon-group-container premium-icon-group-${groupAlign} premium-icon__${hoverEffect}`}
                >
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
};

export default deprecated