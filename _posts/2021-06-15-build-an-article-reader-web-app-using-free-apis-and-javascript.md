---
layout: post
title: "Build An Article Reader Web App Using Free APIs and JavaScript"
category: Technical Essays
---

As I go through the lengthy process of building my resume, I’ve decided to start building some personal projects of my own. I’ve set out to do this a million times before, but this time, I’m actually going to finish a few of them.

I know, I know…everybody says that.

Well, guess what? I already finished one! Take that, procrastination bug.

Here in this article, I’ll walk you through what I hope will be the first of many personal projects that I’ll build in the coming months. I hope you find the project helpful or at least mildly amusing. Hopefully, it will inspire some projects of your own!

# Defining the Project

I wanted to build a project I could put in my portfolio — something that could showcase a few of the skillsets relevant to the developer jobs I’ve been applying to. I also hoped to build something interesting and somewhat useful.

As I thought about this, I came up with two small but pressing pain points that I wanted to address:

1. <strong>I spend way too much time scrolling through mindless content on my phone.</strong>
2. <strong>I don’t spend enough time reading computer science material that could actually help me in my classes.</strong>

With these two pain points in mind, I decided on a solution. I’d build an article reader app that would feed me only computer science research and recent tech-related news. That way, I could have something to mindlessly scroll and could have easier access to useful reading material.

I figured it was a good idea, so I decided to give it a shot.

# Step 1: Look for Free APIs
The first step was to figure out both where to pull articles from and how to pull them. After doing a quick Google search for free computer science content, I found that there were a number of free public APIs that gave me access to the content I needed.

For reference, here are two great lists of available public APIs.

1. Public APIs — A Collective List of Free APIs
2. https://public-apis.io/

I chose to start with just one API: the arXiv API. arXiv provides free access to a lot of rigorous and cutting-edge research in a wide range of academic fields, which was perfect for my project.

<br>
# Step 2: Read the API Documentation
Fortunately for me, the arXiv API is beautifully maintained and well-documented. It can be found here.

Per the documentation, the API can be called in a number of ways. Perhaps the easiest way is to get articles from arXiv via an HTTP GET or POST request made to the correct URL. Using this method, determining specifically which articles you want is simply a matter of changing the parameters of the URL. This is the method I went with.

My first question was how to build my URL. The base URL that arXiv provides looks like this:

```
http://export.arxiv.org/api/{method_name}?{parameters}
```

In this format, there are two important components: the method we want to use and the search parameters we want to define. These are represented in the url by `method_name` and `parameters`.

For my purposes, the simplest way of retrieving articles from the arXiv database was to use the query method. arXiv provides an easy interface for using the query method. All that needed to be done was to insert query in the method_name place, right in front of the ?. On doing so, my URL looked like this:

```
http://export.arxiv.org/api/query?{parameters}
```

Next, I needed to figure out what parameters to include in the URL. To do this, I narrowed my focus to three specific criteria:

- I was interested in learning more about a few specific areas of computer science research. I went with machine learning, game theory, and data structures and algorithm design.
- I wanted them to be as recent as possible.
- I wanted only a handful of them — just enough to display in a nice, clean feed.

To narrow down my search to only articles that fit these criteria, arXiv allows users to chain together multiple parameters separated by an & sign.

The first parameter I needed was the search_query parameter. This parameter takes a string that represents the specific criteria being searched for. In other words, the API interface gives users a set of nine different “prefixes” and “explanations” that we can use to narrow down the search query.

As mentioned, I was looking for computer science articles in three specific categories: machine learning, game theory, and data structures and algorithm design. In the arXiv API, I can search for all three of these categories by chaining them together, like so:

```
search_query=cat:cs.LG+AND+cat:cs.GT+AND+cat:cs.DS
```

This is much more straightforward than it looks, the query chains three individual prefix:explanation pairs with the connector +AND+. In all three, I used the prefix cat to search by category followed by three “explanations,” cs.LG(Machine Learning), cs.GT (Game Theory), and cs.DS (Data Structures) to search for my three specific subject categories.

To filter the query results even further, I chained a few more parameters together:

To sort the returned articles by the last updated date, I used:

```
sortBy=lastUpdatedDate
```

To make sure the articles were displayed from most recent to least recent, I used:

```
sortOrder=descending
```

This may have been gratuitous, but I even specified to start with the first most recent article, instead of the third or fourth most recent article:

```
start=0
```

Finally, to ensure we only display 10 articles at a time, I also added:

```
max_results=10
```

With that, my full URL looked like this:

