//--------------------------------------------------
//li Elementleri İçin Filtreleme Yap
//--------------------------------------------------
//https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function konuFiltre(idDeger) {
  // Declare variables
  var input, filter, table, li, td, i, txtValue;
  input = document.getElementById(idDeger);
  filter = input.value.toLocaleLowerCase('tr-TR');
  liste = document.getElementById("liste");
  li = liste.getElementsByTagName("li");

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

    input.select();
  }
}

function konuFiltreKey(idDeger) {
  // Declare variables
  var input, filter, table, li, td, i, txtValue;
  input = document.getElementById(idDeger);
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

//--------------------------------------------------
//Bütün İçerikleri XML Üzerinden Listele
//--------------------------------------------------
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
    xmlhttp.open("GET", "https://pondesivon.github.io/icerikler.xml", true);
    xmlhttp.send();
}

function icerikListe(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var liste = "<ol id='liste'>";
    var x = xmlDoc.getElementsByTagName("Icerik");
    var y = document.getElementById("ara");

    // Start to fetch the data by using TagName 
        for (i = 0; i < x.length - 1; i++) {
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


//--------------------------------------------------
//Son N İçeriği XML Üzerinden Listele
//--------------------------------------------------
function xmlDosyaYukle(sayi) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response 
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            icerikListe(this, sayi);
        }
    };

    // external xml file
    xmlhttp.open("GET", "https://pondesivon.github.io/icerikler.xml", true);
    xmlhttp.send();
}

function icerikListe(xml, sayi) {
    var i;
    var xmlDoc = xml.responseXML;
    var liste = "<ol id='liste' class='list-group'>";
    liste+='<li class="list-group-item bg-secondary text-white">Son ' + sayi + ' İçerik</li>'
    var x = xmlDoc.getElementsByTagName("Icerik");
    // Start to fetch the data by using TagName 
    for (i = x.length - 1 ; i >= (x.length - sayi); i--) {
        liste += '<li class="list-group-item">'
              + '<a class="bgl" href="' + x[i].getAttribute("baglanti") + '">'
              + x[i].getAttribute("baslik")
              + "</a></li>";
    }

    liste+= "</ol>";


    // Print the xml data in table form
    document.getElementById("icerik-liste").innerHTML = liste;
    //y.select();
}

//--------------------------------------------------
//input Elementi İçin Yazılmış Odaklanma Fonksiyonu
//--------------------------------------------------
function aramaKutusunaOdaklan(idAdi) {
    var degisken = document.getElementById(idAdi);
    degisken.select();
}

//--------------------------------------------------
//input Elementi İçin Yazılmış Temizleme Fonksiyonu
//--------------------------------------------------
function valueTemizle(idAdi) {
    var degisken = document.getElementById(idAdi);
    degisken.value="";
}

//--------------------------------------------------
//Sayfanın Başına Veya Sonuna Gitme Fonksiyonu
//--------------------------------------------------
function sayfaninBasinaGit() {
    window.scrollTo(0, 0);
}

function sayfaninSonunaGit() {
    window.scrollTo(0, document.body.scrollHeight);
}