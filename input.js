
$("#submit").on("click", function(event) {
  event.preventDefault();
  var newReservation = {
    name: $("#reserve_name").val().trim(),
    phone: $("#reserve_phone").val().trim(),
    email: $("#reserve_email").val().trim(),
    id: $("#reserve_uniqueID").val().trim()
  };

  if (reservations.length <= 5) {
	  $.post("/api/tables", newReservation)
	  .done(function(data) {
	    console.log(data);
	    alert("Adding to tables");
	  });
  } else if (reservations.length > 5) {
  	  $.post("/api/waitlist", newReservation)
	  .done(function(data) {
	    console.log(data);
	    alert("Adding to waitlist");
	  });
  }


});
