import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumShadow from "../../components/PremiumShadow";
import DefaultImage from "../../components/default-image";
import PremiumFilters from "../../components/premium-filters";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumMediaUpload from "../../components/premium-media-upload"
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import times from "lodash/times"

const { withSelect } = wp.data

const { __ } = wp.i18n;
const { Component } = wp.element;

const {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    TextareaControl
} = wp.components;

const {
    InspectorControls,
    AlignmentToolbar,
    BlockControls
} = wp.editor;

const SortableItem = SortableElement(({ onRemove, saveLink, changeLinkValue, value, addLink, personIndex }) => <li tabIndex={0}>
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
                value={value.changeinput}
                onChange={(val) => changeLinkValue(val, value, personIndex)}
                className="premium-person__socialIcon__textInput"
            />
            <button className="premium-person__socialIcon__saveButton" onClick={() => saveLink(value.changeinput, value, personIndex)}>Save</button>
        </div>
    )}
</li>);

const SortableList = SortableContainer(({ items, onRemove, saveLink, changeLinkValue, addLink, personIndex }) => {
    return (
        <ul>
            {(items).map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} newIndex={index} personIndex={personIndex} value={value} onRemove={onRemove} saveLink={saveLink} addLink={addLink} changeLinkValue={changeLinkValue} />
            ))}
        </ul>
    );
});

