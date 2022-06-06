import { __ } from '@wordpress/i18n';
import classnames from "classnames";
import { withSelect } from '@wordpress/data'
import {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    RichText,
    useBlockProps
} from '@wordpress/block-editor';
import {
    Fragment,
    useEffect,
    useState,
    useRef
} from '@wordpress/element';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
} from '@wordpress/components';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import RadioComponent from '../../components/radio-control';
import ResponsiveRadioControl from '../../components/responsive-radio'
import PremiumTypo from "../../components/premium-typo";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumBorder from "../../components/premium-border";
import SpacingControl from '../../components/premium-responsive-spacing'
import WebfontLoader from "../../components/typography/fontLoader"
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import InsideTabs from '../../components/InsideTabs'
import InsideTab from '../../components/InsideTab';
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs'
import { gradientBackground, borderCss, padddingCss, marginCss, typographyCss } from '../../components/HelperFunction'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(props) {

    const { attributes, setAttributes, className } = props;

    const inputFirstContent = useRef(null);
    const inputSecondContent = useRef(null);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        setAttributes({ block_id: props.clientId })
        setAttributes({ classMigrate: true })
        setAttributes({ controller: false })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-content-switcher-" + props.clientId)
        document.head.appendChild($style)

        // fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyClGdkPJ1BvgLOol5JAkQY4Mv2lkLYu00k')
        //     .then(blob => blob.json())
        //     .then(data => {
        //         data.items.map(i => {
        //             // setAttributes({ family: i.family })
        //             console.log(i)
        //         })
        //     })
    }, [])

    useEffect(() => {

        if (!mounted) {
            inputFirstContent.current.classList.remove("premium-content-switcher-is-visible");
            inputFirstContent.current.classList.add("premium-content-switcher-is-hidden");

            // content.style.overflow = 'hidden';

            inputSecondContent.current.classList.remove("premium-content-switcher-is-hidden");
            inputSecondContent.current.classList.add("premium-content-switcher-is-visible");
        }
        else {
            inputSecondContent.current.classList.remove("premium-content-switcher-is-visible");
            inputSecondContent.current.classList.add("premium-content-switcher-is-hidden");

            inputFirstContent.current.classList.remove("premium-content-switcher-is-hidden");
            inputFirstContent.current.classList.add("premium-content-switcher-is-visible");

            // content.style.overflow = 'hidden';
        }
    }, [mounted])

    const initToggleBox = () => {
        const { block_id, controller } = props.attributes;
        if (!block_id) return null;
        setAttributes({ controller: !controller })
        setMounted(!mounted)
    }

    const {
        block_id,
        align,
        showLabel,
        firstLabel,
        secondLabel,
        display,
        labelTag,
        firstContent,
        secondContent,
        firstcontentalign,
        secondcontentlign,
        labelStyles,
        firstContentStyles,
        secondContentStyles,
        effect,
        slide,
        firstLabelborder,
        firstLabelPadding,
        secondLabelPadding,
        contentPadding,
        containerPadding,
        firstContentMargin,
        containerMargin,
        switchSize,
        containerRadius,
        containerRadiusUnit,
        switchRadius,
        switchRadiusUnit,
        labelSpacing,
        contentHeight,
        switchShadow,
        containerShadow,
        firstLabelShadow,
        firstLabelBoxShadow,
        firstLabelTypography,
        secondLabelTypography,
        secondLabelShadow,
        secondLabelBoxShadow,
        secondLabelborder,
        firstContentTypography,
        firstContentShadow,
        firstContentBoxShadow,
        firstContentborder,
        secondContentTypography,
        secondContentShadow,
        secondContentBoxShadow,
        secondContentborder,
        containerBoxShadow,
        containerborder,
        hideDesktop,
        hideTablet,
        hideMobile,
        controllerOneBackground,
        controllerTwoBackground,
        controller,
        switcherBackground,
        containerBackground
    } = attributes

    const DISPLAY = [
        {
            label: __("Block"),
            value: "block"
        },
        {
            label: __("Inline"),
            value: "inline"
        }
    ];

    const EFFECTS = [
        {
            label: __("Fade"),
            value: "fade"
        },
        {
            label: __("Slide"),
            value: "slide"
        }
    ]
    const SLIDE = [
        {
            label: __("Top"),
            value: "top"
        },
        {
            label: __("Left"),
            value: "left"
        },
        {
            label: __("Bottom"),
            value: "bottom"
        },
        {
            label: __("Right"),
            value: "right"
        }
    ]

    let btnGradControllerOne, btnGrad2ControllerOne, btnbgControllerOne;

    if (undefined !== controllerOneBackground.backgroundType && 'gradient' === controllerOneBackground.backgroundType) {
        btnGradControllerOne = ('transparent' === controllerOneBackground.backgroundColor || undefined === controllerOneBackground.backgroundColor ? 'rgba(255,255,255,0)' : controllerOneBackground.backgroundColor);
        btnGrad2ControllerOne = (undefined !== controllerOneBackground.gradientColorTwo && undefined !== controllerOneBackground.gradientColorTwo && '' !== controllerOneBackground.gradientColorTwo ? controllerOneBackground.gradientColorTwo : '#777');
        if ('radial' === controllerOneBackground.gradientType) {
            btnbgControllerOne = `radial-gradient(at ${controllerOneBackground.gradientPosition}, ${btnGradControllerOne} ${controllerOneBackground.gradientLocationOne}%, ${btnGrad2ControllerOne} ${controllerOneBackground.gradientLocationTwo}%)`;
        } else if ('radial' !== controllerOneBackground.gradientType) {
            btnbgControllerOne = `linear-gradient(${controllerOneBackground.gradientAngle}deg, ${btnGradControllerOne} ${controllerOneBackground.gradientLocationOne}%, ${btnGrad2ControllerOne} ${controllerOneBackground.gradientLocationTwo}%)`;
        }
    } else {
        btnbgControllerOne = controllerOneBackground.backgroundImageURL ? `url('${controllerOneBackground.backgroundImageURL}')` : ''
    }

    let btnGradControllerTwo, btnGrad2ControllerTwo, btnbgControllerTwo;

    if (undefined !== controllerTwoBackground.backgroundType && 'gradient' === controllerTwoBackground.backgroundType) {
        btnGradControllerTwo = ('transparent' === controllerTwoBackground.backgroundColor || undefined === controllerTwoBackground.backgroundColor ? 'rgba(255,255,255,0)' : controllerTwoBackground.backgroundColor);
        btnGrad2ControllerTwo = (undefined !== controllerTwoBackground.gradientColorTwo && undefined !== controllerTwoBackground.gradientColorTwo && '' !== controllerTwoBackground.gradientColorTwo ? controllerTwoBackground.gradientColorTwo : '#777');
        if ('radial' === controllerTwoBackground.gradientType) {
            btnbgControllerTwo = `radial-gradient(at ${controllerTwoBackground.gradientPosition}, ${btnGradControllerTwo} ${controllerTwoBackground.gradientLocationOne}%, ${btnGrad2ControllerTwo} ${controllerTwoBackground.gradientLocationTwo}%)`;
        } else if ('radial' !== controllerTwoBackground.gradientType) {
            btnbgControllerTwo = `linear-gradient(${controllerTwoBackground.gradientAngle}deg, ${btnGradControllerTwo} ${controllerTwoBackground.gradientLocationOne}%, ${btnGrad2ControllerTwo} ${controllerTwoBackground.gradientLocationTwo}%)`;
        }
    } else {
        btnbgControllerTwo = controllerTwoBackground.backgroundImageURL ? `url('${controllerTwoBackground.backgroundImageURL}')` : ''
    }

    const saveLabelStyles = (color, value) => {
        const newColors = { ...labelStyles };
        newColors[color] = value;
        setAttributes({ labelStyles: newColors });
    }

    const saveFirstContentStyles = (color, value) => {
        const newColors = { ...firstContentStyles };
        newColors[color] = value;
        setAttributes({ firstContentStyles: newColors });
    }

    const saveSecondContentStyles = (color, value) => {
        const newColors = { ...secondContentStyles };
        newColors[color] = value;
        setAttributes({ secondContentStyles: newColors });
    }

    let loadFirstLabelGoogleFonts;
    let loadSecondLabelGoogleFonts;
    let loadFirstContentGoogleFonts;
    let loadSecondContentGoogleFonts;

    // if (labelStyles.firstLabelFontFamily !== 'Default') {
    //     const firstLabelconfig = {
    //         google: {
    //             families: [labelStyles.firstLabelFontFamily],
    //         },
    //     }
    //     loadFirstLabelGoogleFonts = (
    //         <WebfontLoader config={firstLabelconfig}>
    //         </WebfontLoader>
    //     )
    // }

    // if (labelStyles.secondLabelFontFamily !== "Default") {
    //     const secondLabelConfig = {
    //         google: {
    //             families: [labelStyles.secondLabelFontFamily],
    //         },
    //     }
    //     loadSecondLabelGoogleFonts = (
    //         <WebfontLoader config={secondLabelConfig}>
    //         </WebfontLoader>
    //     )
    // }

    // if (firstContentTypography.fontFamily !== "Default") {
    // const firstContentConfig = {
    //     google: {
    //         families: [firstContentStyles.firstContentFontFamily],
    //     }
    // }
    // loadFirstContentGoogleFonts = (
    //     <WebfontLoader config={firstContentConfig}>
    //     </WebfontLoader>
    // )
    // }

    // if (secondContentStyles.secondContentFontFamily !== "Default") {
    //     const secondContentConfig = {
    //         google: {
    //             families: [secondContentStyles.secondContentFontFamily],
    //         }
    //     }
    //     loadSecondContentGoogleFonts = (
    //         <WebfontLoader config={secondContentConfig}>
    //         </WebfontLoader>
    //     )
    // }

    return (
        <Fragment>
            <BlockControls>
                {/* <AlignmentToolbar
                    value={align}
                    onChange={(value) => {
                        setAttributes({ align: value })
                    }}
                /> */}
            </BlockControls>
            <InspectorControls>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__("Switcher")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__("Show Labels")}
                                checked={showLabel}
                                onChange={newCheck => setAttributes({ showLabel: newCheck })}
                            />
                            {showLabel && (
                                <Fragment>
                                    <RadioComponent
                                        label={__("HTML Tag", 'premium-blocks-for-gutenberg')}
                                        choices={[
                                            { value: 'H1', label: __('H1') },
                                            { value: 'H2', label: __('H2') },
                                            { value: 'H3', label: __('H3') },
                                            { value: 'H4', label: __('H4') },
                                            { value: 'H5', label: __('H5') },
                                            { value: 'H6', label: __('H6') }
                                        ]}
                                        value={labelTag}
                                        onChange={(newValue) => setAttributes({ labelTag: newValue })}
                                    />
                                    <SelectControl
                                        label={__("Display")}
                                        options={DISPLAY}
                                        value={display}
                                        onChange={newValue => setAttributes({ display: newValue })}
                                    />
                                </Fragment>
                            )}
                            <ResponsiveRadioControl
                                label={__("Alignment", 'premium-blocks-for-gutenberg')}
                                choices={[
                                    { value: 'left', label: __('Left'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-left</title><g id="Left_Align" data-name="Left Align"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M13,10.75H3.5a.75.75,0,0,1,0-1.5H13a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M13,20.75H3.5a.75.75,0,0,1,0-1.5H13a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) },
                                    { value: 'center', label: __('Center'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-center</title><g id="Center_Align" data-name="Center Align"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M17.24,10.75H7.76a.75.75,0,1,1,0-1.5h9.48a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M17.24,20.75H7.76a.75.75,0,1,1,0-1.5h9.48a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) },
                                    { value: 'right', label: __('Right'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-right</title><g id="Right_Align" data-name="Right Align"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,10.75H12a.75.75,0,0,1,0-1.5H21.5a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,20.75H12a.75.75,0,0,1,0-1.5H21.5a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) }
                                ]}
                                value={align}
                                onChange={(newValue) => setAttributes({ align: newValue })}
                                showIcons={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Content 1")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRadioControl
                                label={__("Alignment", 'premium-blocks-for-gutenberg')}
                                choices={[
                                    { value: 'left', label: __('Left'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-left</title><g id="Left_Align" data-name="Left Align"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M13,10.75H3.5a.75.75,0,0,1,0-1.5H13a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M13,20.75H3.5a.75.75,0,0,1,0-1.5H13a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) },
                                    { value: 'center', label: __('Center'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-center</title><g id="Center_Align" data-name="Center Align"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M17.24,10.75H7.76a.75.75,0,1,1,0-1.5h9.48a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M17.24,20.75H7.76a.75.75,0,1,1,0-1.5h9.48a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) },
                                    { value: 'right', label: __('Right'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-right</title><g id="Right_Align" data-name="Right Align"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,10.75H12a.75.75,0,0,1,0-1.5H21.5a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,20.75H12a.75.75,0,0,1,0-1.5H21.5a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) },
                                    { value: 'justify', label: __('Justify'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-justify</title><g id="Justify"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,10.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,20.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) }
                                ]}
                                value={firstcontentalign}
                                onChange={(newValue) => setAttributes({ firstcontentalign: newValue })}
                                showIcons={true}
                            />
                            {/* <p>{__("Alignment")}</p>
                            <Toolbar
                                controls={ALIGNS.map(contentAlign => ({
                                    icon: "editor-align" + contentAlign,
                                    isActive: contentAlign === firstcontentalign,
                                    onClick: () => setAttributes({ firstcontentalign: contentAlign })
                                }))}
                            /> */}
                        </PanelBody>
                        <PanelBody
                            title={__("Content 2")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRadioControl
                                label={__("Alignment", 'premium-blocks-for-gutenberg')}
                                choices={[
                                    { value: 'left', label: __('Left'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-left</title><g id="Left_Align" data-name="Left Align"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M13,10.75H3.5a.75.75,0,0,1,0-1.5H13a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M13,20.75H3.5a.75.75,0,0,1,0-1.5H13a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) },
                                    { value: 'center', label: __('Center'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-center</title><g id="Center_Align" data-name="Center Align"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M17.24,10.75H7.76a.75.75,0,1,1,0-1.5h9.48a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M17.24,20.75H7.76a.75.75,0,1,1,0-1.5h9.48a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) },
                                    { value: 'right', label: __('Right'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-right</title><g id="Right_Align" data-name="Right Align"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,10.75H12a.75.75,0,0,1,0-1.5H21.5a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,20.75H12a.75.75,0,0,1,0-1.5H21.5a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) },
                                    { value: 'justify', label: __('Justify'), icon: (<svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="19.5" height="16.5" viewBox="0 0 19.5 16.5"><defs><style>{`.cls-1{fill:#333;}`}</style></defs><title>text-align-justify</title><g id="Justify"><path class="cls-1" d="M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,10.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /><path class="cls-1" d="M21.5,20.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z" transform="translate(-2.75 -4.25)" /></g></svg>) }
                                ]}
                                value={secondcontentlign}
                                onChange={(newValue) => setAttributes({ secondcontentlign: newValue })}
                                showIcons={true}
                            />
                            {/* <p>{__("Alignment")}</p>
                            <Toolbar
                                controls={ALIGNS.map(contentAlign => ({
                                    icon: "editor-align" + contentAlign,
                                    isActive: contentAlign === secondcontentlign,
                                    onClick: () => setAttributes({ secondcontentlign: contentAlign })
                                }))}
                            /> */}
                        </PanelBody>
                        <PanelBody
                            title={__("Display Options")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Animation")}
                                options={EFFECTS}
                                value={effect}
                                onChange={newEffect => setAttributes({ effect: newEffect })}
                            />
                            {effect == 'slide' &&
                                <SelectControl
                                    label={__("Slide Direction")}
                                    options={SLIDE}
                                    value={slide}
                                    onChange={newEffect => setAttributes({ slide: newEffect })}
                                />
                            }
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__("Switcher Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__('Size', 'premium-blocks-for-gutenberg')}
                                value={switchSize}
                                onChange={(value) => setAttributes({ switchSize: value })}
                                min={1}
                                max={40}
                                step={1}
                                showUnit={false}
                                defaultValue={15}
                            />
                            <h2>{__("Controller State 1 Color")}</h2>
                            <PremiumBackgroundControl
                                value={controllerOneBackground}
                                onChange={(value) => setAttributes({ controllerOneBackground: value })}
                            />
                            <hr />
                            <h2>{__("Controller State 2 Color")}</h2>
                            <PremiumBackgroundControl
                                value={controllerTwoBackground}
                                onChange={(value) => setAttributes({ controllerTwoBackground: value })}
                            />
                            <hr />
                            <h2>{__("Switcher Background")}</h2>
                            <PremiumBackgroundControl
                                value={switcherBackground}
                                onChange={(value) => setAttributes({ switcherBackground: value })}
                            />
                            <hr />
                            <PremiumShadow
                                label={__("Controller Shadow", "premium-blocks-for-gutenberg")}
                                value={containerShadow}
                                onChange={(value) => setAttributes({ containerShadow: value })}
                                boxShadow={true}
                            />
                            <PremiumShadow
                                label={__("Switcher Shadow", "premium-blocks-for-gutenberg")}
                                value={switchShadow}
                                onChange={(value) => setAttributes({ switchShadow: value })}
                                boxShadow={true}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Controller Border Radius", 'premium-blocks-for-gutenberg')}
                                value={containerRadius}
                                onChange={newSize => setAttributes({ containerRadius: newSize })}
                                min={1}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={['px', 'em', '%']}
                                defaultValue={50}
                                unit={containerRadiusUnit}
                                onChangeUnit={newSize => setAttributes({ containerRadiusUnit: newSize })}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Switcher Border Radius", 'premium-blocks-for-gutenberg')}
                                value={switchRadius}
                                onChange={newSize => setAttributes({ switchRadius: newSize })}
                                min={1}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={['px', 'em', '%']}
                                defaultValue={1.5}
                                unit={switchRadiusUnit}
                                onChangeUnit={newSize => setAttributes({ switchRadiusUnit: newSize })}
                            />
                        </PanelBody>
                        {showLabel && (<PanelBody
                            title={__("Labels Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__('Spacing', 'premium-blocks-for-gutenberg')}
                                value={labelSpacing}
                                onChange={(value) => setAttributes({ labelSpacing: value })}
                                min={1}
                                max={100}
                                step={1}
                                showUnit={false}
                                defaultValue={15}
                            />
                            <InsideTabs>
                                <InsideTab tabTitle={__('First Label')}>
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                            value={firstLabelTypography}
                                            onChange={newValue => setAttributes({ firstLabelTypography: newValue })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
                                            colorValue={labelStyles.firstLabelColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveLabelStyles(
                                                    'firstLabelColor', newValue
                                                )
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-block-for-gutenberg')}
                                            colorValue={labelStyles.firstLabelBGColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveLabelStyles(
                                                    'firstLabelBGColor', newValue
                                                )
                                            }
                                        />
                                        <PremiumShadow
                                            label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                            value={firstLabelShadow}
                                            onChange={(value) => setAttributes({ firstLabelShadow: value })}
                                        />
                                        <PremiumShadow
                                            value={firstLabelBoxShadow}
                                            onChange={(value) => setAttributes({ firstLabelBoxShadow: value })}
                                            boxShadow={true}
                                        />
                                        <hr />
                                        <PremiumBorder
                                            label={__('Border', 'premium-blocks-for-gutenberg')}
                                            value={firstLabelborder}
                                            onChange={(value) => setAttributes({ firstLabelborder: value })}
                                        />
                                        <hr />
                                        <SpacingControl
                                            label={__('Padding', 'premium-blocks-for-gutenberg')}
                                            value={firstLabelPadding}
                                            onChange={(value) => setAttributes({ firstLabelPadding: value })}
                                            showUnits={true}
                                            responsive={true}
                                        />
                                    </Fragment>
                                </InsideTab>
                                <InsideTab tabTitle={__('Second Label')}>
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                            value={secondLabelTypography}
                                            onChange={newValue => setAttributes({ secondLabelTypography: newValue })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
                                            colorValue={labelStyles.secondLabelColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveLabelStyles(
                                                    'secondLabelColor', newValue
                                                )
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-block-for-gutenberg')}
                                            colorValue={labelStyles.secondLabelBGColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveLabelStyles(
                                                    'secondLabelBGColor', newValue
                                                )
                                            }
                                        />
                                        <PremiumShadow
                                            label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                            value={secondLabelShadow}
                                            onChange={(value) => setAttributes({ secondLabelShadow: value })}
                                        />
                                        <PremiumShadow
                                            value={secondLabelBoxShadow}
                                            onChange={(value) => setAttributes({ secondLabelBoxShadow: value })}
                                            boxShadow={true}
                                        />
                                        <hr />
                                        <PremiumBorder
                                            label={__('Border', 'premium-blocks-for-gutenberg')}
                                            value={secondLabelborder}
                                            onChange={(value) => setAttributes({ secondLabelborder: value })}
                                        />
                                        <hr />
                                        <SpacingControl
                                            label={__('Padding', 'premium-blocks-for-gutenberg')}
                                            value={secondLabelPadding}
                                            onChange={(value) => setAttributes({ secondLabelPadding: value })}
                                            showUnits={true}
                                            responsive={true}
                                        />
                                    </Fragment>
                                </InsideTab>
                            </InsideTabs>
                        </PanelBody>
                        )}
                        <PanelBody
                            title={__("Content Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__('Height', 'premium-blocks-for-gutenberg')}
                                value={contentHeight}
                                onChange={(value) => setAttributes({ contentHeight: value })}
                                min={1}
                                max={1000}
                                step={1}
                                showUnit={true}
                                units={['px', 'em', 'rem']}
                                defaultValue={100}
                            />
                            <InsideTabs>
                                <InsideTab tabTitle={__('First Content')}>
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                            value={firstContentTypography}
                                            onChange={newValue => setAttributes({ firstContentTypography: newValue })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
                                            colorValue={firstContentStyles.firstContentColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveFirstContentStyles(
                                                    'firstContentColor', newValue
                                                )
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-block-for-gutenberg')}
                                            colorValue={firstContentStyles.firstContentBGColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveFirstContentStyles(
                                                    'firstContentBGColor', newValue
                                                )
                                            }
                                        />
                                        <PremiumShadow
                                            label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                            value={firstContentShadow}
                                            onChange={(value) => setAttributes({ firstContentShadow: value })}
                                        />
                                        <PremiumShadow
                                            value={firstContentBoxShadow}
                                            onChange={(value) => setAttributes({ firstContentBoxShadow: value })}
                                            boxShadow={true}
                                        />
                                        <hr />
                                        <PremiumBorder
                                            label={__('Border', 'premium-blocks-for-gutenberg')}
                                            value={firstContentborder}
                                            onChange={(value) => setAttributes({ firstContentborder: value })}
                                        />
                                    </Fragment>
                                </InsideTab>
                                <InsideTab tabTitle={__('Second Content')}>
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                            value={secondContentTypography}
                                            onChange={newValue => setAttributes({ secondContentTypography: newValue })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
                                            colorValue={secondContentStyles.secondContentColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveSecondContentStyles(
                                                    'secondContentColor', newValue
                                                )
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-block-for-gutenberg')}
                                            colorValue={secondContentStyles.secondContentBGColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveSecondContentStyles(
                                                    'secondContentBGColor', newValue
                                                )
                                            }
                                        />
                                        <PremiumShadow
                                            label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                            value={secondContentShadow}
                                            onChange={(value) => setAttributes({ secondContentShadow: value })}
                                        />
                                        <PremiumShadow
                                            value={secondContentBoxShadow}
                                            onChange={(value) => setAttributes({ secondContentBoxShadow: value })}
                                            boxShadow={true}
                                        />
                                        <hr />
                                        <PremiumBorder
                                            label={__('Border', 'premium-blocks-for-gutenberg')}
                                            value={secondContentborder}
                                            onChange={(value) => setAttributes({ secondContentborder: value })}
                                        />
                                    </Fragment>
                                </InsideTab>
                            </InsideTabs>
                            <hr />
                            <SpacingControl
                                label={__('Margin', 'premium-blocks-for-gutenberg')}
                                value={firstContentMargin}
                                onChange={(value) => setAttributes({ firstContentMargin: value })}
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__('Padding', 'premium-blocks-for-gutenberg')}
                                value={contentPadding}
                                onChange={(value) => setAttributes({ contentPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>

                        <PanelBody
                            title={__("Container Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumBackgroundControl
                                value={containerBackground}
                                onChange={(value) => setAttributes({ containerBackground: value })}
                            />
                            <hr />
                            <PremiumShadow
                                value={containerBoxShadow}
                                onChange={(value) => setAttributes({ containerBoxShadow: value })}
                                boxShadow={true}
                            />
                            <hr />
                            <PremiumBorder
                                label={__('Border', 'premium-blocks-for-gutenberg')}
                                value={containerborder}
                                onChange={(value) => setAttributes({ containerborder: value })}
                            />
                            <hr />
                            <SpacingControl
                                label={__('Margin', 'premium-blocks-for-gutenberg')}
                                value={containerMargin}
                                onChange={(value) => setAttributes({ containerMargin: value })}
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__('Padding', 'premium-blocks-for-gutenberg')}
                                value={containerPadding}
                                onChange={(value) => setAttributes({ containerPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
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

            <style>
                {`
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider:before {
                        border-radius: ${containerRadius || 50}${containerRadiusUnit} !important;
                        box-shadow: ${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position} !important;
                        background-color: ${controller ? (controllerTwoBackground.backgroundType === "solid" ? controllerTwoBackground.backgroundColor : "#6ec1e4") : (controllerOneBackground.backgroundType === "solid" ? controllerOneBackground.backgroundColor : "#6ec1e4")};
                        background-image: ${controller ? btnbgControllerTwo : btnbgControllerOne};
                        background-repeat: ${controller ? controllerTwoBackground.backgroundRepeat : controllerOneBackground.backgroundRepeat};
                        background-position: ${controller ? controllerTwoBackground.backgroundPosition : controllerOneBackground.backgroundPosition};
                        background-size: ${controller ? controllerTwoBackground.backgroundSize : controllerOneBackground.backgroundSize};
                        background-attachment: ${controller ? (controllerTwoBackground.fixed ? "fixed" : "unset") : (controllerOneBackground.fixed ? "fixed" : "unset")};
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider {
                        border-radius: ${switchRadius}${switchRadiusUnit} !important;
                         box-shadow: ${switchShadow.horizontal}px ${switchShadow.vertical}px ${switchShadow.blur}px ${switchShadow.color} ${switchShadow.position} !important;
                     }
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-first-label {
                         margin-right: ${labelSpacing[props.deviceType]}px !important;
                    }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-second-label {
                        margin-left: ${labelSpacing[props.deviceType]}px !important;
                    }
                   #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-first-label {
                         margin-bottom: ${labelSpacing[props.deviceType]}px !important;
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-second-label {
                        margin-top: ${labelSpacing[props.deviceType]}px !important;
                    }
                 `}
            </style>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-block-${props.clientId} ${hideDesktop} ${hideTablet} ${hideMobile}`
                    ),
                })}
                id={`premium-content-switcher-${block_id}`}
                style={{
                    textAlign: align[props.deviceType],
                }}
            >
                <div className={`premium-content-switcher`}
                    style={{
                        ...borderCss(containerborder, props.deviceType),
                        ...padddingCss(containerPadding, props.deviceType),
                        ...marginCss(containerMargin, props.deviceType),
                        ...gradientBackground(containerBackground),
                        textAlign: align[props.deviceType],
                        boxShadow: `${containerBoxShadow.horizontal || 0}px ${containerBoxShadow.vertical || 0}px ${containerBoxShadow.blur || 0}px ${containerBoxShadow.color} ${containerBoxShadow.position}`
                    }}>
                    <div className={`premium-content-switcher-toggle-${display}`}
                        style={{
                            textAlign: align[props.deviceType],
                            justifyContent: align[props.deviceType] == "right" ? "flex-end" : align[props.deviceType] == "left" ? 'flex-start' : align[props.deviceType],
                            alignItems: display == "inline" ? "center" : align[props.deviceType] == "right" ? "flex-end" : align[props.deviceType] == "left" ? 'flex-start' : align[props.deviceType],
                        }}>
                        {showLabel && (<div className="premium-content-switcher-first-label">
                            <RichText
                                tagName={labelTag.toLowerCase()}
                                className={`premium-content-switcher-${display}-editing`}
                                onChange={(newValue) => setAttributes({ firstLabel: newValue })}
                                value={firstLabel}
                                style={{
                                    ...typographyCss(firstLabelTypography, props.deviceType),
                                    ...borderCss(firstLabelborder, props.deviceType),
                                    ...padddingCss(firstLabelPadding, props.deviceType),
                                    margin: 0,
                                    color: labelStyles.firstLabelColor,
                                    background: labelStyles.firstLabelBGColor,
                                    textShadow: `${firstLabelShadow.horizontal || 0}px ${firstLabelShadow.vertical || 0}px ${firstLabelShadow.blur || 0}px ${firstLabelShadow.color}`,
                                    boxShadow: `${firstLabelBoxShadow.horizontal || 0}px ${firstLabelBoxShadow.vertical || 0}px ${firstLabelBoxShadow.blur || 0}px ${firstLabelBoxShadow.color} ${firstLabelBoxShadow.position}`
                                }}
                            />
                        </div>
                        )}
                        <div
                            className="premium-content-switcher-toggle-switch"
                            style={{
                                fontSize: (switchSize[props.deviceType] || 15) + "px",
                            }}
                        >
                            <label className={`premium-content-switcher-toggle-switch-label`}>
                                <input onClick={() => initToggleBox()} type="checkbox" className={`premium-content-switcher-toggle-switch-input ${props.clientId}`} />
                                <span
                                    className="premium-content-switcher-toggle-switch-slider round"
                                    style={{
                                        ...gradientBackground(switcherBackground),
                                    }}
                                ></span>
                            </label>
                        </div>
                        {showLabel && (<div className="premium-content-switcher-second-label">
                            <RichText
                                tagName={labelTag.toLowerCase()}
                                className={`premium-content-switcher-${display}-editing`}
                                onChange={(newValue) => setAttributes({ secondLabel: newValue })}
                                value={secondLabel}
                                style={{
                                    ...typographyCss(secondLabelTypography, props.deviceType),
                                    ...borderCss(secondLabelborder, props.deviceType),
                                    ...padddingCss(secondLabelPadding, props.deviceType),
                                    margin: 0,
                                    color: labelStyles.secondLabelColor,
                                    background: labelStyles.secondLabelBGColor,
                                    textShadow: `${secondLabelShadow.horizontal || 0}px ${secondLabelShadow.vertical || 0}px ${secondLabelShadow.blur || 0}px ${secondLabelShadow.color}`,
                                    boxShadow: `${secondLabelBoxShadow.horizontal || 0}px ${secondLabelBoxShadow.vertical || 0}px ${secondLabelBoxShadow.blur || 0}px ${secondLabelBoxShadow.color} ${secondLabelBoxShadow.position}`
                                }}
                            />
                        </div>
                        )}
                    </div>
                    <div
                        className={`premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`}
                        style={{
                            ...marginCss(firstContentMargin, props.deviceType),
                        }}
                    >
                        <ul className="premium-content-switcher-two-content">
                            <li ref={inputFirstContent} className={`premium-content-switcher-is-visible premium-content-switcher-first-list ${props.clientId}`}
                                style={{
                                    ...borderCss(firstContentborder, props.deviceType),
                                    ...padddingCss(contentPadding, props.deviceType),
                                    background: firstContentStyles.firstContentBGColor,
                                    minHeight: (contentHeight[props.deviceType] || 100) + contentHeight.unit,
                                    boxShadow: `${firstContentBoxShadow.horizontal || 0}px ${firstContentBoxShadow.vertical || 0}px ${firstContentBoxShadow.blur || 0}px ${firstContentBoxShadow.color} ${firstContentBoxShadow.position}`
                                }}>
                                <RichText
                                    tagName="div"
                                    className={`premium-content-switcher-first-content`}
                                    value={firstContent}
                                    onChange={value => {
                                        setAttributes({ firstContent: value })
                                    }}
                                    style={{
                                        ...typographyCss(firstContentTypography, props.deviceType),
                                        textAlign: firstcontentalign[props.deviceType],
                                        justifyContent: firstcontentalign[props.deviceType],
                                        color: firstContentStyles.firstContentColor,
                                        textShadow: `${firstContentShadow.horizontal || 0}px ${firstContentShadow.vertical || 0}px ${firstContentShadow.blur || 0}px ${firstContentShadow.color}`,
                                    }}
                                />
                            </li>
                            <li ref={inputSecondContent} className={`premium-content-switcher-is-hidden premium-content-switcher-second-list ${props.clientId}`}
                                style={{
                                    ...borderCss(secondContentborder, props.deviceType),
                                    ...padddingCss(contentPadding, props.deviceType),
                                    background: secondContentStyles.secondContentBGColor,
                                    minHeight: (contentHeight[props.deviceType] || 100) + contentHeight.unit,
                                    boxShadow: `${secondContentBoxShadow.horizontal || 0}px ${secondContentBoxShadow.vertical || 0}px ${secondContentBoxShadow.blur || 0}px ${secondContentBoxShadow.color} ${secondContentBoxShadow.position}`
                                }}>
                                <RichText
                                    tagName="div"
                                    className={`premium-content-switcher-second-content`}
                                    value={secondContent}
                                    onChange={value => {
                                        setAttributes({ secondContent: value })
                                    }}
                                    style={{
                                        ...typographyCss(secondContentTypography, props.deviceType),
                                        textAlign: secondcontentlign[props.deviceType],
                                        justifyContent: secondcontentlign[props.deviceType],
                                        color: secondContentStyles.secondContentColor,
                                        textShadow: `${secondContentShadow.horizontal || 0}px ${secondContentShadow.vertical || 0}px ${secondContentShadow.blur || 0}px ${secondContentShadow.color}`,
                                    }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                {loadFirstLabelGoogleFonts}
                {loadSecondLabelGoogleFonts}
                {loadFirstContentGoogleFonts}
                {loadSecondContentGoogleFonts}
            </div>
        </Fragment>
    )
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)