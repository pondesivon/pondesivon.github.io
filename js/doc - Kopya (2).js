//https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function konuFiltre() {
  // Declare variables
  var input, filter, table, li, td, i, txtValue;
  input = document.getElementById("konu");
  filter = input.value.toLocaleLowerCase('tr-TR');
  table = document.getElementById("liste");
  li = table.getElementsByTagName("li");

  if (event.key === "Enter") {
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a) {
        txtValue = a.textContent || a.innerText;
        if (txtValue.toLocaleLowerCase('tr-TR').indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }

    input.select();
  }
}
