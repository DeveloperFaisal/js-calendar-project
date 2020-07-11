var dt = new Date();

Months = [
    "January",
    "February",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December" ]
    
document.getElementById("date-str").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = Months[dt.getMonth()];