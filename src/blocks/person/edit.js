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
import times from "lodash/times"

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

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

const {
    InspectorControls,
    ColorPalette,
    AlignmentToolbar,
    BlockControls,
    MediaUpload,
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

class PremiumPerson extends Component {
    constructor() {
        super(...arguments);
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
            contentColor,
            iconMarginL,
            iconMarginR,
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
            socialIconPaddingU,
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

        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (['div', 'button', 'input'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
                return true; // Return true to cancel sorting
            }
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
                    <a className={`premium-person__socialIcon__link_content ${defaultIconColor ? value.label : ""}`} href={`${value.value}`} style={{
                        padding: socialIconPadding + socialIconPaddingU,
                        borderStyle: borderTypeIcon,
                        borderWidth: borderWidthIcon + "px",
                        borderRadius: borderRadiusIcon || 100 + "px",
                        borderColor: borderColorIcon,
                        marginLeft: iconMarginL + "px",
                        marginRight: iconMarginR + "px",
                        background: socialIconBackgroundColor,
                    }}>
                        <i className={`premium-person__socialIcon ${value.label == "youtube" ? "fa fa-youtube-play" : `fa fa-${value.label}`} premium-person__${socialIconHoverColor}`}
                            style={{
                                color: socialIconColor,
                                fontSize: (socialIconSize || 50) + iconSizeUnit,
                            }}
                        />
                    </a>
                </li>
            ))}
            </ul>
        }
        const content = () => {
            return <div className={`${multiPersonChecked > 1 ? `premium-person__${rowPerson}` : ""} ${id}`}
            > {multiPersonContent.map((value) => (
                <div key={value.id} className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}>
                    <div className={`premium-person__img__container`}>
                        <div
                            className={`premium-person__img_wrap`}
                        >
                            {value.personImgUrl && (
                                <img
                                    className={`premium-person__img`}
                                    src={`${value.personImgUrl.url}`}
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
            return <PanelBody key={index} title={__(`Person #${index + 1} Setting`)}
                initialOpen={false}>
                <p>{__("Image")}</p>
                {multiPersonContent[index].personImgUrl && (
                    <img src={multiPersonContent[index].personImgUrl.url} width="100%" height="auto" />
                )}
                {!multiPersonContent[index].personImgUrl && <DefaultImage />}
                <MediaUpload
                    allowedTypes={["image"]}
                    onSelect={value => { this.save({ personImgUrl: value }, index) }}
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
                <TextControl
                    label={__("Name")}
                    value={multiPersonContent[index].name}
                    onChange={value => { this.save({ name: value }, index) }}
                />
                <TextControl
                    label={__("Title")}
                    value={multiPersonContent[index].title}
                    onChange={value => { this.save({ title: value }, index) }}
                />
                <TextareaControl
                    label={__("Description")}
                    value={multiPersonContent[index].desc}
                    onChange={value => { this.save({ desc: value }, index) }}
                />
                <ToggleControl
                    label={__("Enable Social Icons")}
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
        const onResetClickNameTypo = () => {
            setAttributes({ 
                nameWeight: 500,  
                nameSize: "20",
                nameStyle: "normal",
                nameLetter: "0",
                nameUpper: false,
                nameLine:""
            });
        }
        const onResetClickTitleTypo = () => {
            setAttributes({ 
                titleWeight: 500,  
                titleSize: "20",
                titleStyle: "normal",
                titleLetter: "0",
                titleUpper: false,
                titleLine:""
            });
        }
        const onResetClickDescTypo = () => {
            setAttributes({ 
                descWeight: "", 
                descSize: "20",
                descStyle: "normal",
                descLetter: "0",
                descUpper: false,
                descLine:""
            });
        }
        const onResetClickMultiPersonBorder= () => {
            setAttributes({ 
                borderTypeIcon: "none", 
                borderWidthIcon:"1", 
                borderColorIcon:"", 
                borderRadiusIcon:"0",
            });
        }
        const onResetClickPersonBorder= () => {
            setAttributes({ 
                borderTypeIcon: "none", 
                borderWidthIcon:"1", 
                borderColorIcon:"", 
                borderRadiusIcon:"0",
            });
        }
        const onResetClickNameTextShadow= () => {
            setAttributes({ 
                nameshadowColor: "", 
                nameshadowBlur:"0", 
                nameshadowHorizontal:"0", 
                nameshadowVertical:"0",
            });
        }
        const onResetClickTitleTextShadow= () => {
            setAttributes({ 
                titleshadowColor: "", 
                titleshadowBlur:"0", 
                titleshadowHorizontal:"0", 
                titleshadowVertical:"0",
            });
        }
        const onResetClickDescTextShadow= () => {
            setAttributes({ 
                descshadowColor: "", 
                descshadowBlur:"0", 
                descshadowHorizontal:"0", 
                descshadowVertical:"0",
            });
        }
        const onResetClickImageFilter= () => {
            setAttributes({ 
                blur: "0", 
                bright:"100", 
                contrast:"100", 
                saturation:"100",
                hue:"0"
            });
        }
        const onResetClickMultiPersonMargin= () => {
            setAttributes({ 
                iconMarginL: "1", 
                iconMarginR:"1"
            });
        }
        const onResetClickPersonMargin= () => {
            setAttributes({ 
                iconMarginL: "1", 
                iconMarginR:"1"
            });
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
                            onResetClick={onResetClickImageFilter}
                        />
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
                            onChangeStyle={newStyle => setAttributes({ nameStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                setAttributes({ nameLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ nameUpper: check })}
                            onResetClick={onResetClickNameTypo}
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
                            onResetClick={onResetClickNameTextShadow}
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
                            onResetClick={onResetClickTitleTypo}
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
                            onResetClick={onResetClickTitleTextShadow}
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
                            onResetClick={onResetClickDescTypo}
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
                            onResetClick={onResetClickDescTextShadow}
                        />
                    </PanelBody>
                    {multiPersonChecked > 1 ? (multiPersonContent.map(i => i.socialIcon)) && (<PanelBody
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
                            onResetClick={onResetClickMultiPersonBorder}
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
                                directions={["left", "right"]}
                                marginLeft={iconMarginL}
                                marginRight={iconMarginR}
                                onChangeMarLeft={value =>
                                    setAttributes({
                                        iconMarginL: value || 1
                                    })
                                }
                                onChangeMarRight={value =>
                                    setAttributes({
                                        iconMarginR: value || 1
                                    })
                                }
                                onResetClick={onResetClickMultiPersonMargin}
                            />
                        </div>
                    </PanelBody>)
                        : multiPersonContent[0].socialIcon && (<PanelBody
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
                                onResetClick={onResetClickPersonBorder}
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
                                    directions={["left", "right"]}
                                    marginLeft={iconMarginL}
                                    marginRight={iconMarginR}
                                    onChangeMarLeft={value =>
                                        setAttributes({
                                            iconMarginL: value || 1
                                        })
                                    }
                                    onChangeMarRight={value =>
                                        setAttributes({
                                            iconMarginR: value || 1
                                        })
                                    }
                                onResetClick={onResetClickPersonMargin}
                                />
                            </div>
                        </PanelBody>
                        )}
                    <PanelBody
                        title={__("Content")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <div className="premium-control-toggle">
                            <strong>{__("Color")}</strong>
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
                                        <p>{__("Content Color")}</p>
                                        <ColorPalette
                                            value={contentColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    contentColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
                        {effectPersonStyle === 'effect1' ?
                            <RangeControl
                                label={__("Bottom Offset")}
                                value={bottomInfo}
                                min={15}
                                onChange={newValue => setAttributes({ bottomInfo: newValue })}
                            /> : ""}
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
                            `.premium-person__social-List li:hover i{`,
                            `color: ${socialIconHoverColor} !important;`,
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
export default PremiumPerson;
