---
layout: post
title: "Thinking About Objects in JavaScript"
category: "Technical Essays"
---

This past week, I made a pretty rookie mistake and copied an array of objects the wrong way in JavaScript. I had to do some digging to find out exactly what I did wrong, so I thought it'd be a good opportunity to document my mistake. 

# Scenario:
First, the specific scenario.

I was working on constructing a new feature in our web application. This application was an Angular application, so I was approaching it by thinking about it in terms of lifecycle.  At the very beginning of that feature's lifecycle on the initial render, I first had to make an HTTP call to retrieve an array of data from one of our API endpoints. Next, I had to do two things with that array of data.

1. I first had to make a copy of the data and save it for later in the lifecycle. This copy was meant to be the "default" data, which the feature would revert back to if the user hit the cancel button or wanted to otherwise discard their changes and go back to the original values. 
2. Secondly, I had to make a second copy of the data that would be the "source of truth" for the feature. By that, I mean that that second copy would be the actual object that the user would manipulate, edit, and eventually submit back to the server via a POST request later in the lifecycle. 

Now, the important thing is that I wanted to decouple these two copies of the received data array. I didn't want any manipulations on the second copy to affect the first copy. They had to be entirely independent of one another. Now, this seems simple. In fact, it is, but I made a really easy mistake here. 

My initial implementation looked like this: 

<script src="https://gist.github.com/mdemichele/1430354aa3404a80cbb67858cb90bb5b.js"></script>

Seems straightforward, right? Make two copies, one called `defaultCopy` and the other called `copyToUpdate`. 

Well, I discovered the mistake in this approach very quickly when I tried to manipulate the second copy. I added a new field to each element of the second array like this:

<script src="https://gist.github.com/mdemichele/bd781070a845ea5bc2fee8181ad6d277.js"></script>

Now, here's what I thought I had done. I thought that I had added the new `isSelected` field to the second copy without adding that field to the first copy. Instead, when I console.logged the two copies, I saw that the `isSelected` field had gotten added to both copies as pictured below.

<script src="https://gist.github.com/mdemichele/154826296cc9c07d58656ba3cb187ad5.js"></script>


The first and the second copies were identical to one another, both containing the `isSelected` field! Somehow, the `isSelected` field had gotten added to the first copy even though I hadn't touched that first copy in the `forEach` loop. The question was why?

# Pass By Reference versus Pass By Value

The answer relates to the concepts of pass by value versus pass by reference. As I understand it, pass by value means that when a variable is passed to a function, the function makes a copy of that variable's place in memory and copies the actual contents of the initial variable. Pass by reference, on the other hand, means that when a variable is passed to a function, the function makes a copy of the address in memory and points to the contents stored at that address.

The effect of this, for practical purposes, is that pass by value means that the program makes a completely separate copy of the initial variable in memory, so that changes to the copy don't affect the original variable. With pass by reference, however, the program points to the same place in memory as the initial variable, so that changes to the copy *do* affect the original variable. 

So, the next question then is, is JavaScript pass by value or pass by reference? The answer is it depends...sorta. 

# JavaScript is...

JavaScript is technically a "pass by value" language. This means that when you pass a variable to a function or make a copy of that variable, JavaScript will make a new copy of the contents of that variable and pass that to the function or new copy. The effect of this is that changes to this copy should not affect the original variable. This behavior is pretty straight-forward for simple data types in Javascript, for example strings and numbers. To illustrate this, consider what happens when we make a copy of a number type variable like so:

<script src="https://gist.github.com/mdemichele/1a12589fd8fcc5d2071712903ea72ff8.js"></script>

What we see here is that our copy of the original number variable is independent of the original. When we change the contents of `copy` it won't affect `original`.

Now, things get a little weirder for more complex data types in JavaScript. For instance, the Object type is one of the most important data types in JavaScript. An Object is typically a collection of related data or functionality. Objects in JavaScript are extremely versatile and can be used to store a variety of different data types within one singular collection. In other words, objects can be used to group together or associate a bunch of different pieces of data, all of which may be of a different data type.  

In JavaScript, Arrays are considered a specific type of Object. Arrays in JavaScript are also used to store or group multiple items under a single variable name. 

There's a lot more we can say about Objects in JavaScript, and this is by no means an in-depth technical discussion about data types in JavaScript. The key thing for us to know is that Objects contain references to the items stored within. In other words, because an Object is just a collection of items, this means that an Object is really just a bunch of references to the places in memory where the actual items that make up the object are stored. 

So, when we make a copy of an Object in JavaScript, we still follow pass by value rules. But, because an Object is itself just a collection of references, we end up just making a new copy of those references.

This means that when we make copies of Objects in Javascript, these copies pretty much behave like pass by reference, although technically speaking, JavaScript is still a pass by value language. 

# Back to the scenario
So, back to our little scenario. Now knowing how JavaScript handles copying objects, I could see what I did wrong. To refresh, my naive solution looked like this:

<script src="https://gist.github.com/mdemichele/1430354aa3404a80cbb67858cb90bb5b.js"></script>

And it produced the effect that manipulations to the second copy affected the first.

The reason for this is that the two copied arrays are filled with objects. Each element of each array is itself an object. As we know from the above discussion, JavaScript handles copying objects in essentially a pass by reference way. This means that the two copied arrays are filled with references to the same places in memory that represent the contents of the objects in each array. 

# Better Solution
So, what's a better solution? There certainly are many other solutions, but here's at least one better solution:

<script src="https://gist.github.com/mdemichele/3d736213879e2d7229b1a5d8b9e922d6.js"></script>

Instead of trying to copy the original array with the `=` operator, what we can do instead is map through the original array with the `map()` method. At each element, we then make a new object, populate that new object with the contents of the original element by using the `spread` operator, then return that new object. Here, we use this method for both the first and second copies of the original array. For the first copy, we just map through the original array and return a new object with the exact same contents of the each original element. For the second copy, we do the same thing and also append the new field at each iteration of the map method.

Because we create a new object at each iteration of our map methods, we get the result that we actually wanted:

<script src="https://gist.github.com/mdemichele/5d983b6fa7fc3d2e02480a87e5e02fe0.js"></script>

Here, we see that `defaultCopy` does NOT contain the `isSelected` field and `copyToUpdate` does. This shows us that now the two copies are decoupled and won't affect each other anymore. This is exactly what we wanted. 

# One Last Note

Really quickly, let me highlight one last potential pitfall here. Be careful not to simply use the map function like this:

<script src="https://gist.github.com/mdemichele/008e11e59310b7f7466febec417902e4.js"></script>

This actually won't give you the result you want. This instead behaves like the naive solution because, within the map function, the program is actually manipulating the original objects it's iterating through and returning those original objects. Make sure that inside of the map function, you actually make a new copy of each object and return that brand new object rather than return the original object.  

# Conclusion
The moral of the story is to be careful when making copies of arrays in JavaScript. The way you need to make these copies will be different depending on the contents of the array, since JavaScript allows arrays to contain multiple data types. It's also a great reminder to be careful of how you're using fancy JavaScript Array iterators. Make sure you understand what they're doing under the hood and don't find out the hard way like I did.