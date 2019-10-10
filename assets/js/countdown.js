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


// document.addEventListener("DOMContentLoaded", function () {

//   var countdowns = document.getElementById("container");
//   var date = document.getElementById("container").getAttribute("data-date");

//   var timee = new Date(date);
//   console.log(timee)

//   var x = setInterval(function () {
//     var now = new Date().getTime();
//     var t = timee - now;
//     var oneDay = 24 * 60 * 60 * 1000;
//     var days = Math.floor(t / oneDay);
//     var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((t % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHTML = (days || "0") + "d ";
//     document.getElementById("hours").innerHTML = (hours || "0") + "h ";
//     document.getElementById("minutes").innerHTML = (minutes || "0") + "m ";
//     document.getElementById("seconds").innerHTML = (seconds || "0") + "s ";

//     if (t < 0) {
//       clearInterval(x);
//       console.log("expired")
//     }
//   }, 1000);

// });


/**************** Jquery Select *************/

// jQuery(document).ready(function ($) {
//   setTimeout(() => {

//     var $countdowns = $(".premium-countdown__wrap");
//     console.log($countdowns);
//     if (!$countdowns) return;

//     for (var $i = 0; $i < $countdowns.length; $i++) {
//       var $countdown = $countdowns[$i];
//       console.log($countdown)
//       var $counter = function ($countdown) {

//         // var $dateNode = $countdown.getElementsByClassName("premium-countdown__container");
//         // console.log($dateNode)
//         // var $date = $dateNode[0].getAttribute("data-date")


//         var $block = $("#container");
//         console.log($block);
//         var $date = $block.attr("data-date")
//         console.log($date);
//         var $new = new Date($date);
//         console.log($new);

//         var $now = new Date().getTime();
//         var $timer = $new - $now;
//         var $oneDay = 24 * 60 * 60 * 1000;
//         var $days = Math.floor($timer / $oneDay);
//         var $weeks = Math.floor($days / 7);
//         var $months = Math.floor($weeks / 4);
//         var $hours = Math.floor(($timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var $minutes = Math.floor(($timer % (1000 * 60 * 60)) / (1000 * 60));
//         var $seconds = Math.floor(($timer % (1000 * 60)) / 1000);

//         $("#months").text($months || "0");
//         $("#weeks").text($weeks || "0");
//         $("#days").text($days || "0");
//         $("#hours").text($hours || "0");
//         $("#minutes").text($minutes || "0");
//         $("#seconds").text($seconds || "0");

//         if ($timer < 0) {
//           console.log("Countdown was Expired")
//         }

//       }// end counter

//       var $interval = setInterval(function() {
//         $counter($countdown);
//       }, 1000);

//     } //end for loop

//   }, 1000);
// });


        // var $new = new Date('2019-10-24 21:22:00'.replace(' ', 'T'));
        // var $new = new Date(`$date`.replace(' ', 'T'))
        // var $new = moment($date, 'YYYY-MM-DD HH:mm:ss').toDate();
        // var $r = $new.toString('dddd, MMMM ,yyyy');



// jQuery(document).ready(function ($) {
//   setTimeout(() => {

//       var $block = $(`#container`);
//       console.log($block);
//       var $date = $block.attr("data-date")
//       console.log($date);
//       var $new = new Date($date);
//       console.log($new);
//       var $interval = setInterval(function () {
//           // var $new = new Date('2019-10-24 21:22:00'.replace(' ', 'T'));
//           // var $new = new Date(`$date`.replace(' ', 'T'))
//           // var $new = moment($date, 'YYYY-MM-DD HH:mm:ss').toDate();
//           // var $r = $new.toString('dddd, MMMM ,yyyy');
//           var $now = new Date().getTime();
//           var $timer = $new - $now;
//           var $oneDay = 24 * 60 * 60 * 1000;
//           var $days = Math.floor($timer / $oneDay);
//           var $weeks = Math.floor($days / 7);
//           var $months = Math.floor($weeks / 4);
//           var $hours = Math.floor(($timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//           var $minutes = Math.floor(($timer % (1000 * 60 * 60)) / (1000 * 60));
//           var $seconds = Math.floor(($timer % (1000 * 60)) / 1000);

//           $("#months").text($months || "0");
//           $("#weeks").text($weeks || "0");
//           $("#days").text($days || "0");
//           $("#hours").text($hours || "0");
//           $("#minutes").text($minutes || "0");
//           $("#seconds").text($seconds || "0");

//           if ($timer < 0) {
//               console.log("Countdown was Expired")
//           }

//       }, 1000);

//   }, 1000);
// });