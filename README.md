![meme](./assets/meme.jpg)
# My typescript examples

Typescript examples resolving LeetCode or HackerRank exercises

* [LeetCode](https://leetcode.com)
    * Algorithms
        * Easy
          * [Add array form of integer](https://leetcode.com/problems/add-to-array-form-of-integer/)
          * [Add binary](https://leetcode.com/problems/add-binary/)
          * [Integer to roman](https://leetcode.com/problems/integer-to-roman/)
          * [Plus one](https://leetcode.com/problems/plus-one/)
        * Medium
          * [Add two numbers](https://leetcode.com/problems/add-two-numbers/)
          * [Multiply strings](https://leetcode.com/problems/multiply-strings/)
* [HackerRank](https://www.hackerrank.com)
    * Algorithms
        * Easy
          * [Compare de triplets](./src/hackerrank/algorithms/easy/compareTheTriplets.md)
          * [Diagonal difference](./src/hackerrank/algorithms/easy/diagonalDifference.md)
          * [Plus minus](./src/hackerrank/algorithms/easy/plusMinus.md)
          * [Simple array sum](./src/hackerrank/algorithms/easy/simpleArraySum.md)
          * [Solve me first](./src/hackerrank/algorithms/easy/solveMefirst.md)
          * [Staircase](./src/hackerrank/algorithms/easy/staircase.md)

## Install your environment

Install dependencies to run all commands:

```bash
npm i
```

## Check exercises

In order to check the source code of the exercises, you can use the following command:

```bash
npm tests
```

## Add new exercises

You could add a new exercise with him test only follow the same pattern:

```
myNewExerciseFile.ts        // Exercise source code
myNewExerciseFile.test.ts   // Exercise test code
```

In order to write your source code while test are running you could run:

```bash
npm run test:watch
```
