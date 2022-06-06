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
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';

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
            bulletIconBorder,
            generalmargin,
            bulletIconmargin,
            titlemargin,
            generalpadding,
            bulletIconpadding,
            titleStyles,
            generalStyles,
            generalBorder,
            divider,
            dividerStyle,
            dividerStyles,
            titlesTextShadow,
            boxShadow,
            hoverBoxShadow,
            bulletIconFontSize,
            dividerWidth,
            dividerHeight,
            titleTypography
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

        const currentDevice = this.props.deviceType;
        const BulletIconSize = bulletIconFontSize[currentDevice];
        const BulletIconMarginTop = bulletIconmargin[currentDevice].top;
        const BulletIconMarginRight = bulletIconmargin[currentDevice].right;
        const BulletIconMarginBottom = bulletIconmargin[currentDevice].bottom;
        const BulletIconMarginLeft = bulletIconmargin[currentDevice].left;
        const BulletIconPaddingTop = bulletIconpadding[currentDevice].top;
        const BulletIconPaddingRight = bulletIconpadding[currentDevice].right;
        const BulletIconPaddingBottom = bulletIconpadding[currentDevice].bottom;
        const BulletIconPaddingLeft = bulletIconpadding[currentDevice].left;
        const TitleSize = titleTypography ? titleTypography.fontSize[currentDevice] : '';
        const TitleMarginTop = titlemargin[currentDevice].top;
        const TitleMarginRight = titlemargin[currentDevice].right;
        const TitleMarginBottom = titlemargin[currentDevice].bottom;
        const TitleMarginLeft = titlemargin[currentDevice].left;
        const GeneralMarginTop = generalmargin[currentDevice].top;
        const GeneralMarginRight = generalmargin[currentDevice].right;
        const GeneralMarginBottom = generalmargin[currentDevice].bottom;
        const GeneralMarginLeft = generalmargin[currentDevice].left;
        const GeneralPaddingTop = generalpadding[currentDevice].top;
        const GeneralPaddingRight = generalpadding[currentDevice].right;
        const GeneralPaddingBottom = generalpadding[currentDevice].bottom;
        const GeneralPaddingLeft = generalpadding[currentDevice].left;
        const DividerWidth = dividerWidth[currentDevice];
        const DividerHeight = dividerHeight[currentDevice];

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
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("General Settings")}
                                className="premium-panel-body"
                                initialOpen={true}
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
                                <hr />
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
                                <SelectControl
                                    label={__("Bullet Position")}
                                    options={POSITION}
                                    value={iconPosition}
                                    onChange={newValue => setAttributes({ iconPosition: newValue })}
                                />
                                <hr />
                                <ToggleControl
                                    label={__("Divider")}
                                    checked={divider}
                                    onChange={value => setAttributes({ divider: value })}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("General Style")}
                                className="premium-panel-body"
                                initialOpen={true}
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
                                <hr />
                                <PremiumShadow
                                    label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={true}
                                    value={boxShadow}
                                    onChange={(value) => setAttributes({ boxShadow: value })}
                                />
                                <PremiumShadow
                                    label={__("Hover Box Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={true}
                                    value={hoverBoxShadow}
                                    onChange={(value) => setAttributes({ hoverBoxShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={generalBorder}
                                    borderType={generalBorder.borderType}
                                    borderColor={generalBorder.borderColor}
                                    borderWidth={generalBorder.borderWidth}
                                    borderRadius={generalBorder.borderRadius}
                                    onChange={(value) => setAttributes({ generalBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={generalmargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ generalmargin: value })} />
                                <SpacingComponent value={generalpadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ generalpadding: value })} />
                            </PanelBody>
                            <PanelBody
                                title={__("Bullet Style")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveRangeControl
                                    label={__("Size", 'premium-blocks-for-gutenberg')}
                                    value={bulletIconFontSize}
                                    units={['px', 'em', 'rem']}
                                    onChange={newValue => setAttributes({ bulletIconFontSize: newValue })}
                                    showUnit={true}
                                    min={1}
                                    max={100}
                                />
                                <hr />
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
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={bulletIconBorder}
                                    borderType={bulletIconBorder.borderType}
                                    borderColor={bulletIconBorder.borderColor}
                                    borderWidth={bulletIconBorder.borderWidth}
                                    borderRadius={bulletIconBorder.borderRadius}
                                    onChange={(value) => setAttributes({ bulletIconBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={bulletIconmargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ bulletIconmargin: value })} />
                                <SpacingComponent value={bulletIconpadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ bulletIconpadding: value })} />
                            </PanelBody>
                            <PanelBody
                                title={__("Title Style")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                    value={titleTypography}
                                    onChange={newValue => setAttributes({ titleTypography: newValue })}
                                />
                                <hr />
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
                                <hr />
                                <PremiumShadow
                                    label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={false}
                                    value={titlesTextShadow}
                                    onChange={(value) => setAttributes({ titlesTextShadow: value })}
                                />
                                <hr />
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
                                    <hr />
                                    <ResponsiveRangeControl
                                        label={__("Width", 'premium-blocks-for-gutenberg')}
                                        value={dividerWidth}
                                        units={['px', 'em', '%']}
                                        onChange={newValue => setAttributes({ dividerWidth: newValue })}
                                        showUnit={true}
                                        min={1}
                                        max={600}
                                    />
                                    <hr />
                                    <ResponsiveRangeControl
                                        label={__("Width", 'premium-blocks-for-gutenberg')}
                                        value={dividerHeight}
                                        units={['px', 'em', '%']}
                                        onChange={newValue => setAttributes({ dividerHeight: newValue })}
                                        showUnit={true}
                                        min={1}
                                        max={600}
                                    />
                                    <hr />
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
                        </InspectorTab>
                        <InspectorTab key={'advance'}></InspectorTab>
                    </InspectorTabs>
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
                            `box-shadow: ${hoverBoxShadow.horizontal}px ${hoverBoxShadow.vertical}px ${hoverBoxShadow.blur}px ${hoverBoxShadow.color} ${hoverBoxShadow.position} !important;`,
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
                                                    fontSize: `${BulletIconSize}${bulletIconFontSize.unit}`,
                                                    color: bulletIconStyles[0].bulletIconColor,
                                                    backgroundColor: bulletIconStyles[0].bulletIconBackgroundColor,
                                                    paddingTop: BulletIconPaddingTop + bulletIconpadding.unit,
                                                    paddingBottom: BulletIconPaddingBottom + bulletIconpadding.unit,
                                                    paddingLeft: BulletIconPaddingLeft + bulletIconpadding.unit,
                                                    paddingRight: BulletIconPaddingRight + bulletIconpadding.unit,
                                                    borderStyle: bulletIconBorder && bulletIconBorder.borderType,
                                                    borderTopWidth: bulletIconBorder && bulletIconBorder.borderWidth[currentDevice].top,
                                                    borderRightWidth: bulletIconBorder && bulletIconBorder.borderWidth[currentDevice].right,
                                                    borderBottomWidth: bulletIconBorder && bulletIconBorder.borderWidth[currentDevice].bottom,
                                                    borderLeftWidth: bulletIconBorder && bulletIconBorder.borderWidth[currentDevice].left,
                                                    borderColor: bulletIconBorder && bulletIconBorder.borderColor,
                                                    borderTopLeftRadius: `${bulletIconBorder && bulletIconBorder.borderRadius[currentDevice].top || 0}px`,
                                                    borderTopRightRadius: `${bulletIconBorder && bulletIconBorder.borderRadius[currentDevice].right || 0}px`,
                                                    borderBottomLeftRadius: `${bulletIconBorder && bulletIconBorder.borderRadius[currentDevice].bottom || 0}px`,
                                                    borderBottomRightRadius: `${bulletIconBorder && bulletIconBorder.borderRadius[currentDevice].left || 0}px`,
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
                                                width: `${BulletIconSize}${bulletIconFontSize.unit}`,
                                                height: `${BulletIconSize}${bulletIconFontSize.unit}`,
                                                paddingTop: BulletIconPaddingTop + bulletIconpadding.unit,
                                                paddingBottom: BulletIconPaddingBottom + bulletIconpadding.unit,
                                                paddingLeft: BulletIconPaddingLeft + bulletIconpadding.unit,
                                                paddingRight: BulletIconPaddingRight + bulletIconpadding.unit,
                                                borderStyle: bulletIconBorder && bulletIconBorder.borderType,
                                                borderTopWidth: bulletIconBorder && bulletIconBorder.borderWidth[currentDevice].top,
                                                borderRightWidth: bulletIconBorder && bulletIconBorder.borderWidth[currentDevice].right,
                                                borderBottomWidth: bulletIconBorder && bulletIconBorder.borderWidth[currentDevice].bottom,
                                                borderLeftWidth: bulletIconBorder && bulletIconBorder.borderWidth[currentDevice].left,
                                                borderColor: bulletIconBorder && bulletIconBorder.borderColor,
                                                borderTopLeftRadius: `${bulletIconBorder && bulletIconBorder.borderRadius[currentDevice].top || 0}px`,
                                                borderTopRightRadius: `${bulletIconBorder && bulletIconBorder.borderRadius[currentDevice].right || 0}px`,
                                                borderBottomLeftRadius: `${bulletIconBorder && bulletIconBorder.borderRadius[currentDevice].bottom || 0}px`,
                                                borderBottomRightRadius: `${bulletIconBorder && bulletIconBorder.borderRadius[currentDevice].left || 0}px`,
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
                                            borderStyle: generalBorder && generalBorder.borderType,
                                            borderTopWidth: generalBorder && generalBorder.borderWidth[currentDevice].top,
                                            borderRightWidth: generalBorder && generalBorder.borderWidth[currentDevice].right,
                                            borderBottomWidth: generalBorder && generalBorder.borderWidth[currentDevice].bottom,
                                            borderLeftWidth: generalBorder && generalBorder.borderWidth[currentDevice].left,
                                            borderColor: generalBorder && generalBorder.borderColor,
                                            borderTopLeftRadius: `${generalBorder && generalBorder.borderRadius[currentDevice].top || 0}px`,
                                            borderTopRightRadius: `${generalBorder && generalBorder.borderRadius[currentDevice].right || 0}px`,
                                            borderBottomLeftRadius: `${generalBorder && generalBorder.borderRadius[currentDevice].bottom || 0}px`,
                                            borderBottomRightRadius: `${generalBorder && generalBorder.borderRadius[currentDevice].left || 0}px`,
                                            paddingTop: GeneralPaddingTop + generalpadding.unit,
                                            paddingBottom: GeneralPaddingBottom + generalpadding.unit,
                                            paddingLeft: GeneralPaddingLeft + generalpadding.unit,
                                            paddingRight: GeneralPaddingRight + generalpadding.unit,
                                            marginTop: GeneralMarginTop + generalmargin.unit,
                                            marginBottom: GeneralMarginBottom + generalmargin.unit,
                                            marginLeft: GeneralMarginLeft + generalmargin.unit,
                                            marginRight: GeneralMarginRight + generalmargin.unit,
                                            boxShadow: `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
                                        }}
                                    >
                                        <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign}`} style={{
                                            justifyContent: align == "right" ? align : align,
                                            display: iconPosition == "before" ? "flex" : "inline-flex",
                                            flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? 'row-reverse' : "",
                                            marginTop: TitleMarginTop + titlemargin.unit,
                                            marginBottom: TitleMarginBottom + titlemargin.unit,
                                            marginLeft: TitleMarginLeft + titlemargin.unit,
                                            marginRight: TitleMarginRight + titlemargin.unit,
                                        }}>
                                            {icon.showBulletIcon && <span className={`premium-bullet-list__icon-wrap`}
                                                style={{
                                                    // overflow: "hidden",
                                                    alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                    marginTop: BulletIconMarginTop + bulletIconmargin.unit,
                                                    marginBottom: BulletIconMarginBottom + bulletIconmargin.unit,
                                                    marginLeft: BulletIconMarginLeft + bulletIconmargin.unit,
                                                    marginRight: BulletIconMarginRight + bulletIconmargin.unit,
                                                    textAlign: bulletAlign,
                                                    justifyContent: bulletAlign,
                                                    alignItems: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                }}
                                            >{image_icon_html}</span>}
                                            <div
                                                className="premium-bullet-list__label-wrap"
                                                style={{
                                                    fontSize: `${TitleSize}${titleTypography.fontSize.unit}`,
                                                    fontFamily: titleTypography.fontFamily,
                                                    fontWeight: titleTypography.fontWeight,
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
                                                        fontSize: `${TitleSize}${titleTypography.fontSize.unit}`,
                                                        fontStyle: titleTypography.fontStyle,
                                                        fontFamily: titleTypography.fontFamily,
                                                        fontWeight: titleTypography.fontWeight,
                                                        letterSpacing: titleTypography.letterSpacing,
                                                        textDecoration: titleTypography.textDecoration,
                                                        textTransform: titleTypography.textTransform,
                                                        lineHeight: `${titleTypography.lineHeight}px`,
                                                        textShadow: `${titlesTextShadow.titleshadowHorizontal}px ${titlesTextShadow.titleshadowVertical}px ${titlesTextShadow.titleshadowBlur}px ${titlesTextShadow.titleshadowColor}`
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