---
layout: post
title: "The Purpose of Data Structures"
category: CS Concepts
---

Fundamentally, a data structure is a tool to organize, manage, and store data in a manner that allows for efficient access and modification. There are many different types of data structures. Each unique data structure organizes information differently, depending upon what that information will be used for or which method of organization makes the most conceptual sense. Different data structures are better suited for different kinds of tasks. Some work well for generic kinds of applications; some are highly specialized and are only useful for very specific tasks. No matter the specific application, the key to remember is that *the general purpose of a data structure is to make algorithms faster and more efficient*.

To illustrate the point, I'll highlight one of the most fundamental types of data structures: Lists. Typically, lists are used to store a collection of data items. They are frequently used as building blocks for more complex data structures. Here is a template for a simple list.

<script src="https://gist.github.com/mdemichele/93d04bd4b2386aa996c529d379ebc3a1.js"></script>

Here, we define a new data type of ```struct s_list``` using ```typedef```. The data type is called ```t_list```. Note that since no variable of type ```t_list``` is instantiated here, this is just a template. No space in memory has been reserved for the list just yet. 

Next, let's create a function for creating an element of the ```t_list``` type. 

<script src="https://gist.github.com/mdemichele/72b0e18bbe745a72ed30b7831e4ac914.js"></script>

The function ```create_elem``` first creates a pointer of type ```t_list``` called ```*list```. Then, it allocates the necessary amount of memory to that pointer. It then gives the ```data``` member and ```next``` member an assignment, and finally returns the ```list``` pointer. This creates an instantiation of the ```t_list``` type. We'll use this function to create ```t_list``` elements to insert into our list. 

To do the actual inserting, however, we need a few more functions. We'll now make a function to add a new element of the ```t_list``` type at the end of the list. 
 
<script src="https://gist.github.com/mdemichele/fa39fa261c8dfa98e88836c21b2f2cf4.js"></script>

Here, the function ```list_push_back``` accepts as a parameter a pointer to the first element in the list. Note that ```**begin_list``` is a double pointer, so it points only to the first list element not to the entire list itself. The function also accepts the data to be inserted to the element, which we will create. The function first defines a pointer called ```new```. The function then iterates through the list beginning at the first element (denoted by ```*begin_list```). It continues to iterate until it reaches the last element (meaning until ```new->next``` equals NULL). Once it reaches the last element, it creates a new element using the ```create_elem``` function we just created. If there is no elements in the list yet, the function will create a new element at the beginning of the list. 

Next, let's make a function to add a new element of the ```t_list``` type at the beginning of the list. 

<script src="https://gist.github.com/mdemichele/c00899ef9f08bb2df56f919e7e25ad92.js"></script>

The function here ```list_push_front``` again accepts as parameters a pointer to the first element in the list and the data to insert into the element that will be created. The function also again defines a ```t_list``` type pointer called ```elem```. It then looks to see if there are any elements in the list. If there are already elements, the function creates a new element, points that newly created element's ```next``` member at the previous first element, and then set the new element as the new first element. If there are no elements in the list yet, the function just creates a new element. 

So, as it stands, we now have a template for our list data type. We also have three functions: One to create new list elements, one to insert those elements at the beginning of the list, and one to insert those elements at the end of the list.  

With just this template and our three methods, we can accomplish a large number of tasks. Other functions can also be added to increase the number of ways we can manipulate the list, thereby increasing the complexity of the tasks we can handle. As I mentioned at the beginning, the whole point of creating a data structure, such as a list, is to use it to accomplish specific tasks. A list like the one we created will be better suited to handle certain tasks that other data structures like, say, a binary tree (which I'll cover later), will not be suited for. Most times, by analyzing the problem or task at hand, you can determine which data structure will be necessary. Choosing a well-suited data structure can mean the difference between a fast, eloquent solution and an ill-suited mess with an unnecessarily long run-time.  

So, why might one choose to use a list data structure? Which types of problems is it best-suited to handle? In order to answer this question, let's take a quick digression through some mathematical thoughts. 
  


   