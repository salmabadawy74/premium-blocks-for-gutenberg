import classnames from "classnames"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import SpacingComponent from "../../components/premium-responsive-spacing";
import PremiumMediaUpload from "../../components/premium-media-upload";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import icons from '../../components/align';
import PremiumShadow from "../../components/PremiumShadow";
import WebfontLoader from "../../components/typography/fontLoader";
import RadioComponent from '../../components/radio-control';


const { withSelect } = wp.data

const { __ } = wp.i18n

const { Component, Fragment } = wp.element

const { BlockControls, AlignmentToolbar, InspectorControls, RichText } = wp.blockEditor

const { PanelBody, SelectControl, Toolbar, TextControl, ToggleControl, Tooltip } = wp.components

const ICONTYPE = [
    {
        label: __("Icon", 'premium-blocks-for-gutenberg'), value: "icon"
    },
    {
        label: __("Image", 'premium-blocks-for-gutenberg'), value: "image"
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
}) => <li tabIndex={0} key={newIndex} style={{ listStyle: 'none' }}>
        <span className="premium-bulletList__container">
            <span className="premium-bulletList__dragHandle"></span>
            <div className="premium-bulletList__content" onClick={() => showContent(newIndex)}>
                {value.showBulletIcon && <i className={`${value.icon}`} />}
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
                    label={__("Icon Type", 'premium-blocks-for-gutenberg')}
                    options={ICONTYPE}
                    value={value.image_icon}
                    onChange={value => selectIconType(value, newIndex)}
                />
                    {"icon" == value.image_icon &&
                        <Fragment>
                            <p>{__("Icon", 'premium-blocks-for-gutenberg')}</p>
                            <FontIconPicker
                                icons={iconsList}
                                value={value.icon}
                                onChange={value => changeIcons(value, newIndex)}
                                isMulti={false}
                                appendTo="body"
                                noSelectedPlaceholder={__("Select Icon", 'premium-blocks-for-gutenberg')}
                            />
                        </Fragment>}

                    {"image" == value.image_icon &&
                        <Fragment>
                            <PremiumMediaUpload
                                type="image"
                                imageID={value.imageID}
                                imageURL={value.imageURL}
                                onSelectMedia={media => selectImage(media, newIndex)}
                                onRemoveImage={() => removeImage(newIndex)}
                            />
                        </Fragment>
                    }
                </div>
                }
                <hr />
                <ToggleControl
                    label={__("Link", 'premium-blocks-for-gutenberg')}
                    checked={value.disableLink}
                    onChange={value => toggleIconLink(value, newIndex)}
                />
                {value.disableLink &&
                    <Fragment>
                        <p>{__("URL", 'premium-blocks-for-gutenberg')}</p>
                        <TextControl
                            value={value.link}
                            onChange={value => saveLink(value, newIndex)}
                            placeholder={__("Enter URL")}
                        />
                        <ToggleControl
                            label={__("Open links in new tab", 'premium-blocks-for-gutenberg')}
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
        if (!this.props.attributes.classMigrate) {
            this.props.setAttributes({
                repeaterBulletList: [{
                    id: 1,
                    label: "Title #" + 1,
                    image_icon: "icon",
                    icon: "fa fa-arrow-circle-right",
                    imageURL: "",
                    imageID: '',
                    icon_color: "#6EC1E4",
                    label_color: "#6EC1E4",
                    icon_hover_color: "",
                    label_hover_color: "",
                    icon_bg_color: "",
                    icon_bg_hover_color: "",
                    item_bg_color: "",
                    item_bg_hover_color: "",
                    link: "#",
                    target: false,
                    disableLink: false,
                    showContent: false,
                    showBulletIcon: true,
                    linkTarget: false
                },
                {
                    id: 2,
                    label: "Title #" + 2,
                    image_icon: "icon",
                    icon: "fa fa-arrow-circle-right",
                    imageURL: "",
                    imageID: '',
                    icon_color: "#6EC1E4",
                    label_color: "#6EC1E4",
                    icon_hover_color: "",
                    label_hover_color: "",
                    icon_bg_color: "",
                    icon_bg_hover_color: "",
                    item_bg_color: "",
                    item_bg_hover_color: "",
                    link: "#",
                    target: false,
                    disableLink: false,
                    showContent: false,
                    showBulletIcon: true,
                    linkTarget: false
                },
                {
                    id: 3,
                    label: "Title #" + 3,
                    image_icon: "icon",
                    icon: "fa fa-arrow-circle-right",
                    imageURL: "",
                    imageID: '',
                    icon_color: "#6EC1E4",
                    label_color: "#6EC1E4",
                    icon_hover_color: "",
                    label_hover_color: "",
                    icon_bg_color: "",
                    icon_bg_hover_color: "",
                    item_bg_color: "",
                    item_bg_hover_color: "",
                    link: "#",
                    target: false,
                    disableLink: false,
                    showContent: false,
                    showBulletIcon: true,
                    linkTarget: false
                }
                ]
            })
        }

        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
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
            generalmargin,
            bulletIconmargin,
            titlemargin,
            generalpadding,
            bulletIconpadding,
            titleStyles,
            generalStyles,
            generalBorderWidth,
            generalBorderTop,
            generalBorderRight,
            generalBorderBottom,
            generalBorderLeft,
            generalBorderUpdated,
            titleFont,
            divider,
            dividerStyle,
            dividerStyles
        } = attributes

        const LAYOUT = [
            {
                label: __("Block", 'premium-blocks-for-gutenberg'),
                value: "block"
            },
            {
                label: __("Inline", 'premium-blocks-for-gutenberg'),
                value: "inline"
            }
        ];

        const POSITION = [
            {
                label: __("After", 'premium-blocks-for-gutenberg'),
                value: "after"
            },
            {
                label: __("Before", 'premium-blocks-for-gutenberg'),
                value: "before"
            },
            {
                label: __("Top", 'premium-blocks-for-gutenberg'),
                value: "top"
            }
        ];

        const DividerStyle = [
            {
                label: __("Solid", 'premium-blocks-for-gutenberg'),
                value: "solid"
            },
            {
                label: __("Double", 'premium-blocks-for-gutenberg'),
                value: "double"
            },
            {
                label: __("Dotted", 'premium-blocks-for-gutenberg'),
                value: "dotted"
            },
            {
                label: __("Dashed", 'premium-blocks-for-gutenberg'),
                value: "dashed"
            },
            {
                label: __("Groove", 'premium-blocks-for-gutenberg'),
                value: "groove"
            }
        ]

        const ALIGNS = ["left", "center", "right"];

        const BulletIconSize = this.getPreviewSize(this.props.deviceType, bulletIconStyles[0].bulletListfontSize, bulletIconStyles[0].bulletListfontSizeTablet, bulletIconStyles[0].bulletListfontSizeMobile);
        const BulletIconMarginTop = this.getPreviewSize(this.props.deviceType, bulletIconmargin.desktop.top, bulletIconmargin.tablet.top, bulletIconmargin.mobile.top);
        const BulletIconMarginRight = this.getPreviewSize(this.props.deviceType, bulletIconmargin.desktop.right, bulletIconmargin.tablet.right, bulletIconmargin.mobile.right);
        const BulletIconMarginBottom = this.getPreviewSize(this.props.deviceType, bulletIconmargin.desktop.bottom, bulletIconmargin.tablet.bottom, bulletIconmargin.mobile.bottom);
        const BulletIconMarginLeft = this.getPreviewSize(this.props.deviceType, bulletIconmargin.desktop.left, bulletIconmargin.tablet.left, bulletIconmargin.mobile.left);
        const BulletIconPaddingTop = this.getPreviewSize(this.props.deviceType, bulletIconpadding.desktop.top, bulletIconpadding.tablet.top, bulletIconpadding.mobile.top);
        const BulletIconPaddingRight = this.getPreviewSize(this.props.deviceType, bulletIconpadding.desktop.right, bulletIconpadding.tablet.right, bulletIconpadding.mobile.right);
        const BulletIconPaddingBottom = this.getPreviewSize(this.props.deviceType, bulletIconpadding.desktop.bottom, bulletIconpadding.tablet.bottom, bulletIconpadding.mobile.bottom);
        const BulletIconPaddingLeft = this.getPreviewSize(this.props.deviceType, bulletIconpadding.desktop.left, bulletIconpadding.tablet.left, bulletIconpadding.mobile.left);
        const TitleSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titlefontSizeTablet, titleStyles[0].titlefontSizeMobile);
        const TitleMarginTop = this.getPreviewSize(this.props.deviceType, titlemargin.desktop.top, titlemargin.tablet.top, titlemargin.mobile.top);
        const TitleMarginRight = this.getPreviewSize(this.props.deviceType, titlemargin.desktop.right, titlemargin.tablet.right, titlemargin.mobile.right);
        const TitleMarginBottom = this.getPreviewSize(this.props.deviceType, titlemargin.desktop.bottom, titlemargin.tablet.bottom, titlemargin.mobile.bottom);
        const TitleMarginLeft = this.getPreviewSize(this.props.deviceType, titlemargin.desktop.left, titlemargin.tablet.left, titlemargin.mobile.left);
        const GeneralMarginTop = this.getPreviewSize(this.props.deviceType, generalmargin.desktop.top, generalmargin.tablet.top, generalmargin.mobile.top);
        const GeneralMarginRight = this.getPreviewSize(this.props.deviceType, generalmargin.desktop.right, generalmargin.tablet.right, generalmargin.mobile.right);
        const GeneralMarginBottom = this.getPreviewSize(this.props.deviceType, generalmargin.desktop.bottom, generalmargin.tablet.bottom, generalmargin.mobile.bottom);
        const GeneralMarginLeft = this.getPreviewSize(this.props.deviceType, generalmargin.desktop.left, generalmargin.tablet.left, generalmargin.mobile.left);
        const GeneralPaddingTop = this.getPreviewSize(this.props.deviceType, generalpadding.desktop.top, generalpadding.tablet.top, generalpadding.mobile.top);
        const GeneralPaddingRight = this.getPreviewSize(this.props.deviceType, generalpadding.desktop.right, generalpadding.tablet.right, generalpadding.mobile.right);
        const GeneralPaddingBottom = this.getPreviewSize(this.props.deviceType, generalpadding.desktop.bottom, generalpadding.tablet.bottom, generalpadding.mobile.bottom);
        const GeneralPaddingLeft = this.getPreviewSize(this.props.deviceType, generalpadding.desktop.left, generalpadding.tablet.left, generalpadding.mobile.left);
        const DividerWidth = this.getPreviewSize(this.props.deviceType, dividerStyles[0].dividerWidth, dividerStyles[0].dividerWidthTablet, dividerStyles[0].dividerWidthMobile);
        const DividerHeight = this.getPreviewSize(this.props.deviceType, dividerStyles[0].dividerHeight, dividerStyles[0].dividerHeightTablet, dividerStyles[0].dividerHeightMobile);

        const addNewBulletList = () => {
            let cloneIcons = [...repeaterBulletList]
            cloneIcons.push({
                id: cloneIcons.length + 1,
                label: "Title ",
                image_icon: "icon",
                icon: "fa fa-arrow-circle-right",
                imageURL: "",
                imageID: '',
                icon_color: "#6EC1E4",
                label_color: "#6EC1E4",
                icon_hover_color: "",
                label_hover_color: "",
                icon_bg_color: "",
                icon_bg_hover_color: "",
                item_bg_color: "",
                item_bg_hover_color: "",
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
                    "imageURL",
                    value.url,
                    index
                ),
                repeaterBulletList: onRepeaterChange(
                    "imageID",
                    value.id,
                    index
                )
            })
        }

        const removeImage = (index) => {
            setAttributes({
                repeaterBulletList: onRepeaterChange(
                    "imageURL",
                    '',
                    index
                ),
                repeaterBulletList: onRepeaterChange(
                    "imageID",
                    '',
                    index
                ),
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

        const saveDividerStyles = (value) => {
            const newUpdate = dividerStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                dividerStyles: newUpdate,
            });
        }

        const mainClasses = classnames(className, "premium-bullet-list");

        let loadTitleGoogleFonts;

        if (titleStyles[0].titleFontFamily !== "Default") {
            const titleConfig = {
                google: {
                    families: [titleStyles[0].titleFontFamily],
                },
            }
            loadTitleGoogleFonts = (
                <WebfontLoader config={titleConfig}>
                </WebfontLoader>
            )
        }
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
                            </div> : <RadioComponent
                                choices={ALIGNS}
                                value={bulletAlign}
                                onChange={(newValue) => setAttributes({ bulletAlign: newValue })}
                                label={__("", 'premium-blocks-for-gutenberg')}
                            />
                            }
                        </div>
                        <hr />
                        <ToggleControl
                            label={__("Divider")}
                            checked={divider}
                            onChange={value => setAttributes({ divider: value })}
                        />
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
                                label={__("Background Hover Color", 'premium-block-for-gutenberg')}
                                colorValue={generalStyles[0].generalHoverBackgroundColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveGeneralStyles({
                                        generalHoverBackgroundColor: newValue
                                    })
                                }
                            />
                        </div>
                        <PremiumShadow
                            label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={true}
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
                        <PremiumShadow
                            label={__("Hover Box Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={true}
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
                        <SpacingComponent value={generalmargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ generalmargin: value })} />
                        <SpacingComponent value={generalpadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ generalpadding: value })} />
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
                        <SpacingComponent value={bulletIconmargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ bulletIconmargin: value })} />
                        <SpacingComponent value={bulletIconpadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ bulletIconpadding: value })} />
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
                        <PremiumShadow
                            label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={false}
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
                        <SpacingComponent value={titlemargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ titlemargin: value })} />
                    </PanelBody>
                    {divider &&
                        <PanelBody
                            title={__("Divider")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Divider Style")}
                                options={DividerStyle}
                                value={dividerStyle}
                                onChange={newValue => setAttributes({ dividerStyle: newValue })}
                            />
                            <ResponsiveRangeControl
                                label={__("Width", 'premium-block-for-gutenberg')}
                                value={dividerStyles[0].dividerWidth}
                                tabletValue={dividerStyles[0].dividerWidthTablet}
                                mobileValue={dividerStyles[0].dividerWidthMobile}
                                onChange={(value) => saveDividerStyles({ dividerWidth: value })}
                                onChangeTablet={(value) => saveDividerStyles({ dividerWidthTablet: value })}
                                onChangeMobile={(value) => saveDividerStyles({ dividerWidthMobile: value })}
                                onChangeUnit={(key) =>
                                    saveDividerStyles({ dividerWidthType: key })
                                }
                                unit={dividerStyles[0].dividerWidthType}
                                showUnit={true}
                                defaultValue={0}
                                min={1}
                                max={600}
                            />
                            <ResponsiveRangeControl
                                label={__("Height", 'premium-block-for-gutenberg')}
                                value={dividerStyles[0].dividerHeight}
                                tabletValue={dividerStyles[0].dividerHeightTablet}
                                mobileValue={dividerStyles[0].dividerHeightMobile}
                                onChange={(value) => saveDividerStyles({ dividerHeight: value })}
                                onChangeTablet={(value) => saveDividerStyles({ dividerHeightTablet: value })}
                                onChangeMobile={(value) => saveDividerStyles({ dividerHeightMobile: value })}
                                onChangeUnit={(key) =>
                                    saveDividerStyles({ dividerHeightType: key })
                                }
                                unit={dividerStyles[0].dividerHeightType}
                                showUnit={true}
                                defaultValue={0}
                                min={1}
                                max={600}
                            />
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-block-for-gutenberg')}
                                colorValue={dividerStyles[0].dividerColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveDividerStyles({
                                        dividerColor: newValue
                                    })
                                }
                            />
                        </PanelBody>
                    }
                </InspectorControls >
            ),
            <div className={classnames(className, `premium-bullet-list-${this.props.clientId}`)}
                style={{ textAlign: align }}
                id={`premium-bullet-list-${this.props.clientId}`}>
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-bullet-list-${this.props.clientId} .premium-bullet-list__content-icon i:hover {`,
                            `color: ${bulletIconStyles[0].bulletIconHoverColor} !important;`,
                            `background-color: ${bulletIconStyles[0].bulletIconHoverBackgroundColor} !important;`,
                            "}",
                            `#premium-bullet-list-${this.props.clientId} .premium-bullet-list__label-wrap .premium-bullet-list__label:hover {`,
                            `color: ${titleStyles[0].titleHoverColor} !important;`,
                            "}",
                            `#premium-bullet-list-${this.props.clientId} .premium-bullet-list__wrapper:hover {`,
                            `background-color: ${generalStyles[0].generalHoverBackgroundColor} !important;`,
                            `box-shadow: ${generalStyles[0].generalHoverShadowHorizontal}px ${generalStyles[0].generalHoverShadowVertical}px ${generalStyles[0].generalHoverShadowBlur}px ${generalStyles[0].generalHoverShadowColor} ${generalStyles[0].generalHoverShadowPosition} !important;`,
                            "}",
                            `#premium-bullet-list-${this.props.clientId} .premium-bullet-list-divider-block:not(:last-child)::after {`,
                            `border-top-width: ${DividerHeight}${dividerStyles[0].dividerHeightType};`,
                            `border-top-style: ${dividerStyle};`,
                            `border-top-color: ${dividerStyles[0].dividerColor};`,
                            `width: ${DividerWidth}${dividerStyles[0].dividerWidthType};`,
                            "}",
                            `#premium-bullet-list-${this.props.clientId} .premium-bullet-list-divider-inline:not(:last-child)::after {`,
                            `height: ${DividerHeight}${dividerStyles[0].dividerHeightType};`,
                            `border-left-style: ${dividerStyle};`,
                            `border-left-color: ${dividerStyles[0].dividerColor};`,
                            `border-left-width: ${DividerWidth}${dividerStyles[0].dividerWidthType};`,
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
                    {
                        repeaterBulletList.map((icon, index) => {
                            let image_icon_html = ""
                            if (icon.showBulletIcon) {
                                if (icon.image_icon == "icon") {
                                    if (icon.icon) {
                                        image_icon_html = <span className="premium-bullet-list__content-icon" key={index}>
                                            <i
                                                className={`${icon.icon}`}
                                                style={{
                                                    overflow: 'hidden',
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
                                                    verticalAlign: bulletAlign == 'flex-start' ? 'top' : bulletAlign == 'flex-end' ? 'bottom' : 'middle'
                                                }}
                                            />
                                        </span>
                                    }
                                } else {
                                    if (icon.imageURL) {

                                        image_icon_html = <img
                                            src={icon.imageURL}
                                            key={index}
                                            style={{
                                                overflow: 'hidden',
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
                                                verticalAlign: bulletAlign == 'flex-start' ? 'top' : bulletAlign == 'flex-end' ? 'bottom' : 'middle'
                                            }}
                                        />
                                    }
                                }
                            }

                            let target = (icon.linkTarget) ? "_blank" : "_self"

                            return (
                                <Fragment>
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
                                            overflow: 'hidden',
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
                                        <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign}`} style={{
                                            justifyContent: align == "right" ? align : align,
                                            display: iconPosition == "before" ? "flex" : "inline-flex",
                                            flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? 'row-reverse' : "",
                                            marginTop: TitleMarginTop + titleStyles[0].titlemarginType,
                                            marginBottom: TitleMarginBottom + titleStyles[0].titlemarginType,
                                            marginLeft: TitleMarginLeft + titleStyles[0].titlemarginType,
                                            marginRight: TitleMarginRight + titleStyles[0].titlemarginType,
                                        }}>
                                            {icon.showBulletIcon && <span className={`premium-bullet-list__icon-wrap`}
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
                                            <div
                                                className="premium-bullet-list__label-wrap"
                                                style={{
                                                    fontFamily: titleFont,
                                                    fontSize: TitleSize + titleStyles[0].titlefontSizeType,
                                                    fontWeight: titleStyles[0].titleWeight,
                                                }}
                                            >
                                                <RichText
                                                    tagName="span"
                                                    placeholder={__("Title Name")}
                                                    value={icon.label}
                                                    className='premium-bullet-list__label'
                                                    onChange={(val) => changeLabel(val, index)}
                                                    multiline={false}
                                                    style={{
                                                        // fontFamily: titleFont,
                                                        // fontSize: TitleSize + titleStyles[0].titlefontSizeType,
                                                        // fontWeight: titleStyles[0].titleWeight,
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
                                    {divider &&
                                        <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
                                    }
                                </Fragment>
                            )
                        })
                    }
                </ul>
                {loadTitleGoogleFonts}
            </div>

        ]
    }
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return { deviceType: deviceType }
})(edit)