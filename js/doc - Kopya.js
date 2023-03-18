//https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function konuFiltre() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("konu");
  filter = input.value.toUpperCase();
  table = document.getElementById("tablo");
  tr = table.getElementsByTagName("tr");

  if (event.key === "Enter") {
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }

    input.select();
  }
}