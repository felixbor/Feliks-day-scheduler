//setting global variabes
var savebtn = $("button")
var timevalue = dayjs().format('H')

$(function () {
  // displaying current time on the screen
  var timeDisplay = $('#currentDay');
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
  }
 // running loop for adding class  to each time block
  $(".time-block").each(function () {
    var blockTime = parseFloat($(this).attr("id"));
    if (blockTime < timevalue) {

      $(this).addClass("past");
    }
    else if (blockTime == timevalue) {

      $(this).addClass("present");
    }
    else {
      $(this).addClass("future");
    }
  })

 // saving items into local storage
  saveLocalstorage()
  function saveLocalstorage() {
    savebtn.on("click", function () {
      var userInput = $(this).siblings(".description").val();
      var timetable = $(this).parent().attr("id");
      localStorage.setItem(timetable, userInput);
    });

    // getting data from local storage
    for (let index = 7; index < 23; index++) {
      $(`#${index}hours .description`).val(localStorage.getItem(`${index}hours`));
    }
  }
 // updating time every second
  displayTime();
  setInterval(displayTime, 1000);
});

