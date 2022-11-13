import classnames from "classnames";
import { RichText, useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import {
    gradientBackground,
    filterJsCss,
    gradientValue,
    generateCss,
} from '@pbg/helpers';

export default function save(props) {
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
                : "var(--pbg-global-color1,#793dc3)"
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