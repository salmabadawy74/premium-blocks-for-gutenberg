import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumShadow from "../../components/PremiumShadow";
import DefaultImage from "../../components/default-image";
import PremiumFilters from "../../components/premium-filters";
import AdvancedPopColorControl from "../../components/Color Control/ColorComponent";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import SpacingControl from "../../components/premium-responsive-spacing";
import PremiumMediaUpload from "../../components/premium-media-upload";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import InspectorTabs from "../../components/inspectorTabs";
import InspectorTab from "../../components/inspectorTab";
import RadioComponent from "../../components/radio-control";
import ResponsiveRadioControl from "../../components/responsive-radio";
import InsideTabs from "../../components/InsideTabs";
import InsideTab from "../../components/InsideTab";
import Icons from "../../components/icons";
import Social from "../../components/social-media";
import times from "lodash/times";
import WebfontLoader from "../../components/typography/fontLoader";
import { borderCss, paddingCss, marginCss, typographyCss, generateBlockId, generateCss } from "../../components/HelperFunction";

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;
const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;

const SortableItem = SortableElement(
    ({ onRemove, changeLinkValue, value, addLink, personIndex, newIndex }) => (
        <span
            tabIndex={0}
            key={newIndex}
            className={`premium-repeater-row-wrapper ${value.link ? "active" : ""}`}
        >
            <span className="premium-repeater-row-inner">
                <span className="premium-repeater-row-tools">
                    <span
                        className="premium-repeater-item-title"
                        onClick={() => addLink(value, personIndex)}
                    >
                        {value.label}
                    </span>
                    <div className="premium-repeater-row-item-remove">
                        <button
                            className="premium-repeater-item-remove is-tertiary"
                            onClick={() => onRemove(value.label)}
                        >
                            x
                        </button>
                    </div>
                </span>
                {value.link && (
                    <div className="premium-repeater-row-controls">
                        <TextControl
                            placeholder={__(`Enter ${value.label} link`)}
                            value={value.changeinput}
                            onChange={(val) => changeLinkValue(val, value, personIndex)}
                            className="premium-person__socialIcon__textInput"
                        />
                    </div>
                )}
            </span>
        </span>
    )
);

