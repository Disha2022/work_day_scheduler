let todos = JSON.parse(localStorage.getItem("todos"));
if (!todos){
    todos = {}
}
//Add current day
var todaysDate = (moment().format('MMMM Do YYYY, h:mm:ss a'))
var dateText = $("<p>").text(todaysDate) //making new p element
$("#currentDay").replaceWith(dateText);
//Add time, text and save (column can be adjusted using bootstrap)
var timeStart = moment().hour(8); //business hour start

//Create time block
for (let i = 0; i < 9; i++) {
    const wrapper = $("<div>").addClass('row time-block')

    //timeblock
    var timeGap = timeStart.add(1, "hours").format('hh A')
    var timeStamp = $("<p>").text(timeGap).addClass("col-1 hour").appendTo(wrapper)
var currentTime = moment().format("hh A");
var momentCurrent = moment(currentTime, "hh A")
var momentTimeBlock = moment(timeGap,"hh A")

    //input block
    const element = $("<textarea>")
        .attr('id', 'to-do' + i)
        .val(todos[i])
        .addClass('col-10')
        .appendTo(wrapper);

        //adding colors for timestamp
        if (momentCurrent.isAfter(momentTimeBlock)){
            element.addClass("past")
        }
        if (momentCurrent.isSame(momentTimeBlock)){
                element.addClass("present")
        } 
        if (momentCurrent.isBefore(momentTimeBlock)){
            element.addClass("future")
        }

    //buttons
    const myButton = $("<button>")
        .attr('id', 'save' + i)
        .addClass('col-1 saveBtn')
        .click(function(){
            console.log(i)
            todos[i] = element.val();
            localStorage.setItem("todos", JSON.stringify(todos))
        })
        .appendTo(wrapper);
     
//button svg
const myImage = $("<img>").attr("src","assets/images/save.svg")
.appendTo(myButton);

    wrapper.appendTo(".container")

}
$("#submit").click(function () {
    $("#to-do").value
});
