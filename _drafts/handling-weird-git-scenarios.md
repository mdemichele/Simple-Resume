---
layout: post
title: "Handling Weird Git Scenarios"
category: "Technical Essays"
---


# Scenario 1: You push local changes to remote branch, then realize you want to undo that commit.

I did this at work yesterday. One option would be to try to fix the remote branch. Or, the approach I took that was easiest was to delete the remote branch and rollback the local commit with `git revert commit #`. Then, once you've got your local branch back into a good state, you can push it to remote again.