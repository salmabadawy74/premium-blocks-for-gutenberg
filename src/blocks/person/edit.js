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
        rowPerson,
        multiPersonContent,
        socialIconPadding,
        socialIconPaddingU
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
    const ROWS = [
        {
            value: "column1",
            label: __("1 Column")
        },
        {
            value: "column2",
            label: __("2 Columns")
        },
        {
            value: "column3",
            label: __("3 Columns")
        },
        {
            value: "column4",
            label: __("4 Columns")
        },
        {
            value: "column5",
            label: __("5 Columns")
        },
        {
            value: "column6",
            label: __("6 Columns")
        }
    ]

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

    const SortableItem = SortableElement(({ newIndex, onRemove, value, addLink, personIndex }) => <li tabIndex={0}>
        <span className="premium-person__socialIcon__container">
            <span className="premium-person__socialIcon__dragHandle"></span>
            <div className="premium-person__socialIcon__content" onClick={() => addLink(value)}>
                <span className={`premium-person__socialIcon__iconvalue fa fa-${value.label}`}></span>
                {value.label}
            </div>
            <button className="premium-person__socialIcon__trashicon fa fa-trash" onClick={() => onRemove(value.label)}></button>
        </span>
        {value.link && (
            <div className="premium-person__socialIcon__link">
                <TextControl
                    placeholder={__(`Enter ${value.label} link`)}
                    value={value.value}
                    onChange={(val) => LinkValue(val, newIndex, personIndex)}
                />
                <button className="premium-person__socialIcon__saveButton">Save</button>
            </div>
        )}
    </li>);

    const shouldCancelStart = (e) => {
        // Prevent sorting from being triggered if target is input or button
        if (['div', 'button', 'input'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
            return true; // Return true to cancel sorting
        }
    }
    const addLink = (value, i) => {
        console.log(value);
        console.log(i);
        if (i > 0) {
            value.link = !value.link
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            console.log(array[0]);
            let newData = (array[0].items).filter(b => {
                return b
            })
            console.log(newData);
            array[0].items = newData
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
            console.log(multiPersonContent);
        } else {
            value.link = !value.link
            let arrayItem = multiPersonContent.map((cont) => (
                cont
            ))
            console.log(arrayItem);

            let newData = (arrayItem[0].items).filter(b => {
                return b
            })
            console.log(newData);

            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: arrayItem[0].personImgUrl, name: arrayItem[0].name, title: arrayItem[0].title, desc: arrayItem[0].desc, socialIcon: arrayItem[0].socialIcon, items: newData, blur: arrayItem[0].blur, bright: arrayItem[0].bright, contrast: arrayItem[0].contrast, saturation: arrayItem[0].saturation, hue: arrayItem[0].hue }] });
            console.log(value.link);
        }
    }
    const LinkValue = (value, i, personIndex) => {
        console.log(value);
        console.log(i);
        console.log(personIndex)
        // if (personIndex > 0) { 
        //     i.value = value
        //     let arrayItem = multiPersonContent.map((cont) => (
        //         cont
        //     )).filter(f => f.id == personIndex)
        //     console.log(arrayItem[0]);
        //     let newData = (arrayItem[0].items).filter(b => {
        //         return b
        //     })
        //     console.log(newData);
        // }
        // else {
        //     i.value = value
        //     let arrayItem = multiPersonContent.map((cont) => (
        //         cont
        //     ))
        //     console.log(arrayItem);

        //     let newData = (arrayItem[0].items).filter(b => {
        //         return b
        //     })
        //     console.log(newData);

        //     setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: arrayItem[0].personImgUrl, name: arrayItem[0].name, title: arrayItem[0].title, desc: arrayItem[0].desc, socialIcon: arrayItem[0].socialIcon, items: newData, blur: arrayItem[0].blur, bright: arrayItem[0].bright, contrast: arrayItem[0].contrast, saturation: arrayItem[0].saturation, hue: arrayItem[0].hue }] });
        //     console.log(multiPersonContent);
        // }

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
                return b.label != value
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
                return b.label != value
            })
            console.log(newData);

            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: arrayItem[0].personImgUrl, name: arrayItem[0].name, title: arrayItem[0].title, desc: arrayItem[0].desc, socialIcon: arrayItem[0].socialIcon, items: newData, blur: arrayItem[0].blur, bright: arrayItem[0].bright, contrast: arrayItem[0].contrast, saturation: arrayItem[0].saturation, hue: arrayItem[0].hue }] });
            console.log(multiPersonContent);

        }
    };

    const SortableList = SortableContainer(({ items, onRemove, addLink, personIndex }) => {
        return (
            <ul>
                {(items).map((value, index) => (
                    <SortableItem key={`item-${value}`} index={index} newIndex={index} personIndex={personIndex} value={value} onRemove={onRemove} addLink={addLink} />
                ))}
            </ul>
        );
    });
    const socialIconfn = (v) => {
        return <div>{(v).map((value) => (
            <i className={`premium-person__socialIcon ${defaultIconColor ? value.label : ""} ${value.label == "youtube" ? "fa fa-youtube-play" : `fa fa-${value.label}`} premium-person__${socialIconHoverColor}`}
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
                    height: `${socialIconPadding > 0 ? "auto" : "1.2em"}`,
                    width: `${socialIconPadding > 0 ? "auto" : "1.2em"}`,
                }}
            />
        ))}
        </div>
    }

    const content = () => {
        return <div className={`${multiPersonChecked > 1 ? `premium-person__${rowPerson}` : ""}`}
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
                    {effectPersonStyle == 'effect2' ? <div className={`premium-person__socialEffect2`}>{value.socialIcon && (
                        <div>
                            {socialIconfn(value.items)}
                        </div>
                    )}</div> : ""}
                </div>

                <div
                    className={`premium-person__info`}
                >
                    <div className={`premium-person__name_wrap`}>
                        {value.name && (
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
                    {effectPersonStyle == 'effect1' ? <div>{value.socialIcon && (
                        <div>
                            {socialIconfn(value.items)}
                        </div>
                    )}</div> : ""}
                </div>
            </div>
        ))}

        </div>
    }

    const onSortEndSingle = ({ oldIndex, newIndex }) => {
        let arrayItem = multiPersonContent.map((cont) => (
            cont
        ))
        const array = arrayMove(arrayItem[0].items, oldIndex, newIndex)
        console.log(array);

        setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: arrayItem[0].personImgUrl, name: arrayItem[0].name, title: arrayItem[0].title, desc: arrayItem[0].desc, socialIcon: arrayItem[0].socialIcon, items: array, blur: arrayItem[0].blur, bright: arrayItem[0].bright, contrast: arrayItem[0].contrast, saturation: arrayItem[0].saturation, hue: arrayItem[0].hue }] });
    };

    const addSocialIcon = (newsocial, index) => {
        if (index > 0) {
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
                arrayItem[0].items.push({ label: newicon, link: false, value: "#" })
                multiPersonContent[index - 1] = arrayItem[0]
                setAttributes(multiPersonContent[index - 1] = arrayItem[0]);
            }
        }
        else {
            let array = iconsList.map((i) => (
                i
            )).filter(f => f.value == newsocial)
            console.log(array);

            if (array[0] != undefined) {
                newsocial = array[0];
                setAttributes({ selectedSocialMediaIcon: newsocial.label });
                const newicon = newsocial.label;

                let arrayItem = multiPersonContent.map((cont) => (
                    cont
                ))

                console.log(arrayItem[0].items.filter(d => d.label != newicon));

                let push = arrayItem[0].items.push({ label: newicon, link: false, value: "" })
                console.log(push);

                let filter = arrayItem[0].items.filter(d => d.label != newicon)
                console.log(filter);

                setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: arrayItem[0].personImgUrl, name: arrayItem[0].name, title: arrayItem[0].title, desc: arrayItem[0].desc, socialIcon: arrayItem[0].socialIcon, items: arrayItem[0].items, blur: arrayItem[0].blur, bright: arrayItem[0].bright, contrast: arrayItem[0].contrast, saturation: arrayItem[0].saturation, hue: arrayItem[0].hue }] });
                console.log(multiPersonContent);

            }
        }
    };
    const addMultiPerson = (newP) => {
        setAttributes({ multiPersonChecked: newP })
        let array = []
        for (let i = 1; i <= newP; i++) {
            array.push({
                id: i,
                personImgUrl: "",
                name: "Merna Hanna",
                title: "Senior Developer",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla",
                socialIcon: false,
                items: [
                    { label: 'facebook', link: false, value: "#" },
                    { label: 'twitter', link: false, value: "#" },
                    { label: 'instagram', link: false, value: "#" },
                    { label: 'youtube', link: false, value: "#" }
                ],
                blur: "0",
                bright: "100",
                contrast: "100",
                saturation: "100",
                hue: "0"
            })
            setAttributes({ multiPersonContent: array })
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
        if (i > 0) {
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
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].personImgUrl = "undefined" === typeof media.sizes.thumbnail
                ? media.url
                : media.sizes.thumbnail.url
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
            setAttributes({
                personImgId: media.id
            })
        }

    }
    const Blur = (value, i) => {
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            array[0].blur = value
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
        }
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].blur = value
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        }

    }
    const Bright = (value, i) => {
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            array[0].bright = value
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
        }
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].bright = value
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        }

    }
    const Saturation = (value, i) => {
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            array[0].saturation = value
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
        }
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].saturation = value
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        }
    }
    const Contrast = (value, i) => {
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            array[0].contrast = value
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
        }
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].contrast = value
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        }
    }
    const Hue = (value, i) => {
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            array[0].hue = value
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
        }
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].hue = value
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        }
    }
    const Name = (value, i) => {
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            array[0].name = value
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
        }
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].name = value
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        }
    }
    const Title = (value, i) => {
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            array[0].title = value
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
        }
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].title = value
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        }
    }
    const Desc = (value, i) => {
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            array[0].desc = value
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
        }
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].desc = value
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
        }
    }
    const SocialIcon = (value, i) => {
        if (i > 0) {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i)
            array[0].socialIcon = value
            multiPersonContent[i - 1] = array[0]
            setAttributes(multiPersonContent[i - 1] = array[0]);
        }
        else {
            let array = multiPersonContent.map((content) => (
                content
            ))
            array[0].socialIcon = value
            setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: array[0].personImgUrl, name: array[0].name, title: array[0].title, desc: array[0].desc, socialIcon: array[0].socialIcon, items: array[0].items, blur: array[0].blur, bright: array[0].bright, contrast: array[0].contrast, saturation: array[0].saturation, hue: array[0].hue }] });
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
                            <label className="premium-person-paragraph">{__("Social Media")}</label>
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
                            <SortableList items={content.items} personIndex={content.id} onSortEnd={(o, n) => onSortEndMulti(content.id, o, n)} onRemove={(value) => onRemove(value, content.id)} addLink={(value) => addLink(value, content.id)} shouldCancelStart={shouldCancelStart} />
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
                        min="1"
                        onChange={value => addMultiPerson(value)}
                    />
                    <p>{__("Enable this option if you need to add multiple persons")}</p>
                    {multiPersonChecked > 1 ? <SelectControl
                        label={__("Persons/Row")}
                        value={rowPerson}
                        onChange={newColumn => setAttributes({ rowPerson: newColumn })}
                        options={ROWS}
                    /> : ""}
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
                            onSelect={media => PersonImage(media)}
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
                            onChangeBlur={value => Blur(value)}
                            onChangeBright={value => Bright(value)}
                            onChangeContrast={value => Contrast(value)}
                            onChangeSat={value => Saturation(value)}
                            onChangeHue={value => Hue(value)}
                        />
                        <TextControl
                            label={__("Name")}
                            value={multiPersonContent[0].name}
                            onChange={value => Name(value)}
                        />
                        <TextControl
                            label={__("Title")}
                            value={multiPersonContent[0].title}
                            onChange={value => Title(value)}
                        />
                        <TextareaControl
                            label={__("Description")}
                            value={multiPersonContent[0].desc}
                            onChange={value => Desc(value)}
                        />
                        <ToggleControl
                            label={__("Enable Social Icons")}
                            checked={multiPersonContent[0].socialIcon}
                            onChange={value => SocialIcon(value)}
                        />
                        {multiPersonContent[0].socialIcon && (
                            <div>
                                <label className="premium-person-paragraph">{__("Social Media")}</label>
                                <FontIconPicker
                                    icons={iconsList.map((i) => (
                                        i.value
                                    ))}
                                    onChange={value => addSocialIcon(value)}
                                    isMulti={false}
                                    appendTo="body"
                                    noSelectedPlaceholder={__("Select Icon")}
                                    noIconPlaceholder={__("No icons found")}
                                />
                                <SortableList items={multiPersonContent[0].items} onSortEnd={(o, n) => onSortEndSingle(o, n)} onRemove={(value) => onRemove(value)} addLink={(value) => addLink(value)} shouldCancelStart={shouldCancelStart} />
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
            id={`premium-person-${id}`}
            className={`${mainClasses} premium-person__${effect} premium-person__${effectDir}`}
            style={{ textAlign: personAlign }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: [
                        `#premium-person-${id} .premium-person:hover {`,
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
