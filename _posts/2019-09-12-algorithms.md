---
layout: post
title: "Quick Algorithm Note"
category: Technical Essays
---

As I attempt to grasp the core concepts of computer memory, a word about algorithms and data structures is in order. First, let's ask the question, what is an algorithm?

An algorithm is any well-defined computational procedure, along with a specified set of allowable inputs, that produce some value or set of values as output. Defined another way by Judith L. Gersting in *Mathematical Structures For Computer Science*, "An Algorithm is a set of instructions that can be mechanically executed in a finite amount of time in order to solve some problem." Essentially, an algorithm is a set of instructions to the computer. 

Typically, a programmer is interested in analyzing an algorithm's **efficiency**. Or, more qualitatively, **program complexity**, which considers both the difficulty of implementing an algorithm and its efficiency.

To analyze efficiency, you must consider an algorithm's **space**, which is the amount of memory required, and its **time**, which is the computational time required. Usually, the two are inversely correlated. As noted by Gersting, an algorithm must be able to execute in a finite amount of time. 

The major task of a programmer is devising algorithms, or rather programs (procedures), that solve the specified problem. Once a programmer has solved the problem, he or she can then evaluate the algorithm's efficiency and complexity in order to hopefully develop an even better solution that is more efficient and less complex. 

The goal of a programmer should be to find the most efficient and least complex algorithm necessary to solve a given problem - in formal computer science, this is referred to as an **optimal solution**. An optimal solution will have the smallest computational cost. This will allow a given machine to run the program in the least amount of time possible. 

To take a high-level view, it's important to realize that finding the optimal solution to a given problem is sometimes necessary for many reasons. First, as programmers we solve problems using real, physical machines that have very real processing limitations. Even though processing power is supremely cheap with today's technology, it's not infinite. There are limitations to what we can do, and when building extremely large and complex programs with large amounts of inputs, these limitations can bite us in the ass if we're not careful to implement the best solutions possible. As I've observed more programmers further ahead in their abilities than myself, I've noticed that the ones who I admire the most are the ones who obsessively rework every bit of code to make it more efficient than the previous iteration. Whereas I would be satisfied with a less perfect solution that simply gets the job done, better programmers understand that efficiency is the most valuable currency. Every improvement to a program's efficiency, no matter how small, will pay off in the end. Failing to recognize this will only lead to badly designed programs, and ultimately, poorly built software. 

The more I grow as a programmer, the more I am coming to appreciate and obsess over efficiency. That started through an understanding of algorithms and their importance. 


