// arXiv Feed
window.addEventListener('load', loadArxiv);

// arXiv Feed Function 
function loadArxiv() {
  
  var display = document.getElementById("arxiv-article-feed-body");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://export.arxiv.org/api/query?search_query=cat:cs.LG+AND+cat:cs.GT+AND+cat:cs.DS&sortBy=lastUpdatedDate&sortOrder=descending&start=0&max_results=10", true);

  xhr.onreadystatechange = function() {
    // Check to make sure xmlhttprequest finished
    if (this.readyState === this.DONE) {
      const status = this.status;
      
      // Check to make sure request was successful
      if (status == 200) {
        let domparser = new DOMParser();
        let doc = domparser.parseFromString(this.responseText, "text/xml");
        let entry = doc.getElementsByTagName("entry");
        
        let link = [];
        let titles = [];
        let summaries = [];
        for (let i=0; i < entry.length; i++) {
          link[i] = entry[i].querySelector('[title=pdf]').getAttribute("href");
          titles[i] = entry[i].querySelector("title");
          summaries[i] = entry[i].querySelector("summary");
        }
        
        let shortSummaries = [];
        shortSummaries= summaries.map(i => { return i.innerHTML.slice(0, 400) });
        
        let parsed = [];
        for (let i = 0; i < link.length; i++) {
          parsed[i] = '<div class="article-single-body"><a href="' + link[i] + '" target="_blank">' + titles[i].innerHTML + '</a><div class="article-single-summary">' + shortSummaries[i] + '...' + '</div></div>';
        }
        
        
        for (let i = 0; i < parsed.length; i++) {
          display.insertAdjacentHTML('beforeend', parsed[i]);
        }
      } else {
        console.log("An error occurred.");
      }
      
    }
  }

  xhr.send();
}

// Guardian feed

// var guardianDisplay = document.getElementById("guardian-article-feed-body");

// var news = new XMLHttpRequest();
// news.open("GET", "https://cors-anywhere.herokuapp.com/https://content.guardianapis.com/search?&api-key=3c438198-0ac4-4020-95cd-aa64e3628715");


// news.onreadystatechange = function() {
//   // Check to make sure request finished
//   if (this.readyState == this.DONE) {
//     const status = this.status;

//     // Check to make sure request was successful
//     if (status === 200) {
//       var response = JSON.parse(this.responseText);

//       var titles = [];
//       var links = [];
//       var summaries = [];

//       for (var i = 0; i < 10; i++) {
//         titles[i] = response["response"]["results"][i]["webTitle"];
//         links[i] = response["response"]["results"][i]["webUrl"];
//       }

//       parsed = [];

//       for (var i = 0; i < 10; i++) {
//         parsed[i] = '<div class="article-single-body"><a href="' + links[i] + '" target="_blank">' + titles[i] + '</a></div>';
//         guardianDisplay.insertAdjacentHTML('beforeend', parsed[i]);
//       }


//     }
//   }
// }


// news.send();

// Feed Filter 
var clickarxiv = document.getElementById("arxiv");
clickarxiv.addEventListener("click", handleClick);

var clickguardian = document.getElementById("guardian");
clickguardian.addEventListener("click", handleClick);

var clickall = document.getElementById("all");
clickall.addEventListener("click", handleClick);

function handleClick() {
  var body = document.getElementById("reader-body-section");
  var newNode = document.getElementById(this.id + "-area");

  var allNodes = body.children;
  var hideNodes = [];
  var showNodes = [];
  var count1 = 0;
  var count2 = 0;
  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i]["id"] !== this.id + "-area") {
      hideNodes[count1] = allNodes[i];
      count1++;
    } else {
      showNodes[count2] = allNodes[i];
      count2++;
    }
  }

  if (this.id === "all") {
    for (var i = 0; i < allNodes.length; i++) {
      allNodes[i].hidden = false;
    }
  } else {
    for (var i = 0; i < hideNodes.length; i++) {
      hideNodes[i].hidden = true;
    }
    for (var i = 0; i < showNodes.length; i++) {
      showNodes[i].hidden = false;
    }
  }
}



