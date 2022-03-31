import classnames from "classnames"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import icons from '../../components/align';

const { withSelect } = wp.data

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
    RichText
} = wp.blockEditor

const {
    PanelBody,
    SelectControl,
    Toolbar,
    Button,
    TextControl,
    ToggleControl,
    Tooltip
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
    onRemove,
    newIndex,
    value,
    showContent,
    changeLabel,
    toggleShowBulletIcon,
    selectIconType,
    changeIcons,
    selectImage,
    removeImage,
    toggleIconLink,
    saveLink,
    openLink
}) => <li tabIndex={0} style={{ listStyle: 'none' }}>
        <span className="premium-bulletList__container">
            <span className="premium-bulletList__dragHandle"></span>
            <div className="premium-bulletList__content" onClick={() => showContent(newIndex)}>
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
                    onChange={value => selectIconType(value, newIndex)}
                />
                    {"icon" == value.image_icon &&
                        <Fragment>
                            <p>{__("Icon")}</p>
                            <FontIconPicker
                                icons={iconsList}
                                value={value.icon}
                                onChange={value => changeIcons(value, newIndex)}
                                isMulti={false}
                                appendTo="body"
                                noSelectedPlaceholder={__("Select Icon")}
                            />
                        </Fragment>}

                    {"image" == value.image_icon &&
                        <Fragment>
                            {value.image ?
                                <img src={value.image.url} width="100%" height="auto" />
                                : ""}
                            <MediaUpload
                                title={__("Select Image")}
                                onSelect={value => selectImage(value, newIndex)}
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
                                    onClick={() => removeImage(newIndex)}
                                    isLink isDestructive>
                                    {__("Remove Image")}
                                </Button>
                            }
                        </Fragment>
                    }
                </div>
                }
                <hr />
                <ToggleControl
                    label={__("Link")}
                    checked={value.disableLink}
                    onChange={value => toggleIconLink(value, newIndex)}
                />
                {value.disableLink &&
                    <Fragment>
                        <p>{__("URL")}</p>
                        <TextControl
                            value={value.link}
                            onChange={value => saveLink(value, newIndex)}
                            placeholder={__("Enter URL")}
                        />
                        <ToggleControl
                            label={__("Open links in new tab")}
                            checked={value.linkTarget}
                            onChange={value => openLink(value, newIndex)}
                        />
                    </Fragment>
                }
            </div>
        )}
    </li>);

