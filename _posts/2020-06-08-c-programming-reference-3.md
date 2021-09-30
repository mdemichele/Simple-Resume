---
layout: post 
title: "C Programming Language Manual: Enumerations"
category: C Programming Manual
---

An Enumeration is a unique type whose value consists of a set of enumerators. Enumerators are named constants of the type int. They can have an identifier as well as a value. If no values are declared, the values of the corresponding constants begin at 0 and increase by increments of 1. For example, a basic enumeration looks like this:

<script src="https://gist.github.com/mdemichele/2d41815aefff32be165661f11984e954.js"></script>


By default, the value of ```const1``` is 0, ```const2``` is 1, and so on. You can also give each constant an explicit value like this:

<script src="https://gist.github.com/mdemichele/a2c535043feaf89a73390dde63f2f352.js"></script>

In this instance, the value of ```const1``` is now 4, ```const2``` is 7, and ```const3``` is 22. Each constant's identifier must be unique. For instance, you cannot have 2 constants named ```const1``` in the same enumeration. 