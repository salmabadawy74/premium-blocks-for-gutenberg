import classnames from "classnames";
import { RichText, useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import {
    gradientBackground,
    filterJsCss,
    gradientValue,
    generateCss,
} from '@pbg/helpers';

const attributes = {
    "blockId": {
        "type": "string"
    },
    "align": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "showLabel": {
        "type": "boolean",
        "default": true
    },
    "firstLabel": {
        "type": "string",
        "default": "Content #1"
    },
    "secondLabel": {
        "type": "string",
        "default": "Content #2"
    },
    "display": {
        "type": "string",
        "default": "inline"
    },
    "labelTag": {
        "type": "string",
        "default": "h3"
    },
    "backgroundTypeState2": {
        "type": "string",
        "default": ""
    },
    "labelStyles": {
        "type": "object",
        "default": {
            "firstLabelColor": "",
            "secondLabelColor": "",
            "firstLabelBGColor": "",
            "secondLabelBGColor": ""
        }
    },
    "firstStateColor": {
        "type": "string"
    },
    "secondStateColor": {
        "type": "string"
    },
    "switcherBGColor": {
        "type": "string",
        "default": "rgb(242, 242, 242)"
    },
    "firstLabelPadding": {
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
    "secondLabelPadding": {
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
    "containerPadding": {
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
    "containerMargin": {
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
    "switchSize": {
        "type": "object",
        "default": {
            "Desktop": 15
        }
    },
    "containerRadius": {
        "type": "number",
        "default": 50
    },
    "containerRadiusUnit": {
        "type": "string",
        "default": "%"
    },
    "switchRadius": {
        "type": "number",
        "default": "1.5"
    },
    "switchRadiusUnit": {
        "type": "string",
        "default": "em"
    },
    "labelSpacing": {
        "type": "object",
        "default": {
            "Desktop": "15",
            "Tablet": "",
            "Mobile": ""
        }
    },
    "containerShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": ""
        }
    },
    "switchShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": ""
        }
    },
    "firstLabelShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0"
        }
    },
    "firstLabelBoxShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": ""
        }
    },
    "firstLabelTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
            "textDecoration": "",
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
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "firstLabelborder": {
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
    "secondLabelTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
            "textDecoration": "",
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
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "secondLabelShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0"
        }
    },
    "secondLabelBoxShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": ""
        }
    },
    "secondLabelborder": {
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
    "containerBoxShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": ""
        }
    },
    "containerborder": {
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
    "controllerOneBackground": {
        "type": "object",
        "default": {
            "backgroundType": "",
            "backgroundColor": "#793dc3",
            "backgroundImageID": "",
            "backgroundImageURL": "",
            "backgroundPosition": "center center",
            "backgroundRepeat": "repeat",
            "backgroundSize": "auto",
            "fixed": false,
            "gradientLocationOne": "0",
            "gradientColorTwo": "",
            "gradientLocationTwo": "100",
            "gradientAngle": "180",
            "gradientPosition": "center center",
            "gradientType": "linear"
        }
    },
    "switcherBackground": {
        "type": "object",
        "default": {
            "backgroundType": "",
            "backgroundColor": "rgb(242, 242, 242)",
            "backgroundImageID": "",
            "backgroundImageURL": "",
            "backgroundPosition": "",
            "backgroundRepeat": "",
            "backgroundSize": "",
            "fixed": false,
            "gradientLocationOne": "0",
            "gradientColorTwo": "",
            "gradientLocationTwo": "100",
            "gradientAngle": "180",
            "gradientPosition": "center center",
            "gradientType": "linear"
        }
    },
    "containerBackground": {
        "type": "object",
        "default": {
            "backgroundType": "",
            "backgroundColor": "",
            "backgroundImageID": "",
            "backgroundImageURL": "",
            "backgroundPosition": "",
            "backgroundRepeat": "",
            "backgroundSize": "",
            "fixed": false,
            "gradientLocationOne": "0",
            "gradientColorTwo": "",
            "gradientLocationTwo": "100",
            "gradientAngle": "180",
            "gradientPosition": "center center",
            "gradientType": "linear"
        }
    }
}

