let dt = new Date();
function RenderDate() {
    dt.setDate(1);
let day = dt.getDay();

let endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,0
).getDate();

let prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(),0
).getDate();

let toDay = new Date()
console.log(toDay);

Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December" ];
    
document.getElementById("date-str").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = Months[dt.getMonth()];

let cells = '';

for (let i = day; i > 0; i--) {
    cells+= "<div class='prev-dayes'>" + (prevDate -i +1) + "</div>";
    
};
for (let index = 1; index <= endDate; index++) {
    if (index == toDay.getDate() && dt.getMonth() == toDay.getMonth()) {
        cells+= "<div class='activedayes'>" + index + "</div>"; 
    }else{
        cells+= "<div>" + index + "</div>";
    }
    
};
document.getElementsByClassName("dayes")[0].innerHTML = cells;

}
function moveDate(params) {
    if (params == 'prev') {
      dt.setMonth(dt.getMonth() -1);
    } else if(params == 'next'){
        dt.setMonth(dt.getMonth() +1);
    }
    RenderDate();
};