import classnames from "classnames"
import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import Typed from 'typed.js';
import {
    SortableContainer,
    SortableElement,
    arrayMove
} from 'react-sortable-hoc';

const { __ } = wp.i18n

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette
} = wp.editor

const {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
    Toolbar
} = wp.components

const SortableItem = SortableElement(({
    edit,
    removeItem,
    newIndex,
    value,
    changeFancyValue,
    items
}) => < div className="premium-repeater-item" >

        <div className={
            `premium-repeater-item__container ${newIndex}`
        } >
            < span className="premium-repeater-item__dragHandle" ></span>
            <div className="premium-repeater-item__content"
                onClick={
                    () => edit(newIndex)
                } >
                {
                    value.title
                } </div>

            {
                items.length != 1 ? < button className="premium-repeater-item__trashicon fa fa-trash"
                    onClick={
                        () => removeItem(newIndex, value)
                    } >
                </button> : ""}

        </div>
        <div className={
            `premium-repeater-item-controls ${value.edit ? "editable" : ""}`
        } >
            <TextControl
                label={__("Fancy String")}
                value={value.title}
                onChange={(newText) => changeFancyValue(newText, newIndex)}
            />
        </div >
    </div>
)

const SortableList = SortableContainer(({
    items,
    removeItem,
    edit,
    changeFancyValue,
}) => {
    return (<div > {
        (items).map((value, index) => (
            <SortableItem key={`item-${value}`}
                index={index}
                newIndex={index}
                value={value}
                removeItem={removeItem}
                edit={edit}
                changeFancyValue={
                    changeFancyValue
                }
                items={
                    items
                }
            />
        ))
    } </div>
    );
});

class edit extends Component {

    constructor() {
        super(...arguments);
        this.renderFancyText = this.renderFancyText.bind(this);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-fancy-text-" + this.props.clientId)
        document.head.appendChild($style)
        this.renderFancyText()
    }

    componentDidUpdate() {
        const { effect } = this.props.attributes;

        if (effect == 'typing' && this.typed != undefined) {
            this.typed.destroy()
        }
        this.renderFancyText()
    }

    renderFancyText() {
        const { repeaterFancyText, loop, cursorShow, cursorMark, typeSpeed, backSpeed, startdelay, backdelay, effect } = this.props.attributes;
        if (!repeaterFancyText) return null;
        let txt = repeaterFancyText.map((item) => { return item.title })

        if (effect === 'typing') {
            const options = {
                strings: txt,
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                backDelay: backdelay,
                startDelay: startdelay,
                loop: loop,
                showCursor: cursorShow,
                cursorChar: cursorMark
            };
            this.typed = new Typed(this.el, options);
        }
    }

    componentWillUnmount() {
        const { effect } = this.props.attributes;
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        effect === 'typing' ? this.typed.destroy() : ""
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            prefix,
            suffix,
            repeaterFancyText,
            effect,
            fancyTextColor,
            fancyTextfontSize,
            fancyTextfontSizeMobile,
            fancyTextfontSizeTablet,
            fancyTextfontSizeType,
            fancyTextWeight,
            fancyTextUpper,
            fancyTextStyle,
            fancyTextLetter,
            fancyTextBGColor,
            shadowColor,
            shadowBlur,
            shadowHorizontal,
            shadowVertical,
            cursorColor,
            textColor,
            TextfontSize,
            TextfontSizeMobile,
            TextfontSizeTablet,
            TextfontSizeType,
            TextWeight,
            TextLetter,
            TextUpper,
            TextStyle,
            TextBGColor,
            loop,
            cursorShow,
            cursorMark,
            typeSpeed,
            backSpeed,
            startdelay,
            backdelay,
            animationSpeed,
            pauseTime,
            hoverPause,
            fancyalign
        } = attributes


        const ALIGNS = ["left", "center", "right"];
        const EFFECT = [{
            label: __("Typing"),
            value: "typing"
        },
        {
            label: __("Slide"),
            value: "slide"
        }
        ];

