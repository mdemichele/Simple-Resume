
// d3.select("body").select(".post-content").selectAll("svg")
//   .data(dataset)
//   .enter()
//   .append("p")
//   .text(function(d) {
//     return d.country + " has had " + d.may22 + " COVID-19 cases as of May 22";
//   })

var csv = new XMLHttpRequest();
csv.open("GET", "http://localhost:4000/csv/covid19.csv");

csv.onreadystatechange = function() {
  if (this.readyState == this.DONE) {
    var data = this.responseText;
    var parsed = convertToJSON(data);
    console.log(parsed);
  }
}

csv.send();


// This function parses the csv into a JSON object
function convertToJSON(csv) {
  var beginHeaders = /(1\/22\/20)/;
  var endHeaders = /(6\/22\/20)/;
  var headers = csv.split(',');

  var jsonString = '';
  for (var i = 0; i < 156; i++) {
    jsonString += '{' + '"' + headers[i] + '": ""' +'}, ';
  }
  
  //var json = JSON.parse(jsonString);
  return jsonString;
}