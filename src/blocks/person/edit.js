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
import InsideTabs from '../../components/InsideTabs'
import InsideTab from '../../components/InsideTab';
import WebfontLoader from "../../components/typography/fontLoader"
import { borderCss, padddingCss, marginCss, typographyCss } from '../../components/HelperFunction'
import times from "lodash/times"

const { withSelect } = wp.data

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl
} = wp.components;

const {
    InspectorControls,
    AlignmentToolbar,
    BlockControls,
    RichText
} = wp.editor;

const SortableItem = SortableElement(({ onRemove, changeLinkValue, value, addLink, personIndex, newIndex }) =>
    <span tabIndex={0} key={newIndex} className={`premium-repeater-row-wrapper ${value.link ? 'active' : ''}`}>
        <span className="premium-repeater-row-inner">
            <span className="premium-repeater-row-tools">
                <span className="premium-repeater-item-title" onClick={() => addLink(value, personIndex)}>{value.label}</span>
                <div className="premium-repeater-row-item-remove">
                    <button className="premium-repeater-item-remove is-tertiary" onClick={() => onRemove(value.label)}>x</button>
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
    </span>);

const SortableList = SortableContainer(({ items, onRemove, changeLinkValue, addLink, personIndex }) => {
    return (
        <span className="premium-repeater-rows">
            {(items).map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} newIndex={index} personIndex={personIndex} value={value} onRemove={onRemove} addLink={addLink} changeLinkValue={changeLinkValue} />
            ))}
        </span>
    );
});

