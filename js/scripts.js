//business logic

function Ticket(age, time, movie, quantity) {
  this.age = age;
  this.time = time;
  this.movie = movie;
  this.quantity = quantity;
}

Ticket.prototype.price = function() {
  var ticketPrice = 12;
  if ((this.age <= 8) || (this.age >= 65)) {
    ticketPrice *= .9;
  }
  if (this.time < 17) {
    ticketPrice -= 2;
  }
  if ((this.movie === "Lego Batman") || (this.movie === "Lala Land")) {
    ticketPrice += 2;
  }
  if (this.quantity > 1) {
    ticketPrice *= this.quantity;
  }
  return ticketPrice;
}

//user-interface logic
$(document).ready(function() {
  $("form#ticket-calc").submit(function(event) {
    event.preventDefault();

    var inputtedAge = parseInt($("input#age").val());
    var selectedTime = parseFloat($("select#time").val());
    var timeStandard = $("select#time option:selected").text();
    var selectedMovie = $("select#movie-title").val();
    var inputtedQuantity = parseInt($("input#quantity").val());
    var newTicket = new Ticket(inputtedAge, selectedTime, selectedMovie, inputtedQuantity);
    var ticketPrice = newTicket.price();

    $("#ticket-price-display").show();
    $("#ticket-price-display h3").text("$ " + ticketPrice);
    $("ul#ticket-info").append('<li>' + "Age: " + inputtedAge + '</li>');
    $("ul#ticket-info").append('<li>' + "Time: " + timeStandard + '</li>');
    $("ul#ticket-info").append('<li>' + "Movie: " + selectedMovie + '</li>');
    $("ul#ticket-info").append('<li>' + "Number of tickets: " + inputtedQuantity + '</li>');

  });

});
