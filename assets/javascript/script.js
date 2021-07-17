var dayTime = $('#currentDay');
var calendarBlock = document.querySelector('.container');

function displayTime() {
    rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    dayTime.text(rightNow);
}







function createTable() {
    var table = document.createElement('TABLE');
    table.setAttribute("id", "dailyCalendar");
    calendarBlock.appendChild(table);
    
    /* let tableRow = [""];

    for (let i = 0; i < 24; i++){
        tableRow[i] = document.createElement('<td>');
        tableRow.setAttribute("id", "row column-1");
        table.appendChild(tableRow);
    }; */
}

setInterval(displayTime, 1000);
createTable();