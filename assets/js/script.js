//Add current day
var todaysDate= (moment().format('MMMM Do YYYY, h:mm:ss a'))
var dateText= $("<p>").text(todaysDate) //making new p element
$("#currentDay").replaceWith(dateText);
//Add time, text and save (column can be adjusted using bootstrap)
