import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumFilters from "../../components/premium-filters";
import onChangeVideoURL from "./index";
import PremiumMediaUpload from "../../components/premium-media-upload";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import SpacingControl from '../../components/premium-responsive-spacing'
import WebfontLoader from "../../components/typography/fontLoader"
import PremiumShadow from "../../components/PremiumShadow";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import InsideTabs from '../../components/InsideTabs'
import InsideTab from '../../components/InsideTab';
import { borderCss, padddingCss, typographyCss, generateBlockId } from '../../components/HelperFunction'

const { withSelect } = wp.data

const {
    PanelBody,
    SelectControl,
    TextareaControl,
    ToggleControl,
    Placeholder,
    Button
} = wp.components;

const { Component, Fragment } = wp.element;

const { InspectorControls } = wp.blockEditor;

const { __ } = wp.i18n;

let isBoxUpdated = null;

class edit extends Component {
    constructor() {
        super(...arguments);
        this.initVideoBox = this.initVideoBox.bind(this);
        this.videoboxRef = React.createRef()
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        setAttributes({ blockId: "premium-video-box-" + generateBlockId(this.props.clientId) });
        if (!attributes.videoBoxId) {
            setAttributes({ videoBoxId: "premium-video-box-" + clientId });
        }
        this.props.setAttributes({ classMigrate: true });
        this.initVideoBox();
    }

    componentDidUpdate() {
        clearTimeout(isBoxUpdated);
        console.log('update')
        isBoxUpdated = setTimeout(this.initVideoBox, 500);
    }

    initVideoBox() {
        const { videoBoxId, videoURL } = this.props.attributes;
        if (!videoBoxId && !videoURL) return null;
        let videoBox = this.videoboxRef.current,
            video, src;
        if (videoBox) {
            videoBox.addEventListener("click", () => {
                // console.log('videoBox', videoBox)
                videoBox.classList.add("video-overlay-false");
                let type = videoBox.getAttribute("data-type");
                if ("self" !== type) {
                    video = videoBox.getElementsByTagName("iframe")[0];
                    src = video.getAttribute("src");
                } else {
                    // console.log('video', videoBox.getElementsByTagName("video"))
                    video = videoBox.getElementsByTagName("video")[0];
                }
                // console.log(videoBox.getElementsByClassName("premium-video-box__overlay"))
                setTimeout(() => {
                    if ("self" !== type) {
                        video.setAttribute("src", src.replace("autoplay=0", "autoplay=1"));
                    } else {
                        videoBox
                            .getElementsByClassName("premium-video-box__overlay")[0]
                            .remove();
                        video.play();
                    }
                }, 300);
            });
        }

    }

