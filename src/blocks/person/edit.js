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
import SpacingControl from '../../components/premium-responsive-spacing'
import PremiumMediaUpload from "../../components/premium-media-upload"
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import RadioComponent from '../../components/radio-control';
import { gradientBackground, borderCss, padddingCss, marginCss } from '../../components/HelperFunction'
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
    BlockControls,
    RichText
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
            namePadding
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
                console.log(newData)
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
                    <a className={`premium-person__socialIcon__link_content ${socialIconStyles[0].defaultIconColor ? value.label : ""}`} href={`${value.value}`}
                        style={{
                            ...borderCss(socialIconBorder, this.props.deviceType),
                            ...padddingCss(socialIconPadding, this.props.deviceType),
                            ...marginCss(socialIconMargin, this.props.deviceType),
                            background: socialIconStyles[0].socialIconBackgroundColor,
                        }}>
                        <i className={`premium-person__socialIcon ${value.label == "youtube" ? "fa fa-youtube-play" : `fa fa-${value.label}`} premium-person__${socialIconStyles[0].socialIconHoverColor}`}
                            style={{
                                color: socialIconStyles[0].socialIconColor,
                                fontSize: (socialIconSize[this.props.deviceType] || 20) + socialIconSize.unit
                            }}
                        />
                    </a>
                </li>
            ))}
            </ul>
        }

        const content = () => {
            return <div className={`premium-person-content ${id} ${multiPersonChecked > 1 ? `premium-person__${rowPerson}` : ""}`}
            > {multiPersonContent.map((value, index) => (
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
                                fontSize: `${nameTypography.fontSize[this.props.deviceType] || ''}${nameTypography.fontSize.unit}`,
                                ...padddingCss(namePadding, this.props.deviceType),
                            }}
                        >
                            {value.name && (
                                <RichText
                                    tagName={nameTag.toLowerCase()}
                                    className={`premium-person__name`}
                                    value={value.name}
                                    isSelected={false}
                                    onChange={value => { this.save({ name: value }, index) }}
                                    style={{
                                        color: nameStyles[0].nameColor,
                                        fontSize: `${nameTypography.fontSize[this.props.deviceType] || ''}${nameTypography.fontSize.unit}`,
                                        letterSpacing: nameTypography.letterSpacing + "px",
                                        textTransform: nameTypography.textTransform ? "uppercase" : "none",
                                        fontStyle: nameTypography.fontStyle,
                                        fontWeight: nameTypography.fontWeight,
                                        lineHeight: nameTypography.lineHeight + "px",
                                        alignSelf: nameV,
                                        textShadow: `${nameShadow.horizontal}px ${nameShadow.vertical}px ${nameShadow.blur}px ${nameShadow.color}`
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            )}
                        </div>
                        <div
                            className={`premium-person__title_wrap`}
                            style={{
                                fontSize: `${titleTypography.fontSize[this.props.deviceType] || ''}${titleTypography.fontSize.unit}`,
                            }}
                        >
                            {value.title && (
                                <RichText
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-person__title`}
                                    value={value.title}
                                    isSelected={false}
                                    onChange={value => { this.save({ title: value }, index) }}
                                    style={{
                                        color: titleStyles[0].titleColor,
                                        fontSize: `${titleTypography.fontSize[this.props.deviceType] || ''}${titleTypography.fontSize.unit}`,
                                        letterSpacing: titleTypography.letterSpacing + "px",
                                        textTransform: titleTypography.textTransform ? "uppercase" : "none",
                                        fontStyle: titleTypography.fontStyle,
                                        fontWeight: titleTypography.fontWeight,
                                        lineHeight: titleTypography.lineHeight + "px",
                                        alignSelf: titleV,
                                        textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            )}
                        </div>
                        <div
                            className={`premium-person__desc_wrap`}
                            style={{
                                fontSize: `${descTypography.fontSize[this.props.deviceType] || 20}${descTypography.fontSize.unit}`,
                            }}
                        >
                            {value.desc && (
                                <RichText
                                    tagName="span"
                                    className={`premium-person__desc`}
                                    value={value.desc}
                                    isSelected={false}
                                    onChange={value => { this.save({ desc: value }, index) }}
                                    style={{
                                        color: descStyles[0].descColor,
                                        fontSize: `${descTypography.fontSize[this.props.deviceType] || 20}${descTypography.fontSize.unit}`,
                                        letterSpacing: descTypography.letterSpacing + "px",
                                        textTransform: descTypography.textTransform ? "uppercase" : "none",
                                        fontStyle: descTypography.fontStyle,
                                        fontWeight: descTypography.fontWeight,
                                        lineHeight: descTypography.lineHeight + "px",
                                        alignSelf: descV,
                                        textShadow: `${descShadow.horizontal}px ${descShadow.vertical}px ${descShadow.blur}px ${descShadow.color}`
                                    }}
                                    keepPlaceholderOnFocus
                                />
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
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("General Settings")}
                                className="premium-panel-body"
                                initialOpen={true}
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
                                <RadioComponent
                                    label={__("Name Tag", 'premium-blocks-for-gutenberg')}
                                    choices={['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'div', 'span']}
                                    value={nameTag}
                                    onChange={(newValue) => setAttributes({ nameTag: newValue })}
                                />
                                <RadioComponent
                                    label={__("Title Tag", 'premium-blocks-for-gutenberg')}
                                    choices={['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'div', 'span']}
                                    value={titleTag}
                                    onChange={(newValue) => setAttributes({ titleTag: newValue })}
                                />
                                <SelectControl
                                    label={__("Image Hover Effect", 'premium-block-for-gutenberg')}
                                    options={HOVER}
                                    value={hoverEffectPerson}
                                    onChange={newEffect => setAttributes({ hoverEffectPerson: newEffect })}
                                />

                            </PanelBody>
                            {times(multiPersonChecked, n => MultiPersonSetting(n))}
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Image Style")}
                                className="premium-panel-body"
                                initialOpen={true}
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
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                                    value={nameTypography}
                                    onChange={newValue => setAttributes({ nameTypography: newValue })}
                                />
                                <PremiumShadow
                                    label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                    value={nameShadow}
                                    onChange={(value) => setAttributes({ nameShadow: value })}
                                />
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={namePadding}
                                    onChange={(value) => setAttributes({ namePadding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Title")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                                    value={titleTypography}
                                    onChange={newValue => setAttributes({ titleTypography: newValue })}
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
                                    label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                    value={titleShadow}
                                    onChange={(value) => setAttributes({ titleShadow: value })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Description")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                                    value={descTypography}
                                    onChange={newValue => setAttributes({ descTypography: newValue })}
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
                                    label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                    value={descShadow}
                                    onChange={(value) => setAttributes({ descShadow: value })}
                                />
                            </PanelBody>
                            {multiPersonChecked > 1 ? (multiPersonContent.map(i => i.socialIcon && (<PanelBody
                                title={__("Social Icon")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveRangeControl
                                    label={__('Size', 'premium-blocks-for-gutenberg')}
                                    value={socialIconSize}
                                    onChange={(value) => setAttributes({ socialIconSize: value })}
                                    min={1}
                                    max={100}
                                    step={1}
                                    showUnit={true}
                                    units={['px', 'em', 'rem']}
                                    defaultValue={20}
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
                                    label={__('Border', 'premium-blocks-for-gutenberg')}
                                    value={socialIconBorder}
                                    onChange={(value) => setAttributes({ socialIconBorder: value })}
                                />
                                <SpacingControl
                                    label={__('Margin', 'premium-blocks-for-gutenberg')}
                                    value={socialIconMargin}
                                    onChange={(value) => setAttributes({ socialIconMargin: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={socialIconPadding}
                                    onChange={(value) => setAttributes({ socialIconPadding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>)))
                                : multiPersonContent[0].socialIcon && (<PanelBody
                                    title={__("Social Icon")}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <ResponsiveRangeControl
                                        label={__('Size', 'premium-blocks-for-gutenberg')}
                                        value={socialIconSize}
                                        onChange={(value) => setAttributes({ socialIconSize: value })}
                                        min={1}
                                        max={100}
                                        step={1}
                                        showUnit={true}
                                        units={['px', 'em', 'rem']}
                                        defaultValue={20}
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
                                        label={__('Border', 'premium-blocks-for-gutenberg')}
                                        value={socialIconBorder}
                                        onChange={(value) => setAttributes({ socialIconBorder: value })}
                                    />
                                    <SpacingControl
                                        label={__('Margin', 'premium-blocks-for-gutenberg')}
                                        value={socialIconMargin}
                                        onChange={(value) => setAttributes({ socialIconMargin: value })}
                                        showUnits={true}
                                        responsive={true}
                                    />
                                    <SpacingControl
                                        label={__('Padding', 'premium-blocks-for-gutenberg')}
                                        value={socialIconPadding}
                                        onChange={(value) => setAttributes({ socialIconPadding: value })}
                                        showUnits={true}
                                        responsive={true}
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
                        </InspectorTab>
                        <InspectorTab key={'advance'}></InspectorTab>
                    </InspectorTabs>
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