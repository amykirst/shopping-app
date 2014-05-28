// On start up:
	// 1. Find spans with a class of "delete" 
	// 2. Hide spans with a class of "delete" - use visibility:hidden

// Adding a new item to list:
	// 1. Listen for click on form
	// 2. Hide input text
	// 3. Listen for change to text input - use change function; will fire when text has changed
	// 4. Create new li in shopping_item_list
	// 5. Append li to list

// Editing squares:
	// 1. Listen for double-click on a list item
	// 2. Turn the list item into an input box
	// 3. Turn it back to text when input box loses focus
	// May use Jeditable plugin: http://www.appelsiini.net/projects/jeditable

// Rearranging squares:
	// 1. Listen for click on square
	// 2. When user drags, follow mouse
	// May use sortable plugin: http://jqueryui.com/sortable/

// Crossing off list:
	// 1. Listen for click on text
	// 2. Change color of square to grey

// Deleting squares:
	// 1. Listen for hover over square
	// 2. Show delete span
	// 3. Listen for click on delete
	// 4. Remove list item 