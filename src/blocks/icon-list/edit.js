import classnames from "classnames";
import times from "lodash/times"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";

const { __ } = wp.i18n;

const {
    PanelBody,
    TextControl,
    TabPanel,
    RangeControl,
    SelectControl,
    ToggleControl,
    Button
} = wp.components;

const { Fragment } = wp.element;

const {
    BlockControls,
    InspectorControls,
    ColorPalette,
    AlignmentToolbar,
    MediaUpload,
} = wp.editor;

const edit = props => {
    const { isSelected, setAttributes, className, clientId: blockId } = props;
    const {
        id,
        align,
        multiTitleCount,
        icons,
        layoutPos,
        iconPosition,
        linkTarget
    } = props.attributes;

    setAttributes({ id: blockId });

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

    const onChangeDescFamily = fontFamily => {
        setAttributes({ descFont: fontFamily });
        if (!fontFamily) {
            return;
        }

        addFontToHead(fontFamily);
    };

    const addmultiTitleCount = (newCount) => {
        console.log(newCount);

        let cloneIcons = [...icons]
        console.log(cloneIcons);

        if (cloneIcons.length < newCount) {

            const incAmount = Math.abs(newCount - cloneIcons.length)
            console.log(incAmount);
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
                        icon_border_color: cloneIcons[0].icon_border_color,
                        icon_border_hover_color: cloneIcons[0].icon_border_hover_color,
                        link: cloneIcons[0].link,
                        target: cloneIcons[0].target,
                        disableLink: cloneIcons[0].disableLink,
                    })
                })
            }

            setAttributes({ icons: cloneIcons })
            console.log(icons);

        }
        else {
            console.log("else");
            for (let i = multiTitleCount; i > newCount; i--) {
                icons.splice(i - 1, 1)
                console.log(icons);
            }
        }
        setAttributes({ multiTitleCount: newCount })
        console.log(multiTitleCount);

    };
    const iconControls = (index) => {
        let color_control = ""
        let color_control_hover = ""

        if ("image" == icons[index].image_icon) {

            color_control = (
                <Fragment>
                    <p>{__("Text Color")}<span><span style={{ backgroundColor: icons[index].label_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].label_color}
                        onChange={(value) => saveIcons({ label_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Image Background Color")}<span><span style={{ backgroundColor: icons[index].icon_bg_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_bg_color}
                        onChange={(value) => saveIcons({ icon_bg_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Image Border Color")}<span><span style={{ backgroundColor: icons[index].icon_border_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_border_color}
                        onChange={(value) => saveIcons({ icon_border_color: value }, index)}
                        allowReset
                    />
                </Fragment>
            )
            color_control_hover = (
                <Fragment>
                    <p>{__("Text Hover Color")}<span><span style={{ backgroundColor: icons[index].label_hover_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].label_hover_color}
                        onChange={(value) => this.saveIcons({ label_hover_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Image Background Hover Color")}<span><span style={{ backgroundColor: icons[index].icon_bg_hover_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_bg_hover_color}
                        onChange={(value) => saveIcons({ icon_bg_hover_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Image Border Hover Color")}<span><span style={{ backgroundColor: icons[index].icon_border_hover_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_border_hover_color}
                        onChange={(value) => saveIcons({ icon_border_hover_color: value }, index)}
                        allowReset
                    />
                </Fragment>
            )
        } else {
            color_control = (
                <Fragment>
                    <p>{__("Text Color")}<span><span style={{ backgroundColor: icons[index].label_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].label_color}
                        onChange={(value) => saveIcons({ label_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Icon Color")}<span><span style={{ backgroundColor: icons[index].icon_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_color}
                        onChange={(value) => saveIcons({ icon_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Icon Background Color")}<span><span style={{ backgroundColor: icons[index].icon_bg_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_bg_color}
                        onChange={(value) => saveIcons({ icon_bg_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Icon Border Color")}<span><span style={{ backgroundColor: icons[index].icon_border_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_border_color}
                        onChange={(value) => saveIcons({ icon_border_color: value }, index)}
                        allowReset
                    />
                </Fragment>
            )
            color_control_hover = (
                <Fragment>
                    <p>{__("Text Hover Color")}<span><span style={{ backgroundColor: icons[index].label_hover_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].label_hover_color}
                        onChange={(value) => saveIcons({ label_hover_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Icon Hover Color")}<span><span style={{ backgroundColor: icons[index].icon_hover_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_hover_color}
                        onChange={(value) => saveIcons({ icon_hover_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Icon Background Hover Color")}<span><span style={{ backgroundColor: icons[index].icon_bg_hover_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_bg_hover_color}
                        onChange={(value) => saveIcons({ icon_bg_hover_color: value }, index)}
                        allowReset
                    />
                    <p>{__("Icon Border Hover Color")}<span><span style={{ backgroundColor: icons[index].icon_border_hover_color }} ></span></span></p>
                    <ColorPalette
                        value={icons[index].icon_border_hover_color}
                        onChange={(value) => saveIcons({ icon_border_hover_color: value }, index)}
                        allowReset
                    />
                </Fragment>
            )
        }
        return (
            <PanelBody
                key={index}
                title={__("Icon") + " " + (index + 1) + " " + __("Settings")}
                initialOpen={false}
            >
                <SelectControl
                    label={__("Icon Type")}
                    options={ICONTYPE}
                    value={icons[index].image_icon}
                    onChange={value => saveIcons({ image_icon: value }, index)}
                />
                {"icon" == icons[index].image_icon &&
                    <Fragment>
                        <p>{__("Icon")}</p>
                        <FontIconPicker
                            icons={iconsList}
                            value={icons[index].icon}
                            onChange={value => { saveIcons({ icon: value }, index) }}
                            isMulti={false}
                            appendTo="body"
                            noSelectedPlaceholder={__("Select Icon")}
                        />
                    </Fragment>
                }
                {"image" == icons[index].image_icon &&
                    <Fragment>
                        <MediaUpload
                            title={__("Select Image")}
                            onSelect={value => { saveIcons({ image: value }, index) }}
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
                                onClick={value => { saveIcons({ image: "" }, index) }}
                                isLink isDestructive>
                                {__("Remove Image")}
                            </Button>
                        }
                    </Fragment>
                }
                <hr />
                <h2>{__("List Item Link")}</h2>
                <ToggleControl
                    label={__("Disable Link")}
                    checked={icons[index].disableLink}
                    onChange={value => { saveIcons({ disableLink: value }, index) }}
                />
                {!icons[index].disableLink &&
                    <Fragment>
                        <p>{__("URL")}</p>
                        <TextControl
                            value={icons[index].link}
                            onChange={value => { saveIcons({ link: value }, index) }}
                            placeholder={__("Enter URL")}
                        />
                    </Fragment>
                }
                <hr />
                <h2>{__("Icon #") + " " + (index + 1) + " " + __(" Color Settings")}</h2>
                <TabPanel
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
    const saveIcons = (value, index) => {
        const newItems = icons.map((item, thisIndex) => {
            if (index === thisIndex) {
                item = Object.assign(item, value)
            }
            return item
        })
        setAttributes({
            icons: newItems
        })
        console.log(icons);
    }
    const content = () => {
        return icons.map((icon, index) => (
            <div className="premium-icon-list__content"
                style={{
                    flexDirection: align == "right" ? 'row-reverse' : "",
                    justifyContent: align == "right" ? align : align
                }}
            >
                <span className="premium-icon-list__content-icon">
                    {icon.image_icon == "icon" ?
                        <i className={`${icon.icon}`}
                            style={{
                                fill: icon.icon_color,
                                color: icon.icon_color,
                                background: icon.icon_bg_color,
                                borderColor: icon.icon_border_color
                            }} />
                        :
                        icon.image == "" ? "" : <img src={`${icon.image.url}`} />
                    }
                </span>
                <div style={{
                    color: icon.label_color
                }}>{icon.label}</div>
            </div>
        ))
    }

    const mainClasses = classnames(className, "premium-icon-list");

    return [
        isSelected && (
            <BlockControls key="controls">
                <AlignmentToolbar
                    value={align}
                    onChange={newAlign => setAttributes({ align: newAlign })}
                />
            </BlockControls>
        ),
        isSelected && (
            <InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("General Settings")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <RangeControl
                        label={__("Number of Title")}
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
                        label={__("Open link in new tab")}
                        checked={linkTarget}
                        onChange={newValue => setAttributes({ linkTarget: newValue })}
                    />
                </PanelBody>
                {times(multiTitleCount, n => iconControls(n))}
            </InspectorControls>
        ),
        <div
            id={`premium-icon-list-${id}`}
            style={{
                textAlign: align,
            }}
        >
            <div
                className={`${mainClasses} premium-icon-list-${layoutPos}`}
                style={{
                    textAlign: align,
                    justifyContent: align == "right" ? "flex-end" : align
                }}
            >
                {content()}
            </div>
        </div>
    ];
};

export default edit;
