// METHOD HANDLING HTML

var managingHTML = {

  displayArray : function (array) {

    for (var i in array) {

      var table = document.getElementById('table');
      var row = table.insertRow (-1);
      var col1 = row.insertCell(0);
      col1.innerHTML += array[i].firstName;
      var col2 = row.insertCell(1);
      col2.innerHTML += array[i].lastName;
      var col3 = row.insertCell(2);
      col3.innerHTML += array[i].age;

    }
  },

  sortingArray : function (arrayToSort,key){
    arrayToSort.sort(function (a,b){
      return a[key].localeCompare(b[key]);
    });
  this.displayArray(arrayToSort);
  },

  clearingTable : function (){

  var myNode = document.getElementById("table");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
}
};


// AJAX REQUEST

var xhttp = new XMLHttpRequest(), monResultat;

xhttp.open("POST", "data.json");
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      monResultat = JSON.parse(xhttp.responseText);
      };
}
xhttp.send();

//---------------------------------SCRIPT---------------------------------------

document.getElementById('btn').addEventListener('click',function (){
  var sortingKey = document.getElementById('selectId').value;
  managingHTML.clearingTable();
  managingHTML.sortingArray(monResultat.clients,sortingKey);
  console.log(sortingKey);
});
