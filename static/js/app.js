// From data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("#dataTbl");

// Getting a reference to the filter table button 
var filterBtn = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

// Load ufo data into a table
function loadTbl() {
tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
}
// Search ufo data for specific date
function filterDate(dateFind) {
    return dateFind.datetime == inputField.node().value.trim();
}
// Filter Button submit user input 
filterBtn.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Find ufo data by date
  tableData = data.filter(filterDate);
  // Clear table
  tbody = d3.select("#dataTbl").html("");
  // Re-load table
  loadTbl();
});

// Create table for the first time on page load/refresh
loadTbl();

