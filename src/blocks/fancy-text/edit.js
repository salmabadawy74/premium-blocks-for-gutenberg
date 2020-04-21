import classnames from "classnames"
// import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumTextShadow from "../../components/premium-text-shadow";

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
    TabPanel
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
                label={
                    __("Fancy String")
                }
                value={
                    value.title
                }
                onChange={
                    (newText) => changeFancyValue(newText, newIndex)
                }
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
			txt: '',
			fullTxt: '',
			loopNum: 0,
			isDeleting: false,
		}
    this.renderFancyText = this.renderFancyText.bind(this);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        // const $style = document.createElement("style")
        // $style.setAttribute("id", "premium-style-tab-" + this.props.clientId)
        // document.head.appendChild($style)
        this.renderFancyText()
    }

    componentDidUpdate(prevProps, prevState) {
        let delta = 200 - Math.random() * 100;

        if (this.state.isDeleting) { delta /= 2; }
       if (!this.state.isDeleting && this.state.txt === this.state.fullTxt) {
       delta = 2000;
       } else if (this.state.isDeleting && this.state.txt === '') {
      delta = 200;
       }

        setTimeout(() => this.renderFancyText(), delta); 
   }

    renderFancyText  () {
        const { repeaterFancyText } = this.props.attributes;
        if (!repeaterFancyText) return null;
        // let i = 0;
        // let speed = 30;
        let txt =  repeaterFancyText.map((item, index) => {return item.title})
        // console.log('tt',txt);
        // for(i=0;i< txt.length;i++){
        //     fancyString(txt[i]);
        //     // delay(4000);
        //     reversefancyString(txt[i]);
        //     // delay(1000);
        // }
        let i = this.state.loopNum % txt.length;
		
		let setFullTxt = txt[i];

		let copy = {...this.state};

		   if (this.state.isDeleting) {
        copy.txt = setFullTxt.substring(0, copy.txt.length - 1);
        } else {
        copy.txt = setFullTxt.substring(0, copy.txt.length + 1);
        }

      
        if (!this.state.isDeleting && this.state.txt === setFullTxt) {
      
        copy.isDeleting = true;
        } else if (copy.isDeleting && this.state.txt === '') {
        copy.isDeleting = false;
        console.log('looping', copy.loopNum, copy.delta)
        copy.loopNum = copy.loopNum + 1;
   
        }
        copy.fullTxt = setFullTxt;
        console.log('copytxt', copy)
        this.setState(() => copy, console.log('delta', this.state.delta))
    } 


    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            prefix,
            repeaterFancyText
        } = attributes


        // var element = document.getElementById("premium-style-tab-" + this.props.clientId)

        // if (null != element && "undefined" != typeof element) {
        //     element.innerHTML = styling(this.props)
        // }


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
                                __("Prefix")
                            }
                            value={prefix}
                            onChange={newText => setAttributes({ prefix: newText })}
                        />
                        < Fragment >
                            <div className="premium-fancy-text-control-content" >
                                <label >
                                    <span className="premium-fancy-text-control-title" > Fancy Text </span>
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
                    <span className={`premium-fancy-text-prefix-text`}>{prefix}</span>
                    <span className={`premium-fancy-text-title`} id="demo">{this.state.txt}</span>
                </div>
            </div>
        ]
    }
}

export default edit