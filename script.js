function date() {
  var display_date = document.getElementById("display-date");
  const date = new Date();

  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "unknown";
      break;
  }
  if (day < 10) {
    day = "0" + day;
  }

  let currentDate = day + "-" + month + "-" + year;
  document.getElementById("display-date").innerHTML = currentDate.toString();
}
