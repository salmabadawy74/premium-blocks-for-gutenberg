import classnames from "classnames";

import Lottie from 'react-lottie';
import PremiumFilters from "../../components/premium-filters";

import PremiumBorder from "../../components/premium-border";
import PremiumPadding from '../../components/premium-padding';
import PremiumBackground from '../../components/premium-background';
import hexToRgba from "hex-to-rgba";

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;


const {
    InspectorControls,
    MediaPlaceholder
} = wp.blockEditor

const {
    PanelBody,
    RangeControl,
    TextControl,
    ToggleControl,
    SelectControl,
    IconButton,
    TabPanel,
} = wp.components

class edit extends Component {

    constructor() {
        super(...arguments);
        this.lottieplayer = React.createRef();
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;

        setAttributes({ block_id: clientId });
        setAttributes({ classMigrate: true });

        const $style = document.createElement("style")
        $style.setAttribute("id", "lottie-style-" + clientId.substr(0, 6))
        document.head.appendChild($style);

        this.onSelectLottieJSON = this.onSelectLottieJSON.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        var element = document.getElementById("lottie-style-" + this.props.clientId.substr(0, 6))

        if (null !== element && undefined !== element) {
            //element.innerHTML = styling( this.props )
        }
    }


    onSelectLottieJSON(media) {

        const { setAttributes } = this.props

        if (!media || !media.url) {
            setAttributes({ jsonLottie: null })
            return
        }

        setAttributes({ jsonLottie: media })
        setAttributes({ lottieURl: media.url })

    }



