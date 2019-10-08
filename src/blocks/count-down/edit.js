import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumMargin from "../../components/premium-margin";

const { __ } = wp.i18n;

const { PanelBody, DateTimePicker, ToggleControl, SelectControl, TextControl } = wp.components

const { BlockControls, InspectorControls, AlignmentToolbar, ColorPalette } = wp.editor;

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

const edit = props => {
    const { isSelected, setAttributes, className, clientId: blockID } = props;

    const {
        id,
        align,
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
        borderType,
        borderWidth,
        borderColor,
        borderRadius,
        unitsColor,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft

    } = props.attributes;

    setAttributes({ id: blockID });

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
                            <PremiumMargin
                                directions={["all"]}
                                marginTop={marginTop}
                                marginRight={marginRight}
                                marginBottom={marginBottom}
                                marginLeft={marginLeft}
                                onChangeMarTop={newValue => setAttributes({ marginTop: newValue || "0"}) }
                                onChangeMarRight={newValue => setAttributes({ marginRight: newValue || "0"}) }
                                onChangeMarBottom={newValue => setAttributes({ marginBottom: newValue || "0"}) }
                                onChangeMarLeft={newValue => setAttributes({ marginLeft: newValue || "0"}) }
                            />
                        </div>
                    </PanelBody>

                </InspectorControls>
            </div>
        ),
        <div
            id={`premium-countdown__${id}`}
            className={`${mainClasses}`}
            style={{ justifyContent: align || "center" }}
        >
            <div id={`countdown__${id}`} className={`premium-countdown__init countdown down is-pre_countdown`}>
                <span className={`premium-countdown__row premium-countdown__show4`}>

                    {monthsCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"

                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {monthLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {weeksCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {weekLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {daysCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {dayLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {hoursCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    23
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {hourLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {minutesCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    16
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {minuteLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {secondsCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    37
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
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
};

export default edit;