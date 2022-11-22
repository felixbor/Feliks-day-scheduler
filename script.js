
var savebtn =$("button")
var input = document.querySelector("description");

var timevalue=dayjs().format('H')
console.log(timevalue)
var idtime = $("#21hours").attr("id")
console.log(idtime)
 var idTimeNumber=parseFloat(idtime);
 console.log(idTimeNumber)
 //var blockTime =parseFloat($("#23hours").attr("id"));
// console.log(blockTime)
 
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var timeDisplay = $('#currentDay');
function displayTime(){
var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
timeDisplay.text(rightNow);}

$(".time-block").each(function () {
  var blockTime =parseFloat($(this).attr("id"));

  
  if (blockTime < timevalue) {
    
      $(this).addClass("past");
  }
  else if (blockTime == timevalue){
  
      $(this).addClass("present");
  }
  else {
      $(this).addClass("future");

  }
})

//if (idTimeNumber<timevalue){
  //$("#23hours").addClass("past")
//} 
//if (idTimeNumber>timevalue){$("#23hours").addClass("future")}

saveLocalstorage()
function saveLocalstorage(){
  savebtn.on ("click", function () {
  var userInput=$(this).siblings(".description").val();
  var timetable= $(this).parent().attr ("id");
   localStorage.setItem(timetable,userInput);
});


}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  displayTime();
setInterval(displayTime, 1000);
});

