jQuery(document).ready(function ($) {

    setTimeout(function () {
        setInterval(count, 1000)
    }, 500)

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
        var endDateTime = moment.utc(dataTime);
        if (timeZone === "user-time") {
            endDateTime = moment(dataTime).utc().local()
        }
        var timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);

        if (timeLeft < 0) {
            if (eventExpire === "link") {
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


        monthContainer ? monthContainer.innerHTML = (months > 0 ? months : "00") : "";
        weekContainer ? weekContainer.innerHTML = (weeks > 0 ? weeks : "00") : "";
        dayContainer ? dayContainer.innerHTML = (days > 0 ? days : "00") : "";
        hourContainer ? hourContainer.innerHTML = (hours > 0 ? hours : "00") : "";
        minuteContainer ? minuteContainer.innerHTML = (minutes > 0 ? minutes : "00") : "";
        secondContainer ? secondContainer.innerHTML = (seconds > 0 ? seconds : "00") : "";

    })
}


