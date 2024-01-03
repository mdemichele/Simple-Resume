---
layout: post 
title: "Basic npm Commands to Make Life Easier"
category: Technical Essays
---

Working in a Node.js environthere are a number of command line commands that I'm finding myself using all the time. These command aren't necessarily things that are taught in a CS program. Many of them are also not commands that you'd likely remember if you don't have to use them all the time. 

Here are some useful npm commands.

1. npm ci 

This command removes existing node_modules folder and reinstalls everything in package.json. I've learned this is a useful solution to situations in which node.js ends up in a bad state somehow. If you can't figure out what is causing the bad state, blow out the existing modules and reinstall everything with `npm ci`.

2. npm ls

This command lists the full dependency tree of package.json. Like the above command, this one is also useful for understanding what your dependencies are in your project. 