---
layout: post
title: "C Programming Language Manual 2: Arrays"
category: Technical Essays
---

The next concept to tackle in C is the array. To understand arrays, we have to first understand what pointers are. In the previous article, I defined pointers as a reference to a specific location in memory. With a pointer, we can reference either the value at the specific memory location or we can reference the location's address itself. An array functions in much the same way. In fact, arrays and pointers are so closely related, they are often covered together. 

Just like a pointer, we can think of an array as a reference to a specific location in memory. In C, an array declaration looks like this:

<script src="https://gist.github.com/mdemichele/d3942a52f256a9fc8d32e34d42afdf63.js"></script>

This defines an array named *arr* with the size of 5 elements long. In memory, the array *arr* is formed by laying out all the elements contiguously, meaning that all elements share a common border. Visually, the array looks like this: 

![Array Layout](https://cdn.programiz.com/sites/tutorial2program/files/c-arrays.jpg)

`credit: programiz.com`

Each element is given an index number to reference its location within the array. The first element of the array possesses the index 0 and is known as the "base address". The following elements have the index 1, 2, 3, and so forth. The notation to reference the i-th element in the array is a[i], i referring to each element's index.

Now, that's the absolute simplest way to describe arrays - as a specific block of memory with a defined size of n elements, each element possessing an index and a value. That's simple, but that's not by any means a complete picture of arrays. From this point forward, it's important to understand the connection between pointers and arrays. 




