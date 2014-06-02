$(document).ready(function() {

	//add list item
	$("input[name='shopping_item']").change(function() {
    	var item = $(this).val();   
    	$("<li class='tile'>" + item + "<span class='delete'>Delete</span>" + "</li>").prependTo(".shopping_item_list");
    	$(".tile").removeClass("middle");   
    	$(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
	}); 


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



}); // end of ready function