    render() {
        const { attributes, setAttributes, className } = this.props;

        const {
            block_id,
            lottieURl,
            lottieJson,
            loop,
            reverse,
            speed,
            trigger,
            bottom,
            top,
            size,
            rotate,
            align,
            link,
            url,
            render,
            backColor,
            backOpacity,
            backHColor,
            backHOpacity,
            blur,
            hue,
            contrast,
            saturation,
            bright,
            blurH,
            hueH,
            contrastH,
            saturationH,
            brightH,
            borderType,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            borderColor,
            borderRadius,
            paddingT,
            paddingR,
            paddingB,
            paddingL,
            paddingU,
        } = attributes


        let validJsonPath = 'invalid';
        if (lottieURl && lottieURl.endsWith('.json')) {
            validJsonPath = 'valid'
        }

        if (validJsonPath === 'invalid') {
            return (
                <div className="premium-lottie-animation-wrap">
                    <MediaPlaceholder
                        labels={{
                            title: __('Lottie Animation'),
                            instructions: __('Allows you to add fancy animation i.e lottie to your website')
                        }}
                        allowedTypes={['application/json']}
                        accept={['application/json']}
                        value={lottieJson}
                        onSelectURL={(value) => setAttributes({ lottieURl: value })}
                        onSelect={this.onSelectLottieJSON}
                    />
                </div>
            )
        }

        const handleLottieMouseEnter = () => {
            this.lottieplayer.current.anim.play();
        };

        const handleLottieMouseLeave = () => {
            this.lottieplayer.current.anim.stop();
        };

        let play_animation = true;

        if ('none' === trigger || 'scroll' === trigger || 'viewport' === trigger||'undefined' === typeof trigger) {
            play_animation = false;
        }
        const reversedir = (reverse) ? -1 : 1;

        const mainClasses = classnames(className, 'premium-lottie-wrap')
        return [
            <InspectorControls>
                <PanelBody
                    title={__("General Settings")}
                    className="premium-panel-body"
                    initialOpen={true}
                >
                    <ToggleControl
                        label={__(`loop`)}
                        checked={loop}
                        onChange={() => setAttributes({ loop: !loop })}
                    />
                    <ToggleControl
                        label={__(`Reverse`)}
                        checked={reverse}
                        onChange={() => setAttributes({ reverse: !reverse })}
                    />
                    <Fragment>
                        <p>{__('Animation Speed')} </p>
                        <RangeControl
                            value={speed}
                            onChange={newValue => setAttributes({ speed: newValue })}
                            min={1}
                            max={2.5}
                            step={0.1}
                        />
                    </Fragment>
                    <SelectControl
                        label={__('Trigger')}
                        options={[
                            { value: 'none', label: __("None") },
                            { value: "hover", label: __("On Hover") },
                            { value: "scroll", label: __("Scroll") },
                            { value: "viewport", label: __("Viewport") },

                        ]}
                        value={trigger}
                        onChange={newValue => setAttributes({ trigger: newValue })}
                    />
                    {'viewport' === trigger && <Fragment>
                        <RangeControl
                            label={__('Bottom')}
                            value={bottom}
                            onChange={(newValue) => setAttributes({ bottom: newValue })}
                            min={0}
                            max={50}
                        />
                        <RangeControl
                            label={__('Top')}
                            value={top}
                            onChange={(newValue) => setAttributes({ top: newValue })}
                            min={50}
                            max={100}
                        />
                    </Fragment>}

                    <RangeControl
                        label={__("Size")}
                        value={size}
                        onChange={(newValue) => setAttributes({ size: newValue })}
                        min={1}
                        max={800}
                        step={1}
                    />
                    <RangeControl
                        label={__("Rotate (Degree)")}
                        value={rotate}
                        min={-180}
                        max={180}
                        onChange={(newValue) => setAttributes({ rotate: newValue })}
                        step={1}
                    />
                    <h2> {__("Alignment")}</h2>
                    <IconButton
                        key={"left"}
                        icon="editor-alignleft"
                        label="Left"
                        onClick={() => setAttributes({ align: "left" })}
                        aria-pressed={"left" === align}
                        isPrimary={"left" === align}
                    />
                    <IconButton
                        key={"center"}
                        icon="editor-aligncenter"
                        label="Right"
                        onClick={() =>
                            setAttributes({ align: "center" })
                        }
                        aria-pressed={"center" === align}
                        isPrimary={"center" === align}
                    />
                    <IconButton
                        key={"right"}
                        icon="editor-alignright"
                        label="Right"
                        onClick={() => setAttributes({ align: "right" })}
                        aria-pressed={"right" === align}
                        isPrimary={"right" === align}
                    />
                    <hr />
                    <ToggleControl
                        label={__("Link")}
                        checked={link}
                        onChange={() => setAttributes({ link: !link })}
                    />
                    {link && <TextControl
                        label={__("URL")}
                        value={url}
                        onChange={(newURL) => setAttributes({ url: newURL })}
                    />}
                    <SelectControl
                        label={__('Render As')}
                        value={render}
                        options={[
                            { label: "SVG", value: 'svg' },
                            { label: 'Canvas', value: 'canvas' }
                        ]}
                        help={`Set render type to canvas if you're having performance issues on the page.
                    This setting will only take effect once you are on the live page, and not while you're editing.
                    `}
                        onChange={(newValue) => setAttributes({ render: newValue })}
                    />
                </PanelBody>

                <PanelBody
                    title={__("Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <TabPanel
                        className="premium-color-tabpanel"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: "normal",
                                title: "Normal",
                                className: "premium-tab",
                            },
                            {
                                name: "hover",
                                title: "Hover",
                                className: "premium-tab",
                            },
                        ]}
                    >
                        {(tab) => {
                            let tabout;
                            if ("normal" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <PremiumBackground
                                            type="color"
                                            colorValue={backColor}
                                            opacity={backOpacity}
                                            onChangeColor={(newValue) => setAttributes({ backColor: newValue })}
                                            onChangeOpacity={(newValue) => setAttributes({ backOpacity: newValue })}
                                        />
                                        <PremiumFilters
                                            blur={blur}
                                            bright={bright}
                                            contrast={contrast}
                                            saturation={saturation}
                                            hue={hue}
                                            onChangeBlur={(value) => setAttributes({ blur: value })}
                                            onChangeBright={(value) => setAttributes({ bright: value })}
                                            onChangeContrast={(value) => setAttributes({ contrast: value })}
                                            onChangeSat={(value) => setAttributes({ saturation: value })}
                                            onChangeHue={(value) => setAttributes({ hue: value })}
                                        />
                                    </Fragment>
                                )
                            }
                            if ("hover" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <PremiumBackground
                                            type="color"
                                            colorValue={backHColor}
                                            opacity={backHOpacity}
                                            onChangeColor={(newValue) => setAttributes({ backHColor: newValue })}
                                            onChangeOpacity={(newValue) => setAttributes({ backHOpacity: newValue })}
                                        />
                                        <PremiumFilters
                                            blur={blurH}
                                            bright={brightH}
                                            contrast={contrastH}
                                            saturation={saturationH}
                                            hue={hueH}
                                            onChangeBlur={(value) => setAttributes({ blurH: value })}
                                            onChangeBright={(value) => setAttributes({ brightH: value })}
                                            onChangeContrast={(value) => setAttributes({ contrastH: value })}
                                            onChangeSat={(value) => setAttributes({ saturationH: value })}
                                            onChangeHue={(value) => setAttributes({ hueH: value })}
                                        />
                                    </Fragment>
                                )
                            }
                            return (
                                <div>
                                    {tabout}
                                    <hr />
                                </div>
                            );
                        }}
                    </TabPanel>

                    <PremiumBorder
                        borderType={borderType}
                        top={borderTop}
                        right={borderRight}
                        bottom={borderBottom}
                        left={borderLeft}
                        borderColor={borderColor}
                        borderRadius={borderRadius}
                        onChangeType={(newType) => setAttributes({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                        setAttributes({
                            borderTop: top,
                            borderRight: right,
                            borderBottom: bottom,
                            borderLeft: left,
                        })
                        }
                        onChangeColor={(colorValue) =>
                            setAttributes({
                                borderColor:
                                    colorValue === undefined ? "transparent" : colorValue.hex,
                            })
                        }
                        onChangeRadius={(newRadius) =>
                            setAttributes({
                                borderRadius: newRadius === undefined ? 0 : newRadius,
                            })
                        }
                    />
                    <PremiumPadding
                        paddingTop={paddingT}
                        paddingRight={paddingR}
                        paddingBottom={paddingB}
                        paddingLeft={paddingL}
                        onChangePadTop={value =>
                            setAttributes({
                                paddingT: value
                            })
                        }
                        onChangePadRight={value =>
                            setAttributes({
                                paddingR: value
                            })
                        }
                        onChangePadBottom={value =>
                            setAttributes({
                                paddingB: value
                            })
                        }
                        onChangePadLeft={value =>
                            setAttributes({
                                paddingL: value
                            })
                        }
                        showUnits={true}
                        selectedUnit={paddingU}
                        onChangePadSizeUnit={newvalue =>
                            setAttributes({ paddingU: newvalue })
                        }
                    />
                </PanelBody>
            </InspectorControls>,
            <div id={`premium-lottie-${block_id}`} className={`premium-lottie-${block_id} ${mainClasses}`}
                onMouseEnter={'hover' === trigger ? handleLottieMouseEnter : () => play_animation = true}
                onMouseLeave={'hover' === trigger ? handleLottieMouseLeave : () => play_animation = true}
            >
                <div className={`premium-lottie-animation`}

                >
                    {link && '' === url && <a href={url}></a>}
                    <Lottie
                        ref={this.lottieplayer}
                        options={{
                            loop: loop,
                            path: lottieURl,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid',
                                className: "premium-lottie-inner"
                            }
                        }}
                        isStopped={play_animation}
                        speed={speed}
                        isClickToPauseDisabled={true}
                        direction={reversedir}
                        height={size}
                        width={size}
                    />
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-lottie-${block_id}{`,
                            `text-align:${align} ;`,
                            "}",
                            `#premium-lottie-${block_id}  .premium-lottie-animation .premium-lottie-inner {`,
                            `background-color:${backColor ? hexToRgba(backColor, backOpacity) : "transparent"};`,
                            `filter: brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg );`,
                            `border-style : ${borderType};`,
                            `border-width : ${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px ;`,
                            `border-radius : ${borderRadius}px;`,
                            `border-color : ${borderColor}; `,
                            `padding-top : ${paddingT}${paddingU};`,
                            `padding-right : ${paddingR}${paddingU};`,
                            `padding-bottom : ${paddingB}${paddingU};`,
                            `padding-left : ${paddingL}${paddingU};`,
                            `transform: rotate(${rotate}deg) !important;`,
                            "}",
                            `#premium-lottie-${block_id}  .premium-lottie-animation:hover .premium-lottie-inner {`,
                            `background-color:${backHColor ? hexToRgba(backHColor, backHOpacity) : "transparent"};`,
                            `filter: brightness( ${brightH}% ) contrast( ${contrastH}% ) saturate( ${saturationH}% ) blur( ${blurH}px ) hue-rotate( ${hueH}deg );`,

                            "}",
                        ].join("\n"),
                    }}
                />
            </div>
        ]
    }
}
export default edit;