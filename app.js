$(document).ready(function() {
	
	// hide delete button
	$(".delete").hide();

	// delete square
	$(".tile").hover(function() {
		$(this).find(".delete").toggle();
	});

	$(".tile").on("click", ".delete", function() {
		$(this).closest(".tile").remove(); // How do I get the other tiles to slide over?
	});

	// cross off list 
	$(".tile").click(function() {
		$(this).toggleClass("deleteAction");
	});

	// add new list item
	$("input[name='shopping_item']").change(function() { 
		var item = $(this).val();	
		$(item).addClass("title");
		$("<li>"+ item +"</li>").prependTo(".shopping_item_list") //How do I get the list item to add?
	});

}); // end of ready function

// How do we add pink color to every other square?

// function setupTileDisplay() {
//	$(".tile").removeClass("floatLeft floatRight");
//	$(".tile").remove(".clear");
// }

