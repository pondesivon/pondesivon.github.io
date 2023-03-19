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

/*
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response 
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            empDetails(this);
        }
    };

    // employee.xml is the external xml file
    xmlhttp.open("GET", "https://pondesivon.github.io/icerikler.xml", true);
    xmlhttp.send();
}

function empDetails(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var liste = "<ol>";
    var x = xmlDoc.getElementsByTagName("Icerik");

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        liste += '<li class="str"><a class="bgl" href="'
              + x[i].getAttribute("baglanti")
              + '">'
              + x[i].getAttribute("baslik")
              + "</a></li>";
    }

    liste+= "</ol>";


    // Print the xml data in table form
    document.getElementById("icerik-liste").innerHTML = liste;
}
*/

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response 
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            empDetails(this);
        }
    };

    // employee.xml is the external xml file
    xmlhttp.open("GET", "https://pondesivon.github.io/icerikler.xml", true);
    xmlhttp.send();
}

var aktifSayfa=1;
var sayfaBasiIcerik = 10;

function empDetails(xml) {
    var i;
    var sayi;
    var xmlDoc = xml.responseXML;
    var liste = '<ol start="' + ((aktifSayfa - 1) * sayfaBasiIcerik + 1) + '">"';
    var x = xmlDoc.getElementsByTagName("Icerik");

    var xFiltre = "";

    // Start to fetch the data by using TagName 
    for (i = (aktifSayfa - 1) * sayfaBasiIcerik; i < (aktifSayfa - 1) * sayfaBasiIcerik + sayfaBasiIcerik; i++) {
        liste += '<li class="str"><a class="bgl" href="'
              + x[i].getAttribute("baglanti")
              + '">'
              + x[i].getAttribute("baslik")
              + "</a></li>";
    }

    liste+="</ol>";

/*
    var sayfa;
    for (i = 0; i < x.length/20; i++) {
      sayfa+= '<a onclick="' + "idAta()" + '" class="bgl" id="' + "syf-" + i + '" href="' + '#' + '"'
          + '">'
          + i+1
          + "</a><br>";
    }    

        liste+= "<hr>" + sayfa;
*/
    // Print the xml data in table form
    document.getElementById("icerik-liste").innerHTML = liste;

  }

  function oncekiSayfa() {
    if (aktifSayfa > 1) {
      aktifSayfa = aktifSayfa-1;
    }
    document.getElementById("sayfa").value = aktifSayfa;
  }

  function sonrakiSayfa() {
    aktifSayfa = aktifSayfa+1;
    document.getElementById("sayfa").value = aktifSayfa;
  }