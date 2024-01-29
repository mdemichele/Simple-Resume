---
layout: post
title: "Pass By Reference Versus Pass By Value in JavaScript"
category: "Technical Essays"
---

# Introduction

# Definitions
Pass by reference means that when you pass a piece of data to a function or assign that piece of data to a new variable, what you're doing under the hood is passing a reference to the place in memory where that piece of data is actually stored. You're essentially pointing to the place in memory where the original piece of data lives and saying to the new variable or new function, "here, you're going to point to this same place in memory as well."

Pass by value means that when you pass a piece of data to a function or assign that piece of data to a new variable, what you're doing is creating a new copy of that original piece of data and giving it to that new function or variable. You're creating a new place in memory where the new function or variable will now point. That new place in memory has the same value as the original piece of data, but its stored in a completely different place in memory. 

# Implications
Pass by reference means that the original piece of data and the new piece of data remain coupled together. Changes to one will affect the other. The two pieces of data are dependent on each other.

Pass by value means that the original piece of data and the new piece of data are independent of each other. Changes to one will not affect the other. 