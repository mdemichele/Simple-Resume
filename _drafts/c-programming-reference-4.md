---
layout: post
title: "C Programming Language Manual 4: Structures"
category: "C Programming Manual"
---

Structures are a difficult concept to master. They combine some of the most unruly aspects of pointers, data types, and variables to form one massively vague headache. I have spent countless hours scratching my head in confusion trying to figure how structures actually work and what they are really used for.

Let's begin with a confusing definition from Kernigan and Ritchie:

"A structure is a collection of one of more variables, possibly of different types, grouped together under a single name for convenient handling."

If that definition didn't make sense, essentially think of structures as a convenient container that holds a bunch of different items that are supposed to be grouped together. For instance, the example Kernigan & Ritchie use is that of a payroll record. The payroll record needs to keep track of each employee. Each employee has a set of contact/personal information, such as name, address, social security number, and salary. This is a lot of data to keep track of, especially considering that each piece of an employee's personal information need to be represented as a different data type (i.e. name will be a character array, salary will be a floating point, etc). The most convenient way to organize this amount of information is with a structure:

```

    struct payroll {
        char *name;
        char *address;
        int social;
        float salary;
    }

```

All of the variables within the structure can be accessed by reference to the structure itself. The variables within the structure are called *members*.

