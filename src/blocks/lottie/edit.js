import classnames from "classnames";
import Lottie from 'react-lottie-with-segments';
import PremiumFilters from "../../components/premium-filters";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from '../../components/premium-padding';
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs'
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumRangeControl from "../../components/premium-range-control";

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;
const { withSelect } = wp.data


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

const { ColorPalette } = wp.blockEditor;

let isLottieUpdated = null;

class edit extends Component {
    constructor() {
        super(...arguments);
        this.lottieplayer = React.createRef();
    }

    componentDidMount() {

        const { setAttributes, clientId, attributes } = this.props;
        const { block_id } = attributes;

        setAttributes({ block_id: clientId });
        setAttributes({ classMigrate: true });
        if (!attributes.lottieId) {
            setAttributes({ lottieId: "premium-lottie-" + block_id });
        }



        this.onSelectLottieJSON = this.onSelectLottieJSON.bind(this);

        this.initLottieAnimation = this.initLottieAnimation.bind(this);
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }
    getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
        if (device === 'Mobile') {
            if (undefined !== mobileSize && '' !== mobileSize) {
                return mobileSize;
            } else if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        } else if (device === 'Tablet') {
            if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        }
        return desktopSize;
    }
    componentDidUpdate() {


        clearTimeout(isLottieUpdated);
        isLottieUpdated = setTimeout(this.initLottieAnimation, 400);
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

    initLottieAnimation() {

        const { block_id, trigger, bottom, top } = this.props.attributes;

        let lottieContainer = document.getElementById(`premium-lottie-${block_id}`);

        if (lottieContainer !== null) {

            let lottieContainer = document.getElementById(`premium-lottie-${block_id}`),
                scrollElement = document.querySelector('.interface-interface-skeleton__content'),
                animate = this.lottieplayer.current;

            document.addEventListener("load", initScroll)
            scrollElement.addEventListener('scroll', initScroll)

            function initScroll() {

                let triggerEvent = trigger,
                    startEvent = bottom,
                    endEvent = top;

                if (triggerEvent === "scroll" || triggerEvent === "viewport") {

                    var scrollHeight = scrollElement.scrollHeight,
                        scrollTop = scrollElement.scrollTop,
                        pageRange = scrollElement.clientHeight,
                        precentage = (scrollTop * 100) / scrollHeight,
                        pageEnd = ((scrollTop + pageRange) * 100) / scrollHeight;

                    if (triggerEvent === "viewport") {
                        if (startEvent < precentage && pageEnd < endEvent)
                            animate.anim.play();
                        else {
                            animate.anim.pause();
                        }
                    } else {
                        let stopFrame = animate.anim.totalFrames;
                        let currframe = (precentage / 100) * stopFrame;
                        animate.anim.goToAndStop(currframe, true)

                    }
                }
            }
        }
    }

    render() {
        const { attributes, setAttributes, className } = this.props;

        const {
            lottieId,
            block_id,
            classMigrate,
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
            align,
            link,
            url,
            target,
            render,
            hideDesktop,
            hideTablet,
            hideMobile,
            lottieStyles,
            paddingT,
            paddingR,
            paddingB,
            paddingL,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
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


        const handleRemoveLottie = () => {
            setAttributes({
                lottieURl: ""
            })
        }

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
        }

        let stopAnimation = true;

        if ('none' === trigger || 'undefined' === typeof trigger) {
            stopAnimation = false;
        }
        const reversedir = (reverse) ? -1 : 1;


        const mainClasses = classnames(className, 'premium-lottie-wrap')

        const lottieSize = this.getPreviewSize(this.props.deviceType, lottieStyles[0].size, lottieStyles[0].sizeTablet, lottieStyles[0].sizeMobile);

        const renderCss = (<style>
            { `
            #premium-lottie-${block_id} .premium-lottie-animation svg{
                width:${lottieSize}${lottieStyles[0].sizeUnit} !important;
                height:${lottieSize}${lottieStyles[0].sizeUnit} !important;
            }
            `}
        </style>
        )
        return [
            renderCss,
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
                    {/* <RangeControl
                        label={__('Animation Speed')}
                        value={speed}
                        onChange={newValue => setAttributes({ speed: (newValue !== "") ? newValue : 1 })}
                        max={3}
                        min={.1}
                        step={0.1}
                        initialPosition={1}
                    /> */}
                    <PremiumRangeControl
                        label={__('Animation Speed')}
                        value={speed}
                        onChange={newValue => setAttributes({ speed: (newValue !== "") ? newValue : 1 })}
                        showUnit={false}
                        defaultValue={1}
                        max={3}
                        min={.1}
                        step={0.1}
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
                        {/* <RangeControl
                            label={__('Scroll Speed')}
                            value={scrollSpeed}
                            onChange={(newValue) => setAttributes({ scrollSpeed: (newValue !== "") ? newValue : 200 })}
                            min={1}
                            max={10}
                            step={.1}
                            initialPosition={0}
                        /> */}
                        <PremiumRangeControl
                            label={__('Scroll Speed')}
                            value={scrollSpeed}
                            onChange={(newValue) => setAttributes({ scrollSpeed: (newValue !== "") ? newValue : 200 })}
                            showUnit={false}
                            defaultValue={0}
                            min={1}
                            max={10}
                            step={.1}
                        />
                    </Fragment>}
                    {((trigger === 'viewport' || trigger === 'scroll') && !reverse) && <Fragment>
                        {/* <RangeControl
                            label={__('Bottom')}
                            value={bottom}
                            onChange={(newValue) => setAttributes({ bottom: newValue })}
                            min={0}
                            max={50}
                            initialPosition={0}
                        /> */}
                        <PremiumRangeControl
                            label={__('Bottom')}
                            value={bottom}
                            onChange={(newValue) => setAttributes({ bottom: newValue })}
                            showUnit={false}
                            defaultValue={100}
                            min={0}
                            max={50}
                        />
                        {/* <RangeControl
                            label={__('Top')}
                            value={top}
                            onChange={(newValue) => setAttributes({ top: newValue })}
                            min={50}
                            max={100}
                            initialPosition={100}
                        /> */}
                        <PremiumRangeControl
                            label={__('Top')}
                            value={top}
                            onChange={(newValue) => setAttributes({ top: newValue })}
                            showUnit={false}
                            defaultValue={100}
                            min={50}
                            max={100}
                        />
                    </Fragment>}
                    <PremiumSizeUnits

                        onChangeSizeUnit={newValue => saveLottieStyles({ sizeUnit: newValue })}
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
                                className: "premium-mobile-tab premium-responsive-tabs",

                            },
                        ]}
                    >
                        {(tab) => {
                            let tabout;
                            if ("mobile" === tab.name) {
                                tabout = (
                                    // <RangeControl
                                    //     label={__("Size")}
                                    //     value={lottieStyles[0].size}
                                    //     max={lottieStyles[0].sizeUnit === '%' ? 100 : 400}
                                    //     onChange={(value) => saveLottieStyles({ size: (value !== "") ? value : 200 })}
                                    //     initialPosition={200}
                                    // />
                                    <PremiumRangeControl
                                        label={__("Size")}
                                        value={lottieStyles[0].size}
                                        onChange={(newValue) => setAttributes({ top: newValue })}
                                        showUnit={false}
                                        defaultValue={200}
                                        min={0}
                                        max={lottieStyles[0].sizeUnit === '%' ? 100 : 400}
                                    />
                                );
                            } else if ("tablet" === tab.name) {
                                tabout = (
                                    // <RangeControl
                                    //     label={__("Size Tablet")}
                                    //     value={lottieStyles[0].sizeTablet}
                                    //     max={lottieStyles[0].sizeUnit === '%' ? 100 : 800}
                                    //     onChange={(value) => saveLottieStyles({ sizeTablet: (value !== "") ? value : 200 })}
                                    //     initialPosition={200}
                                    // />
                                    <PremiumRangeControl
                                        label={__("Size Tablet")}
                                        value={lottieStyles[0].sizeTablet}
                                        onChange={(value) => saveLottieStyles({ sizeTablet: (value !== "") ? value : 200 })}
                                        showUnit={false}
                                        defaultValue={200}
                                        min={0}
                                        max={lottieStyles[0].sizeUnit === '%' ? 100 : 800}
                                    />
                                );
                            } else {
                                tabout = (
                                    // <RangeControl
                                    //     label={__("Size Mobile")}
                                    //     value={lottieStyles[0].sizeMobile}
                                    //     max={lottieStyles[0].sizeUnit === '%' ? 100 : 800}
                                    //     onChange={(value) => saveLottieStyles({ sizeMobile: (value !== "") ? value : 200 })}
                                    //     initialPosition={200}
                                    // />
                                    <PremiumRangeControl
                                        label={__("Size Mobile")}
                                        value={lottieStyles[0].sizeMobile}
                                        onChange={(value) => saveLottieStyles({ sizeMobile: (value !== "") ? value : 200 })}
                                        showUnit={false}
                                        defaultValue={200}
                                        min={0}
                                        max={lottieStyles[0].sizeUnit === '%' ? 100 : 800}
                                    />
                                );
                            }

                            return <div>{tabout}</div>
                        }}
                    </TabPanel>

                    {/* <RangeControl
                        label={__("Rotate (Degree)")}
                        value={rotate}
                        min={-180}
                        max={180}
                        onChange={(newValue) => setAttributes({ rotate: newValue })}
                        step={1}
                        initialPosition={0}
                    /> */}
                    <PremiumRangeControl
                        label={__("Rotate (Degree)")}
                        value={rotate}
                        min={-180}
                        max={180}
                        onChange={(newValue) => setAttributes({ rotate: newValue })}
                        showUnit={false}
                        defaultValue={0}
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
                    {link &&
                        <Fragment>
                            <TextControl
                                label={__("URL")}
                                value={url}
                                onChange={(newURL) => setAttributes({ url: newURL })}
                            />
                            <ToggleControl
                                label={__("Open link in new tab")}
                                checked={target}
                                onChange={(newValue) => setAttributes({ target: newValue })}
                            />
                        </Fragment>}
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
                                        <p>{__("Background Color")}</p>
                                        <ColorPalette
                                            value={lottieStyles[0].backColor}
                                            onChange={(newValue) => saveLottieStyles({ backColor: newValue })}
                                        />
                                        {/* <RangeControl
                                            label={__(`Opacity`)}
                                            value={lottieStyles[0].backOpacity}
                                            onChange={(newvalue) => saveLottieStyles({ backOpacity: newvalue })}
                                            max={1}
                                            min={.1}
                                            step={0.01}
                                        /> */}
                                        <PremiumRangeControl
                                            label={__(`Opacity`)}
                                            value={lottieStyles[0].backOpacity}
                                            max={1}
                                            min={.1}
                                            step={0.01}
                                            onChange={(newvalue) => saveLottieStyles({ backOpacity: newvalue })}
                                            showUnit={false}
                                            defaultValue={.1}
                                        />
                                        <PremiumFilters
                                            blur={blur}
                                            bright={lottieStyles[0].bright}
                                            contrast={lottieStyles[0].contrast}
                                            saturation={lottieStyles[0].saturation}
                                            hue={lottieStyles[0].hue}
                                            onChangeBlur={(value) => saveLottieStyles({ blur: value })}
                                            onChangeBright={(value) => saveLottieStyles({ bright: value })}
                                            onChangeContrast={(value) => saveLottieStyles({ contrast: value })}
                                            onChangeSat={(value) => saveLottieStyles({ saturation: value })}
                                            onChangeHue={(value) => saveLottieStyles({ hue: value })}
                                        />
                                    </Fragment>
                                )
                            }
                            if ("hover" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <p>{__("Background Color")}</p>
                                        <ColorPalette
                                            value={lottieStyles[0].backHColor}
                                            onChange={(newValue) => saveLottieStyles({ backHColor: newValue })}
                                        />
                                        {/* <RangeControl
                                            label={__(`Opacity`)}
                                            value={lottieStyles[0].backHOpacity}
                                            onChange={(newvalue) => saveLottieStyles({ backHOpacity: newvalue })}
                                            max={1}
                                            min={.1}
                                            step={0.01}
                                        /> */}
                                        <PremiumRangeControl
                                            label={__(`Opacity`)}
                                            value={lottieStyles[0].backHOpacity}
                                            max={1}
                                            min={.1}
                                            step={0.01}
                                            onChange={(newvalue) => saveLottieStyles({ backHOpacity: newvalue })}
                                            showUnit={false}
                                            defaultValue={.1}
                                        />
                                        <PremiumFilters
                                            blur={lottieStyles[0].blurH}
                                            bright={lottieStyles[0].brightH}
                                            contrast={lottieStyles[0].contrastH}
                                            saturation={lottieStyles[0].saturationH}
                                            hue={lottieStyles[0].hueH}
                                            onChangeBlur={(value) => saveLottieStyles({ blurH: value })}
                                            onChangeBright={(value) => saveLottieStyles({ brightH: value })}
                                            onChangeContrast={(value) => saveLottieStyles({ contrastH: value })}
                                            onChangeSat={(value) => saveLottieStyles({ saturationH: value })}
                                            onChangeHue={(value) => saveLottieStyles({ hueH: value })}
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
                        borderType={lottieStyles[0].borderType}
                        top={borderTop}
                        right={borderRight}
                        bottom={borderBottom}
                        left={borderLeft}
                        borderColor={lottieStyles[0].borderColor}
                        borderRadius={lottieStyles[0].borderRadius}
                        onChangeType={(newType) => saveLottieStyles({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                borderTop: top,
                                borderRight: right,
                                borderBottom: bottom,
                                borderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            saveLottieStyles({
                                borderColor:
                                    colorValue === undefined ? "transparent" : colorValue.hex,
                            })
                        }
                        onChangeRadius={(newRadius) =>
                            saveLottieStyles({
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
                        selectedUnit={lottieStyles[0].paddingU}
                        onChangePadSizeUnit={newvalue =>
                            saveLottieStyles({ paddingU: newvalue })
                        }
                    />
                </PanelBody>
                <PremiumResponsiveTabs
                    Desktop={hideDesktop}
                    Tablet={hideTablet}
                    Mobile={hideMobile}
                    onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                    onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                    onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                />
            </InspectorControls>,
            <div id={`premium-lottie-${block_id}`} className={`premium-lottie-${block_id} ${mainClasses} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                data-lottieURl={lottieURl} data-trigger={trigger} data-start={bottom} data-end={top}
            >
                <div className={`premium-lottie-animation`}
                    onMouseEnter={'hover' === trigger ? handleLottieMouseEnter : () => stopAnimation = true}
                    onMouseLeave={'hover' === trigger ? handleLottieMouseLeave : () => stopAnimation = true}
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
                        isStopped={stopAnimation}
                        speed={speed === "" ? 1 : speed}
                        isClickToPauseDisabled={true}
                        direction={reversedir}
                    />
                    {link && url !== ' ' && <a rel="noopener noreferrer" target={target ? "_blank" : "_self"} href={"javascript:void(0)"} ></a>}
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-lottie-${block_id}{`,
                            `text-align:${align};`,
                            "}",
                            `#premium-lottie-${block_id}  .premium-lottie-animation  {`,
                            `background-color:${lottieStyles[0].backColor};`,
                            `opacity : ${lottieStyles[0].backOpacity};`,
                            `filter: brightness( ${lottieStyles[0].bright}% ) contrast( ${lottieStyles[0].contrast}% ) saturate( ${lottieStyles[0].saturation}% ) blur( ${lottieStyles[0].blur}px ) hue-rotate( ${lottieStyles[0].hue}deg );`,
                            `border-style : ${lottieStyles[0].borderType};`,
                            `border-width : ${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px ;`,
                            `border-radius : ${lottieStyles[0].borderRadius}px;`,
                            `border-color : ${lottieStyles[0].borderColor}; `,
                            `padding-top : ${paddingT}${lottieStyles[0].paddingU};`,
                            `padding-right : ${paddingR}${lottieStyles[0].paddingU};`,
                            `padding-bottom : ${paddingB}${lottieStyles[0].paddingU};`,
                            `padding-left : ${paddingL}${lottieStyles[0].paddingU};`,
                            `transform: rotate(${rotate}deg) !important;`,
                            "}",
                            `#premium-lottie-${block_id}  .premium-lottie-animation:hover {`,
                            `background-color:${lottieStyles[0].backHColor};`,
                            `opacity:${lottieStyles[0].backHOpacity};`,
                            `filter: brightness( ${lottieStyles[0].brightH}% ) contrast( ${lottieStyles[0].contrastH}% ) saturate( ${lottieStyles[0].saturationH}% ) blur( ${lottieStyles[0].blurH}px ) hue-rotate( ${lottieStyles[0].hueH}deg ) !important;`,
                            "}",
                        ].join("\n"),
                    }}
                />
            </div>
        ]
    }
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)
