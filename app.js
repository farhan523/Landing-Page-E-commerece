let navbar = document.querySelector('.navbar3');
let navbar2 = document.querySelector('.navbar');
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        navbar.style.display="flex";
  } else {
    navbar.style.display="none";
  }
}

// timer





 
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    let day =  document.getElementById('days');
let time =  document.getElementById('hours');
let minute =  document.getElementById('minutes');
let second =  document.getElementById('seconds');

    day.innerHTML = days;
    time.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);