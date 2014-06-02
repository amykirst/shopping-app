$(document).ready(function() {

	//add list item
	$("input[name='shopping_item']").change(function(event) {
		event.preventDefault();

    	var item = $(this).val();   
    	$("<li class='tile'>" + item + "<span class='delete'>Delete</span>" + "</li>").prependTo(".shopping_item_list");
    	$("input[name='shopping_item']").val("");
    	$(".tile").removeClass("middle");   
    	$(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
    	return false;
	}); 

	//delete list item
	$("body").on( "click", ".delete", function() {
  		$(this).parent().remove(); 
		$(".tile").removeClass("middle");	
		$(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
	});


	// cross off list 
	$("body").on("click", ".tile", function() {
		$(this).toggleClass("deleteAction");
	}); 


}); // end of ready function

