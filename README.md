![meme](./assets/boom.png)

# My typescript examples

Typescript examples resolving LeetCode or HackerRank exercises
- Algorithms
  - [Linked List](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)
    - [Linked list values](./src/algorithms/linkedList/linkedListValues.md).
    - [Sum list](./src/algorithms/linkedList/sumList.md).
    - [Get node value](./src/algorithms/linkedList/getNodeValue.md).
    - [Find target](./src/algorithms/linkedList/findTarget.md).
    - [Reverse list](./src/algorithms/linkedList/reverseList.md).
    - [Zipper list](./src/algorithms/linkedList/zipperLists.md).
  - [Binary tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)
    - [Breadth first values](./src/algorithms/binaryTree/breadthFirstValues.md).
    - [Depth first values](./src/algorithms/binaryTree/depthFirstValues.md).
    - [Tree includes](./src/algorithms/binaryTree/treeIncludes.md).
    - [Tree min value](./src/algorithms/binaryTree/treeMinValue.md).
    - [Tree sum](./src/algorithms/binaryTree/treeSum.md).
    - [Max root to leaf path sum](./src/algorithms/binaryTree/maxRootToLeafPathSum.md).
- [LeetCode](https://leetcode.com)
  - Algorithms
    - Easy
      - [Add array form of integer](./src/leetCode/algorithms/easy/addToArrayFormOfIntegers.md)
      - [Add binary](./src/leetCode/algorithms/easy/addBinary.md)
      - [Integer to roman](https://leetcode.com/problems/integer-to-roman/)
      - [Plus one](./src/leetCode/algorithms/easy/plusOne.md)
    - Medium
      - [Add two numbers](./src/leetCode/algorithms/medium/addTwoNumbers.md)
      - [Multiply strings](https://leetcode.com/problems/multiply-strings/)
- [HackerRank](https://www.hackerrank.com)
  - Algorithms
    - Easy
      - [Compare de triplets](./src/hackerRank/algorithms/easy/compareTheTriplets.md)
      - [Diagonal difference](./src/hackerRank/algorithms/easy/diagonalDifference.md)
      - [Plus minus](./src/hackerRank/algorithms/easy/plusMinus.md)
      - [Repeated String](./src/hackerRank/algorithms/easy/repeatedString.md)
      - [Simple array sum](./src/hackerRank/algorithms/easy/simpleArraySum.md)
      - [Solve me first](./src/hackerRank/algorithms/easy/solveMeFirst.md)
      - [Staircase](./src/hackerRank/algorithms/easy/staircase.md)
      - [Birthday Cake Candles](./src/hackerRank/algorithms/easy/birthdayCakeCandles.md)
- Real code interviews
  - [Count dupes](./src/realCodeInterviews/countDupes.md)

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
