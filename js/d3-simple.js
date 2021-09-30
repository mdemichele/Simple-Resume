// 2010 - 2011 Chart 
d3.csv("/csv/tesla1.csv", function(d) {
  const parseDate = d3.utcParse("%m/%d/%Y");
  const date = parseDate(d.Date);
  return {
    adj_close: +d["Adj Close"],
    Close: +d.Close,
    Date: date,
    High: +d.High,
    Low: +d.Low,
    Open: +d.Open,
    Volume: +d.Volume
  };
}).then(function(data) {
  
  var width = 600;
  var height = 600;
  var padding = 20;
  var margin = 20;
  var maxPrice = d3.max(data, function(d) { return d.High; });
  var minPrice = d3.min(data, function(d) { return d.Low; });
  
  var meanPrice = d3.deviation(data, function(d) { return d.High; });
  
  var xScale = d3.scaleBand()
                 .domain(d3.utcDay
                   .range(data[0].Date, +data[data.length - 1].Date + 1)
                   .filter(d => d.getUTCDay() !== 0 && d.getUTCDay() !== 6))
                 .range([margin, width - margin])
                 .padding(0.2);
  
  var yScale = d3.scaleLog()
                 .domain([minPrice, maxPrice])
                 .rangeRound([height - margin, margin]);
  
  var xAxis = d3.axisBottom(xScale)
                .tickValues(d3.utcMonday
                  .every(width > 720 ? 1 : 2)
                  .range(data[0].Date, data[data.length - 1].Date))
                .tickFormat(d3.utcFormat("%-m/%-d"))
                .tickSizeOuter(0);
  
  var yAxis = d3.axisLeft(yScale)
                .tickFormat(d3.format("$~f"))
                .tickValues(d3.scaleLinear().domain(yScale.domain()).ticks())
                .tickSize(-width + 2 * padding)
                .tickSizeOuter(0);
  

  
  var svg = d3.select("#svg-1")
      .attr("viewBox", [0, 0, width, height])
      
  svg.append("g")
      .attr("transform", "translate(0," + (height - padding) + ")")
      .call(xAxis)
      .style("font-size", "8px");
      
  svg.append("g")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis)
      .attr("stroke-opacity", 0.2)
      .attr("stroke-width", 0.5)
      .style("font-size", "8px");
    
  var g = svg.append("g")
      .attr("stroke-linecap", "round")
      .attr("stroke", "black")
    .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", d => `translate(${xScale(d.Date)},0)`)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
    
  g.append("line")
    .attr("y1", d => yScale(d.Low))
    .attr("y2", d => yScale(d.High))
    
  g.append("line")
    .attr("y1", d => yScale(d.Low))
    .attr("y2", d => yScale(d.Close))
    .attr("stroke-width", xScale.bandwidth())
    .attr("stroke", d => d.Open > d.Close ? d3.schemeSet1[0]
        : d.Close > d.Open ? d3.schemeSet1[2]
        : d3.schemeSet1[8]);

d3.select("#svg-1")
    .append("text")
      .attr("x", width / 2)
      .attr("y", padding - 10)
      .style("text-anchor", "middle")
      .style("font-size", "12px")
      .text("Tesla Stock Prices 2010-2011");
  
function handleMouseOver(d, i) {
  svg.append("text")
      .attr("id", "test")
      .attr("x", 50)
      .attr("y", 50)
      .text(function() {
        return "Close: $" + d.Close.toFixed(2);
      })
      .style("font-size", "8px");
}

function handleMouseOut(d, i) {
  d3.select("#test").remove();
}

// Insert Standard Deviation in post 
var deviationDisplay = document.getElementById("tesla-deviation-1");
var deviation = d3.deviation(data, function(d) { return d.Close });
var deviationString = "<strong>Standard Deviation: " + deviation.toFixed(4) + "</strong>";
deviationDisplay.insertAdjacentHTML('beforeend', deviationString);

// Insert Mean in post 
var meanDisplay = document.getElementById("tesla-mean-1");
var mean = d3.mean(data, function(d) { return d.Close });
var meanString = "<strong>Mean Price: $" + mean.toFixed(4) + "</strong>";
meanDisplay.insertAdjacentHTML('beforeend', meanString);

})

