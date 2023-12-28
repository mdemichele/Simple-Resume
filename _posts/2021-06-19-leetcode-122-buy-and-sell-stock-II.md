---
layout: post 
title: "Leetcode 122: Buy and Sell Stock II"
category: Technical Interviews
---
Leetcode defines the problem as follows:

`You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).`

Leetcode also gives three examples:

# Example 1:
`Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.`

# Example 2:
`Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.`

# Example 3:
`Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e., max profit = 0.`

Looking at the problem and the given examples, I was initially confused. My first thought was that perhaps this was a dynamic programming problem.

I thought this because, at first glance, it seems that there are multiple ways that a stock can be bought and sold.

For instance, take Leetcode’s first example. If our array of stock prices is [7,1,5,3,6,4], we could buy in at day 2 (price: 1) and sell at day 3 (price: 5). This gives us a profit of 4.

We could also, however, again buy in at day 2, but this time sell at day 4 (price: 3), although this would only give us a profit of 2.

Likewise, we could even buy in at day 2, but this time sell at day 5 (price: 6). This would give us a profit of 5.

Fifthly, we could also buy at day 2 and sell at day 6 (price: 4), although this would only give us a profit of 3.

So, there are five different ways we can profit if we buy in at day 2.


# Solution 1: Dynamic Programming…sort of
My first thought then to use dynamic programming to find every single way we can profit by buying in at a certain day. Then, I’d cycle through the list of profit solutions and pick out the most profitable one.

That was how I reached my first solution. In the solution below, I iterated through each day and found the most profitable solution if we were to buy at that particular day. I then saved this profit into a cache, called maxProfitCache.

<script src="https://gist.github.com/mdemichele/f7142c3bbd6c31ee696981f4facea7d0.js"></script>

If we were to run our first example of `[7,1,5,3,6,4]` through the code, our first for loop produces of cache array that looks like this: 
`[7, 7, 3, 3, 0].`

This array represents the profit that can be made if we were to start from each particular day and find the max profit that could be reached from that day forward.

Then, in the second for loop, I simple iterated through the profit array and found the max profit, which in this case was 7.

This solution, however, was pretty inefficient, not to mention, probably redundant. Because there is a while loop nested inside a for loop, I believe the solution is closer to O(n²). I’m also not entirely convinced it’s a correct usage of dynamic programming.

The main feature that I was at least a little proud of was the use of a cache array to save each of the possible solutions. While it may not have returned truly all of the possible solutions, it did pass the Leetcode tests and demonstrated a solution at least partially directed towards usage of dynamic programming.

# Solution 2: Peak-Valley Solution
While I was proud of my solution, I quickly found that there were other, much more efficient solutions out there.

Thanks to this article [LeetCode — 122. Best Time to Buy and Sell Stock II](https://medium.com/@rebeccahezhang/leetcode-122-best-time-to-buy-and-sell-stock-ii-fbf6d66d62e3) by Signal Cat, I found that a piece of my initial solution held the key to a much better solution.

As Signal Cat points out, the array that makes up our input, for example [7,1,5,3,6,4], can be represented graphically. Profit occurs at each “peak” and loss takes place at each “valley.”

Leetcode graphical representation of max profit problem
1[graph](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/)

The key insight is that the summation of the profits gained if you buy at each valley and sell at each peak is greater than the profit if you bought at the lowest valley and sold at the highest peak.

In other words, referencing the graph, C < A + B. This is always the case no matter how steep the peaks or how low the valleys.

The takeaway from this is that it’s not actually necessary to find every single profit solution and pick from the full cache of solutions.
We simply need to find every place in the graph where it goes from valley to peak and add the profits of each valley-to-peak transition.

This is accomplished with the same line of code from my initial solution:

`if prices[index] < prices[index + 1]:`

This line essentially checks for each place where the graph goes from valley to peak. The algorithm then needs to simply add the difference.
Leetcode gives us the mathematical description of this solution:

`TotalProfit=∑i​(height(peaki​)−height(valleyi​))`

In simple terms, add up the differences of every instance of peak minus valley, and you have your answer. Simple, right!
The code solution is even simpler:

<script src="https://gist.github.com/mdemichele/a485a5d1c9c448bfb3d840fd3f54e9d7.js"></script>

That simple piece of code gives us a solution that only iterates through the array once. Thus, its complexity is O(n), much more efficient than my original O(n²) solution.

# Conclusion

So, there were two solutions to the Buy and Sell Stock II problem on Leetcode. I hope you found them helpful.

If you enjoyed the article, or if you’re also a fellow programmer looking to hack it in technical interviews, feel free to reach out to me.

You can find me on [LinkedIn](https://www.linkedin.com/in/matthew-demichele-3a51a9139/).

Thanks for reading!