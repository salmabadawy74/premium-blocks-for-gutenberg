import classnames from "classnames";

const { __ } = wp.i18n;

const { PanelBody, ToggleControl, SelectControl, RangeControl, TextControl } = wp.components

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
        secondLabel

    } = props.attributes;

    setAttributes({ id: blockID });

    const mainClasses = classnames(className, "premium-countdown");

    return [
        isSelected && (
            <div>
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
                    </PanelBody>

                    {/* Alignment */}
                    <PanelBody
                        title={__("Alignment")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >

                    </PanelBody>

                    {/* Labels */}
                    <PanelBody
                        title={__("Labels")}
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

                    </PanelBody>

                    {/* Units Style */}
                    <PanelBody
                        title={__("Units Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >

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
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>00</span>
                                <span className={`premium-countdown__period`}>{monthLabel}</span>
                            </span>
                        </span>
                    )}
                    {weeksCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>00</span>
                                <span className={`premium-countdown__period`}>{weekLabel}</span>
                            </span>
                        </span>
                    )}
                    {daysCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>00</span>
                                <span className={`premium-countdown__period`}>{dayLabel}</span>
                            </span>
                        </span>
                    )}
                    {hoursCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>23</span>
                                <span className={`premium-countdown__period`}>{hourLabel}</span>
                            </span>
                        </span>
                    )}
                    {minutesCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>16</span>
                                <span className={`premium-countdown__period`}>{minuteLabel}</span>
                            </span>
                        </span>
                    )}
                    {secondsCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>37</span>
                                <span className={`premium-countdown__period`}>{secondLabel}</span>
                            </span>
                        </span>
                    )}

                </span>
            </div>
        </div>
    ]
};

export default edit;