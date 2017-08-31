// DISPLAY lIST IN THE HTML

function displayArray (firstName,lastName,age){

  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age,

  this.display = function (){

    var table = document.getElementById('table');
    var row = table.insertRow (-1);
    var col1 = row.insertCell(0);
    col1.innerHTML += this.firstName;
    var col2 = row.insertCell(1);
    col2.innerHTML += this.lastName;
    var col3 = row.insertCell(2);
    col3.innerHTML += this.age;
  }

};



var sup = {
  suppression : function (){
  var myNode = document.getElementById("table");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
}
};

var sort = {

  sorting : function (arrayToSort,key){

    arrayToSort.sort(function (a,b){
      return a[key].localeCompare(b[key]);

    });
  }
};

// AJAX REQUEST - RETRIEVING DATA FROM JSON FILE

function loadData() {
  var xhttp = new XMLHttpRequest();
  var array;
  var sortingKey = document.getElementById('selectId').value;

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      array = JSON.parse(this.responseText);
      sup.suppression();
      sort.sorting(array.clients,sortingKey);

      for (var i in array.clients) {
        var test = new displayArray (array.clients[i].firstName,array.clients[i].lastName,array.clients[i].age);
        test.display();
      }
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();

}
