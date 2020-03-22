import classnames from "classnames"
import styling from "./styling"
import PremiumRange from "../../components/premium-range-responsive";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";

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
    ToggleControl,
} = wp.components

const SortableItem = SortableElement(({
            edit,
            removeItem,
            newIndex,
            value,
            changeTabValue,
            changeContentValue,
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
                        Tab # {
                            newIndex + 1
                        } </div>

                     {
                         items.length != 1 ? < button className = "premium-progress-bar__trashicon fa fa-trash"
                            onClick={
                                () => removeItem(newIndex, value)
                            } >
                        </button>:""}
                            
                </div>
                <div className={
                    `premium-progress-bar-repeater-controls ${value.edit ? "editable" : ""}`
                } >
                    <TextControl
                        label={
                            __(`Tab #${ newIndex + 1}`)
                        }
                        value={
                            value.title
                        }
                        onChange = {
                            (newText) => changeTabValue(newText, newIndex)
                        }
                    />
                    < TextareaControl
                        label={
                            __("Content")
                        }
                        value={
                            value.content
                        }
                        onChange = {
                            (newText) => changeContentValue(newText, newIndex)
                        }
                    />
                </div >
            </div>
        )

        const SortableList = SortableContainer(({
            items,
            removeItem,
            edit,
            changeTabValue,
            changeContentValue
        }) => {
            return (<div > {
                (items).map((value, index) => (
                    <SortableItem key={`item-${value}`}
                        index={index}
                        newIndex={index}
                        value={value}
                        removeItem={removeItem}
                        edit={edit}
                        changeTabValue = {
                            changeTabValue
                        }
                        changeContentValue = {
                            changeContentValue
                        }
                        items = {
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
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-tab-" + this.props.clientId)
        document.head.appendChild($style)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            repeatertabs,
            tabborderType,
            tabborderWidth,
            tabborderColor,
            tabBGColor,
            titleColor,
            activetitleColor,
            titleWeight,
            titleLetter,
            titleUpper,
            titleStyle,
            titlefontSize,
            titlefontSizeMobile,
            titlefontSizeTablet,
            titlefontSizeType,
            contentColor,
            contentWeight,
            contentLetter,
            contentUpper,
            contentStyle,
            contentfontSize,
            contentfontSizeMobile,
            contentfontSizeTablet,
            contentfontSizeType,
            type
        } = attributes

        const TYPE = [{
            value: "horizontal",
            label: __("Horizontal")
        },
        {
            value: "vertical",
            label: __("Vertical")
        },
    ]
        var element = document.getElementById("premium-style-tab-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const changeTabValue = (newText, newIndex) => {
          setAttributes({
            repeaterItems: onRepeaterChange(
              "title",
              newText,
              newIndex
            )
          })
        }

        const changeContentValue = (newText, newIndex) => {
          setAttributes({
            repeaterItems: onRepeaterChange(
              "content",
              newText,
              newIndex
            )
          })
        }
        const onSortEndSingle = ({
            oldIndex,
            newIndex
        }) => {
            let arrayItem = repeatertabs.map((cont) => (
                cont
            ))

            const array = arrayMove(arrayItem, oldIndex, newIndex)

            setAttributes({
                repeatertabs:
                    array

            });
        };
        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (['button', 'div', 'input', 'textarea'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
                return true; // Return true to cancel sorting
            }
        }

        const onRepeaterChange = (attr, value, index) => {
            const items = repeatertabs;
            return items.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }

                return item;
            });
        };

        const edit = (index) => {
            return repeatertabs.map((item, i) => {
                if (index == i) {
                    setAttributes({
                        repeatertabs: onRepeaterChange(
                            "edit",
                            item.edit ? false : true,
                            index
                        )
                    })
                }
                else {
                    setAttributes({
                        repeatertabs: onRepeaterChange(
                            "edit",
                            false,
                            i
                        )
                    })
                }
            })
        }

        const removeItem = (index, item) => {
            let array = repeatertabs.map((cont, currIndex) => {
                return cont
            }).filter((f, i) => i != index)
            setAttributes({ repeatertabs: array });
        }

        const renderTabs = repeatertabs.map((item, index) => {
            return ( < div className = {
                  `premium-tab-title ${item.active? "premium-tab-title-active": ""}`
                } >
               <a onClick={() =>activeTab(index)} style={{color: titleColor}}>{item.title}</a>
            </div>
            )
        })

        const renderContents = repeatertabs.map((item, index) => {
          return ( < div className = {
                `premium-tab-content ${item.active? "premium-tab-content-active": ""}`
              } >
                  <RichText
                    tagName="p"
                    value={item.content}
                    onChange = {
                        (newText) => changeContentValue(newText, index)
                    }
                    />
                {/* <div className="premium-tab-content-title">{item.title}</div> */}
               {/* <p>{item.content}</p> */}
            </div>
            )
        })

         const activeTab = (index) => {
           return repeatertabs.map((item, i) => {
             if (index == i) {
               setAttributes({
                 repeatertabs: onRepeaterChange(
                   "active",
                   item.active ? false : true,
                   index
                 )
               })
             } else {
               setAttributes({
                 repeatertabs: onRepeaterChange(
                   "active",
                   false,
                   i
                 )
               })
             }
           })
         }

        const mainClasses = classnames(className, "premium-progress-bar");
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
                        title={__("Tabs")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        < Fragment >
                                <div className="premium-tab-control-content" >
                                    <label >
                                        <span className="premium-tab-control-title" > Tabs Items </span>
                                    </label>
                                    < SortableList items={
                                        repeatertabs
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
                                        changeTabValue = {
                                            changeTabValue
                                        }
                                        changeContentValue = {
                                            changeContentValue
                                        }
                                        helperClass='premium-tab__sortableHelper' />
                                    < div className = "premium-tab-btn__wrap" >
                                        <button
                                            className={
                                                "premium-tab-btn"
                                            }
                                            onClick={
                                                () => {
                                                    return setAttributes({
                                                        repeatertabs: repeatertabs.concat([{
                                                            title: __("Tab"),
                                                            content: __("Tab Content"),
                                                            edit: false
                                                        }])
                                                    });
                                                }
                                            } >
                                            <i className="dashicons dashicons-plus premium-tab-icon" />
                                            {__("Add New Item")}
                                        </button>
                                    </div>
                                </div>
                                <br />
                            </Fragment>
                            < SelectControl
                                    label={__("Type")}
                                    value={type}
                                    onChange={newEffect => setAttributes({ type: newEffect })}
                                    options={TYPE}
                            />
                    </PanelBody>
                    <PanelBody
                        title={__("Tabs Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                      <PremiumBorder
                            borderType={tabborderType}
                            borderWidth={tabborderWidth}
                            borderColor={tabborderColor}
                            onChangeType={newType => setAttributes({ tabborderType: newType })}
                            onChangeWidth={newWidth => setAttributes({ tabborderWidth: newWidth })}
                            onChangeColor={colorValue =>
                                setAttributes({ tabborderColor: colorValue.hex })
                            }
                        />
                         <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={tabBGColor}
                            onChange={newValue =>
                                setAttributes({
                                    tabBGColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Title Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                       <p>{__("Color")}</p>
                        <ColorPalette
                            value={titleColor}
                            onChange={newValue =>
                                setAttributes({
                                    titleColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Active Color")}</p>
                        <ColorPalette
                            value={activetitleColor}
                            onChange={newValue =>
                                setAttributes({
                                    activetitleColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: titlefontSizeType, label: __("titlefontSizeType") }}
                            fontSize={{ value: titlefontSize, label: __("titlefontSize") }}
                            fontSizeMobile={{ value: titlefontSizeMobile, label: __("titlefontSizeMobile") }}
                            fontSizeTablet={{ value: titlefontSizeTablet, label: __("titlefontSizeTablet") }}
                            weight={titleWeight}
                            style={titleStyle}
                            spacing={titleLetter}
                            upper={titleUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ titleWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ titleStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ titleLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ titleUpper: check })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Content Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                       <p>{__("Color")}</p>
                        <ColorPalette
                            value={contentColor}
                            onChange={newValue =>
                                setAttributes({
                                    contentColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: contentfontSizeType, label: __("contentfontSizeType") }}
                            fontSize={{ value: contentfontSize, label: __("contentfontSize") }}
                            fontSizeMobile={{ value: contentfontSizeMobile, label: __("contentfontSizeMobile") }}
                            fontSizeTablet={{ value: contentfontSizeTablet, label: __("contentfontSizeTablet") }}
                            weight={contentWeight}
                            style={contentStyle}
                            spacing={contentLetter}
                            upper={contentUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ contentWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ contentStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ contentLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ contentUpper: check })}
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
                <div className={`premium-tab ${type =='vertical'?"premium-tab-view-vertical":""}`}
                    style={{
                        textAlign: align,
                    }}>
                      <div className={`premium-tab-title__wrap ${type =='vertical'?"premium-tab-title__wrap-view-vertical":""}`}>
                    {
                      renderTabs
                    }
                    </div>
                    <div className="premium-tab-content__wrap">
                    {
                      renderContents
                    }
                    </div>
                </div>
            </div>
        ]
    }
}

export default edit