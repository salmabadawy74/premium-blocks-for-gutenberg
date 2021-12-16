import classnames from "classnames";
import Select from 'react-select';
import debounce from 'lodash/debounce';
const { InspectorControls, ColorPalette } = wp.blockEditor;
const { PanelBody, SelectControl, RangeControl, ToggleControl, TextControl, Spinner, ServerSideRender } = wp.components;
const { __ } = wp.i18n;
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import { Fragment } from "react";
const { addQueryArgs } = wp.url;
const { apiFetch } = wp;
const { withSelect } = wp.data
const { Component } = wp.element;
const { getWidgetIdFromBlock } = wp.widgets;

export class edit extends Component {

    constructor() {
        super(...arguments);
        this.getMailChimpAudience = this.getMailChimpAudience.bind(this);
        this.getMailChimpGroups = this.getMailChimpGroups.bind(this);
        this.getMailChimpTags = this.getMailChimpTags.bind(this)
        this.saveAPI = this.saveAPI.bind(this)
        this.removeAPI = this.removeAPI.bind(this);
        this.getPreviewSize = this.getPreviewSize.bind(this);
        this.getID = this.getID.bind(this);
        this.debouncedGetID = debounce(this.getID.bind(this), 200);
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
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId })
        if (this.state.api === "") {
            let e;
            wp.api.loadPromise.then(() => {
                e = new wp.api.models.Settings;
                e.fetch()
                    .then(e => {
                        this.setState({ api: e.mail_chimp_api })
                        if ('' !== this.state.api) {
                            this.setState({ isSavedAPI: true });
                        }
                    })
            })

        }

        this.debouncedGetID();
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

    getID() {
        if (getWidgetIdFromBlock(this.props)) {
            if (!this.props.attributes.postID) {
                this.props.setAttributes({
                    postID: getWidgetIdFromBlock(this.props),
                });
            } else if (getWidgetIdFromBlock(this.props) !== this.props.attributes.postID) {
                this.props.setAttributes({
                    postID: getWidgetIdFromBlock(this.props),
                });
            }
        } else if (wp.data.select('core/editor')) {
            const { getCurrentPostId } = wp.data.select('core/editor');
            if (!this.props.attributes.postID && getCurrentPostId()) {
                this.props.setAttributes({
                    postID: getCurrentPostId().toString(),
                });
            } else if (getCurrentPostId() && getCurrentPostId().toString() !== this.props.attributes.postID) {
                this.props.setAttributes({
                    postID: getCurrentPostId().toString(),
                });
            }
        } else {
            if (!this.props.attributes.postID) {
                this.props.setAttributes({
                    postID: 'block-unknown',
                });
            }
        }
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
        if (!this.state.api) {
            this.setState({ list: [], listsLoaded: true });
            return;
        }
        this.setState({ isFetching: true });
        apiFetch({
            path: addQueryArgs("/pbg-mailchimp/v1/get",
                { apikey: this.state.api, endpoint: "lists/", queryargs: ["limit=30", "offset=0"] }
            ),
        })
            .then((response) => {
                const thelists = [];
                response.lists.map((item) => {
                    thelists.push({ value: item.id, label: item.name });
                });
                this.setState({ list: thelists, listsLoaded: true, isFetching: false })
            })
            .catch(() => {
                this.setState({ list: [], listsLoaded: true, isFetching: false });
            });

    }

    getMailChimpGroups() {
        if (!this.state.api) {
            this.setState({ listGroups: [], listGroupLoaded: true });
            return;
        }
        this.setState({ isFetchingGroups: true });
        apiFetch({
            path: addQueryArgs("/pbg-mailchimp/v1/get",
                {
                    apikey: this.state.api,
                    endpoint: "lists/" + this.props.attributes.mailchimp[0].list.value + "/interest-categories/"
                }
            ),
        })
            .then((response) => {
                const theGroups = [];
                response.map(group => {
                    theGroups.push({
                        value: group.id,
                        label: group.title
                    })
                    this.setState({ listGroups: theGroups, listGroupLoaded: true, isFetchingGroups: false })
                })
            })
            .catch(() => {
                this.setState({ listGroups: [], listGroupLoaded: true, isFetchingGroups: false })
            });


    }
    getMailChimpTags() {

        if (!this.state.api) {
            this.setState({ listTags: ["salma"], listTagsLoaded: true });
            return;
        }
        this.setState({ isFetchingTags: true });
        apiFetch({
            path: addQueryArgs("/pbg-mailchimp/v1/get",
                {
                    apikey: this.state.api,
                    endpoint: "lists/" + this.props.attributes.mailchimp[0].list.value + "/tag-search/"
                }
            ),
        })
            .then(({ tags }) => {
                const theTags = [];
                tags.map(tag => {
                    theTags.push({
                        value: tag.id,
                        label: tag.name
                    })
                    this.setState({ listTags: theTags, listTagsLoaded: true, isFetchingTags: false })
                })
            })
            .catch((response) => {
                this.setState({ listTags: [], listTagsLoaded: true, isFetchingTags: false })
            });


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
        const { attributes:
            { block_id,
                api,
                list_id,
                columnGap,
                rowGap,
                eMail,
                inputStyles,
                btnStyles,
                messageStyle,
                mailchimp },
            isSelected,
            setAttributes, className } =
            this.props;
        const { list, listsLoaded, isFetching, isSavedAPI, listAttr, isFetchingAttributes, listAttrLoaded, isFetchingGroups, listGroups, listGroupLoaded, isFetchingTags, listTags, listTagsLoaded } = this.state
        const m = Array.isArray(list) && list.length,
            g = Array.isArray(listGroups) && listGroups.length,
            v = Array.isArray(listTags) && listTags.length
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

        const saveMailChimp = (value) => {
            const newUpdate = mailchimp.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                mailchimp: newUpdate,
            });
        }

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
                            onChange={e => this.setState({ api: e })}
                        />
                        <button className={`button button-primary`} disabled={"" === this.state.api} onClick={this.saveAPI}>
                            {this.state.isSaving ? __("Saving", 'premium-block-for-gutenberg') : __("Save", 'premium-block-for-gutenberg')}
                        </button>
                        {isSavedAPI && api !== "" && <button onClick={this.removeAPI}>
                            {__("Remove")}
                        </button>}
                        {/* ///////////////////////////////////// Audience //////////////////////////////////////// */}
                        {isSavedAPI && <Fragment>
                            {!isFetching && !m && <Fragment>
                                <h2 className="kt-heading-size-title">{__('Select  Audience', '')}</h2>
                                {(!listsLoaded ? this.getMailChimpAudience() : '')}
                                {!Array.isArray(list) ?
                                    <Spinner /> :
                                    __("No Audience found.", 'premium-block-for-gutenberg')}
                            </Fragment>}
                            {!isFetching && m && <Fragment>

                                <h2 className="kt-heading-size-title">{__('Select Audience', '')}</h2>
                                <Select
                                    value={mailchimp[0].list ? mailchimp[0].list : ""}
                                    onChange={(value) => {
                                        saveMailChimp({ list: value || [] })
                                    }}

                                    options={list}
                                />
                            </Fragment>
                            }

                            {/* /////////////////////////////////////Group//////////////////////////////////////// */}

                            {mailchimp[0].list.value && <Fragment>
                                {isFetchingGroups && (
                                    <Spinner />
                                )}
                                {!isFetchingGroups && !g && (
                                    <Fragment>
                                        <h2 className="kt-heading-size-title">{__('Select Group', 'premium-block-for-gutenberg')}</h2>
                                        { (!listGroupLoaded ? this.getMailChimpGroups() : '')}
                                        { !Array.isArray(listGroups) ?
                                            <Spinner /> :
                                            __('No group found.', '')}
                                    </Fragment>

                                )}
                                {!isFetchingGroups && g && <Fragment>

                                    <h2 className="kt-heading-size-title">{__('Select Group', 'premium-block-for-gutenberg')}</h2>
                                    <Select
                                        value={(undefined !== mailchimp && undefined !== mailchimp[0] && undefined !== mailchimp[0].groups ? mailchimp[0].groups : '')}
                                        onChange={(value) => {
                                            saveMailChimp({ groups: (value ? value : []) });
                                        }}
                                        options={listGroups}
                                        isClearable={true}

                                        isMulti={true}
                                        maxMenuHeight={200}
                                    />
                                </Fragment>}
                                {/* ******************** Tags ********************** */}
                                {isFetchingTags && (
                                    <Spinner />
                                )}
                                {!isFetchingTags && !v && (
                                    <Fragment>
                                        <h2 className="kt-heading-size-title">{__('Select Tags', 'premium-block-for-gutenberg')}</h2>
                                        { (!listTagsLoaded ? this.getMailChimpTags() : '')}
                                        { !Array.isArray(listTags) ?
                                            <Spinner /> :
                                            __('No Tags found.', '')}
                                    </Fragment>

                                )}
                                {!isFetchingTags && v && <Fragment>

                                    <h2 className="kt-heading-size-title">{__('Select Tags', 'premium-block-for-gutenberg')}</h2>
                                    <Select
                                        value={(undefined !== mailchimp && undefined !== mailchimp[0] && undefined !== mailchimp[0].tags ? mailchimp[0].tags : '')}
                                        onChange={(value) => {
                                            saveMailChimp({ tags: (value ? value : []) });
                                        }}
                                        options={listTags}
                                        isClearable={true}
                                        isMulti={true}
                                        maxMenuHeight={200}
                                    />
                                </Fragment>
                                }
                            </Fragment>
                            }



                            {/* ///////////////////////////////////// TAGS //////////////////////////////////////// */}

                        </Fragment>}

                        <ToggleControl
                            label={__('Double in Option')}
                            checked={mailchimp[0]['doubleOption']}
                            onChange={(value) => saveMailChimp({ doubleOption: value })}
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
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "line",
                                "style",
                                "upper",
                                "spacing",
                                "family"
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
                            fontFamily={inputStyles[0].textFontFamily}
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
                            onChangeFamily={(value) =>
                                saveInputStyle({ textFontFamily: value })}
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
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "line",
                                "style",
                                "upper",
                                "spacing",
                                "family"
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
                            fontFamily={btnStyles[0].btnFontFamily}
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
                            onChangeFamily={(value) =>
                                saveButtonStyle({ btnFontFamily: value })}
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
                            <span className="required">*</span>
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
                        {__('Submit', 'premium-block-for-gutenberg')}
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