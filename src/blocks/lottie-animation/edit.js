import classnames from "classnames";

import Lottie from 'react-lottie';
import PremiumFilters from "../../components/premium-filters";
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from '../../components/premium-padding';

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;


const {
    InspectorControls,
    MediaUpload,
    ColorPalette,
    MediaPlaceholder
} = wp.blockEditor

const {
    PanelBody,
    RangeControl,
    Button,
    TextControl,
    ToggleControl,
    TabPanel,
    Dashicon,
    SelectControl,
    IconButton,
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
            size,
            sizeUnit,
            rotate,
            align,
            link,
            url,
            backColor,
            backOpacity,
            blur,
            hue,
            contrast,
            saturation,
            bright,
            borderType,
            borderWidth,
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

        if ('none' === trigger || 'scroll' === trigger || 'undefined' === typeof trigger) {
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
                            { value: "click", label: __("On Click") },
                            { value: "scroll", label: __("Scroll") },
                        ]}
                        value={trigger}
                        onChange={newValue => setAttributes({ trigger: newValue })}
                    />
                    <PremiumSizeUnits
                        activeUnit={sizeUnit}
                        units={["px", "em"]}
                        onChangeSizeUnit={(value) => setAttributes({ sizeUnit: value })}
                    />
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
                </PanelBody>

                <PanelBody
                    title={__("Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <Fragment>
                        <p>Background Color </p>
                        <ColorPalette
                            value={backColor}
                            onChange={(newValue) => setAttributes({ backColor: newValue })}
                        />
                    </Fragment>
                    <RangeControl
                        label={__('Opacity')}
                        value={backOpacity}
                        min={.1}
                        max={1}
                        step={.01}
                        onChange={(newValue) => setAttributes({ backOpacity: newValue })}
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
                    <hr />
                    <PremiumBorder
                        borderType={borderType}
                        borderWidth={borderWidth}
                        borderColor={borderColor}
                        borderRadius={borderRadius}
                        onChangeType={(newType) => setAttributes({ borderType: newType })}
                        onChangeWidth={(newWidth) =>
                            setAttributes({
                                borderWidth: newWidth === undefined ? 0 : newWidth,
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
                onClick={'click' === trigger ? handleLottieMouseEnter : () => play_animation = true}
                style={{ backgroundColor: backColor, opacity: backOpacity, textAlign: align }}
            >
                <div className={`premium-lottie-animation`} data-url={lottieURl} data-loop={loop} data-speed={speed} data-reverse={reverse}
                    data-trigger={trigger}

                    style={{
                        borderStyle: borderType, borderWidth: borderWidth + 'px', borderRadius: borderRadius + 'px', borderColor: borderColor,
                        padding: paddingT + paddingR + paddingB + paddingL
                    }}
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
            </div>
        ]
    }
}
export default edit;