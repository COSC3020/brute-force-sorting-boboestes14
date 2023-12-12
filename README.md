[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12557373&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


## Runtime Analysis

The runtime complexity of my algorithm would be n*n!. Because no matter what we have to check if the array is sorted which takes n time, then we have to run through the permutations which can take up to n! Time. so therefore the time complexity would be n*n!. The best case for time complexity is n, the worst case would be n*n!. 

If there weren't stored memory, then the complexity would change to be in the worst case infinity, in the best case it would still be n, and on average it would take n*n! Time to complete.