```
http://export.arxiv.org/api/query?search_query=cat:cs.GL&sortBy=lastUpdatedDate&sortOrder=descending&start=0&max_results=10
```
<br>
# Step 3: Fetch the Data With an XMLHttpRequest

With my URL defined, I next needed to focus on how to pull the queried data into my application.

Per the arXiv documentation, I discovered that the best way to pull articles into my web application was to use an XMLHttpRequest.
If you’re unfamiliar with XMLHttpRequest (XHR) objects, they’re a method of interacting with web servers that allows you to retrieve data from a URL. They’re fairly simple to use and are a common facet of AJAX programming.

If you want to learn more about XMLHttpRequest objects, here are a few quick articles to help you get up to speed:

- “XMLHttpRequest” — MDN Web Docs
- “XMLHttpRequest” — Wikipedia

Using an XHR in the context of my project was incredibly simple. All I had to do was define an XHR object in my code and point it to the correct URL.

The first thing to do was declare an instance of my XHR object using the constructor method XMLHttpRequest():

Simple enough! This one line simply declares a new XHR object that I can then use to query the data.

XMLHttpRequests are themselves an API that provides users with a set of useful built-in methods and properties. Thus, I could use the built-in methods to pull my data with my new xhr object.

To do so, I used the ``.open()`` method to open a GET request to my URL:



The `.open()` method simply says that:

- GET is the HTTP method I’m using.
- http://export.arxiv.org/api/query?search_query=cat:cs.GL&sortBy=lastUpdatedDate&sortOrder=descending&start=0&max_results=10 is the URL I’m requesting from.
- The function should run asynchronously, which is specified by the boolean True at the end.

The .open() method then initializes the HTTP request.

Once my HTTP request is made, I can then specify what to do with the response back.

To do this, I could use another built-in attribute provided with the XMLHttpRequest API, namely the .onreadystatechange event handler. This event handler executes a callback function every time my xhr object’s readyState property changes.

The readyState property returns the state of the client request. We could go into much more detail here, but it’s sufficient to note that there are only five states that the readyState property can be in: UNSENT, OPENED, HEADERS_RECEIVED, LOADING, or DONE. The specific state lets me know the status of my GET request. My callback function determines how I handle the response back from the GET request, depending on the state.

The basic syntax of an .onreadystatechange handler is:

```
XMLHttpRequest.onreadystatechange = callback;
```

In the context of my project, I set the handler up like this:

The actual code determining how to display the data on my web page I eventually put inside my callback function. I’ll cover that in a second, but first, there’s one final XMLHttpRequest method I needed to add to my code: the .send() method.

The .send() method simply sends my request to the server. Since my request is being sent asynchronously, this method will return as soon as the .open() method executes. It looked like this in my code:

Also super easy! At this point, my code looked like this:

With this code, I had so far created:

- An XMLHttpRequest object.
- A GET request with the object.
- An event handler for the GET request.
- A send method to actually send the request.

That handled the bones of my project. Now I could get down to the fun stuff: data parsing!

<br>
# Step 4: Parse the Response Text

Now that I’d constructed the skeleton of my simple web application, I could get down to the issue of how to handle the response from my GET request.

The first thing to do was to check that my request actually finished correctly. I also needed to check the response status.

To check that my request finished correctly, I needed to check that the readyState returns a state of DONE— if it returns something else, it means my function hasn’t finished yet, so nothing needs to happen.

I also needed to check that the returned status equals 200, signifying that the request was successful.
Implementing both of these checks, my code looked like this:

Now, if my response was successful, I should be able to see the response data. If I wanted to check if my code was working properly, I could insert a quick console.log(this.responseText) where the “Do something with successful response” comment is to see the returned data. Doing so would give me something like this in the browser console:

API response text — example taken from arXiv API User Manual

The above response text is formatted XML data. Specifically, the arXiv API uses a grammar of XML, known as Atom. Without delving too much into the specifics of Atom, it’s enough to know that Atom is a popular method used to publish web content that functions similar to an RSS feed.

For my purposes, I simply needed to know how to access the data given to us in this format. That’s where the JavaScript code comes in.
The response data is given to us as a string of XML. To actually use the string, however, I needed some way to parse it. Fortunately, instead of having to do this manually (although I’m sure that would be loads of fun), I cheated a bit and used yet another API, called DOMParser to parse the XML string for me.

Just like with the XMLHttpRequest API, all I had to do was use a constructor to create a new DOMParser object, which I could use to do the dirty work for me:

Here, I first created a new DOMParser object called domparser. Next, I used my DOMParser object to call the .parseFromString() method, which, again sparing the details, takes my string and converts it to an XML object.

The parsed XML object looks exactly like the string output mentioned above, but now I can select the individual elements of the XML data by tag name, using methods available in the standard Document Object Model interface.

Since wasn’t interested in the metadata of the XML response, I next honed in on only the data within the <entry> tags of the response data. To do so, I simply had to select every <entry> tag in my XML data, using the .getElementsByTagName() method.

This line of code produces an iterable array of <entry> data. The entry data contains all the information necessary for my article reader and excludes the unnecessary metadata, like updated date or version number.

<br>
# Step 5: The HTML Markup

Now I had the data to insert into the application, I needed to write a bit of HTML markup to determine where to insert my articles.

I simply needed to give the article reader page a simple header and create a div where I could display the articles on my web page. My markup looked like this:

This gave me a ridiculously simple web page to act as the container for my article feed. Given my penchant for simplicity, the page looked like this:

Article Reader HTML

The simple web page

Next, I could then insert my article feed directly into the page where the comment was in my code.

<br>
#Step 6: Display the Information With JavaScript

To decide how to display the article feed, I took some inspiration from Medium and other news feeds. Typically, most article feeds look something like this:

Medium Article Feed
Medium article feed

Simple and clean, these feeds display only a few pieces of information about each article — just enough to help the reader decide if the article is interesting enough to read. The feed displays the article’s title (which also functions as a link to the article), the author’s name, the publication’s name, a subtitle, and few small pieces of metadata, like data published and length of the article.

Purely to keep things as simple as possible in my article reader, I decided to display just each article’s title (with a link to the article pdf) and a 400 character snippet of the article’s abstract. This was all the information I needed to tell me whether the article was worth reading.

To achieve this desired display, I decided to iterate through my array of <entry> tags and put each link, title, and abstract snippet into their own arrays, like this:

That gave me three distinct arrays: one with the links, one with the titles, and one with the summaries. I could then use these three arrays to feed my information into my web page.

First, however, I needed to do one more thing. Because the abstracts vary in length, I needed to apply a mapping function on each of them to cut them down to 400 characters each:

That gave me an array with ten summaries, each of 400 characters or less.

Next, I had to build the HTML to insert into my document:

Here, I created ten elements in a new array called parsed. Each element was a div element, representing an individual article. Each article contained a title, with a link to the actual pdf, and a 400 character summary directly from the article’s abstract.

Finally, the last step JavaScript task was to insert each of the articles, one by one, into the actual webpage. I did this by iterating through my parsed array and inserting each article into the webpage using the DOM method .insertAdjacentHTML().

After doing this correctly, the feed on my web page looked like this:

Article Feed

This is exactly what I wanted! My feed gave me a title and summary for the ten most recent machine learning, game theory, and data structures articles in the arXiv database. Additionally, because I created the feed as a page on my pre-existing portfolio website, the feed was already styled with a bit of CSS.

For reference, here’s the entirety of my JavaScript code:

All that remained was to add a bit more CSS.

<br>
# Step 7: Add Some CSS

Since the project was more about learning how to use an API, I kept my CSS extremely simple. I just needed to space out the articles a bit and distinguish the titles from the summaries.

Since I incorporated this project in my personal website, I used Sass and made use of a variable $spacer. The project was so simple that preprocessor wasn’t really needed, but it’s what I went with:

After adding some styles, the end result looked something like this:

Finished Article Reader
Finished Article Reader

<br>
# Step 7: Happy Reading!

That’s it! An extremely simple article reader, using a free API and some simple HTML, CSS, and JavaScript.

While the project in its current form is extremely simple — probably too simple to really call an application — there are many ways I can extend the project in the future. For instance, instead of hard coding my search query directly into my code, I could easily add an input form that lets the user customize their searches. This would function much like a typical search bar and add an element of user interactivity, making it much more app-like.

If I wanted to get really crazy, I could also add in other free APIs and pull in other sources of articles, making it much more like a typical news feed. I could even provide the functionality to filter articles, depending on what I wanted to read that day.

However, that is for another project. For now, I’m going to enjoy my simple project as it is!

If you want to see the finished project, you can see it on my website here. It’s not the prettiest project in the world or the most impressive. But hey, it’s a great start in the right direction. Not to mention, I now have something else to scroll through instead of stupid dog TikToks!

I hope you enjoyed the project and found my musings helpful. As always, thanks for reading! And of course, thank you to arXiv for use of its open access interoperability.
