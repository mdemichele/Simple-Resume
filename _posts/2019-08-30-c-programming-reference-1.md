---
layout: post
title: "C Programming Language Manual 1: Data Types, Memory layout, and Pointers"
category: C Programming Manual
---

These series of posts will be a working reference for my growing knowledge of the C programming language. I recognize that as I develop my fluency of the language, concepts will be reworked in my brain and restructured to fit my growing frame of reference. But, these posts will reflect my thought process at each stage of the *long* journey. This will act like a digitalized personal notebook.

The notebook will address everything I know about C, starting with the first logical starting point. So, without further introduction, let's start at the beginning.

### Data Types and Computer Memory

Every programming language has a way to handle a computer's memory. Naturally, the first question to ask then is, how does C handle memory? 

Well, C is a "typed language." Therefore, C defines several basic *data types* and allocates a specific amount of memory for each type. The basic data types in C are:

              1. char - 1 byte (8 bits)
              
              2. int - either 16 bits (short) or 32 bits (long)
              
              3. float - single precision floating point
              
              4. double - double precision floating point
  
As mentioned, each data type takes up a specific amount of computer memory. Now, this leads us to the next question. If we know that C defines specific data types and gives them each a specific amount of memory, how exactly is the memory laid out in the machine? 

The typical representation of how a C program handles the layout of memory consists of:

            1. Text segment - (aka code segment) is one of the sections of a program
             in an object file or in memory, which contains executable instructions.
            
            2. Initialized data segment - (aka data segment) is the portion of virtual 
            address space of a program, which contains the global variables and static 
            variables that are initialized by the programmer.
            
            3. Uninitialized data segment - (bss segment) starts at the end of the data 
            segment, contains all global variables and static variables, initialized 
            to zero.
            
            4. Stack - the stack area contains the program stack, a LIFO structure, 
            typically located in the higher parts of memory.
            
            5. Heap - the segment where dynamic memory allocation usually takes place. 

Visually, this typical representation of a C program looks like this:

![C memory layout](https://he-s3.s3.amazonaws.com/media/uploads/383f472.png)
`credit: hackerearth.com`

Each of the basic data types in C take up a physical location in this memory layout. I say "physical" because the data types are, indeed, physically represented as bytes in the machine (bytes are one of the basic units of digital information). For instance, if the programmer creates an integer (int) in a C program, that int actually takes up 16 bytes of physical space in the computer's memory. Those 16 bytes of space now belong to the int that the programmer has created. That space in memory is real and has what's know as an *address*. The address can be referenced throughout the program. That space in memory belonging to the int can also be given a *value*. That given value will live at the int's address. The value can also be referenced throughout the program. 

Each of the basic data types function the same way in C. They all take up a physical location, or address, in memory, and the programmer can reference that data type's address or value throughout the C program. 

Now, C also defines another category of more complicated data types, known as pointers and arrays.

### Pointers

Pointers in the C language are notoriously difficult to understand for new programmers. Pointers honestly took me months to really figure out, and even today, I sometimes have to pause and clear off a few mental cobwebs when I try to conceptualize them. However, with a little bit of explanation, the concept of pointers eventually makes sense (sort of).

The key to understanding pointers is to recognize that pointers are fundamentally different from the basic data types. Basic data types are allocated a location in memory, an address. Pointers, on the other hand, store references to those memory locations occupied by basic data type variables. Note the word "reference". That word is the key to avoiding most of the confusion surrounding pointers. The simplest way to think about a pointer is as a reference to an address or location in memory. Whereas a basic data type occupies a certain chunk of memory and fills that chunk with a value, a pointer points to some other location in memory and gives back a reference to that location. Again, a pointer is simply a reference. That explanation is simplified, but it's sufficient for now. 

Also note that a pointer declaration in C looks like this:

```C
    int *p;
```

This means that p is a pointer to an integer. 

There are two operations in C that are commonly used when working with pointers.

            1. &  -  used to access the address of a variable
            
            2. *  -  declares a pointer variable; used to access the value stored in the address of a variable. 
            
Note that the ```&``` accesses the address, and the ```*``` accesses the value stored at the address. 

Because a pointer is merely a reference to a specific memory location, and not a basic data type itself, a pointer will take up less space in memory. For instance, in the example above, our pointer p is stored in a single byte, but can be used to point to the address of an integer, which may take up 16 bytes. 



 

