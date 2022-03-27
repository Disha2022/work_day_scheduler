//Add current day
var todaysDate= (moment().format('MMMM Do YYYY, h:mm:ss a'))
var dateText= $("<p>").text(todaysDate) //making new p element
$("#currentDay").replaceWith(dateText);
//Add time, text and save (column can be adjusted using bootstrap)
var timeStart = 8; //business hour start
var timeEnd = 5; //business hour ends

//Create time block
for (let i = 0; i < 9; i++) {
    const element = $("<input>")
    .attr('id', 'to-do');
    var timeGap = timestart+ i
    var timeStamp = $("<p>").text(timeGap)
    
}
$("#submit").click(function() {
   $("#to-do").value
});
