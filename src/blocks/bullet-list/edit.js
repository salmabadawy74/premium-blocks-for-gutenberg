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
import Icons from "../../components/icons";
import PremiumShadow from "../../components/PremiumShadow";
import WebfontLoader from "../../components/typography/fontLoader";
import MultiButtonsControl from '../../components/responsive-radio';
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import InsideTabs from "../../components/InsideTabs";
import InsideTab from "../../components/InsideTab";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import { generateBlockId, generateCss, typographyCss, paddingCss, marginCss, borderCss } from '../../components/HelperFunction';

const { withSelect } = wp.data

const { __ } = wp.i18n

const { useEffect, Fragment } = wp.element

const { InspectorControls, RichText, useBlockProps } = wp.blockEditor

const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components

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
}) => <span className="premium-repeater-row-wrapper" tabIndex={0} key={newIndex}>
            <span className="premium-repeater-row-inner">
                <span className="premium-repeater-row-tools">
                    <span className="premium-repeater-item-title" onClick={() => showContent(newIndex)}>
                        {value.showBulletIcon && <i className={`${value.icon}`} />}
                        {value.label}
                    </span>
                    <div className="premium-repeater-row-item-remove">
                        <button
                            className="premium-repeater-item-remove is-tertiary"
                            onClick={() => onRemove(newIndex, value)}
                        >
                            x
                        </button>
                    </div>
                </span>
                {value.showContent && (
                    <div className="premium-repeater-row-controls">
                        <TextControl
                            placeholder={__(`Enter ${value.label} link`)}
                            value={value.label}
                            onChange={(val) => changeLabel(val, newIndex)}
                        />
                        <ToggleControl
                            label={__("Show Bullet")}
                            checked={value.showBulletIcon}
                            onChange={valueBullet => toggleShowBulletIcon(valueBullet, newIndex)}
                        />
                        {value.showBulletIcon && <div><SelectControl
                            label={__("Icon Type", 'premium-blocks-for-gutenberg')}
                            options={ICONTYPE}
                            value={value.image_icon}
                            onChange={valueType => selectIconType(valueType, newIndex)}
                        />
                            {"icon" == value.image_icon &&
                                <Fragment>
                                    <p>{__("Icon", 'premium-blocks-for-gutenberg')}</p>
                                    <FontIconPicker
                                        icons={iconsList}
                                        value={value.icon}
                                        onChange={valueIcon => changeIcons(valueIcon, newIndex)}
                                        isMulti={false}
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
                            onChange={valueLink => toggleIconLink(valueLink, newIndex)}
                        />
                        {value.disableLink &&
                            <Fragment>
                                <p>{__("URL", 'premium-blocks-for-gutenberg')}</p>
                                <TextControl
                                    value={value.link}
                                    onChange={valueURL => saveLink(valueURL, newIndex)}
                                    placeholder={__("Enter URL")}
                                />
                                <ToggleControl
                                    label={__("Open links in new tab", 'premium-blocks-for-gutenberg')}
                                    checked={value.linkTarget}
                                    onChange={valueTarget => openLink(valueTarget, newIndex)}
                                />
                            </Fragment>
                        }
                    </div>
                )}
            </span>
        </span>);

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
    return (<span className="premium-repeater-rows"> {
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
    } </span>
    );
});

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        if (!props.attributes.classMigrate) {
            setAttributes({
                repeaterBulletList: [{
                    id: 1,
                    label: "Title #" + 1,
                    image_icon: "icon",
                    icon: "fa fa-arrow-circle-right",
                    imageURL: "",
                    imageID: '',
                    icon_color: "",
                    label_color: "",
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
                    icon_color: "",
                    label_color: "",
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
                    icon_color: "",
                    label_color: "",
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
        setAttributes({
            blockId: "premium-bullet-list-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        blockId,
        layoutPos,
        iconPosition,
        align,
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
        titleTypography,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = props.attributes

    let loadTitleGoogleFonts;

    if (titleTypography.fontFamily !== "Default") {
        const fontConfig = {
            google: {
                families: [titleTypography.fontFamily],
            },
        }
        loadTitleGoogleFonts = (
            <WebfontLoader config={fontConfig}>
            </WebfontLoader>
        );
    }
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

    const currentDevice = props.deviceType;
    const BulletIconSize = bulletIconFontSize?.[currentDevice];
    const TitleSize = titleTypography ? titleTypography?.fontSize?.[currentDevice] : '';
    const DividerWidth = dividerWidth?.[currentDevice];
    const DividerHeight = dividerHeight?.[currentDevice];

    const addNewBulletList = () => {
        let cloneIcons = [...repeaterBulletList]
        cloneIcons.push({
            id: cloneIcons.length + 1,
            label: "Title ",
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "",
            label_color: "",
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
        let array = repeaterBulletList.map((bulletList) => {
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
        const newUpdate = titleStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            titleStyles: newUpdate,
        });
    }

    const saveGeneralStyles = (value) => {
        const newUpdate = generalStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            generalStyles: newUpdate,
        });
    }

    const saveDividerStyles = (value) => {
        const newUpdate = dividerStyles.map((item, i) => {
            if (0 === i) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            dividerStyles: newUpdate,
        });
    }

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .premium-bullet-list__content-icon i:hover`] = {
            'color': `${bulletIconStyles?.[0]?.bulletIconHoverColor}!important`,
            'background-color': `${bulletIconStyles?.[0]?.bulletIconHoverBackgroundColor}!important`
        };
        styles[`.${blockId} .premium-bullet-list__label-wrap .premium-bullet-list__label:hover`] = {
            'color': `${titleStyles?.[0]?.titleHoverColor}!important`
        };
        styles[`.${blockId} .premium-bullet-list__wrapper:hover`] = {
            'background-color': `${generalStyles?.[0]?.generalHoverBackgroundColor}!important`,
            'box-shadow': `${hoverBoxShadow?.horizontal}px ${hoverBoxShadow?.vertical}px ${hoverBoxShadow?.blur}px ${hoverBoxShadow?.color} ${hoverBoxShadow?.position}!important`
        };

        styles[`.${blockId} .premium-bullet-list-divider-block:not(:last-child)::after`] = {
            'border-top-width': `${DividerHeight}${dividerHeight?.unit}`,
            'border-top-style': dividerStyle,
            'border-top-color': dividerStyles?.[0]?.dividerColor,
            'width': `${DividerWidth}${dividerWidth?.unit}`,
        };

        styles[`.${blockId} .premium-bullet-list-divider-inline:not(:last-child)::after`] = {
            'border-left-width': `${DividerWidth}${dividerWidth?.unit}`,
            'border-left-style': dividerStyle,
            'border-left-color': dividerStyles?.[0]?.dividerColor,
            'height': `${DividerHeight}${dividerHeight?.unit}`
        };

        return generateCss(styles);
    }

        return (
            <Fragment>
                <InspectorControls>
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("General Settings", "premium-blocks-for-gutenberg")}
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
                                        {__("Add New Item", "premium-blocks-for-gutenberg")}
                                    </button>
                                </div>
                            </PanelBody>
                            <PanelBody
                                title={__("Display Options", "premium-blocks-for-gutenberg")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <SelectControl
                                    label={__("Layout Type", "premium-blocks-for-gutenberg")}
                                    options={LAYOUT}
                                    value={layoutPos}
                                    onChange={newValue => setAttributes({ layoutPos: newValue })}
                                />
                                <MultiButtonsControl
                                    choices={[
                                        { value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, 
                                        { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, 
                                        { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }
                                    ]}
                                    value={align}
                                    onChange={(aligns) => setAttributes({ align: aligns })}
                                    label={__("Align", "premium-blocks-for-gutenberg")}
                                    showIcons={true} 
                                    />
                                <div>
                                    {iconPosition !== 'top' ? <MultiButtonsControl
                                        choices={[
                                            { value: 'flex-start', label: __('Top', "premium-blocks-for-gutenberg"), icon: icons.vertical_top }, 
                                            { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: icons.vertical_middle }, 
                                            { value: 'flex-end', label: __('Bottom', "premium-blocks-for-gutenberg"), icon: icons.vertical_bottom }
                                        ]}
                                        value={bulletAlign}
                                        onChange={(alignBullet) => setAttributes({ bulletAlign: alignBullet })}
                                        label={__("Bullet Alignment", "premium-blocks-for-gutenberg")}
                                        showIcons={true} />
                                        :
                                        <MultiButtonsControl
                                            choices={[
                                                { value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, 
                                                { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, 
                                                { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }
                                            ]}
                                            value={bulletAlign}
                                            onChange={(alignn) => setAttributes({ bulletAlign: alignn })}
                                            label={__("Align Content", "premium-blocks-for-gutenberg")}
                                            showIcons={true} />
                                    }
                                </div>
                                <SelectControl
                                    label={__("Bullet Position", "premium-blocks-for-gutenberg")}
                                    options={POSITION}
                                    value={iconPosition}
                                    onChange={newValue => setAttributes({ iconPosition: newValue })}
                                />
                                <ToggleControl
                                    label={__("Divider", "premium-blocks-for-gutenberg")}
                                    checked={divider}
                                    onChange={value => setAttributes({ divider: value })}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("General Style", "premium-blocks-for-gutenberg")}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
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
                                        <PremiumShadow
                                            value={boxShadow}
                                            onChange={(value) => setAttributes({ boxShadow: value })}
                                        />
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-block-for-gutenberg')}
                                            colorValue={generalStyles[0].generalHoverBackgroundColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveGeneralStyles({
                                                    generalHoverBackgroundColor: newValue
                                                })
                                            }
                                        />
                                        <PremiumShadow
                                            label={__("Hover Box Shadow", 'premium-blocks-for-gutenberg')}
                                            value={hoverBoxShadow}
                                            onChange={(value) => setAttributes({ hoverBoxShadow: value })}
                                        />
                                    </InsideTab>
                                </InsideTabs>
                                <PremiumBorder
                                    label={__("Border", "premium-blocks-for-gutenberg")}
                                    value={generalBorder}
                                    onChange={(value) => setAttributes({ generalBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={generalmargin} responsive={true} showUnits={true} label={__("Margin", "premium-blocks-for-gutenberg")} onChange={(value) => setAttributes({ generalmargin: value })} />
                                <SpacingComponent value={generalpadding} responsive={true} showUnits={true} label={__("Padding", "premium-blocks-for-gutenberg")} onChange={(value) => setAttributes({ generalpadding: value })} />
                            </PanelBody>
                            <PanelBody
                                title={__("Bullet Style", "premium-blocks-for-gutenberg")}
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
                                 <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
                                        <Fragment>
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
                                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                                colorValue={bulletIconStyles[0].bulletIconBackgroundColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    saveBulletIconStyles({
                                                        bulletIconBackgroundColor: newValue
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Color", 'premium-block-for-gutenberg')}
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
                                                colorValue={bulletIconStyles[0].bulletIconHoverBackgroundColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    saveBulletIconStyles({
                                                        bulletIconHoverBackgroundColor: newValue
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    </InsideTab>
                                </InsideTabs>
                                <PremiumBorder
                                    label={__("Border", 'premium-block-for-gutenberg')}
                                    value={bulletIconBorder}
                                    onChange={(value) => setAttributes({ bulletIconBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={bulletIconmargin} responsive={true} showUnits={true} label={__("Margin", 'premium-block-for-gutenberg')} onChange={(value) => setAttributes({ bulletIconmargin: value })} />
                                <SpacingComponent value={bulletIconpadding} responsive={true} showUnits={true} label={__("Padding", 'premium-block-for-gutenberg')} onChange={(value) => setAttributes({ bulletIconpadding: value })} />
                            </PanelBody>
                            <PanelBody
                                title={__("Title Style", "premium-blocks-for-gutenberg")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={titleTypography}
                                    onChange={newValue => setAttributes({ titleTypography: newValue })}
                                />
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
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
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
                                        <AdvancedPopColorControl
                                            label={__("Color", 'premium-block-for-gutenberg')}
                                            colorValue={titleStyles[0].titleHoverColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveTitleStyles({
                                                    titleHoverColor: newValue
                                                })
                                            }
                                        />
                                    </InsideTab>
                                </InsideTabs>
                                <PremiumShadow
                                    label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                    value={titlesTextShadow}
                                    onChange={(value) => setAttributes({ titlesTextShadow: value })}
                                />
                                <SpacingComponent value={titlemargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ titlemargin: value })} />
                            </PanelBody>
                            {divider &&
                                <PanelBody
                                    title={__("Divider", "premium-blocks-for-gutenberg")}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <SelectControl
                                        label={__("Divider Style", "premium-blocks-for-gutenberg")}
                                        options={DividerStyle}
                                        value={dividerStyle}
                                        onChange={newValue => setAttributes({ dividerStyle: newValue })}
                                    />
                                    <ResponsiveRangeControl
                                        label={__("Width", 'premium-blocks-for-gutenberg')}
                                        value={dividerWidth}
                                        units={['px', 'em', '%']}
                                        onChange={newValue => setAttributes({ dividerWidth: newValue })}
                                        showUnit={true}
                                        min={1}
                                        max={600}
                                    />
                                    <ResponsiveRangeControl
                                        label={__("Height", 'premium-blocks-for-gutenberg')}
                                        value={dividerHeight}
                                        units={['px', 'em', '%']}
                                        onChange={newValue => setAttributes({ dividerHeight: newValue })}
                                        showUnit={true}
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
                        </InspectorTab>
                        <InspectorTab key={"advance"}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) =>
                                    setAttributes({
                                        hideDesktop: value,
                                    })
                                }
                                onChangeTablet={(value) =>
                                    setAttributes({
                                        hideTablet: value,
                                    })
                                }
                                onChangeMobile={(value) =>
                                    setAttributes({
                                        hideMobile: value,
                                    })
                                }
                            />
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls >
            <div 
                {...useBlockProps({
                    className: classnames(
                        className,
                        `${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{ textAlign: align?.[props.deviceType] }}>
                <style>{loadStyles()}</style>
                <ul className={`premium-bullet-list-${layoutPos} premium-bullet-list`}
                    style={{
                        textAlign: align?.[currentDevice],
                        justifyContent: align?.[currentDevice] == "right" ? "flex-end" : align?.[currentDevice],
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
                                                    verticalAlign: bulletAlign?.[currentDevice] == 'flex-start' ? 'top' : bulletAlign?.[currentDevice] == 'flex-end' ? 'bottom' : 'middle',
                                                    ...borderCss(bulletIconBorder, currentDevice),
                                                    ...paddingCss(bulletIconpadding, currentDevice)
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
                                                verticalAlign: bulletAlign?.[currentDevice] == 'flex-start' ? 'top' : bulletAlign?.[currentDevice] == 'flex-end' ? 'bottom' : 'middle',
                                                ...borderCss(bulletIconBorder, currentDevice),
                                                ...paddingCss(bulletIconpadding, currentDevice)
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
                                            textAlign: align?.[currentDevice],
                                            overflow: 'hidden',
                                            justifyContent: align?.[currentDevice] == "right" ? "flex-end" : align?.[currentDevice],
                                            backgroundColor: generalStyles[0].generalBackgroundColor,
                                            boxShadow: `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
                                            ...marginCss(generalmargin, currentDevice),
                                            ...paddingCss(generalpadding, currentDevice),
                                            ...borderCss(generalBorder, currentDevice)
                                        }}
                                    >
                                        <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign?.[currentDevice]}`} style={{
                                            justifyContent: align?.[currentDevice] == "right" ? align?.[currentDevice] : align?.[currentDevice],
                                            display: iconPosition == "before" ? "flex" : "inline-flex",
                                            flexDirection: iconPosition == "top" ? align?.[currentDevice] == "right" ? "column" : "column" : iconPosition == "after" ? 'row-reverse' : "",
                                        }}>
                                            {icon.showBulletIcon && <span className={`premium-bullet-list__icon-wrap`}
                                                style={{
                                                    // overflow: "hidden",
                                                    alignSelf: bulletAlign?.[currentDevice] == 'left' ? 'flex-start' : bulletAlign?.[currentDevice] == 'right' ? 'flex-end' : 'center',
                                                    textAlign: bulletAlign?.[currentDevice],
                                                    justifyContent: bulletAlign?.[currentDevice],
                                                    alignItems: bulletAlign?.[currentDevice] == 'left' ? 'flex-start' : bulletAlign?.[currentDevice] == 'right' ? 'flex-end' : 'center',
                                                    ...marginCss(bulletIconmargin, currentDevice),
                                                }}
                                            >{image_icon_html}</span>}
                                            <div
                                                className="premium-bullet-list__label-wrap"
                                                style={{
                                                    fontSize: `${TitleSize}${titleTypography?.fontSize.unit}`,
                                                    fontFamily: titleTypography?.fontFamily,
                                                    fontWeight: titleTypography?.fontWeight,
                                                    ...marginCss(titlemargin, currentDevice),
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
                                                        color: titleStyles[0].titleColor,
                                                        textShadow: `${titlesTextShadow.horizontal}px ${titlesTextShadow.vertical}px ${titlesTextShadow.blur}px ${titlesTextShadow.color}`,
                                                        ...typographyCss(titleTypography, currentDevice)
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
            </Fragment>
    );
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return { deviceType: deviceType }
})(Edit)