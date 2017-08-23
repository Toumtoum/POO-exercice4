function loadDoc() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      var array = JSON.parse(this.responseText);
      alert(array);
    }
  };
  xhttp.open("GET", "data-json.txt", true);
  xhttp.send();
}
