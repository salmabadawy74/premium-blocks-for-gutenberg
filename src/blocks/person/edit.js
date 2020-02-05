import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import DefaultImage from "../../components/default-image";
import PremiumFilters from "../../components/premium-filters";
import PremiumMargin from "../../components/premium-margin";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
// import iconsList from "../../components/premium-icons-list";
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const { __ } = wp.i18n;

const {
    IconButton,
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl,
    Dropdown,
    Button,
    TextControl,
    TextareaControl
} = wp.components;

const { Fragment } = wp.element;

const {
    InspectorControls,
    ColorPalette,
    AlignmentToolbar,
    BlockControls,
    MediaUpload,
} = wp.editor;

const edit = props => {
    const { isSelected, setAttributes, className, clientId: blockId } = props;

    const {
        id,
        personSize,
        personAlign,
        personImgId,
        personImgUrl,
        imgRadius,
        imgSize,
        imgBorder,
        imgBorderColor,
        name,
        nameColor,
        nameSize,
        nameWeight,
        nameV,
        title,
        titleColor,
        titleSize,
        titleWeight,
        titleV,
        DescText,
        descSize,
        descWeight,
        descV,
        descLine,
        descLetter,
        descStyle,
        descUpper,
        descshadowBlur,
        descshadowColor,
        descshadowHorizontal,
        descshadowVertical,
        descHoverColor,
        socialIcon,
        socialIconSize,
        socialIconColor,
        socialIconHoverColor,
        iconSizeUnit,
        defaultIconColor,
        socialIconBackgroundColor,
        iconMarginT,
        iconMarginB,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        effect,
        effectDir,
        descColor,
        nameHoverColor,
        titleHoverColor,
        backHoverColor,
        slideColor,
        nameLetter,
        titleLetter,
        multiPersonChecked,
        nameUpper,
        nameLine,
        nameStyle,
        titleUpper,
        titleLine,
        titleStyle,
        borderTypeIcon,
        borderWidthIcon,
        borderRadiusIcon,
        borderColorIcon,
        borderHoverColor,
        nameshadowBlur,
        nameshadowColor,
        nameshadowHorizontal,
        nameshadowVertical,
        titleshadowBlur,
        titleshadowColor,
        titleshadowHorizontal,
        titleshadowVertical,
        items,
        hoverEffectPerson,
        selectedSocialMediaIcon
    } = props.attributes;

    const HOVER = [
        {
            value: "none",
            label: __("None")
        },
        {
            value: "zoomin",
            label: __("Zoom In")
        },
        {
            value: "zoomout",
            label: "Zoom Out"
        },
        {
            value: "scale",
            label: __("Scale")
        },
        {
            value: "gray",
            label: __("Gray Scale")
        },
        {
            value: "blur",
            label: __("Blur")
        },
        {
            value: "bright",
            label: __("Bright")
        },
        {
            value: "sepia",
            label: __("Sepia")
        },
        {
            value: "translate",
            label: __("Translate")
        }
    ];

    const iconsList = [
        {
            value: "fab fa-facebook-f",
            label: __("facebook")
        },
        {
            value: "fab fa-twitter",
            label: __("twitter")
        },
        {
            value: "fab fa-instagram",
            label: __("instagram")
        },
        {
            value: "fab fa-youtube",
            label: __("youtube")
        },
        {
            value: "fab fa-linkedin",
            label: __("linkedin")
        },
        {
            value: "fab fa-flickr",
            label: __("flickr")
        },
        {
            value: "fab fa-github",
            label: __("github")
        },
        {
            value: "fab fa-google-plus",
            label: __("google-plus")
        },
        {
            value: "fab fa-pinterest",
            label: __("pinterest")
        },
        {
            value: "fab fa-reddit",
            label: __("reddit")
        },
        {
            value: "fab fa-skype",
            label: __("skype")
        },
        {
            value: "fab fa-stack-overflow",
            label: __("stack-overflow")
        },
        {
            value: "fab fa-whatsapp",
            label: __("whatsapp")
        },
        {
            value: "fab fa-vimeo-v",
            label: __("vimeo-v")
        },
        {
            value: "fab fa-tumblr",
            label: __("tumblr")
        },
        {
            value: "fab fa-dribbble",
            label: __("dribbble")
        },
        {
            value: "fab fa-quora",
            label: __("quora")
        },
        {
            value: "fab fa-foursquare",
            label: __("foursquare")
        },
        {
            value: "fab fa-wordpress",
            label: __("wordpress")
        },
        {
            value: "fab fa-stumbleupon",
            label: __("stumbleupon")
        },
        {
            value: "fab fa-yahoo",
            label: __("yahoo")
        },
        {
            value: "fab fa-soundcloud",
            label: __("soundcloud")
        },
    ];

    setAttributes({ id: blockId });

    const mainClasses = classnames(className, "premium-person");

    const SortableItem = SortableElement(({ value }) => <li>
        <span className="premium-person__socialIcon__container">
            <span className="premium-person__socialIcon__dragHandle"></span>
            <span className="premium-person__socialIcon__content">
                <span className={`premium-person__socialIcon__iconvalue fa fa-${value}`}></span>
                <span>{value}</span>
            </span>
            <span className="premium-person__socialIcon__trashicon fa fa-trash" onclick={deleteSocialIcon(value)}></span>
        </span>
    </li>);

    const deleteSocialIcon = (value) => {
        console.log(value)
        // let newData = items.filter(b => {
        //     return b!= value
        //   })
        //   setAttributes({ items: newData });
        //   console.log(newData);
          
    };

    const SortableList = SortableContainer(({ items }) => {
        return (
            <ul>
                {items.map((value, index) => (
                    <SortableItem key={`item-${value}`} index={index} value={value} />
                ))}
            </ul>
        );
    });
    const socialIconfn = () => {
        return <div>{items.map((value) => (
            <i className={`premium-person__socialIcon ${value == "youtube" ? "fa fa-youtube-play" : `fa fa-${value}`} premium-person__${socialIconHoverColor}`}
                style={{
                    color: defaultIconColor ? "#ffffff" : socialIconColor,
                    background: defaultIconColor ? `${value == "youtube" ? "red" : `${value == "instagram" ? `linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)` : `${value == "twitter" ? "#00aced" : "#3b5998"}`}`}` : socialIconBackgroundColor,
                    fontSize: (socialIconSize || 50) + iconSizeUnit,
                    border: borderTypeIcon,
                    borderWidth: borderWidthIcon + "px",
                    borderRadius: borderRadiusIcon || 100 + "px",
                    borderColor: borderColorIcon,
                    marginTop: iconMarginT,
                    marginBottom: iconMarginB
                }}
            />

        ))}
        </div>
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const array = arrayMove(items, oldIndex, newIndex)
        setAttributes({ items: array });
    };

    const addSocialIcon = (newsocial) => {
        let array = iconsList.map((i, index) => (
            i
        )).filter(f => f.value == newsocial)
        if (array[0] != undefined) {
            newsocial = array[0];
            setAttributes({ selectedSocialMediaIcon: newsocial.label });
            const newicon = newsocial.label;
            items.push(newicon);
            var filtered = items.filter(function (el) {
                return el != undefined;
            });
            setAttributes({ items: filtered });
        }
    };

    return [
        isSelected && "block" != personSize && (
            <BlockControls key="controls">
                <AlignmentToolbar
                    value={personAlign}
                    onChange={newAlign => setAttributes({ personAlign: newAlign })}
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
                    <ToggleControl
                        label={__("Multiple Persons")}
                        checked={multiPersonChecked}
                        onChange={newValue => setAttributes({ multiPersonChecked: newValue })}
                    />
                    <p>{__("Enable this option if you need to add multiple persons")}</p>
                    <SelectControl
                        label={__("Image Hover Effect")}
                        options={HOVER}
                        value={hoverEffectPerson}
                        onChange={newEffect => setAttributes({ hoverEffectPerson: newEffect })}
                    />

                </PanelBody>
                <PanelBody
                    title={__("Single Person Settings")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <p>{__("Image")}</p>
                    {personImgUrl && (
                        <img src={personImgUrl} width="100%" height="auto" />
                    )}
                    {!personImgUrl && <DefaultImage />}
                    <MediaUpload
                        allowedTypes={["image"]}
                        onSelect={media => {
                            setAttributes({
                                personImgId: media.id,
                                personImgUrl:
                                    "undefined" === typeof media.sizes.thumbnail
                                        ? media.url
                                        : media.sizes.thumbnail.url
                            });
                        }}
                        type="image"
                        value={personImgId}
                        render={({ open }) => (
                            <IconButton
                                label={__("Change Image")}
                                icon="edit"
                                onClick={open}
                            >
                                {__("Change Image")}
                            </IconButton>
                        )}
                    />
                    <PremiumFilters
                        blur={blur}
                        bright={bright}
                        contrast={contrast}
                        saturation={saturation}
                        hue={hue}
                        onChangeBlur={value => setAttributes({ blur: value })}
                        onChangeBright={value => setAttributes({ bright: value })}
                        onChangeContrast={value => setAttributes({ contrast: value })}
                        onChangeSat={value => setAttributes({ saturation: value })}
                        onChangeHue={value => setAttributes({ hue: value })}
                    />
                    <TextControl
                        label={__("Name")}
                        value={name}
                        onChange={value => setAttributes({ name: value })}
                    />
                    <TextControl
                        label={__("Title")}
                        value={title}
                        onChange={value => setAttributes({ title: value })}
                    />
                    <TextareaControl
                        label={__("Description")}
                        value={DescText}
                        onChange={newText =>
                            setAttributes({ DescText: newText })
                        }
                    />
                    <ToggleControl
                        label={__("Enable Social Icons")}
                        checked={socialIcon}
                        onChange={newCheck => setAttributes({ socialIcon: newCheck })}
                    />
                    {socialIcon && (
                        <div>
                            <p className="premium-person-paragraph">{__("Social Media")}</p>
                            <FontIconPicker
                                icons={iconsList.map((i) => (
                                    i.value
                                ))}
                                onChange={value => addSocialIcon(value)}
                                value={selectedSocialMediaIcon}
                                isMulti={false}
                                appendTo="body"
                                noSelectedPlaceholder={__("Select Icon")}
                                noIconPlaceholder={__("No icons found")}
                                closeOnSelect={true}
                            />
                            <SortableList items={items} onSortEnd={onSortEnd} />
                        </div>
                    )}
                </PanelBody>
                <PanelBody
                    title={__("Name")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumTypo
                        components={["size", "weight", "line", "style", "upper", "spacing"]}
                        size={nameSize}
                        weight={nameWeight}
                        style={nameStyle}
                        spacing={nameLetter}
                        upper={nameUpper}
                        line={nameLine}
                        onChangeSize={newSize => setAttributes({ nameSize: newSize })}
                        onChangeWeight={newWeight =>
                            setAttributes({ nameWeight: newWeight })
                        }
                        onChangeLine={newValue => setAttributes({ nameLine: newValue })}
                        onChangeSize={newSize => setAttributes({ nameSize: newSize })}
                        onChangeStyle={newStyle => setAttributes({ nameStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ nameLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ nameUpper: check })}
                    />
                    <div className="premium-control-toggle">
                        <strong>{__("Colors")}</strong>
                        <Dropdown
                            className="premium-control-toggle-person"
                            contentClassName="premium-control-toggle-content"
                            position="bottom right"
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                    <i className="dashicons dashicons-edit" />
                                </Button>
                            )}
                            renderContent={() => (
                                <Fragment>
                                    <p>{__("Name Color")}</p>
                                    <ColorPalette
                                        value={nameColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                nameColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                    <p>{__("Name Hover Color")}</p>
                                    <ColorPalette
                                        value={nameHoverColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                nameHoverColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                </Fragment>
                            )}
                        />
                    </div>
                    <PremiumTextShadow
                        color={nameshadowColor}
                        blur={nameshadowBlur}
                        horizontal={nameshadowHorizontal}
                        vertical={nameshadowVertical}
                        onChangeColor={newColor =>
                            setAttributes({ nameshadowColor: newColor.hex })
                        }
                        onChangeBlur={newBlur => setAttributes({ nameshadowBlur: newBlur })}
                        onChangehHorizontal={newValue =>
                            setAttributes({ nameshadowHorizontal: newValue })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({ nameshadowVertical: newValue })
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Title")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumTypo
                        components={["size", "weight", "line", "style", "upper", "spacing"]}
                        size={titleSize}
                        weight={titleWeight}
                        style={titleStyle}
                        spacing={titleLetter}
                        upper={titleUpper}
                        line={titleLine}
                        onChangeSize={newSize => setAttributes({ titleSize: newSize })}
                        onChangeWeight={newWeight =>
                            setAttributes({ titleWeight: newWeight })
                        }
                        onChangeLine={newValue => setAttributes({ titleLine: newValue })}
                        onChangeSize={newSize => setAttributes({ titleSize: newSize })}
                        onChangeStyle={newStyle => setAttributes({ titleStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ titleLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ titleUpper: check })}
                    />
                    <div className="premium-control-toggle">
                        <strong>{__("Colors")}</strong>
                        <Dropdown
                            className="premium-control-toggle-person"
                            contentClassName="premium-control-toggle-content"
                            position="bottom right"
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                    <i className="dashicons dashicons-edit" />
                                </Button>
                            )}
                            renderContent={() => (
                                <Fragment>
                                    <p>{__("Title Color")}</p>
                                    <ColorPalette
                                        value={titleColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                titleColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                    <p>{__("Title Hover Color")}</p>
                                    <ColorPalette
                                        value={titleHoverColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                titleHoverColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                </Fragment>
                            )}
                        />
                    </div>
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
                    />
                </PanelBody>
                <PanelBody
                    title={__("Description")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumTypo
                        components={["size", "weight", "line", "style", "upper", "spacing"]}
                        size={descSize}
                        weight={descWeight}
                        style={descStyle}
                        spacing={descLetter}
                        upper={descUpper}
                        line={descLine}
                        onChangeSize={newSize => setAttributes({ descSize: newSize })}
                        onChangeWeight={newWeight =>
                            setAttributes({ descWeight: newWeight })
                        }
                        onChangeLine={newValue => setAttributes({ descLine: newValue })}
                        onChangeSize={newSize => setAttributes({ descSize: newSize })}
                        onChangeStyle={newStyle => setAttributes({ descStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ descLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ descUpper: check })}
                    />
                    <div className="premium-control-toggle">
                        <strong>{__("Colors")}</strong>
                        <Dropdown
                            className="premium-control-toggle-person"
                            contentClassName="premium-control-toggle-content"
                            position="bottom right"
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                    <i className="dashicons dashicons-edit" />
                                </Button>
                            )}
                            renderContent={() => (
                                <Fragment>
                                    <p>{__("Desc Color")}</p>
                                    <ColorPalette
                                        value={descColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                descColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                    <p>{__("Desc Hover Color")}</p>
                                    <ColorPalette
                                        value={descHoverColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                descHoverColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                </Fragment>
                            )}
                        />
                    </div>
                    <PremiumTextShadow
                        color={descshadowColor}
                        blur={descshadowBlur}
                        horizontal={descshadowHorizontal}
                        vertical={descshadowVertical}
                        onChangeColor={newColor =>
                            setAttributes({ descshadowColor: newColor.hex })
                        }
                        onChangeBlur={newBlur => setAttributes({ descshadowBlur: newBlur })}
                        onChangehHorizontal={newValue =>
                            setAttributes({ descshadowHorizontal: newValue })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({ descshadowVertical: newValue })
                        }
                    />
                </PanelBody>
                {socialIcon && (<PanelBody
                    title={__("Social Icon")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <RangeControl
                        label={__("Size ")}
                        value={socialIconSize}
                        onChange={newValue => setAttributes({ socialIconSize: newValue })}
                    />
                    <div className="premium-control-toggle">
                        <strong>{__("Colors")}</strong>
                        <Dropdown
                            className="premium-control-toggle-person"
                            contentClassName="premium-control-toggle-content"
                            position="bottom right"
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                    <i className="dashicons dashicons-edit" />
                                </Button>
                            )}
                            renderContent={() => (
                                <Fragment>
                                    <p>{__("Social Icon Color")}</p>
                                    <ColorPalette
                                        value={socialIconColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                socialIconColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                    <p>{__("Social Icon Hover Color")}</p>
                                    <ColorPalette
                                        value={socialIconHoverColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                socialIconHoverColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                </Fragment>
                            )}
                        />
                    </div>
                    <div className="premium-control-toggle">
                        <strong>{__("Background Color")}</strong>
                        <Dropdown
                            className="premium-control-toggle-person"
                            contentClassName="premium-control-toggle-content"
                            position="bottom right"
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                    <i className="dashicons dashicons-edit" />
                                </Button>
                            )}
                            renderContent={() => (
                                <Fragment>
                                    <p>{__("Social Icon Background Color")}</p>
                                    <ColorPalette
                                        value={socialIconBackgroundColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                socialIconBackgroundColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                </Fragment>
                            )}
                        />
                    </div>
                    <ToggleControl
                        label={__("Brands Default Colors")}
                        checked={defaultIconColor}
                        onChange={newCheck => setAttributes({ defaultIconColor: newCheck })}
                    />
                    <PremiumBorder
                        borderType={borderTypeIcon}
                        borderWidth={borderWidthIcon}
                        borderColor={borderColorIcon}
                        borderRadius={borderRadiusIcon}
                        onChangeType={newType => setAttributes({ borderTypeIcon: newType })}
                        onChangeWidth={newWidth => setAttributes({ borderWidthIcon: newWidth })}
                        onChangeColor={colorValue =>
                            setAttributes({ borderColorIcon: colorValue.hex })
                        }
                        onChangeRadius={newrRadius =>
                            setAttributes({ borderRadiusIcon: newrRadius })
                        }
                    />
                    <div className="premium-control-toggle">
                        <PremiumMargin
                            directions={["top", "bottom"]}
                            marginTop={iconMarginT}
                            marginBottom={iconMarginB}
                            onChangeMarTop={value =>
                                setAttributes({
                                    iconMarginT: value || 0
                                })
                            }
                            onChangeMarBottom={value =>
                                setAttributes({
                                    iconMarginB: value || 0
                                })
                            }
                        />
                    </div>
                </PanelBody>
                )}
            </InspectorControls>
        ),
        <div
            id={`${mainClasses}-wrap-${id}`}
            className={`${mainClasses}__wrap premium-person__${effect} premium-person__${effectDir}`}
            style={{ textAlign: personAlign }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: [
                        `#premium-person-wrap-${id} .premium-person:hover {`,
                        `color: ${nameHoverColor} !important;`,
                        `border-color: ${borderHoverColor} !important;`,
                        "}",
                        `#premium-person-wrap-${id}.premium-person__none .premium-person:hover {`,
                        `background-color: ${backHoverColor} !important;`,
                        "}",
                        `#premium-person-wrap-${id}.premium-person__slide .premium-person::before,`,
                        `#premium-person-wrap-${id}.premium-person__shutter .premium-person::before,`,
                        `#premium-person-wrap-${id}.premium-person__radial .premium-person::before {`,
                        `background-color: ${slideColor}`,
                        "}"
                    ].join("\n")
                }}
            />
            <div className={`premium-person__img_wrap premium-person__${hoverEffectPerson}`}>
                {personImgUrl && (
                    <img
                        className={`premium-person__img`}
                        src={`${personImgUrl}`}
                        alt="Person"
                        style={{
                            borderWidth: imgBorder + "px",
                            borderRadius: imgRadius,
                            borderColor: imgBorderColor,
                            width: imgSize + "px",
                            height: imgSize + "px",
                            filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                        }}
                    />
                )}
                {!personImgUrl && <DefaultImage className={className} />}
            </div>
            <div
                className={`premium-person__name_wrap`}
            >
                <div>
                    {name && (
                        <span
                            className={`premium-person__name`}
                            style={{
                                color: nameColor,
                                fontSize: nameSize + "px",
                                fontWeight: nameWeight,
                                alignSelf: nameV,
                                letterSpacing: nameLetter + "px",
                                lineHeight: nameLine + "px",
                                fontStyle: nameStyle,
                                textTransform: nameUpper ? "uppercase" : "none",
                                textShadow: `${nameshadowHorizontal}px ${nameshadowVertical}px ${nameshadowBlur}px ${nameshadowColor}`
                            }}
                        >
                            {name}
                        </span>
                    )}
                </div>
                <div>
                    {title && (
                        <span
                            className={`premium-person__title`}
                            style={{
                                color: titleColor,
                                fontSize: titleSize + "px",
                                fontWeight: titleWeight,
                                alignSelf: titleV,
                                letterSpacing: titleLetter + "px",
                                lineHeight: titleLine + "px",
                                fontStyle: titleStyle,
                                textTransform: titleUpper ? "uppercase" : "none",
                                textShadow: `${titleshadowHorizontal}px ${titleshadowVertical}px ${titleshadowBlur}px ${titleshadowColor}`,
                            }}
                        >
                            {title}
                        </span>
                    )}
                </div>
                <div>
                    {DescText && (
                        <span
                            className={`premium-person__desc`}
                            style={{
                                color: descColor,
                                fontSize: descSize + "px",
                                fontWeight: descWeight,
                                alignSelf: descV,
                                letterSpacing: descLetter + "px",
                                lineHeight: descLine + "px",
                                fontStyle: descStyle,
                                textTransform: descUpper ? "uppercase" : "none",
                                textShadow: `${descshadowHorizontal}px ${descshadowVertical}px ${descshadowBlur}px ${descshadowColor}`,
                            }}
                        >
                            {DescText}
                        </span>
                    )}
                </div>
                {socialIcon && (
                    <div>
                        {socialIconfn()}
                    </div>
                )}
            </div>
        </div>
    ];
};

export default edit;
