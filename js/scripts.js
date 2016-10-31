//business logic
function Destination(place,landmark,activity){
debugger;
  this.place = place
  this.landmark = landmark
  this.activity = activity
}

Destination.prototype.fullList = function() {
  debugger;
  return this.place + " " + this.landmark + " " + this.activity;
}


//user interface
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
debugger;
    var userDestination = $("#inputDestination").val();
    var userLandmark = $("#inputLandmark").val();
    var userActivity = $("#inputActivity").val();

    var newDestination = new Destination(userDestination,userLandmark,userActivity);

    $("ul#output").append("<li><span class='destination'>" + newDestination.fullList() + "</span></li>");

    $(".destination").last().click(function() {
    $("#show-destination").show();
    $("#show-destination h2").text(newDestination.place);
    $(".place").text(newDestination.place);
    $(".landmark").text(newDestination.landmark);
    $(".activity").text(newDestination.activity);
  });
  });
});
