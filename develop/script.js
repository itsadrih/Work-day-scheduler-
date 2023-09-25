// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
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

  //
  $(document).ready(function () {

    $('.saveBtn').on('click', function (){
      var input = $(this).siblings('.description').val()
      var timeId = $(this).parent().attr('id')
      localStorage.setItem(timeId, input)
      console.log(timeId, input)
    })
  
    let section1 = $("#hour-9 .description");
    let section2 = $("#hour-10 .description");
    let section3 = $("#hour-11 .description");
    let section4 = $("#hour-12 .description");
    let section5 = $("#hour-1 .description");
    let section6 = $("#hour-2 .description");
    let section7 = $("#hour-3 .description");
    let section8 = $("#hour-4 .description");
    let section9 = $("#hour-5 .description");
    let section10 = $("#hour-6 .description");
    let section11 = $("#hour-7 .description");
    let section12 = $("#hour-8 .description");
  
    section1.val(localStorage.getItem("hour-9"));
    section2.val(localStorage.getItem("hour-10"));
    section3.val(localStorage.getItem("hour-11"));
    section4.val(localStorage.getItem("hour-12"));
    section5.val(localStorage.getItem("hour-1"));
    section6.val(localStorage.getItem("hour-2"));
    section7.val(localStorage.getItem("hour-3"));
    section8.val(localStorage.getItem("hour-4"));
    section9.val(localStorage.getItem("hour-5"));
    section10.val(localStorage.getItem("hour-6"));
    section11.val(localStorage.getItem("hour-7"));
    section12.val(localStorage.getItem("hour-8"));
  
    
    var date = dayjs().format('MM-DD-YYYY');
    $('#currentDay').text(date);
  
    function timeCheck() {
      var currentHour = dayjs().hour()
  
      $('.time-block').each(function(){
        var timeSlot = parseInt($(this).attr('id').split('-')[1])
        var formattedTimeSlot = (timeSlot < 10) ? '0' + timeSlot : timeSlot;
  
        if(parseInt(formattedTimeSlot) < currentHour){
          $(this).removeClass('future, present').addClass('past');
        } else if (parseInt(formattedTimeSlot) === currentHour){
          $(this).removeClass('future, past').addClass('present');
        } else {
          $(this).removeClass('present, past').addClass('future');
        }
      });
    }
    
    })