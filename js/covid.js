// Get the month input value


var data = d3.map();

d3.queue()
    .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .defer(d3.csv, "/csv/covid19.csv", function(d) { data.set(d["Country"], +d["6/22/20"]) })
    .await(ready);
    
function ready(error, geoData, covidData) {
// Get month input value 
 
// Set SVG dimensions
var width = 800;
var height = 800;

var svg = d3.select("#covid-1")
            .append("svg")
              .attr("width", width)
              .attr("height", height);
    
// Choose the type of geographical projection          
var projection = d3.geoMercator()
  .scale(130)
  .center([0, 80])
  .translate([width / 2, height - 700]);

// Set Color scale 
var colorScale = d3.scaleThreshold()
  .domain([0, 500, 1000, 10000, 100000, 500000, 1000000])
  .range(d3.schemeReds[8]);
  
svg.append("g")
  .selectAll("path")
  .data(geoData.features)
  .enter()
  .append("path")
    .attr("d", d3.geoPath()
      .projection(projection))
    .attr("fill", function(d) {
      d.total = data.get(d["properties"]["name"]) || 0;
      return colorScale(d.total);
    });
  
 // Create Legend 
 var wlegend = 100;
 var hlegend = 150;
 
 var key = d3.select("#covid-1")
  .append("svg")
    .attr("width", wlegend)
    .attr("height", hlegend)
    .style("position", "absolute")
    .style("left", "20px")
    .style("top", "30px");
    
  var legend1 = key.append("defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "100%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");
    
  legend1.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", colorScale(1000000))
    .attr("stop-opacity", 1);
    
  legend1.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", colorScale(0))
    .attr("stop-opacity", 1);
    
  key.append("rect")
    .attr("width", wlegend - 50)
    .attr("height", hlegend)
    .style("fill", "url(#gradient)")
    .attr("transform", "translate(0,10)");
    
  var yLegend = d3.scaleLinear()
    .domain([10, 1000000])
    .range([hlegend, 0]);
    
  var yAxisLegend = d3.axisRight(yLegend)
    .ticks(5);
  
  key.append("g")
    .attr("transform", "translate(41,10)")
    .call(yAxisLegend);

}