const SortableList = SortableContainer(
    ({ items, onRemove, changeLinkValue, addLink, personIndex }) => {
        return (
            <span className="premium-repeater-rows">
                {items.map((value, index) => (
                    <SortableItem
                        key={`item-${value}`}
                        index={index}
                        newIndex={index}
                        personIndex={personIndex}
                        value={value}
                        onRemove={onRemove}
                        addLink={addLink}
                        changeLinkValue={changeLinkValue}
                    />
                ))}
            </span>
        );
    }
);

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        if (!props.attributes.classMigrate) {
            setAttributes({
                multiPersonContent: [
                    {
                        id: 1,
                        personImgUrl: "",
                        personImgId: "",
                        name: "John Doe",
                        title: "Senior Developer",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla",
                        socialIcon: false,
                        items: [
                            { label: "facebook", link: false, value: "#", changeinput: "#" },
                            { label: "twitter", link: false, value: "#", changeinput: "#" },
                            { label: "instagram", link: false, value: "#", changeinput: "#" },
                            { label: "youtube", link: false, value: "#", changeinput: "#" },
                        ],
                    },
                ],
            });
        }
        setAttributes({
            blockId: "premium-person-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        blockId,
        align,
        socialIconStyles,
        nameV,
        titleV,
        descV,
        contentColor,
        effect,
        effectDir,
        multiPersonChecked,
        borderHoverColor,
        hoverEffectPerson,
        effectPersonStyle,
        rowPerson,
        multiPersonContent,
        bottomInfo,
        socialIconPadding,
        socialIconMargin,
        socialIconBorder,
        socialIconSize,
        descTypography,
        titleTypography,
        nameTypography,
        nameShadow,
        titleShadow,
        descShadow,
        titleTag,
        nameTag,
        namePadding,
        titlePadding,
        titleMargin,
        descPadding,
        contentPadding,
        imgHeight,
        imgWidth,
        socialIcon,
        hideDesktop,
        hideTablet,
        hideMobile,
        nameColor,
        titleColor,
        descColor,
        imageFilter,
        imageBorder
    } = props.attributes;

    const HOVER = [
        {
            value: "none",
            label: __("None", "premium-blocks-for-gutenberg"),
        },
        {
            value: "zoomin",
            label: __("Zoom In", "premium-blocks-for-gutenberg"),
        },
        {
            value: "zoomout",
            label: __("Zoom Out", "premium-blocks-for-gutenberg"),
        },
        {
            value: "scale",
            label: __("Scale", "premium-blocks-for-gutenberg"),
        },
        {
            value: "gray",
            label: __("Gray Scale", "premium-blocks-for-gutenberg"),
        },
        {
            value: "blur",
            label: __("Blur", "premium-blocks-for-gutenberg"),
        },
        {
            value: "bright",
            label: __("Bright", "premium-blocks-for-gutenberg"),
        },
        {
            value: "sepia",
            label: __("Sepia", "premium-blocks-for-gutenberg"),
        },
        {
            value: "translate",
            label: __("Translate", "premium-blocks-for-gutenberg"),
        },
    ];

    const EFFECTS = [
        {
            value: "effect1",
            label: __("Style 1", "premium-blocks-for-gutenberg"),
        },
        {
            value: "effect2",
            label: __("Style 2", "premium-blocks-for-gutenberg"),
        },
    ];
    const ROWS = [
        {
            value: "column1",
            label: __("1 Column", "premium-blocks-for-gutenberg"),
        },
        {
            value: "column2",
            label: __("2 Columns", "premium-blocks-for-gutenberg"),
        },
        {
            value: "column3",
            label: __("3 Columns", "premium-blocks-for-gutenberg"),
        },
        {
            value: "column4",
            label: __("4 Columns", "premium-blocks-for-gutenberg"),
        },
        {
            value: "column5",
            label: __("5 Columns", "premium-blocks-for-gutenberg"),
        },
        {
            value: "column6",
            label: __("6 Columns", "premium-blocks-for-gutenberg"),
        },
    ];

    const iconsList = [
        {
            value: Social.facebook,
            label: __("facebook", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.twitter,
            label: __("twitter", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.instagram,
            label: __("instagram", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.youtube,
            label: __("youtube", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.linkedin,
            label: __("linkedin", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.flickr,
            label: __("flickr", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.github,
            label: __("github", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.googlePlus,
            label: __("google-plus", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.pinterest,
            label: __("pinterest", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.reddit,
            label: __("reddit", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.skype,
            label: __("skype", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.stack_overflow,
            label: __("stack-overflow", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.whatsapp,
            label: __("whatsapp", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.vimeo,
            label: __("vimeo", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.tumblr,
            label: __("tumblr", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.dribbble,
            label: __("dribbble", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.quora,
            label: __("quora", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.foursquare,
            label: __("foursquare", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.wordpress,
            label: __("wordpress", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.stumbleupon,
            label: __("stumbleupon", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.yahoo,
            label: __("yahoo", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.soundcloud,
            label: __("soundcloud", "premium-blocks-for-gutenberg"),
        },
    ];

    let loadTitleGoogleFonts;
    let loadNameGoogleFonts;
    let loadDescriptionGoogleFonts;

    if (nameTypography.fontFamily !== "Default") {
        const gconfig = {
            google: {
                families: [nameTypography?.fontFamily]
            }
        };
        loadNameGoogleFonts = (
            <WebfontLoader config={gconfig}></WebfontLoader>
        );
    }

    if (titleTypography.fontFamily !== "Default") {
        const gconfig = {
            google: {
                families: [titleTypography?.fontFamily]
            }
        };
        loadTitleGoogleFonts = (
            <WebfontLoader config={gconfig}></WebfontLoader>
        );
    }

    if (descTypography.fontFamily !== "Default") {
        const gconfig = {
            google: {
                families: [descTypography?.fontFamily]
            }
        };
        loadDescriptionGoogleFonts = (
            <WebfontLoader config={gconfig}></WebfontLoader>
        );
    }

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-person:hover`] = {
            'border-color': `${borderHoverColor} !important`
        };
        styles[` .${blockId} .premium-person__social-List li:hover .premium-social-media-icon`] = {
            'fill': `${socialIconStyles[0].socialIconHoverColor} !important`,
            '-webkit-transition': `all .2s ease-in-out !important`,
            'transition': `all .2s ease-in-out !important`,
        };
        styles[` .${blockId} .premium-person__img_wrap `] = {
            'height': `${imgHeight[props.deviceType]}${imgHeight.unit} !important`,
            'width': `${imgWidth[props.deviceType]}${imgWidth.unit} !important`,

        };

        styles[` .${blockId} .premium-person__img_wrap img`] = {
            "border-style": `${imageBorder?.borderType}`,
            "border-color": `${imageBorder?.borderColor}`,
            "border-top-width": `${imageBorder?.borderWidth?.[props.deviceType]?.top}px!important`,
            "border-right-width": `${imageBorder?.borderWidth?.[props.deviceType]?.right}px!important`,
            "border-bottom-width": `${imageBorder?.borderWidth?.[props.deviceType]?.bottom}px!important`,
            "border-left-width": `${imageBorder?.borderWidth?.[props.deviceType]?.left}px!important`,
            "border-top-left-radius": `${imageBorder?.borderRadius?.[props.deviceType]?.top}px!important`,
            "border-top-right-radius": `${imageBorder?.borderRadius?.[props.deviceType]?.right}px!important`,
            "border-bottom-left-radius": `${imageBorder?.borderRadius?.[props.deviceType]?.bottom}px!important`,
            "border-bottom-right-radius": `${imageBorder?.borderRadius?.[props.deviceType]?.left}px!important`,
            'filter': `brightness( ${imageFilter.bright}% ) contrast( ${imageFilter.contrast}% ) saturate( ${imageFilter.saturation}% ) blur( ${imageFilter.blur}px ) hue-rotate( ${imageFilter.hue}deg ) !important`
        };
        styles[` .${blockId} .premium-social-media-icon`] = {
            'fill': `${socialIconStyles[0].socialIconColor} !important`,
            'height': `${socialIconSize[props.deviceType]}${socialIconSize.unit} !important`,
            'width': `${socialIconSize[props.deviceType]}${socialIconSize.unit} !important`,
        };

        return generateCss(styles);
    }

    const save = (value, index) => {

        let array = [];

        const newItems = multiPersonContent.map((item, thisIndex) => {
            if (index === thisIndex) {
                item = { ...item, ...value };
            }
            if (item.socialIcon) {
                array.push(true);
            }
            if (array.length != 0) {
                setAttributes({
                    socialIcon: true,
                });
            } else {
                setAttributes({
                    socialIcon: false,
                });
            }
            return item;
        });
        setAttributes({
            multiPersonContent: newItems,
        });
    }

    const shouldCancelStart = (e) => {
        // Prevent sorting from being triggered if target is input or button
        if (["div", "button", "input"].indexOf(e.target.tagName.toLowerCase()) !== -1) {
            return true; // Return true to cancel sorting
        }
    };

    const saveSocialIconStyles = (value) => {
        const newUpdate = socialIconStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            socialIconStyles: newUpdate,
        });
    };

    const addLink = (value, i) => {
        value.link = !value.link;
        value.link == false ? (value.changeinput = value.value) : value.changeinput;

        let array = multiPersonContent
            .map((cont) => cont)
            .filter((f) => f.id == i + 1);
        let newData = array[0].items.filter((b) => {
            return b;
        });
        array[0].items = newData;
        multiPersonContent[i] = array[0];
        setAttributes((multiPersonContent[i] = array[0]));
    };

    const changeLinkValue = (value, i, personIndex) => {
        i.changeinput = value;
        i.value = value;

        let arrayItem = multiPersonContent
            .map((cont) => cont)
            .filter((f) => f.id == personIndex + 1);

        let newData = arrayItem[0].items.filter((b) => {
            return b;
        });

        arrayItem[0].items = newData;
        multiPersonContent[personIndex] = arrayItem[0];
        setAttributes((multiPersonContent[personIndex] = arrayItem[0]));
    };

    const onRemove = (value, i) => {
        let array = multiPersonContent
            .map((cont) => cont)
            .filter((f) => f.id == i + 1);

        let newData = array[0].items.filter((b) => {
            return b.label != value;
        });

        array[0].items = newData;
        multiPersonContent[i] = array[0];
        setAttributes((multiPersonContent[i] = array[0]));
    };

    const socialIconfn = (v) => {
        return (
            <ul className="premium-person__social-List">
                {v.map((value) => (
                    <li>
                        <a
                            className={`premium-person__socialIcon__link_content ${socialIconStyles[0].defaultIconColor ? value.label : ""}`}
                            href={`${value.value}`}
                            style={{
                                ...borderCss(socialIconBorder, props.deviceType),
                                ...paddingCss(socialIconPadding, props.deviceType),
                                ...marginCss(socialIconMargin, props.deviceType),
                                background: socialIconStyles[0].socialIconBackgroundColor,
                                color: socialIconStyles[0].socialIconColor,
                                fontSize: (socialIconSize[props.deviceType] || 20) + socialIconSize.unit
                            }}
                        >
                            {(iconsList || []).map((list) => {
                                if (list.label == value.label) {
                                    return list.value
                                }
                            })}
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

    const content = () => {
        return (
            <div
                className={`premium-person-content ${multiPersonChecked > 1 ? `premium-person__${rowPerson}` : ""}`}
            >
                {" "}
                {multiPersonContent.map((value, index) => (
                    <div
                        key={value.id}
                        className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}
                    >
                        <div className={`premium-person__img__container`}>
                            <div className={`premium-person__img_wrap`}>
                                {effectPersonStyle === "effect2" && value.socialIcon ? (
                                    <div
                                        className={`premium-person__socialEffect2`}
                                    >
                                        {value.socialIcon && socialIconfn(value.items)}
                                    </div>
                                ) : (
                                        ""
                                    )}
                                {value.personImgUrl && (
                                    <img
                                        className={`premium-person__img`}
                                        src={`${value.personImgUrl}`}
                                        alt="Person"
                                    />
                                )}
                                {!value.personImgUrl && (<DefaultImage className={className} />)}
                            </div>

                        </div>
                        <div
                            className={`premium-person__info`}
                            style={{
                                ...paddingCss(contentPadding, props.deviceType),
                                background: contentColor ? contentColor : "#f2f2f2",
                                bottom: effectPersonStyle === "effect1" ? bottomInfo + "px" : ""
                            }}
                        >
                            {value.name && (
                                <RichText
                                    tagName={nameTag.toLowerCase()}
                                    className={`premium-person__name`}
                                    value={value.name}
                                    onChange={(name) => { save({ name: name }, index); }}
                                    style={{
                                        ...paddingCss(namePadding, props.deviceType),
                                        color: nameColor,
                                        ...typographyCss(nameTypography, props.deviceType),
                                        alignSelf: nameV,
                                        textShadow: `${nameShadow.horizontal}px ${nameShadow.vertical}px ${nameShadow.blur}px ${nameShadow.color}`,
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            )}
                            {value.title && (
                                <RichText
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-person__title`}
                                    value={value.title}
                                    onChange={(title) => { save({ title: title }, index) }}
                                    style={{
                                        ...marginCss(titleMargin, props.deviceType),
                                        ...paddingCss(titlePadding, props.deviceType),
                                        ...typographyCss(titleTypography, props.deviceType),
                                        color: titleColor,
                                        alignSelf: titleV,
                                        textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`,
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            )}
                            {value.desc && (
                                <RichText
                                    tagName="span"
                                    className={`premium-person__desc`}
                                    value={value.desc}
                                    onChange={(desc) => { save({ desc: desc }, index) }}
                                    style={{
                                        ...paddingCss(descPadding, props.deviceType),
                                        ...typographyCss(descTypography, props.deviceType),
                                        color: descColor,
                                        alignSelf: descV,
                                        textShadow: `${descShadow.horizontal}px ${descShadow.vertical}px ${descShadow.blur}px ${descShadow.color}`,
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            )}
                            {effectPersonStyle == "effect1" ? (
                                <div>
                                    {value.socialIcon && socialIconfn(value.items)}
                                </div>
                            ) : (
                                    ""
                                )}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const addSocialIcon = (newsocial, index) => {
        let array = iconsList
            .map((i) => i)
            .filter((f) => f.value == newsocial);

        if (array[0] != undefined) {
            newsocial = array[0];
            setAttributes({ selectedSocialMediaIcon: newsocial.label });

            const newicon = newsocial.label;

            let arrayItem = multiPersonContent
                .map((cont) => cont)
                .filter((f) => f.id == index + 1);

            let repeat = arrayItem[0].items.filter(
                (d) => d.label == newicon
            );

            if (repeat[0] != undefined) {
                arrayItem[0].items.filter((d) => d.label != newicon);
                multiPersonContent[index] = arrayItem[0];
                setAttributes((multiPersonContent[index] = arrayItem[0]));
            } else {
                arrayItem[0].items.push({
                    label: newicon,
                    link: false,
                    value: "",
                    changeinput: "#",
                });
                arrayItem[0].items.filter((d) => d.label != newicon);
                multiPersonContent[index] = arrayItem[0];
                setAttributes((multiPersonContent[index] = arrayItem[0]));
            }
        }
    };

    const addMultiPerson = (newP) => {
        let multi = [...multiPersonContent];
        if (multi.length < newP) {
            const incAmount = Math.abs(newP - multi.length);
            {
                times(incAmount, () => {
                    multi.push({
                        id: multi.length + 1,
                        personImgUrl: multi[0].personImgUrl,
                        personImgId: "",
                        name: multi[0].name,
                        title: multi[0].title,
                        desc: multi[0].desc,
                        socialIcon: multi[0].socialIcon,
                        items: [
                            { label: "facebook", link: false, value: "#", changeinput: "#" },
                            { label: "twitter", link: false, value: "#", changeinput: "#" },
                            { label: "instagram", link: false, value: "#", changeinput: "#" },
                            { label: "youtube", link: false, value: "#", changeinput: "#" },
                        ],
                    });
                });
            }
            setAttributes({ multiPersonContent: multi });
        } else {
            for (let i = multiPersonChecked; i > newP; i--) {
                multiPersonContent.splice(i - 1, 1);
            }
        }
        setAttributes({ multiPersonChecked: newP });
    };

    const onSortEndMulti = (i, { oldIndex, newIndex }) => {
        let arrayItem = multiPersonContent
            .map((cont) => cont)
            .filter((f) => f.id == i + 1);

        const array = arrayMove(arrayItem[0].items, oldIndex, newIndex);

        arrayItem[0].items = array;
        multiPersonContent[i] = arrayItem[0];
        setAttributes((multiPersonContent[i] = arrayItem[0]));
    };

    const renderSVG = svg => (
        svg
    );

    const MultiPersonSetting = (index) => {
        return (
            <PanelBody
                key={index}
                title={__(`Person #${index + 1} Setting`, "premium-blocks-for-gutenberg")}
                initialOpen={false}
            >
                <PremiumMediaUpload
                    type="image"
                    imageID={multiPersonContent[index].personImgId}
                    imageURL={multiPersonContent[index].personImgUrl}
                    onSelectMedia={(media) => {
                        save({ personImgId: media.id }, index);
                        save({ personImgUrl: media.url }, index);
                    }}
                    onRemoveImage={() => {
                        save({ personImgId: "" }, index);
                        save({ personImgUrl: "" }, index);
                    }}
                />
                <ToggleControl
                    label={__("Enable Social Icons", "premium-block-for-gutenberg")}
                    checked={multiPersonContent[index].socialIcon}
                    onChange={(value) => { save({ socialIcon: value }, index) }}
                />
                {multiPersonContent[index].socialIcon && (
                    <div className="premium-repeater-rows">
                        <label className="premium-repeater-label">
                            {__("Social Media", "premium-block-for-gutenberg")}
                        </label>
                        <FontIconPicker
                            icons={iconsList.map((i) => i.value)}
                            renderFunc={renderSVG}
                            onChange={(value) => addSocialIcon(value, index)}
                            isMulti={false}
                            closeOnSelect={false}
                            iconsPerPage={25}
                            noSelectedPlaceholder={__("Select Icon", "premium-block-for-gutenberg")}
                        />
                        <SortableList
                            items={multiPersonContent[index].items}
                            personIndex={index}
                            onSortEnd={(o, n) => onSortEndMulti(index, o, n)}
                            onRemove={(value) => onRemove(value, index)}
                            changeLinkValue={(value, i) => changeLinkValue(value, i, index)}
                            addLink={(value) => addLink(value, index)}
                            shouldCancelStart={shouldCancelStart}
                            helperClass="premium-person__sortableHelper"
                        />
                    </div>
                )}
            </PanelBody>
        );
    };

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__("General Settings", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <ResponsiveSingleRangeControl
                                label={__("Person Number", "premium-block-for-gutenberg")}
                                value={multiPersonChecked}
                                onChange={(value) => addMultiPerson(value)}
                                showUnit={false}
                                defaultValue={1}
                                min={1}
                                max={20}
                            />
                            {multiPersonChecked > 1 ? (
                                <SelectControl
                                    label={__("Persons/Row", "premium-block-for-gutenberg")}
                                    value={rowPerson}
                                    onChange={(newColumn) => setAttributes({ rowPerson: newColumn })}
                                    options={ROWS}
                                />
                            ) : (
                                    ""
                                )}
                            <SelectControl
                                label={__("Style", "premium-block-for-gutenberg")}
                                value={effectPersonStyle}
                                onChange={(newEffect) => setAttributes({ effectPersonStyle: newEffect })}
                                options={EFFECTS}
                            />
                            <RadioComponent
                                label={__("Name Tag", "premium-blocks-for-gutenberg")}
                                choices={[
                                    { value: "h1", label: __("H1", "premium-block-for-gutenberg") },
                                    { value: "h2", label: __("H2", "premium-block-for-gutenberg") },
                                    { value: "h3", label: __("H3", "premium-block-for-gutenberg") },
                                    { value: "h4", label: __("H4", "premium-block-for-gutenberg") },
                                    { value: "h5", label: __("H5", "premium-block-for-gutenberg") },
                                    { value: "h6", label: __("H6", "premium-block-for-gutenberg") },
                                ]}
                                value={nameTag}
                                onChange={(newValue) => setAttributes({ nameTag: newValue })}
                            />
                            <RadioComponent
                                label={__("Title Tag", "premium-blocks-for-gutenberg")}
                                choices={[
                                    { value: "h1", label: __("H1", "premium-block-for-gutenberg") },
                                    { value: "h2", label: __("H2", "premium-block-for-gutenberg") },
                                    { value: "h3", label: __("H3", "premium-block-for-gutenberg") },
                                    { value: "h4", label: __("H4", "premium-block-for-gutenberg") },
                                    { value: "h5", label: __("H5", "premium-block-for-gutenberg") },
                                    { value: "h6", label: __("H6", "premium-block-for-gutenberg") },
                                ]}
                                value={titleTag}
                                onChange={(newValue) => setAttributes({ titleTag: newValue })}
                            />
                            <ResponsiveRadioControl
                                label={__("Alignment", "premium-blocks-for-gutenberg")}
                                choices={[
                                    { value: "left", label: __("Left", "premium-block-for-gutenberg"), icon: Icons.alignLeft },
                                    { value: "center", label: __("Center", "premium-block-for-gutenberg"), icon: Icons.alignCenter },
                                    { value: "right", label: __("Right", "premium-block-for-gutenberg"), icon: Icons.alignRight },
                                ]}
                                value={align}
                                onChange={(newValue) => setAttributes({ align: newValue })}
                                showIcons={true}
                            />
                        </PanelBody>
                        {times(multiPersonChecked, (n) =>
                            MultiPersonSetting(n)
                        )}
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Name", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumTypo
                                value={nameTypography}
                                onChange={(newValue) => setAttributes({ nameTypography: newValue })}
                            />
                            <AdvancedPopColorControl
                                label={__("Color", "premium-block-for-gutenberg")}
                                colorValue={nameColor}
                                colorDefault={""}
                                onColorChange={(newValue) => setAttributes({ nameColor: newValue })}
                            />
                            <PremiumShadow
                                label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                value={nameShadow}
                                onChange={(value) => setAttributes({ nameShadow: value })}
                            />
                            <SpacingControl
                                label={__("Padding", "premium-blocks-for-gutenberg")}
                                value={namePadding}
                                onChange={(value) => setAttributes({ namePadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Title", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                value={titleTypography}
                                onChange={(newValue) => setAttributes({ titleTypography: newValue })}
                            />
                            <div className="premium-control-toggle">
                                <AdvancedPopColorControl
                                    label={__("Color", 'premium-block-for-gutenberg')}
                                    colorValue={titleColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        setAttributes({
                                            titleColor: newValue
                                        })
                                    }
                                />
                            </div>
                            <PremiumShadow
                                label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                value={titleShadow}
                                onChange={(value) => setAttributes({ titleShadow: value })}
                            />
                            <hr />
                            <SpacingControl
                                label={__("Margin", "premium-blocks-for-gutenberg")}
                                value={titleMargin}
                                onChange={(value) => setAttributes({ titleMargin: value })}
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__("Padding", "premium-blocks-for-gutenberg")}
                                value={titlePadding}
                                onChange={(value) => setAttributes({ titlePadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Description", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                value={descTypography}
                                onChange={(newValue) => setAttributes({ descTypography: newValue })}
                            />
                            <div className="premium-control-toggle">
                                <AdvancedPopColorControl
                                    label={__("Color", "premium-block-for-gutenberg")}
                                    colorValue={descColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) => setAttributes({ descColor: newValue })}
                                />
                            </div>
                            <PremiumShadow
                                label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                value={descShadow}
                                onChange={(value) => setAttributes({ descShadow: value })}
                            />
                            <SpacingControl
                                label={__("Padding", "premium-blocks-for-gutenberg")}
                                value={descPadding}
                                onChange={(value) => setAttributes({ descPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Image Style", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumFilters
                                value={imageFilter}
                                onChange={(value) => setAttributes({ imageFilter: value })}
                            />
                            <ResponsiveRangeControl
                                label={__("Custom Image Width", "premium-blocks-for-gutenberg")}
                                value={imgWidth}
                                onChange={(value) => setAttributes({ imgWidth: value })}
                                min={1}
                                max={500}
                                step={1}
                                showUnit={true}
                                units={["px", "em", "%"]}
                                defaultValue={200}
                            />
                            <ResponsiveRangeControl
                                label={__("Custom Image Height", "premium-blocks-for-gutenberg")}
                                value={imgHeight}
                                onChange={(value) => setAttributes({ imgHeight: value })}
                                min={1}
                                max={500}
                                step={1}
                                showUnit={true}
                                units={["px", "em"]}
                                defaultValue={200}
                            />
                            <SelectControl
                                label={__("Image Hover Effect", "premium-block-for-gutenberg")}
                                options={HOVER}
                                value={hoverEffectPerson}
                                onChange={(newEffect) => setAttributes({ hoverEffectPerson: newEffect })}
                            />
                            <PremiumBorder
                                value={imageBorder}
                                onChange={(value) => setAttributes({ imageBorder: value })}
                            />
                        </PanelBody>
                        {socialIcon && (
                            <PanelBody
                                title={__("Social Icon", "premium-blocks-for-gutenberg")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveRangeControl
                                    label={__("Size", "premium-blocks-for-gutenberg")}
                                    value={socialIconSize}
                                    onChange={(value) => setAttributes({ socialIconSize: value })}
                                    min={1}
                                    max={100}
                                    step={1}
                                    showUnit={true}
                                    units={["px", "em", "rem"]}
                                    defaultValue={20}
                                />
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", "premium-block-for-gutenberg")}>
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Social Icon Color", "premium-block-for-gutenberg")}
                                                colorValue={socialIconStyles[0].socialIconColor}
                                                colorDefault={""}
                                                onColorChange={(newValue) => saveSocialIconStyles({ socialIconColor: newValue })}
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Social Icon Background Color", "premium-block-for-gutenberg")}
                                                colorValue={socialIconStyles[0].socialIconBackgroundColor}
                                                colorDefault={""}
                                                onColorChange={(newValue) => saveSocialIconStyles({ socialIconBackgroundColor: newValue })}
                                            />
                                        </Fragment>
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", "premium-block-for-gutenberg")}>
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Social Icon Hover Color", "premium-block-for-gutenberg")}
                                                colorValue={socialIconStyles[0].socialIconHoverColor}
                                                colorDefault={""}
                                                onColorChange={(newValue) => saveSocialIconStyles({ socialIconHoverColor: newValue })}
                                            />
                                        </Fragment>
                                    </InsideTab>
                                </InsideTabs>
                                <ToggleControl
                                    label={__("Brands Default Colors", "premium-block-for-gutenberg")}
                                    checked={socialIconStyles[0].defaultIconColor}
                                    onChange={(newCheck) => saveSocialIconStyles({ defaultIconColor: newCheck })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border", "premium-blocks-for-gutenberg")}
                                    value={socialIconBorder}
                                    onChange={(value) => setAttributes({ socialIconBorder: value })}
                                />
                                <hr />
                                <SpacingControl
                                    label={__("Margin", "premium-blocks-for-gutenberg")}
                                    value={socialIconMargin}
                                    onChange={(value) => setAttributes({ socialIconMargin: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                                <SpacingControl
                                    label={__("Padding", "premium-blocks-for-gutenberg")}
                                    value={socialIconPadding}
                                    onChange={(value) => setAttributes({ socialIconPadding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                        )}
                        <PanelBody
                            title={__("Content", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <AdvancedPopColorControl
                                    label={__("Color", "premium-block-for-gutenberg")}
                                    colorValue={contentColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) => setAttributes({ contentColor: newValue })}
                                />
                            </div>
                            {effectPersonStyle === "effect1" ? (
                                <ResponsiveSingleRangeControl
                                    label={__("Bottom Offset", "premium-block-for-gutenberg")}
                                    value={bottomInfo}
                                    onChange={(newValue) => setAttributes({ bottomInfo: newValue })}
                                    showUnit={false}
                                    defaultValue={15}
                                    min={15}
                                />
                            ) : (
                                    ""
                                )}
                            <SpacingControl
                                label={__("Padding", "premium-blocks-for-gutenberg")}
                                value={contentPadding}
                                onChange={(value) => setAttributes({ contentPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({
                                    hideDesktop: value
                                        ? " premium-desktop-hidden"
                                        : "",
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value
                                        ? " premium-tablet-hidden"
                                        : "",
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value
                                        ? " premium-mobile-hidden"
                                        : "",
                                })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-person ${blockId} premium-person__${effect} premium-person__${effectDir}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{ textAlign: align[props.deviceType] }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles(),
                    }}
                />
                {content()}
                {loadNameGoogleFonts}
                {loadTitleGoogleFonts}
                {loadDescriptionGoogleFonts}
            </div>
        </Fragment>
    );
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return { deviceType: deviceType };
})(Edit);