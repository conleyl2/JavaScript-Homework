// Get references to the tbody element, input field and button
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

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$search1Btn.addEventListener("click", handleSearchButton1Click);
$search2Btn.addEventListener("click", handleSearchButton2Click);
$search3Btn.addEventListener("click", handleSearchButton3Click);
$search4Btn.addEventListener("click", handleSearchButton4Click);
$search5Btn.addEventListener("click", handleSearchButton5Click);
$search6Btn.addEventListener("click", handleSearchButton6Click);

// Set filteredAliens to aliensData initially
var filteredAliens = dataSet;

// renderTable renders the filteredAliens to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAliens.length; i++) {
    // Get get the current aliens object and its fields
    var aliens = filteredAliens[i];
    var fields = Object.keys(aliens);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the aliens object, create a new cell at set its inner text to be the current value at the current aliens's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = aliens[field];
    }
  }
}

function handleSearchButton1Click() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterTime = $timeInput.value.trim().toLowerCase();

  // Set filteredAliens to an array of all Aliens whose "state" matches the filter
  filteredAliens = dataSet.filter(function(aliens) {
    var alienstime = aliens.time.toLowerCase();

    // If true, add the aliens to the filteredAliens, otherwise don't add it to filteredAliens
    return alienstime === filtertime;
  });
  renderTable();
}
function handleSearchButton2Click() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filtercity = $cityInput.value.trim().toLowerCase();
  
    // Set filteredAliens to an array of all Aliens whose "city" matches the filter
    filteredAliens = dataSet.filter(function(aliens) {
      var alienscity = aliens.city.toLowerCase();
  
      // If true, add the aliens to the filteredAliens, otherwise don't add it to filteredAliens
      return alienscity === filtercity;
    });
    renderTable();
  }

function handleSearchButton3Click() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterState = $stateInput.value.trim().toLowerCase();
  
    // Set filteredAliens to an array of all Aliens whose "state" matches the filter
    filteredAliens = dataSet.filter(function(aliens) {
      var aliensState = aliens.state.toLowerCase();
  
      // If true, add the aliens to the filteredAliens, otherwise don't add it to filteredAliens
      return aliensState === filterState;
    });
    renderTable();
  }

function handleSearchButton4Click() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filtercountry = $countryInput.value.trim().toLowerCase();
  
    // Set filteredAliens to an array of all Aliens whose "country" matches the filter
    filteredAliens = dataSet.filter(function(aliens) {
      var alienscountry = aliens.country.toLowerCase();
  
      // If true, add the aliens to the filteredAliens, otherwise don't add it to filteredAliens
      return alienscountry === filtercountry;
    });
    renderTable();
  }

  function handleSearchButton5Click() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filtershape = $shapeInput.value.trim().toLowerCase();
  
    // Set filteredAliens to an array of all Aliens whose "shape" matches the filter
    filteredAliens = dataSet.filter(function(aliens) {
      var aliensshape = aliens.shape.toLowerCase();
  
      // If true, add the aliens to the filteredAliens, otherwise don't add it to filteredAliens
      return aliensshape === filtershape;
    });
    renderTable();
  }
  function handleSearchButton6Click() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterduration = $durationInput.value.trim().toLowerCase();
  
    // Set filteredAliens to an array of all Aliens whose "duration" matches the filter
    filteredAliens = dataSet.filter(function(aliens) {
      var aliensduration = aliens.duration.toLowerCase();
  
      // If true, add the aliens to the filteredAliens, otherwise don't add it to filteredAliens
      return aliensduration === filterduration;
    });
    renderTable();
  }
// Render the table for the first time on page load
renderTable();
