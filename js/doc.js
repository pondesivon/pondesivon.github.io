//https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function konuFiltre() {
  // Declare variables
  var input, filter, table, li, td, i, txtValue;
  input = document.getElementById("konu");
  filter = input.value.toLocaleLowerCase('tr-TR');
  liste = document.getElementById("liste");
  li = liste.getElementsByTagName("li");

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

function xmlDosyaYukle() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response 
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            icerikListe(this);
        }
    };

    // employee.xml is the external xml file
    xmlhttp.open("GET", "http://localhost/pondesivon.github.io/icerikler.xml", true);
    xmlhttp.send();
}

function icerikListe(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var liste = "<ol id='liste'>";
    var x = xmlDoc.getElementsByTagName("Icerik");
    var y = document.getElementById("ara");

    // Start to fetch the data by using TagName 
        for (i = 0; i < x.length; i++) {
            if (x[i].getAttribute("baslik").toLocaleLowerCase('tr-TR').includes(y.value.toLocaleLowerCase('tr-TR'))) {
            liste += '<li class="str"><a class="bgl" target="_blank" href="'
                  + x[i].getAttribute("baglanti")
                  + '">'
                  + x[i].getAttribute("baslik")
                  + "</a></li>";
        }
    }

    liste+= "</ol>";


    // Print the xml data in table form
    document.getElementById("icerik-liste").innerHTML = liste;
    //y.select();
}