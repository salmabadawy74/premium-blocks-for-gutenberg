import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";

const save = props => {

    const { className } = props;

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

    const mainClasses = classnames(className, "premium-countdown");

    return (
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
    )

};

export default save;