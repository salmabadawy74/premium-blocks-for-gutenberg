import classnames from "classnames";
import Lottie from "react-lottie-with-segments";
import PremiumFilters from "../../components/premium-filters";
import PremiumBorder from "../../components/premium-border";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from "../../components/Color Control/ColorComponent";
import MultiButtonsControl from "../../components/responsive-radio";
import Icons from "../../components/icons";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import Placeholder from "./container.js";
import { JsonUploadEnabled } from "../../../assets/js/settings";
import InspectorTabs from "../../components/inspectorTabs";
import InspectorTab from "../../components/inspectorTab";
import InsideTabs from "../../components/InsideTabs";
import InsideTab from "../../components/InsideTab";
import SpacingControl from "../../components/premium-responsive-spacing";
import { generateCss, generateBlockId } from "../../components/HelperFunction";

const { __ } = wp.i18n;
const { useEffect, Fragment, useState, useRef } = wp.element;
const { withSelect } = wp.data;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, TextControl, ToggleControl, SelectControl } = wp.components;

let isLottieUpdated = null;

function Edit(props) {
    const { setAttributes, className, clientId, attributes } = props;
    // const [isJSONAllowed, setPrimary] = useState(false);
    const lottieplayer = useRef(null);

    useEffect(() => {
        setAttributes({
            blockId: "premium-lottie-" + generateBlockId(clientId)
        });
        if (!attributes.lottieId) {
            setAttributes({ lottieId: "premium-lottie-" + clientId });
        }
        onSelectLottieJSON();
        initLottieAnimation();
        // setPrimary(Boolean(JsonUploadEnabled))
    }, []);

    useEffect(() => {
        clearTimeout(isLottieUpdated);
        isLottieUpdated = setTimeout(initLottieAnimation, 400);
    }, [isLottieUpdated]);

    const onSelectLottieJSON = (media) => {
        if (!media || !media.url) {
            setAttributes({ jsonLottie: null });
            return;
        }
        setAttributes({ jsonLottie: media });
        setAttributes({ lottieURl: media.url });
    };

    const initLottieAnimation = () => {
        const { blockId, trigger, bottom, top } = props.attributes;
        let lottieContainer = document.getElementById(
            `${blockId}`
        );
        if (lottieContainer !== null) {
            let lottieContainer = document.getElementById(
                `${blockId}`
            ),
                scrollElement = document.querySelector(
                    ".interface-interface-skeleton__content"
                ),
                animate = lottieplayer.current;
            document.addEventListener("load", initScroll);
            scrollElement.addEventListener("scroll", initScroll);
            function initScroll() {
                let triggerEvent = trigger,
                    startEvent = bottom,
                    endEvent = top;
                if (triggerEvent === "scroll" || triggerEvent === "viewport") {
                    var scrollHeight = scrollElement.scrollHeight,
                        scrollTop = scrollElement.scrollTop,
                        pageRange = scrollElement.clientHeight,
                        precentage = (scrollTop * 100) / scrollHeight,
                        pageEnd =
                            ((scrollTop + pageRange) * 100) / scrollHeight;

                    if (triggerEvent === "viewport") {
                        if (startEvent < precentage && pageEnd < endEvent)
                            animate.anim.play();
                        else {
                            animate.anim.pause();
                        }
                    } else {
                        let stopFrame = animate.anim.totalFrames;
                        let currframe = (precentage / 100) * stopFrame;
                        animate.anim.goToAndStop(currframe, true);
                    }
                }
            }
        }
    };

    const {
        blockId,
        lottieURl,
        lottieJson,
        loop,
        reverse,
        speed,
        trigger,
        bottom,
        top,
        scrollSpeed,
        rotate,
        lottieAlign,
        link,
        url,
        target,
        render,
        hideDesktop,
        hideTablet,
        hideMobile,
        lottieStyles,
        padding,
        border,
        filter,
        filterHover,
        size,
    } = attributes;

    let validJsonPath = "invalid";
    if (lottieURl && lottieURl.endsWith(".json")) {
        validJsonPath = "valid";
    }

    if (validJsonPath === "invalid") {
        return (
            <div className="premium-lottie-animation-wrap">
                <Placeholder
                    className={className}
                    value={lottieJson}
                    isJSONAllowed={JsonUploadEnabled == 1 ? true : false}
                    attributes={attributes}
                    onSelectURL={(value) =>
                        setAttributes({ lottieURl: value })
                    }
                    onSelect={onSelectLottieJSON}
                />
            </div>
        );
    }

    const handleLottieMouseEnter = () => {
        lottieplayer.current.anim.play();
    };

    const handleLottieMouseLeave = () => {
        lottieplayer.current.anim.pause();
    };

    const handleRemoveLottie = () => {
        setAttributes({
            lottieURl: "",
        });
    };

    const saveLottieStyles = (value) => {
        const newUpdate = lottieStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            lottieStyles: newUpdate,
        });
    };

    let stopAnimation = true;

    if ("none" === trigger || "undefined" === typeof trigger) {
        stopAnimation = false;
    }
    const reversedir = reverse ? -1 : 1;
    const paddingTop = padding?.[props.deviceType]?.top;
    const paddingRight = padding?.[props.deviceType]?.right;
    const paddingBottom = padding?.[props.deviceType]?.bottom;
    const paddingLeft = padding?.[props.deviceType]?.left;

    const loadStyles = () => {
        const styles = {};
        styles[
            `#${blockId} .premium-lottie-animation svg`
        ] = {
            width: `${size[props.deviceType]}${size["unit"]
                } !important`,
            height: `
            ${size[props.deviceType]}${size["unit"]} !important`,
        };
        styles[`#${blockId}`] = {
            "text-align": `${lottieAlign[props.deviceType]}`,
        };
        styles[`#${blockId} .premium-lottie-animation`] = {
            "background-color": `${lottieStyles[0].backColor}`,
            filter: ` brightness( ${filter?.bright}% ) contrast( ${filter?.contrast}% ) saturate( ${filter?.saturation}% ) blur( ${filter?.blur}px ) hue-rotate( ${filter?.hue}deg )`,
            "border-style": `${border?.borderType}`,
            "border-color": `${border?.borderColor}`,
            "border-top-width": `${border?.borderWidth?.[props.deviceType]?.top
                }px!important`,
            "border-right-width": `${border?.borderWidth?.[props.deviceType]?.right
                }px!important`,
            "border-bottom-width": `${border?.borderWidth?.[props.deviceType]?.bottom
                }px!important`,
            "border-left-width": `${border?.borderWidth?.[props.deviceType]?.left
                }px!important`,
            "border-top-left-radius": `${border?.borderRadius?.[props.deviceType]?.top
                }px!important`,
            "border-top-right-radius": `${border?.borderRadius?.[props.deviceType]?.right
                }px!important`,
            "border-bottom-left-radius": `${border?.borderRadius?.[props.deviceType]?.bottom
                }px!important`,
            "border-bottom-right-radius": `${border?.borderRadius?.[props.deviceType]?.left
                }px!important`,
            "padding-top": `${paddingTop}${padding?.unit} !important`,
            "padding-right": `${paddingRight}${padding?.unit} !important`,
            "padding-bottom": `${paddingBottom}${padding?.unit} !important`,
            "padding-left": `${paddingLeft}${padding?.unit} !important`,
            transform: `rotate(${rotate}deg) !important`,
        };
        styles[
            `#${blockId}  .premium-lottie-animation:hover`
        ] = {
            "background-color": `${lottieStyles[0].backHColor}`,
            filter: `brightness( ${filterHover?.bright}% ) contrast( ${filterHover?.contrast}% ) saturate( ${filterHover?.saturation}% ) blur( ${filterHover?.blur}px ) hue-rotate( ${filterHover?.hue}deg ) !important`,
        };
        return generateCss(styles);
    };

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__("General Settings","premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <button
                                className="lottie-remove"
                                onClick={handleRemoveLottie}
                            >
                                {__("Change Animation","premium-blocks-for-gutenberg")}
                            </button>
                            <ToggleControl
                                label={__(
                                    `loop`,
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={loop}
                                onChange={(value) =>
                                    setAttributes({ loop: value })
                                }
                                help={
                                    loop
                                        ? __(
                                            "This option works only on the preview page",
                                            "premium-blocks-for-gutenberg"
                                        )
                                        : ""
                                }
                            />
                            <ToggleControl
                                label={__(
                                    `Reverse`,
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={reverse}
                                onChange={() =>
                                    setAttributes({ reverse: !reverse })
                                }
                            />
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Animation Speed",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={speed}
                                onChange={(newValue) =>
                                    setAttributes({
                                        speed: newValue !== "" ? newValue : 1,
                                    })
                                }
                                showUnit={false}
                                defaultValue={1}
                                max={3}
                                min={0.1}
                                step={0.1}
                            />
                            <SelectControl
                                label={__(
                                    "Trigger",
                                    "premium-blocks-for-gutenberg"
                                )}
                                options={[
                                    {
                                        value: "none",
                                        label: __(
                                            "None",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "hover",
                                        label: __(
                                            "Hover",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "scroll",
                                        label: __(
                                            "Scroll",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "viewport",
                                        label: __(
                                            "Viewport",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                ]}
                                value={trigger}
                                onChange={(newValue) =>
                                    setAttributes({ trigger: newValue })
                                }
                            />

                            {"scroll" === trigger && !reverse && (
                                <Fragment>
                                    <ResponsiveSingleRangeControl
                                        label={__(
                                            "Scroll Speed",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={scrollSpeed}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                scrollSpeed: newValue,
                                            })
                                        }
                                        showUnit={false}
                                        defaultValue={0}
                                        min={1}
                                        max={10}
                                        step={0.1}
                                    />
                                </Fragment>
                            )}
                            {(trigger === "viewport" || trigger === "scroll") &&
                                !reverse && (
                                    <Fragment>
                                        <ResponsiveSingleRangeControl
                                            label={__(
                                                "Bottom",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={bottom}
                                            onChange={(newValue) =>
                                                setAttributes({
                                                    bottom: newValue,
                                                })
                                            }
                                            showUnit={false}
                                            defaultValue={""}
                                            min={0}
                                            max={50}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__(
                                                "Top",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={top}
                                            onChange={(newValue) =>
                                                setAttributes({ top: newValue })
                                            }
                                            showUnit={false}
                                            defaultValue={""}
                                            min={50}
                                            max={100}
                                        />
                                    </Fragment>
                                )}
                            <ResponsiveRangeControl
                                label={__(
                                    "Size",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={size}
                                onChange={(value) =>
                                    setAttributes({ size: value })
                                }
                                min={0}
                                max={800}
                                step={1}
                                showUnit={true}
                                units={["px", "em", "rem"]}
                                defaultValue={200}
                            />
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Rotate (Degree)",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={rotate}
                                min={-180}
                                max={180}
                                onChange={(newValue) =>
                                    setAttributes({ rotate: newValue })
                                }
                                showUnit={false}
                                defaultValue={0}
                            />
                            <MultiButtonsControl
                                choices={[
                                    {
                                        value: "left",
                                        label: __("Left","premium-blocks-for-gutenberg"),
                                        icon: Icons.alignLeft,
                                    },
                                    {
                                        value: "center",
                                        label: __("Center","premium-blocks-for-gutenberg"),
                                        icon: Icons.alignCenter,
                                    },
                                    {
                                        value: "right",
                                        label: __("Right","premium-blocks-for-gutenberg"),
                                        icon: Icons.alignRight,
                                    },
                                ]}
                                value={lottieAlign}
                                onChange={(align) =>
                                    setAttributes({ lottieAlign: align })
                                }
                                label={__(
                                    "Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <hr />
                            <ToggleControl
                                label={__(
                                    "Link",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={link}
                                onChange={() => setAttributes({ link: !link })}
                            />
                            {link && (
                                <Fragment>
                                    <TextControl
                                        label={__(
                                            "URL",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={url}
                                        onChange={(newURL) =>
                                            setAttributes({ url: newURL })
                                        }
                                    />
                                    <ToggleControl
                                        label={__(
                                            "Open link in new tab",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        checked={target}
                                        onChange={(newValue) =>
                                            setAttributes({ target: newValue })
                                        }
                                    />
                                </Fragment>
                            )}
                            <SelectControl
                                label={__(
                                    "Render As",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={render}
                                options={[
                                    { label: __("SVG","premium-blocks-for-gutenberg"), value: "svg" },
                                    { label: __("Canvas","premium-blocks-for-gutenberg"), value: "canvas" },
                                ]}
                                help={__(
                                    `Set render type to canvas if you're having performance issues on the page.
                    This setting will only take effect once you are on the live page, and not while you're editing.
                    `,
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(newValue) =>
                                    setAttributes({ render: newValue })
                                }
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Style", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <InsideTabs>
                                <InsideTab tabTitle={__("Normal","premium-blocks-for-gutenberg")}>
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Background Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                lottieStyles[0].backColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveLottieStyles({
                                                    backColor: newValue,
                                                })
                                            }
                                        />

                                        <PremiumFilters
                                            value={filter}
                                            onChange={(value) =>
                                                setAttributes({
                                                    filter: value,
                                                })
                                            }
                                        />
                                    </Fragment>
                                </InsideTab>
                                <InsideTab tabTitle={__("Hover","premium-blocks-for-gutenberg")}>
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Background Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                lottieStyles[0].backHColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveLottieStyles({
                                                    backHColor: newValue,
                                                })
                                            }
                                        />

                                        <PremiumFilters
                                            value={filterHover}
                                            onChange={(value) =>
                                                setAttributes({
                                                    filterHover: value,
                                                })
                                            }
                                        />
                                    </Fragment>
                                </InsideTab>
                            </InsideTabs>

                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={border}
                                onChange={(value) =>
                                    setAttributes({ border: value })
                                }
                            />

                            <SpacingControl
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={padding}
                                onChange={(value) =>
                                    setAttributes({
                                        padding: value,
                                    })
                                }
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({
                                    hideDesktop: value
                                        ? " premium-desktop-hidden"
                                        : "",
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value
                                        ? " premium-tablet-hidden"
                                        : "",
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value
                                        ? " premium-mobile-hidden"
                                        : "",
                                })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div  
            {...useBlockProps({
                className: classnames(
                    className,
                    `premium-lottie-wrap ${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                    ),
                })}
            >
            <div
                id={`${blockId}`}
                data-lottieURl={lottieURl}
                data-trigger={trigger}
                data-start={bottom}
                data-end={top}
            >
                <style dangerouslySetInnerHTML={{ __html: loadStyles() }} />
                <div
                    className={`premium-lottie-animation`}
                    onMouseEnter={
                        "hover" === trigger
                            ? handleLottieMouseEnter
                            : () => (stopAnimation = true)
                    }
                    onMouseLeave={
                        "hover" === trigger
                            ? handleLottieMouseLeave
                            : () => (stopAnimation = true)
                    }
                >
                    <Lottie
                        ref={lottieplayer}
                        options={{
                            loop: loop,
                            path: lottieURl,
                            rendererSettings: {
                                preserveAspectRatio: "xMidYMid",
                                className: "premium-lottie-inner",
                            },
                        }}
                        isStopped={stopAnimation}
                        speed={speed === "" ? 1 : speed}
                        isClickToPauseDisabled={true}
                        direction={reversedir}
                    />
                    {link && url !== " " && (
                        <a
                            rel="noopener noreferrer"
                            target={target ? "_blank" : "_self"}
                            href={"javascript:void(0)"}
                        ></a>
                    )}
                </div>
            </div>
            </div>
        </Fragment>
    );
}
export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select(
        "core/edit-post"
    );
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(Edit);