const deprecated = {
    attributes: attributes,
    save: props => {
        const { attributes, className } = props;

        const {
            blockId,
            showLabel,
            firstLabel,
            secondLabel,
            display,
            labelTag,
            labelStyles,
            firstLabelborder,
            switchShadow,
            containerShadow,
            firstLabelShadow,
            firstLabelBoxShadow,
            firstLabelTypography,
            secondLabelTypography,
            secondLabelShadow,
            secondLabelBoxShadow,
            secondLabelborder,
            containerBoxShadow,
            containerborder,
            hideDesktop,
            hideTablet,
            hideMobile,
            controllerOneBackground,
            switcherBackground,
            containerBackground,
            switchRadius,
            switchRadiusUnit,
            containerRadius,
            containerRadiusUnit,
        } = attributes;

        const loadStyles = () => {
            const styles = {};
            styles[
                `.${blockId} .premium-content-switcher-toggle-switch-slider:before `
            ] = {
                "border-radius": `${containerRadius}${containerRadiusUnit} !important`,
                "box-shadow": ` ${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position} !important`,
                "background-color": `${controllerOneBackground.backgroundType == "solid"
                    ? controllerOneBackground.backgroundColor
                    : "#793dc3"
                    }`,
                "background-image": `${gradientValue(controllerOneBackground)}`,
                "background-repeat": `${controllerOneBackground.backgroundRepeat}`,
                "background-position": `${controllerOneBackground.backgroundPosition}`,
                "background-size": `${controllerOneBackground.backgroundSize}`,
                "background-attachment": `${controllerOneBackground.fixed ? "fixed" : "unset"
                    }`,
            };
            styles[`.${blockId} .premium-content-switcher-toggle-switch-slider `] =
            {
                "border-radius": `${switchRadius}${switchRadiusUnit} !important`,
                "box-shadow": `${switchShadow.horizontal}px ${switchShadow.vertical}px ${switchShadow.blur}px ${switchShadow.color} ${switchShadow.position} !important`,
            };
            return generateCss(styles);
        };
        return (
            <div
                {...useBlockProps.save({
                    className: classnames(
                        className,
                        `premium-content-switcher ${blockId} `,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles(),
                    }}
                />

                <div
                    className={`premium-content-switcher`}
                    style={filterJsCss({
                        ...gradientBackground(containerBackground),
                        borderStyle: containerborder?.borderType,
                        borderColor: containerborder?.borderColor,
                        boxShadow: `${containerBoxShadow?.horizontal || 0}px ${containerBoxShadow?.vertical || 0
                            }px ${containerBoxShadow?.blur || 0}px ${containerBoxShadow?.color
                            } ${containerBoxShadow?.position}`,
                    })}
                >
                    <div className={`premium-content-switcher-toggle-${display}`}>
                        {showLabel && (
                            <div className="premium-content-switcher-first-label">
                                <RichText.Content
                                    tagName={labelTag.toLowerCase()}
                                    className={`premium-content-switcher-${display}-editing`}
                                    value={firstLabel}
                                    style={filterJsCss({
                                        fontStyle: firstLabelTypography?.fontStyle,
                                        fontWeight:
                                            firstLabelTypography?.fontWeight,
                                        textDecoration:
                                            firstLabelTypography?.textDecoration,
                                        textTransform:
                                            firstLabelTypography?.textTransform,
                                        margin: 0,
                                        color: labelStyles?.firstLabelColor,
                                        background: labelStyles?.firstLabelBGColor,
                                        borderStyle: firstLabelborder?.borderType,
                                        borderColor: firstLabelborder?.borderColor,
                                        boxShadow: `${firstLabelBoxShadow?.horizontal || 0
                                            }px ${firstLabelBoxShadow?.vertical || 0
                                            }px ${firstLabelBoxShadow?.blur || 0}px ${firstLabelBoxShadow?.color
                                            } ${firstLabelBoxShadow?.position}`,
                                        textShadow: `${firstLabelShadow?.horizontal || 0
                                            }px ${firstLabelShadow?.vertical || 0}px ${firstLabelShadow?.blur || 0
                                            }px ${firstLabelShadow?.color}`,
                                    })}
                                />
                            </div>
                        )}
                        <div className="premium-content-switcher-toggle-switch">
                            <label
                                className={`premium-content-switcher-toggle-switch-label`}
                            >
                                <input
                                    type="checkbox"
                                    className={`premium-content-switcher-toggle-switch-input ${blockId}`}
                                />
                                <span
                                    className="premium-content-switcher-toggle-switch-slider round"
                                    style={filterJsCss({
                                        ...gradientBackground(switcherBackground),
                                    })}
                                ></span>
                            </label>
                        </div>
                        {showLabel && (
                            <div className="premium-content-switcher-second-label">
                                <RichText.Content
                                    tagName={labelTag.toLowerCase()}
                                    className={`premium-content-switcher-${display}-editing`}
                                    value={secondLabel}
                                    style={filterJsCss({
                                        fontStyle: secondLabelTypography?.fontStyle,
                                        fontFamily:
                                            secondLabelTypography?.fontFamily,
                                        fontWeight:
                                            secondLabelTypography?.fontWeight,
                                        textDecoration:
                                            secondLabelTypography?.textDecoration,
                                        textTransform:
                                            secondLabelTypography?.textTransform,
                                        margin: 0,
                                        color: labelStyles?.secondLabelColor,
                                        background: labelStyles?.secondLabelBGColor,
                                        borderStyle: secondLabelborder?.borderType,
                                        borderColor: secondLabelborder?.borderColor,
                                        boxShadow: `${secondLabelBoxShadow?.horizontal || 0
                                            }px ${secondLabelBoxShadow?.vertical || 0
                                            }px ${secondLabelBoxShadow?.blur || 0}px ${secondLabelBoxShadow?.color
                                            } ${secondLabelBoxShadow?.position}`,
                                        textShadow: `${secondLabelShadow?.horizontal || 0
                                            }px ${secondLabelShadow?.vertical || 0}px ${secondLabelShadow?.blur || 0
                                            }px ${secondLabelShadow?.color}`,
                                    })}
                                />
                            </div>
                        )}
                    </div>
                    <div className={`premium-content-switcher-list`}>
                        <div
                            className="premium-content-switcher-two-content"
                            style={{ display: "none" }}
                        >
                            <InnerBlocks.Content
                                template={[
                                    ["premium/switcher-child"],
                                    ["premium/switcher-child"],
                                ]}
                                templateLock="all"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default deprecated