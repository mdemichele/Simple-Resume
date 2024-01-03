---
layout: post
title: "Object Oriented Design Concepts"
category: Technical Essays
---

In my last post, I defined Object Oriented Programming and explained the terms “object” and “class”.

In this post, I want to define a few other concepts that are core features of OOP. Although there’s definitely more concepts, I’ll just go over the four that I find to be most important.

<br>
# Abstraction

Abstraction is all about managing complexity. It’s essentially a useful way of thinking about a complex system.

To give you an idea of what abstraction means, let me use the example I’ve heard used most often. Say you have a car. When you think about a car, you probably think of it as one distinct object that does a specific job. What you don’t have to think about is the fact that a car is made up of countless complex parts, such as an engine, braking system, transmission, sound system, and fueling system. If you did think about all of a car’s parts, you’d probably get overwhelmed by the complexity of it all. With abstraction, you can be clueless about how the parts in a car actually work yet still understand exactly what a car does.

That’s exactly how abstraction works in a computer program.

Just like a car, an object-oriented program breaks down into many self-contained parts, or objects. Each object has a unique behavior and interacts with the other objects. When you put all the objects together, you form one distinct program that does a specific job.

Abstraction is the creation of these objects. These objects are generally hierarchical. On one level, you have the program as a whole (the car). Within the program, you have individual objects (the engine, transmission, etc.), and within those objects, you have even more data (the parts that make up an engine). By breaking down a larger system into smaller, self-contained parts, you make the system’s complexity much easier to deal with.

Without abstraction, a program can become too complex to manage. Instead, abstraction allows the programmer to think about his program hierarchically, making the complexity easier to think about.

<br> 
# Encapsulation

Encapsulation is actually a pretty simple concept. It’s basically a mechanism used to create a protective layer around your code. When you make a new class, you want to seal off the class’ data and code from the outside world. Once encapsulated, a class’ data and code can’t be manipulated or changed by any outside code. The code’s implementation details become hidden and protected, making the program as a whole much safer and less susceptible to unwanted side effects.

Once encapsulated, the only way to interact with a class is through a public interface. The public interface is everything an external user of the class needs to know. To use the car example again, an interface is kind of like a break pedal or turn signal. When you push down on the break pedal, you interact with the breaking system, but you also don’t tamper with the system in any way. What’s more, pushing down on the break pedal also doesn’t make the turn signal come on. The break pedal is an interface to the breaking system that doesn’t manipulate the internal sytem and is also self-contained from any of the other systems in the car.

In the same way, an interface interacts with a class, but doesn’t mess with the internal data and doesn’t interface to any other class but the intended one.

So, encapsulation is basically a locked box for your classes. You put the class in the locked box, and the only way it can be interacted with is through the interface you design.

<br>
# Inheritance

Inheritance stems from the fact that object-oriented programs are hierarchical.

Because there is a hierarchy of objects, objects that are lower in the hierarchy can “inherit” properties from objects that are higher. The higher objects are called parent objects and the inheriting objects are called child objects. In this special relationship between objects, the child objects inherits all the properties from the parent object, while also possessing some of its own properties that make it unique. Basically, think of a child object as the parent object plus some additional distinguishing features.

Object-oriented programs use inheritance because it makes growing the program easier. When subclasses inherit features from the parent classes, the shared features make the interactions between the two classes more predictable.

<br>
# Polymorphism

As Steve Guidetti describes, Polymorphism is a really complicated word for a really simply concept. According to his definition:

> Polymorphism describes a pattern in object oriented programming in which classes have different functionality while sharing a common interface.

In other words, polymorphism lets you have one interface for several different actions. The commonly used phrase for polymorphism is “one interface, many methods.” Depending on the situation, or in other words, the type of data being operated upon, a single polymorphic interface is capable of handling each situation in a unique way.

Because you only need to build one interface to handle a general class of actions, polymorphism reduces a program’s complexity dramatically.

<br>
# Conclusion

Abstraction, encapsulation, inheritance, and polymorphism are all methods of organizing code in a way that makes complexity more manageable. Put together, these concepts create programs that are well-organized and simple to understand.
