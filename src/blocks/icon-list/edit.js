import classnames from "classnames"
import times from "lodash/times"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import styling from "./styling"
import iconsList from "../../components/premium-icons-list";
import PremiumTypo from "../../components/premium-typo";
import FONTS from "../../components/premium-fonts";
import PremiumBorder from "../../components/premium-border";
import PremiumMargin from "../../components/premium-margin";

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
    TabPanel
} = wp.components


class edit extends Component {

    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        console.log($style);
        
        $style.setAttribute("id", "premium-style-icon-list-" + this.props.clientId)
        document.head.appendChild($style)
    }

    saveIcons(value, index) {
        const { attributes, setAttributes } = this.props
        const { icons } = attributes
        const newItems = icons.map((item, thisIndex) => {
            if (index === thisIndex) {
                item = Object.assign(item, value)
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
            size,
            titleSize,
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
            titlePadding,
            itemMarginL,
            itemMarginR,
            itemMarginT,
            itemMarginB,
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
                            icon_border_color: cloneIcons[0].icon_border_color,
                            icon_border_hover_color: cloneIcons[0].icon_border_hover_color,
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
                        <p>{__("Text Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].label_color }} ></span></span></p>
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
                        <p>{__("Image Border Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_border_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_border_color}
                            onChange={(value) => this.saveIcons({ icon_border_color: value }, index)}
                            allowReset
                        />
                    </Fragment>
                )
                color_control_hover = (
                    <Fragment>
                        <p>{__("Text Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].label_hover_color }} ></span></span></p>
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
                        <p >{__("Image Border Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_border_hover_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_border_hover_color}
                            onChange={(value) => this.saveIcons({ icon_border_hover_color: value }, index)}
                            allowReset
                        />
                    </Fragment>
                )
            } else {
                color_control = (
                    <Fragment>
                        <p >{__("Text Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].label_color }} ></span></span></p>
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
                        <p >{__("Icon Border Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_border_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_border_color}
                            onChange={(value) => this.saveIcons({ icon_border_color: value }, index)}
                            allowReset
                        />
                    </Fragment>
                )
                color_control_hover = (
                    <Fragment>
                        <p >{__("Text Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].label_hover_color }} ></span></span></p>
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
                        <p >{__("Icon Border Hover Color")}<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[index].icon_border_hover_color }} ></span></span></p>
                        <ColorPalette
                            value={icons[index].icon_border_hover_color}
                            onChange={(value) => this.saveIcons({ icon_border_hover_color: value }, index)}
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
                    <h2>{__("List Item Link")}</h2>
                    <ToggleControl
                        label={__("Disable Link")}
                        checked={icons[index].disableLink}
                        onChange={value => { this.saveIcons({ disableLink: value }, index) }}
                    />
                    {!icons[index].disableLink &&
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
                    <h2>{__("Icon #") + " " + (index + 1) + " " + __(" Color Settings")}</h2>
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
            element.innerHTML = styling(this.props)
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

        return (
            <Fragment>
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(value) => {
                            setAttributes({ align: value })
                        }}
                    />
                </BlockControls>
                <InspectorControls>
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
                    <PanelBody
                        title={__("Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["size", "weight", "style", "upper", "spacing"]}
                            size={titleSize}
                            weight={titleWeight}
                            style={titleStyle}
                            spacing={titleLetter}
                            upper={titleUpper}
                            onChangeSize={newSize => setAttributes({ titleSize: newSize })}
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
                        <RangeControl
                            label={__("Icon Size")}
                            value={size}
                            onChange={(value) => setAttributes({ size: value })}
                            min={0}
                            max={500}
                            allowReset
                            initialPosition={40}
                        />
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
                        <RangeControl
                            label={__("Spacing")}
                            value={iconSpacing}
                            onChange={newValue => setAttributes({ iconSpacing: newValue })}
                        />
                        <RangeControl
                            label={__("Padding")}
                            value={titlePadding}
                            onChange={newValue => setAttributes({ titlePadding: newValue })}
                        />
                        {layoutPos == "block" ? <PremiumMargin
                            directions={["top", "bottom"]}
                            marginTop={itemMarginT}
                            marginBottom={itemMarginB}
                            onChangeMarTop={value =>
                                setAttributes({
                                    itemMarginT: value || 1
                                })
                            }
                            onChangeMarBottom={value =>
                                setAttributes({
                                    itemMarginB: value || 1
                                })
                            }
                        /> :
                            <PremiumMargin
                                directions={["left", "right"]}
                                marginLeft={itemMarginL}
                                marginRight={itemMarginR}
                                onChangeMarLeft={value =>
                                    setAttributes({
                                        itemMarginL: value || 1
                                    })
                                }
                                onChangeMarRight={value =>
                                    setAttributes({
                                        itemMarginR: value || 1
                                    })
                                }
                            />
                        }
                    </PanelBody>
                </InspectorControls>
                <div className={classnames(
                    className,
                    `premium-block-${this.props.clientId}`
                )} style={{
                    textAlign: align,
                }}>
                    <div className={`premium-icon-list-${layoutPos}`}
                        style={{
                            textAlign: align,
                            justifyContent: align == "right" ? "flex-end" : align
                        }}>
                        {
                            icons.map((icon, index) => {

                                if (multiTitleCount <= index) {
                                    return
                                }

                                let url = ""

                                let image_icon_html = ""

                                if (icon.image_icon == "icon") {
                                    if (icon.icon) {
                                        image_icon_html = <span className="premium-icon-list__content-icon"
                                            style={{
                                                width: size,
                                                height: size,
                                            }}
                                        >
                                            <i className={`${icon.icon}`} style={{
                                                width: size,
                                                height: size,
                                                fontSize: size,
                                            }} />
                                        </span>
                                    }
                                } else {
                                    if (icon.image) {
                                        image_icon_html = <img src={icon.image.url} style={{ width: size }} />
                                    }
                                }

                                let target = (linkTarget) ? "_blank" : "_self"

                                return (
                                    <div
                                        className={classnames(
                                            `premium-icon-list-content${index}`,
                                            "premium-icon-list__wrapper"
                                        )}
                                        style={{
                                            padding: titlePadding + "px"
                                        }}
                                        key={index}
                                        target={target}
                                        rel="noopener noreferrer"
                                    >
                                        <div className="premium-icon-list__content-wrap" style={{
                                            flexDirection: align == "right" ? 'row-reverse' : "",
                                            justifyContent: align == "right" ? align : align,
                                            marginLeft: layoutPos == 'block' ? "" : itemMarginL / 2 + "px",
                                            marginRight: layoutPos == 'block' ? "" : itemMarginR / 2 + "px",
                                            marginTop: layoutPos == 'block' ? itemMarginT + "px" : "",
                                            marginBottom: layoutPos == 'block' ? itemMarginB + "px" : "",
                                            display: iconPosition == "left" ? "flex" : "inline-flex",
                                            flexDirection: iconPosition == "top" ? "column" : iconPosition == "right" ? "row-reverse" : ""
                                        }}>
                                            <span className="premium-icon-list__icon-wrap"
                                                style={{
                                                    marginRight: iconPosition == "left" ? iconSpacing + "px" : "",
                                                    marginLeft: iconPosition == "right" ? iconSpacing + "px" : "",
                                                    marginBottom: iconPosition == "top" ? iconSpacing + "px" : "",
                                                    borderStyle: borderType,
                                                    borderWidth: borderWidth + "px",
                                                    borderRadius: borderRadius || 100 + "px",
                                                    borderColor: borderColor
                                                }}
                                            >{image_icon_html}</span>
                                            <div className="premium-icon-list__label-wrap">
                                                <RichText
                                                    tagName="div"
                                                    placeholder={__("Title Name")}
                                                    value={icons[index].label}
                                                    className='premium-icon-list__label'
                                                    onChange={value => {
                                                        this.saveIcons({ label: value }, index)
                                                    }}
                                                    placeholder={__("Title")}
                                                    multiline={false}
                                                    style={{
                                                        fontSize: titleSize + "px",
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
            </Fragment>
        )
    }
}

export default edit