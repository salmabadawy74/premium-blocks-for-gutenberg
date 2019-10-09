// jQuery(document).ready(function ($) {

//   document.addEventListener("DOMContentLoaded", function () {
//     var countdowns = document.getElementsByClassName("premium-countdown__container");

//     console.log("hello from count down js file")
//     console.log(countdowns)
//     console.log("heyyyyyyyyyyyyy from outside counter function")

//     // Return if there is no countdown block
//     if (!countdowns) return;

//     // Set each countdown
//     for (var i = 0; i < countdowns.length; i++) {
//       console.log(countdowns)
//       var countdown = countdowns[i];
//       console.log(countdown)
//       console.log("heyyyyyyyyyyyyy from loop function")

//       var counter = function (countdown) {
//         var dateNode = countdown.getElementsByClassName("premium-countdown__get-date");
//         var date = dateNode[0].getAttribute("data-date");
//         var now = new Date().getTime();
//         var time = new Date(date);
//         var timer = new Date(time - now);
//         console.log(timer)
//         console.log("heyyyyyyyyyyyyy from counter function")

//         var oneDay = 24 * 60 * 60 * 1000;
//         var days = Math.round(timer / oneDay);
//         var weeks = Math.round(days / 7);
//         var months = Math.round(weeks / 4);
//         var hours = timer.getHours();
//         var minutes = timer.getMinutes();
//         var seconds = timer.getSeconds();

//         // Get values from html

//         var monthsNode = countdown.getElementsByClassName(
//           "premium-countdown__digits-months"
//         );
//         var weeksNode = countdown.getElementsByClassName(
//           "premium-countdown__digits-weeks"
//         );
//         var daysNode = countdown.getElementsByClassName(
//           "premium-countdown__digits-days"
//         );
//         var hoursNode = countdown.getElementsByClassName(
//           "premium-countdown__digits-hours"
//         );
//         var minutesNode = countdown.getElementsByClassName(
//           "premium-countdown__digits-minutes"
//         );
//         var secondsNode = countdown.getElementsByClassName(
//           "premium-countdown__digits-seconds"
//         );

//         // Change inner html
//         monthsNode[0].innerHTML = months || 0;
//         weeksNode[0].innerHTML = weeks || 0;
//         daysNode[0].innerHTML = days || 0;
//         hoursNode[0].innerHTML = hours || 0;
//         minutesNode[0].innerHTML = minutes || 0;
//         secondsNode[0].innerHTML = seconds || 0;
//       };

//       var interval = setInterval(function () {
//         counter(countdown);

//         if (timer < 0) {
//           clearInterval(interval);
//           document.getElementById("demo").innerHTML = "EXPIRED";
//         }

//       }, 1000);
//     }
//   });

// });


document.addEventListener("DOMContentLoaded", function () {

  var countdowns = document.getElementById("container");
  var date = document.getElementById("container").getAttribute("data-date");
  
  var timee = new Date(date);
  console.log(timee )

  //  var deadline = new Date("Oct 11, 2019 15:37:25").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var t = timee - now;
    var oneDay = 24 * 60 * 60 * 1000;
    var days = Math.floor(t / oneDay);
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    // document.getElementById("demo").innerHTML = days + "d "
    //   + hours + "h " + minutes + "m " + seconds + "s ";

    // var dddd = document.getElementById("demo").getAttribute("data-date");
    // console.log(dddd + "this is my dddd")
    // var time = new Date(dddd).getTime();
    // console.log(time + "this is my time")

    document.getElementById("days").innerHTML = (days || "0") + "d ";
    document.getElementById("hours").innerHTML = (hours || "0") + "h ";
    document.getElementById("minutes").innerHTML = (minutes || "0") + "m ";
    document.getElementById("seconds").innerHTML = (seconds || "0") + "s ";



    if (t < 0) {
      clearInterval(x);
      // document.getElementById("demo").innerHTML = "EXPIRED";
      console.log("expired")
    }
  }, 1000);

});

// var $date = $("#container").data("date");
// console.log($date);
// var $timee = new Date($date);