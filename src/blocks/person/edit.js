import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import DefaultImage from "../../components/default-image";
import PremiumFilters from "../../components/premium-filters";
import PremiumMargin from "../../components/premium-margin";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumSizeUnits from "../../components/premium-size-units";
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
        imgSize,
        imgBorder,
        imgBorderColor,
        nameColor,
        nameSize,
        nameWeight,
        nameV,
        titleColor,
        titleSize,
        titleWeight,
        titleV,
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
        hoverEffectPerson,
        effectPersonStyle,
        multiPersonContent,
        socialIconPadding,
        socialIconPaddingU,
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

    const EFFECTS = [
        {
            value: "effect1",
            label: __("Style 1")
        },
        {
            value: "effect2",
            label: __("Style 2")
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

    const SortableItem = SortableElement(({ index, onRemove, value }) => <li tabIndex={0}>
        <span className="premium-person__socialIcon__container">
            <span className="premium-person__socialIcon__dragHandle"></span>
            <span className="premium-person__socialIcon__content">
                <span className={`premium-person__socialIcon__iconvalue fa fa-${value}`}></span>
                <span>{value}</span>
            </span>
            <button className="premium-person__socialIcon__trashicon fa fa-trash" onClick={() => onRemove(value)}></button>
        </span>
    </li>);

    const shouldCancelStart = (e) => {
        // Prevent sorting from being triggered if target is input or button
        if (['input', 'button'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
            return true; // Return true to cancel sorting
        }
    }

    const onRemove = (value, i) => {
        console.log(value);
        console.log(i);
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            console.log(array[0]);
            let newData = (array[0].items).filter(b => {
                return b != value
            })
            console.log(newData);
            array[0].items = newData
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
            console.log(multiPersonContent);
        }
        else {
            let arrayItem = multiPersonContent.map((cont) => (
                cont
            ))
            let newData = (arrayItem[0].items).filter(b => {
                return b != value
            })
            setAttributes({ multiPersonContent: [{ id: 1, name: arrayItem[0].name, title: arrayItem[0].title, desc: arrayItem[0].desc, socialIcon: arrayItem[0].socialIcon, items: newData }] });
        }
    };

    const SortableList = SortableContainer(({ items, onRemove }) => {
        return (
            <ul>
                {(items).map((value, index) => (
                    <SortableItem key={`item-${value}`} index={index} value={value} onRemove={onRemove} />
                ))}
            </ul>
        );
    });
    const socialIconfn = (v) => {
        return <div>{(v).map((value) => (
            <i className={`premium-person__socialIcon ${defaultIconColor ? value : ""} ${value == "youtube" ? "fa fa-youtube-play" : `fa fa-${value}`} premium-person__${socialIconHoverColor}`}
                style={{
                    color: defaultIconColor ? "#ffffff" : socialIconColor,
                    background: defaultIconColor ? "" : socialIconBackgroundColor,
                    fontSize: (socialIconSize || 50) + iconSizeUnit,
                    border: borderTypeIcon,
                    borderWidth: borderWidthIcon + "px",
                    borderRadius: borderRadiusIcon || 100 + "px",
                    borderColor: borderColorIcon,
                    marginTop: iconMarginT,
                    marginBottom: iconMarginB,
                    padding: socialIconPadding + socialIconPaddingU,
                }}
            />

        ))}
        </div>
    }

    const content = () => {
        return <div className={`${multiPersonChecked > 1 ? `premium-person__multiPersonChecked` : ""}`}
        > {multiPersonContent.map((value) => (
            <div key={value.id} className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}>
                <div
                    className={`premium-person__img_wrap`}
                >
                    {value.personImgUrl && (
                        <img
                            className={`premium-person__img`}
                            src={`${value.personImgUrl}`}
                            alt="Person"
                            style={{

                                borderWidth: imgBorder + "px",
                                borderColor: imgBorderColor,
                                width: imgSize + "px",
                                height: imgSize + "px",
                                filter: `brightness( ${value.bright}% ) contrast( ${value.contrast}% ) saturate( ${value.saturation}% ) blur( ${value.blur}px ) hue-rotate( ${value.hue}deg )`
                            }}
                        />
                    )}
                    {!value.personImgUrl && <DefaultImage className={className} />}
                </div>

                <div
                    className={`premium-person__info`}
                >
                    <div className={`premium-person__name_wrap`}>
                        {value.name && (
                            <span
                                className={`premium-person__name${value.name}`}
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
                                {value.name}
                            </span>
                        )}
                    </div>
                    <div className={`premium-person__title_wrap`}>
                        {value.title && (
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
                                {value.title}
                            </span>
                        )}
                    </div>
                    <div className={`premium-person__desc_wrap`}>
                        {value.desc && (
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
                                {value.desc}
                            </span>
                        )}
                    </div>
                    {value.socialIcon && (
                        <div>
                            {socialIconfn(value.items)}
                        </div>
                    )}
                </div>
            </div>
        ))}

        </div>
    }

    const onSortEndSingle = ({ oldIndex, newIndex }) => {
        let arrayItem = multiPersonContent.map((cont) => (
            cont
        ))
        console.log("arrayItem", arrayItem[0].items);

        const array = arrayMove(arrayItem[0].items, oldIndex, newIndex)
        setAttributes({ multiPersonContent: [{ id: 1, name: arrayItem[0].name, title: arrayItem[0].title, desc: arrayItem[0].desc, socialIcon: arrayItem[0].socialIcon, items: array }] });
    };

    const addSocialIcon = (newsocial, index) => {
        let array = iconsList.map((i) => (
            i
        )).filter(f => f.value == newsocial)
        if (array[0] != undefined) {
            newsocial = array[0];
            setAttributes({ selectedSocialMediaIcon: newsocial.label });
            const newicon = newsocial.label;

            let arrayItem = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == index)
            arrayItem[0].items.push(newicon)
            multiPersonContent[index - 1] = arrayItem[0]
            setAttributes(multiPersonContent[index - 1] = arrayItem[0]);
        }
    };
    const addMultiPerson = (newP) => {
        if (newP < multiPersonChecked) {
            multiPersonContent.splice(newP, 1);
            setAttributes({ multiPersonChecked: newP })
        }
        else {
            setAttributes({ multiPersonChecked: newP })
            multiPersonContent.push({
                id: newP,
                personImgUrl: "",
                name: "Merna Hanna",
                title: "Senior Developer",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla",
                socialIcon: false,
                items: ['facebook', 'twitter', 'instagram', 'youtube'],
                blur: "0",
                bright: "100",
                contrast: "100",
                saturation: "100",
                hue: "0"
            })
        }
    };

    const onSortEndMulti = (i, { oldIndex, newIndex }) => {
        let arrayItem = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i);
        const array = arrayMove(arrayItem[0].items, oldIndex, newIndex)
        arrayItem[0].items = array
        multiPersonContent[i - 1] = arrayItem[0]
        setAttributes(multiPersonContent[i - 1] = arrayItem[0]);
    };
    const PersonImage = (media, i) => {
        console.log(media);

        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].personImgUrl = "undefined" === typeof media.sizes.thumbnail
            ? media.url
            : media.sizes.thumbnail.url
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
        setAttributes({
            personImgId: media.id
        })
    }
    const Blur = (value, i) => {
        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].blur = value
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
    }
    const Bright = (value, i) => {
        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].bright = value
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
    }
    const Saturation = (value, i) => {
        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].saturation = value
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
    }
    const Contrast = (value, i) => {
        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].contrast = value
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
    }
    const Hue = (value, i) => {
        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].hue = value
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
    }
    const Name = (value, i) => {
        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].name = value
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
    }
    const Title = (value, i) => {
        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].title = value
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
    }
    const Desc = (value, i) => {
        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].desc = value
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
    }
    const SocialIcon = (value, i) => {
        let array = multiPersonContent.map((cont) => (
            cont
        )).filter(f => f.id == i)
        array[0].socialIcon = value
        multiPersonContent[i - 1] = array[0]
        setAttributes(multiPersonContent[i - 1] = array[0]);
    }

    const singleImage = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].personImgUrl = "undefined" === typeof value.sizes.thumbnail
            ? value.url
            : value.sizes.thumbnail.url
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        setAttributes({
            personImgId: value.id
        })
    }
    const singleBlur = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].blur = value
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
    }
    const singleBright = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].bright = value
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
    }
    const singleContrast = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].contrast = value
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
    }
    const singleSaturation = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].saturation = value
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
    }
    const singleHue = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].hue = value
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
    }
    const singleName = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].name = value
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
    }

    const singleTitle = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].title = value
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
    }
    const singleDesc = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].desc = value
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
    }
    const singleSocialIcon = (value) => {
        let array = multiPersonContent.map((content) => (
            content
        ))
        array[0].socialIcon = value
        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
    }
    const singleaddSocialIcon = (newsocial) => {
        let array = iconsList.map((i) => (
            i
        )).filter(f => f.value == newsocial)
        if (array[0] != undefined) {
            newsocial = array[0];
            setAttributes({ selectedSocialMediaIcon: newsocial.label });
            const newicon = newsocial.label;

            let arrayItem = multiPersonContent.map((cont) => (
                cont
            ))
            arrayItem[0].items.push(newicon)
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: arrayItem[0].name, title: arrayItem[0].title, desc: arrayItem[0].desc, socialIcon: arrayItem[0].socialIcon, items: arrayItem[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        }
    }

    const MultiPersonSetting = () => {
        return <PanelBody>
            {multiPersonContent.map((content) => (
                <PanelBody key={content.id} title={__(`Person #${content.id} Setting`)}
                    initialOpen={false}>
                    <p>{__("Image")}</p>
                    {content.personImgUrl && (
                        <img src={content.personImgUrl} width="100%" height="auto" />
                    )}
                    {!content.personImgUrl && <DefaultImage />}
                    <MediaUpload
                        allowedTypes={["image"]}
                        onSelect={media => PersonImage(media, content.id)}
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
                        blur={content.blur}
                        bright={content.bright}
                        contrast={content.contrast}
                        saturation={content.saturation}
                        hue={content.hue}
                        onChangeBlur={value => Blur(value, content.id)}
                        onChangeBright={value => Bright(value, content.id)}
                        onChangeContrast={value => Contrast(value, content.id)}
                        onChangeSat={value => Saturation(value, content.id)}
                        onChangeHue={value => Hue(value, content.id)}
                    />
                    <TextControl
                        label={__("Name")}
                        value={content.name}
                        onChange={(value) => Name(value, content.id)}
                    />
                    <TextControl
                        label={__("Title")}
                        value={content.title}
                        onChange={value => Title(value, content.id)}
                    />
                    <TextareaControl
                        label={__("Description")}
                        value={content.desc}
                        onChange={value => Desc(value, content.id)}
                    />
                    <ToggleControl
                        label={__("Enable Social Icons")}
                        checked={content.socialIcon}
                        onChange={value => SocialIcon(value, content.id)}
                    />
                    {content.socialIcon && (
                        <div>
                            <p className="premium-person-paragraph">{__("Social Media")}</p>
                            <FontIconPicker
                                icons={iconsList.map((i) => (
                                    i.value
                                ))}
                                onChange={value => addSocialIcon(value, content.id)}
                                isMulti={false}
                                appendTo="body"
                                noSelectedPlaceholder={__("Select Icon")}
                                noIconPlaceholder={__("No icons found")}
                            />
                            <SortableList items={content.items} onSortEnd={(o, n) => onSortEndMulti(content.id, o, n)} onRemove={(value) => onRemove(value, content.id)} shouldCancelStart={shouldCancelStart} />
                        </div>
                    )}
                </PanelBody>
            ))}
        </PanelBody>
    }

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
                    <RangeControl
                        label={__("Person Number")}
                        value={multiPersonChecked}
                        onChange={value => addMultiPerson(value)}
                    />
                    <p>{__("Enable this option if you need to add multiple persons")}</p>
                    <SelectControl
                        label={__("Style")}
                        value={effectPersonStyle}
                        onChange={newEffect => setAttributes({ effectPersonStyle: newEffect })}
                        options={EFFECTS}
                    />
                    <SelectControl
                        label={__("Image Hover Effect")}
                        options={HOVER}
                        value={hoverEffectPerson}
                        onChange={newEffect => setAttributes({ hoverEffectPerson: newEffect })}
                    />

                </PanelBody>
                {multiPersonChecked > 1 ?
                    <PanelBody
                        title={__("Multi Person Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        {MultiPersonSetting()}
                    </PanelBody> :
                    <PanelBody
                        title={__("Single Person Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Image")}</p>
                        {multiPersonContent[0].personImgUrl && (
                            <img src={multiPersonContent[0].personImgUrl} width="100%" height="auto" />
                        )}
                        {!multiPersonContent[0].personImgUrl && <DefaultImage />}
                        <MediaUpload
                            allowedTypes={["image"]}
                            onSelect={media => singleImage(media)}
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
                            blur={multiPersonContent[0].blur}
                            bright={multiPersonContent[0].bright}
                            contrast={multiPersonContent[0].contrast}
                            saturation={multiPersonContent[0].saturation}
                            hue={multiPersonContent[0].hue}
                            onChangeBlur={value => singleBlur(value)}
                            onChangeBright={value => singleBright(value)}
                            onChangeContrast={value => singleContrast(value)}
                            onChangeSat={value => singleSaturation(value)}
                            onChangeHue={value => singleHue(value)}
                        />
                        <TextControl
                            label={__("Name")}
                            value={multiPersonContent[0].name}
                            onChange={value => singleName(value)}
                        />
                        <TextControl
                            label={__("Title")}
                            value={multiPersonContent[0].title}
                            onChange={value => singleTitle(value)}
                        />
                        <TextareaControl
                            label={__("Description")}
                            value={multiPersonContent[0].desc}
                            onChange={value => singleDesc(value)}
                        />
                        <ToggleControl
                            label={__("Enable Social Icons")}
                            checked={multiPersonContent[0].socialIcon}
                            onChange={value => singleSocialIcon(value)}
                        />
                        {multiPersonContent[0].socialIcon && (
                            <div>
                                <p className="premium-person-paragraph">{__("Social Media")}</p>
                                <FontIconPicker
                                    icons={iconsList.map((i) => (
                                        i.value
                                    ))}
                                    onChange={value => singleaddSocialIcon(value)}
                                    isMulti={false}
                                    appendTo="body"
                                    noSelectedPlaceholder={__("Select Icon")}
                                    noIconPlaceholder={__("No icons found")}
                                />
                                <SortableList items={multiPersonContent[0].items} onSortEnd={(o, n) => onSortEndSingle(o, n)} onRemove={(value) => onRemove(value)} shouldCancelStart={shouldCancelStart} />
                            </div>
                        )}
                    </PanelBody>
                }
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
                {multiPersonContent[0].socialIcon && (<PanelBody
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
                    <PremiumSizeUnits
                        onChangeSizeUnit={newValue =>
                            setAttributes({ socialIconPaddingU: newValue })
                        }
                    />
                    <RangeControl
                        label={__("Padding")}
                        value={socialIconPadding}
                        onChange={newValue => setAttributes({ socialIconPadding: newValue })}
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
                        `border-color: ${borderHoverColor} !important;`,
                        "}",
                        `.premium-person__socialIcon:hover {`,
                        `color: ${defaultIconColor ? "" : `${socialIconHoverColor} !important;`}`,
                        "}"
                    ].join("\n")
                }}
            />
            {content()}
        </div>
    ];
};

export default edit;
