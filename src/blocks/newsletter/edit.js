import classnames from "classnames";
import Select from 'react-select';
const { InspectorControls, ColorPalette } = wp.blockEditor;
const { PanelBody, SelectControl, RangeControl, ToggleControl, TextControl, Spinner } = wp.components;
const { __ } = wp.i18n;
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import FONTS from "../../components/premium-fonts";
import { Fragment } from "react";
const { addQueryArgs } = wp.url;
const { apiFetch } = wp;
const { withSelect } = wp.data


const { Component } = wp.element;


export class edit extends Component {

    constructor() {
        super(...arguments);

        this.state = {
            api: "",
            isSavedAPI: false,
            isSaving: false,
            list: false,
            isFetching: false,
            listsLoaded: false,
            isFetchingAttributes: false,
            listAttr: false,
            listAttrLoaded: false,
            isFetchingGroups: false,
            listGroups: false,
            listGroupLoaded: false,
            isFetchingTags: false,
            listTags: false,
            listTagsLoaded: false
        }
        this.getMailChimpAudience = this.getMailChimpAudience.bind(this);
        this.getMailChimpGroups = this.getMailChimpGroups.bind(this);
        this.getMailChimpAttributes = this.getMailChimpAttributes.bind(this);
        this.getMailChimpTags = this.getMailChimpTags.bind(this)
        this.saveAPI = this.saveAPI.bind(this)
        this.removeAPI = this.removeAPI.bind(this);
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId })
        let e;
        wp.api.loadPromise.then(() => {
            e = new wp.api.models.Settings;
            e.fetch().then(e => {
                this.setState({ api: e.mail_chimp_api });
                "" !== this.state.api && this.setState({ isSavedAPI: true })
            })
        })
    }
    removeAPI() {
        this.setState({ api: "" });
        this.state.isSavedAPI && [this.setState({ isSaving: true }),
        new wp.api.models.Settings({
            mail_chimp_api: ""
        }).save().then(() => {
            this.setState({
                isSavedAPI: false,
                isSaving: false
            })
        })]
    }
    saveAPI() {
        this.setState({ isSaving: true });
        new wp.api.models.Settings({
            mail_chimp_api: this.state.api
        }).save().then(e => {
            this.setState({
                isSaving: false,
                isSavedAPI: true
            })
        })
    }
    getMailChimpAudience() {

        (this.state.api && this.state.api.split("-")[1]) ? (this.setState({ isFetching: !0 }),
            apiFetch({
                path: addQueryArgs("/pbg-mailchimp/v1/get", {
                    apikey: this.state.api,
                    endpoint: "lists/",
                    queryargs: ["limit=30", "offset=0"]
                })
            }).then(e => {
                const t = [];
                e.lists.map(e => {
                    t.push({
                        value: e.id,
                        label: e.name
                    })
                }), this.setState({
                    list: t,
                    listsLoaded: true,
                    isFetching: false
                })
            }).catch(() => {
                this.setState({
                    list: [],
                    listsLoaded: true,
                    isFetching: false
                })
            })) : this.setState({
                list: [],
                listsLoaded: true
            })
    }

    getMailChimpGroups() {
        this.state.api && this.props.attributes.list_id ? (this.setState({
            isFetchingGroups: true
        }), apiFetch({
            path: addQueryArgs("/pbg-mailchimp/v1/get", {
                apikey: this.state.api,
                endpoint: "lists/" + this.props.attributes.list_id + "/interest-categories/"
            })
        }).then(e => {
            const t = [];
            e.map(e => {
                t.push({
                    value: e.id,
                    label: e.title
                })
            }), this.setState({
                listGroups: t,
                listGroupLoaded: true,
                isFetchingGroups: false
            })
        }).catch(() => {
            this.setState({
                listGroups: [],
                listGroupLoaded: true,
                isFetchingGroups: false
            })
        })) : this.setState({
            listGroups: [],
            listGroupLoaded: true
        })
    }
    getMailChimpTags() {
        this.state.api && this.props.attributes.list_id ? (this.setState({
            isFetchingTags: true
        }), apiFetch({
            path: addQueryArgs("/pbg-mailchimp/v1/get", {
                apikey: this.state.api,
                endpoint: "lists/" + this.props.attributes.list_id + "/tag-search/"
            })
        }).then(e => {
            const t = [];
            e.tags && e.tags.map(e => {
                t.push({
                    value: e.id,
                    label: e.name
                })
            }), this.setState({
                listTags: t,
                listTagsLoaded: true,
                isFetchingTags: false
            })
        }).catch(() => {
            this.setState({
                listTags: [],
                listTagsLoaded: true,
                isFetchingTags: false
            })
        })) : this.setState({
            listTags: [],
            listTagsLoaded: true
        })
    }
    getMailChimpAttributes() {
        if (!this.state.api || !this.props.attributes.list_id) {
            const e = [];
            return e.push({
                value: null,
                label: "None"
            }), e.push({
                value: "email",
                label: "Email *"
            }), void this.setState({
                listAttr: e,
                listAttrLoaded: true
            })
        }
        this.setState({
            isFetchingAttributes: true
        }), apiFetch({
            path: addQueryArgs("/pbg-mailchimp/v1/get", {
                apikey: this.state.api,
                endpoint: "lists/" + this.props.attributes.list_id + "/merge-fields/"
            })
        }).then(e => {
            const t = [];
            t.push({
                value: null,
                label: "None"
            }), t.push({
                value: "email",
                label: "Email *"
            }), e.merge_fields.map((e, n) => {
                t.push({
                    value: e.tag,
                    label: e.name
                })
            }), this.setState({
                listAttr: t,
                listAttrLoaded: true,
                isFetchingAttributes: false
            })
        }).catch(() => {
            const e = [];
            e.push({
                value: null,
                label: "None"
            }), e.push({
                value: "email",
                label: "Email *"
            }), this.setState({
                listAttr: e,
                listAttrLoaded: true,
                isFetchingAttributes: false
            })
        })
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

    render() {
        const { isSelected, setAttributes, clientId, className, attributes } =
            this.props;
        const { list, listsLoaded, isFetching, isSavedAPI, listAttr, isFetchingAttributes, listAttrLoaded, isFetchingGroups, listGroups, listGroupLoaded, isFetchingTags, listTags, listTagsLoaded } = this.state
        const m = Array.isArray(list) && list.length,
            f = Array.isArray(listAttr) && listAttr.length,
            g = Array.isArray(listGroups) && listGroups.length,
            v = Array.isArray(listTags) && listTags.length;

        const {
            block_id,
            api,
            list_id,
            successMessage,
            errorMessage,
            columnGap,
            rowGap,
            eMail,
            inputStyles,
            btnStyles,
            messageStyle,
        } = attributes;
        const COLUMNS = [
            {
                value: "20",
                label: "20%",
            },
            {
                value: "25",
                label: "25%",
            },
            {
                value: "30",
                label: "30%",
            },
            {
                value: "33",
                label: "33%",
            },
            {
                value: "40",
                label: "40%",
            },
            {
                value: "50",
                label: "50%",
            },
            {
                value: "60",
                label: "60%",
            },
            {
                value: "66",
                label: "66%",
            },
            {
                value: "70",
                label: "70%",
            },
            {
                value: "75",
                label: "75%",
            },
            {
                value: "80",
                label: "80%",
            },

            {
                value: "100",
                label: "100%",
            },
        ];


        const textSizeInput = this.getPreviewSize(this.props.deviceType, inputStyles[0].textSize, inputStyles[0].textSizeTablet, inputStyles[0].textSizeMobile);
        const textSizeBtn = this.getPreviewSize(this.props.deviceType, btnStyles[0].btnSize, btnStyles[0].btnSizeTablet, btnStyles[0].btnSizeMobile);


        const saveInputStyle = (value) => {
            const newUpdate = inputStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                inputStyles: newUpdate,
            });
        };
        const saveButtonStyle = (value) => {
            const newUpdate = btnStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                btnStyles: newUpdate,
            });
        };
        const saveMessageStyle = (value) => {
            const newUpdate = messageStyle.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                messageStyle: newUpdate,
            });
        };
        return [
            isSelected && (
                <InspectorControls key="inspector">
                    <PanelBody
                        title={__("General")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <TextControl
                            label={__(`E-mail`)}
                            value={eMail}
                            onChange={(value) => setAttributes({ eMail: value })}
                        />
                        <TextControl
                            label={__(`Mailchimp Api Key`)}
                            value={this.state.api}
                            onChange={e => this.setState({ api: e })} />
                        <button className={`button button-primary`} disabled={"" === this.state.api} onClick={this.saveAPI}>
                            {this.state.isSaving ? __("Saving", "kadence-blocks-pro") : __("Save", "kadence-blocks-pro")}
                        </button>
                        {isSavedAPI && api !== "" && <button onClick={this.removeAPI}>
                            remove
                        </button>}
                        {<Fragment>
                            <h2 className="kt-heading-size-title">{__('Select  Audience', '')}</h2>
                            {(listsLoaded ? '' : this.getMailChimpAudience())}
                            {!Array.isArray(list) ?
                                <Spinner /> :
                                __("No Audience found.", "kadence-blocks-pro")}
                        </Fragment>}
                        {!isFetching && m && <Fragment>

                            <h2 className="kt-heading-size-title">{__('Select Audience', '')}</h2>
                            <Select
                                value={list_id}
                                onChange={e => console.log(e
                                )}
                                options={list}
                            />
                        </Fragment>
                        }
                        {list_id && <Fragment>
                            <h2 className="kt-heading-size-title">{__('Select Group', 'kadence-blocks')}</h2>
                            {listGroupLoaded ? "" : this.getMailChimpGroups()}
                            {!Array.isArray(listGroups) ?
                                <Spinner /> : __("No Group found.", "kadence-blocks-pro")}
                        </Fragment>}

                        {!isFetchingGroups && g && <Fragment>

                            <h2 className="kt-heading-size-title">{__('Select Group', 'kadence-blocks')}</h2>
                            <Select
                                value={list_id}
                                onChange={({ value }) => setAttributes({ list_id: value })}
                                options={listGroups}
                            />
                        </Fragment>}
                        {/* ///////////////////////////////////// TAGS //////////////////////////////////////// */}
                        {!isFetchingTags && !v && <Fragment>
                            <h2 className="kt-heading-size-title">{__('Select Tags', '')}</h2>
                            {listTagsLoaded ? "" : this.getMailChimpTags()}
                            {!Array.isArray((listTags) ? <Spinner /> : __("No Tags Found.", ""))}
                        </Fragment>}

                        {!isFetchingGroups && g && <Fragment>

                            <h2 className="kt-heading-size-title">{__('Select Tags', '')}</h2>
                            <Select
                                value={list_id}
                                onChange={({ value }) => setAttributes({ list_id: value })}
                                options={listGroups}
                            />
                        </Fragment>}

                        <TextControl
                            label={__(`Message Success`)}
                            value={successMessage}
                            onChange={(newURL) =>
                                setAttributes({ successMessage: newURL })
                            }
                        />
                        <TextControl
                            label={__(`Message Error`)}
                            value={errorMessage}
                            onChange={(newURL) =>
                                setAttributes({ errorMessage: newURL })
                            }
                        />
                        <RangeControl
                            label={__("Column Gap")}
                            value={columnGap}
                            onChange={(newValue) =>
                                setAttributes({ columnGap: newValue })
                            }
                        />
                        <RangeControl
                            label={__("Row Gap")}
                            value={rowGap}
                            onChange={(newValue) =>
                                setAttributes({ rowGap: newValue })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Input Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__(`Label`)}
                            checked={inputStyles[0].showLabel}
                            onChange={(value) =>
                                saveInputStyle({ showLabel: value })
                            }
                        />
                        <TextControl
                            label={__(`Label`)}
                            value={inputStyles[0].label}
                            onChange={(newURL) => saveInputStyle({ url: newURL })}
                        />
                        <TextControl
                            label={__(`Placeholder`)}
                            value={inputStyles[0].placeholder}
                            onChange={(newURL) =>
                                saveInputStyle({ placeholder: newURL })
                            }
                        />
                        <ToggleControl
                            label={__(`Required`)}
                            checked={inputStyles[0].required}
                            onChange={(value) =>
                                saveInputStyle({ required: value })
                            }
                        />
                        <SelectControl
                            label={__(`Column Width`)}
                            options={COLUMNS}
                            value={inputStyles[0].inputColumnWidth}
                            onChange={(value) =>
                                saveInputStyle({ inputColumnWidth: value })
                            }
                        />
                        <p>{__("Text Color")}</p>
                        <ColorPalette
                            value={inputStyles[0].textColor}
                            onChange={(newValue) =>
                                saveInputStyle({ textColor: newValue })
                            }
                        />
                        <SelectControl
                            label={__("Font Family")}
                            value={inputStyles[0].textFontFamily}
                            options={FONTS}
                            onChange={(value) =>
                                saveInputStyle({ textFontFamily: value })
                            }
                        />
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "line",
                                "style",
                                "upper",
                                "spacing",
                            ]}
                            setAttributes={saveInputStyle}
                            fontSizeType={{
                                value: inputStyles[0].textSizeUnit,
                                label: __("textSizeUnit"),
                            }}
                            fontSize={{
                                value: inputStyles[0].textSize,
                                label: __("textSize"),
                            }}
                            fontSizeMobile={{
                                value: inputStyles[0].textSizeMobile,
                                label: __("textSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: inputStyles[0].textSizeTablet,
                                label: __("textSizeTablet"),
                            }}
                            weight={inputStyles[0].textWeight}
                            style={inputStyles[0].textStyle}
                            spacing={inputStyles[0].textLetter}
                            upper={inputStyles[0].textUpper}
                            line={inputStyles[0].textLine}
                            onChangeSize={(newSize) =>
                                saveInputStyle({ textSize: newSize })
                            }
                            onChangeSizeTablet={(newSize) =>
                                saveInputStyle({ textSizeTablet: newSize })
                            }
                            onChangeSizeMobile={(newSize) =>
                                saveInputStyle({ textSizeMobile: newSize })
                            }
                            onChangeWeight={(newWeight) =>
                                saveInputStyle({ textWeight: newWeight })
                            }
                            onChangeLine={(newValue) =>
                                saveInputStyle({ textLine: newValue })
                            }
                            onChangeSize={(newSize) =>
                                saveInputStyle({ textSize: newSize })
                            }
                            onChangeStyle={(newStyle) =>
                                saveInputStyle({ textStyle: newStyle })
                            }
                            onChangeSpacing={(newValue) =>
                                saveInputStyle({ textLetter: newValue })
                            }
                            onChangeUpper={(check) =>
                                saveInputStyle({ textUpper: check })
                            }
                        />
                        <p>{__(`Background Color`)}</p>
                        <ColorPalette
                            value={inputStyles[0].textBackColor}
                            onChange={(newValue) =>
                                saveInputStyle({ textBackColor: newValue })
                            }
                        />

                        <PremiumBorder
                            borderType={inputStyles[0].textBorderType}
                            top={inputStyles[0].textBorderTop}
                            right={inputStyles[0].textBorderRight}
                            bottom={inputStyles[0].textBorderBottom}
                            left={inputStyles[0].textBorderLeft}
                            borderColor={inputStyles[0].textBorderColor}
                            borderRadius={inputStyles[0].textBorderRadius}
                            onChangeType={(newType) =>
                                saveInputStyle({ textBorderType: newType })
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                saveInputStyle({
                                    textBorderTop: top,
                                    textBorderRight: right,
                                    textBorderBottom: bottom,
                                    textBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                saveInputStyle({ textBorderColor: colorValue.hex })
                            }
                            onChangeRadius={(newRadius) =>
                                saveInputStyle({ textBorderRadius: newRadius })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Button")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >

                        <SelectControl
                            label={__(`Column Width`)}
                            options={COLUMNS}
                            value={btnStyles[0].btnColumn}
                            onChange={(value) =>
                                saveButtonStyle({ btnColumn: value })
                            }
                        />
                        <SelectControl
                            label={__("Button Size")}
                            value={btnStyles[0].buttonSize}
                            onChange={(value) => saveButtonStyle({ buttonSize: value })}
                            options={[
                                { value: "small", label: __("Small") },
                                { value: "medium", label: __("Medium") },
                                { value: "large", label: __("Large") },
                                { value: "extralarge", label: __("Extra Large") },
                                { value: "full", label: __("Full") },
                            ]}
                        />

                        <p>{__("Text Color")}</p>
                        <ColorPalette
                            value={btnStyles[0].btnColor}
                            onChange={(newValue) =>
                                saveButtonStyle({ btnColor: newValue })
                            }
                        />
                        <p>{__(`Background Color`)}</p>
                        <ColorPalette
                            value={btnStyles[0].btnBackColor}
                            onChange={(newValue) =>
                                saveButtonStyle({ btnBackColor: newValue })
                            }
                        />
                        <SelectControl
                            label={__("Font Family")}
                            value={btnStyles[0].btnFontFamily}
                            options={FONTS}
                            onChange={(value) =>
                                saveButtonStyle({ btnFontFamily: value })
                            }
                        />
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "line",
                                "style",
                                "upper",
                                "spacing",
                            ]}
                            setAttributes={saveButtonStyle}
                            fontSizeType={{
                                value: btnStyles[0].btnSizeUnit,
                                label: __("textSizeUnit"),
                            }}
                            fontSize={{
                                value: btnStyles[0].btnSize,
                                label: __("textSize"),
                            }}
                            fontSizeMobile={{
                                value: btnStyles[0].btnSizeMobile,
                                label: __("textSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: btnStyles[0].btnSizeTablet,
                                label: __("textSizeTablet"),
                            }}
                            weight={btnStyles[0].btnWeight}
                            style={btnStyles[0].btnStyle}
                            spacing={btnStyles[0].btnLetter}
                            upper={btnStyles[0].btnUpper}
                            line={btnStyles[0].btnLine}
                            onChangeSize={(newSize) =>
                                saveButtonStyle({ btnSize: newSize })
                            }
                            onChangeSizeTablet={(newSize) =>
                                saveButtonStyle({ btnSizeTablet: newSize })
                            }
                            onChangeSizeMobile={(newSize) =>
                                saveButtonStyle({ btnSizeMobile: newSize })
                            }
                            onChangeWeight={(newWeight) =>
                                saveButtonStyle({ btnWeight: newWeight })
                            }
                            onChangeLine={(newValue) =>
                                saveButtonStyle({ btnLine: newValue })
                            }
                            onChangeSize={(newSize) =>
                                saveButtonStyle({ btnSize: newSize })
                            }
                            onChangeStyle={(newStyle) =>
                                saveButtonStyle({ btnStyle: newStyle })
                            }
                            onChangeSpacing={(newValue) =>
                                saveButtonStyle({ btnLetter: newValue })
                            }
                            onChangeUpper={(check) =>
                                saveButtonStyle({ btnUpper: check })
                            }
                        />
                        <PremiumBorder
                            borderType={btnStyles[0].btnBorderType}
                            top={btnStyles[0].btnBorderTop}
                            right={btnStyles[0].btnBorderRight}
                            bottom={btnStyles[0].btnBorderBottom}
                            left={btnStyles[0].btnBorderLeft}
                            borderColor={btnStyles[0].btnBorderColor}
                            borderRadius={btnStyles[0].btnBorderRadius}
                            onChangeType={(newType) =>
                                saveButtonStyle({ borderType: newType })
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                saveButtonStyle({
                                    btnBorderTop: top,
                                    btnBorderRight: right,
                                    btnBorderBottom: bottom,
                                    btnBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                saveButtonStyle({ btnBorderColor: colorValue.hex })
                            }
                            onChangeRadius={(newRadius) =>
                                saveButtonStyle({ btnBorderRadius: newRadius })
                            }
                        />
                        <RangeControl
                            label={__("Vertical Spacing")}
                            value={btnStyles[0].vPaddingSubmit}
                            onChange={(value) => saveButtonStyle({ vPaddingSubmit: value })}
                            min={0}
                            max={100}
                        />
                        <RangeControl
                            label={__("Horizontal Spacing")}
                            value={btnStyles[0].hPaddingSubmit}
                            onChange={(value) => saveButtonStyle({ hPaddingSubmit: value })}
                            min={0}
                            max={100}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Message Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Font Family")}
                            value={messageStyle[0].msgFontFamily}
                            options={FONTS}
                            onChange={(value) =>
                                saveMessageStyle({ msgFontFamily: value })
                            }
                        />
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "line",
                                "style",
                                "upper",
                                "spacing",
                            ]}
                            setAttributes={saveMessageStyle}
                            fontSizeType={{
                                value: messageStyle[0].msgSizeUnit,
                                label: __("textSizeUnit"),
                            }}
                            fontSize={{
                                value: messageStyle[0].msgSize,
                                label: __("textSize"),
                            }}
                            fontSizeMobile={{
                                value: messageStyle[0].msgSizeMobile,
                                label: __("textSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: messageStyle[0].msgSizeTablet,
                                label: __("textSizeTablet"),
                            }}
                            weight={messageStyle[0].msgWeight}
                            style={messageStyle[0].msgStyle}
                            spacing={messageStyle[0].msgLetter}
                            upper={messageStyle[0].msgUpper}
                            line={messageStyle[0].msgLine}
                            onChangeSize={(newSize) =>
                                saveMessageStyle({ msgSize: newSize })
                            }
                            onChangeSizeTablet={(newSize) =>
                                saveMessageStyle({ msgSizeTablet: newSize })
                            }
                            onChangeSizeMobile={(newSize) =>
                                saveMessageStyle({ msgSizeMobile: newSize })
                            }
                            onChangeWeight={(newWeight) =>
                                saveMessageStyle({ msgWeight: newWeight })
                            }
                            onChangeLine={(newValue) =>
                                saveMessageStyle({ msgLine: newValue })
                            }
                            onChangeSize={(newSize) =>
                                saveMessageStyle({ msgSize: newSize })
                            }
                            onChangeStyle={(newStyle) =>
                                saveMessageStyle({ msgStyle: newStyle })
                            }
                            onChangeSpacing={(newValue) =>
                                saveMessageStyle({ msgLetter: newValue })
                            }
                            onChangeUpper={(check) =>
                                saveMessageStyle({ msgUpper: check })
                            }
                        />
                        <p>{__("Message Success Color")}</p>
                        <ColorPalette
                            value={messageStyle[0].msgSuccessColor}
                            onChange={(newValue) =>
                                setAttributes({ msgSuccessColor: newValue })
                            }
                        />
                        <p>{__(`Message Error Color`)}</p>
                        <ColorPalette
                            value={messageStyle[0].msgErrorColor}
                            onChange={(newValue) =>
                                setAttributes({ msgErrorColor: newValue })
                            }
                        />
                    </PanelBody>
                </InspectorControls >
            ),

            <div
                id={`premium-newsLetter-${block_id}`}
                className={classnames(className,
                    "premium-newsletter__wrapper",
                    `premium-newsletter-has-${btnStyles[0].buttonSize}`
                )}
            >
                <div
                    className={classnames(
                        "premium-newsletter-input__wrapper",
                        `col-${inputStyles[0].inputColumnWidth}`
                    )}
                    style={{
                        paddingRight: `calc(${columnGap}px / 2)`,
                        paddingLeft: `calc(${columnGap}px / 2)`,
                        marginBottom: `${rowGap}px`,
                    }}
                >
                    {inputStyles[0].showLabel ? (
                        <label
                            for="form-field-email"
                            className="premium-newsletter__label"
                        >
                            {inputStyles[0].label}
                        </label>
                    ) : null}
                    <input
                        className={`premium-newsletter-input`}
                        type="email"
                        value={eMail}
                        name="form_fields[email]"
                        id="pa_news_email"
                        className=""
                        placeholder={inputStyles[0].placeholder}
                        aria-required="true"
                        autoComplete="off"
                        readOnly
                        style={{
                            color: inputStyles[0].textColor,
                            fontFamily: inputStyles[0].textFontFamily,
                            fontSize: inputStyles[0].textSize,
                            fontWeight: inputStyles[0].textWeight,
                            fontStyle: inputStyles[0].textStyle,
                            letterSpacing: inputStyles[0].textLetter,
                            textTransform: inputStyles[0].textUpper
                                ? "uppercase"
                                : "none",
                            lineHeight: inputStyles[0].textLine,
                            backgroundColor: inputStyles[0].textBackColor,
                            borderStyle: inputStyles[0].textBorderType,
                            borderColor: inputStyles[0].textBorderColor,
                            borderRadius: inputStyles[0].textBorderRadius,
                            fontSize: `${textSizeInput}px`
                        }}
                    />
                </div>
                <div
                    className={`premium-newsletter-button__wrapper col-${btnStyles[0].btnColumn}`}
                    style={{
                        paddingRight: `calc(${columnGap}px / 2)`,
                        paddingLeft: `calc(${columnGap}px / 2)`,
                        marginBottom: `${rowGap}px`,
                    }}
                >
                    <button
                        type="submit"
                        className="premium-newsletter-button-submit"
                        id="submit-newsletter"
                        style={{
                            paddingRight: `calc(${columnGap}px / 2)`,
                            paddingLeft: `calc(${columnGap}px / 2)`,
                            marginBottom: `${rowGap}px`,
                            color: btnStyles[0].btnColor,
                            backgroundColor: btnStyles[0].btnBackColor,
                            fontFamily: btnStyles[0].btnFontFamily,
                            fontWeight: btnStyles[0].btnWeight,
                            fontStyle: btnStyles[0].btnStyle,
                            letterSpacing: btnStyles[0].btnLetter,
                            textTransform: btnStyles[0].btnUpper
                                ? "uppercase"
                                : "none",
                            lineHeight: btnStyles[0].btnLine,
                            borderStyle: btnStyles[0].btnBorderType,
                            borderColor: btnStyles[0].btnBorderColor,
                            borderRadius: btnStyles[0].btnBorderRadius,
                            fontSize: `${textSizeBtn}px`
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        {__('Submit')}
                    </button>
                </div>
            </div>

        ];
    }
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)