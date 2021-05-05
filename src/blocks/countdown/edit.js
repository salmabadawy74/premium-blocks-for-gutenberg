import classnames from "classnames";
import Datetime from 'react-datetime';
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumTypo from '../../components/premium-typo';
import PremiumBorder from '../../components/premium-border';
import PremiumBoxShadow from '../../components/premium-box-shadow'
import styling from './styling'

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { PanelBody, DateTimePicker, ToggleControl, SelectControl, TextControl, RangeControl, TabPanel,
    Dashicon } = wp.components

const { BlockControls, InspectorControls, AlignmentToolbar, ColorPalette } = wp.editor;

class edit extends Component {
    constructor() {
        super(...arguments)
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId })
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-countdown-" + clientId.substr(0, 6)
        );
        document.head.appendChild($style);
    }

    componentDidUpdate() {
        var element = document.getElementById(
            "premium-style-countdown-" + this.props.clientId.substr(0, 6)
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }
    }

    render() {
        const { isSelected, setAttributes, className, clientId: blockId, attributes } = this.props;
        const {
            block_id,
            classMigrate,
            showMonths,
            showWeeks,
            showDays,
            showHours,
            showMinutes,
            showSeconds,
            dateTime,
            timeZone,
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
            borderColor,
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
            paddingType } = attributes;

        const onDateTimeChange = (momentObj) => {
            let date = momentObj._d;

            // ignore invalid date
            if (!date) return;

            let time = date.getTime();

            const counter = () => {
                let now = new Date().getTime();
                let currentUtcOffset = moment(date).utcOffset() * 60 * 1000;

                let timer = new Date(time - now - currentUtcOffset);

                if (time < now) {
                    setAttributes({ days: "0", hours: "0", minutes: "0", seconds: "0" });
                    return;
                }

                // Calculate days, hours, minutes and seconds
                let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * miliseconds
                let days = Math.floor((time - now) / oneDay).toString();
                let hours = timer.getHours().toString();
                let minutes = timer.getMinutes().toString();
                let seconds = timer.getSeconds().toString();

                setAttributes({ date, days, hours, minutes, seconds });
            };
            if (window[block_id]) {
                clearInterval(window[block_id]);
            }

            if (block_id) {
                window[block_id] = setInterval(counter, 1000);
            }
        };
        const yesterday = moment().subtract(1, "day");

        const valid = (current) => current.isAfter(yesterday);

        const mainClasses = classnames(className, "premium-countdown");

        return [
            isSelected && (<InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("Due Date")}
                    className="premium-panel-body"
                    initialOpen={true}
                >
                    <DateTimePicker
                        currentDate={dateTime}
                        onChange={(val) => onDateTimeChange(val)}
                        is12Hour={true}

                    />
                    {/* <Datetime
                        value={dateTime}
                        dateFormat="YYYY-MM-DD-A"
                        timeFormat="h:mm A"
                        onChange={(momentObj) => onDateTimeChange(momentObj)}
                        isValidDate={valid}
                    /> */}
                    <SelectControl
                        label={__("Time Zone")}
                        value={timeZone}
                        options={[{
                            label: __("Wordpress Default"),
                            value: "wp-time"
                        }, {
                            label: __("User Local Time"),
                            value: 'wp-time'
                        }]}
                        onChange={(value) => setAttributes({ timeZone: value })}
                    />
                    <TextControl
                        label={__("Expired Url")}
                        value={expiredUrl}
                        onChange={newValue => setAttributes({ expiredUrl: newValue })}
                    />
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
                    <SelectControl
                        label={__("Content Display Style")}
                        value={contentStyle}
                        options={[{
                            label: __("Block"),
                            value: 'block'
                        }, {
                            label: __("Inline"),
                            value: "inline"
                        }]}
                        onChange={newValue => setAttributes({ contentStyle: newValue || "block" })}
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
                        borderColor={borderColor}
                        borderRadius={borderRadius}
                        onChangeType={(newType) => setAttributes({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                borderButton: true,
                                borderTop: top,
                                borderRight: right,
                                borderBottom: bottom,
                                borderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            setAttributes({ borderColor: colorValue.hex })
                        }
                        onChangeRadius={(newrRadius) =>
                            setAttributes({ borderRadius: newrRadius })
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
                </PanelBody>
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
            <div
                id={`premium-countdown-${block_id}`}
                className={`${mainClasses}  premium-countdown-${block_id}`}
                style={{ justifyContent: align || "center" }}
            >

                <div id={`container-${block_id}`} className={`premium-countdown__container countdown down `} data-date={dateTime}>
                    <span className={`premium-countdown__items `}>

                        <div className={`premium-countdown__get-date`} style={{ display: "none" }} data-date={dateTime}></div>

                        {showMonths && (
                            <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                <span className={`premium-countdown__time-mid `}
                                    style={{
                                        display: contentStyle === "inline-block" ? "flex" : "block",
                                        alignItems: contentStyle === "inline-block" ? "center" : "normal"
                                    }}
                                >
                                    <span className={`premium-countdown__amount  premium-countdown__digits-months`} id={`months`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: digitColor || "#000",
                                            backgroundColor: digitBgColor || "transparent",
                                            fontSize: digitSize || "0",
                                            fontWeight: digitWeight || "normal",
                                            borderStyle: borderType || "none",
                                            borderColor: borderColor || "#000",
                                            borderRadius: borderRadius || "0",
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"

                                        }}
                                    >
                                        00
                                    </span>
                                    <span className={`premium-countdown__period premium-countdown__units-months`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: unitColor || "#000",
                                            fontSize: unitSize || "0",
                                            fontWeight: unitWeight || "normal",

                                            margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {monthLabel}
                                    </span>
                                </span>
                            </span>
                        )}
                        {showWeeks && (
                            <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                <span className={`premium-countdown__time-mid `}
                                    style={{
                                        display: contentStyle === "inline-block" ? "flex" : "block",
                                        alignItems: contentStyle === "inline-block" ? "center" : "normal"
                                    }}
                                >
                                    <span className={`premium-countdown__amount  premium-countdown__digits-weeks`} id={`weeks`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: digitColor || "#000",
                                            backgroundColor: digitBgColor || "transparent",
                                            fontSize: digitSize || "0",
                                            fontWeight: digitWeight || "normal",
                                            borderStyle: borderType || "none",
                                            borderColor: borderColor || "#000",
                                            borderRadius: borderRadius || "0",
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        00
                                    </span>
                                    <span className={`premium-countdown__period premium-countdown__units-weeks`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: unitColor || "#000",
                                            fontSize: unitSize || "0",
                                            fontWeight: unitWeight || "normal",
                                            margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {weekLabel}
                                    </span>
                                </span>
                            </span>
                        )}
                        {showDays && (
                            <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                <span className={`premium-countdown__time-mid `}
                                    style={{
                                        display: contentStyle === "inline-block" ? "flex" : "block",
                                        alignItems: contentStyle === "inline-block" ? "center" : "normal"
                                    }}
                                >
                                    <span className={`premium-countdown__amount  premium-countdown__digits-days`} id={`days`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: digitColor || "#000",
                                            backgroundColor: digitBgColor || "transparent",
                                            fontSize: digitSize || "0",
                                            fontWeight: digitWeight || "normal",
                                            borderStyle: borderType || "none",
                                            borderColor: borderColor || "#000",
                                            borderRadius: borderRadius || "0",
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        00
                                    </span>
                                    <span className={`premium-countdown__period premium-countdown__units-days`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: unitColor || "#000",
                                            fontSize: unitSize || "0",
                                            fontWeight: unitWeight || "normal",
                                            margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {dayLabel}
                                    </span>
                                </span>
                            </span>
                        )}
                        {showHours && (
                            <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                <span className={`premium-countdown__time-mid `}
                                    style={{
                                        display: contentStyle === "inline-block" ? "flex" : "block",
                                        alignItems: contentStyle === "inline-block" ? "center" : "normal"
                                    }}
                                >
                                    <span className={`premium-countdown__amount  premium-countdown__digits-hours`} id={`hours`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: digitColor || "#000",
                                            backgroundColor: digitBgColor || "transparent",
                                            fontSize: digitSize || "0",
                                            fontWeight: digitWeight || "normal",
                                            borderStyle: borderType || "none",
                                            borderColor: borderColor || "#000",
                                            borderRadius: borderRadius || "0",
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        00
                                    </span>
                                    <span className={`premium-countdown__period premium-countdown__units-hours`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: unitColor || "#000",
                                            fontSize: unitSize || "0",
                                            fontWeight: unitWeight || "normal",
                                            margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {hourLabel}
                                    </span>
                                </span>
                            </span>
                        )}
                        {showMinutes && (
                            <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                <span className={`premium-countdown__time-mid `}
                                    style={{
                                        display: contentStyle === "inline-block" ? "flex" : "block",
                                        alignItems: contentStyle === "inline-block" ? "center" : "normal"
                                    }}
                                >
                                    <span className={`premium-countdown__amount  premium-countdown__digits-minutes`} id={`minutes`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: digitColor || "#000",
                                            backgroundColor: digitBgColor || "transparent",
                                            fontSize: digitSize || "0",
                                            fontWeight: digitWeight || "normal",
                                            borderStyle: borderType || "none",
                                            borderColor: borderColor || "#000",
                                            borderRadius: borderRadius || "0",
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        00
                                    </span>
                                    <span className={`premium-countdown__period premium-countdown__units-minutes`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: unitColor || "#000",
                                            fontSize: unitSize || "0",
                                            fontWeight: unitWeight || "normal",
                                            margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {minuteLabel}
                                    </span>
                                </span>
                            </span>
                        )}
                        {showSeconds && (
                            <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                <span className={`premium-countdown__time-mid `}
                                    style={{
                                        display: contentStyle === "inline-block" ? "flex" : "block",
                                        alignItems: contentStyle === "inline-block" ? "center" : "normal"
                                    }}
                                >
                                    <span className={`premium-countdown__amount premium-countdown__digits-seconds`} id={`seconds`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: digitColor || "#000",
                                            backgroundColor: digitBgColor || "transparent",
                                            fontSize: digitSize || "0",
                                            fontWeight: digitWeight || "normal",
                                            borderStyle: borderType || "none",
                                            borderColor: borderColor || "#000",
                                            borderRadius: borderRadius || "0",
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        00
                                    </span>
                                    <span className={`premium-countdown__period premium-countdown__units-seconds`}
                                        style={{
                                            display: contentStyle || "block",
                                            color: unitColor || "#000",
                                            fontSize: unitSize || "0",
                                            fontWeight: unitWeight || "normal",
                                            margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                            padding: contentStyle === "inline-block" ? "25px 30px" : "5px 40px"
                                        }}
                                    >
                                        {secondLabel}
                                    </span>
                                </span>
                            </span>
                        )}

                    </span>
                </div>


            </div>
        ]
    }
}
export default edit;
