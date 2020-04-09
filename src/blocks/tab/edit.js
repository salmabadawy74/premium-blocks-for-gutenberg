import classnames from "classnames"
import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumRange from "../../components/premium-range-responsive";
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
    changeTabValue,
    changeContentValue,
    changeEnableIcon,
    changeIcon,
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
            < ToggleControl
                label={__("Enable Icon")}
                checked={value.enableIcon}
                onChange={newCheck => changeEnableIcon(newCheck, newIndex)}
            />
            {value.enableIcon ? <Fragment>
                <p>{__("Icon")}</p>
                <FontIconPicker
                    icons={iconsList}
                    value={value.icon}
                    onChange={value => changeIcon(value, newIndex)}
                    isMulti={false}
                    appendTo="body"
                    noSelectedPlaceholder={__("Select Icon")}
                />
            </Fragment> : ""}
            <TextControl
                label={
                    __("Title")
                }
                value={
                    value.title
                }
                onChange={
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
                onChange={
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
    changeEnableIcon,
    changeIcon,
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
                changeEnableIcon={changeEnableIcon}
                changeIcon={changeIcon}
                changeTabValue={
                    changeTabValue
                }
                changeContentValue={
                    changeContentValue
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
            tabborderRadius,
            tabborderWidth,
            tabborderColor,
            tabBGColor,
            tabBGHoverColor,
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
            type,
            tabIndex,
            tabStyle,
            tabsBorderColor,
            tabShadowBlur,
            tabShadowColor,
            tabShadowHorizontal,
            tabShadowVertical,
            tabShadowPosition,
            activetabBGColor,
            arrowColor,
            iconColor,
            activeiconColor,
            hovericonColor,
            iconfontSize,
            iconfontSizeMobile,
            iconfontSizeType,
            iconfontSizeTablet,
            iconborderType,
            iconborderRadius,
            iconborderWidth,
            iconborderColor,
            iconshadowBlur,
            iconshadowColor,
            iconshadowHorizontal,
            iconshadowVertical,
            hovertitleColor,
            titleshadowBlur,
            titleshadowColor,
            titleshadowHorizontal,
            titleshadowVertical,
            titleMargin,
            titleMarginTablet,
            titleMarginType,
            titleMarginMobile,
            contentBGColor,
            contentborderType,
            contentborderRadius,
            contentborderWidth,
            contentborderColor,
            contentshadowBlur,
            contentshadowColor,
            contentshadowHorizontal,
            contentshadowVertical,
            contentPadding,
            contentPaddingTablet,
            contentPaddingType,
            contentPaddingMobile,
            iconPadding,
            iconPaddingTablet,
            iconPaddingType,
            iconPaddingMobile,
            tabhoverShadowBlur,
            tabhoverShadowColor,
            tabhoverShadowHorizontal,
            tabhoverShadowVertical,
            tabhoverShadowPosition,
            tabhoverborderType,
            tabhoverborderRadius,
            tabhoverborderWidth,
            tabhoverborderColor,
            tabPadding,
            tabPaddingType,
            tabPaddingTablet,
            tabPaddingMobile,
            tabMargin,
            tabMarginType,
            tabMarginTablet,
            tabMarginMobile,
            tabWidth
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
        const STYLE = [{
            value: "arrow",
            label: __("Arrow Pointer")
        },
        {
            value: "flipped",
            label: __("Flipped")
        },
        ]
        const TABSTYLE = [{
                name: "normal",
                title: __("Normal")
            },
            {
                name: "hover",
                title: __("Hover")
            },
        ];
        var element = document.getElementById("premium-style-tab-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const changeEnableIcon = (newCheck, newIndex) => {
            setAttributes({
                repeaterItems: onRepeaterChange(
                    "enableIcon",
                    newCheck,
                    newIndex
                )
            })
        }

        const changeIcon = (newIcon, newIndex) => {
            setAttributes({
                repeaterItems: onRepeaterChange(
                    "icon",
                    newIcon,
                    newIndex
                )
            })
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
            if (['button', 'div', 'input', 'textarea', 'i'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
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

            let active = array.map((arr, index) => {
                return arr.default
            }).filter((f, i) => f != false)
            if (active.length == 0) {
                setAttributes({ tabIndex: index })
            }
            activeTab(index == 0 ? index : index - 1)
            setAttributes({
                repeatertabs: array
            });
        }

        const renderTabs = repeatertabs.map((item, index) => {
            return <li className={`premium-tab-nav-list-item ${tabStyle == 'flipped' ? "premium-tab-nav-list-item-flipped" : ""} ${item.active ? 'tab-current' : ""}`}>
                <a className={`${tabStyle == 'flipped' ? "premium-tab-link-icon-flipped" : "premium-tab-link-icon"}`} onClick={() => activeTab(index)}>
                    <i className={`premium-tab-title-icon ${item.icon} ${item.enableIcon}`} />
                    <p className="premium-tab-title">{item.title}</p>
                </a>
            </li>
        })

        const renderContents = repeatertabs.map((item, index) => {
            return <section id={`section-tab-content-${index}-${this.props.clientId}`} className={`premium-tab-content-section ${item.active ? `content-current` : ""}`}>
                <div className="premium-tab-content"  style={{
                textAlign: align,
            }}>
                    <div className="premium-tab-content-wrap-inner">
                        <RichText
                            tagName="p"
                            value={item.content}
                            onChange={
                                (newText) => changeContentValue(newText, index)
                            }
                        />
                    </div>
                </div>
            </section>
        })

        const addNewTab = () => {
            if (repeatertabs.length != []) {
                return (repeatertabs || []).map((item, i) => {
                    activeTab(i + 1)
                    edit(i + 1)
                    setAttributes({
                        repeatertabs: repeatertabs.concat([{
                            title: __("Title"),
                            content: __("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
                            edit: true,
                            active: true,
                            default: false,
                            enableIcon: true,
                            icon: "dashicons dashicons-star-filled"
                        }])
                    });
                })
            }
            else {
                setAttributes({
                    repeatertabs: repeatertabs.concat([{
                        title: __("Title"),
                        content: __("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
                        edit: true,
                        active: true,
                        default: false,
                        enableIcon: true,
                        icon: "dashicons dashicons-star-filled"
                    }])
                });
            }
        }

        const activeTab = (index) => {
            return repeatertabs.map((item, i) => {
                if (index == i) {
                    item.active = false
                    setAttributes({
                        repeatertabs: onRepeaterChange(
                            "active",
                            true,
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

        const onResetClickTitle = () => {
            setAttributes({ 
                titleWeight: 500, 
                titlefontSizeType:"px", 
                titlefontSize: "20",
                titlefontSizeMobile: "20",
                titlefontSizeTablet: "20",
                titleStyle: "normal",
                titleLetter: "0",
                titleUpper: false
            });
        }

        const onResetClickTabNormal = () => {
            setAttributes({ 
                tabShadowColor: "", 
                tabShadowBlur:"0", 
                tabShadowHorizontal:"0", 
                tabShadowVertical:"0", 
                tabShadowPosition:""
            });
        }

        const onResetClickTabHover = () => {
            setAttributes({ 
                tabhoverShadowColor: "", 
                tabhoverShadowBlur:"0", 
                tabhoverShadowHorizontal:"0", 
                tabhoverShadowVertical:"0", 
                tabhoverShadowPosition:""
            });
        }

        const onResetClickIconTextShadow= () => {
            setAttributes({ 
                iconshadowColor: "", 
                iconshadowBlur:"0", 
                iconshadowHorizontal:"0", 
                iconshadowVertical:"0",
            });
        }

        const onResetClickTitleTextShadow= () => {
            setAttributes({ 
                titleshadowColor: "", 
                titleshadowBlur:"0", 
                titleshadowHorizontal:"0", 
                titleshadowVertical:"0",
            });
        }

        const mainClasses = classnames(className, "premium-tab");
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
                                    <span className="premium-tab-control-title" > Tabs </span>
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
                                    changeEnableIcon={changeEnableIcon}
                                    changeIcon={changeIcon}
                                    changeTabValue={
                                        changeTabValue
                                    }
                                    changeContentValue={
                                        changeContentValue
                                    }
                                    helperClass='premium-tab__sortableHelper' />
                                < div className="premium-tab-btn__wrap" >
                                    <button
                                        className={
                                            "premium-tab-btn"
                                        }
                                        onClick={
                                            () => addNewTab()
                                        } >
                                        <i className="dashicons dashicons-plus premium-tab-icon" />
                                        {__("Add New Item")}
                                    </button>
                                </div>
                            </div>
                            <br />
                        </Fragment>
                        < SelectControl
                            label={__("Tabs Type")}
                            value={type}
                            onChange={newEffect => setAttributes({ type: newEffect })}
                            options={TYPE}
                        />
                        < SelectControl
                            label={__("Tabs Style")}
                            value={tabStyle}
                            onChange={
                                newEffect => setAttributes({
                                    tabStyle: newEffect
                                })
                            }
                            options={STYLE}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Tabs Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <RangeControl
                            label={__("Default Tab Index")}
                            value={tabIndex}
                            min="1"
                            max={repeatertabs.length}
                            onChange={value => setAttributes({ tabIndex: value })}
                            help="This option works only on frontend"
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: tabPaddingType, label: __("tabPaddingType") }}
                            range={{ value: tabPadding, label: __("tabPadding") }}
                            rangeMobile={{ value: tabPaddingMobile, label: __("tabPaddingMobile") }}
                            rangeTablet={{ value: tabPaddingTablet, label: __("tabPaddingTablet") }}
                            rangeLabel={__("Padding")}
                            min={1}
                            max={100}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: tabMarginType, label: __("tabMarginType") }}
                            range={{ value: tabMargin, label: __("tabMargin") }}
                            rangeMobile={{ value: tabMarginMobile, label: __("tabMarginMobile") }}
                            rangeTablet={{ value: tabMarginTablet, label: __("tabMarginTablet") }}
                            rangeLabel={__("Margin")}
                            min={1}
                            max={100}
                        />
                        <TabPanel
                        className="premium-icon-list-tab-panel"
                        activeClass="active-tab"
                        tabs={TABSTYLE}>
                        {
                            (tabName) => {
                                if ("normal" === tabName.name) {
                                    return <Fragment>
                                        <p>{__("Border Color")}</p>
                                        <ColorPalette
                                            value={tabsBorderColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    tabsBorderColor: newValue
                                                })
                                            }
                                            allowReset={true}
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
                                        <PremiumBorder
                                            borderType={tabborderType}
                                            borderWidth={tabborderWidth}
                                            borderColor={tabborderColor}
                                            borderRadius={tabborderRadius}
                                            onChangeType={newType => setAttributes({ tabborderType: newType })}
                                            onChangeWidth={newWidth => setAttributes({ tabborderWidth: newWidth })}
                                            onChangeColor={colorValue =>
                                                setAttributes({ tabborderColor: colorValue.hex })
                                            }
                                            onChangeRadius={newrRadius =>
                                                setAttributes({ tabborderRadius: newrRadius })
                                            }
                                        />
                                        <PremiumBoxShadow
                                            label="Box Shadow"
                                            inner={true}
                                            color={tabShadowColor}
                                            blur={tabShadowBlur}
                                            horizontal={tabShadowHorizontal}
                                            vertical={tabShadowVertical}
                                            position={tabShadowPosition}
                                            onChangeColor={newColor =>
                                                setAttributes({
                                                    tabShadowColor:
                                                        newColor === undefined ? "transparent" : newColor.hex
                                                })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({
                                                    tabShadowBlur: newBlur === undefined ? 0 : newBlur
                                                })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({
                                                    tabShadowHorizontal: newValue === undefined ? 0 : newValue
                                                })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({
                                                    tabShadowVertical: newValue === undefined ? 0 : newValue
                                                })
                                            }
                                            onChangePosition={newValue =>
                                                setAttributes({
                                                    tabShadowPosition: newValue === undefined ? 0 : newValue
                                                })
                                            }
                                            onResetClick={onResetClickTabNormal}
                                        />
                                    </Fragment>
                                } else {
                                    return <Fragment>
                                        <p>{__("Background Color")}</p>
                                        <ColorPalette
                                            value={tabBGHoverColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    tabBGHoverColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <PremiumBorder
                                            borderType={tabhoverborderType}
                                            borderWidth={tabhoverborderWidth}
                                            borderColor={tabhoverborderColor}
                                            borderRadius={tabhoverborderRadius}
                                            onChangeType={newType => setAttributes({ tabhoverborderType: newType })}
                                            onChangeWidth={newWidth => setAttributes({ tabhoverborderWidth: newWidth })}
                                            onChangeColor={colorValue =>
                                                setAttributes({ tabhoverborderColor: colorValue.hex })
                                            }
                                            onChangeRadius={newrRadius =>
                                                setAttributes({ tabhoverborderRadius: newrRadius })
                                            }
                                        />
                                        <PremiumBoxShadow
                                            label="Box Shadow"
                                            inner={true}
                                            color={tabhoverShadowColor}
                                            blur={tabhoverShadowBlur}
                                            horizontal={tabhoverShadowHorizontal}
                                            vertical={tabhoverShadowVertical}
                                            position={tabhoverShadowPosition}
                                            onChangeColor={newColor =>
                                                setAttributes({
                                                    tabhoverShadowColor:
                                                        newColor === undefined ? "transparent" : newColor.hex
                                                })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({
                                                    tabhoverShadowBlur: newBlur === undefined ? 0 : newBlur
                                                })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({
                                                    tabhoverShadowHorizontal: newValue === undefined ? 0 : newValue
                                                })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({
                                                    tabhoverShadowVertical: newValue === undefined ? 0 : newValue
                                                })
                                            }
                                            onChangePosition={newValue =>
                                                setAttributes({
                                                    tabhoverShadowPosition: newValue === undefined ? 0 : newValue
                                                })
                                            }
                                            onResetClick={onResetClickTabHover}
                                        />
                                    </Fragment>
                                }
                            }
                        }
                    </TabPanel>
                    </PanelBody>
                    <PanelBody
                        title={__("Active Tab Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                         <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={activetabBGColor}
                            onChange={newValue =>
                                setAttributes({
                                    activetabBGColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        {
                            tabStyle == 'arrow' ?
                            <Fragment>
                            <p > {
                                __("Arrow Color")
                            } </p>
                        <ColorPalette
                            value={arrowColor}
                            onChange={newValue =>
                                setAttributes({
                                    arrowColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        </Fragment>:""}
                    </PanelBody>
                    <PanelBody
                        title={__("Icon Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                         <p>{__("Color")}</p>
                        <ColorPalette
                            value={iconColor}
                            onChange={newValue =>
                                setAttributes({
                                    iconColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Active Color")}</p>
                        <ColorPalette
                            value = {
                                activeiconColor
                            }
                            onChange={newValue =>
                                setAttributes({
                                    activeiconColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Hover Color")}</p>
                        <ColorPalette
                            value = {
                                hovericonColor
                            }
                            onChange={newValue =>
                                setAttributes({
                                    hovericonColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: iconfontSizeType, label: __("iconfontSizeType") }}
                            range={{ value: iconfontSize, label: __("iconfontSize") }}
                            rangeMobile={{ value: iconfontSizeMobile, label: __("iconfontSizeMobile") }}
                            rangeTablet={{ value: iconfontSizeTablet, label: __("iconfontSizeTablet") }}
                            rangeLabel={__("Size")}
                            min={1}
                            max={100}
                        />
                        <PremiumBorder
                            borderType={iconborderType}
                            borderWidth={iconborderWidth}
                            borderColor={iconborderColor}
                            borderRadius={iconborderRadius}
                            onChangeType={newType => setAttributes({ iconborderType: newType })}
                            onChangeWidth={newWidth => setAttributes({ iconborderWidth: newWidth })}
                            onChangeColor={colorValue =>
                                setAttributes({ iconborderColor: colorValue.hex })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({ iconborderRadius: newrRadius })
                            }
                        />
                        <PremiumTextShadow
                            color={iconshadowColor}
                            blur={iconshadowBlur}
                            horizontal={iconshadowHorizontal}
                            vertical={iconshadowVertical}
                            onChangeColor={newColor =>
                            setAttributes({ iconshadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ iconshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                            setAttributes({ iconshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                            setAttributes({ iconshadowVertical: newValue })
                            }
                            onResetClick={onResetClickIconTextShadow}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: iconPaddingType, label: __("iconPaddingType") }}
                            range={{ value: iconPadding, label: __("iconPadding") }}
                            rangeMobile={{ value: iconPaddingMobile, label: __("iconPaddingMobile") }}
                            rangeTablet={{ value: iconPaddingTablet, label: __("iconPaddingTablet") }}
                            rangeLabel={__("Padding")}
                            min={1}
                            max={100}
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
                        <p>{__("Hover Color")}</p>
                        <ColorPalette
                            value={hovertitleColor}
                            onChange={newValue =>
                                setAttributes({
                                    hovertitleColor: newValue
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
                           onResetClick={onResetClickTitle}
                        />
                        <PremiumTextShadow
                            color={titleshadowColor}
                            blur={titleshadowBlur}
                            horizontal={titleshadowHorizontal}
                            vertical={titleshadowVertical}
                            onChangeColor={newColor =>
                            setAttributes({ titleshadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ titleshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                            setAttributes({ titleshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                            setAttributes({ titleshadowVertical: newValue })
                            }
                            onResetClick={onResetClickTitleTextShadow}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: titleMarginType, label: __("titleMarginType") }}
                            range={{ value: titleMargin, label: __("titleMargin") }}
                            rangeMobile={{ value: titleMarginMobile, label: __("titleMarginMobile") }}
                            rangeTablet={{ value: titleMarginTablet, label: __("titleMarginTablet") }}
                            rangeLabel={__("Margin")}
                            min={1}
                            max={100}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Content Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        {type == 'vertical'? <Fragment>
                            <RangeControl
                            label={__("Content Width")}
                            value={tabWidth}
                            min="1"
                            max="100"
                            onChange={value => setAttributes({ tabWidth: value })}
                        />
                        </Fragment>: ""}
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
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={contentBGColor}
                            onChange={newValue =>
                                setAttributes({
                                    contentBGColor: newValue
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
                        <PremiumBorder
                            borderType={contentborderType}
                            borderWidth={contentborderWidth}
                            borderColor={contentborderColor}
                            borderRadius={contentborderRadius}
                            onChangeType={newType => setAttributes({ contentborderType: newType })}
                            onChangeWidth={newWidth => setAttributes({ contentborderWidth: newWidth })}
                            onChangeColor={colorValue =>
                                setAttributes({ contentborderColor: colorValue.hex })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({ contentborderRadius: newrRadius })
                            }
                        />
                        <PremiumTextShadow
                            color={contentshadowColor}
                            blur={contentshadowBlur}
                            horizontal={contentshadowHorizontal}
                            vertical={contentshadowVertical}
                            onChangeColor={newColor =>
                            setAttributes({ contentshadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ contentshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                            setAttributes({ contentshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                            setAttributes({ contentshadowVertical: newValue })
                            }
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: contentPaddingType, label: __("contentPaddingType") }}
                            range={{ value: contentPadding, label: __("contentPadding") }}
                            rangeMobile={{ value: contentPaddingMobile, label: __("contentPaddingMobile") }}
                            rangeTablet={{ value: contentPaddingTablet, label: __("contentPaddingTablet") }}
                            rangeLabel={__("Padding")}
                            min={1}
                            max={100}
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
                <div className={`premium-tab`} data-type={`${type}`} data-setting={`${this.props.clientId}`}>
                    <section className="premium-tab-section">
                        <div className={`premium-tab-container premium-tab-${type}`}>
                            <div className="premium-tab-nav"
                                style={{ textAlign: align }}>
                                <ul className={`premium-tab-nav-list premium-tab-${type}`}>
                                    {renderTabs}
                                </ul>
                            </div>
                            <div className={`premium-tab-content-wrap premium-tab-${type}`}>
                                {renderContents}
                            </div>
                            <div className="premium-tab-clearfix"></div>
                        </div>
                    </section>
                </div>
            </div>
        ]
    }
}

export default edit