class edit extends Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        if (!this.props.attributes.classMigrate) {
            this.props.setAttributes({
                multiPersonContent: [{
                    id: 1,
                    personImgUrl: "",
                    personImgId: '',
                    name: "John Doe",
                    title: "Senior Developer",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla",
                    socialIcon: false,
                    items: [
                        { label: 'facebook', link: false, value: "#", changeinput: "#" },
                        { label: 'twitter', link: false, value: "#", changeinput: "#" },
                        { label: 'instagram', link: false, value: "#", changeinput: "#" },
                        { label: 'youtube', link: false, value: "#", changeinput: "#" }
                    ]
                }]
            })
        }
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
            namePadding,
            titlePadding,
            titleMargin,
            descPadding,
            contentPadding,
            imgHeight
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

        let loadTitleGoogleFonts;
        let loadNameGoogleFonts;
        let loadDescriptionGoogleFonts;

        if (nameTypography.fontFamily !== 'Default') {
            const nameConfig = {
                google: {
                    families: [nameTypography.fontFamily],
                },
            }
            loadNameGoogleFonts = (
                <WebfontLoader config={nameConfig}>
                </WebfontLoader>
            )
        }

        if (titleTypography.fontFamily !== 'Default') {
            const titleConfig = {
                google: {
                    families: [titleTypography.fontFamily],
                },
            }
            loadTitleGoogleFonts = (
                <WebfontLoader config={titleConfig}>
                </WebfontLoader>
            )
        }

        if (descTypography.fontFamily !== 'Default') {
            const descriptionConfig = {
                google: {
                    families: [descTypography.fontFamily],
                },
            }
            loadDescriptionGoogleFonts = (
                <WebfontLoader config={descriptionConfig}>
                </WebfontLoader>
            )
        }

        const renderCss = (
            <style>
                {`
                    #premium-person-${id} .premium-person:hover {
                        border-color: ${borderHoverColor} !important;
                    }
                    #premium-person-${id} .premium-person__social-List li:hover i{
                        color: ${socialIconStyles[0].socialIconHoverColor} !important;
                        -webkit-transition: all .2s ease-in-out;
                        transition: all .2s ease-in-out;
                    }
                    #premium-person-${id} .premium-person__img_wrap img {
                        height: ${imgHeight}px !important;
                        filter: ${`brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`} !important;
                    }
                `}
            </style>
        );

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
            setAttributes(
                multiPersonContent[i] = array[0]
            );
        }

        const changeLinkValue = (value, i, personIndex) => {
            i.changeinput = value
            i.value = value

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
                            ...padddingCss(contentPadding, this.props.deviceType),
                            background: contentColor ? contentColor : "#f2f2f2",
                            bottom: effectPersonStyle === 'effect1' ? bottomInfo + "px" : ""
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
                                    ...padddingCss(namePadding, this.props.deviceType),
                                    color: nameStyles[0].nameColor,
                                    ...typographyCss(nameTypography, this.props.deviceType),
                                    alignSelf: nameV,
                                    textShadow: `${nameShadow.horizontal}px ${nameShadow.vertical}px ${nameShadow.blur}px ${nameShadow.color}`
                                }}
                                keepPlaceholderOnFocus
                            />
                        )}
                        {value.title && (
                            <RichText
                                tagName={titleTag.toLowerCase()}
                                className={`premium-person__title`}
                                value={value.title}
                                isSelected={false}
                                onChange={value => { this.save({ title: value }, index) }}
                                style={{
                                    ...marginCss(titleMargin, this.props.deviceType),
                                    ...padddingCss(titlePadding, this.props.deviceType),
                                    ...typographyCss(titleTypography, this.props.deviceType),
                                    color: titleStyles[0].titleColor,
                                    alignSelf: titleV,
                                    textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`
                                }}
                                keepPlaceholderOnFocus
                            />
                        )}
                        {value.desc && (
                            <RichText
                                tagName="span"
                                className={`premium-person__desc`}
                                value={value.desc}
                                isSelected={false}
                                onChange={value => { this.save({ desc: value }, index) }}
                                style={{
                                    ...padddingCss(descPadding, this.props.deviceType),
                                    ...typographyCss(descTypography, this.props.deviceType),
                                    color: descStyles[0].descColor,
                                    alignSelf: descV,
                                    textShadow: `${descShadow.horizontal}px ${descShadow.vertical}px ${descShadow.blur}px ${descShadow.color}`
                                }}
                                keepPlaceholderOnFocus
                            />
                        )}
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
                    multiPersonContent[index] = arrayItem[0]
                    setAttributes(multiPersonContent[index] = arrayItem[0]);
                }
                else {
                    arrayItem[0].items.push({ label: newicon, link: false, value: "", changeinput: "#" })
                    arrayItem[0].items.filter(d => d.label != newicon)
                    multiPersonContent[index] = arrayItem[0]
                    setAttributes(multiPersonContent[index] = arrayItem[0]);
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
                    <div className="premium-repeater-rows">
                        <label className="premium-repeater-label">{__("Social Media")}</label>
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
                        <SortableList items={multiPersonContent[index].items} personIndex={index} onSortEnd={(o, n) => onSortEndMulti(index, o, n)} onRemove={(value) => onRemove(value, index)} changeLinkValue={(value, i) => changeLinkValue(value, i, index)} addLink={(value) => addLink(value, index)} shouldCancelStart={shouldCancelStart} helperClass='premium-person__sortableHelper' />
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
                                <ResponsiveSingleRangeControl
                                    label={__("Custom Image Height", 'premium-block-for-gutenberg')}
                                    value={imgHeight}
                                    onChange={value => setAttributes({ imgHeight: value })}
                                    showUnit={false}
                                    defaultValue={200}
                                    min={1}
                                    max={500}
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
                                    onChangeBlur={newSize => setAttributes({ blur: newSize })}
                                    onChangeBright={newSize => setAttributes({ bright: newSize })}
                                    onChangeContrast={newSize => setAttributes({ contrast: newSize })}
                                    onChangeSat={newSize => setAttributes({ saturation: newSize })}
                                    onChangeHue={newSize => setAttributes({ hue: newSize })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Name")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                    value={nameTypography}
                                    onChange={newValue => setAttributes({ nameTypography: newValue })}
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
                                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
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
                                <hr />
                                <SpacingControl
                                    label={__('Margin', 'premium-blocks-for-gutenberg')}
                                    value={titleMargin}
                                    onChange={(value) => setAttributes({ titleMargin: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={titlePadding}
                                    onChange={(value) => setAttributes({ titlePadding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Description")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
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
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={descPadding}
                                    onChange={(value) => setAttributes({ descPadding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                            <PanelBody
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
                                <InsideTabs>
                                    <InsideTab tabTitle={__('Normal')}>
                                        <Fragment>
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
                                                label={__("Social Icon Background Color", 'premium-block-for-gutenberg')}
                                                colorValue={socialIconStyles[0].socialIconBackgroundColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    saveSocialIconStyles({
                                                        socialIconBackgroundColor: newValue
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    </InsideTab>
                                    <InsideTab tabTitle={__('Hover')}>
                                        <Fragment>
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
                                        </Fragment>
                                    </InsideTab>
                                </InsideTabs>
                                <hr />
                                <ToggleControl
                                    label={__("Brands Default Colors", 'premium-block-for-gutenberg')}
                                    checked={socialIconStyles[0].defaultIconColor}
                                    onChange={newCheck => saveSocialIconStyles({ defaultIconColor: newCheck })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__('Border', 'premium-blocks-for-gutenberg')}
                                    value={socialIconBorder}
                                    onChange={(value) => setAttributes({ socialIconBorder: value })}
                                />
                                <hr />
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
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={contentPadding}
                                    onChange={(value) => setAttributes({ contentPadding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'advance'}></InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
            ),
            renderCss,
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
                {loadNameGoogleFonts}
                {loadTitleGoogleFonts}
                {loadDescriptionGoogleFonts}
            </div>
        ];
    };
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return { deviceType: deviceType }
})(edit)