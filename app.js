$(document).ready(function() {
  
  // Add list item
  $("input[name='shopping_item']").change(function(event) {
    // Prevent browser from keeping list of suggestions and displaying them on input
    event.preventDefault();
    
    // Store item
    var item = $(this).val();
    
    // Check if entry is blank
    if ($.trim(item) === "") {
      event.preventDefault();
      alert('Please enter an item.');
    } else {
      // If entry is not blank, add entry	
      $("<li class='tile'>" + item +
        "<span class='delete'>Delete</span>" + "</li>").prependTo(
        ".shopping_item_list");
      // Reset input field after user enters value
      $("input[name='shopping_item']").val("");
      // Remove middle class on reset to reassign middle to new middle item after addition
      $(".tile").removeClass("middle");
      // Add middle class to new middle items after addition
      $(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
      return false;
    }
    
    // Delete list item
    $("body").on("click", ".delete", function() {
      $(this).parent().remove();
      $(".tile").removeClass("middle");
      $(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
    });
    
    // Cross off list 
    $("body").on("click", ".tile", function() {
      $(this).toggleClass("deleteAction");
    });
    
  }); // end input function
}); // end of ready function