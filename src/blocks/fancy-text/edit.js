import classnames from "classnames"
import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumTextShadow from "../../components/premium-text-shadow";
import Typed from 'typed.js';
import {
    SortableContainer,
    SortableElement,
    arrayMove
} from 'react-sortable-hoc';

const { __ } = wp.i18n
let isBoxUpdated = null;

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
    RichText
} = wp.editor

const {
    PanelBody,
    SelectControl,
    TextareaControl,
    TextControl,
    RangeControl,
    ToggleControl,
    TabPanel,
    Toolbar
} = wp.components

const SortableItem = SortableElement(({
    edit,
    removeItem,
    newIndex,
    value,
    changeFancyValue,
    items
}) => < div className="premium-progress-bar-repeater" >

        <div className={
            `premium-progress-bar__container ${newIndex}`
        } >
            < span className="premium-progress-bar__dragHandle" ></span>
            <div className="premium-progress-bar__content"
                onClick={
                    () => edit(newIndex)
                } >
                {
                    value.title
                } </div>

            {
                items.length != 1 ? < button className="premium-progress-bar__trashicon fa fa-trash"
                    onClick={
                        () => removeItem(newIndex, value)
                    } >
                </button> : ""}

        </div>
        <div className={
            `premium-progress-bar-repeater-controls ${value.edit ? "editable" : ""}`
        } >
            <TextControl
                label={ __("Fancy String")}
                value={ value.title}
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
        this.state = {
			// txt: '',
			// fullTxt: '',
			// loopNum: 0,
            // isDeleting: false,
            text: '',
            wordIndex: 0,
            isDeleting: false,
            isWaiting: false,
        }
        this.speed = 80;
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
    
    componentDidUpdate(prevProps, prevState) {
        // const { repeaterFancyText, loop } = this.props.attributes;
        //     if (!repeaterFancyText) return null;
        // let txt =  repeaterFancyText.map((item, index) => {return item.title})
        // var typed = new Typed("#demo", {
        //     strings: txt,
        //     typeSpeed: 3000,
        //     backSpeed: 3000,
        //     backDelay: 5000,
        //     startDelay: 1000,
        //     loop: true,
        // });
        // let delta = 2000;
    //     if (this.state.isDeleting) { delta = 2000; console.log('2000 is deleting')}
    //    if (!this.state.isDeleting && this.state.txt === this.state.fullTxt) {
    //        console.log('2000 is not Del')
    //     delta = 2000;
    //    } else if (this.state.isDeleting && this.state.txt === '') {
    //        console.log('900 is emp')
    //     delta = 900;
    //    }
        // setTimeout(() => this.renderFancyText(), 10); 
   }

    renderFancyText  () {
        // const { wordIndex, isDeleting, text, wait } = this.state
        // const currentIndex = wordIndex % this.props.words.length
        const { repeaterFancyText, loop } = this.props.attributes;
            if (!repeaterFancyText) return null;
        let fancystring=[]
        let txt =  repeaterFancyText.map((item, index) => {fancystring.push(item.title)})
        const options = {
            strings: fancystring,
            typeSpeed: 3000,
                backSpeed: 3000,
                backDelay: 5000,
                startDelay: 1000,
                loop: true,
                showCursor:true,
                cursorChar: '|'
        };
        this.typed = new Typed(this.el, options);
        // var typed = new Typed("#demo", {
        //     strings: fancystring,
        //     typeSpeed: 3000,
        //     backSpeed: 3000,
        //     backDelay: 5000,
        //     startDelay: 1000,
        //     loop: true,
        //     showCursor:true,
        //     cursorChar: '|'
        // });
        // currentWord = currentWord[currentIndex]

        // this.setState({ isWaiting: false })

        // if (isDeleting) {
        // this.setState({
        //     text: currentWord.substring(0, text.length - 1)
        // })
        // } else {
        // this.setState({
        //     text: currentWord.substring(0, text.length + 1)
        // })
        // }

        // let typeSpeed = 200

        // if (this.isDeleting) {
        // typeSpeed /= 2
        // }

        // if (!isDeleting && (text === currentWord)) {
        // typeSpeed = (Math.random() * Math.floor(3)) * 1000

        // this.setState({
        //     isWaiting: true,
        //     isDeleting: true,
        // })
        // } else if (isDeleting && text === '') {
        // this.setState({
        //     isDeleting: false,
        //     wordIndex: this.state.wordIndex + 1
        // })
        // typeSpeed = 400
        // }

        // setTimeout(() => this.type(), typeSpeed)

    //     const { repeaterFancyText, loop } = this.props.attributes;
    //     if (!repeaterFancyText) return null;
    //     let txt =  repeaterFancyText.map((item, index) => {return item.title})
    //     let i = this.state.loopNum % txt.length;
		
	// 	let setFullTxt = txt[i];

	// 	let copy = {...this.state};

	// 	   if (this.state.isDeleting) {
    //     copy.txt = setFullTxt.substring(0, copy.txt.length - 1);
    //     } else {
    //     copy.txt = setFullTxt.substring(0, copy.txt.length + 1);
    //     }

    //     if (!this.state.isDeleting && this.state.txt === setFullTxt) {
    //   if (txt.length === copy.loopNum + 1 && !loop) {
          
    //       copy.isDeleting = false;
    //   }
    //   else {
    //       copy.isDeleting = true;
    //     }
    //     } 
    //     else if (copy.isDeleting && this.state.txt === '') {
    //     copy.isDeleting = false;
    //     // console.log('looping', copy.loopNum, copy.delta)
    //     // console.log(txt.length);
    //     if (txt.length === copy.loopNum + 1 && !loop) {
    //         copy.loopNum = copy.loopNum ;
    //     }
    //         else{ 
    //             if (txt.length === copy.loopNum + 1)
    //             {
    //                 copy.loopNum =-1;
    //             }
    //             copy.loopNum = copy.loopNum + 1
    //         };
    //     }
    //     copy.fullTxt = setFullTxt;
    //     console.log('copytxt', copy)
    //     this.setState(() => copy)
    } 

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
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
            cursorMark
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
                                < SortableList items={
                                    repeaterFancyText
                                }
                                    onSortEnd={
                                        (o, n) => onSortEndSingle(o, n)
                                    }
                                    removeItem={
                                        (value) => removeItem(value)
                                    }
                                    edit={
                                        (value) => edit(value)
                                    }

                                    shouldCancelStart={
                                        shouldCancelStart
                                    }
                                    changeFancyValue={
                                        changeFancyValue
                                    }
                                    helperClass='premium-fancy-text__sortableHelper' />
                                < div className="premium-fancy-text-btn__wrap" >
                                    <button
                                        className={
                                            "premium-fancy-text-btn"
                                        }
                                        onClick={
                                            () => addNewFancyText()
                                        } >
                                        <i className="dashicons dashicons-plus premium-fancy-text-icon" />
                                        {__("Add New Item")}
                                    </button>
                                </div>
                            </div>
                            <br />
                        </Fragment>
                        <TextControl
                            label={
                                __("Suffix Text")
                            }
                            value={suffix}
                            onChange={newText => setAttributes({ suffix: newText })}
                        />
                        <p>{__("AlignmentToolbar")}</p>
                        <Toolbar
                            controls={ALIGNS.map(contentAlign => ({
                                icon: "editor-align" + contentAlign,
                                isActive: contentAlign === align,
                                onClick: () => setAttributes({ align: contentAlign })
                            }))}
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
                        {effect=='typing'&&(
                            <Fragment>
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
                                {cursorShow&&(
                                    <TextControl
                                        label={ __("Cursor Mark")}
                                        value={cursorMark}
                                        onChange={newCheck => setAttributes({ cursorMark: newCheck })}
                                    />
                                )}
                            </Fragment>
                        )}
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
                        {effect == 'typing' && (
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
                <div className={`premium-fancy-text`} style={{
                    textAlign: align,
                }}>
                    <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                    <span className={`premium-fancy-text-title`} id="demo" ref={(el) => { this.el = el; }}> </span>
                    {/* {cursorShow&& <span className={`premium-fancy-text-cursor`}> {cursorMark} </span>} */}
                    <span className={`premium-fancy-text-suffix-text`}> {suffix}</span>
                </div>
            </div>
        ]
    }
}

export default edit