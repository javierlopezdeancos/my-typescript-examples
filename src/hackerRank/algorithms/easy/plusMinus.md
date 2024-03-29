# Plus Minus

Take a look to the complete description of [exercise in HackerRank](https://www.hackerrank.com/challenges/plus-minus)

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.

**Note**: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to are acceptable.

## Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

- int arr[n]: an array of integers

## Print

Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with digits after the decimal. The function should not return a value.

## Input Format

The first line contains an integer, , the size of the array.
The second line contains space-separated integers that describe .

## Output Format

**Print** the following **3** lines, each to **6** decimals:

1.proportion of positive values
2.proportion of negative values
3.proportion of zeros

## Sample Input

```
STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```

## Sample Output

```
0.500000
0.333333
0.166667
```

## Explanation

There are **3** positive numbers, **2** negative numbers, and **1** zero in the array.

The proportions of occurrence are positive: **3/6=0.500000**, negative:**2/6=0.333333** and zeros: **1/6=0.166667**.
