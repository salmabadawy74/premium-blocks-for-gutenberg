import classnames from "classnames"
import times from "lodash/times"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
// import styling from "./styling"
import iconsList from "../../components/premium-icons-list";
import PremiumTypo from "../../components/premium-typo";
import FONTS from "../../components/premium-fonts";
import PremiumBorder from "../../components/premium-border";
// import PremiumMarginR from "../../components/premium-margin-responsive";
// import PremiumRange from "../../components/premium-range-responsive";
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const { __ } = wp.i18n

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    MediaUpload,
    ColorPalette,
    RichText
} = wp.blockEditor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    Button,
    TextControl,
    ToggleControl,
    TabPanel,
} = wp.components

const ICONTYPE = [
    {
        label: __("Icon"),
        value: "icon"
    },
    {
        label: __("Image"),
        value: "image"
    }
];

const SortableItem = SortableElement(({
    edit,
    onRemove,
    newIndex,
    value,
    showContent,
    changeLabel,
    toggleShowBulletIcon,
    changeTabValue,
    changeContentValue,
    changeEnableIcon,
    changeIcon,
    items
}) => <li tabIndex={0} style={{ listStyle: 'none' }}>
        <span className="premium-bulletList__container">
            <span className="premium-bulletList__dragHandle"></span>
            <div className="premium-bulletList__content" onClick={() => showContent(newIndex, value)}>
                <span className={`premium-bulletList__label`}></span>
                {value.label}
            </div>
            <button className="premium-bulletList__trashicon fa fa-trash" onClick={() => onRemove(newIndex, value)}></button>
        </span>
        {value.showContent && (
            <div className="premium-bulletList__link">
                <TextControl
                    placeholder={__(`Enter ${value.label} link`)}
                    value={value.label}
                    onChange={(val) => changeLabel(val, newIndex)}
                />
                <ToggleControl
                    label={__("Show Bullet")}
                    checked={value.showBulletIcon}
                    onChange={value => toggleShowBulletIcon(value, newIndex)}
                />
                {value.showBulletIcon && <div><SelectControl
                    label={__("Icon Type")}
                    options={ICONTYPE}
                    value={value.image_icon}
                    onChange={value => this.saveIcons({ image_icon: value }, index)}
                />
                    {"icon" == value.image_icon &&
                        <Fragment>
                            <p>{__("Icon")}</p>
                            <FontIconPicker
                                icons={iconsList}
                                value={value.icon}
                                onChange={value => { this.saveIcons({ icon: value }, index) }}
                                isMulti={false}
                                appendTo="body"
                                noSelectedPlaceholder={__("Select Icon")}
                            />
                        </Fragment>}

                    {"image" == value.image_icon &&
                        <Fragment>
                            {valueimage ?
                                <img src={value.image.url} width="100%" height="auto" />
                                : ""}
                            <MediaUpload
                                title={__("Select Image")}
                                onSelect={value => { this.saveIcons({ image: value }, index) }}
                                allowedTypes={["image"]}
                                value={value.image}
                                render={({ open }) => (
                                    <Button isDefault onClick={open}>
                                        {!value.image ? __("Select Image") : __("Replace image")}
                                    </Button>
                                )}
                            />
                            {value.image &&
                                <Button
                                    onClick={value => { this.saveIcons({ image: "" }, index) }}
                                    isLink isDestructive>
                                    {__("Remove Image")}
                                </Button>
                            }
                        </Fragment>
                    }
                </div>
                }
                {/* <button className="premium-bulletList__saveButton" onClick={() => saveLink(value.changeinput, value, personIndex)}>Save</button> */}
            </div>
        )}
    </li>);

const SortableList = SortableContainer(({
    items,
    onRemove,
    showContent,
    changeLabel,
    toggleShowBulletIcon,
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
                onRemove={onRemove}
                showContent={showContent}
                changeLabel={changeLabel}
                toggleShowBulletIcon={toggleShowBulletIcon}
                // edit={edit}
                // changeEnableIcon={changeEnableIcon}
                // changeIcon={changeIcon}
                // changeTabValue={
                //     changeTabValue
                // }
                // changeContentValue={
                //     changeContentValue
                // }
                items={
                    items
                }
            />
        ))
    } </div>
    );
});


