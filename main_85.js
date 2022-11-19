menu_list_array = [ "Veg Margherita Pizza",                  
  french fries, tacos, pizza                                       ]; //Add more Pizza item names

function getmenu()
{
    var htmldata="";
    var item = document.getElementById("pizza").value;
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("      pizza   ").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("    display_menu     ").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.     (item);
}

