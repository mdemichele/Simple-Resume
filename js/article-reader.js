

// arXiv Feed
var display = document.getElementById("arxiv-article-feed-body");

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://export.arxiv.org/api/query?search_query=cat:cs.GL&sortBy=lastUpdatedDate&sortOrder=descending&start=0&max_results=10", true);

xhr.onreadystatechange = function() {
  // Check to make sure xmlhttprequest finished
  if (this.readyState === this.DONE) {
    const status = this.status;
    
    // Check to make sure request was successful
    if (status == 200) {
      let domparser = new DOMParser();
      let doc = domparser.parseFromString(this.responseText, "text/xml");
      let entry = doc.getElementsByTagName("entry");
      //console.log(entry[0]);
      
      let link = [];
      let titles = [];
      let summaries = [];
      for (let i=0; i < entry.length; i++) {
        link[i] = entry[i].querySelector('[title=pdf]').getAttribute("href");
        titles[i] = entry[i].querySelector("title");
        summaries[i] = entry[i].querySelector("summary");
      }
      
      let parsedSummaries = [];
      parsedSummaries= summaries.map(i => { return i.innerHTML.slice(0, 400) });
      
      let parsed = [];
      for (let i = 0; i < link.length; i++) {
        parsed[i] = '<div class="article-single-body"><a href="' + link[i] + '" target="_blank">' + titles[i].innerHTML + '</a><div class="article-single-summary">' + parsedSummaries[i] + '...' + '</div></div>';
      }
      
      
      for (let i = 0; i < parsed.length; i++) {
        display.insertAdjacentHTML('beforeend', parsed[i]);
      }
    }
  }
}

xhr.send();

// HackerNews feed

var guardianDisplay = document.getElementById("guardianapi-article-feed-body");

var news = new XMLHttpRequest();
news.open("GET", "https://cors-anywhere.herokuapp.com/https://content.guardianapis.com/search?q=politics&api-key=3c438198-0ac4-4020-95cd-aa64e3628715");


news.onreadystatechange = function() {
  // Check to make sure request finished
  if (this.readyState == this.DONE) {
    const status = this.status;
    
    // Check to make sure request was successful
    if (status === 200) {
      var response = JSON.parse(this.responseText);
      
      var titles = [];
      var links = [];
      var summaries = [];
      
      for (var i = 0; i < 10; i++) {
        titles[i] = response["response"]["results"][i]["webTitle"];
        links[i] = response["response"]["results"][i]["webUrl"];
      }
    
      parsed = [];
      
      for (var i = 0; i < 10; i++) {
        parsed[i] = '<div class="article-single-body"><a href="' + links[i] + '" target="_blank">' + titles[i] + '</a></div>';
        guardianDisplay.insertAdjacentHTML('beforeend', parsed[i]);
      }
      
      
    }
  }
}


news.send();

