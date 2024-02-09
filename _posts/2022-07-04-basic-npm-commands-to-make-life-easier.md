---
layout: post 
title: "Basic npm Commands to Make Life Easier"
category: Technical Essays
---

Working in a Node.js environment there are a number of command line commands that I'm finding myself using all the time. These command aren't necessarily things that are taught in a CS program. Many of them are also not commands that you'd likely remember if you don't have to use them all the time. 

Here are some of those useful npm commands.

# npm ci 

This command removes existing node_modules folder and reinstalls everything in package.json. I've learned this is a useful solution to situations in which node.js ends up in a bad state somehow. If you can't figure out what is causing the bad state, blow up the existing modules and reinstall everything with `npm ci`.

One thing to keep in mind with this command is that in order for the command to work, you need to make sure that your `package.json` and `package-lock.json` files are aligned. If you added a new package to your `package.json` manually, but didn't run `npm install`, you'll need to make sure you run `npm install` first before you run `npm ci`. This might be a little redundant, but at least, after you run both `npm install` and `npm ci`, you can mostly be sure that your node_modules folder is is a good state.

# npm ls

This command lists the full dependency tree of package.json. Like the above command, this one is also useful for understanding what your dependencies are in your project. 

# npm audit

This is another great command for understanding the state of your dependencies. Nearly every JavaScript project I've worked on contains numerous outdated packages. Using `npm audit` is a great way to tell which of these packages need to be updated. Some of these packages might even need to be updated with a little more urgency if they contain vulnerabilities labeled as "critical". I've found that npm audit is also a great way to tell which libraries may be unmaintained. If a package contains numerous vulnerabilities that haven't been fixed for a long time, it might be a good sign that the project may no longer be actively maintained. 