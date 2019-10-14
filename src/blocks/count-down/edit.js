import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumMargin from "../../components/premium-margin";

const { __ } = wp.i18n;

const { Component } = wp.element;

const { PanelBody, DateTimePicker, ToggleControl, SelectControl, TextControl, RangeControl } = wp.components

const { BlockControls, InspectorControls, AlignmentToolbar, ColorPalette } = wp.editor;

let isBoxUpdated = null;

class edit extends Component {
    constructor() {
        super(...arguments);

        this.onChangeDate = this.onChangeDate.bind(this);
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;

        if (!attributes.id) {
            setAttributes({ id: "premium-countdown__" + clientId });
        }
        this.onChangeDate();
    }

    componentDidUpdate() {
        clearInterval(isBoxUpdated);
        console.log("changed")
        isBoxUpdated = setInterval(this.onChangeDate, 1000);
    }

    onChangeDate() {

        const { setAttributes } = this.props;
        const { id, expiredDate, dateTime, timeZone, monthsCheck, weeksCheck, daysCheck, hoursCheck, minutesCheck, secondsCheck } = this.props.attributes;
        if (!id) return null;
        var newDateTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
        console.log(newDateTime + " new time")
        setAttributes({ dateTime: newDateTime || "0"});

        var block = document.getElementById(`container__${id}`);
        var months = 0;
        var weeks = 0;
        var days = 0;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
        var now = 0;
        var timer = 0;
        var oneDay = 0;

        var date = block.getAttribute("data-date")
        var neww = new Date(date);
        var interval = setInterval(function () {

            now = new Date().getTime();
            timer = neww - now;
            // if (timeZone === "UTC") 
            // {
            //     timer = neww - now
                
            // }

            if (timer > 0) {
                oneDay = 24 * 60 * 60 * 1000;
                days = Math.floor(timer / oneDay);
                weeks = Math.floor(days / 7);
                months = Math.floor(weeks / 4);
                hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((timer % (1000 * 60)) / 1000);

                if (monthsCheck) { block.getElementsByClassName("premium-countdown__digits-months")[0].innerHTML = (months || "0"); }
                if (weeksCheck) { block.getElementsByClassName("premium-countdown__digits-weeks")[0].innerHTML = (weeks || "0"); }
                if (daysCheck) { block.getElementsByClassName("premium-countdown__digits-days")[0].innerHTML = (days || "0"); }
                if (hoursCheck) { block.getElementsByClassName("premium-countdown__digits-hours")[0].innerHTML = (hours || "0"); }
                if (minutesCheck) { block.getElementsByClassName("premium-countdown__digits-minutes")[0].innerHTML = (minutes || "0"); }
                if (secondsCheck) { block.getElementsByClassName("premium-countdown__digits-seconds")[0].innerHTML = (seconds || "0"); }
                clearInterval(interval);
            }

            if (timer < 0) {
                setAttributes({ expiredDate: true });
                console.log(expiredDate)
                clearInterval(interval);
                if (monthsCheck) { block.getElementsByClassName("premium-countdown__digits-months")[0].innerHTML = (months || "0"); }
                if (weeksCheck) { block.getElementsByClassName("premium-countdown__digits-weeks")[0].innerHTML = (weeks || "0"); }
                if (daysCheck) { block.getElementsByClassName("premium-countdown__digits-days")[0].innerHTML = (days || "0"); }
                if (hoursCheck) { block.getElementsByClassName("premium-countdown__digits-hours")[0].innerHTML = (hours || "0"); }
                if (minutesCheck) { block.getElementsByClassName("premium-countdown__digits-minutes")[0].innerHTML = (minutes || "0"); }
                if (secondsCheck) { block.getElementsByClassName("premium-countdown__digits-seconds")[0].innerHTML = (seconds || "0"); }
            }
        }, 1000);
    };

