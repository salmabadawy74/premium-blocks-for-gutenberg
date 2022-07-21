import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import Typed from "typed.js";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import WebfontLoader from "../../components/typography/fontLoader";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import PremiumShadow from "../../components/PremiumShadow";
import MultiButtonsControl from '../../components/responsive-radio';
import Icons from "../../components/icons";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import { generateBlockId } from '../../components/HelperFunction';
const { __ } = wp.i18n;
const { withSelect } = wp.data
const { Component, Fragment } = wp.element;
const { BlockControls, AlignmentToolbar, InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;


const SortableItem = SortableElement(
    ({ edit, removeItem, newIndex, value, changeFancyValue, items }) => (
        <div className="premium-repeater-item">
            <div className={`premium-repeater-item__container ${newIndex}`}>
                <span className="premium-repeater-item__dragHandle"></span>
                <div
                    className="premium-repeater-item__content"
                    onClick={() => edit(newIndex)}
                >
                    {value.title}{" "}
                </div>

                {items.length != 1 ? (
                    <button
                        className="premium-repeater-item__trashicon fa fa-trash"
                        onClick={() => removeItem(newIndex, value)}
                    ></button>
                ) : (
                    ""
                )}
            </div>
            <div
                className={`premium-repeater-item-controls ${value.edit ? "editable" : ""
                    }`}
            >
                <TextControl
                    label={__("Fancy String")}
                    value={value.title}
                    onChange={(newText) => changeFancyValue(newText, newIndex)}
                />
            </div>
        </div>
    )
);

const SortableList = SortableContainer(
    ({ items, removeItem, edit, changeFancyValue }) => {
        return (
            <div>
                {" "}
                {items.map((value, index) => (
                    <SortableItem
                        key={`item-${value}`}
                        index={index}
                        newIndex={index}
                        value={value}
                        removeItem={removeItem}
                        edit={edit}
                        changeFancyValue={changeFancyValue}
                        items={items}
                    />
                ))}{" "}
            </div>
        );
    }
);

class Edit extends Component {

    constructor() {
        super(...arguments);
        this.renderFancyText = this.renderFancyText.bind(this);

    }

    componentDidMount() {

        const { setAttributes, clientId } = this.props;
        // Assigning id in the attribute.
        if (!this.props.attributes.blockId) {
            setAttributes({ blockId: "premium-fancy-text-" + generateBlockId(clientId) });
        }
        setAttributes({ classMigrate: true });

    }

    componentDidUpdate() {
        const { effect } = this.props.attributes;
        if (effect == "typing" && this.typed != undefined) {
            this.typed.destroy();
        } 
        this.renderFancyText();
    }

    renderFancyText() {
        const {
            repeaterFancyText,
            loop,
            cursorShow,
            cursorMark,
            typeSpeed,
            backSpeed,
            startdelay,
            backdelay,
            effect,
        } = this.props.attributes;

        if (!repeaterFancyText) return null;

        let txt = repeaterFancyText.map((item) => {
            return item.title;
        });

        if (effect === "typing") {
            const options = {
                strings: txt,
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                backDelay: backdelay,
                startDelay: startdelay,
                loop: loop,
                showCursor: cursorShow,
                cursorChar: cursorMark,
            };
            this.typed = new Typed(this.el, options);
        }
    }

    componentWillUnmount() {
        const { effect } = this.props.attributes;
        effect === "typing" ? this.typed.destroy() : "";
    }

    render() {
        const { attributes, setAttributes, isSelected, className } = this.props;

        const {
            blockId,
            contentAlign,
            prefix,
            suffix,
            repeaterFancyText,
            effect,
            loop,
            cursorShow,
            cursorMark,
            typeSpeed,
            backdelay,
            startdelay,
            backSpeed,
            animationSpeed,
            pauseTime,
            hoverPause,
            fancyalign,
            hideDesktop,
            hideTablet,
            hideMobile,
            fancyStyles,
            PreStyles,
            prefixTypography,
            fancyTextTypography,
            fancyTextShadow
        } = attributes;

        const EFFECT = [
            {
                label: __("Typing", 'premium-blocks-for-gutenberg'),
                value: "typing",
            },
            {
                label: __("Slide", 'premium-blocks-for-gutenberg'),
                value: "slide",
            },
        ];

        const changeFancyValue = (newText, newIndex) => {
            setAttributes({
                repeaterFancyText: onRepeaterChange("title", newText, newIndex),
            });
        };

        const onSortEndSingle = ({ oldIndex, newIndex }) => {
            let arrayItem = repeaterFancyText.map((cont) => cont);
            const sortedArray = arrayMove(arrayItem, oldIndex, newIndex);
            setAttributes({ repeaterFancyText: sortedArray });
        };

        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (
                ["button", "div", "input", "textarea", "i"].indexOf(
                    e.target.tagName.toLowerCase()
                ) !== -1
            ) {
                return true; // Return true to cancel sorting
            }
        };

        const onRepeaterChange = (attr, value, index) => {
            return repeaterFancyText.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }
                return item;
            });
        };

        const edit = (index) => {
            return repeaterFancyText.map((item, i) => {
                if (index == i) {
                    setAttributes({
                        repeaterFancyText: onRepeaterChange(
                            "edit",
                            item.edit ? false : true,
                            index
                        ),
                    });
                } else {
                    setAttributes({
                        repeaterFancyText: onRepeaterChange("edit", false, i),
                    });
                }
            });
        };

        const removeItem = (index) => {
            let array = repeaterFancyText
                .map((cont, currIndex) => {
                    return cont;
                })
                .filter((f, i) => i != index);
            setAttributes({ repeaterFancyText: array, });
        };

        const addNewFancyText = () => {
            setAttributes({
                repeaterFancyText: repeaterFancyText.concat([
                    {
                        title: __("Title", 'premium-blocks-for-gutenberg'),
                        edit: true,
                    },
                ]),
            });
        };

        const saveFancyStyle = (value) => {
            const newUpdate = fancyStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ fancyStyles: newUpdate });
        }

        const savePrefixStyle = (value) => {
            const newUpdate = PreStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ PreStyles: newUpdate });
        }

        let loadBtnGoogleFonts
        if (prefixTypography?.fontFamily !== 'Default') {
            const btnconfig = {
                google: {
                    families: [prefixTypography.fontFamily],
                },
            }
            loadBtnGoogleFonts = (
                <WebfontLoader config={btnconfig}>
                </WebfontLoader>
            )
        }

        const renderCss = (<style>
            {`
        .${blockId} .premium-fancy-text-title {
            color: ${fancyStyles[0].fancyTextColor};
            background-color: ${fancyStyles[0].fancyTextBGColor};
            text-shadow: ${fancyTextShadow?.horizontal}px ${fancyTextShadow?.vertical}px ${fancyTextShadow?.blur}px ${fancyTextShadow?.color};
            font-size: ${fancyTextTypography?.fontSize?.[this.props.deviceType]}${prefixTypography?.fontSize?.unit || 'px'};
            font-style: ${fancyTextTypography?.fontStyle};
            font-family: ${fancyTextTypography?.fontFamily};
            font-weight: ${fancyTextTypography?.fontWeight};
            letter-spacing: ${fancyTextTypography?.letterSpacing};
            text-decoration: ${fancyTextTypography?.textDecoration};
            text-transform: ${fancyTextTypography?.textTransform};
            line-height: ${fancyTextTypography?.lineHeight}px;
        }
        .${blockId} .typed-cursor {
            color: ${fancyStyles[0].cursorColor};
        }
        .${blockId} .premium-fancy-text-suffix-prefix {
            color: ${PreStyles[0].textColor};
            background-color: ${PreStyles[0].textBGColor};
            font-size: ${prefixTypography?.fontSize?.[this.props.deviceType]}${prefixTypography?.fontSize?.unit || 'px'};
            font-style: ${prefixTypography?.fontStyle};
            font-family: ${prefixTypography?.fontFamily};
            font-weight: ${prefixTypography?.fontWeight};
            letter-spacing: ${prefixTypography?.letterSpacing};
            text-decoration: ${prefixTypography?.textDecoration};
            text-transform: ${prefixTypography?.textTransform};
            line-height: ${prefixTypography?.lineHeight}px;

        }
            `}
        </style>)
        const mainClasses = classnames(className, 'premium-fancy-text');

        return [
            renderCss,
            isSelected && (
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                        title={__("General Settings", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
                        >
                        <TextControl
                            label={__("Prefix Text", 'premium-blocks-for-gutenberg')}
                            value={prefix}
                            onChange={(newText) => setAttributes({ prefix: newText })}
                        />
                        <Fragment>
                            <div className="premium-fancy-text-control-content">
                                <label>
                                    <span className="premium-fancy-text-control-title">
                                        {" "}
                                        Fancy Strings{" "}
                                    </span>
                                </label>
                                <SortableList
                                    items={repeaterFancyText}
                                    onSortEnd={(oldIndex, newIndex) => onSortEndSingle(oldIndex, newIndex)}
                                    removeItem={(value) => removeItem(value)}
                                    edit={(value) => edit(value)}
                                    shouldCancelStart={shouldCancelStart}
                                    changeFancyValue={changeFancyValue}
                                    helperClass="premium-fancy-text__sortableHelper"
                                />
                                <div className="premium-repeater-btn__wrap">
                                    <button
                                        className={"premium-repeater-btn"}
                                        onClick={() => addNewFancyText()}
                                    >
                                        <i className="dashicons dashicons-plus premium-repeater__icon" />
                                        <span>{__('Add New Item')}</span>
                                    </button>
                                </div>
                            </div>
                            <br />
                        </Fragment>
                        <TextControl
                            label={__("Suffix Text", 'premium-blocks-for-gutenberg')}
                            value={suffix}
                            onChange={(newText) => setAttributes({ suffix: newText })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Advanced Settings", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Effect", 'premium-blocks-for-gutenberg')}
                            options={EFFECT}
                            value={effect}
                            onChange={(newValue) => setAttributes({ effect: newValue })}
                        />
                        {"typing" === effect ? (
                            <Fragment>
                                <TextControl
                                    label={__("Type Speed", 'premium-blocks-for-gutenberg')}
                                    type="Number"
                                    value={typeSpeed}
                                    onChange={(newValue) => setAttributes({ typeSpeed: parseInt(newValue), })}
                                    help={__('Set typing effect speed in milliseconds.', 'premium-blocks-for-gutenberg')}
                                />
                                <TextControl
                                    label={__("Back Speed", 'premium-blocks-for-gutenberg')}
                                    type="Number"
                                    value={backSpeed}
                                    onChange={(newValue) => setAttributes({ backSpeed: parseInt(newValue), })}
                                    help={__('Set a speed for backspace effect in milliseconds.', 'premium-blocks-for-gutenberg')}
                                />
                                <TextControl
                                    label={__("Start Delay", 'premium-blocks-for-gutenberg')}
                                    type="Number"
                                    value={startdelay}
                                    onChange={(newValue) => setAttributes({ startdelay: parseInt(newValue), })}
                                    help={__('If you set it on 5000 milliseconds, the first word/string will appear after 5 seconds.', 'premium-blocks-for-gutenberg')}
                                />
                                <TextControl
                                    label={__("Back Delay", 'premium-blocks-for-gutenberg')}
                                    type="Number"
                                    value={backdelay}
                                    onChange={(newValue) => setAttributes({ backdelay: parseInt(newValue), })}
                                    help={__("If you set it on 5000 milliseconds, the word/string will remain visible for 5 seconds before backspace effect.", 'premium-blocks-for-gutenberg')}
                                />
                                <ToggleControl
                                    label={__("Loop", 'premium-blocks-for-gutenberg')}
                                    checked={loop}
                                    onChange={(newCheck) => setAttributes({ loop: newCheck })}
                                />
                                <ToggleControl
                                    label={__("Show Cursor", 'premium-blocks-for-gutenberg')}
                                    checked={cursorShow}
                                    onChange={(newCheck) => setAttributes({ cursorShow: newCheck })}
                                />
                                {cursorShow && (
                                    <TextControl
                                        label={__("Cursor Mark", 'premium-blocks-for-gutenberg')}
                                        value={cursorMark}
                                        onChange={(newCheck) => setAttributes({ cursorMark: newCheck, })}
                                    />
                                )}
                            </Fragment>
                        ) : (
                            <Fragment>
                                <p className="premium-notice">
                                    {__(' Please note that Slide effect works only on frontend', 'premium-blocks-for-gutenberg')}
                                </p>
                                <TextControl
                                    label={__("Animation Speed", 'premium-blocks-for-gutenberg')}
                                    value={animationSpeed}
                                    type="Number"
                                    onChange={(newValue) => setAttributes({ animationSpeed: parseInt(newValue) })}
                                    help={__("Set a duration value in milliseconds for slide effect.", 'premium-blocks-for-gutenberg')}
                                />
                                <TextControl
                                    label={__("Pause Time", 'premium-blocks-for-gutenberg')}
                                    value={pauseTime}
                                    type="Number"
                                    onChange={(newValue) => setAttributes({ pauseTime: parseInt(newValue), })}
                                    help={__("How long should the word/string stay visible? Set a value in milliseconds.", 'premium-blocks-for-gutenberg')}
                                />
                                <ToggleControl
                                    label={__("Pause on Hover", 'premium-blocks-for-gutenberg')}
                                    checked={hoverPause}
                                    onChange={(newCheck) => setAttributes({ hoverPause: newCheck })}
                                    help={__("If you enabled this option, the slide will be paused when mouseover.", 'premium-blocks-for-gutenberg')}
                                />
                                {/* <MultiButtonsControl
                                    choices={[{ value: 'left', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'right', label: __('Right'), icon: Icons.alignRight }]}
                                    value={fancyalign}
                                    onChange={(align) => setAttributes({ fancyalign: align })}
                                    label={__("Align Content", "premium-blocks-for-gutenberg")}
                                    showIcons={true} /> */}

                            </Fragment>
                        )}
                    </PanelBody>
                    </InspectorTab>
                        <InspectorTab key={'style'}>
                    <PanelBody
                        title={__("Fancy Text Style", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
                    >

                        <AdvancedPopColorControl
                            label={__("Color", 'premium-blocks-for-gutenberg')}
                            colorValue={fancyStyles[0].fancyTextColor}
                            colorDefault={''}
                            onColorChange={newValue => saveFancyStyle({ fancyTextColor: newValue })}
                        />
                        {
                        <PremiumTypo
                        components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                        value={fancyTextTypography}
                        onChange={newValue => setAttributes({ fancyTextTypography: newValue })}
                        />
                        }
                        <AdvancedPopColorControl
                            label={__('Background Color')}
                            colorValue={fancyStyles[0].fancyTextBGColor}
                            colorDefault={''}
                            onColorChange={newvalue => saveFancyStyle({ fancyTextBGColor: newvalue })}
                        />
                        <PremiumShadow
                            label={__(
                                "Text Shadow",
                                "premium-blocks-for-gutenberg"
                            )}
                            boxShadow={false}
                            value={fancyTextShadow}
                            onChange={(value) =>
                                setAttributes({ fancyTextShadow: value })
                            }
                        />
                        {effect == "typing" && cursorShow && (
                            <AdvancedPopColorControl
                                label={__("Cursor Color", 'premium-blocks-for-gutenberg')}
                                colorValue={fancyStyles[0].cursorColor}
                                colorDefault={''}
                                onColorChange={newValue => saveFancyStyle({ cursorColor: newValue, })}
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Prefix & Suffix Style", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >

                        <AdvancedPopColorControl
                            label={__("Color", 'premium-blocks-for-gutenberg')}
                            colorValue={PreStyles[0].textColor}
                            colorDefault={''}
                            onColorChange={newValue => savePrefixStyle({ textColor: newValue, })}
                        />
                        {<PremiumTypo
                            components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                            value={prefixTypography}
                            onChange={newValue => setAttributes({ prefixTypography: newValue })}
                        />}
                        <AdvancedPopColorControl
                            label={__(`Background Color`)}
                            colorValue={PreStyles[0].textBGColor}
                            colorDefault={``}
                            onColorChange={newvalue => savePrefixStyle({ textBGColor: newvalue })}
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
                </InspectorControls >
            ),

            <div className={`${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            >
                {effect === "typing" ? (
                    <div
                        id={`${blockId}`}
                        className={`premium-fancy-text`}
                        data-effect={`${effect}`}
                        data-strings={`${repeaterFancyText.map(
                            (item, index) => {
                                return item.title;
                            }
                        )}`}
                        data-typespeed={`${typeSpeed}`}
                        data-backspeed={`${backSpeed}`}
                        data-startdelay={`${startdelay}`}
                        data-backdelay={`${backdelay}`}
                        data-loop={`${loop}`}
                        data-cursorshow={`${cursorShow}`}
                        data-cursormark={`${cursorMark}`}
                    >
                        <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-prefix-text`}>
                            {prefix}{" "}
                        </span>
                        <span
                            className={`premium-fancy-text-title premium-fancy-text-title-type`}
                            ref={(el) => {
                                this.el = el;
                            }}
                        >
                            {" "}
                        </span>
                        <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-suffix-text`}>
                            {" "}
                            {suffix}
                        </span>
                    </div>
                ) : (
                    <div
                        id={`${blockId}`}
                        className={`premium-fancy-text premium-fancy-slide`}
                        data-effect={`${effect}`}
                        data-strings={`${repeaterFancyText.map(
                            (item, index) => {
                                return item.title;
                            }
                        )}`}
                        data-animationspeed={`${animationSpeed}`}
                        data-pausetime={`${pauseTime}`}
                        data-hoverpause={`${hoverPause}`}
                    >
                        <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-prefix-text`}>
                            {prefix}{" "}
                        </span>
                        <div
                            className={`premium-fancy-text-title premium-fancy-text-title-slide`}
                        >
                            <ul
                                className={`premium-fancy-text-title-slide-list`}
                            >
                                {repeaterFancyText.map((item, index) => {
                                    return <li>{item.title}</li>;
                                })}
                            </ul>
                        </div>
                        <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-suffix-text`}>
                            {" "}
                            {suffix}
                        </span>
                    </div>
                )}
                {loadBtnGoogleFonts}
            </div>,
        ];
    }
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)