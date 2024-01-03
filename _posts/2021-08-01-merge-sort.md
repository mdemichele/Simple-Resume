---
layout: post 
title: "Merge Sort"
category: Technical Essays
---

This series of articles is meant to help me pass those dreaded technical interviews. I'll be covering in detail each and every algorithm that I find the time and motivation to learn about. I hope you find these articles helpful as well. 

The topic I'll be covering in this article is the Merge sort algorithm. 
<br/><br/>

# Merge Sort 
Merge Sort is a divide-and-conquer algorithm that utilizes recursion. Essentially, the algorithm recursively splits the unsorted list into sublists until the sublists are each one element long. Then, it merges those sublists together in order, forming larger and larger sublists until there is only one list again. At that point, the list should be sorted and back to the correct length.
<br/>
<br/>

# Merge Sort Steps
1. Divide the unsorted list into n sublists (each sublist should contain only one element, at which point it is considered to be sorted).
2. Repeatedly merge the sublists to produce larger sorted sublists until there is only one sublist remaining. The remaining list will be sorted. 
<br/>
<br/>

# Time Complexity
The average and worst case runtime of Merge sort is O(n log n). 
<br/>
<br/>

# Space Complexity
The space complexity of Merge sort is O(n) due to the temp array that we use to merge the partitioned parts of the array.
<br/>
<br/>

# Example Implementation 
I've provided an example implementation of merge sort below. I know, personally, that I hate reading through other people's code, so I'll explain what I did below in plain English first. 

Essentially, my Merge Sort algorithm consists of two functions: A primary function (called merge_sort) and a helper function (called merge). Because this is a recursive algorithm, it's a bit hard to visualize what's really going on, but I'll try my best to explain it as simply as possible. 

What's happening below is that my primary function (merge_sort) breaks apart the original array into smaller and smaller partitions until we get to each individual element as its own partition. Then, one by one, the helper function (merge) merges these individual elements back together in order. The algorithm does this over and over again, building bigger and bigger merged partitions until we get back to the length of our original array. But, this time, the original array is now sorted. 

If that didn't quite make sense, that's okay!

Basically, think of the algorithm moving in two directions. The forward direction represents us building up our recursion stack. The backwards direction represents us working back down our recursion stack. 

Aas we go forward, we break the array into smaller and smaller bits until we reach individual elements. As we go backward, we build the array back up until we reach the original length.

The magic of this algorithm is the ability to break the sorting problem into much easier to solve subproblems. 

For a great visualization of how this works, check out this video by [Michael Sambol](https://www.youtube.com/watch?v=4VqmGXwpLqc&ab_channel=MichaelSambol). The video does an excellent job showing what happens during the algorithm. Once you watch the video, you should be able to understand what's going on in the code below. 

<script src="https://gist.github.com/mdemichele/b09b196ef053e82a33e02add9838d877.js"></script>

# Source Code 
To see a working implementation of merge sort, along with a couple of sample tests, check out my  project at <a href="https://github.com/mdemichele/c_algorithms_and_data_structures/tree/master/sorting_algorithms/merge_sort" target="_blank">Merge Sort Algorithm Github</a>