const SortableList = SortableContainer(({
    items,
    onRemove,
    showContent,
    changeLabel,
    toggleShowBulletIcon,
    selectIconType,
    changeIcons,
    selectImage,
    removeImage,
    toggleIconLink,
    saveLink,
    openLink
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
                selectIconType={selectIconType}
                changeIcons={changeIcons}
                selectImage={selectImage}
                removeImage={removeImage}
                toggleIconLink={toggleIconLink}
                saveLink={saveLink}
                openLink={openLink}
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
        document.head.appendChild($style);
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

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            layoutPos,
            iconPosition,
            align,
            className,
            repeaterBulletList,
            bulletAlign,
            bulletIconStyles,
            bulletIconBorderUpdated,
            bulletIconBorderTop,
            bulletIconBorderRight,
            bulletIconBorderBottom,
            bulletIconBorderLeft,
            bulletIconBorderWidth,
            bulletIconmarginT,
            bulletIconmarginR,
            bulletIconmarginB,
            bulletIconmarginL,
            bulletIconmarginTTablet,
            bulletIconmarginRTablet,
            bulletIconmarginBTablet,
            bulletIconmarginLTablet,
            bulletIconmarginTMobile,
            bulletIconmarginRMobile,
            bulletIconmarginBMobile,
            bulletIconmarginLMobile,
            bulletIconpaddingTop,
            bulletIconpaddingRight,
            bulletIconpaddingBottom,
            bulletIconpaddingLeft,
            bulletIconpaddingTTablet,
            bulletIconpaddingRTablet,
            bulletIconpaddingBTablet,
            bulletIconpaddingLTablet,
            bulletIconpaddingTMobile,
            bulletIconpaddingRMobile,
            bulletIconpaddingBMobile,
            bulletIconpaddingLMobile,
            titleStyles,
            titlemarginT,
            titlemarginR,
            titlemarginB,
            titlemarginL,
            titlemarginTTablet,
            titlemarginRTablet,
            titlemarginBTablet,
            titlemarginLTablet,
            titlemarginTMobile,
            titlemarginRMobile,
            titlemarginBMobile,
            titlemarginLMobile,
            generalStyles,
            generalBorderWidth,
            generalBorderTop,
            generalBorderRight,
            generalBorderBottom,
            generalBorderLeft,
            generalBorderUpdated,
            generalmarginT,
            generalmarginR,
            generalmarginB,
            generalmarginL,
            generalmarginTTablet,
            generalmarginRTablet,
            generalmarginBTablet,
            generalmarginLTablet,
            generalmarginTMobile,
            generalmarginRMobile,
            generalmarginBMobile,
            generalmarginLMobile,
            generalpaddingTop,
            generalpaddingRight,
            generalpaddingBottom,
            generalpaddingLeft,
            generalpaddingTTablet,
            generalpaddingRTablet,
            generalpaddingBTablet,
            generalpaddingLTablet,
            generalpaddingTMobile,
            generalpaddingRMobile,
            generalpaddingBMobile,
            generalpaddingLMobile,
            titleFont
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
                label: __("After"),
                value: "after"
            },
            {
                label: __("Before"),
                value: "before"
            },
            {
                label: __("Top"),
                value: "top"
            }
        ];

        const ALIGNS = ["left", "center", "right"];

        const BulletIconSize = this.getPreviewSize(this.props.deviceType, bulletIconStyles[0].bulletListfontSize, bulletIconStyles[0].bulletListfontSizeTablet, bulletIconStyles[0].bulletListfontSizeMobile);
        const BulletIconMarginTop = this.getPreviewSize(this.props.deviceType, bulletIconmarginT, bulletIconmarginTTablet, bulletIconmarginTMobile);
        const BulletIconMarginRight = this.getPreviewSize(this.props.deviceType, bulletIconmarginR, bulletIconmarginRTablet, bulletIconmarginRMobile);
        const BulletIconMarginBottom = this.getPreviewSize(this.props.deviceType, bulletIconmarginB, bulletIconmarginBTablet, bulletIconmarginBMobile);
        const BulletIconMarginLeft = this.getPreviewSize(this.props.deviceType, bulletIconmarginL, bulletIconmarginLTablet, bulletIconmarginLMobile);
        const BulletIconPaddingTop = this.getPreviewSize(this.props.deviceType, bulletIconpaddingTop, bulletIconpaddingTTablet, bulletIconpaddingTMobile);
        const BulletIconPaddingRight = this.getPreviewSize(this.props.deviceType, bulletIconpaddingRight, bulletIconpaddingRTablet, bulletIconpaddingRMobile);
        const BulletIconPaddingBottom = this.getPreviewSize(this.props.deviceType, bulletIconpaddingBottom, bulletIconpaddingBTablet, bulletIconpaddingBMobile);
        const BulletIconPaddingLeft = this.getPreviewSize(this.props.deviceType, bulletIconpaddingLeft, bulletIconpaddingLTablet, bulletIconpaddingLMobile);
        const TitleSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titlefontSizeTablet, titleStyles[0].titlefontSizeMobile);
        const TitleMarginTop = this.getPreviewSize(this.props.deviceType, titlemarginT, titlemarginTTablet, titlemarginTMobile);
        const TitleMarginRight = this.getPreviewSize(this.props.deviceType, titlemarginR, titlemarginRTablet, titlemarginRMobile);
        const TitleMarginBottom = this.getPreviewSize(this.props.deviceType, titlemarginB, titlemarginBTablet, titlemarginBMobile);
        const TitleMarginLeft = this.getPreviewSize(this.props.deviceType, titlemarginL, titlemarginLTablet, titlemarginLMobile);
        const GeneralMarginTop = this.getPreviewSize(this.props.deviceType, generalmarginT, generalmarginTTablet, generalmarginTMobile);
        const GeneralMarginRight = this.getPreviewSize(this.props.deviceType, generalmarginR, generalmarginRTablet, generalmarginRMobile);
        const GeneralMarginBottom = this.getPreviewSize(this.props.deviceType, generalmarginB, generalmarginBTablet, generalmarginBMobile);
        const GeneralMarginLeft = this.getPreviewSize(this.props.deviceType, generalmarginL, generalmarginLTablet, generalmarginLMobile);
        const GeneralPaddingTop = this.getPreviewSize(this.props.deviceType, generalpaddingTop, generalpaddingTTablet, generalpaddingTMobile);
        const GeneralPaddingRight = this.getPreviewSize(this.props.deviceType, generalpaddingRight, generalpaddingRTablet, generalpaddingRMobile);
        const GeneralPaddingBottom = this.getPreviewSize(this.props.deviceType, generalpaddingBottom, generalpaddingBTablet, generalpaddingBMobile);
        const GeneralPaddingLeft = this.getPreviewSize(this.props.deviceType, generalpaddingLeft, generalpaddingLTablet, generalpaddingLMobile);

        const addNewBulletList = () => {
            let cloneIcons = [...repeaterBulletList]
            cloneIcons.push({
                id: cloneIcons.length + 1,
                label: "Title ",
                image_icon: "icon",
                icon: "fa fa-arrow-circle-right",
                image: '',
                icon_color: cloneIcons[0].icon_color,
                icon_hover_color: cloneIcons[0].icon_hover_color,
                icon_bg_color: cloneIcons[0].icon_bg_color,
                icon_bg_hover_color: cloneIcons[0].icon_bg_hover_color,
                item_bg_color: cloneIcons[0].item_bg_color,
                item_bg_hover_color: cloneIcons[0].item_bg_hover_color,
                link: "#",
                target: false,
                disableLink: false,
                showContent: false,
                showBulletIcon: true,
                linkTarget: false
            })
            setAttributes({ repeaterBulletList: cloneIcons })
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

        const onRepeaterChange = (attr, value, index) => {
            const items = repeaterBulletList;
            return items.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }
                return item;
            });
        };

        const showContent = (index, item) => {
            return repeaterBulletList.map((item, i) => {
                if (index == i) {
                    setAttributes({
                        repeatertabs: onRepeaterChange(
                            "showContent",
                            item.showContent ? false : true,
                            index
                        )
                    })
                }
                else {
                    setAttributes({
                        repeaterBulletList: onRepeaterChange(
                            "showContent",
                            false,
                            i
                        )
                    })
                }
            })
        }

        const changeLabel = (item, index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "label",
                    item,
                    index
                )
            })
        }

        const toggleShowBulletIcon = (value, index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "showBulletIcon",
                    value,
                    index
                )
            })
        }

        const selectIconType = (value, index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "image_icon",
                    value,
                    index
                )
            })
        }

        const changeIcons = (value, index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "icon",
                    value,
                    index
                )
            })
        }

        const selectImage = (value, index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "image",
                    value,
                    index
                )
            })
        }

        const removeImage = (index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "image",
                    '',
                    index
                )
            })
        }

        const toggleIconLink = (value, index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "disableLink",
                    value,
                    index
                )
            })
        }

        const saveLink = (value, index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "link",
                    value,
                    index
                )
            })
        }

        const openLink = (value, index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "linkTarget",
                    value,
                    index
                )
            })
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
            if (['button', 'div', 'input', 'i', 'select', 'option'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
                return true; // Return true to cancel sorting
            }
        }

        const saveBulletIconStyles = (value) => {
            console.log(value)
            const newUpdate = bulletIconStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                bulletIconStyles: newUpdate,
            });
        }

        const saveTitleStyles = (value) => {
            const newUpdate = titleStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                titleStyles: newUpdate,
            });
        }

        const saveGeneralStyles = (value) => {
            const newUpdate = generalStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                generalStyles: newUpdate,
            });
        }

        var element = document.getElementById("premium-style-icon-list-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            // element.innerHTML = styling(this.props)
        }

        const mainClasses = classnames(className, "premium-bullet-list");

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
                            selectIconType={(value, i) => selectIconType(value, i)}
                            changeIcons={(value, i) => changeIcons(value, i)}
                            selectImage={(value, i) => selectImage(value, i)}
                            removeImage={(value, i) => removeImage(value, i)}
                            toggleIconLink={(value, i) => toggleIconLink(value, i)}
                            saveLink={(value, i) => saveLink(value, i)}
                            openLink={(value, i) => openLink(value, i)}
                            shouldCancelStart={shouldCancelStart}
                        />
                        < div className="premium-bullet-list-btn__wrap" >
                            <button
                                className={"premium-bullet-list-btn"}
                                onClick={() => addNewBulletList()}
                            >
                                <i className="dashicons dashicons-plus premium-bullet-list-icon" />
                                {__("Add New Item")}
                            </button>
                        </div>
                    </PanelBody>
                    <PanelBody
                        title={__("Display Options")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Layout Type")}
                            options={LAYOUT}
                            value={layoutPos}
                            onChange={newValue => setAttributes({ layoutPos: newValue })}
                        />
                        <SelectControl
                            label={__("Bullet Position")}
                            options={POSITION}
                            value={iconPosition}
                            onChange={newValue => setAttributes({ iconPosition: newValue })}
                        />
                        <div>
                            <label>{__('Bullet Alignment')}</label>
                            {iconPosition !== 'top' ? <div className="bullet-list-button-list">
                                <Tooltip text={__('Top')}>
                                    <button
                                        onClick={() => setAttributes({ bulletAlign: 'flex-start' })}
                                        className={"bullet-list-button" + (bulletAlign === 'flex-start' ? ' active' : '')}
                                    >{icons.vertical_top}</button>
                                </Tooltip>

                                <Tooltip text={__('Middle')} >
                                    <button
                                        onClick={() => setAttributes({ bulletAlign: 'center' })}
                                        className={"bullet-list-button" + (bulletAlign === 'center' ? ' active' : '')}
                                    >{icons.vertical_middle}</button>
                                </Tooltip>

                                <Tooltip text={__('Bottom')} >
                                    <button
                                        onClick={() => setAttributes({ bulletAlign: 'flex-end' })}
                                        className={"bullet-list-button" + (bulletAlign === 'flex-end' ? ' active' : '')}
                                    >{icons.vertical_bottom}</button>
                                </Tooltip>
                            </div>
                                : <Toolbar
                                    controls={ALIGNS.map(contentAlign => ({
                                        icon: "editor-align" + contentAlign,
                                        isActive: contentAlign === bulletAlign,
                                        onClick: () => setAttributes({ bulletAlign: contentAlign })
                                    }))}
                                />
                            }
                        </div>
                    </PanelBody>
                    <PanelBody
                        title={__("General Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <div className="premium-control-toggle">
                            <AdvancedPopColorControl
                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                colorValue={generalStyles[0].generalBackgroundColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveGeneralStyles({
                                        generalBackgroundColor: newValue
                                    })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <AdvancedPopColorControl
                                label={__("Hover Background Color", 'premium-block-for-gutenberg')}
                                colorValue={generalStyles[0].generalHoverBackgroundColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveGeneralStyles({
                                        generalHoverBackgroundColor: newValue
                                    })
                                }
                            />
                        </div>
                        <PremiumBoxShadow
                            label="Box Shadow"
                            inner={true}
                            color={generalStyles[0].generalShadowColor}
                            blur={generalStyles[0].generalShadowBlur}
                            horizontal={generalStyles[0].generalShadowHorizontal}
                            vertical={generalStyles[0].generalShadowVertical}
                            position={generalStyles[0].generalShadowPosition}
                            onChangeColor={newColor => saveGeneralStyles({ generalShadowColor: newColor === undefined ? "transparent" : newColor })}
                            onChangeBlur={newBlur => saveGeneralStyles({ generalShadowBlur: newBlur === undefined ? 0 : newBlur })}
                            onChangehHorizontal={newValue => saveGeneralStyles({ generalShadowHorizontal: newValue === undefined ? 0 : newValue })}
                            onChangeVertical={newValue => saveGeneralStyles({ generalShadowVertical: newValue === undefined ? 0 : newValue })}
                            onChangePosition={newValue => saveGeneralStyles({ generalShadowPosition: newValue === undefined ? 0 : newValue })}
                        />
                        <PremiumBoxShadow
                            label="Hover Box Shadow"
                            inner={true}
                            color={generalStyles[0].generalHoverShadowColor}
                            blur={generalStyles[0].generalHoverShadowBlur}
                            horizontal={generalStyles[0].generalHoverShadowHorizontal}
                            vertical={generalStyles[0].generalHoverShadowVertical}
                            position={generalStyles[0].generalHoverShadowPosition}
                            onChangeColor={newColor => saveGeneralStyles({ generalHoverShadowColor: newColor === undefined ? "transparent" : newColor })}
                            onChangeBlur={newBlur => saveGeneralStyles({ generalHoverShadowBlur: newBlur === undefined ? 0 : newBlur })}
                            onChangehHorizontal={newValue => saveGeneralStyles({ generalHoverShadowHorizontal: newValue === undefined ? 0 : newValue })}
                            onChangeVertical={newValue => saveGeneralStyles({ generalHoverShadowVertical: newValue === undefined ? 0 : newValue })}
                            onChangePosition={newValue => saveGeneralStyles({ generalHoverShadowPosition: newValue === undefined ? 0 : newValue })}
                        />
                        <PremiumBorder
                            borderType={generalStyles[0].generalborderType}
                            borderWidth={generalBorderWidth}
                            top={generalBorderTop}
                            right={generalBorderRight}
                            bottom={generalBorderBottom}
                            left={generalBorderLeft}
                            borderColor={generalStyles[0].generalborderColor}
                            borderRadius={generalStyles[0].generalborderRadius}
                            onChangeType={newType => saveGeneralStyles({ generalborderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    generalBorderUpdated: true,
                                    generalBorderTop: top,
                                    generalBorderRight: right,
                                    generalBorderBottom: bottom,
                                    generalBorderLeft: left,
                                })
                            }
                            onChangeColor={colorValue =>
                                saveGeneralStyles({ generalborderColor: colorValue })
                            }
                            onChangeRadius={newrRadius =>
                                saveGeneralStyles({ generalborderRadius: newrRadius })
                            }
                        />
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={generalmarginT}
                            marginRight={generalmarginR}
                            marginBottom={generalmarginB}
                            marginLeft={generalmarginL}
                            marginTopTablet={generalmarginTTablet}
                            marginRightTablet={generalmarginRTablet}
                            marginBottomTablet={generalmarginBTablet}
                            marginLeftTablet={generalmarginLTablet}
                            marginTopMobile={generalmarginTMobile}
                            marginRightMobile={generalmarginRMobile}
                            marginBottomMobile={generalmarginBMobile}
                            marginLeftMobile={generalmarginLMobile}
                            showUnits={true}
                            onChangeMarSizeUnit={newvalue => saveGeneralStyles({ generalmarginType: newvalue })}
                            selectedUnit={generalStyles[0].generalmarginType}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ generalmarginT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ generalmarginTTablet: newValue })
                                    } else {
                                        setAttributes({ generalmarginTMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ generalmarginR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ generalmarginRTablet: newValue })
                                    } else {
                                        setAttributes({ generalmarginRMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ generalmarginB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ generalmarginBTablet: newValue })
                                    } else {
                                        setAttributes({ generalmarginBMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ generalmarginL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ generalmarginLTablet: newValue })
                                    } else {
                                        setAttributes({ generalmarginLMobile: newValue })
                                    }
                                }
                            }

                        />
                        <PremiumResponsivePadding
                            paddingTop={generalpaddingTop}
                            paddingRight={generalpaddingRight}
                            paddingBottom={generalpaddingBottom}
                            paddingLeft={generalpaddingLeft}
                            paddingTopTablet={generalpaddingTTablet}
                            paddingRightTablet={generalpaddingRTablet}
                            paddingBottomTablet={generalpaddingBTablet}
                            paddingLeftTablet={generalpaddingLTablet}
                            paddingTopMobile={generalpaddingTMobile}
                            paddingRightMobile={generalpaddingRMobile}
                            paddingBottomMobile={generalpaddingBMobile}
                            paddingLeftMobile={generalpaddingLMobile}
                            showUnits={true}
                            selectedUnit={generalStyles[0].generalpaddingUnit}
                            onChangePadSizeUnit={newvalue => saveGeneralStyles({ generalpaddingUnit: newvalue })}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ generalpaddingTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ generalpaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ generalpaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ generalpaddingRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ generalpaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ generalpaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ generalpaddingBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ generalpaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ generalpaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ generalpaddingLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ generalpaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ generalpaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Bullet Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ResponsiveRangeControl
                            label={__("Size", 'premium-block-for-gutenberg')}
                            value={bulletIconStyles[0].bulletListfontSize}
                            tabletValue={bulletIconStyles[0].bulletListfontSizeTablet}
                            mobileValue={bulletIconStyles[0].bulletListfontSizeMobile}
                            onChange={(value) => saveBulletIconStyles({ bulletListfontSize: value })}
                            onChangeTablet={(value) => saveBulletIconStyles({ bulletListfontSizeTablet: value })}
                            onChangeMobile={(value) => saveBulletIconStyles({ bulletListfontSizeMobile: value })}
                            onChangeUnit={(key) =>
                                saveBulletIconStyles({ bulletListfontSizeType: key })
                            }
                            unit={bulletIconStyles[0].bulletListfontSizeType}
                            showUnit={true}
                            defaultValue={20}
                            min={1}
                            max={100}
                        />
                        <AdvancedPopColorControl
                            label={__("Color", 'premium-block-for-gutenberg')}
                            colorValue={bulletIconStyles[0].bulletIconColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveBulletIconStyles({
                                    bulletIconColor: newValue
                                })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Hover Color", 'premium-block-for-gutenberg')}
                            colorValue={bulletIconStyles[0].bulletIconHoverColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveBulletIconStyles({
                                    bulletIconHoverColor: newValue
                                })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Background Color", 'premium-block-for-gutenberg')}
                            colorValue={bulletIconStyles[0].bulletIconBackgroundColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveBulletIconStyles({
                                    bulletIconBackgroundColor: newValue
                                })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Hover Background Color", 'premium-block-for-gutenberg')}
                            colorValue={bulletIconStyles[0].bulletIconHoverBackgroundColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveBulletIconStyles({
                                    bulletIconHoverBackgroundColor: newValue
                                })
                            }
                        />
                        <PremiumBorder
                            borderType={bulletIconStyles[0].bulletIconborderType}
                            borderWidth={bulletIconBorderWidth}
                            top={bulletIconBorderTop}
                            right={bulletIconBorderRight}
                            bottom={bulletIconBorderBottom}
                            left={bulletIconBorderLeft}
                            borderColor={bulletIconStyles[0].bulletIconborderColor}
                            borderRadius={bulletIconStyles[0].bulletIconborderRadius}
                            onChangeType={newType => saveBulletIconStyles({ bulletIconborderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    bulletIconBorderUpdated: true,
                                    bulletIconBorderTop: top,
                                    bulletIconBorderRight: right,
                                    bulletIconBorderBottom: bottom,
                                    bulletIconBorderLeft: left,
                                })
                            }
                            onChangeColor={colorValue =>
                                saveBulletIconStyles({ bulletIconborderColor: colorValue })
                            }
                            onChangeRadius={newrRadius =>
                                saveBulletIconStyles({ bulletIconborderRadius: newrRadius })
                            }
                        />
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={bulletIconmarginT}
                            marginRight={bulletIconmarginR}
                            marginBottom={bulletIconmarginB}
                            marginLeft={bulletIconmarginL}
                            marginTopTablet={bulletIconmarginTTablet}
                            marginRightTablet={bulletIconmarginRTablet}
                            marginBottomTablet={bulletIconmarginBTablet}
                            marginLeftTablet={bulletIconmarginLTablet}
                            marginTopMobile={bulletIconmarginTMobile}
                            marginRightMobile={bulletIconmarginRMobile}
                            marginBottomMobile={bulletIconmarginBMobile}
                            marginLeftMobile={bulletIconmarginLMobile}
                            showUnits={true}
                            onChangeMarSizeUnit={newvalue => saveBulletIconStyles({ bulletIconmarginType: newvalue })}
                            selectedUnit={bulletIconStyles[0].bulletIconmarginType}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ bulletIconmarginT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ bulletIconmarginTTablet: newValue })
                                    } else {
                                        setAttributes({ bulletIconmarginTMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ bulletIconmarginR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ bulletIconmarginRTablet: newValue })
                                    } else {
                                        setAttributes({ bulletIconmarginRMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ bulletIconmarginB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ bulletIconmarginBTablet: newValue })
                                    } else {
                                        setAttributes({ bulletIconmarginBMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ bulletIconmarginL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ bulletIconmarginLTablet: newValue })
                                    } else {
                                        setAttributes({ bulletIconmarginLMobile: newValue })
                                    }
                                }
                            }

                        />
                        <PremiumResponsivePadding
                            paddingTop={bulletIconpaddingTop}
                            paddingRight={bulletIconpaddingRight}
                            paddingBottom={bulletIconpaddingBottom}
                            paddingLeft={bulletIconpaddingLeft}
                            paddingTopTablet={bulletIconpaddingTTablet}
                            paddingRightTablet={bulletIconpaddingRTablet}
                            paddingBottomTablet={bulletIconpaddingBTablet}
                            paddingLeftTablet={bulletIconpaddingLTablet}
                            paddingTopMobile={bulletIconpaddingTMobile}
                            paddingRightMobile={bulletIconpaddingRMobile}
                            paddingBottomMobile={bulletIconpaddingBMobile}
                            paddingLeftMobile={bulletIconpaddingLMobile}
                            showUnits={true}
                            selectedUnit={bulletIconStyles[0].bulletIconpaddingUnit}
                            onChangePadSizeUnit={newvalue => saveBulletIconStyles({ bulletIconpaddingUnit: newvalue })}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ bulletIconpaddingTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ bulletIconpaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ bulletIconpaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ bulletIconpaddingRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ bulletIconpaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ bulletIconpaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ bulletIconpaddingBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ bulletIconpaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ bulletIconpaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ bulletIconpaddingLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ bulletIconpaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ bulletIconpaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Title Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                            setAttributes={saveTitleStyles}
                            fontSizeType={{ value: titleStyles[0].titlefontSizeType, label: __("titlefontSizeType") }}
                            fontSize={titleStyles[0].titleSize}
                            fontSizeMobile={titleStyles[0].titlefontSizeMobile}
                            fontSizeTablet={titleStyles[0].titlefontSizeTablet}
                            onChangeSize={newSize => saveTitleStyles({ titleSize: newSize })}
                            onChangeTabletSize={newSize => saveTitleStyles({ titlefontSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveTitleStyles({ titlefontSizeMobile: newSize })}
                            weight={titleStyles[0].titleWeight}
                            style={titleStyles[0].titleStyle}
                            spacing={titleStyles[0].titleLetter}
                            upper={titleStyles[0].titleUpper}
                            line={titleStyles[0].titleLine}
                            fontFamily={titleStyles[0].titleFontFamily}
                            onChangeWeight={newWeight =>
                                saveTitleStyles({ titleWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                saveTitleStyles({ titleStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                saveTitleStyles({ titleLetter: newValue })
                            }
                            onChangeUpper={check => saveTitleStyles({ titleUpper: check })}
                            onChangeLine={newValue => saveTitleStyles({ titleLine: newValue })}
                            onChangeFamily={(fontFamily) => saveTitleStyles({ titleFontFamily: fontFamily })}
                        />
                        <div className="premium-control-toggle">
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].titleColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        titleColor: newValue
                                    })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <AdvancedPopColorControl
                                label={__("Hover Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].titleHoverColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        titleHoverColor: newValue
                                    })
                                }
                            />
                        </div>
                        <PremiumTextShadow
                            color={titleStyles[0].titleshadowColor}
                            blur={titleStyles[0].titleshadowBlur}
                            horizontal={titleStyles[0].titleshadowHorizontal}
                            vertical={titleStyles[0].titleshadowVertical}
                            onChangeColor={newColor =>
                                saveTitleStyles({ titleshadowColor: newColor })
                            }
                            onChangeBlur={newBlur => saveTitleStyles({ titleshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveTitleStyles({ titleshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveTitleStyles({ titleshadowVertical: newValue })
                            }
                        />
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={titlemarginT}
                            marginRight={titlemarginR}
                            marginBottom={titlemarginB}
                            marginLeft={titlemarginL}
                            marginTopTablet={titlemarginTTablet}
                            marginRightTablet={titlemarginRTablet}
                            marginBottomTablet={titlemarginBTablet}
                            marginLeftTablet={titlemarginLTablet}
                            marginTopMobile={titlemarginTMobile}
                            marginRightMobile={titlemarginRMobile}
                            marginBottomMobile={titlemarginBMobile}
                            marginLeftMobile={titlemarginLMobile}
                            showUnits={true}
                            onChangeMarSizeUnit={newvalue => saveTitleStyles({ titlemarginType: newvalue })}
                            selectedUnit={titleStyles[0].titlemarginType}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlemarginT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlemarginTTablet: newValue })
                                    } else {
                                        setAttributes({ titlemarginTMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlemarginR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlemarginRTablet: newValue })
                                    } else {
                                        setAttributes({ titlemarginRMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlemarginB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlemarginBTablet: newValue })
                                    } else {
                                        setAttributes({ titlemarginBMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlemarginL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlemarginLTablet: newValue })
                                    } else {
                                        setAttributes({ titlemarginLMobile: newValue })
                                    }
                                }
                            }

                        />
                    </PanelBody>
                </InspectorControls >
            ),
            <div className={classnames(
                className,
                `premium-bullet-list-${this.props.clientId}`
            )} style={{
                textAlign: align,
            }} id={`premium-bullet-list-${this.props.clientId}`}>
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `.premium-bullet-list__content-icon i:hover {`,
                            `color: ${bulletIconStyles[0].bulletIconHoverColor} !important;`,
                            `background-color: ${bulletIconStyles[0].bulletIconHoverBackgroundColor} !important;`,
                            "}",
                            `.premium-bullet-list__label-wrap .premium-bullet-list__label:hover {`,
                            `color: ${titleStyles[0].titleHoverColor} !important;`,
                            "}",
                            `.premium-bullet-list__wrapper:hover {`,
                            `background-color: ${generalStyles[0].generalHoverBackgroundColor} !important;`,
                            `box-shadow: ${generalStyles[0].generalHoverShadowHorizontal}px ${generalStyles[0].generalHoverShadowVertical}px ${generalStyles[0].generalHoverShadowBlur}px ${generalStyles[0].generalHoverShadowColor} ${generalStyles[0].generalHoverShadowPosition} !important;`,
                            "}",
                        ].join("\n")
                    }}
                />
                <ul className={`premium-bullet-list-${layoutPos} premium-bullet-list`}
                    style={{
                        textAlign: align,
                        justifyContent: align == "right" ? "flex-end" : align,
                        // margin: iconPosition !== 'top' ? '0px' : '10px 10px 10px 10px !important'
                    }}>
                    {/* <ul style={{ margin: iconPosition !== 'top' ? '0px' : '10px 10px 10px 10px !important' }}> */}
                    {
                        repeaterBulletList.map((icon, index) => {

                            let image_icon_html = ""
                            if (icon.showBulletIcon) {
                                if (icon.image_icon == "icon") {
                                    if (icon.icon) {

                                        image_icon_html = <span className="premium-bullet-list__content-icon">
                                            <i
                                                className={`${icon.icon}`}
                                                style={{
                                                    fontSize: BulletIconSize + bulletIconStyles[0].bulletListfontSizeType,
                                                    color: bulletIconStyles[0].bulletIconColor,
                                                    backgroundColor: bulletIconStyles[0].bulletIconBackgroundColor,
                                                    paddingTop: BulletIconPaddingTop + bulletIconStyles[0].bulletIconpaddingUnit,
                                                    paddingBottom: BulletIconPaddingBottom + bulletIconStyles[0].bulletIconpaddingUnit,
                                                    paddingLeft: BulletIconPaddingLeft + bulletIconStyles[0].bulletIconpaddingUnit,
                                                    paddingRight: BulletIconPaddingRight + bulletIconStyles[0].bulletIconpaddingUnit,
                                                    borderStyle: bulletIconStyles[0].bulletIconborderType,
                                                    borderWidth: bulletIconBorderUpdated
                                                        ? `${bulletIconBorderTop}px ${bulletIconBorderRight}px ${bulletIconBorderBottom}px ${bulletIconBorderLeft}px`
                                                        : bulletIconBorderWidth + "px",
                                                    borderRadius: bulletIconStyles[0].bulletIconborderRadius || 0 + "px",
                                                    borderColor: bulletIconStyles[0].bulletIconborderColor,
                                                    // verticalAlign: bulletAlign == 'left' ?
                                                }}
                                            />
                                        </span>
                                    }
                                } else {
                                    if (icon.image) {

                                        image_icon_html = <img
                                            src={icon.image.url}
                                            style={{
                                                width: BulletIconSize + bulletIconStyles[0].bulletListfontSizeType,
                                                height: BulletIconSize + bulletIconStyles[0].bulletListfontSizeType,
                                                paddingTop: BulletIconPaddingTop + bulletIconStyles[0].bulletIconpaddingUnit,
                                                paddingBottom: BulletIconPaddingBottom + bulletIconStyles[0].bulletIconpaddingUnit,
                                                paddingLeft: BulletIconPaddingLeft + bulletIconStyles[0].bulletIconpaddingUnit,
                                                paddingRight: BulletIconPaddingRight + bulletIconStyles[0].bulletIconpaddingUnit,
                                                borderStyle: bulletIconStyles[0].bulletIconborderType,
                                                borderWidth: bulletIconBorderUpdated
                                                    ? `${bulletIconBorderTop}px ${bulletIconBorderRight}px ${bulletIconBorderBottom}px ${bulletIconBorderLeft}px`
                                                    : bulletIconBorderWidth + "px",
                                                borderRadius: bulletIconStyles[0].bulletIconborderRadius || 0 + "px",
                                                borderColor: bulletIconStyles[0].bulletIconborderColor,
                                            }}
                                        />
                                    }
                                }
                            }

                            let target = (icon.linkTarget) ? "_blank" : "_self"

                            return (
                                <li
                                    className={classnames(
                                        `premium-bullet-list-content${index}`,
                                        "premium-bullet-list__wrapper"
                                    )}
                                    key={index}
                                    target={target}
                                    rel="noopener noreferrer"
                                    style={{
                                        textAlign: align,
                                        justifyContent: align == "right" ? "flex-end" : align,
                                        backgroundColor: generalStyles[0].generalBackgroundColor,
                                        borderStyle: generalStyles[0].generalborderType,
                                        borderWidth: generalBorderUpdated
                                            ? `${generalBorderTop}px ${generalBorderRight}px ${generalBorderBottom}px ${generalBorderLeft}px`
                                            : generalBorderWidth + "px",
                                        borderRadius: generalStyles[0].generalborderRadius || 0 + "px",
                                        borderColor: generalStyles[0].generalborderColor,
                                        paddingTop: GeneralPaddingTop + generalStyles[0].generalpaddingUnit,
                                        paddingBottom: GeneralPaddingBottom + generalStyles[0].generalpaddingUnit,
                                        paddingLeft: GeneralPaddingLeft + generalStyles[0].generalpaddingUnit,
                                        paddingRight: GeneralPaddingRight + generalStyles[0].generalpaddingUnit,
                                        marginTop: GeneralMarginTop + generalStyles[0].generalmarginType,
                                        marginBottom: GeneralMarginBottom + generalStyles[0].generalmarginType,
                                        marginLeft: GeneralMarginLeft + generalStyles[0].generalmarginType,
                                        marginRight: GeneralMarginRight + generalStyles[0].generalmarginType,
                                        boxShadow: `${generalStyles[0].generalShadowHorizontal}px ${generalStyles[0].generalShadowVertical}px ${generalStyles[0].generalShadowBlur}px ${generalStyles[0].generalShadowColor} ${generalStyles[0].generalShadowPosition}`,
                                    }}
                                >
                                    <div className="premium-bullet-list__content-wrap" style={{
                                        justifyContent: align == "right" ? align : align,
                                        display: iconPosition == "before" ? "flex" : "inline-flex",
                                        flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? align == "right" ? "row-reverse" : "row-reverse" : align == "right" ? "row-reverse" : "",
                                        marginTop: TitleMarginTop + titleStyles[0].titlemarginType,
                                        marginBottom: TitleMarginBottom + titleStyles[0].titlemarginType,
                                        marginLeft: TitleMarginLeft + titleStyles[0].titlemarginType,
                                        marginRight: TitleMarginRight + titleStyles[0].titlemarginType,
                                    }}>
                                        {icon.showBulletIcon && <span className={`premium-bullet-list__content-wrap-${bulletAlign}`}
                                            style={{
                                                // overflow: "hidden",
                                                alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                marginTop: BulletIconMarginTop + bulletIconStyles[0].bulletIconmarginType,
                                                marginBottom: BulletIconMarginBottom + bulletIconStyles[0].bulletIconmarginType,
                                                marginLeft: BulletIconMarginLeft + bulletIconStyles[0].bulletIconmarginType,
                                                marginRight: BulletIconMarginRight + bulletIconStyles[0].bulletIconmarginType,
                                                textAlign: bulletAlign,
                                                justifyContent: bulletAlign,
                                                alignItems: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                            }}
                                        >{image_icon_html}</span>}
                                        <div className="premium-bullet-list__label-wrap">
                                            <RichText
                                                tagName="span"
                                                placeholder={__("Title Name")}
                                                value={icon.label}
                                                className='premium-bullet-list__label'
                                                onChange={(val) => changeLabel(val, index)}
                                                multiline={false}
                                                style={{
                                                    fontFamily: titleFont,
                                                    fontSize: TitleSize + titleStyles[0].titlefontSizeType,
                                                    fontWeight: titleStyles[0].titleWeight,
                                                    letterSpacing: titleStyles[0].titleLetter + "px",
                                                    lineHeight: titleStyles[0].titleLine + "px",
                                                    fontStyle: titleStyles[0].titleStyle,
                                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                    fontFamily: titleStyles[0].titleFontFamily,
                                                    color: titleStyles[0].titleColor,
                                                    textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        ]
    }
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return { deviceType: deviceType }
})(edit)