class edit extends Component {

    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-icon-list-" + this.props.clientId)
        document.head.appendChild($style)
    }

    saveIcons(value, index) {
        const { attributes, setAttributes } = this.props
        const { icons } = attributes
        const newItems = icons.map((item, thisIndex) => {
            if (index === thisIndex) {
                item = { ...item, ...value }
            }
            return item
        })
        setAttributes({
            icons: newItems,
        })
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            multiTitleCount,
            layoutPos,
            iconPosition,
            linkTarget,
            align,
            className,
            icons,
            repeaterBulletList,
            sizeType,
            size,
            sizeMobile,
            sizeTablet,
            titleLetter,
            titleStyle,
            titleUpper,
            titleWeight,
            titleFont,
            borderType,
            borderWidth,
            borderRadius,
            borderColor,
            iconSpacing,
            iconSpacingType,
            iconSpacingMobile,
            iconSpacingTablet,
            titlePadding,
            titlePaddingMobile,
            titlePaddingTablet,
            titlePaddingType,
            iconPaddingType,
            iconPadding,
            iconPaddingTablet,
            iconPaddingMobile,
            fontSize,
            fontSizeType,
            fontSizeMobile,
            fontSizeTablet,
            marginTop,
            marginTopType,
            marginTopMobile,
            marginTopTablet,
            marginBottom,
            marginBottomType,
            marginBottomMobile,
            marginBottomTablet,
            marginRight,
            marginRightType,
            marginRightMobile,
            marginRightTablet,
            marginLeft,
            marginLeftType,
            marginLeftMobile,
            marginLeftTablet,
        } = attributes

        const LAYOUT = [
            {
                label: __("Block"),
                value: "block"
            },
            {
                label: __("Inline"),
                value: "inline"
            }
        ];
        const POSITION = [
            {
                label: __("Left"),
                value: "left"
            },
            {
                label: __("Right"),
                value: "right"
            },
            {
                label: __("Top"),
                value: "top"
            }
        ];
        // const ICONTYPE = [
        //     {
        //         label: __("Icon"),
        //         value: "icon"
        //     },
        //     {
        //         label: __("Image"),
        //         value: "image"
        //     }
        // ];
        const COLORTAB = [
            {
                name: "normal",
                title: __("Normal")
            },
            {
                name: "hover",
                title: __("Hover")
            },
        ];

        const addNewBulletList = () => {
            let cloneIcons = [...repeaterBulletList]
            // if (cloneIcons.length < newCount) {
            //     const incAmount = Math.abs(newCount - cloneIcons.length)
            //     {
            //         times(incAmount, n => {
            cloneIcons.push({
                id: cloneIcons.length + 1,
                label: "Title #" + (cloneIcons.length + 1),
                image_icon: cloneIcons[0].image_icon,
                icon: cloneIcons[0].icon,
                image: cloneIcons[0].image,
                icon_color: cloneIcons[0].icon_color,
                icon_hover_color: cloneIcons[0].icon_hover_color,
                icon_bg_color: cloneIcons[0].icon_bg_color,
                icon_bg_hover_color: cloneIcons[0].icon_bg_hover_color,
                item_bg_color: cloneIcons[0].item_bg_color,
                item_bg_hover_color: cloneIcons[0].item_bg_hover_color,
                link: cloneIcons[0].link,
                disableLink: cloneIcons[0].disableLink,
                showContent: cloneIcons[0].showContent,
                showBulletIcon: cloneIcons[0].showBulletIcon,
            })
            //     })
            // }
            setAttributes({ repeaterBulletList: cloneIcons })
            // }
            // else {
            //     for (let i = multiTitleCount; i > newCount; i--) {
            //         repeaterBulletList.splice(i - 1, 1)
            //     }
            // }
            // setAttributes({ multiTitleCount: newCount })
            // setAttributes({
            //     repeaterBulletList: repeaterBulletList.concat([{
            //         title: __("Title"),
            //         edit: true
            //     }])
            // });
        }

        const onRemove = (index, item) => {
            let array = repeaterBulletList.map((bulletList, currIndex) => {
                return bulletList
            }).filter((f, i) => i != index)

            let active = array.map((arr, index) => {
                return arr.default
            }).filter((f, i) => f != false)
            if (active.length == 0) {
                // setAttributes({ tabIndex: index })
            }
            // activeTab(index == 0 ? index : index - 1)
            setAttributes({
                repeaterBulletList: array
            });
        }

        const showContent = (index, item) => {
            console.log(index, item)
            let array = repeaterBulletList.map((bulletList, currIndex) => {
                return bulletList
            })
            array[index].showContent = item;
            console.log(array[index])
            setAttributes({
                repeaterBulletList: array
            });
        }

        const changeLabel = (item, index) => {
            console.log(index, item)
            let array = repeaterBulletList.map((bulletList, currIndex) => {
                return bulletList
            })
            array[index].label = item;
            console.log(array)
            setAttributes({
                repeaterBulletList: array
            });
        }

        const toggleShowBulletIcon = (value, index) => {
            console.log(index, value)
            let array = repeaterBulletList.map((bulletList, currIndex) => {
                return bulletList
            })
            array[index].showBulletIcon = value;
            console.log(array)
            setAttributes({
                repeaterBulletList: array
            });
        }

        const onSortEndSingle = ({
            oldIndex,
            newIndex
        }) => {
            let arrayItem = repeaterBulletList.map((cont) => (
                cont
            ))
            const array = arrayMove(arrayItem, oldIndex, newIndex)
            setAttributes({
                repeaterBulletList:
                    array
            });
        };

        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (['button', 'div', 'input'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
                return true; // Return true to cancel sorting
            }
        }

        const addmultiTitleCount = (newCount) => {
            let cloneIcons = [...icons]
            if (cloneIcons.length < newCount) {
                const incAmount = Math.abs(newCount - cloneIcons.length)
                {
                    times(incAmount, n => {
                        cloneIcons.push({
                            id: cloneIcons.length + 1,
                            label: "Title #" + (cloneIcons.length + 1),
                            image_icon: cloneIcons[0].image_icon,
                            icon: cloneIcons[0].icon,
                            image: cloneIcons[0].image,
                            icon_color: cloneIcons[0].icon_color,
                            icon_hover_color: cloneIcons[0].icon_hover_color,
                            icon_bg_color: cloneIcons[0].icon_bg_color,
                            icon_bg_hover_color: cloneIcons[0].icon_bg_hover_color,
                            item_bg_color: cloneIcons[0].item_bg_color,
                            item_bg_hover_color: cloneIcons[0].item_bg_hover_color,
                            link: cloneIcons[0].link,
                            disableLink: cloneIcons[0].disableLink,
                        })
                    })
                }
                setAttributes({ icons: cloneIcons })
            }
            else {
                for (let i = multiTitleCount; i > newCount; i--) {
                    icons.splice(i - 1, 1)
                }
            }
            setAttributes({ multiTitleCount: newCount })
        };
        const iconControls = (index) => {
            let color_control = ""
            let color_control_hover = ""
            if ("image" == icons[index].image_icon) {
                color_control = (
                    <Fragment>
                        <p>{__("Label Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].label_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].label_color}
                            onChange={(value) => this.saveIcons({ label_color: value }, index)}
                            allowReset
                        />
                        <p>{__("Image Background Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_bg_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_bg_color}
                            onChange={(value) => this.saveIcons({ icon_bg_color: value }, index)}
                            allowReset
                        />
                        <p>{__("Item Background Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].item_bg_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].item_bg_color}
                            onChange={(value) => this.saveIcons({ item_bg_color: value }, index)}
                            allowReset
                        />
                    </Fragment>
                )
                color_control_hover = (
                    <Fragment>
                        <p>{__("Label Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].label_hover_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].label_hover_color}
                            onChange={(value) => this.saveIcons({ label_hover_color: value }, index)}
                            allowReset
                        />
                        <p >{__("Image Background Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_bg_hover_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_bg_hover_color}
                            onChange={(value) => this.saveIcons({ icon_bg_hover_color: value }, index)}
                            allowReset
                        />
                        <p >{__("Item Background Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].item_bg_hover_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].item_bg_hover_color}
                            onChange={(value) => this.saveIcons({ item_bg_hover_color: value }, index)}
                            allowReset
                        />
                    </Fragment>
                )
            } else {
                color_control = (
                    <Fragment>
                        <p >{__("Label Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].label_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].label_color}
                            onChange={(value) => this.saveIcons({ label_color: value }, index)}
                            allowReset
                        />
                        <p >{__("Icon Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_color}
                            onChange={(value) => this.saveIcons({ icon_color: value }, index)}
                            allowReset
                        />
                        <p >{__("Icon Background Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_bg_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_bg_color}
                            onChange={(value) => this.saveIcons({ icon_bg_color: value }, index)}
                            allowReset
                        />
                        <p >{__("Item Background Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].item_bg_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].item_bg_color}
                            onChange={(value) => this.saveIcons({ item_bg_color: value }, index)}
                            allowReset
                        />
                    </Fragment>
                )
                color_control_hover = (
                    <Fragment>
                        <p >{__("Label Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].label_hover_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].label_hover_color}
                            onChange={(value) => this.saveIcons({ label_hover_color: value }, index)}
                            allowReset
                        />
                        <p >{__("Icon Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_hover_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_hover_color}
                            onChange={(value) => this.saveIcons({ icon_hover_color: value }, index)}
                            allowReset
                        />
                        <p >{__("Icon Background Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_bg_hover_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_bg_hover_color}
                            onChange={(value) => this.saveIcons({ icon_bg_hover_color: value }, index)}
                            allowReset
                        />
                        <p >{__("Item Background Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].item_bg_hover_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].item_bg_hover_color}
                            onChange={(value) => this.saveIcons({ item_bg_hover_color: value }, index)}
                            allowReset
                        />
                    </Fragment>
                )
            }
            return (
                <PanelBody
                    key={index}
                    title={__("Icon #") + " " + (index + 1) + " " + __("Settings")}
                    initialOpen={false}
                >
                    <SelectControl
                        label={__("Icon Type")}
                        options={ICONTYPE}
                        value={icons[index].image_icon}
                        onChange={value => this.saveIcons({ image_icon: value }, index)}
                    />
                    {"icon" == icons[index].image_icon &&
                        <Fragment>
                            <p>{__("Icon")}</p>
                            <FontIconPicker
                                icons={iconsList}
                                value={icons[index].icon}
                                onChange={value => { this.saveIcons({ icon: value }, index) }}
                                isMulti={false}
                                appendTo="body"
                                noSelectedPlaceholder={__("Select Icon")}
                            />
                        </Fragment>
                    }
                    {"image" == icons[index].image_icon &&
                        <Fragment>
                            {icons[index].image ?
                                <img src={icons[index].image.url} width="100%" height="auto" />
                                : ""}
                            <MediaUpload
                                title={__("Select Image")}
                                onSelect={value => { this.saveIcons({ image: value }, index) }}
                                allowedTypes={["image"]}
                                value={icons[index].image}
                                render={({ open }) => (
                                    <Button isDefault onClick={open}>
                                        {!icons[index].image ? __("Select Image") : __("Replace image")}
                                    </Button>
                                )}
                            />
                            {icons[index].image &&
                                <Button
                                    onClick={value => { this.saveIcons({ image: "" }, index) }}
                                    isLink isDestructive>
                                    {__("Remove Image")}
                                </Button>
                            }
                        </Fragment>
                    }
                    <hr />
                    <ToggleControl
                        label={__("Link")}
                        checked={icons[index].disableLink}
                        onChange={value => { this.saveIcons({ disableLink: value }, index) }}
                    />
                    {icons[index].disableLink &&
                        <Fragment>
                            <p>{__("URL")}</p>
                            <TextControl
                                value={icons[index].link}
                                onChange={value => { this.saveIcons({ link: value }, index) }}
                                placeholder={__("Enter URL")}
                            />
                        </Fragment>
                    }
                    <hr />
                    <h2>{__(" Color Settings")}</h2>
                    <TabPanel
                        className="premium-icon-list-tab-panel"
                        activeClass="active-tab"
                        tabs={COLORTAB}>
                        {
                            (tabName) => {
                                let color_tab
                                if ("normal" === tabName.name) {
                                    color_tab = color_control
                                } else {
                                    color_tab = color_control_hover
                                }
                                return <div>{color_tab}</div>
                            }
                        }
                    </TabPanel>
                </PanelBody>
            )
        }

        var element = document.getElementById("premium-style-icon-list-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            // element.innerHTML = styling(this.props)
        }

        const addFontToHead = fontFamily => {
            const head = document.head;
            const link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href =
                "https://fonts.googleapis.com/css?family=" +
                fontFamily.replace(/\s+/g, "+") +
                ":" +
                "regular";
            head.appendChild(link);
        };

        const onChangeTitleFamily = fontFamily => {
            setAttributes({ titleFont: fontFamily });
            if (!fontFamily) {
                return;
            }
            addFontToHead(fontFamily);
        };
        const mainClasses = classnames(className, "premium-icon-list");
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
                        < SortableList
                            items={repeaterBulletList}
                            onSortEnd={(o, n) => onSortEndSingle(o, n)}
                            onRemove={(value) => onRemove(value)}
                            showContent={(value, i) => showContent(value, i)}
                            changeLabel={(value, i) => changeLabel(value, i)}
                            toggleShowBulletIcon={(value, i) => toggleShowBulletIcon(value, i)}
                            // edit={(value) => edit(value)}
                            shouldCancelStart={shouldCancelStart}
                            // changeFancyValue={changeFancyValue}
                            helperClass='premium-fancy-text__sortableHelper'
                        />
                        < div className="premium-fancy-text-btn__wrap" >
                            <button
                                className={"premium-fancy-text-btn"}
                                onClick={() => addNewBulletList()}
                            >
                                <i className="dashicons dashicons-plus premium-fancy-text-icon" />
                                {__("Add New Item")}
                            </button>
                        </div>
                        <RangeControl
                            label={__("Number of Items")}
                            value={multiTitleCount}
                            min="1"
                            max="10"
                            onChange={value => addmultiTitleCount(value)}
                        />
                        <SelectControl
                            label={__("Layout")}
                            options={LAYOUT}
                            value={layoutPos}
                            onChange={newValue => setAttributes({ layoutPos: newValue })}
                        />
                        <SelectControl
                            label={__("Icon Position")}
                            options={POSITION}
                            value={iconPosition}
                            onChange={newValue => setAttributes({ iconPosition: newValue })}
                        />
                        <ToggleControl
                            label={__("Open links in new tab")}
                            checked={linkTarget}
                            onChange={newValue => setAttributes({ linkTarget: newValue })}
                        />
                    </PanelBody>
                    {times(multiTitleCount, n => iconControls(n))}
                    <PanelBody
                        title={__("Icon Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        {/* <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: sizeType, label: __("sizeType") }}
                            range={{ value: size, label: __("size") }}
                            rangeMobile={{ value: sizeMobile, label: __("sizeMobile") }}
                            rangeTablet={{ value: sizeTablet, label: __("sizeTablet") }}
                            rangeLabel={__("Icon Size ")}
                        /> */}
                        <PremiumBorder
                            borderType={borderType}
                            borderWidth={borderWidth}
                            borderColor={borderColor}
                            borderRadius={borderRadius}
                            onChangeType={newType => setAttributes({ borderType: newType })}
                            onChangeWidth={newWidth => setAttributes({ borderWidth: newWidth })}
                            onChangeColor={colorValue =>
                                setAttributes({ borderColor: colorValue.hex })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({ borderRadius: newrRadius })
                            }
                        />
                        {/* <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: iconSpacingType, label: __("iconSpacingType") }}
                            range={{ value: iconSpacing, label: __("iconSpacing") }}
                            rangeMobile={{ value: iconSpacingMobile, label: __("iconSpacingMobile") }}
                            rangeTablet={{ value: iconSpacingTablet, label: __("iconSpacingTablet") }}
                            rangeLabel={__("Icons Spacing ")}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: iconPaddingType, label: __("iconPaddingType") }}
                            range={{ value: iconPadding, label: __("iconPadding") }}
                            rangeMobile={{ value: iconPaddingMobile, label: __("iconPaddingMobile") }}
                            rangeTablet={{ value: iconPaddingTablet, label: __("iconPaddingTablet") }}
                            rangeLabel={__("Icon Padding ")}
                        /> */}
                    </PanelBody>
                    <PanelBody
                        title={__("Item Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["respsize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: fontSizeType, label: __("fontSizeType") }}
                            fontSize={{ value: fontSize, label: __("fontSize") }}
                            fontSizeMobile={{ value: fontSizeMobile, label: __("fontSizeMobile") }}
                            fontSizeTablet={{ value: fontSizeTablet, label: __("fontSizeTablet") }}
                            weight={titleWeight}
                            style={titleStyle}
                            spacing={titleLetter}
                            upper={titleUpper}
                            onChangeRespSize={newSize => setAttributes({ titleSize: newSize })}
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
                        <SelectControl
                            label={__("Font Family")}
                            value={titleFont}
                            options={FONTS}
                            onChange={onChangeTitleFamily}
                        />
                        {/* <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: titlePaddingType, label: __("titlePaddingType") }}
                            range={{ value: titlePadding, label: __("titlePadding") }}
                            rangeMobile={{ value: titlePaddingMobile, label: __("titlePaddingMobile") }}
                            rangeTablet={{ value: titlePaddingTablet, label: __("titlePaddingTablet") }}
                            rangeLabel={__("Item Padding ")}
                        /> */}
                        {/* {layoutPos == "block" ? <PremiumMarginR
                            directions={["top", "bottom"]}
                            setAttributes={setAttributes}
                            marginTopType={{ value: marginTopType, label: __("marginTopType") }}
                            marginTop={{ value: marginTop, label: __("marginTop") }}
                            marginTopMobile={{ value: marginTopMobile, label: __("marginTopMobile") }}
                            marginTopTablet={{ value: marginTopTablet, label: __("marginTopTablet") }}
                            marginBottomType={{ value: marginBottomType, label: __("marginBottomType") }}
                            marginBottom={{ value: marginBottom, label: __("marginBottom") }}
                            marginBottomMobile={{ value: marginBottomMobile, label: __("marginBottomMobile") }}
                            marginBottomTablet={{ value: marginBottomTablet, label: __("marginBottomTablet") }}
                        /> :
                            <PremiumMarginR
                                directions={["left", "right"]}
                                setAttributes={setAttributes}
                                marginLeftType={{ value: marginLeftType, label: __("marginLeftType") }}
                                marginLeft={{ value: marginLeft, label: __("marginLeft") }}
                                marginLeftMobile={{ value: marginLeftMobile, label: __("marginLeftMobile") }}
                                marginLeftTablet={{ value: marginLeftTablet, label: __("marginLeftTablet") }}
                                marginRightType={{ value: marginRightType, label: __("marginRightType") }}
                                marginRight={{ value: marginRight, label: __("marginRight") }}
                                marginRightMobile={{ value: marginRightMobile, label: __("marginRightMobile") }}
                                marginRightTablet={{ value: marginRightTablet, label: __("marginRightTablet") }}
                            />
                        } */}
                    </PanelBody>
                </InspectorControls >
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{
                textAlign: align,
            }} id={`${mainClasses}-wrap-${this.props.clientId}`}>
                <div className={`premium-icon-list-${layoutPos}`}
                    style={{
                        textAlign: align,
                        justifyContent: align == "right" ? "flex-end" : align
                    }}>
                    {
                        repeaterBulletList.map((icon, index) => {

                            // if (multiTitleCount <= index) {
                            //     return
                            // }

                            let image_icon_html = ""
                            if (icon.showBulletIcon) {
                                if (icon.image_icon == "icon") {
                                    if (icon.icon) {
                                        image_icon_html = <span className="premium-icon-list__content-icon">
                                            <i className={`${icon.icon}`} />
                                        </span>
                                    }
                                } else {
                                    if (icon.image) {
                                        image_icon_html = <img src={icon.image.url} />
                                    }
                                }
                            }


                            let target = (linkTarget) ? "_blank" : "_self"

                            return (
                                <div
                                    className={classnames(
                                        `premium-icon-list-content${index}`,
                                        "premium-icon-list__wrapper"
                                    )}
                                    key={index}
                                    target={target}
                                    rel="noopener noreferrer"
                                >
                                    <div className="premium-icon-list__content-wrap" style={{
                                        justifyContent: align == "right" ? align : align,
                                        display: iconPosition == "left" ? "flex" : "inline-flex",
                                        flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "right" ? align == "right" ? "row-reverse" : "row-reverse" : align == "right" ? "row-reverse" : ""
                                    }}>
                                        <span className="premium-icon-list__icon-wrap"
                                            style={{
                                                borderStyle: borderType,
                                                borderWidth: borderWidth + "px",
                                                borderRadius: borderRadius || 0 + "px",
                                                borderColor: borderColor,
                                                overflow: "hidden"
                                            }}
                                        >{image_icon_html}</span>
                                        <div className="premium-icon-list__label-wrap">
                                            <RichText
                                                tagName="div"
                                                placeholder={__("Title Name")}
                                                value={icon.label}
                                                className='premium-icon-list__label'
                                                onChange={value => {
                                                    this.saveIcons({ label: value }, index)
                                                }}
                                                // placeholder={__("Title")}
                                                multiline={false}
                                                style={{
                                                    fontFamily: titleFont,
                                                    letterSpacing: titleLetter + "px",
                                                    textTransform: titleUpper ? "uppercase" : "none",
                                                    fontStyle: titleStyle,
                                                    fontWeight: titleWeight
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        ]
    }
}

export default edit