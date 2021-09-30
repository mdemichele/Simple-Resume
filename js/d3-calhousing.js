d3.csv("../csv/housing.csv", function(data) {
  
  var margin = 120;
  var width = 860;
  var height = 700;
  
  var svg = d3.select("#cal-house-prices-1")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(40,-40)");
  
  var x = d3.scaleLinear()
            .domain([30000, d3.max(data, function(d) { return +d["median_house_value"] })])
            .range([0, width - margin]);
  svg.append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(x));
  
  var histogram = d3.histogram()
        .value(function(d) { return +d["median_house_value"]})
        .domain(x.domain())
        .thresholds(x.ticks(100));
  
  var bins = histogram(data);
  
  var y = d3.scaleLinear()
       .range([height, 0]);
      y.domain([0, d3.max(bins, function(d) { return d.length })]);
  svg.append("g")
      .call(d3.axisLeft(y));
  
  svg.selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) - 1; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#69b3a2");  
});

d3.json("../csv/housing.geojson", function(data) {
  var margin = 100;
  var width = 860;
  var height = 700;
  
  console.log(data["features"]);
  

// Map of median housing prices 
  var svg = d3.select("#cal-house-prices-2")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  var path = d3.geoPath();
  var projection = d3.geoMercator()
    .center([-120, 37])
    .translate([width / 2, height / 2])
    .scale([width * 3.3]);
      
  var map = d3.map();
  var colorScale = d3.scaleThreshold()
    .domain([50000, 100000, 150000, 2000000, 300000, 400000])
    .range(d3.schemeBlues[3]);
    
  svg.append("g")
     .selectAll("path")
     .data(data.features)
     .enter()
     .append("path")
      .attr("d", d3.geoPath()
        .projection(projection))
     .attr("fill", function(d) {
       return colorScale(+d["properties"]["median_house_value"]);
     });
     
  var widthLegend = 100;
  var heightLegend = 200;
     
  var key = d3.select("#cal-house-prices-2")
    .append("svg")
      .attr("width", widthLegend)
      .attr("height", heightLegend)
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
    .attr("stop-color", colorScale(400000))
    .attr("stop-opacity", 1);
  
  legend1.append("stop")
    .attr("offset", "100")
    .attr("stop-color", colorScale(50000))
    .attr("stop-opacity", 1);
  
  key.append("rect")
    .attr("width", widthLegend - 50)
    .attr("height", heightLegend)
    .style("fill", "url(#gradient)")
    .attr("transform", "translate(0,10)");
    
  var yLegend = d3.scaleLinear()
    .domain([50000, 400000])
    .range([heightLegend, 0]);
    
  var yAxisLegend = d3.axisRight(yLegend);
    
  key.append("g")
    .attr("transform", "translate(41,10)")
    .call(yAxisLegend);
    
    
     
// Map of median income   
  var svg3 = d3.select("#cal-house-prices-3")
       .append("svg")
       .attr("width", width)
       .attr("height", height);

  var path3 = d3.geoPath();
  var projection3 = d3.geoMercator()
       .center([-120, 37])
       .translate([width / 2, height / 2])
       .scale([width * 3.3]);
         
  var map3 = d3.map();
  var colorScale2 = d3.scaleThreshold()
       .domain([3, 5, 6, 7, 9])
       .range(d3.schemeBlues[3]);
       
  svg3.append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
         .attr("d", d3.geoPath()
           .projection(projection3))
        .attr("fill", function(d) {
          return colorScale2(+d["properties"]["median_income"]);
        });
        
  var widthLegend2 = 100;
  var heightLegend2 = 200;
           
  var key2 = d3.select("#cal-house-prices-3")
          .append("svg")
          .attr("width", widthLegend2)
          .attr("height", heightLegend2)
          .style("position", "absolute")
          .style("left", "20px")
          .style("top", "30px");
        
  var legend2 = key2.append("defs")
        .append("svg:linearGradient")
          .attr("id", "gradient")
          .attr("x1", "100%")
          .attr("y1", "0%")
          .attr("x2", "100%")
          .attr("y2", "100%")
          .attr("spreadMethod", "pad");
        
  legend2.append("stop")
          .attr("offset", "0%")
          .attr("stop-color", colorScale2(9))
          .attr("stop-opacity", 1);
        
  legend2.append("stop")
          .attr("offset", "100")
          .attr("stop-color", colorScale2(3))
          .attr("stop-opacity", 1);
        
  key2.append("rect")
          .attr("width", widthLegend2 - 50)
          .attr("height", heightLegend2)
          .style("fill", "url(#gradient)")
          .attr("transform", "translate(0,10)");
          
  var yLegend2 = d3.scaleLinear()
          .domain([30000, 90000])
          .range([heightLegend2, 0]);
          
  var yAxisLegend2 = d3.axisRight(yLegend2);
          
  key2.append("g")
          .attr("transform", "translate(41,10)")
          .call(yAxisLegend2);
      
      
        
// Map of population   
  var svg4 = d3.select("#cal-house-prices-4")
             .append("svg")
             .attr("width", width)
             .attr("height", height);

  var path4 = d3.geoPath();
  var projection4 = d3.geoMercator()
             .center([-120, 37])
             .translate([width / 2, height / 2])
             .scale([width * 3.3]);
               
  var map4 = d3.map();
  var colorScale3 = d3.scaleThreshold()
             .domain([1000, 5000, 10000, 50000])
             .range(d3.schemeBlues[3]);
             
  svg4.append("g")
              .selectAll("path")
              .data(data.features)
              .enter()
              .append("path")
               .attr("d", d3.geoPath()
                 .projection(projection4))
              .attr("fill", function(d) {
                return colorScale3(+d["properties"]["population"]);
              });
              
  var widthLegend3 = 100;
  var heightLegend3 = 200;
                       
  var key3 = d3.select("#cal-house-prices-4")
              .append("svg")
                .attr("width", widthLegend3)
                .attr("height", heightLegend3)
                .style("position", "absolute")
                .style("left", "20px")
                .style("top", "30px");
                    
  var legend3 = key3.append("defs")
                  .append("svg:linearGradient")
                    .attr("id", "gradient")
                    .attr("x1", "100%")
                    .attr("y1", "0%")
                    .attr("x2", "100%")
                    .attr("y2", "100%")
                    .attr("spreadMethod", "pad");
                    
  legend3.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", colorScale2(50000))
      .attr("stop-opacity", 1);
                    
  legend3.append("stop")
      .attr("offset", "100")
      .attr("stop-color", colorScale2(1000))
      .attr("stop-opacity", 1);
                    
  key3.append("rect")
    .attr("width", widthLegend3 - 50)
    .attr("height", heightLegend3)
    .style("fill", "url(#gradient)")
    .attr("transform", "translate(0,10)");
                      
  var yLegend3 = d3.scaleLinear()
          .domain([1000, 50000])
          .range([heightLegend3, 0]);
                      
  var yAxisLegend3 = d3.axisRight(yLegend3);
                      
  key3.append("g")
        .attr("transform", "translate(41,10)")
        .call(yAxisLegend3);
});




