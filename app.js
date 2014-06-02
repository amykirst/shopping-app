$(document).ready(function() {

	//add list item
	$("input[name='shopping_item']").change(function() {
    	var item = $(this).val();   
    	$("<li class='tile'>" + item + "<span class='delete'>Delete</span>" + "</li>").prependTo(".shopping_item_list");
    	$(".tile").removeClass("middle");   
    	$(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
    	//How do I reset form to placeholder text?
	}); 


	//delete list item
	$(document).on("click", ".delete", function() {
		$(this).closest("li.tile").remove(); 
		$(".tile").removeClass("middle");	
		$(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
	});


	// cross off list 
	$(document).on("click", ".tile", function() {
		$(this).toggleClass("deleteAction");
	});


}); // end of ready function