// 2016 - 2017 Chart 
d3.csv("/csv/tesla2.csv", function(d) {
  const parseDate = d3.utcParse("%m/%d/%Y");
  const date = parseDate(d.Date);
  return {
    adj_close: +d["Adj Close"],
    Close: +d.Close,
    Date: date,
    High: +d.High,
    Low: +d.Low,
    Open: +d.Open,
    Volume: +d.Volume
  };
}).then(function(data) {
  
  var width = 600;
  var height = 600;
  var padding = 20;
  var margin = 20;
  var maxPrice = d3.max(data, function(d) { return d.High; });
  var minPrice = d3.min(data, function(d) { return d.Low; });
  
  var meanPrice = d3.deviation(data, function(d) { return d.High; });
  
  var xScale = d3.scaleBand()
                 .domain(d3.utcDay
                   .range(data[0].Date, +data[data.length - 1].Date + 1)
                   .filter(d => d.getUTCDay() !== 0 && d.getUTCDay() !== 6))
                 .range([margin, width - margin])
                 .padding(0.2);
  
  var yScale = d3.scaleLog()
                 .domain([minPrice, maxPrice])
                 .rangeRound([height - margin, margin]);
  
  var xAxis = d3.axisBottom(xScale)
                .tickValues(d3.utcMonday
                  .every(width > 720 ? 1 : 2)
                  .range(data[0].Date, data[data.length - 1].Date))
                .tickFormat(d3.utcFormat("%-m/%-d"))
                .tickSizeOuter(0);
  
  var yAxis = d3.axisLeft(yScale)
                .tickFormat(d3.format("$~f"))
                .tickValues(d3.scaleLinear().domain(yScale.domain()).ticks())
                .tickSize(-width + 2 * padding)
                .tickSizeOuter(0);
  

  
  var svg = d3.select("#svg-2")
      .attr("viewBox", [0, 0, width, height])
      
  svg.append("g")
      .attr("transform", "translate(0," + (height - padding) + ")")
      .call(xAxis)
      .style("font-size", "8px");
      
  svg.append("g")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis)
      .attr("stroke-opacity", 0.2)
      .attr("stroke-width", 0.5)
      .style("font-size", "8px");
    
  var g = svg.append("g")
      .attr("stroke-linecap", "round")
      .attr("stroke", "black")
    .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", d => `translate(${xScale(d.Date)},0)`)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
    
  g.append("line")
    .attr("y1", d => yScale(d.Low))
    .attr("y2", d => yScale(d.High))
    
  g.append("line")
    .attr("y1", d => yScale(d.Low))
    .attr("y2", d => yScale(d.Close))
    .attr("stroke-width", xScale.bandwidth())
    .attr("stroke", d => d.Open > d.Close ? d3.schemeSet1[0]
        : d.Close > d.Open ? d3.schemeSet1[2]
        : d3.schemeSet1[8]);

d3.select("#svg-2")
    .append("text")
      .attr("x", width / 2)
      .attr("y", padding - 10)
      .style("text-anchor", "middle")
      .style("font-size", "12px")
      .text("Tesla Stock Prices 2015-2016");
  
function handleMouseOver(d, i) {
  svg.append("text")
      .attr("id", "test")
      .attr("x", 50)
      .attr("y", 50)
      .text(function() {
        return "Close: $" + d.Close.toFixed(2);
      })
      .style("font-size", "8px");
}

function handleMouseOut(d, i) {
  d3.select("#test").remove();
}

// Insert Standard Deviation in post 
var deviationDisplay2 = document.getElementById("tesla-deviation-2");
var deviation2 = d3.deviation(data, function(d) { return d.Close });
var deviationString2 = "<strong>Standard Deviation: " + deviation2.toFixed(4) + "</strong>";
deviationDisplay2.insertAdjacentHTML('beforeend', deviationString2);

// Insert Mean in post 
var meanDisplay2 = document.getElementById("tesla-mean-2");
var mean2 = d3.mean(data, function(d) { return d.Close });
var meanString2 = "<strong>Mean Price: $" + mean2.toFixed(4) + "</strong>";
meanDisplay2.insertAdjacentHTML('beforeend', meanString2);


})