class edit extends Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ id: this.props.clientId })
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

    save(value, index) {
        const { attributes, setAttributes } = this.props
        const { multiPersonContent } = attributes
        const newItems = multiPersonContent.map((item, thisIndex) => {
            if (index === thisIndex) {
                item = { ...item, ...value }
            }
            return item
        })
        setAttributes({
            multiPersonContent: newItems,
        })
    }

    render() {
        const { isSelected, setAttributes, className, clientId: blockId } = this.props;

        const {
            id,
            personSize,
            personAlign,
            imgSize,
            imgBorder,
            imgBorderColor,
            nameStyles,
            titleStyles,
            descStyles,
            socialIconStyles,
            socialIconBorderWidth,
            socialIconBorderTop,
            socialIconBorderRight,
            socialIconBorderBottom,
            socialIconBorderLeft,
            socialIconBorderUpdated,
            socialIconMarginT,
            socialIconMarginR,
            socialIconMarginB,
            socialIconMarginL,
            socialIconMarginTTablet,
            socialIconMarginRTablet,
            socialIconMarginBTablet,
            socialIconMarginLTablet,
            socialIconMarginTMobile,
            socialIconMarginRMobile,
            socialIconMarginBMobile,
            socialIconMarginLMobile,
            socialIconPaddingTop,
            socialIconPaddingRight,
            socialIconPaddingBottom,
            socialIconPaddingLeft,
            socialIconPaddingTTablet,
            socialIconPaddingRTablet,
            socialIconPaddingBTablet,
            socialIconPaddingLTablet,
            socialIconPaddingTMobile,
            socialIconPaddingRMobile,
            socialIconPaddingBMobile,
            socialIconPaddingLMobile,
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
            change,
            blur,
            bright,
            contrast,
            saturation,
            hue,
            bottomInfo
        } = this.props.attributes;

        const HOVER = [
            {
                value: "none",
                label: __("None", 'premium-blocks-for-gutenberg')
            },
            {
                value: "zoomin",
                label: __("Zoom In", 'premium-blocks-for-gutenberg')
            },
            {
                value: "zoomout",
                label: __("Zoom Out", 'premium-blocks-for-gutenberg')
            },
            {
                value: "scale",
                label: __("Scale", 'premium-blocks-for-gutenberg')
            },
            {
                value: "gray",
                label: __("Gray Scale", 'premium-blocks-for-gutenberg')
            },
            {
                value: "blur",
                label: __("Blur", 'premium-blocks-for-gutenberg')
            },
            {
                value: "bright",
                label: __("Bright", 'premium-blocks-for-gutenberg')
            },
            {
                value: "sepia",
                label: __("Sepia", 'premium-blocks-for-gutenberg')
            },
            {
                value: "translate",
                label: __("Translate", 'premium-blocks-for-gutenberg')
            }
        ];

        const EFFECTS = [
            {
                value: "effect1",
                label: __("Style 1", 'premium-blocks-for-gutenberg')
            },
            {
                value: "effect2",
                label: __("Style 2", 'premium-blocks-for-gutenberg')
            }
        ];
        const ROWS = [
            {
                value: "column1",
                label: __("1 Column", 'premium-blocks-for-gutenberg')
            },
            {
                value: "column2",
                label: __("2 Columns", 'premium-blocks-for-gutenberg')
            },
            {
                value: "column3",
                label: __("3 Columns", 'premium-blocks-for-gutenberg')
            },
            {
                value: "column4",
                label: __("4 Columns", 'premium-blocks-for-gutenberg')
            },
            {
                value: "column5",
                label: __("5 Columns", 'premium-blocks-for-gutenberg')
            },
            {
                value: "column6",
                label: __("6 Columns", 'premium-blocks-for-gutenberg')
            }
        ]

        const iconsList = [
            {
                value: "fa fa-facebook-f",
                label: __("facebook", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-twitter",
                label: __("twitter", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-instagram",
                label: __("instagram", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-youtube",
                label: __("youtube", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-linkedin",
                label: __("linkedin", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-flickr",
                label: __("flickr", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-github",
                label: __("github", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-google-plus",
                label: __("google-plus", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-pinterest",
                label: __("pinterest", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-reddit",
                label: __("reddit", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-skype",
                label: __("skype", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-stack-overflow",
                label: __("stack-overflow", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-whatsapp",
                label: __("whatsapp", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-vimeo",
                label: __("vimeo", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-tumblr",
                label: __("tumblr", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-dribbble",
                label: __("dribbble", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-quora",
                label: __("quora", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-foursquare",
                label: __("foursquare", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-wordpress",
                label: __("wordpress", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-stumbleupon",
                label: __("stumbleupon", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-yahoo",
                label: __("yahoo", 'premium-blocks-for-gutenberg')
            },
            {
                value: "fa fa-soundcloud",
                label: __("soundcloud", 'premium-blocks-for-gutenberg')
            },
        ];

        setAttributes({ id: blockId });

        const mainClasses = classnames(className, "premium-person");

        const NameSize = this.getPreviewSize(this.props.deviceType, nameStyles[0].namefontSize, nameStyles[0].namefontSizeTablet, nameStyles[0].namefontSizeMobile);

        const TitleSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titlefontSizeTablet, titleStyles[0].titlefontSizeMobile);

        const DescSize = this.getPreviewSize(this.props.deviceType, descStyles[0].descSize, descStyles[0].descfontSizeTablet, descStyles[0].descfontSizeMobile);

        const SocialIconSize = this.getPreviewSize(this.props.deviceType, socialIconStyles[0].socialIconSize, socialIconStyles[0].socialIconfontSizeTablet, socialIconStyles[0].socialIconfontSizeMobile);

        const SocialIconMarginTop = this.getPreviewSize(this.props.deviceType, socialIconMarginT, socialIconMarginTTablet, socialIconMarginTMobile);
        const SocialIconMarginRight = this.getPreviewSize(this.props.deviceType, socialIconMarginR, socialIconMarginRTablet, socialIconMarginRMobile);
        const SocialIconMarginBottom = this.getPreviewSize(this.props.deviceType, socialIconMarginB, socialIconMarginBTablet, socialIconMarginBMobile);
        const SocialIconMarginLeft = this.getPreviewSize(this.props.deviceType, socialIconMarginL, socialIconMarginLTablet, socialIconMarginLMobile);
        const SocialIconPaddingTop = this.getPreviewSize(this.props.deviceType, socialIconPaddingTop, socialIconPaddingTTablet, socialIconPaddingTMobile);
        const SocialIconPaddingRight = this.getPreviewSize(this.props.deviceType, socialIconPaddingRight, socialIconPaddingRTablet, socialIconPaddingRMobile);
        const SocialIconPaddingBottom = this.getPreviewSize(this.props.deviceType, socialIconPaddingBottom, socialIconPaddingBTablet, socialIconPaddingBMobile);
        const SocialIconPaddingLeft = this.getPreviewSize(this.props.deviceType, socialIconPaddingLeft, socialIconPaddingLTablet, socialIconPaddingLMobile);

        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (['div', 'button', 'input'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
                return true; // Return true to cancel sorting
            }
        }

        const saveNameStyles = (value) => {
            const newUpdate = nameStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                nameStyles: newUpdate,
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

        const saveDescStyles = (value) => {
            const newUpdate = descStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                descStyles: newUpdate,
            });
        }

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
        }

        const addLink = (value, i) => {
            value.link = !value.link
            value.link == false ? value.changeinput = value.value : value.changeinput
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i + 1)
            let newData = (array[0].items).filter(b => {
                return b
            })
            array[0].items = newData
            multiPersonContent[i] = array[0]
            setAttributes(multiPersonContent[i] = array[0]);
        }

        const saveLink = (value, i, personIndex) => {
            i.value = value
            let arrayItem = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == personIndex + 1)
            i.link = false
            let newData = (arrayItem[0].items).filter(b => {
                return b
            })
            arrayItem[0].items = newData
            multiPersonContent[personIndex] = arrayItem[0]
            setAttributes(multiPersonContent[personIndex] = arrayItem[0]);
        }

        const changeLinkValue = (value, i, personIndex) => {
            if (personIndex + 1 > 0) {
                i.changeinput = value
                let arrayItem = multiPersonContent.map((cont) => (
                    cont
                )).filter(f => f.id == personIndex + 1)
                let newData = (arrayItem[0].items).filter(b => {
                    return b
                })
                arrayItem[0].items = newData
                multiPersonContent[personIndex] = arrayItem[0]
                setAttributes(multiPersonContent[personIndex] = arrayItem[0]);
            }
            else {
                i.changeinput = value
                let arrayItem = multiPersonContent.map((cont) => (
                    cont
                ))
                let newData = (arrayItem[0].items).filter(b => {
                    return b
                })
                setAttributes({ multiPersonContent: [{ id: 1, personImgUrl: arrayItem[0].personImgUrl, name: arrayItem[0].name, title: arrayItem[0].title, desc: arrayItem[0].desc, socialIcon: arrayItem[0].socialIcon, items: newData }] });
            }
        }

        const onRemove = (value, i) => {
            let array = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i + 1)
            let newData = (array[0].items).filter(b => {
                return b.label != value
            })
            array[0].items = newData
            multiPersonContent[i] = array[0]
            setAttributes(multiPersonContent[i] = array[0]);
        };

        const socialIconfn = (v) => {
            return <ul className="premium-person__social-List">{(v).map((value) => (
                <li>
                    <a className={`premium-person__socialIcon__link_content ${socialIconStyles[0].defaultIconColor ? value.label : ""}`} href={`${value.value}`} style={{
                        borderStyle: socialIconStyles[0].borderTypeIcon,
                        borderWidth: socialIconBorderUpdated
                            ? `${socialIconBorderTop}px ${socialIconBorderRight}px ${socialIconBorderBottom}px ${socialIconBorderLeft}px`
                            : socialIconBorderWidth + "px",
                        borderRadius: socialIconStyles[0].borderRadiusIcon || 100 + "px",
                        borderColor: socialIconStyles[0].borderColorIcon,
                        marginTop: SocialIconMarginTop + socialIconStyles[0].socialIconMarginType,
                        marginBottom: SocialIconMarginBottom + socialIconStyles[0].socialIconMarginType,
                        marginLeft: SocialIconMarginLeft + socialIconStyles[0].socialIconMarginType,
                        marginRight: SocialIconMarginRight + socialIconStyles[0].socialIconMarginType,
                        paddingTop: SocialIconPaddingTop + socialIconStyles[0].socialIconPaddingType,
                        paddingBottom: SocialIconPaddingBottom + socialIconStyles[0].socialIconPaddingType,
                        paddingLeft: SocialIconPaddingLeft + socialIconStyles[0].socialIconPaddingType,
                        paddingRight: SocialIconPaddingRight + socialIconStyles[0].socialIconPaddingType,
                        background: socialIconStyles[0].socialIconBackgroundColor,
                    }}>
                        <i className={`premium-person__socialIcon ${value.label == "youtube" ? "fa fa-youtube-play" : `fa fa-${value.label}`} premium-person__${socialIconStyles[0].socialIconHoverColor}`}
                            style={{
                                color: socialIconStyles[0].socialIconColor,
                                fontSize: (SocialIconSize || 50) + socialIconStyles[0].socialIconfontSizeType,
                            }}
                        />
                    </a>
                </li>
            ))}
            </ul>
        }

        const content = () => {
            return <div className={`premium-person-content ${id} ${multiPersonChecked > 1 ? `premium-person__${rowPerson}` : ""}`}
            > {multiPersonContent.map((value) => (
                <div key={value.id} className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}>
                    <div className={`premium-person__img__container`}>
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
                                        filter: `${change ? `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` : ""}`
                                    }}
                                />
                            )}
                            {!value.personImgUrl && <DefaultImage className={className} />}
                        </div>
                        {effectPersonStyle === 'effect2' ? <div className={`premium-person__socialEffect2`}>{value.socialIcon && (
                            socialIconfn(value.items)
                        )}</div> : ""}
                    </div>
                    <div
                        className={`premium-person__info`}
                        style={{
                            background: contentColor ? contentColor : "#f2f2f2",
                            bottom: effectPersonStyle === 'effect1' ? bottomInfo + "px" : ""
                        }}
                    >
                        <div
                            className={`premium-person__name_wrap`}
                            style={{
                                fontSize: NameSize + nameStyles[0].namefontSizeType,
                            }}
                        >
                            {value.name && (
                                <span
                                    className={`premium-person__name`}
                                    style={{
                                        color: nameStyles[0].nameColor,
                                        fontSize: NameSize + nameStyles[0].namefontSizeType,
                                        fontWeight: nameStyles[0].nameWeight,
                                        alignSelf: nameV,
                                        letterSpacing: nameStyles[0].nameLetter + "px",
                                        lineHeight: nameStyles[0].nameLine + "px",
                                        fontStyle: nameStyles[0].nameStyle,
                                        textTransform: nameStyles[0].nameUpper ? "uppercase" : "none",
                                        textShadow: `${nameStyles[0].nameshadowHorizontal}px ${nameStyles[0].nameshadowVertical}px ${nameStyles[0].nameshadowBlur}px ${nameStyles[0].nameshadowColor}`
                                    }}
                                >
                                    {value.name}
                                </span>
                            )}
                        </div>
                        <div
                            className={`premium-person__title_wrap`}
                            style={{
                                fontSize: TitleSize + titleStyles[0].titlefontSizeType,
                            }}
                        >
                            {value.title && (
                                <span
                                    className={`premium-person__title`}
                                    style={{
                                        color: titleStyles[0].titleColor,
                                        fontSize: TitleSize + titleStyles[0].titlefontSizeType,
                                        fontWeight: titleStyles[0].titleWeight,
                                        alignSelf: titleV,
                                        letterSpacing: titleStyles[0].titleLetter + "px",
                                        lineHeight: titleStyles[0].titleLine + "px",
                                        fontStyle: titleStyles[0].titleStyle,
                                        textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                        textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
                                    }}
                                >
                                    {value.title}
                                </span>
                            )}
                        </div>
                        <div
                            className={`premium-person__desc_wrap`}
                            style={{
                                fontSize: DescSize + descStyles[0].descfontSizeType,
                            }}
                        >
                            {value.desc && (
                                <span
                                    className={`premium-person__desc`}
                                    style={{
                                        color: descStyles[0].descColor,
                                        fontSize: DescSize + descStyles[0].descfontSizeType,
                                        fontWeight: descStyles[0].descWeight,
                                        alignSelf: descV,
                                        letterSpacing: descStyles[0].descLetter + "px",
                                        lineHeight: descStyles[0].descLine + "px",
                                        fontStyle: descStyles[0].descStyle,
                                        textTransform: descStyles[0].descUpper ? "uppercase" : "none",
                                        textShadow: `${descStyles[0].descshadowHorizontal}px ${descStyles[0].descshadowVertical}px ${descStyles[0].descshadowBlur}px ${descStyles[0].descshadowColor}`,
                                    }}
                                >
                                    {value.desc}
                                </span>
                            )}
                        </div>
                        {effectPersonStyle == 'effect1' ? <div>{value.socialIcon && (
                            socialIconfn(value.items)
                        )}</div> : ""}
                    </div>
                </div>
            ))}
            </div>
        }

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
                )).filter(f => f.id == index + 1)
                let repeat = arrayItem[0].items.filter(d => d.label == newicon)
                if (repeat[0] != undefined) {
                    arrayItem[0].items.filter(d => d.label != newicon)
                    multiPersonContent[index - 1] = arrayItem[0]
                    setAttributes(multiPersonContent[index - 1] = arrayItem[0]);
                }
                else {
                    arrayItem[0].items.push({ label: newicon, link: false, value: "", changeinput: "#" })
                    arrayItem[0].items.filter(d => d.label != newicon)
                    multiPersonContent[index - 1] = arrayItem[0]
                    setAttributes(multiPersonContent[index - 1] = arrayItem[0]);
                }
            }
        };

        const addMultiPerson = (newP) => {
            let multi = [...multiPersonContent]
            if (multi.length < newP) {
                const incAmount = Math.abs(newP - multi.length)
                {
                    times(incAmount, n => {
                        multi.push({
                            id: multi.length + 1,
                            personImgUrl: multi[0].personImgUrl,
                            personImgId: '',
                            name: multi[0].name,
                            title: multi[0].title,
                            desc: multi[0].desc,
                            socialIcon: multi[0].socialIcon,
                            items: [
                                { label: 'facebook', link: false, value: "#", changeinput: "#" },
                                { label: 'twitter', link: false, value: "#", changeinput: "#" },
                                { label: 'instagram', link: false, value: "#", changeinput: "#" },
                                { label: 'youtube', link: false, value: "#", changeinput: "#" }
                            ]
                        })
                    })
                }
                setAttributes({ multiPersonContent: multi })
            }
            else {
                for (let i = multiPersonChecked; i > newP; i--) {
                    multiPersonContent.splice(i - 1, 1)
                }
            }
            setAttributes({ multiPersonChecked: newP })
        };

        const onSortEndMulti = (i, { oldIndex, newIndex }) => {
            let arrayItem = multiPersonContent.map((cont) => (
                cont
            )).filter(f => f.id == i + 1);
            const array = arrayMove(arrayItem[0].items, oldIndex, newIndex)
            arrayItem[0].items = array
            multiPersonContent[i] = arrayItem[0]
            setAttributes(multiPersonContent[i] = arrayItem[0]);
        };

        const MultiPersonSetting = (index) => {
            return <PanelBody
                key={index}
                title={__(`Person #${index + 1} Setting`)}
                initialOpen={false}
            >
                <PremiumMediaUpload
                    type="image"
                    imageID={multiPersonContent[index].personImgId}
                    imageURL={multiPersonContent[index].personImgUrl}
                    onSelectMedia={(media) => {
                        this.save({ personImgUrl: media.url }, index)
                        this.save({ personImgId: media.id }, index)
                    }}
                    onRemoveImage={() => {
                        this.save({ personImgId: '' }, index)
                        this.save({ personImgUrl: '' }, index)
                    }}
                />
                <TextControl
                    label={__("Name", 'premium-block-for-gutenberg')}
                    value={multiPersonContent[index].name}
                    onChange={value => { this.save({ name: value }, index) }}
                />
                <TextControl
                    label={__("Title", 'premium-block-for-gutenberg')}
                    value={multiPersonContent[index].title}
                    onChange={value => { this.save({ title: value }, index) }}
                />
                <TextareaControl
                    label={__("Description", 'premium-block-for-gutenberg')}
                    value={multiPersonContent[index].desc}
                    onChange={value => { this.save({ desc: value }, index) }}
                />
                <ToggleControl
                    label={__("Enable Social Icons", 'premium-block-for-gutenberg')}
                    checked={multiPersonContent[index].socialIcon}
                    onChange={value => { this.save({ socialIcon: value }, index) }}
                />
                {multiPersonContent[index].socialIcon && (
                    <div>
                        <label className="premium-person-paragraph">{__("Social Media")}</label>
                        <FontIconPicker
                            icons={iconsList.map((i) => (
                                i.value
                            ))}
                            onChange={value => addSocialIcon(value, index)}
                            isMulti={false}
                            appendTo="body"
                            closeOnSelect={false}
                            iconsPerPage={25}
                            noSelectedPlaceholder={__("Select Icon")}
                        />
                        <SortableList items={multiPersonContent[index].items} personIndex={index} onSortEnd={(o, n) => onSortEndMulti(index, o, n)} onRemove={(value) => onRemove(value, index)} saveLink={(value, i) => saveLink(value, i, index)} changeLinkValue={(value, i) => changeLinkValue(value, i, index)} addLink={(value) => addLink(value, index)} shouldCancelStart={shouldCancelStart} helperClass='premium-person__sortableHelper' />
                    </div>
                )}
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
                        <ResponsiveSingleRangeControl
                            label={__("Person Number", 'premium-block-for-gutenberg')}
                            value={multiPersonChecked}
                            onChange={value => addMultiPerson(value)}
                            showUnit={false}
                            defaultValue={1}
                            min={1}
                        />
                        {multiPersonChecked > 1 ? <SelectControl
                            label={__("Persons/Row", 'premium-block-for-gutenberg')}
                            value={rowPerson}
                            onChange={newColumn => setAttributes({ rowPerson: newColumn })}
                            options={ROWS}
                        /> : ""}
                        <SelectControl
                            label={__("Style", 'premium-block-for-gutenberg')}
                            value={effectPersonStyle}
                            onChange={newEffect => setAttributes({ effectPersonStyle: newEffect })}
                            options={EFFECTS}
                        />
                        <SelectControl
                            label={__("Image Hover Effect", 'premium-block-for-gutenberg')}
                            options={HOVER}
                            value={hoverEffectPerson}
                            onChange={newEffect => setAttributes({ hoverEffectPerson: newEffect })}
                        />

                    </PanelBody>
                    {times(multiPersonChecked, n => MultiPersonSetting(n))}
                    <PanelBody
                        title={__("Image Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumFilters
                            blur={blur}
                            bright={bright}
                            contrast={contrast}
                            saturation={saturation}
                            hue={hue}
                            onChangeBlur={newSize => setAttributes({ blur: newSize, change: true })}
                            onChangeBright={newSize => setAttributes({ bright: newSize, change: true })}
                            onChangeContrast={newSize => setAttributes({ contrast: newSize, change: true })}
                            onChangeSat={newSize => setAttributes({ saturation: newSize, change: true })}
                            onChangeHue={newSize => setAttributes({ hue: newSize, change: true })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Name")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                            setAttributes={saveNameStyles}
                            fontSizeType={{ value: nameStyles[0].namefontSizeType, label: __("namefontSizeType") }}
                            fontSize={nameStyles[0].namefontSize}
                            fontSizeMobile={nameStyles[0].namefontSizeMobile}
                            fontSizeTablet={nameStyles[0].namefontSizeTablet}
                            onChangeSize={newSize => saveNameStyles({ namefontSize: newSize })}
                            onChangeTabletSize={newSize => saveNameStyles({ namefontSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveNameStyles({ namefontSizeMobile: newSize })}
                            weight={nameStyles[0].nameWeight}
                            style={nameStyles[0].nameStyle}
                            spacing={nameStyles[0].nameLetter}
                            upper={nameStyles[0].nameUpper}
                            line={nameStyles[0].nameLine}
                            onChangeWeight={newWeight =>
                                saveNameStyles({ nameWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                saveNameStyles({ nameStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                saveNameStyles({ nameLetter: newValue })
                            }
                            onChangeUpper={check => saveNameStyles({ nameUpper: check })}
                            onChangeLine={newValue => saveNameStyles({ nameLine: newValue })}
                        />
                        <div className="premium-control-toggle">
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-block-for-gutenberg')}
                                colorValue={nameStyles[0].nameColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveNameStyles({
                                        nameColor: newValue
                                    })
                                }
                            />
                        </div>
                        <PremiumShadow
                            label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={false}
                            color={nameStyles[0].nameshadowColor}
                            blur={nameStyles[0].nameshadowBlur}
                            horizontal={nameStyles[0].nameshadowHorizontal}
                            vertical={nameStyles[0].nameshadowVertical}
                            onChangeColor={newColor =>
                                saveNameStyles({ nameshadowColor: newColor })}
                            onChangeBlur={newBlur => saveNameStyles({ nameshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveNameStyles({ nameshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveNameStyles({ nameshadowVertical: newValue })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Title")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
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
                    </PanelBody>
                    <PanelBody
                        title={__("Description")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                            setAttributes={saveDescStyles}
                            fontSizeType={{ value: descStyles[0].descfontSizeType, label: __("descfontSizeType") }}
                            fontSize={descStyles[0].descSize}
                            fontSizeMobile={descStyles[0].descfontSizeMobile}
                            fontSizeTablet={descStyles[0].descfontSizeTablet}
                            onChangeSize={newSize => saveDescStyles({ descSize: newSize })}
                            onChangeTabletSize={newSize => saveDescStyles({ descfontSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveDescStyles({ descfontSizeMobile: newSize })}
                            weight={descStyles[0].descWeight}
                            style={descStyles[0].descStyle}
                            spacing={descStyles[0].descLetter}
                            upper={descStyles[0].descUpper}
                            line={descStyles[0].descLine}
                            onChangeWeight={newWeight =>
                                saveDescStyles({ descWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                saveDescStyles({ descStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                saveDescStyles({ descLetter: newValue })
                            }
                            onChangeUpper={check => saveDescStyles({ descUpper: check })}
                            onChangeLine={newValue => saveDescStyles({ descLine: newValue })}
                        />
                        <div className="premium-control-toggle">
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-block-for-gutenberg')}
                                colorValue={descStyles[0].descColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveDescStyles({
                                        descColor: newValue
                                    })
                                }
                            />
                        </div>
                        <PremiumShadow
                            label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={false}
                            color={descStyles[0].descshadowColor}
                            blur={descStyles[0].descshadowBlur}
                            horizontal={descStyles[0].descshadowHorizontal}
                            vertical={descStyles[0].descshadowVertical}
                            onChangeColor={newColor =>
                                saveDescStyles({ descshadowColor: newColor })
                            }
                            onChangeBlur={newBlur => saveDescStyles({ descshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveDescStyles({ descshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveDescStyles({ descshadowVertical: newValue })
                            }
                        />
                    </PanelBody>
                    {multiPersonChecked > 1 ? (multiPersonContent.map(i => i.socialIcon && (<PanelBody
                        title={__("Social Icon")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ResponsiveRangeControl
                            label={__("Size", 'premium-block-for-gutenberg')}
                            value={socialIconStyles[0].socialIconSize}
                            tabletValue={socialIconStyles[0].socialIconfontSizeTablet}
                            mobileValue={socialIconStyles[0].socialIconfontSizeMobile}
                            onChange={(value) => saveSocialIconStyles({ socialIconSize: value })}
                            onChangeTablet={(value) => saveSocialIconStyles({ socialIconfontSizeTablet: value })}
                            onChangeMobile={(value) => saveSocialIconStyles({ socialIconfontSizeMobile: value })}
                            onChangeUnit={(key) =>
                                saveSocialIconStyles({ socialIconfontSizeType: key })
                            }
                            unit={socialIconStyles[0].socialIconfontSizeType}
                            showUnit={true}
                            defaultValue={20}
                            min={1}
                            max={100}
                        />
                        <div className="premium-control-toggle">
                            <AdvancedPopColorControl
                                label={__("Social Icon Color", 'premium-block-for-gutenberg')}
                                colorValue={socialIconStyles[0].socialIconColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveSocialIconStyles({
                                        socialIconColor: newValue
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__("Social Icon Hover Color", 'premium-block-for-gutenberg')}
                                colorValue={socialIconStyles[0].socialIconHoverColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveSocialIconStyles({
                                        socialIconHoverColor: newValue
                                    })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <AdvancedPopColorControl
                                label={__("Social Icon Background Color", 'premium-block-for-gutenberg')}
                                colorValue={socialIconStyles[0].socialIconBackgroundColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveSocialIconStyles({
                                        socialIconBackgroundColor: newValue
                                    })
                                }
                            />
                        </div>
                        <ToggleControl
                            label={__("Brands Default Colors", 'premium-block-for-gutenberg')}
                            checked={socialIconStyles[0].defaultIconColor}
                            onChange={newCheck => saveSocialIconStyles({ defaultIconColor: newCheck })}
                        />
                        <PremiumBorder
                            borderType={socialIconStyles[0].borderTypeIcon}
                            borderWidth={socialIconBorderWidth}
                            top={socialIconBorderTop}
                            right={socialIconBorderRight}
                            bottom={socialIconBorderBottom}
                            left={socialIconBorderLeft}
                            borderColor={socialIconStyles[0].borderColorIcon}
                            borderRadius={socialIconStyles[0].borderRadiusIcon}
                            onChangeType={newType => saveSocialIconStyles({ borderTypeIcon: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    socialIconBorderUpdated: true,
                                    socialIconBorderTop: top,
                                    socialIconBorderRight: right,
                                    socialIconBorderBottom: bottom,
                                    socialIconBorderLeft: left,
                                })
                            }
                            onChangeColor={colorValue =>
                                saveSocialIconStyles({ borderColorIcon: colorValue })
                            }
                            onChangeRadius={newrRadius =>
                                saveSocialIconStyles({ borderRadiusIcon: newrRadius })
                            }
                        />
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={socialIconMarginT}
                            marginRight={socialIconMarginR}
                            marginBottom={socialIconMarginB}
                            marginLeft={socialIconMarginL}
                            marginTopTablet={socialIconMarginTTablet}
                            marginRightTablet={socialIconMarginRTablet}
                            marginBottomTablet={socialIconMarginBTablet}
                            marginLeftTablet={socialIconMarginLTablet}
                            marginTopMobile={socialIconMarginTMobile}
                            marginRightMobile={socialIconMarginRMobile}
                            marginBottomMobile={socialIconMarginBMobile}
                            marginLeftMobile={socialIconMarginLMobile}
                            showUnits={true}
                            onChangeMarSizeUnit={newvalue => saveSocialIconStyles({ socialIconMarginType: newvalue })}
                            selectedUnit={socialIconStyles[0].socialIconMarginType}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ socialIconMarginT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ socialIconMarginTTablet: newValue })
                                    } else {
                                        setAttributes({ socialIconMarginTMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ socialIconMarginR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ socialIconMarginRTablet: newValue })
                                    } else {
                                        setAttributes({ socialIconMarginRMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ socialIconMarginB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ socialIconMarginBTablet: newValue })
                                    } else {
                                        setAttributes({ socialIconMarginBMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ socialIconMarginL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ socialIconMarginLTablet: newValue })
                                    } else {
                                        setAttributes({ socialIconMarginLMobile: newValue })
                                    }
                                }
                            }

                        />
                        <PremiumResponsivePadding
                            paddingTop={socialIconPaddingTop}
                            paddingRight={socialIconPaddingRight}
                            paddingBottom={socialIconPaddingBottom}
                            paddingLeft={socialIconPaddingLeft}
                            paddingTopTablet={socialIconPaddingTTablet}
                            paddingRightTablet={socialIconPaddingRTablet}
                            paddingBottomTablet={socialIconPaddingBTablet}
                            paddingLeftTablet={socialIconPaddingLTablet}
                            paddingTopMobile={socialIconPaddingTMobile}
                            paddingRightMobile={socialIconPaddingRMobile}
                            paddingBottomMobile={socialIconPaddingBMobile}
                            paddingLeftMobile={socialIconPaddingLMobile}
                            showUnits={true}
                            defaultValue={0}
                            min={0}
                            max={100}
                            selectedUnit={socialIconStyles[0].socialIconPaddingType}
                            onChangePadSizeUnit={newvalue => saveSocialIconStyles({ socialIconPaddingType: newvalue })}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ socialIconPaddingTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ socialIconPaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ socialIconPaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ socialIconPaddingRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ socialIconPaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ socialIconPaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ socialIconPaddingBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ socialIconPaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ socialIconPaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ socialIconPaddingLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ socialIconPaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ socialIconPaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>)))
                        : multiPersonContent[0].socialIcon && (<PanelBody
                            title={__("Social Icon")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__("Size", 'premium-block-for-gutenberg')}
                                value={socialIconStyles[0].socialIconSize}
                                tabletValue={socialIconStyles[0].socialIconfontSizeTablet}
                                mobileValue={socialIconStyles[0].socialIconfontSizeMobile}
                                onChange={(value) => saveSocialIconStyles({ socialIconSize: value })}
                                onChangeTablet={(value) => saveSocialIconStyles({ socialIconfontSizeTablet: value })}
                                onChangeMobile={(value) => saveSocialIconStyles({ socialIconfontSizeMobile: value })}
                                onChangeUnit={(key) =>
                                    saveSocialIconStyles({ socialIconfontSizeType: key })
                                }
                                unit={socialIconStyles[0].socialIconfontSizeType}
                                showUnit={true}
                                defaultValue={20}
                                min={1}
                                max={100}
                            />
                            <div className="premium-control-toggle">
                                <AdvancedPopColorControl
                                    label={__("Social Icon Color", 'premium-block-for-gutenberg')}
                                    colorValue={socialIconStyles[0].socialIconColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveSocialIconStyles({
                                            socialIconColor: newValue
                                        })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__("Social Icon Hover Color", 'premium-block-for-gutenberg')}
                                    colorValue={socialIconStyles[0].socialIconHoverColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveSocialIconStyles({
                                            socialIconHoverColor: newValue
                                        })
                                    }
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <AdvancedPopColorControl
                                    label={__("Social Icon Background Color", 'premium-block-for-gutenberg')}
                                    colorValue={socialIconStyles[0].socialIconBackgroundColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveSocialIconStyles({
                                            socialIconBackgroundColor: newValue
                                        })
                                    }
                                />
                            </div>
                            <ToggleControl
                                label={__("Brands Default Colors", "premium-blocks-for-gutenberg")}
                                checked={socialIconStyles[0].defaultIconColor}
                                onChange={newCheck => saveSocialIconStyles({ defaultIconColor: newCheck })}
                            />
                            <PremiumBorder
                                borderType={socialIconStyles[0].borderTypeIcon}
                                borderWidth={socialIconBorderWidth}
                                top={socialIconBorderTop}
                                right={socialIconBorderRight}
                                bottom={socialIconBorderBottom}
                                left={socialIconBorderLeft}
                                borderColor={socialIconStyles[0].borderColorIcon}
                                borderRadius={socialIconStyles[0].borderRadiusIcon}
                                onChangeType={newType => saveSocialIconStyles({ borderTypeIcon: newType })}
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        socialIconBorderUpdated: true,
                                        socialIconBorderTop: top,
                                        socialIconBorderRight: right,
                                        socialIconBorderBottom: bottom,
                                        socialIconBorderLeft: left,
                                    })
                                }
                                onChangeColor={colorValue =>
                                    saveSocialIconStyles({ borderColorIcon: colorValue })
                                }
                                onChangeRadius={newrRadius =>
                                    saveSocialIconStyles({ borderRadiusIcon: newrRadius })
                                }
                            />
                            <PremiumResponsiveMargin
                                directions={["all"]}
                                marginTop={socialIconMarginT}
                                marginRight={socialIconMarginR}
                                marginBottom={socialIconMarginB}
                                marginLeft={socialIconMarginL}
                                marginTopTablet={socialIconMarginTTablet}
                                marginRightTablet={socialIconMarginRTablet}
                                marginBottomTablet={socialIconMarginBTablet}
                                marginLeftTablet={socialIconMarginLTablet}
                                marginTopMobile={socialIconMarginTMobile}
                                marginRightMobile={socialIconMarginRMobile}
                                marginBottomMobile={socialIconMarginBMobile}
                                marginLeftMobile={socialIconMarginLMobile}
                                showUnits={true}
                                onChangeMarSizeUnit={newvalue => saveSocialIconStyles({ socialIconMarginType: newvalue })}
                                selectedUnit={socialIconStyles[0].socialIconMarginType}
                                onChangeMarginTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ socialIconMarginT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ socialIconMarginTTablet: newValue })
                                        } else {
                                            setAttributes({ socialIconMarginTMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginRight={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ socialIconMarginR: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ socialIconMarginRTablet: newValue })
                                        } else {
                                            setAttributes({ socialIconMarginRMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ socialIconMarginB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ socialIconMarginBTablet: newValue })
                                        } else {
                                            setAttributes({ socialIconMarginBMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginLeft={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ socialIconMarginL: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ socialIconMarginLTablet: newValue })
                                        } else {
                                            setAttributes({ socialIconMarginLMobile: newValue })
                                        }
                                    }
                                }

                            />
                            <PremiumResponsivePadding
                                paddingTop={socialIconPaddingTop}
                                paddingRight={socialIconPaddingRight}
                                paddingBottom={socialIconPaddingBottom}
                                paddingLeft={socialIconPaddingLeft}
                                paddingTopTablet={socialIconPaddingTTablet}
                                paddingRightTablet={socialIconPaddingRTablet}
                                paddingBottomTablet={socialIconPaddingBTablet}
                                paddingLeftTablet={socialIconPaddingLTablet}
                                paddingTopMobile={socialIconPaddingTMobile}
                                paddingRightMobile={socialIconPaddingRMobile}
                                paddingBottomMobile={socialIconPaddingBMobile}
                                paddingLeftMobile={socialIconPaddingLMobile}
                                showUnits={true}
                                defaultValue={0}
                                min={0}
                                max={100}
                                selectedUnit={socialIconStyles[0].socialIconPaddingType}
                                onChangePadSizeUnit={newvalue => saveSocialIconStyles({ socialIconPaddingType: newvalue })}
                                onChangePaddingTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ socialIconPaddingTop: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ socialIconPaddingTTablet: newValue })
                                        } else {
                                            setAttributes({ socialIconPaddingTMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingRight={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ socialIconPaddingRight: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ socialIconPaddingRTablet: newValue })
                                        } else {
                                            setAttributes({ socialIconPaddingRMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ socialIconPaddingBottom: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ socialIconPaddingBTablet: newValue })
                                        } else {
                                            setAttributes({ socialIconPaddingBMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingLeft={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ socialIconPaddingLeft: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ socialIconPaddingLTablet: newValue })
                                        } else {
                                            setAttributes({ socialIconPaddingLMobile: newValue })
                                        }
                                    }
                                }
                            />
                        </PanelBody>
                        )}
                    <PanelBody
                        title={__("Content")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <div className="premium-control-toggle">
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-block-for-gutenberg')}
                                colorValue={contentColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    setAttributes({
                                        contentColor: newValue
                                    })
                                }
                            />
                        </div>
                        {effectPersonStyle === 'effect1' ?
                            <ResponsiveSingleRangeControl
                                label={__("Bottom Offset", 'premium-block-for-gutenberg')}
                                value={bottomInfo}
                                onChange={newValue => setAttributes({ bottomInfo: newValue })}
                                showUnit={false}
                                defaultValue={15}
                                min={15}
                            />
                            : ""
                        }
                    </PanelBody>
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
                            `#premium-person-${id} .premium-person__social-List li:hover i{`,
                            `color: ${socialIconStyles[0].socialIconHoverColor} !important;`,
                            `-webkit-transition: all .2s ease-in-out;`,
                            `transition: all .2s ease-in-out;`,
                            "}"
                        ].join("\n")
                    }}
                />
                {content()}
            </div>
        ];
    };
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return { deviceType: deviceType }
})(edit)