        var element = document.getElementById("premium-style-fancy-text-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }
        const onResetClickfancyTextTypo = () => {
            setAttributes({
                fancyTextWeight: 600,
                fancyTextfontSizeType: "px",
                fancyTextfontSize: "40",
                fancyTextfontSizeMobile: "40",
                fancyTextfontSizeTablet: "40",
                fancyTextStyle: "normal",
                fancyTextLetter: "0",
                fancyTextUpper: false
            });
        }
        const onResetClickTextTypo = () => {
            setAttributes({
                TextWeight: 600,
                TextfontSizeType: "px",
                TextfontSize: "40",
                TextfontSizeMobile: "40",
                TextfontSizeTablet: "40",
                TextStyle: "normal",
                TextLetter: "0",
                TextUpper: false
            });
        }
        const onResetClickLabelTextShadow = () => {
            setAttributes({
                shadowColor: "",
                shadowBlur: "0",
                shadowHorizontal: "0",
                shadowVertical: "0",
            });
        }

        const changeFancyValue = (newText, newIndex) => {
            setAttributes({
                repeaterFancyText: onRepeaterChange(
                    "title",
                    newText,
                    newIndex
                )
            })
        }
        const onSortEndSingle = ({
            oldIndex,
            newIndex
        }) => {
            let arrayItem = repeaterFancyText.map((cont) => (
                cont
            ))

            const array = arrayMove(arrayItem, oldIndex, newIndex)
            setAttributes({
                repeaterFancyText:
                    array

            });
        };

        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (['button', 'div', 'input', 'textarea', 'i'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
                return true; // Return true to cancel sorting
            }
        }

        const onRepeaterChange = (attr, value, index) => {
            const items = repeaterFancyText;
            return items.map(function (item, currIndex) {
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
                        )
                    })
                }
                else {
                    setAttributes({
                        repeaterFancyText: onRepeaterChange(
                            "edit",
                            false,
                            i
                        )
                    })
                }
            })
        }

        const removeItem = (index, item) => {
            let array = repeaterFancyText.map((cont, currIndex) => {
                return cont
            }).filter((f, i) => i != index)
            setAttributes({
                repeaterFancyText: array
            });
        }


        const addNewFancyText = () => {
            setAttributes({
                repeaterFancyText: repeaterFancyText.concat([{
                    title: __("Title"),
                    edit: true
                }])
            });
        }

        const mainClasses = classnames(className, "premium-fancy-text");
        return [
            isSelected && (
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(value) => {
                            setAttributes({ align: value })
                        }}
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls>
                    <PanelBody
                        title={__("General Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextControl
                            label={
                                __("Prefix Text")
                            }
                            value={prefix}
                            onChange={newText => setAttributes({ prefix: newText })}
                        />
                        < Fragment >
                            <div className="premium-fancy-text-control-content" >
                                <label >
                                    <span className="premium-fancy-text-control-title" > Fancy Strings </span>
                                </label>
                                < SortableList
                                    items={repeaterFancyText}
                                    onSortEnd={(o, n) => onSortEndSingle(o, n)}
                                    removeItem={(value) => removeItem(value)}
                                    edit={(value) => edit(value)}

                                    shouldCancelStart={shouldCancelStart}
                                    changeFancyValue={changeFancyValue}
                                    helperClass='premium-fancy-text__sortableHelper' />
                                < div className="premium-fancy-text-btn__wrap" >
                                    <button
                                        className={"premium-fancy-text-btn"}
                                        onClick={() => addNewFancyText()}
                                    >
                                        <i className="dashicons dashicons-plus premium-fancy-text-icon" />
                                        {__("Add New Item")}
                                    </button>
                                </div>
                            </div>
                            <br />
                        </Fragment>
                        <TextControl
                            label={__("Suffix Text")}
                            value={suffix}
                            onChange={newText => setAttributes({ suffix: newText })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Advanced Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Effect")}
                            options={EFFECT}
                            value={effect}
                            onChange={newValue => setAttributes({ effect: newValue })}
                        />
                        {effect == 'typing' ?
                            <Fragment>
                                <TextControl
                                    label={__("Type Speed")}
                                    type="Number"
                                    value={typeSpeed}
                                    onChange={newValue => setAttributes({ typeSpeed: parseInt(newValue) })}
                                    help="Set typing effect speed in milliseconds."
                                />
                                <TextControl
                                    label={__("Back Speed")}
                                    type="Number"
                                    value={backSpeed}
                                    onChange={newValue => setAttributes({ backSpeed: parseInt(newValue) })}
                                    help="Set a speed for backspace effect in milliseconds."
                                />
                                <TextControl
                                    label={__("Start Delay")}
                                    type="Number"
                                    value={startdelay}
                                    onChange={newValue => setAttributes({ startdelay: parseInt(newValue) })}
                                    help="If you set it on 5000 milliseconds, the first word/string will appear after 5 seconds."
                                />
                                <TextControl
                                    label={__("Back Delay")}
                                    type="Number"
                                    value={backdelay}
                                    onChange={newValue => setAttributes({ backdelay: parseInt(newValue) })}
                                    help="If you set it on 5000 milliseconds, the word/string will remain visible for 5 seconds before backspace effect."
                                />
                                <ToggleControl
                                    label={__("Loop")}
                                    checked={loop}
                                    onChange={newCheck => setAttributes({ loop: newCheck })}
                                />
                                <ToggleControl
                                    label={__("Show Cursor")}
                                    checked={cursorShow}
                                    onChange={newCheck => setAttributes({ cursorShow: newCheck })}
                                />
                                {cursorShow && (
                                    <TextControl
                                        label={__("Cursor Mark")}
                                        value={cursorMark}
                                        onChange={newCheck => setAttributes({ cursorMark: newCheck })}
                                    />
                                )}
                            </Fragment>
                            :
                            <Fragment>
                                <p className="premium-notice">Please note that Slide effect works only on frontend</p>
                                <TextControl
                                    label={__("Animation Speed")}
                                    value={animationSpeed}
                                    type="Number"
                                    onChange={newValue => setAttributes({ animationSpeed: parseInt(newValue) })}
                                    help="Set a duration value in milliseconds for slide effect."
                                />
                                <TextControl
                                    label={__("Pause Time")}
                                    value={pauseTime}
                                    type="Number"
                                    onChange={newValue => setAttributes({ pauseTime: parseInt(newValue) })}
                                    help="How long should the word/string stay visible? Set a value in milliseconds."
                                />
                                <ToggleControl
                                    label={__("Pause on Hover")}
                                    checked={hoverPause}
                                    onChange={newCheck => setAttributes({ hoverPause: newCheck })}
                                    help="If you enabled this option, the slide will be paused when mouseover."
                                />
                                <p>{__("Fancy Strings Alignment")}</p>
                                <Toolbar
                                    controls={ALIGNS.map(contentAlign => ({
                                        icon: "editor-align" + contentAlign,
                                        isActive: contentAlign === fancyalign,
                                        onClick: () => setAttributes({ fancyalign: contentAlign })
                                    }))}
                                />
                            </Fragment>
                        }
                    </PanelBody>
                    <PanelBody
                        title={__("Fancy Text Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={fancyTextColor}
                            onChange={newValue =>
                                setAttributes({
                                    fancyTextColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: fancyTextfontSizeType, label: __("fancyTextfontSizeType") }}
                            fontSize={{ value: fancyTextfontSize, label: __("fancyTextfontSize") }}
                            fontSizeMobile={{ value: fancyTextfontSizeMobile, label: __("fancyTextfontSizeMobile") }}
                            fontSizeTablet={{ value: fancyTextfontSizeTablet, label: __("fancyTextfontSizeTablet") }}
                            weight={fancyTextWeight}
                            style={fancyTextStyle}
                            spacing={fancyTextLetter}
                            upper={fancyTextUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ fancyTextWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ fancyTextStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ fancyTextLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ fancyTextUpper: check })}
                            onResetClick={onResetClickfancyTextTypo}
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={fancyTextBGColor}
                            onChange={newValue =>
                                setAttributes({
                                    fancyTextBGColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTextShadow
                            color={shadowColor}
                            blur={shadowBlur}
                            horizontal={shadowHorizontal}
                            vertical={shadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({ shadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ shadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                setAttributes({ shadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({ shadowVertical: newValue })
                            }
                            onResetClick={onResetClickLabelTextShadow}
                        />
                        {effect == 'typing' && cursorShow && (
                            <Fragment>
                                <p>{__("Cursor Color")}</p>
                                <ColorPalette
                                    value={cursorColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            cursorColor: newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Prefix & Suffix Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={textColor}
                            onChange={newValue =>
                                setAttributes({
                                    textColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: TextfontSizeType, label: __("TextfontSizeType") }}
                            fontSize={{ value: TextfontSize, label: __("TextfontSize") }}
                            fontSizeMobile={{ value: TextfontSizeMobile, label: __("TextfontSizeMobile") }}
                            fontSizeTablet={{ value: TextfontSizeTablet, label: __("TextfontSizeTablet") }}
                            weight={TextWeight}
                            style={TextStyle}
                            spacing={TextLetter}
                            upper={TextUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ TextWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ TextStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ TextLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ TextUpper: check })}
                            onResetClick={onResetClickTextTypo}
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={TextBGColor}
                            onChange={newValue =>
                                setAttributes({
                                    TextBGColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                    </PanelBody>
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{
                textAlign: align,
            }}>
                {effect == 'typing' ? <div className={`premium-fancy-text ${this.props.clientId}`} style={{
                    textAlign: align,
                }}
                    data-effect={`${effect}`}
                    data-strings={`${repeaterFancyText.map((item, index) => { return item.title })}`}
                    data-typespeed={`${typeSpeed}`}
                    data-backspeed={`${backSpeed}`}
                    data-startdelay={`${startdelay}`}
                    data-backdelay={`${backdelay}`}
                    data-loop={`${loop}`}
                    data-cursorshow={`${cursorShow}`}
                    data-cursormark={`${cursorMark}`}
                >
                    <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                    <span className={`premium-fancy-text-title ${this.props.clientId}`} ref={(el) => { this.el = el; }}> </span>
                    <span className={`premium-fancy-text-suffix-text`}> {suffix}</span>
                </div>
                    : <div className={`premium-fancy-text premium-fancy-slide ${this.props.clientId}`} style={{
                        textAlign: align
                    }}
                        data-effect={`${effect}`}
                        data-strings={`${repeaterFancyText.map((item, index) => { return item.title })}`}
                        data-animationspeed={`${animationSpeed}`}
                        data-pausetime={`${pauseTime}`}
                        data-hoverpause={`${hoverPause}`}
                    >
                        <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                        <div className={`premium-fancy-text-title-slide`} style={{
                            textAlign: fancyalign
                        }}>
                            <ul className={`premium-fancy-text-title-slide-list`}>
                                {repeaterFancyText.map((item, index) => { return <li>{item.title}</li> })}
                            </ul>
                        </div>
                        <span className={`premium-fancy-text-suffix-text`}> {suffix}</span>
                    </div>
                }
            </div>
        ]
    }
}

export default edit