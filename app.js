// Troubleshooting delete and cross off:



$(document).ready(function() {
  
  // Add list item
  $("input[name='shopping_item']").change(function(event) {
    event.preventDefault(); // Prevents browser from keeping list of suggestions and displaying them on input
      var item = $(this).val();   

      // Check if string is emtpy
      if($.trim(item) === "") {
        alert("Please enter an item");
      } else {

      // Add list item if not empty
      $("<li class='tile'>" + item + "<span class='delete'>Delete</span>" + "</li>").prependTo(".shopping_item_list");
      $("input[name='shopping_item']").val(""); // Resets input field
      $(".tile").removeClass("middle");   
      $(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
      return false;
      }
  }); // end input function
    
    // Delete list item
    $("body").on("click", ".delete", function() {
      //alert("The delete button was clicked");
      $(this).parent().remove();
      $(".tile").removeClass("middle");
      $(".shopping_item_list li:nth-child(3n+2)").addClass("middle");
    });
    
    // Cross off list 
    $("body").on("click", ".tile", function() {
      $(this).toggleClass("deleteAction");
    });
    
 
}); // end of ready function