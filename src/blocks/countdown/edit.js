import classnames from "classnames";
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumTypo from '../../components/premium-typo';
import PremiumBorder from '../../components/premium-border';
import PremiumBoxShadow from '../../components/premium-box-shadow'
import styling from './styling';


const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { PanelBody, Button, DateTimePicker, ToggleControl, SelectControl, TextControl, RangeControl, TabPanel,
    Dashicon } = wp.components

const { InspectorControls, ColorPalette } = wp.editor;

class edit extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            countMonths: "00",
            countWeeks: "00",
            countDays: "00",
            countHours: "00",
            countMinutes: "00",
            countSeconds: "00",
            vaild: true,
            showMessage: false
        }
        this.countDown = this.countDown.bind(this)
        this.counter = this.counter.bind(this)

    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        setAttributes({ classMigrate: true });
        setAttributes({ block_id: clientId })
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-countdown-" + clientId.substr(0, 6)
        );
        document.head.appendChild($style);
        this.countDown = this.countDown.bind(this)

    }

    componentDidUpdate() {
        let element = document.getElementById(
            "premium-style-countdown-" + this.props.clientId.substr(0, 6)
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }

    }

    componentWillUnmount() {
        clearInterval(this.countDown)
    }
    countDown(date) {
        this.props.setAttributes({ dateTime: date })
        console.log(date)
        const { block_id } = this.props.attributes;

        if (block_id) {
            setInterval(this.counter, 1000)
        }

    }
    counter() {
        const { timeZone, expireType, dateTime, showMonths, showWeeks, showDays, showHours, showMinutes, showSeconds } = this.props.attributes;
        let startDateTime = moment();
        let endDateTime = moment.utc(dateTime)
        if ("user-time" === timeZone) {
            endDateTime = moment(dateTime).utc().local()
        }
        let timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);
        if (timeLeft < 0) {
            this.setState({ vaild: false })
            if (expireType === "message") {
                this.setState({ showMessage: true })
            }
            else {
                this.setState({ countMonths: "00", countWeeks: "00", countDays: "00", countHours: "00", countMinutes: "00", countSeconds: "00" })
            }
        }
        else if (timeLeft > 0) {
            this.setState({ vaild: true })
            this.setState({ showMessage: false })
            if (showMonths) {
                let months = Math.floor(moment.duration(timeLeft).asMonths());

                endDateTime = endDateTime.subtract(months, 'months');
                timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);
                this.setState({ countMonths: months })
            }
            if (showDays) {
                var days = Math.floor(moment.duration(timeLeft).asDays());
                endDateTime = endDateTime.subtract(days, 'days');
                timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);
                this.setState({ countDays: days })
            }
            if (showWeeks) {
                var weeks = Math.floor(days / 7);
                days = days % 7
                this.setState({ countWeeks: weeks })
                this.setState({ countDays: days })
            }
            if (showHours) {
                let hours = Math.floor(moment.duration(timeLeft).asHours());
                endDateTime = endDateTime.subtract(hours, 'hours');
                timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);
                this.setState({ countHours: hours })
            }
            if (showMinutes) {
                let minutes = Math.floor(moment.duration(timeLeft).asMinutes());
                endDateTime = endDateTime.subtract(minutes, 'minutes');
                timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);
                this.setState({ countMinutes: minutes })
            }
            if (showSeconds) {
                let seconds = Math.floor(moment.duration(timeLeft).asSeconds());
                this.setState({ countSeconds: seconds })
            }
        }
    }

    render() {
        const { isSelected, setAttributes, className, clientId: blockId, attributes } = this.props;
        const {
            block_id,
            showMonths,
            showWeeks,
            showDays,
            showHours,
            showMinutes,
            showSeconds,
            dateTime,
            timeZone,
            expireType,
            expireTxt,
            expiredUrl,
            monthLabel,
            weekLabel,
            dayLabel,
            hourLabel,
            minuteLabel,
            secondLabel,
            contentStyle,
            align,
            digitColor,
            digitBgColor,
            digitSizeUnit,
            digitSize,
            digitSizeMobile,
            digitSizeTablet,
            digitWeight,
            digitStyle,
            digitLetter,
            digitUpper,
            digitLine,
            digitShadowColor,
            digitShadowBlur,
            digitShadowHorizontal,
            digitShadowVertical,
            digitShadowPosition,
            borderType,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            digitBorderColor,
            borderRadius,
            backgroundSize,
            backgroundSizeMobile,
            backgroundSizeTablet,
            unitColor,
            unitBgColor,
            unitSizeUnit,
            unitSize,
            unitSizeMobile,
            unitSizeTablet,
            unitWeight,
            unitStyle,
            unitLetter,
            unitUpper,
            unitLine,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
            marginTopTablet,
            marginRightTablet,
            marginBottomTablet,
            marginLeftTablet,
            marginTopMobile,
            marginRightMobile,
            marginBottomMobile,
            marginLeftMobile,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            paddingTopTablet,
            paddingRightTablet,
            paddingBottomTablet,
            paddingLeftTablet,
            paddingTopMobile,
            paddingRightMobile,
            paddingBottomMobile,
            paddingLeftMobile,
            unitsSpace,
            marginType,
            paddingType,
            separatorTxt,
            enableSeparator,
            expireColor,
            expireBG,
            textSizeUnit,
            textSize,
            textSizeTablet,
            textSizeMobile,
            textWeight,
            textStyle,
            textLetter,
            textUpper,
            textLine,
            textBorderType,
            textBorderTop,
            textBorderRight,
            textBorderBottom,
            textBorderLeft,
            textBorderColor,
            textBorderRadius,
            textShadowColor,
            textShadowBlur,
            textShadowHorizontal,
            textShadowVertical,
            textShadowPosition,
            textMarginType,
            textMarginTop,
            textMarginRight,
            textMarginBottom,
            textMarginLeft,
            textMarginTopTablet,
            textMarginRightTablet,
            textMarginBottomTablet,
            textMarginLeftTablet,
            textMarginTopMobile,
            textMarginRightMobile,
            textMarginBottomMobile,
            textMarginLeftMobile,
            textPaddingTop,
            textPaddingRight,
            textPaddingBottom,
            textPaddingLeft,
            textPaddingTopTablet,
            textPaddingRightTablet,
            textPaddingBottomTablet,
            textPaddingLeftTablet,
            textPaddingTopMobile,
            textPaddingRightMobile,
            textPaddingBottomMobile,
            textPaddingLeftMobile,
            textPaddingType,
        } = attributes;

        const mainClasses = classnames(className, "premium-countdown");

        return [
            isSelected && (<InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("Due Date")}
                    className="premium-panel-body"
                    initialOpen={true}
                >
                    <SelectControl
                        label={__("Content Display Style")}
                        value={contentStyle}
                        options={[{
                            label: __("Block"),
                            value: 'down'
                        }, {
                            label: __("Inline"),
                            value: "side"
                        }]}
                        onChange={newValue => setAttributes({ contentStyle: newValue || "block" })}
                    />
                    <DateTimePicker
                        currentDate={dateTime}
                        onChange={(value) => this.countDown(value)}
                        is12Hour={true}
                    />
                    <SelectControl
                        label={__("Time Zone")}
                        value={timeZone}
                        options={[{
                            label: __("Wordpress Default"),
                            value: "wp-time"
                        },
                        {
                            label: __("User Local Time"),
                            value: 'user-time'
                        }]}
                        onChange={(value) => setAttributes({ timeZone: value })}
                        description={__('This will set the current time of the option that you will choose.')}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Expire")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <SelectControl
                        label={__('Expire Type')}
                        value={expireType}
                        options={[
                            {
                                label: __('Default'),
                                value: 'default'
                            },
                            {
                                label: __('Message'),
                                value: 'message'
                            },
                            {
                                label: __('Redirection Link'),
                                value: 'link'
                            }]}
                        onChange={val => setAttributes({ expireType: val })}
                        description={__(`Choose whether if you want to set a message or a redirect link or leave it as digits  the Value of Redirection Link will be view in frontend`)}
                    />
                    {'default' === expireType && <p>Default option will show the expiration message as Digits [00:00:00]. .</p>}

                    {'message' === expireType && <TextControl
                        label={__(`On expiry Text`)}
                        value={expireTxt}
                        onChange={(newVal) => setAttributes({ expireTxt: newVal })}
                    />}
                    {'link' === expireType &&
                        <TextControl
                            label={__(`Redirect To`)}
                            value={expiredUrl}
                            onChange={newVal => setAttributes({ expiredUrl: newVal })}
                        />}
                </PanelBody>
                <PanelBody
                    title={__("Time Units")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ToggleControl
                        label={__("Show Months")}
                        checked={showMonths}
                        onChange={newCheck => setAttributes({ showMonths: newCheck })}
                    />
                    <ToggleControl
                        label={__("Show Weeks")}
                        checked={showWeeks}
                        onChange={newCheck => setAttributes({ showWeeks: newCheck })}
                    />
                    <ToggleControl
                        label={__("Show Days")}
                        checked={showDays}
                        onChange={newCheck => setAttributes({ showDays: newCheck })}
                    />
                    <ToggleControl
                        label={__("Show Hours")}
                        checked={showHours}
                        onChange={newCheck => setAttributes({ showHours: newCheck })}
                    />
                    <ToggleControl
                        label={__("Show Minutes")}
                        checked={showMinutes}
                        onChange={newCheck => setAttributes({ showMinutes: newCheck })}
                    />
                    <ToggleControl
                        label={__("Show Seconds")}
                        checked={showSeconds}
                        onChange={newCheck => setAttributes({ showSeconds: newCheck })}
                    />

                    {contentStyle === "down" && <Fragment>
                        <ToggleControl
                            label={__('Digits Separator')}
                            checked={enableSeparator}
                            onChange={(val) => setAttributes({ enableSeparator: val })}
                        />
                        {enableSeparator && <TextControl
                            label={__('Separator Text')}
                            value={separatorTxt}
                            onChange={(newVal) => setAttributes({ separatorTxt: newVal })}
                        />}


                    </Fragment>}
                    <h2> {__("Alignment")}</h2>
                    <Button
                        key={"left"}
                        icon="editor-alignleft"
                        label="Left"
                        onClick={() => setAttributes({ align: "left" })}
                        aria-pressed={"left" === align}
                        isPrimary={"left" === align}
                    />
                    <Button
                        key={"center"}
                        icon="editor-aligncenter"
                        label="Right"
                        onClick={() =>
                            setAttributes({ align: "center" })
                        }
                        aria-pressed={"center" === align}
                        isPrimary={"center" === align}
                    />
                    <Button
                        key={"right"}
                        icon="editor-alignright"
                        label="Right"
                        onClick={() => setAttributes({ align: "right" })}
                        aria-pressed={"right" === align}
                        isPrimary={"right" === align}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Units Labels")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    {showMonths && (
                        <TextControl
                            label={__("Months")}
                            value={monthLabel}
                            onChange={newValue => setAttributes({ monthLabel: newValue })}
                        />
                    )}
                    {showWeeks && (
                        <TextControl
                            label={__("Weeks")}
                            value={weekLabel}
                            onChange={newValue => setAttributes({ weekLabel: newValue })}
                        />
                    )}
                    {showDays && (
                        <TextControl
                            label={__("Days")}
                            value={dayLabel}
                            onChange={newValue => setAttributes({ dayLabel: newValue })}
                        />
                    )}
                    {showHours && (
                        <TextControl
                            label={__("Hours")}
                            value={hourLabel}
                            onChange={newValue => setAttributes({ hourLabel: newValue })}
                        />
                    )}
                    {showMinutes && (
                        <TextControl
                            label={__("Minutes")}
                            value={minuteLabel}
                            onChange={newValue => setAttributes({ minuteLabel: newValue })}
                        />
                    )}
                    {showSeconds && (
                        <TextControl
                            label={__("Seconds")}
                            value={secondLabel}
                            onChange={newValue => setAttributes({ secondLabel: newValue })}
                        />
                    )}
                </PanelBody>
                <PanelBody
                    title={__("Digits Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <Fragment>
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={digitColor}
                            onChange={(newValue) => setAttributes({ digitColor: newValue })}
                        />
                    </Fragment>
                    <PremiumTypo
                        components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                        setAttributes={setAttributes}
                        fontSizeType={{
                            value: digitSizeUnit,
                            label: __("digitSizeUnit"),
                        }}
                        fontSize={{
                            value: digitSize,
                            label: __("digitSize"),
                        }}
                        fontSizeMobile={{
                            value: digitSizeMobile,
                            label: __("digitSizeMobile"),
                        }}
                        fontSizeTablet={{
                            value: digitSizeTablet,
                            label: __("digitSizeTablet"),
                        }}
                        weight={digitWeight}
                        style={digitStyle}
                        spacing={digitLetter}
                        upper={digitUpper}
                        line={digitLine}
                        onChangeSize={newSize => setAttributes({ digitSize: newSize })}
                        onChangeSizeTablet={newSize => setAttributes({ digitSizeTablet: newSize })}
                        onChangeSizeMobile={newSize => setAttributes({ digitSizeMobile: newSize })}
                        onChangeWeight={newWeight =>
                            setAttributes({ digitWeight: newWeight })
                        }
                        onChangeLine={newValue => setAttributes({ digitLine: newValue })}
                        onChangeSize={newSize => setAttributes({ digitSize: newSize })}
                        onChangeStyle={newStyle => setAttributes({ digitStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ digitLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ digitUpper: check })}
                    />
                    <Fragment>
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={digitBgColor}
                            onChange={(newValue) => setAttributes({ digitBgColor: newValue })}
                        />
                    </Fragment>
                    <PremiumBoxShadow
                        label="Shadow"
                        inner={true}
                        color={digitShadowColor}
                        blur={digitShadowBlur}
                        horizontal={digitShadowHorizontal}
                        vertical={digitShadowVertical}
                        position={digitShadowPosition}
                        onChangeColor={newColor =>
                            setAttributes({
                                digitShadowColor:
                                    newColor === undefined ? "transparent" : newColor.hex
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({
                                digitShadowBlur: newBlur === undefined ? 0 : newBlur
                            })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({
                                digitShadowHorizontal: newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({
                                digitShadowVertical: newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangePosition={newValue =>
                            setAttributes({
                                digitShadowPosition: newValue === undefined ? 0 : newValue
                            })
                        }
                    />
                    < TabPanel className="premium-size-type-field-tabs" activeClass="active-tab"
                        tabs={[
                            {
                                name: "desktop",
                                title: <Dashicon icon="desktop" />,
                                className: "premium-desktop-tab premium-responsive-tabs",
                            },
                            {
                                name: "tablet",
                                title: <Dashicon icon="tablet" />,
                                className: "premium-tablet-tab premium-responsive-tabs",
                            },
                            {
                                name: "mobile",
                                title: <Dashicon icon="smartphone" />,
                                className: "premium-mobile-tab premium-responsive-tabs",
                            },
                        ]}>
                        {
                            (tab) => {
                                let tabout;
                                if ("mobile" === tab.name) {
                                    tabout = (
                                        <RangeControl
                                            label={__("Background Size")}
                                            value={backgroundSizeMobile}
                                            min={1}
                                            max={400}
                                            step={1}
                                            onChange={newValue => setAttributes({ backgroundSizeMobile: newValue })}
                                        />
                                    )
                                } else if ("tablet" === tab.name) {
                                    tabout = (
                                        <RangeControl
                                            label={__("Background Size")}
                                            value={backgroundSizeTablet}
                                            min={1}
                                            max={400}
                                            step={1}
                                            onChange={newValue => setAttributes({ backgroundSizeTablet: newValue })} />)
                                } else {
                                    tabout = (
                                        <RangeControl
                                            label={__("Background Size")}
                                            value={backgroundSize}
                                            min={1}
                                            max={400}
                                            step={1}
                                            onChange={newValue => setAttributes({ backgroundSize: newValue })}
                                        />)
                                }
                                return <div>{tabout}</div>;
                            }
                        }
                    </TabPanel>

                    <PremiumBorder
                        borderType={borderType}
                        top={borderTop}
                        right={borderRight}
                        bottom={borderBottom}
                        left={borderLeft}
                        borderColor={digitBorderColor}
                        borderRadius={borderRadius}
                        onChangeType={(newType) => setAttributes({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                borderTop: top,
                                borderRight: right,
                                borderBottom: bottom,
                                borderLeft: left,
                            })
                        }
                        onChangeRadius={(newrRadius) =>
                            setAttributes({ borderRadius: newrRadius })
                        }
                        onChangeColor={(colorValue) =>
                            setAttributes({ digitBorderColor: colorValue.hex })
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Units Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <Fragment>
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={unitColor}
                            onChange={(newValue) => setAttributes({ unitColor: newValue })}
                        />
                    </Fragment>
                    <PremiumTypo
                        components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                        setAttributes={setAttributes}
                        fontSizeType={{
                            value: unitSizeUnit,
                            label: __("unitSizeUnit"),
                        }}
                        fontSize={{
                            value: unitSize,
                            label: __("unitSize"),
                        }}
                        fontSizeMobile={{
                            value: unitSizeMobile,
                            label: __("unitSizeMobile"),
                        }}
                        fontSizeTablet={{
                            value: unitSizeTablet,
                            label: __("unitSizeTablet"),
                        }}
                        weight={unitWeight}
                        style={unitStyle}
                        spacing={unitLetter}
                        upper={unitUpper}
                        line={unitLine}
                        onChangeSize={newSize => setAttributes({ unitSize: newSize })}
                        onChangeSizeTablet={newSize => setAttributes({ unitSizeTablet: newSize })}
                        onChangeSizeMobile={newSize => setAttributes({ unitSizeMobile: newSize })}
                        onChangeWeight={newWeight =>
                            setAttributes({ unitWeight: newWeight })
                        }
                        onChangeLine={newValue => setAttributes({ unitLine: newValue })}
                        onChangeSize={newSize => setAttributes({ unitSize: newSize })}
                        onChangeStyle={newStyle => setAttributes({ unitStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ unitLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ unitUpper: check })}
                    />
                    <Fragment>
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={unitBgColor}
                            onChange={(newValue) => setAttributes({ unitBgColor: newValue })}
                        />
                    </Fragment>
                    <RangeControl
                        label={__("Spacing in Between")}
                        value={unitsSpace}
                        min={1}
                        max={100}
                        step={1}
                        initialPosition={20}
                        onChange={(newValue) => setAttributes({ unitsSpace: newValue })}
                    />
                </PanelBody>
                {"message" === expireType && <PanelBody
                    title={__("Expiration Message")}
                    className="premium-panel-body"
                    initialOpen={false}>
                    <Fragment>
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={expireColor}
                            onChange={(newValue) => setAttributes({ expireColor: newValue })}
                        />
                    </Fragment>
                    <Fragment>
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={expireBG}
                            onChange={(newValue) => setAttributes({ expireBG: newValue })}
                        />
                    </Fragment>
                    <PremiumTypo
                        components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                        setAttributes={setAttributes}
                        fontSizeType={{
                            value: textSizeUnit,
                            label: __("textSizeUnit"),
                        }}
                        fontSize={{
                            value: textSize,
                            label: __("textSize"),
                        }}
                        fontSizeMobile={{
                            value: textSizeMobile,
                            label: __("textSizeMobile"),
                        }}
                        fontSizeTablet={{
                            value: textSizeTablet,
                            label: __("textSizeTablet"),
                        }}
                        weight={textWeight}
                        style={textStyle}
                        spacing={textLetter}
                        upper={textUpper}
                        line={textLine}
                        onChangeSize={newSize => setAttributes({ textSize: newSize })}
                        onChangeSizeTablet={newSize => setAttributes({ textSizeTablet: newSize })}
                        onChangeSizeMobile={newSize => setAttributes({ textSizeMobile: newSize })}
                        onChangeWeight={newWeight =>
                            setAttributes({ textWeight: newWeight })
                        }
                        onChangeLine={newValue => setAttributes({ textLine: newValue })}
                        onChangeSize={newSize => setAttributes({ textSize: newSize })}
                        onChangeStyle={newStyle => setAttributes({ textStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ textLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ textUpper: check })}
                    />
                    <PremiumBorder
                        borderType={textBorderType}
                        top={textBorderTop}
                        right={textBorderRight}
                        bottom={textBorderBottom}
                        left={textBorderLeft}
                        borderColor={textBorderColor}
                        borderRadius={textBorderRadius}
                        onChangeType={(newType) => setAttributes({ textBorderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                textBorderTop: top,
                                textBorderRight: right,
                                textBorderBottom: bottom,
                                textBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            setAttributes({ textBorderColor: colorValue.hex })
                        }
                        onChangeRadius={(newrRadius) =>
                            setAttributes({ textBorderRadius: newrRadius })
                        }
                    />
                    <PremiumBoxShadow
                        label="Shadow"
                        inner={true}
                        color={textShadowColor}
                        blur={textShadowBlur}
                        horizontal={textShadowHorizontal}
                        vertical={textShadowVertical}
                        position={textShadowPosition}
                        onChangeColor={newColor =>
                            setAttributes({
                                textShadowColor:
                                    newColor === undefined ? "transparent" : newColor.hex
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({
                                textShadowBlur: newBlur === undefined ? 0 : newBlur
                            })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({
                                textShadowHorizontal: newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({
                                textShadowVertical: newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangePosition={newValue =>
                            setAttributes({
                                textShadowPosition: newValue === undefined ? 0 : newValue
                            })
                        }
                    />
                    <PremiumResponsiveMargin
                        directions={["all"]}
                        showUnits={true}
                        selectedUnit={textMarginType}
                        marginTop={textMarginTop}
                        marginRight={textMarginRight}
                        marginBottom={textMarginBottom}
                        marginLeft={textMarginLeft}
                        marginTopTablet={textMarginTopTablet}
                        marginRightTablet={textMarginRightTablet}
                        marginBottomTablet={textMarginBottomTablet}
                        marginLeftTablet={textMarginLeftTablet}
                        marginTopMobile={textMarginTopMobile}
                        marginRightMobile={textMarginRightMobile}
                        marginBottomMobile={textMarginBottomMobile}
                        marginLeftMobile={textMarginLeftMobile}
                        onChangeMarginTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ textMarginTop: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ textMarginTopTablet: newValue })
                                } else {
                                    setAttributes({ textMarginTopMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ textMarginRight: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ textMarginRightTablet: newValue })
                                } else {
                                    setAttributes({ textMarginRightMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ textMarginBottom: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ textMarginBottomTablet: newValue })
                                } else {
                                    setAttributes({ textMarginBottomMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ textMarginLeft: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ textMarginLeftTablet: newValue })
                                } else {
                                    setAttributes({ textMarginLeftMobile: newValue })
                                }
                            }
                        }
                        onChangeMarSizeUnit={(newvalue) => setAttributes({ textMarginType: newvalue })}
                    />
                    <PremiumResponsivePadding
                        paddingTop={textPaddingTop}
                        paddingRight={textPaddingRight}
                        paddingBottom={textPaddingBottom}
                        paddingLeft={textPaddingLeft}
                        paddingTopTablet={textPaddingTopTablet}
                        paddingRightTablet={textPaddingRightTablet}
                        paddingBottomTablet={textPaddingBottomTablet}
                        paddingLeftTablet={textPaddingLeftTablet}
                        paddingTopMobile={textPaddingTopMobile}
                        paddingRightMobile={textPaddingRightMobile}
                        paddingBottomMobile={textPaddingBottomMobile}
                        paddingLeftMobile={textPaddingLeftMobile}
                        showUnits={true}
                        selectedUnit={textPaddingType}
                        onChangePadSizeUnit={newvalue =>
                            setAttributes({ textPaddingType: newvalue })
                        }
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ textPaddingTop: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ textPaddingTopTablet: newValue })
                                } else {
                                    setAttributes({ textPaddingTopMobile: newValue })
                                }

                            }

                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ textPaddingRight: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ textPaddingRightTablet: newValue })
                                } else {
                                    setAttributes({ textPaddingRightMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ textPaddingBottom: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ textPaddingBottomTablet: newValue })
                                } else {
                                    setAttributes({ textPaddingBottomMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ textPaddingLeft: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ textPaddingLeftTablet: newValue })
                                } else {
                                    setAttributes({ textPaddingLeftMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>}

                <PanelBody
                    title={__("Container Style")}
                    className="premium-panel-body"
                    initialOpen={false}>
                    <PremiumResponsiveMargin
                        directions={["all"]}
                        showUnits={true}
                        selectedUnit={marginType}
                        marginTop={marginTop}
                        marginRight={marginRight}
                        marginBottom={marginBottom}
                        marginLeft={marginLeft}
                        marginTopTablet={marginTopTablet}
                        marginRightTablet={marginRightTablet}
                        marginBottomTablet={marginBottomTablet}
                        marginLeftTablet={marginLeftTablet}
                        marginTopMobile={marginTopMobile}
                        marginRightMobile={marginRightMobile}
                        marginBottomMobile={marginBottomMobile}
                        marginLeftMobile={marginLeftMobile}
                        onChangeMarginTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ marginTop: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ marginTopTablet: newValue })
                                } else {
                                    setAttributes({ marginTopMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ marginRight: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ marginRightTablet: newValue })
                                } else {
                                    setAttributes({ marginRightMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ marginBottom: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ marginBottomTablet: newValue })
                                } else {
                                    setAttributes({ marginBottomMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ marginLeft: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ marginLeftTablet: newValue })
                                } else {
                                    setAttributes({ marginLeftMobile: newValue })
                                }
                            }
                        }
                        onChangeMarSizeUnit={(newvalue) => setAttributes({ marginType: newvalue })}
                    />
                    <PremiumResponsivePadding
                        paddingTop={paddingTop}
                        paddingRight={paddingRight}
                        paddingBottom={paddingBottom}
                        paddingLeft={paddingLeft}
                        paddingTopTablet={paddingTopTablet}
                        paddingRightTablet={paddingRightTablet}
                        paddingBottomTablet={paddingBottomTablet}
                        paddingLeftTablet={paddingLeftTablet}
                        paddingTopMobile={paddingTopMobile}
                        paddingRightMobile={paddingRightMobile}
                        paddingBottomMobile={paddingBottomMobile}
                        paddingLeftMobile={paddingLeftMobile}
                        showUnits={true}
                        selectedUnit={paddingType}
                        onChangePadSizeUnit={newvalue =>
                            setAttributes({ paddingType: newvalue })
                        }
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ paddingTop: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ paddingTopTablet: newValue })
                                } else {
                                    setAttributes({ paddingTopMobile: newValue })
                                }

                            }

                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ paddingRight: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ paddingRightTablet: newValue })
                                } else {
                                    setAttributes({ paddingRightMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ paddingBottom: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ paddingBottomTablet: newValue })
                                } else {
                                    setAttributes({ paddingBottomMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ paddingLeft: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ paddingLeftTablet: newValue })
                                } else {
                                    setAttributes({ paddingLeftMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>
            </InspectorControls>),

            < div
                id={`premium-countdown-${block_id}`}
                className={`${mainClasses}   premium-countdown-${block_id}`
                }
                style={{ justifyContent: align || "center" }}
                data-time={dateTime}
            >
                <div id={`countdown-${block_id}`} className={`premium-countdown-init countdown ${contentStyle} `} data-time={dateTime} data-expire={expireType} data-timezone={timeZone} data-expiretxt={expireTxt} data-expirelink={expiredUrl}>
                    {!this.state.showMessage ? (<span className={`pre_countdown-row `}>
                        {showMonths && [
                            <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace || 20}px 10px ${unitsSpace || 20}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                                <span className={`pre_time-mid `} >
                                    <span className={`pre_countdown-amount  premium-countdown__digits-months`} id={`months`}
                                        style={{
                                            color: digitColor,
                                            backgroundColor: digitBgColor,
                                            fontWeight: digitWeight,
                                            fontStyle: digitStyle,
                                            letterSpacing: digitLetter,
                                            textTransform: digitUpper ? "uppercase" : "",
                                            lineHeight: digitLine,
                                            borderStyle: borderType,
                                            borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                            borderColor: digitBorderColor,
                                            borderRadius: borderRadius
                                        }}
                                    >
                                        {this.state.countMonths}
                                    </span>
                                    <span className={`pre_countdown-period premium-countdown__units-months`}
                                        style={{
                                            color: unitColor,
                                            backgroundColor: unitBgColor,
                                            fontStyle: unitStyle,
                                            letterSpacing: unitLetter,
                                            lineHeight: unitLine + "px",
                                            textTransform: unitUpper ? "uppercase" : "none",
                                            fontWeight: unitWeight || "normal",
                                            padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {monthLabel}
                                    </span>
                                </span>
                            </span>,
                            (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>
                        ]
                        }

                        {showWeeks && [
                            <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                                <span className={`pre_time-mid `}

                                >
                                    <span className={`pre_countdown-amount  premium-countdown__digits-weeks`} id={`weeks`}
                                        style={{
                                            color: digitColor,
                                            backgroundColor: digitBgColor,
                                            fontWeight: digitWeight,
                                            fontStyle: digitStyle,
                                            letterSpacing: digitLetter,
                                            textTransform: digitUpper ? "uppercase" : "",
                                            lineHeight: digitLine,
                                            borderStyle: borderType,
                                            borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                            borderColor: digitBorderColor,
                                            borderRadius: borderRadius
                                        }}
                                    >
                                        {this.state.countWeeks}
                                    </span>
                                    <span className={`pre_countdown-period premium-countdown__units-weeks`}
                                        style={{
                                            color: unitColor,
                                            backgroundColor: unitBgColor,
                                            fontStyle: unitStyle,
                                            letterSpacing: unitLetter,
                                            lineHeight: unitLine + "px",
                                            textTransform: unitUpper ? "uppercase" : "none",
                                            fontWeight: unitWeight || "normal",
                                            padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {weekLabel}
                                    </span>
                                </span>
                            </span>,
                            (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>
                        ]}

                        {showDays && [
                            <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                                <span className={`pre_time-mid `}
                                >
                                    <span className={`pre_countdown-amount  premium-countdown__digits-days`} id={`days`}
                                        style={{
                                            color: digitColor,
                                            backgroundColor: digitBgColor,
                                            fontWeight: digitWeight,
                                            fontStyle: digitStyle,
                                            letterSpacing: digitLetter,
                                            textTransform: digitUpper ? "uppercase" : "",
                                            lineHeight: digitLine,
                                            borderStyle: borderType,
                                            borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                            borderColor: digitBorderColor,
                                            borderRadius: borderRadius
                                        }}
                                    >
                                        {this.state.countDays}
                                    </span>
                                    <span className={`pre_countdown-period premium-countdown__units-days`}
                                        style={{
                                            color: unitColor,
                                            backgroundColor: unitBgColor,
                                            fontStyle: unitStyle,
                                            letterSpacing: unitLetter,
                                            lineHeight: unitLine + "px",
                                            textTransform: unitUpper ? "uppercase" : "none",

                                            fontWeight: unitWeight || "normal",
                                            padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {dayLabel}
                                    </span>
                                </span>
                            </span>,
                            (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>
                        ]}

                        {showHours && [
                            <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                                <span className={`pre_time-mid `}

                                >
                                    <span className={`pre_countdown-amount  premium-countdown__digits-hours`} id={`hours`}
                                        style={{
                                            color: digitColor,
                                            backgroundColor: digitBgColor,
                                            fontWeight: digitWeight,
                                            fontStyle: digitStyle,
                                            letterSpacing: digitLetter,
                                            textTransform: digitUpper ? "uppercase" : "",
                                            lineHeight: digitLine,
                                            borderStyle: borderType,
                                            borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                            borderColor: digitBorderColor,
                                            borderRadius: borderRadius
                                        }}
                                    >
                                        {this.state.countHours}
                                    </span>
                                    <span className={`pre_countdown-period premium-countdown__units-hours`}
                                        style={{
                                            color: unitColor,
                                            backgroundColor: unitBgColor,
                                            fontStyle: unitStyle,
                                            letterSpacing: unitLetter,
                                            lineHeight: unitLine + "px",
                                            textTransform: unitUpper ? "uppercase" : "none",
                                            fontWeight: unitWeight || "normal",
                                            padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {hourLabel}
                                    </span>
                                </span>
                            </span>,
                            (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>

                        ]}

                        {showMinutes && [
                            <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                                <span className={`pre_time-mid `}
                                >
                                    <span className={`pre_countdown-amount  premium-countdown__digits-minutes`} id={`minutes`}
                                        style={{
                                            color: digitColor,
                                            backgroundColor: digitBgColor,
                                            fontWeight: digitWeight,
                                            fontStyle: digitStyle,
                                            letterSpacing: digitLetter,
                                            textTransform: digitUpper ? "uppercase" : "",
                                            lineHeight: digitLine,
                                            borderStyle: borderType,
                                            borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                            borderColor: digitBorderColor,
                                            borderRadius: borderRadius
                                        }}
                                    >
                                        {this.state.countMinutes}
                                    </span>
                                    <span className={`pre_countdown-period premium-countdown__units-minutes`}
                                        style={{
                                            color: unitColor,
                                            backgroundColor: unitBgColor,
                                            fontStyle: unitStyle,
                                            letterSpacing: unitLetter,
                                            lineHeight: unitLine + "px",
                                            textTransform: unitUpper ? "uppercase" : "none",
                                            fontWeight: unitWeight || "normal",
                                            padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {minuteLabel}
                                    </span>
                                </span>
                            </span>,
                            (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>
                        ]}

                        {showSeconds && [
                            <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                                <span className={`pre_time-mid `}

                                >
                                    <span className={`pre_countdown-amount premium-countdown__digits-seconds`} id={`seconds`}
                                        style={{
                                            color: digitColor,
                                            backgroundColor: digitBgColor,

                                            fontWeight: digitWeight,
                                            fontStyle: digitStyle,
                                            letterSpacing: digitLetter,
                                            textTransform: digitUpper ? "uppercase" : "",
                                            lineHeight: digitLine,
                                            borderStyle: borderType,
                                            borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                            borderColor: digitBorderColor,
                                            borderRadius: borderRadius
                                        }}
                                    >
                                        {this.state.countSeconds}
                                    </span>
                                    <span className={`pre_countdown-period premium-countdown__units-seconds`}
                                        style={{
                                            color: unitColor,
                                            backgroundColor: unitBgColor,
                                            fontStyle: unitStyle,
                                            letterSpacing: unitLetter,
                                            lineHeight: unitLine + "px",
                                            textTransform: unitUpper ? "uppercase" : "none",
                                            fontWeight: unitWeight || "normal",
                                            padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {secondLabel}
                                    </span>
                                </span>
                            </span>
                        ]}

                    </span>) : (<div className="premium-countdown-exp-message">{expireTxt}</div>)}
                </div>
            </ div>
        ]
    }
}
export default edit;
