import classnames from "classnames";
import Select from 'react-select';
const { InspectorControls, ColorPalette } = wp.blockEditor;
const { PanelBody, SelectControl, RangeControl, ToggleControl, TextControl } =
    wp.components;
const { __ } = wp.i18n;
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import FONTS from "../../components/premium-fonts";
const { addQueryArgs } = wp.url;
const { apiFetch } = wp;

const { Component } = wp.element;


export default class edit extends Component {

    constructor() {
        super(...arguments);
        this.getMailChimpAudience = this.getMailChimpAudience.bind(this);
        this.getMailChimpGroups = this.getMailChimpGroups.bind(this);
        this.getMailChimpAttributes = this.getMailChimpAttributes.bind(this);
        this.getMailChimpTags = this.getMailChimpTags.bind(this)
        this.saveAPI = this.saveAPI.bind(this)
        this.removeAPI = this.removeAPI.bind(this);
        this.state = {
            api: "",
            isSavedAPI: !1,
            isSaving: !1,
            list: !1,
            isFetching: !1,
            listsLoaded: !1,
            isFetchingAttributes: !1,
            listAttr: !1,
            listAttrLoaded: !1,
            isFetchingGroups: !1,
            listGroups: !1,
            listGroupLoaded: !1,
            isFetchingTags: !1,
            listTags: !1,
            listTagsLoaded: !1
        }
    }

    componentDidMount() {
        let e;
        wp.api.loadPromise.then(() => {
            e = new wp.api.models.Settings, e.fetch().then(e => { this.setState({ api: e.mail_chimp_api }), "" !== this.state.api && this.setState({ isSavedAPI: !0 }) })
        })

    }
    removeAPI() {
        this.setState({ api: "" });
        this.state.isSavedAPI && (this.setState({ isSaving: !0 }), new wp.api.models.Settings({ mail_chimp_api: "" }).save()
            .then(() => { this.setState({ isSavedAPI: !1, isSaving: !1 }) }))
    }
    saveAPI() {
        this.setState({ isSaving: !0 });
        new wp.api.models.Settings({ mail_chimp_api: this.state.api }).save()
            .then(e => { this.setState({ isSaving: !1, isSavedAPI: !0 }) })
    }
    getMailChimpAudience() {

        apiFetch({ path: addQueryArgs("/pbg-mailchimp/v1/get", { apikey: this.state.api, endpoint: "lists/", queryargs: ["limit=30", "offset=0"] }) })
            .then(e => {
                const t = []; e.lists.map(e => { t.push({ value: e.id, label: e.name }) }),
                    this.setState({ list: t, listsLoaded: !0, isFetching: !1 })
            })
            .catch(() => { this.setState({ list: [], listsLoaded: !0, isFetching: !1 }) })



    }

    getMailChimpGroups() {
        console.log(this.props.attributes.list_id)

        apiFetch({ path: addQueryArgs("/pbg-mailchimp/v1/get", { apikey: this.state.api, endpoint: "lists/" + this.props.attributes.list_id + "/interest-categories/" }) })
            .then(e => {
                const t = [];
                e.map(e => { t.push({ value: e.id, label: e.title }) });
                this.setState({ listGroups: t, listGroupLoaded: !0, isFetchingGroups: !1 })
            }).catch(() => { this.setState({ listGroups: [], listGroupLoaded: !0, isFetchingGroups: !1 }) })
    }
    getMailChimpTags() {
        this.state.api && this.props.settings[0].list.value ? (this.setState({ isFetchingTags: !0 }), apiFetch({
            path: addQueryArgs("/pbg-mailchimp/v1/get",
                { apikey: this.state.api, endpoint: "lists/" + this.props.settings[0].list.value + "/tag-search/" })
        }).then(e => {
            const t = []; e.tags && e.tags.map(e => { t.push({ value: e.id, label: e.name }) });
            this.setState({ listTags: t, listTagsLoaded: !0, isFetchingTags: !1 })
        }).catch(() => { this.setState({ listTags: [], listTagsLoaded: !0, isFetchingTags: !1 }) })) : this.setState({ listTags: [], listTagsLoaded: !0 })
    }
    getMailChimpAttributes() {
        if (!this.state.api || !this.props.settings[0].list.value) {
            const e = [];
            return e.push({ value: null, label: "None" }), e.push({ value: "email", label: "Email *" }), void this.setState({ listAttr: e, listAttrLoaded: !0 })
        }
        this.setState({ isFetchingAttributes: !0 });
        apiFetch({ path: addQueryArgs("/kb-mailchimp/v1/get", { apikey: this.state.api, endpoint: "lists/" + this.props.settings[0].list.value + "/merge-fields/" }) })
            .then(e => {
                const t = [];
                t.push({ value: null, label: "None" }), t.push({ value: "email", label: "Email *" });
                e.merge_fields.map((e, n) => { t.push({ value: e.tag, label: e.name }) });
                this.setState({ listAttr: t, listAttrLoaded: !0, isFetchingAttributes: !1 })
            }).catch(() => { const e = []; e.push({ value: null, label: "None" }), e.push({ value: "email", label: "Email *" }); this.setState({ listAttr: e, listAttrLoaded: !0, isFetchingAttributes: !1 }) })
    }

    render() {
        const { isSelected, setAttributes, clientId, className, attributes } =
            this.props;
        const { list: e, listsLoaded: t, isFetching: n, isSavedAPI: i, listAttr: o, isFetchingAttributes: l, listAttrLoaded: r, isFetchingGroups: s, listGroups: c, listGroupLoaded: d, isFetchingTags: h, listTags: u, listTagsLoaded: p } = this.state
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
        console.log(this.state)

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
                            onChange={(newURL) => this.setState({ api: newURL })}
                        />
                        <button onClick={this.saveAPI}>
                            save
                        </button>
                        {this.state.isSavedAPI && this.state.api !== "" && <button onClick={this.removeAPI}>
                            remove
                        </button>}
                        {t ? "" : this.getMailChimpAudience()}

                        {Array.isArray(this.state.list) ? <Select
                            value={list_id}
                            onChange={({ value }) => setAttributes({ list_id: value })}
                            options={this.state.list}
                        /> : <div>hello</div>}
                        {d ? "" : this.getMailChimpGroups()}
                        {Array.isArray(this.state.listGroups) ? <Select
                            value={list_id}
                            onChange={({ value }) => console.log(value)}
                            options={this.state.listGroups}
                        /> : <div>hello</div>}
                        {r ? "" : this.getMailChimpAttributes()}
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
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <span className="">Submit</span>
                    </button>
                </div>
            </div>

        ];
    }
}
