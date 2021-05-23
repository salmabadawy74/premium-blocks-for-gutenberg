jQuery(document).ready(function ($) {

    setTimeout(function () {
        setInterval(count, 1000)
    }, 500)
    if (!dataTime) {
        clearInterval(count)
    }
})
function count() {
    var countDownContainers = document.querySelectorAll(".premium-countdown-init");
    countDownContainers.forEach(function (countDownContainer) {
        var months = "00",
            weeks = "00",
            days = "00",
            hours = "00",
            minutes = "00",
            seconds = "00",
            monthContainer = countDownContainer.querySelector('.premium-countdown__digits-months'),
            weekContainer = countDownContainer.querySelector('.premium-countdown__digits-weeks'),
            dayContainer = countDownContainer.querySelector('.premium-countdown__digits-days'),
            hourContainer = countDownContainer.querySelector('.premium-countdown__digits-hours'),
            minuteContainer = countDownContainer.querySelector('.premium-countdown__digits-minutes'),
            secondContainer = countDownContainer.querySelector('.premium-countdown__digits-seconds'),
            dataTime = countDownContainer.dataset.time,
            eventExpire = countDownContainer.dataset.expire,
            timeZone = countDownContainer.dataset.timezone,
            expireTxt = countDownContainer.dataset.expiretxt,
            expireLink = countDownContainer.dataset.expirelink;

        var startDateTime = moment();
        var endDateTime = moment.utc(dateTime);
        if (timeZone === "user-time") {
            endDateTime = moment(dataTime).utc().local()
        }
        var timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);

        if (timeLeft <= 0) {
            if (eventExpire === "message") {
                countDownContainer.innerHTML = `<div class="premium-countdown-exp-message">${expireTxt}</div>`
            } else if (eventExpire === "link") {
                window.location.href = `${expireLink}`
            }

        }
        else {
            months = Math.floor(moment.duration(timeLeft).asMonths());
            endDateTime = endDateTime.subtract(months, 'months');
            timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);
            days = Math.floor(moment.duration(timeLeft).asDays());
            endDateTime = endDateTime.subtract(days, 'days');
            timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);
            if (weekContainer) {
                weeks = Math.floor(days / 7);
                days = days % 7
            }
            hours = Math.floor(moment.duration(timeLeft).asHours());
            endDateTime = endDateTime.subtract(hours, 'hours');
            timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);
            minutes = Math.floor(moment.duration(timeLeft).asMinutes());
            endDateTime = endDateTime.subtract(minutes, 'minutes');
            timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);
            seconds = Math.floor(moment.duration(timeLeft).asSeconds());

        }
        console.log(months, weeks, days, hours, minutes, seconds)

        monthContainer ? monthContainer.innerHTML = months : "";
        weekContainer ? weekContainer.innerHTML = weeks : "";
        dayContainer ? dayContainer.innerHTML = days : "";
        hourContainer ? hourContainer.innerHTML = hours : "";
        minuteContainer ? minuteContainer.innerHTML = minutes : "";
        secondContainer ? secondContainer.innerHTML = seconds : "";

    })
}


