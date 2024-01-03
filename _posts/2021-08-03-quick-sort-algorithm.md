---
layout: post 
title: "Quick Sort Algorithm"
category: Technical Essays
---

This series of articles is meant to help me pass those dreaded technical interviews. I'll be covering in detail each and every algorithm that I find the time and motivation to learn about. I hope you find these articles helpful as well. 

Many of these articles aren't exactly finished. They're meant to be a kind of running notebook that I update and refine continuously over time. If you find an algorithm isn't well-explained or want some clarification on a subject, feel free to shoot me an email at m.d.demichele@gmail.com.

Feel free also to reach out and just say hey! If you're a curious programmer like me, I'd love to hear from ya. 

Returning back the subject of today's article, let's cover the quick sort algorithm.

<br/><br/>
# Quick Sort Algorithm 
Quick Sort is a divide-and-conquer algorithm. The algorithm works by recursively breaking apart an array into smaller and smaller partitions, centered around a "pivot point." 
<br/><br/>
# Quick Sort Steps 
1. Choose an element to be the pivot 
2. Partition the array based on where the pivot is located. You'll have a left partition that is less than the pivot and a right partition that is greater than the pivot. 
3. Recursively apply quick sort on left partition. 
4. Recursively apply quick sort to the right partition.

<br/><br/>
# Time Complexity
Quick sort can have a worst case time complexity of O(n^2). But if the pivot is chosen correctly, it can have an average time complexity of O(n log n).

<br/><br/>
# Space Complexity
Quick sort uses O(log n) memory.

<br/><br/>
# Example Implementation 
I've provided an example implementation of quick sort down below. Like I've said in other algorithm articles, I hate reading through code I don't really understand, so I'll include a brief description of what's going on in the future. For now, here's the code. 

<script src="https://gist.github.com/mdemichele/b3f4d6a5de9856b2d49314b133ef79e4.js"></script>

<br/><br/>
# Source Code 
To see a working implementation of quick sort, along with a couple of sample tests, check out my project at <a href="" target="_blank">Quick Sort Algorithm Github</a>

<br><br/>
# Further Resources
Here's a few helpful resources you might find useful. 

- ["Quick Sort Algorithm" - Interviewbit](https://www.interviewbit.com/tutorial/quicksort-algorithm/)
- ["Quicksort" - Princeton CS](https://algs4.cs.princeton.edu/23quicksort/)

<br/><br/>
# Other Articles In My Technical Interview Series 

- ["Merge Sort"]({% post_url 2021-08-01-merge-sort %})

