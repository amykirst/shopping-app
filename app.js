$(document).ready(function() {

	// hide delete button
	$(".delete").hide();

	// delete square
	$(".tile").hover(function() {
		$(this).find(".delete").toggle();
	});

	$(".tile").on("click", ".delete", function() {
		$(this).closest("li.tile").remove(); 
		$(".tile").removeClass("middle");	
		$(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
	});

	// cross off list 
	$(".tile").click(function() {
		$(this).toggleClass("deleteAction");
	});

	//add list item



}); // end of ready function

