import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";
import { filterJsCss } from '@pbg/helpers';

const attributes = {
    "blockId": {
        "type": "string"
    },
    "increment": {
        "type": "string",
        "default": 500
    },
    "time": {
        "type": "string",
        "default": 1000
    },
    "delay": {
        "type": "string",
        "default": 10
    },
    "prefix": {
        "type": "boolean",
        "default": false
    },
    "suffix": {
        "type": "boolean",
        "default": false
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
    "numberStyles": {
        "type": "array",
        "default": [
            {
                "numberColor": ""
            }
        ]
    },
    "suffixStyles": {
        "type": "array",
        "default": [
            {
                "suffixTxt": "Suffix",
                "suffixColor": ""
            }
        ]
    },
    "prefixStyles": {
        "type": "array",
        "default": [
            {
                "prefixTxt": "Prefix",
                "prefixColor": ""
            }
        ]
    },
    "numberTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": "55",
                "Tablet": "55",
                "Mobile": "55",
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "prefixTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "suffixTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "prefixPadding": {
        "type": "object",
        "default": {
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
            },
            "unit": "px"
        }
    },
    "prefixMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "2",
                "right": "2",
                "bottom": "2",
                "left": "2"
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
            },
            "unit": "px"
        }
    },
    "numberPadding": {
        "type": "object",
        "default": {
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
            },
            "unit": "px"
        }
    },
    "numberMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "2",
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
            },
            "unit": "px"
        }
    },
    "suffixPadding": {
        "type": "object",
        "default": {
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
            },
            "unit": "px"
        }
    },
    "suffixMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": "2"
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
            },
            "unit": "px"
        }
    },
    "align": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    }
}

const deprecated = {
    attributes: attributes,
    save: props => {
        const {
            blockId,
            increment,
            time,
            delay,
            prefix,
            suffix,
            hideDesktop,
            hideTablet,
            hideMobile,
            numberStyles,
            suffixStyles,
            prefixStyles,
            numberTypography,
            prefixTypography,
            suffixTypography
        } = props.attributes;
    
        const blockProps = useBlockProps.save({
            className: classnames('premium-counter', blockId, {
                ['premium-desktop-hidden']: hideDesktop,
                ['premium-tablet-hidden']: hideTablet,
                ['premium-mobile-hidden']: hideMobile,
            })
        })
    
        return (
            <div {...blockProps}>
                <div className={`premium-countup__desc`}>
                    {prefix && (
                        <RichText.Content
                            className={`premium-countup__prefix`}
                            tagName="p"
                            value={prefixStyles[0].prefixTxt}
                            style={filterJsCss({
                                color: prefixStyles[0].prefixColor,
                                fontStyle: prefixTypography?.fontStyle,
                                fontFamily: prefixTypography?.fontFamily,
                                fontWeight: prefixTypography?.fontWeight,
                                textDecoration: prefixTypography?.textDecoration,
                                textTransform: prefixTypography?.textTransform,
                            })}
                        />
                    )}
                    <RichText.Content
                        className={`premium-countup__increment`}
                        value={`${increment}`}
                        tagName="p"
                        data-interval={time}
                        data-delay={delay}
                        style={filterJsCss({
                            color: numberStyles[0].numberColor,
                            fontStyle: numberTypography?.fontStyle,
                            fontFamily: numberTypography?.fontFamily,
                            fontWeight: numberTypography?.fontWeight,
                            textDecoration: numberTypography?.textDecoration,
                            textTransform: numberTypography?.textTransform,
                        })}
                    />
                    {suffix && (
                        <RichText.Content
                            className={`premium-countup__suffix`}
                            value={suffixStyles[0].suffixTxt}
                            tagName="p"
                            style={filterJsCss({
                                color: suffixStyles[0].suffixColor,
                                fontStyle: suffixTypography?.fontStyle,
                                fontFamily: suffixTypography?.fontFamily,
                                fontWeight: suffixTypography?.fontWeight,
                                textDecoration: suffixTypography?.textDecoration,
                                textTransform: suffixTypography?.textTransform,
                            })}
                        />
                    )}
                </div>
            </div>
        );
    }
};

export default deprecated