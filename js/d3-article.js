var dataset = [
  {"country": "Afghanistan", 
    "jan22": "0", 
    "mar22": "4033", 
    "may22": "29157"
  },
  {"country": "Albania", 
  "jan22": "0", 
  "mar22": "880", 
  "may22": "1995"
  },
  {"country": "Andorra", 
  "jan22": "0", 
  "mar22": "731", 
  "may22": "855"
  },
  {"country": "Angola", 
  "jan22": "0", 
  "mar22": "48", 
  "may22": "186"},
  {"country": "Antiqua", 
  "jan22": "0", 
  "mar22": "25", 
  "may22": "26"
  }
]

//var parsed = JSON.parse(dataset);

d3.select("body").select(".post-content").selectAll("svg")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d) {
    return d.country + " has had " + d.may22 + " COVID-19 cases as of May 22";
  })
 

