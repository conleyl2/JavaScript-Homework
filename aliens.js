
var $tbody = document.querySelector("tbody");
var $timeInput = document.querySelector("#time");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $durationInput = document.querySelector("#duration");
var $search1Btn = document.querySelector("#search1");
var $search2Btn = document.querySelector("#search2");
var $search3Btn = document.querySelector("#search3");
var $search4Btn = document.querySelector("#search4");
var $search5Btn = document.querySelector("#search5");
var $search6Btn = document.querySelector("#search6");

$search1Btn.addEventListener("click", handleSearchButton1Click);
$search2Btn.addEventListener("click", handleSearchButton2Click);
$search3Btn.addEventListener("click", handleSearchButton3Click);
$search4Btn.addEventListener("click", handleSearchButton4Click);
$search5Btn.addEventListener("click", handleSearchButton5Click);
$search6Btn.addEventListener("click", handleSearchButton6Click);

var filteredAliens = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAliens.length; i++) {

    var aliens = filteredAliens[i];
    var fields = Object.keys(aliens);

    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {

      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = aliens[field];
    }
  }
}

function handleSearchButton1Click() {

  var filterTime = $timeInput.value.trim().toLowerCase();


  filteredAliens = dataSet.filter(function(aliens) {
    var alienstime = aliens.time.toLowerCase();


    return alienstime === filtertime;
  });
  renderTable();
}
function handleSearchButton2Click() {

    var filtercity = $cityInput.value.trim().toLowerCase();
  

    filteredAliens = dataSet.filter(function(aliens) {
      var alienscity = aliens.city.toLowerCase();
  

      return alienscity === filtercity;
    });
    renderTable();
  }

function handleSearchButton3Click() {

    var filterState = $stateInput.value.trim().toLowerCase();
  

    filteredAliens = dataSet.filter(function(aliens) {
      var aliensState = aliens.state.toLowerCase();
  
      return aliensState === filterState;
    });
    renderTable();
  }

function handleSearchButton4Click() {

    var filtercountry = $countryInput.value.trim().toLowerCase();
  
    filteredAliens = dataSet.filter(function(aliens) {
      var alienscountry = aliens.country.toLowerCase();
  
      return alienscountry === filtercountry;
    });
    renderTable();
  }

  function handleSearchButton5Click() {

    var filtershape = $shapeInput.value.trim().toLowerCase();

    filteredAliens = dataSet.filter(function(aliens) {
      var aliensshape = aliens.shape.toLowerCase();

      return aliensshape === filtershape;
    });
    renderTable();
  }
  function handleSearchButton6Click() {

    var filterduration = $durationInput.value.trim().toLowerCase();

    filteredAliens = dataSet.filter(function(aliens) {
      var aliensduration = aliens.duration.toLowerCase();

      return aliensduration === filterduration;
    });
    renderTable();
  }

renderTable();
