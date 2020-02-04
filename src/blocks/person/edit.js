import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumSizeUnits from "../../components/premium-size-units";
import DefaultImage from "../../components/default-image";
import PremiumFilters from "../../components/premium-filters";
import PremiumMargin from "../../components/premium-margin";
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
    RichText,
    URLInput,
    MediaUpload,
} = wp.editor;

const edit = props => {
    const { isSelected, setAttributes, className, clientId: blockId } = props;

    const {
        id,
        personText,
        newpersonText,
        personSize,
        personAlign,
        personLink,
        personTarget,
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
        titleTag,
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
        facebook,
        twitter,
        instagram,
        youtube,
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
        textColor,
        nameHoverColor,
        titleHoverColor,
        backColor,
        backHoverColor,
        slideColor,
        textFontFamily,
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
        padding,
        paddingU,
        personnameshadowBlur,
        personnameshadowColor,
        personnameshadowHorizontal,
        personnameshadowVertical,
        personShadowPosition,
        items
    } = props.attributes;

    const SIZE = [
        {
            value: "sm",
            label: __("Small")
        },
        {
            value: "md",
            label: __("Medium")
        },
        {
            value: "lg",
            label: __("Large")
        },
        {
            value: "block",
            label: __("Block")
        }
    ];
    const DIRECTION = [
        {
            value: "top",
            label: __("Top to Bottom")
        },
        {
            value: "bottom",
            label: __("Bottom to Top")
        },
        {
            value: "left",
            label: __("Left to Right")
        },
        {
            value: "right",
            label: __("Right to Left")
        }
    ];
    const SHUTTER = [
        {
            value: "shutouthor",
            label: __("Shutter out Horizontal")
        },
        {
            value: "shutoutver",
            label: __("Shutter out Vertical")
        },
        {
            value: "scshutoutver",
            label: __("Scaled Shutter Vertical")
        },
        {
            value: "scshutouthor",
            label: __("Scaled Shutter Horizontal")
        },
        {
            value: "dshutinver",
            label: __("Tilted Left")
        },
        {
            value: "dshutinhor",
            label: __("Tilted Right")
        }
    ];
    const RADIAL = [
        {
            value: "radialin",
            label: __("Radial In")
        },
        {
            value: "radialout",
            label: __("Radial Out")
        },
        {
            value: "rectin",
            label: __("Rectangle In")
        },
        {
            value: "rectout",
            label: __("Rectangle Out")
        }
    ];
    const PERCONINFO = [
        {
            value: "name",
            label: __("Name")
        },
        {
            value: "title",
            label: __("Title")
        },
        {
            value: "desc",
            label: __("Description")
        }
    ];
    const RADIUS = [
        {
            value: "0",
            label: __("Square")
        },
        {
            value: "50%",
            label: __("Circle")
        },
        {
            value: "15px",
            label: __("Rounded")
        }
    ];
    const EFFECTS = [
        {
            value: "none",
            label: __("None")
        },
        {
            value: "slide",
            label: __("Slide")
        },
        {
            value: "shutter",
            label: __("Shutter")
        },
        {
            value: "radial",
            label: __("Radial")
        }
    ];
    const onChangeHover = newValue => {
        props.setAttributes({ effect: newValue });
        switch (newValue) {
            case "slide":
                props.setAttributes({ effectDir: "top" });
                break;
            case "shutter":
                props.setAttributes({ effectDir: "shutouthor" });
                break;
            case "radial":
                props.setAttributes({ effectDir: "radialin" });
                break;
        }
    };
    setAttributes({ id: blockId });

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

    const mainClasses = classnames(className, "premium-person");

    const SortableItem = SortableElement(({ value }) => <li tabIndex={0}>
        <TextControl
            label={value}
            value={value}
            onChange={yout => setAttributes({ value: yout })}
        />
    </li>);

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
        return <div>{items.map((value, index) => (
            <i className={`premium-person__socialIcon ${value == "youtube" ? "fa fa-youtube-play" : `dashicons dashicons-${value}`} premium-person__${socialIconHoverColor}`}
                style={{
                    color: defaultIconColor ? "#ffffff" : socialIconColor,
                    background: defaultIconColor ? `${value == "youtube" ? "red" : `${value == "instagram" ? `linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)` : `${value == "twitter" ? "#00aced" : "#3b5998"}`}`}` : socialIconBackgroundColor,
                    fontSize: (socialIconSize || 50) + iconSizeUnit,
                    paddingRight: "5px",
                    paddingTop: "2px",
                    margin: "2px",
                    height: "1.2em",
                    width: "1.5em",
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
                        options={EFFECTS}
                        label={__("Hover Effect")}
                        value={effect}
                        onChange={onChangeHover}
                    />
                    {"slide" === effect && (
                        <SelectControl
                            options={DIRECTION}
                            label={__("Direction")}
                            value={effectDir}
                            onChange={newValue => setAttributes({ effectDir: newValue })}
                        />
                    )}
                    {"shutter" === effect && (
                        <SelectControl
                            options={SHUTTER}
                            label={__("Shutter Direction")}
                            value={effectDir}
                            onChange={newValue => setAttributes({ effectDir: newValue })}
                        />
                    )}
                    {"radial" === effect && (
                        <SelectControl
                            options={RADIAL}
                            label={__("Style")}
                            value={effectDir}
                            onChange={newValue => setAttributes({ effectDir: newValue })}
                        />
                    )}
                    <SelectControl
                        options={SIZE}
                        label={__("Person Size")}
                        value={personSize}
                        onChange={newSize => setAttributes({ personSize: newSize })}
                    />
                    <ToggleControl
                        label={__("Open link in new tab")}
                        checked={personTarget}
                        onChange={newValue => setAttributes({ personTarget: newValue })}
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
            <div className={`premium-person__img_wrap`}>
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
