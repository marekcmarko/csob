$("#exampleModal").on("shown.bs.modal", function (e) {
	$("#exampleButton").toggleClass("btn-success btn-primary"); //Adds 'a', removes 'b' and vice versa
	$("#exampleButton").text("Modal opened");
});

$("#exampleModal").on("hidden.bs.modal", function (e) {
	$("#exampleButton").toggleClass("btn-success btn-primary"); //Adds 'a', removes 'b' and vice versa
	$("#exampleButton").text("Open modal");
});