    render() {
        const { isSelected, setAttributes, className } = this.props;

        const {
            blockId,
            videoBoxId,
            videoType,
            videoURL,
            videoID,
            autoPlay,
            loop,
            controls,
            relatedVideos,
            mute,
            overlay,
            videoDesc,
            playIcon,
            playLeft,
            hideDesktop,
            hideTablet,
            hideMobile,
            ratioValue,
            overlayStyles,
            playStyles,
            descStyles,
            videoDescTypography,
            playBorder,
            boxBorder,
            playPadding,
            descPadding,
            descShadow,
            boxShadow
        } = this.props.attributes;

        const TYPE = [
            {
                value: "youtube",
                label: __("Youtube", 'premium-blocks-for-gutenberg')
            },
            {
                value: "vimeo",
                label: __("Vimeo", 'premium-blocks-for-gutenberg')
            },
            {
                value: "daily",
                label: __("Daily Motion", 'premium-blocks-for-gutenberg')
            },
            {
                value: "self",
                label: __("Self Hosted", 'premium-blocks-for-gutenberg')
            }
        ];

        const loopVideo = () => {
            if (videoURL && "youtube" === videoType) {
                if (videoURL.startsWith("http")) {
                    return loop
                        ? `1&playlist=${videoURL.replace(
                            "https://www.youtube.com/embed/",
                            ""
                        )}`
                        : "0";
                } else {
                    return loop ? `1&playlist=${videoURL}` : "0";
                }
            } else {
                return loop ? "1" : "0";
            }
        };

        const mainClasses = classnames(className, "premium-video-box");

        const changeVideoType = (newvalue) => {
            if (newvalue === "self") {
                setAttributes({ videoURL: "" })
            }
            setAttributes({ videoType: newvalue })
        }

        const saveOverlayStyles = (value) => {
            const newUpdate = overlayStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ overlayStyles: newUpdate });
        };

        const savePlayStyles = (value) => {
            const newUpdate = playStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ playStyles: newUpdate });
        };

        const saveDescritionStyle = (value) => {
            const newUpdate = descStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ descStyles: newUpdate });
        };

        let loadDescriptionGoogleFonts;
        // if (descStyles[0].videoDescFamily !== "Default") {
        //     const descriptionConfig = {
        //         google: {
        //             families: [descStyles[0].videoDescFamily],
        //         },
        //     }
        //     loadDescriptionGoogleFonts = (
        //         <WebfontLoader config={descriptionConfig}>
        //         </WebfontLoader>
        //     )
        // }

        return [
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("Video", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <SelectControl
                                    label={__("Video Type", 'premium-blocks-for-gutenberg')}
                                    options={TYPE}
                                    value={videoType}
                                    onChange={changeVideoType}
                                />
                                {videoURL && <button className="lottie-remove" onClick={(e) => {
                                    e.preventDefault();
                                    setAttributes({ videoURL: '' })
                                }}>{__('Remove Video')}</button>}
                                {"self" === videoType && (
                                    <PremiumMediaUpload
                                        type="video"
                                        imageID={videoID}
                                        imageURL={videoURL}
                                        onSelectMedia={(media) => {
                                            setAttributes({
                                                videoURL: media.url,
                                                videoID: media.id
                                            })
                                        }}
                                        onRemoveImage={() => {
                                            setAttributes({
                                                videoURL: "",
                                                videoID: ""
                                            })
                                        }}
                                    />
                                )}
                                <ToggleControl
                                    label={__("Autoplay", 'premium-blocks-for-gutenberg')}
                                    checked={autoPlay}
                                    onChange={newCheck => setAttributes({ autoPlay: newCheck })}
                                    help={__("This option effect works when Overlay Image option is disabled", 'premium-blocks-for-gutenberg')}
                                />
                                {"daily" !== videoType && (
                                    <ToggleControl
                                        label={__("Loop", 'premium-blocks-for-gutenberg')}
                                        checked={loop}
                                        onChange={newCheck => setAttributes({ loop: newCheck })}
                                    />
                                )}
                                <ToggleControl
                                    label={__("Mute", 'premium-blocks-for-gutenberg')}
                                    checked={mute}
                                    onChange={newCheck => setAttributes({ mute: newCheck })}
                                />
                                {"vimeo" !== videoType && (
                                    <ToggleControl
                                        label={__("Player Controls", 'premium-blocks-for-gutenberg')}
                                        checked={controls}
                                        onChange={newCheck => setAttributes({ controls: newCheck })}
                                    />
                                )}
                                {"youtube" === videoType && (
                                    <ToggleControl
                                        label={__("Show Related Videos", 'premium-blocks-for-gutenberg')}
                                        checked={relatedVideos}
                                        onChange={newCheck => setAttributes({ relatedVideos: newCheck })}
                                    />
                                )}
                                <ToggleControl
                                    label={__("Overlay Image", 'premium-blocks-for-gutenberg')}
                                    checked={overlay}
                                    onChange={newCheck => setAttributes({ overlay: newCheck })}
                                />
                                <SelectControl
                                    label={__('Aspect Ratio', 'premium-blocks-for-gutenberg')}
                                    value={ratioValue}
                                    options={
                                        [
                                            { label: '1:1', value: '11' },
                                            { label: '16:9', value: '169' },
                                            { label: '4:3', value: '43' },
                                            { label: '3:2', value: '32' },
                                            { label: '21:9', value: '219' },
                                            { label: '9:16', value: '916' }
                                        ]
                                    }
                                    onChange={(newValue) => setAttributes({ ratioValue: newValue })}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Video Box", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <PremiumShadow
                                    value={boxShadow}
                                    onChange={(value) => setAttributes({ boxShadow: value })}
                                />
                                <PremiumBorder
                                    label={__('Border', 'premium-blocks-for-gutenberg')}
                                    value={boxBorder}
                                    onChange={(value) => setAttributes({ boxBorder: value })}
                                />
                            </PanelBody>
                            {overlay && (
                                <PanelBody
                                    title={__("Overlay", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={overlayStyles[0].overlayImgID}
                                        imageURL={overlayStyles[0].overlayImgURL}
                                        onSelectMedia={media => {
                                            saveOverlayStyles({
                                                overlayImgID: media.id,
                                                overlayImgURL: media.url
                                            });
                                        }}
                                        onRemoveImage={() =>
                                            saveOverlayStyles({
                                                overlayImgID: "",
                                                overlayImgURL: ""
                                            })
                                        }
                                    />
                                    <PremiumFilters
                                        blur={blur}
                                        bright={overlayStyles[0].bright}
                                        contrast={overlayStyles[0].contrast}
                                        saturation={overlayStyles[0].saturation}
                                        hue={overlayStyles[0].hue}
                                        onChangeBlur={value => saveOverlayStyles({ blur: value === undefined ? 0 : value })}
                                        onChangeBright={value => saveOverlayStyles({ bright: value === undefined ? 100 : value })}
                                        onChangeContrast={value => saveOverlayStyles({ contrast: value === undefined ? 100 : value })}
                                        onChangeSat={value => saveOverlayStyles({ saturation: value === undefined ? 100 : value })}
                                        onChangeHue={value => saveOverlayStyles({ hue: value === undefined ? 100 : value })}
                                    />
                                </PanelBody>
                            )}
                            {overlay && (
                                <Fragment>
                                    <PanelBody
                                        title={__("Play Icon", 'premium-blocks-for-gutenberg')}
                                        className="premium-panel-body"
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__("Enable Play Icon", 'premium-blocks-for-gutenberg')}
                                            checked={playIcon}
                                            onChange={newCheck => setAttributes({ playIcon: newCheck })}
                                        />
                                        {playIcon && (
                                            <Fragment>
                                                <ResponsiveSingleRangeControl
                                                    label={__("Size (PX)", 'premium-blocks-for-gutenberg')}
                                                    value={playStyles[0].playSize}
                                                    onChange={newValue => savePlayStyles({ playSize: newValue === undefined ? 20 : newValue })}
                                                    showUnit={false}
                                                    defaultValue={0}
                                                />
                                                <ResponsiveSingleRangeControl
                                                    label={__("Vertical Offset (%)", 'premium-blocks-for-gutenberg')}
                                                    value={playStyles[0].playTop}
                                                    onChange={newValue => savePlayStyles({ playTop: newValue === undefined ? 50 : newValue })}
                                                    showUnit={false}
                                                    defaultValue={0}
                                                />
                                                <InsideTabs>
                                                    <InsideTab tabTitle={__('Normal')}>
                                                        <Fragment>
                                                            <AdvancedPopColorControl
                                                                label={__("Icon Color", '')}
                                                                colorValue={playStyles[0].playColor}
                                                                colorDefault={''}
                                                                onColorChange={newValue => savePlayStyles({ playColor: newValue, })}
                                                            />
                                                            <AdvancedPopColorControl
                                                                label={__(`Background Color`)}
                                                                colorValue={playStyles[0].playBack}
                                                                onColorChange={newvalue => { savePlayStyles({ playBack: newvalue }) }}
                                                                colorDefault={``}
                                                            />
                                                            {videoDesc && (
                                                                <Fragment>
                                                                    <AdvancedPopColorControl
                                                                        label={__("Description Color", '')}
                                                                        colorValue={descStyles[0].videoDescColor}
                                                                        colorDefault={''}
                                                                        onColorChange={newValue => setAttributes({ videoDescColor: newValue, })}
                                                                    />
                                                                    <AdvancedPopColorControl
                                                                        label={__(`Background Color`)}
                                                                        colorValue={descStyles[0].videoDescBack}
                                                                        onColorChange={newvalue => { saveDescritionStyle({ videoDescBack: newvalue, }) }}
                                                                        colorDefault={``}
                                                                    />
                                                                </Fragment>
                                                            )}
                                                        </Fragment>
                                                    </InsideTab>
                                                    <InsideTab tabTitle={__('Hover')}>
                                                        <Fragment>
                                                            <AdvancedPopColorControl
                                                                label={__("Icon Hover Color", 'premium-blocks-for-gutenberg')}
                                                                colorValue={playStyles[0].playHoverColor}
                                                                colorDefault={''}
                                                                onColorChange={newValue => savePlayStyles({ playHoverColor: newValue, })}
                                                            />
                                                            <AdvancedPopColorControl
                                                                label={__("Icon Hover Background Color", 'premium-blocks-for-gutenberg')}
                                                                colorValue={playStyles[0].playHoverBackColor}
                                                                colorDefault={''}
                                                                onColorChange={newValue => savePlayStyles({ playHoverBackColor: newValue, })}
                                                            />
                                                        </Fragment>
                                                    </InsideTab>
                                                </InsideTabs>
                                                <PremiumBorder
                                                    label={__('Border', 'premium-blocks-for-gutenberg')}
                                                    value={playBorder}
                                                    onChange={(value) => setAttributes({ playBorder: value })}
                                                />
                                                <hr />
                                                <SpacingControl
                                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                                    value={playPadding}
                                                    onChange={(value) => setAttributes({ playPadding: value })}
                                                    showUnits={true}
                                                    responsive={true}
                                                />
                                            </Fragment>
                                        )}
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Video Description", 'premium-blocks-for-gutenberg')}
                                        className="premium-panel-body"
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__("Enable Video Description", 'premium-blocks-for-gutenberg')}
                                            checked={videoDesc}
                                            onChange={newCheck => setAttributes({ videoDesc: newCheck })}
                                        />
                                        {videoDesc && (
                                            <Fragment>
                                                <TextareaControl
                                                    label={__("Description Text", 'premium-blocks-for-gutenberg')}
                                                    value={descStyles[0].videoDescText}
                                                    onChange={newText => saveDescritionStyle({ videoDescText: newText })}
                                                />
                                                <PremiumTypo
                                                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                                    value={videoDescTypography}
                                                    onChange={newValue => setAttributes({ videoDescTypography: newValue })}
                                                />
                                                <ResponsiveSingleRangeControl
                                                    label={__("Vertical Offset (%)", 'premium-blocks-for-gutenberg')}
                                                    value={descStyles[0].descTop}
                                                    onChange={newValue => saveDescritionStyle({ descTop: newValue === undefined ? 50 : newValue })}
                                                    showUnit={false}
                                                    defaultValue={0}
                                                />
                                                <ResponsiveSingleRangeControl
                                                    label={__("Border Radius (px)", 'premium-blocks-for-gutenberg')}
                                                    value={descStyles[0].videoDescBorderRadius}
                                                    onChange={newValue => saveDescritionStyle({ videoDescBorderRadius: newValue === undefined ? 0 : newValue })}
                                                    showUnit={false}
                                                    defaultValue={0}
                                                />
                                                <PremiumShadow
                                                    label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                                    value={descShadow}
                                                    onChange={(value) => setAttributes({ descShadow: value })}
                                                />
                                                <SpacingControl
                                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                                    value={descPadding}
                                                    onChange={(value) => setAttributes({ descPadding: value })}
                                                    showUnits={true}
                                                    responsive={true}
                                                />
                                                {/* <ResponsiveSingleRangeControl
                                                    label={__("Padding (PX)", 'premium-blocks-for-gutenberg')}
                                                    value={descStyles[0].videoDescPadding}
                                                    onChange={newValue => saveDescritionStyle({ videoDescPadding: newValue === undefined ? 20 : newValue })}
                                                    showUnit={false}
                                                    defaultValue={0}
                                                /> */}
                                            </Fragment>
                                        )}
                                    </PanelBody>
                                </Fragment>
                            )}
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                                onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                                onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                            />
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
            ),
            <Fragment>
                {
                    !videoURL && "self" !== videoType && (
                        <Placeholder
                            label={__('Video Box ', 'premium-blocks-for-gutenberg')}
                            instructions={__(
                                "Enter video ID, for example: z1hQgVpfTKU or Embed URL"
                            )}
                            className={className}
                        >
                            <form onSubmit={() => setAttributes({ videoURL: this.state.url })}>
                                <input
                                    type="url"
                                    value={this.state.url}
                                    className="components-placeholder__input"
                                    aria-label={__('Video Box', 'premium-blocks-for-gutenberg')}
                                    placeholder={__('Enter URL to embed here…', 'premium-blocks-for-gutenberg')}
                                    onChange={e => this.setState({ url: e.target.value })}
                                />
                                <Button
                                    isPrimary
                                    disabled={!this.state.url}
                                    type="submit"
                                >
                                    {__('Embed', 'premium-blocks-for-gutenberg')}
                                </Button>
                            </form>
                        </Placeholder>
                    )

                }
                {
                    !videoURL && "self" === videoType && (
                        <p>{__('Please Click Insert to Select Video ', "premium-blocks-for-gutenberg")}</p>
                    )
                }
                {videoURL && (
                    <div
                        ref={this.videoboxRef}
                        id={videoBoxId}
                        className={`${mainClasses} video-overlay-${overlay} premium-video-box-${blockId} ${hideDesktop} ${hideTablet} ${hideMobile} premium-aspect-ratio-${ratioValue}`}
                        data-type={videoType}
                        style={{
                            ...borderCss(boxBorder, this.props.deviceType),
                            boxShadow: `${boxShadow.horizontal || 0}px ${boxShadow.vertical ||
                                0}px ${boxShadow.blur || 0}px ${boxShadow.color} ${boxShadow.position}`,
                        }}
                    >
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `.${blockId} .premium-video-box__play:hover {`,
                                    `color: ${playStyles[0].playHoverColor} !important;`,
                                    `background-color: ${playStyles[0].playHoverBackColor} !important;`,
                                    "}"
                                ].join("\n")
                            }}
                        />
                        <div className={`premium-video-box__container`}>
                            <div>
                                <div className={`premium-video-box-inner-wrap`}>
                                    <div className={`premium-video-box-video-container`}>
                                        {"self" !== videoType && (
                                            <iframe
                                                src={`${onChangeVideoURL(videoType, videoURL)}?autoplay=${overlay ? 0 : autoPlay
                                                    }&loop=${loopVideo()}&mute${"vimeo" == videoType ? "d" : ""
                                                    }=${mute}&rel=${relatedVideos ? "1" : "0"}&controls=${controls ? "1" : "0"
                                                    }`}
                                                frameborder="0"
                                                gesture="media"
                                                allow="encrypted-media"
                                                allowfullscreen
                                            />
                                        )}
                                        {"self" === videoType && (
                                            <video
                                                src={videoURL}
                                                loop={loop ? true : false}
                                                muted={mute ? true : false}
                                                autoplay={overlay ? false : autoPlay}
                                                controls={controls ? true : false}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {overlay && overlayStyles[0].overlayImgURL && (
                            <div
                                className={`premium-video-box__overlay`}
                                style={{
                                    backgroundImage: `url('${overlayStyles[0].overlayImgURL}')`,
                                    filter: `brightness( ${overlayStyles[0].bright}% ) contrast( ${overlayStyles[0].contrast}% ) saturate( ${overlayStyles[0].saturation}% ) blur( ${overlayStyles[0].blur}px ) hue-rotate( ${overlayStyles[0].hue}deg )`
                                }}
                            />
                        )}
                        {overlay && playIcon && (
                            <div
                                className={`premium-video-box__play`}
                                style={{
                                    ...borderCss(playBorder, this.props.deviceType),
                                    ...padddingCss(playPadding, this.props.deviceType),
                                    top: playStyles[0].playTop + "%",
                                    left: playLeft + "%",
                                    color: playStyles[0].playColor,
                                    backgroundColor: playStyles[0].playBack,
                                }}
                            >
                                <i
                                    className={`premium-video-box__play_icon dashicons dashicons-controls-play`}
                                    style={{
                                        fontSize: playStyles[0].playSize + "px"
                                    }}
                                />
                            </div>
                        )}
                        {overlay && videoDesc && (
                            <div
                                className={`premium-video-box__desc`}
                                style={{
                                    ...padddingCss(descPadding, this.props.deviceType),
                                    color: descStyles[0].videoDescColor,
                                    backgroundColor: descStyles[0].videoDescBack,
                                    borderRadius: descStyles[0].videoDescBorderRadius,
                                    top: descStyles[0].descTop + "%",
                                    left: descStyles[0].descLeft + "%"
                                }}
                            >
                                <p
                                    className={`premium-video-box__desc_text`}
                                    style={{
                                        ...typographyCss(videoDescTypography, this.props.deviceType),
                                        textShadow: `${descShadow.horizontal}px ${descShadow.vertical}px ${descShadow.blur}px ${descShadow.color}`
                                    }}
                                >
                                    <span>{descStyles[0].videoDescText}</span>
                                </p>
                            </div>
                        )}
                    </div>
                )}
                {loadDescriptionGoogleFonts}
            </Fragment>
        ];

    }
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)