    render() {
        const { isSelected, setAttributes, className } = this.props;

        const {
            id,
            align,
            dateTime,
            timeZone,
            expiredDate,
            expiredUrl,
            monthsCheck,
            weeksCheck,
            daysCheck,
            hoursCheck,
            minutesCheck,
            secondsCheck,
            monthLabel,
            weekLabel,
            dayLabel,
            hourLabel,
            minuteLabel,
            secondLabel,
            contentDisplay,
            digitsColor,
            digitsBgColor,
            digitsSize,
            digitsWeight,
            digitsLetterSpacing,
            digitsLineHeight,
            borderType,
            borderWidth,
            borderColor,
            borderRadius,
            unitsColor,
            unitsSize,
            unitsWeight,
            unitsLetterSpacing,
            unitsLineHeight,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
            unitsSpace

        } = this.props.attributes;

        const AlLIGNMENT = [
            {
                icon: 'editor-alignleft',
                title: __('Align Left'),
                align: 'flex-start',
            },
            {
                icon: 'editor-aligncenter',
                title: __('Align Center'),
                align: 'center',
            },
            {
                icon: 'editor-alignright',
                title: __('Align Right'),
                align: 'flex-end',
            },
        ];

        const TIMEZONE_OPTIONS = [
            {
                label: __("Wordpress Default"),
                value: "UTC"
            },
            {
                label: __("User Local Time"),
                value: "LocalTime"
            }
        ];

        const DISPLAY_STYLES = [
            {
                label: __("Block"),
                value: "block"
            },
            {
                label: __("Inline Block"),
                value: "inline-block"
            },
        ];

        const mainClasses = classnames(className, "premium-countdown");

        return [
            isSelected && (
                <div>
                    {/* Alignment */}
                    <BlockControls key="controls">
                        <AlignmentToolbar
                            label={__('Alignment')}
                            value={align}
                            onChange={newAlign => setAttributes({ align: newAlign || "center" })}
                            alignmentControls={AlLIGNMENT}
                        />
                    </BlockControls>

                    <InspectorControls key={"inspector"}>

                        {/* Due Date */}
                        <PanelBody
                            title={__("Due Date")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <div className="premium-control-toggle">
                                <DateTimePicker
                                    currentDate={dateTime}
                                    onChange={newDateTime => setAttributes({ dateTime: newDateTime || "0"})}
                                    is12Hour={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <SelectControl
                                    label={__("Time Zone")}
                                    value={timeZone}
                                    options={TIMEZONE_OPTIONS}
                                    onChange={newValue => setAttributes({ timeZone: newValue || "block" })}
                                />
                            </div>
                            {expiredDate === true && (
                                <TextControl
                                    className="premium-text-control"
                                    label={__("Expired Url")}
                                    value={expiredUrl}
                                    onChange={newValue => setAttributes({ expiredUrl: newValue })}
                                />
                            )}
                        </PanelBody>

                        {/* Time Units */}
                        <PanelBody
                            title={__("Time Units")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <ToggleControl
                                    label={__("Show Months")}
                                    checked={monthsCheck}
                                    onChange={newCheck => setAttributes({ monthsCheck: newCheck })}
                                />
                                <ToggleControl
                                    label={__("Show Weeks")}
                                    checked={weeksCheck}
                                    onChange={newCheck => setAttributes({ weeksCheck: newCheck })}
                                />
                                <ToggleControl
                                    label={__("Show Days")}
                                    checked={daysCheck}
                                    onChange={newCheck => setAttributes({ daysCheck: newCheck })}
                                />
                                <ToggleControl
                                    label={__("Show Hours")}
                                    checked={hoursCheck}
                                    onChange={newCheck => setAttributes({ hoursCheck: newCheck })}
                                />
                                <ToggleControl
                                    label={__("Show Minutes")}
                                    checked={minutesCheck}
                                    onChange={newCheck => setAttributes({ minutesCheck: newCheck })}
                                />
                                <ToggleControl
                                    label={__("Show Seconds")}
                                    checked={secondsCheck}
                                    onChange={newCheck => setAttributes({ secondsCheck: newCheck })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <SelectControl
                                    label={__("Content Display Style")}
                                    value={contentDisplay}
                                    options={DISPLAY_STYLES}
                                    onChange={newValue => setAttributes({ contentDisplay: newValue || "block" })}
                                />
                            </div>
                        </PanelBody>

                        {/* Units Labels */}
                        <PanelBody
                            title={__("Units Labels")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            {monthsCheck && (
                                <div className="premium-control-toggle">
                                    <TextControl
                                        className="premium-text-control"
                                        label={__("Months")}
                                        value={monthLabel}
                                        onChange={newValue => setAttributes({ monthLabel: newValue })}
                                    />
                                </div>
                            )}
                            {weeksCheck && (
                                <div className="premium-control-toggle">
                                    <TextControl
                                        className="premium-text-control"
                                        label={__("Weeks")}
                                        value={weekLabel}
                                        onChange={newValue => setAttributes({ weekLabel: newValue })}
                                    />
                                </div>
                            )}
                            {daysCheck && (
                                <div className="premium-control-toggle">
                                    <TextControl
                                        className="premium-text-control"
                                        label={__("Days")}
                                        value={dayLabel}
                                        onChange={newValue => setAttributes({ dayLabel: newValue })}
                                    />
                                </div>
                            )}
                            {hoursCheck && (
                                <div className="premium-control-toggle">
                                    <TextControl
                                        className="premium-text-control"
                                        label={__("Hours")}
                                        value={hourLabel}
                                        onChange={newValue => setAttributes({ hourLabel: newValue })}
                                    />
                                </div>
                            )}
                            {minutesCheck && (
                                <div className="premium-control-toggle">
                                    <TextControl
                                        className="premium-text-control"
                                        label={__("Minutes")}
                                        value={minuteLabel}
                                        onChange={newValue => setAttributes({ minuteLabel: newValue })}
                                    />
                                </div>
                            )}
                            {secondsCheck && (
                                <div className="premium-control-toggle">
                                    <TextControl
                                        className="premium-text-control"
                                        label={__("Seconds")}
                                        value={secondLabel}
                                        onChange={newValue => setAttributes({ secondLabel: newValue })}
                                    />
                                </div>
                            )}
                        </PanelBody>

                        {/* Digits Style */}
                        <PanelBody
                            title={__("Digits Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p className="premium-editor-paragraph">{__("Color")}</p>
                                <ColorPalette
                                    value={digitsColor}
                                    onChange={newColor => setAttributes({ digitsColor: newColor || "#000" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <p className="premium-editor-paragraph">{__("Background Color")}</p>
                                <ColorPalette
                                    value={digitsBgColor}
                                    onChange={newColor => setAttributes({ digitsBgColor: newColor || "transparent" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTypo
                                    components={["size", "weight", "spacing", "line"]}
                                    size={digitsSize}
                                    weight={digitsWeight}
                                    spacing={digitsLetterSpacing}
                                    line={digitsLineHeight}
                                    onChangeSize={newSize => setAttributes({ digitsSize: newSize || "0" })}
                                    onChangeWeight={newWeight => setAttributes({ digitsWeight: newWeight || "normal" })}
                                    onChangeSpacing={newValue => setAttributes({ digitsLetterSpacing: newValue || "0" })}
                                    onChangeLine={newValue => setAttributes({ digitsLineHeight: newValue || "inherit" })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumBorder
                                    borderType={borderType}
                                    borderWidth={borderWidth}
                                    borderColor={borderColor}
                                    borderRadius={borderRadius}
                                    onChangeType={newType => setAttributes({ borderType: newType || "none" })}
                                    onChangeWidth={newWidth => setAttributes({ borderWidth: newWidth || "0" })}
                                    onChangeColor={colorValue => setAttributes({ borderColor: colorValue.hex || "#000" })}
                                    onChangeRadius={newRadius => setAttributes({ borderRadius: newRadius || "0" })}
                                />
                            </div>
                        </PanelBody>

                        {/* Units Style */}
                        <PanelBody
                            title={__("Units Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p className="premium-editor-paragraph">{__("Color")}</p>
                                <ColorPalette
                                    value={unitsColor}
                                    onChange={newColor => setAttributes({ unitsColor: newColor || "#000" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTypo
                                    components={["size", "weight", "spacing", "line"]}
                                    size={unitsSize}
                                    weight={unitsWeight}
                                    spacing={unitsLetterSpacing}
                                    line={unitsLineHeight}
                                    onChangeSize={newSize => setAttributes({ unitsSize: newSize || "0" })}
                                    onChangeWeight={newWeight => setAttributes({ unitsWeight: newWeight || "normal" })}
                                    onChangeSpacing={newValue => setAttributes({ unitsLetterSpacing: newValue || "0" })}
                                    onChangeLine={newValue => setAttributes({ unitsLineHeight: newValue || "inherit" })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumMargin
                                    directions={["all"]}
                                    marginTop={marginTop}
                                    marginRight={marginRight}
                                    marginBottom={marginBottom}
                                    marginLeft={marginLeft}
                                    onChangeMarTop={newValue => setAttributes({ marginTop: newValue || "0" })}
                                    onChangeMarRight={newValue => setAttributes({ marginRight: newValue || "0" })}
                                    onChangeMarBottom={newValue => setAttributes({ marginBottom: newValue || "0" })}
                                    onChangeMarLeft={newValue => setAttributes({ marginLeft: newValue || "0" })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <RangeControl
                                    label={__("Spacing Between")}
                                    value={unitsSpace}
                                    onChange={newValue => setAttributes({ unitsSpace: newValue || "0" })}
                                    initialPosition={10}
                                    min={0}
                                    max={200}
                                />
                            </div>
                        </PanelBody>

                    </InspectorControls>
                </div>
            ),

            <div
                id={id}
                className={`${mainClasses}__wrap`}
                style={{ justifyContent: align || "center" }}
            >
                {/* {expiredDate 
                ?
                    <div className={`premium-countdown__expired-date`} style={{display: "block" , width:"100%" , color:"red"}}>Countdown was expired</div>
                :
                    <div className={`premium-countdown__expired-date`} style={{display: "none" }}>Countdown was expired</div>
                } */}
                    <div id={`container__${id}`} className={`premium-countdown__container countdown down `} data-date={dateTime}>
                        <span className={`premium-countdown__items `}>

                            {monthsCheck && (
                                <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                    <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                        style={{
                                            display: contentDisplay === "inline-block" ? "flex" : "block",
                                            alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                        }}
                                    >
                                        <span className={`premium-countdown__amount  premium-countdown__digits-months`} id={`months`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: digitsColor || "#000",
                                                backgroundColor: digitsBgColor || "transparent",
                                                fontSize: digitsSize || "0",
                                                fontWeight: digitsWeight || "normal",
                                                letterSpacing: digitsLetterSpacing || "0",
                                                lineHeight: digitsLineHeight || "inherit",
                                                borderStyle: borderType || "none",
                                                borderWidth: borderWidth || "0",
                                                borderColor: borderColor || "#000",
                                                borderRadius: borderRadius || "0",
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"

                                            }}
                                        >
                                            00
                                    </span>
                                        <span className={`premium-countdown__period premium-countdown__units-months`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: unitsColor || "#000",
                                                fontSize: unitsSize || "0",
                                                fontWeight: unitsWeight || "normal",
                                                letterSpacing: unitsLetterSpacing || "0",
                                                lineHeight: unitsLineHeight || "inherit",
                                                margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            {monthLabel}
                                        </span>
                                    </span>
                                </span>
                            )}
                            {weeksCheck && (
                                <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                    <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                        style={{
                                            display: contentDisplay === "inline-block" ? "flex" : "block",
                                            alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                        }}
                                    >
                                        <span className={`premium-countdown__amount  premium-countdown__digits-weeks`} id={`weeks`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: digitsColor || "#000",
                                                backgroundColor: digitsBgColor || "transparent",
                                                fontSize: digitsSize || "0",
                                                fontWeight: digitsWeight || "normal",
                                                letterSpacing: digitsLetterSpacing || "0",
                                                lineHeight: digitsLineHeight || "inherit",
                                                borderStyle: borderType || "none",
                                                borderWidth: borderWidth || "0",
                                                borderColor: borderColor || "#000",
                                                borderRadius: borderRadius || "0",
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            00
                                    </span>
                                        <span className={`premium-countdown__period premium-countdown__units-weeks`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: unitsColor || "#000",
                                                fontSize: unitsSize || "0",
                                                fontWeight: unitsWeight || "normal",
                                                letterSpacing: unitsLetterSpacing || "0",
                                                lineHeight: unitsLineHeight || "inherit",
                                                margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            {weekLabel}
                                        </span>
                                    </span>
                                </span>
                            )}
                            {daysCheck && (
                                <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                    <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                        style={{
                                            display: contentDisplay === "inline-block" ? "flex" : "block",
                                            alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                        }}
                                    >
                                        <span className={`premium-countdown__amount  premium-countdown__digits-days`} id={`days`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: digitsColor || "#000",
                                                backgroundColor: digitsBgColor || "transparent",
                                                fontSize: digitsSize || "0",
                                                fontWeight: digitsWeight || "normal",
                                                letterSpacing: digitsLetterSpacing || "0",
                                                lineHeight: digitsLineHeight || "inherit",
                                                borderStyle: borderType || "none",
                                                borderWidth: borderWidth || "0",
                                                borderColor: borderColor || "#000",
                                                borderRadius: borderRadius || "0",
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            00
                                    </span>
                                        <span className={`premium-countdown__period premium-countdown__units-days`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: unitsColor || "#000",
                                                fontSize: unitsSize || "0",
                                                fontWeight: unitsWeight || "normal",
                                                letterSpacing: unitsLetterSpacing || "0",
                                                lineHeight: unitsLineHeight || "inherit",
                                                margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            {dayLabel}
                                        </span>
                                    </span>
                                </span>
                            )}
                            {hoursCheck && (
                                <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                    <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                        style={{
                                            display: contentDisplay === "inline-block" ? "flex" : "block",
                                            alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                        }}
                                    >
                                        <span className={`premium-countdown__amount  premium-countdown__digits-hours`} id={`hours`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: digitsColor || "#000",
                                                backgroundColor: digitsBgColor || "transparent",
                                                fontSize: digitsSize || "0",
                                                fontWeight: digitsWeight || "normal",
                                                letterSpacing: digitsLetterSpacing || "0",
                                                lineHeight: digitsLineHeight || "inherit",
                                                borderStyle: borderType || "none",
                                                borderWidth: borderWidth || "0",
                                                borderColor: borderColor || "#000",
                                                borderRadius: borderRadius || "0",
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            00
                                    </span>
                                        <span className={`premium-countdown__period premium-countdown__units-hours`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: unitsColor || "#000",
                                                fontSize: unitsSize || "0",
                                                fontWeight: unitsWeight || "normal",
                                                letterSpacing: unitsLetterSpacing || "0",
                                                lineHeight: unitsLineHeight || "inherit",
                                                margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            {hourLabel}
                                        </span>
                                    </span>
                                </span>
                            )}
                            {minutesCheck && (
                                <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                    <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                        style={{
                                            display: contentDisplay === "inline-block" ? "flex" : "block",
                                            alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                        }}
                                    >
                                        <span className={`premium-countdown__amount  premium-countdown__digits-minutes`} id={`minutes`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: digitsColor || "#000",
                                                backgroundColor: digitsBgColor || "transparent",
                                                fontSize: digitsSize || "0",
                                                fontWeight: digitsWeight || "normal",
                                                letterSpacing: digitsLetterSpacing || "0",
                                                lineHeight: digitsLineHeight || "inherit",
                                                borderStyle: borderType || "none",
                                                borderWidth: borderWidth || "0",
                                                borderColor: borderColor || "#000",
                                                borderRadius: borderRadius || "0",
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            00
                                    </span>
                                        <span className={`premium-countdown__period premium-countdown__units-minutes`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: unitsColor || "#000",
                                                fontSize: unitsSize || "0",
                                                fontWeight: unitsWeight || "normal",
                                                letterSpacing: unitsLetterSpacing || "0",
                                                lineHeight: unitsLineHeight || "inherit",
                                                margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            {minuteLabel}
                                        </span>
                                    </span>
                                </span>
                            )}
                            {secondsCheck && (
                                <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                                    <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                        style={{
                                            display: contentDisplay === "inline-block" ? "flex" : "block",
                                            alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                        }}
                                    >
                                        <span className={`premium-countdown__amount premium-countdown__digits-seconds`} id={`seconds`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: digitsColor || "#000",
                                                backgroundColor: digitsBgColor || "transparent",
                                                fontSize: digitsSize || "0",
                                                fontWeight: digitsWeight || "normal",
                                                letterSpacing: digitsLetterSpacing || "0",
                                                lineHeight: digitsLineHeight || "inherit",
                                                borderStyle: borderType || "none",
                                                borderWidth: borderWidth || "0",
                                                borderColor: borderColor || "#000",
                                                borderRadius: borderRadius || "0",
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                            }}
                                        >
                                            00
                                    </span>
                                        <span className={`premium-countdown__period premium-countdown__units-seconds`}
                                            style={{
                                                display: contentDisplay || "block",
                                                color: unitsColor || "#000",
                                                fontSize: unitsSize || "0",
                                                fontWeight: unitsWeight || "normal",
                                                letterSpacing: unitsLetterSpacing || "0",
                                                lineHeight: unitsLineHeight || "inherit",
                                                margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                                padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
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