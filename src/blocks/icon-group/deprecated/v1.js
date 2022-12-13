import classnames from "classnames";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import {
    filterJsCss
} from '@pbg/helpers';

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
    }
}

const deprecated = {
    attributes: attributes,
    migrate: (attributes) => {
        let newAttributes = {
            groupIconColor: '',
            groupIconBack: '',
            groupIconHoverColor: '',
            groupIconHoverBack: ''
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
            groupIconBorder
        } = attributes;

        const blockProps = useBlockProps.save({
            className: classnames('premium-icon-group', blockId, {
                ['premium-desktop-hidden']: hideDesktop,
                ['premium-tablet-hidden']: hideTablet,
                ['premium-mobile-hidden']: hideMobile,
            })
        })

        return (
            <div {...blockProps}>
                <div
                    className={`premium-icon-group-${groupAlign}`}
                    style={filterJsCss({
                        borderStyle: groupIconBorder?.borderType,
                        borderColor: groupIconBorder?.borderColor
                    })}
                >
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
};

export default deprecated