document.addEventListener("DOMContentLoaded", function() {
    var countdowns = document.getElementsByClassName("premium-countdown__container");

    console.log("hello from count down js file")
    console.log(countdowns)
  
    // Return if there is no countdown block
    if (!countdowns) return;
  
    // Set each countdown
    for (let i = 0; i < countdowns.length; i++) {
      let countdown = countdowns[i];
      console.log(countdown)
  
      let counter = function(countdown) {
        var dateNode = countdown.getElementsByClassName("premium-countdown__get-date");
        var date = dateNode[0].getAttribute("data-date");
        var now = new Date().getTime();
        var time = new Date(date);
        var timer = new Date(time - now);
  
        var oneDay = 24 * 60 * 60 * 1000;
        var days = Math.round(timer / oneDay);
        var weeks = Math.round(days / 7);
        var months = Math.round(weeks / 4);
        var hours = timer.getHours();
        var minutes = timer.getMinutes();
        var seconds = timer.getSeconds();
  
        // Get values from html

        var monthsNode = countdown.getElementsByClassName(
            "premium-countdown__digits-months"
        );
        var weeksNode = countdown.getElementsByClassName(
            "premium-countdown__digits-weeks"
        );
        var daysNode = countdown.getElementsByClassName(
          "premium-countdown__digits-days"
        );
        var hoursNode = countdown.getElementsByClassName(
          "premium-countdown__digits-hours"
        );
        var minutesNode = countdown.getElementsByClassName(
          "premium-countdown__digits-minutes"
        );
        var secondsNode = countdown.getElementsByClassName(
          "premium-countdown__digits-seconds"
        );
  
        // Change inner html
        monthsNode[0].innerHTML = months || 0;
        weeksNode[0].innerHTML = weeks || 0;
        daysNode[0].innerHTML = days || 0;
        hoursNode[0].innerHTML = hours || 0;
        minutesNode[0].innerHTML = minutes || 0;
        secondsNode[0].innerHTML = seconds || 0;
      };
  
      var interval = setInterval(function() {
        counter(countdown);
      }, 1000);
    }
  });
  