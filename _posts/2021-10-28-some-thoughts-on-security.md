---
layout: post 
title: "Some Thoughts on Security"
category: Technical Essays
---

As I move further into the world of engineering systems, it's becoming easier to take a higher level view of things. While it's easier to see the forest for what it is, one thing that stands out is just how tangled and confusing it all is. Far from the perfectly engineered marvels that we sometimes think they are, the systems that control our lives are, in reality, still full of just as much uncertainty as when they were first invented. That's not to say they haven't come a long way, but the more I learn about these kinds of systems, the more I'm made brutally aware of how vulnerable they really are. 

That's not a new or particularly original sentiment. The experts have known this since day one. In class this week, we read a conversation between Bruce Schneier and Marcus Ranum recorded in a 2009 edition of *Information Security* magazine. In their conversation together, these two legendary security experts take very different positions on the question of whether or not a perfect access control system is really possible. 

In Schneier's eyes, a perfect access control system isn't possible. There are too many grey areas, too many ways in which and opportunities for an organization to give away too much access to the wrong people at the wrong time. Organizations are full of people, which are exactly the kind of thing that gives rise to vulnerabilities in the first place. As long as a system needs to cater to humans, there will always be room for human error. As Schneier concludes, "in the end, a perfect access control system just isn't possible."

But Ranum disagreed. 

For Ranum, just because a perfect system is incredibly difficult or even impossible within our current models of security, doesn't mean that we shouldn't keep trying. In fact, we *have* to keep trying, or else, as he says, we're all "screwed." Everything in our world depends on effective systems. Just take national security, for example. Show too much data to the wrong eyes and top secret information is leaked. In a totally different industry, in the digital rights world, give too much data away and managing who has access to what becomes an impossible challenge. There's danger on all sides, in other words. 

Hence, in Ranum's eyes, saying that the problem might ultimately be impossible to solve isn't a good reason not to try. In his words, trying to ignore the problem of badly secured systems, while still trying to reap the benefits of all the cool things that distributed systems can do, is like trying to "have [your] cake and eat it too." 

That was in 2009. Eleven years later and third year computer science students like me are still learning about how difficult the problem of building these secure systems still is. What haven't we learned in the past decade that keeps these problems from being solved? 

As I think more about this problem, I'm reminded that a lot of it has to do with the pesky human element that we'd rather ignore than deal with. I'm just as lazy as anyone else. I don't like changing my passwords or doing the whole two-factor authentication thing where I have to pull out my phone, find the code, type in the code while trying to keep my phone screen on, and yada yada yada...

*"I'm just trying to log in to my hulu account, seesh!!"*

Well, now that I'm taking lessons from Ranum and Co., I'm learning that just trying to log in to hulu isn't just a matter of getting into my damn account. It's actually a problem that will screw me over if I choose to ignore it. You can't have a silky smooth user experience, where all your passwords are test123 and autosaved in your smart tv, and feel safe at night. It's just not how the world works when you actually take the time to look at it. 

In the devastatingly painful real world, full of shell-shacking hackers, Russian botnets, and all the other fun little realities lurking in the dark, you simply can't pretend that danger isn't lurking everywhere. To Ranum's point, you just can't reap the benefits of a truly secure system, whether personal or organizational, and not address some of the obvious problems at hand. You either have to choose security by militantly adopting better practices or you can live with the threat of digital insecurity. 

In reality, like the man said, you just can't have your cake and eat it too. 