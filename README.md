![meme](./assets/meme.jpg)
# My typescript examples

Typescript examples resolving LeetCode or HackerRank exercises

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
