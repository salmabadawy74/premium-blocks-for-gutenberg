import classnames from "classnames";
import Lottie from 'react-lottie-with-segments';
import PremiumFilters from "../../components/premium-filters";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from '../../components/premium-padding';
import PremiumBackground from '../../components/premium-background';
import hexToRgba from "hex-to-rgba";
import styling from './styling';
import PremiumSizeUnits from "../../components/premium-size-units";

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
    Button,
    TabPanel,
    Dashicon,
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


    componentDidUpdate() {
        var elementstyle = document.getElementById("lottie-style-" + this.props.clientId.substr(0, 6))

        if (null !== elementstyle && undefined !== elementstyle) {
            elementstyle.innerHTML = styling(this.props)
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
            scrollSpeed,
            sizeUnit,
            size,
            sizeTablet,
            sizeMobile,
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
            paddingU
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

            this.lottieplayer.current.anim.pause();
        };

        const handleLottieSegments = (x, y) => {
            let stopFrame = this.lottieplayer.current.anim.totalFrames;
            let currframe = (y / 100) * stopFrame;
            this.lottieplayer.current.anim.goToAndStop(currframe, true)
        }

        if (trigger === 'scroll' || trigger === 'viewport') {

            document.querySelector('.interface-interface-skeleton__content').addEventListener('scroll', function () {
                var animateSettings = {
                    animate: {
                        speed: trigger === 'viewport' ? "viewport" : scrollSpeed,
                        range: {
                            start: bottom,
                            end: top
                        }
                    },
                    effects: ['animate']
                };
                var lottieContainer = document.querySelector(`.premium-lottie-animation`);


                let animateInstance = new premiumEffects(lottieContainer, animateSettings, this.lottieplayer);

                animateInstance.initScroll();

            })
        }

        window.premiumEffects = function (element, settings) {
            var self = this,
                $el = element,
                elementSettings = settings;
            self.elementRules = {};



            self.initScroll = function () {

                self.initScrollEffects();

            };
            self.initScrollEffects = function () {

                if (elementSettings.effects.includes('animate')) {
                    self.animate();
                }

            };

            self.animate = function () {
                var scrollHeight = document.querySelector('.interface-interface-skeleton__content').scrollHeight;
                var scrollTop = document.querySelector('.interface-interface-skeleton__content').scrollTop;
                var pageRange = document.querySelector('.interface-interface-skeleton__content').clientHeight;
                var precentage = (scrollTop * 100) / scrollHeight;
                var pageEnd = ((scrollTop + pageRange) * 100) / scrollHeight;


                if (trigger === "viewport") {
                    if (bottom < precentage && pageEnd < top)
                        handleLottieMouseEnter()
                    else {
                        handleLottieMouseLeave()
                    }
                } else {
                    handleLottieSegments(pageEnd, precentage)
                }
            };

        }

        const handleRemoveLottie = () => {
            setAttributes({
                lottieURl: "",
                loop: true,
                reverse: false,
                speed: 1,
                trigger: "none",
                bottom: "0",
                top: "100",
                size: "200",
                sizeTablet: "200",
                sizeMobile: "200",
                rotate: "0",
                link: false,
                render: "svg",
                backColor: "",
                backOpacity: '1',
                backHColor: "",
                backHOpacity: "1",
                blur: '0',
                blurH: "0",
                bright: '100',
                brightH: "100",
                contrast: '100',
                contrastH: '100',
                saturation: '100',
                saturationH: '100',
                hue: '0',
                hueH: '0',
                borderType: 'none',
                borderTop: '0',
                borderRight: '0',
                borderBottom: '0',
                borderLeft: '0',
                borderRadius: '0',
                paddingT: '0',
                paddingU: 'px',
                paddingR: '0',
                paddingB: '0',
                paddingL: '0'
            })
        }

        let stop_animation = true;

        if ('none' === trigger || 'undefined' === typeof trigger) {
            stop_animation = false;
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
                    <button className="lottie-remove" onClick={handleRemoveLottie}>{__('Change Animation')}</button>

                    <ToggleControl
                        label={__(`loop`)}
                        checked={loop}
                        onChange={(value) => setAttributes({ loop: value })}
                        help={loop ? __('This option works only on the preview page') : ''}
                    />
                    <ToggleControl
                        label={__(`Reverse`)}
                        checked={reverse}
                        onChange={() => setAttributes({ reverse: !reverse })}
                    />
                    <RangeControl
                        label={__('Animation Speed')}
                        value={speed}
                        onChange={newValue => setAttributes({ speed: (newValue !== "") ? newValue : 1 })}
                        max={2.5}
                        min={1}
                        step={0.1}
                        initialPosition={1}
                    />
                    <SelectControl
                        label={__('Trigger')}
                        options={[
                            { value: 'none', label: __("None") },
                            { value: "hover", label: __("Hover") },
                            { value: "scroll", label: __("Scroll") },
                            { value: "viewport", label: __("Viewport") },
                        ]}
                        value={trigger}
                        onChange={(newValue) => setAttributes({ trigger: newValue })}

                    />
                    {('scroll' === trigger && !reverse) && <Fragment>
                        <RangeControl
                            label={__('Scroll Speed')}
                            value={scrollSpeed}
                            onChange={(newValue) => setAttributes({ scrollSpeed: (newValue !== "") ? newValue : 200 })}
                            min={1}
                            max={10}
                            step={.1}
                            initialPosition={0}
                        />
                    </Fragment>}
                    {((trigger === 'viewport' || trigger === 'scroll') && !reverse) && <Fragment>
                        <RangeControl
                            label={__('Bottom')}
                            value={bottom}
                            onChange={(newValue) => setAttributes({ bottom: newValue })}
                            min={0}
                            max={50}
                            initialPosition={0}
                        />
                        <RangeControl
                            label={__('Top')}
                            value={top}
                            onChange={(newValue) => setAttributes({ top: newValue })}
                            min={50}
                            max={100}
                            initialPosition={100}
                        />
                    </Fragment>}
                    <PremiumSizeUnits

                        onChangeSizeUnit={newValue => setAttributes({ sizeUnit: newValue })}
                    />
                    <TabPanel
                        className="premium-size-type-field-tabs"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: "mobile",
                                title: <Dashicon icon="desktop" />,
                                className: "premium-desktop-tab premium-responsive-tabs",
                            },
                            {
                                name: "tablet",
                                title: <Dashicon icon="tablet" />,
                                className: "premium-tablet-tab premium-responsive-tabs",

                            },
                            {
                                name: "desktop",
                                title: <Dashicon icon="smartphone" />,
                                className: "premium-mobile-tab premium-size-type-field-tabs",

                            },
                        ]}
                    >
                        {(tab) => {
                            let tabout;
                            if ("mobile" === tab.name) {
                                tabout = (
                                    <RangeControl
                                        label={__("Size ")}
                                        value={size}
                                        max={sizeUnit === '%' ? 100 : 800}
                                        onChange={(value) => setAttributes({ size: (value !== "") ? value : 200 })}
                                        initialPosition={200}
                                    />
                                );
                            } else if ("tablet" === tab.name) {
                                tabout = (
                                    <RangeControl
                                        label={__("Size Tablet")}
                                        value={sizeTablet}
                                        max={sizeUnit === '%' ? 100 : 800}
                                        onChange={(value) => setAttributes({ sizeTablet: (value !== "") ? value : 200 })}
                                        initialPosition={200}
                                    />
                                );
                            } else {
                                tabout = (
                                    <RangeControl
                                        label={__("Size Mobile")}
                                        value={sizeMobile}
                                        max={sizeUnit === '%' ? 100 : 800}
                                        onChange={(value) => setAttributes({ sizeMobile: (value !== "") ? value : 200 })}
                                        initialPosition={200}
                                    />
                                );
                            }

                            return <div>{tabout}</div>
                        }}
                    </TabPanel>


                    <RangeControl
                        label={__("Rotate (Degree)")}
                        value={rotate}
                        min={-180}
                        max={180}
                        onChange={(newValue) => setAttributes({ rotate: newValue })}
                        step={1}
                        initialPosition={0}
                    />
                    <h2> {__("Alignment")}</h2>
                    <Button
                        key={"left"}
                        icon="editor-alignleft"
                        label="Left"
                        onClick={() => setAttributes({ align: "left" })}
                        aria-pressed={"left" === align}
                        isPrimary={"left" === align}
                    />
                    <Button
                        key={"center"}
                        icon="editor-aligncenter"
                        label="Right"
                        onClick={() =>
                            setAttributes({ align: "center" })
                        }
                        aria-pressed={"center" === align}
                        isPrimary={"center" === align}
                    />
                    <Button
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
                        help={__(`Set render type to canvas if you're having performance issues on the page.
                    This setting will only take effect once you are on the live page, and not while you're editing.
                    `)}
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
            >
                <div className={`premium-lottie-animation`}
                    onMouseEnter={'hover' === trigger ? handleLottieMouseEnter : () => stop_animation = true}
                    onMouseLeave={'hover' === trigger ? handleLottieMouseLeave : () => stop_animation = true}
                >

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
                        isStopped={stop_animation}
                        speed={speed === "" ? 1 : speed}
                        isClickToPauseDisabled={true}
                        direction={reversedir}
                    />
                    {link && url !== ' ' && <a href={url}></a>}
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-lottie-${block_id}{`,
                            `text-align:${align};`,
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
                            `background-color:${backHColor ? hexToRgba(backHColor, backHOpacity) : backColor};`,
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