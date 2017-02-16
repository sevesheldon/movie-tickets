//business logic

function Ticket(movie, time, age, quantity) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.quantity = quantity;
}

Ticket.protoype.price = function() {
  var ticketPrice = 12;
  if ((this.age <= 8) || (this.age >= 65)) {
    ticketPrice *= .9;
  }
  if (this.time < 17) {
    ticketPrice -= 2;
  }
  if ((this.movie === "Lego Batman") || (this.movie === "Lala Land")) {  //use id or actual name??
    ticketPrice += 2;
  }
  if (this.quantity > 1) {
    ticketPrice * this.quantity;
  }
  return ticketPrice;
}



//user-interface logic
$(document).ready(function() {
  $("form#ticket-calc").submit(function(event) {
    event.preventDefault();

    var inputtedAge = parseInt($("input#age").val());
    var selectedTime = parseFloat($("select#time").val());
    var selectedMovie = $("select#movie-title").val();
    var inputtedQuantity = parseInt($("input#quantity").val());

    console.log(inputtedAge);
    console.log(selectedTime);
    console.log(selectedMovie);
    console.log(inputtedQuantity);

    $("#ticket-price-display").show();
  });

});
