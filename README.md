![meme](./assets/meme.jpg)
# My typescript examples

Typescript examples resolving LeetCode or HackerRank exercises

* [LeetCode](https://leetcode.com)
    * Algorithms
        * Easy
          * [Integer to roman](https://leetcode.com/problems/integer-to-roman/)
          * [Plus one](https://leetcode.com/problems/plus-one/)
          * [Add binary](https://leetcode.com/problems/add-binary/)
          * [Add array form of integer](https://leetcode.com/problems/add-to-array-form-of-integer/)
        * Medium
          * [Add two numbers](https://leetcode.com/problems/add-two-numbers/)
          * [Multiply strings](https://leetcode.com/problems/multiply-strings/)


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
