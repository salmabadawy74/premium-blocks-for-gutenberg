import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";

const { __ } = wp.i18n;

const { IconButton, PanelBody, SelectControl, RangeControl, TextControl } = wp.components

const { BlockControls, InspectorControls, AlignmentToolbar, ColorPalette} = wp.editor;

const AlLIGNMENT = [
    {
      icon: 'editor-alignleft',
      title: __( 'Align Left' ),
      align: 'flex-start',
    },
    {
      icon: 'editor-aligncenter',
      title: __( 'Align Center' ),
      align: 'center',
    },
    {
      icon: 'editor-alignright',
      title: __( 'Align Right' ),
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
                    label = {__( 'Alignment' )}
                    value = {align}
                    onChange = {newAlign => setAttributes({ align: newAlign || "center" })}
                    alignmentControls = {AlLIGNMENT}
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
            id={`premium-countdown-${id}`}
            className={`${mainClasses}`}
            style={{ justifyContent: align || "center" }}
        >
            <div id={`countdown-${id}`} class="premium-countdown-init countdown down is-pre_countdown">
                <span class="pre_countdown-row pre_countdown-show4">

                    <span class="pre_countdown-section">
                        <span class="pre_time-mid">
                            <span class="pre_countdown-amount">00</span>
                            <span class="pre_countdown-period">Months</span>
                        </span>
                    </span>
                    <span class="pre_countdown-section">
                        <span class="pre_time-mid">
                            <span class="pre_countdown-amount">00</span>
                            <span class="pre_countdown-period">Weeks</span>
                        </span>
                    </span>
                    <span class="pre_countdown-section">
                        <span class="pre_time-mid">
                            <span class="pre_countdown-amount">00</span>
                            <span class="pre_countdown-period">Days</span>
                        </span>
                    </span>
                    <span class="pre_countdown-section">
                        <span class="pre_time-mid">
                            <span class="pre_countdown-amount">23</span>
                            <span class="pre_countdown-period">Hours</span>
                        </span>
                    </span>
                    <span class="pre_countdown-section">
                        <span class="pre_time-mid">
                            <span class="pre_countdown-amount">16</span>
                            <span class="pre_countdown-period">Minutes</span>
                        </span>
                    </span>
                    <span class="pre_countdown-section">
                        <span class="pre_time-mid">
                            <span class="pre_countdown-amount">37</span>
                            <span class="pre_countdown-period">Seconds</span>
                        </span>
                    </span>

                </span>
            </div>
        </div>
    ]
};

export default edit;