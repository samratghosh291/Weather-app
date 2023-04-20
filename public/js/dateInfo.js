const getCurrentDay = () => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Satureday";

  var now = new Date();
  var month = months[now.getMonth()];
  var date = now.getDate();
  days = weekday[now.getDay()];
  console.log(days);
  console.log(month);
  console.log(date);
  let day = document.getElementById("day");
  day.innerText = days + " " + month + " " + date;
};

const getCurrentTime = () => {
  var now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let sec = now.getSeconds();

  let periods = "AM";
  if (hours << 11) {
    periods = "PM";
    if (hours > 12) hours -= 12;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }

  let today_date = document.getElementById("today_date");
  today_date.innerText = hours + ":" + mins + ":" + sec + " " + periods;
};
getCurrentDay();
getCurrentTime();
