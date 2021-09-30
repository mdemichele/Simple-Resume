---
layout: post 
title: "University Credits Tracker App"
category: Web Applications 
---

# Introduction

This past week, I made another little node.js application to keep track of my university credits.

The app is built with Node.js, Express.js, MongoDB, Mongoose, and Pug. 

# Project Description 

The app simply keeps track of the number of credits and the number of classes I have left to graduate. The project gives the user an input form that allows them to enter each class, along with the class ID and number of credits for that class.

The app keeps an updated tally of the number of classes and the number of credits left. It also provides a list of classes entered. The app allows each of these listed classes to be deleted as the user progresses through their degree program. 

# Technical Details 

The app was extremely simple to implement. I simply needed to set up a local server. I then needed to connect a local MongoDB database and define a few models for my data, using Mongoose. I then created a total of three routes: A GET route to display the index page, a POST route to handle input form submissions, and another POST route to handle the delete function. Finally, the last thing I created was a simple front-end using Pug. The front-end simply contains an input form to enter classes, a display of the number of classes left and the number of courses left, and a list of the entered classes.

# Technologies Used 

1. Node.js
2. Express.js
3. MongoDB
4. Mongoose 
5. Pug 

# Source Code 

The source code for the project can be found [here](https://github.com/mdemichele/credits-tracker).