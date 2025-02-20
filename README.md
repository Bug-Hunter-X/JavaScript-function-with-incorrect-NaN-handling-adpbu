# JavaScript NaN Handling Bug

This repository demonstrates a common yet subtle bug in JavaScript related to handling NaN (Not a Number) values in division operations. 

## Bug Description
The `myFunc` function aims to perform a division.  However, it only explicitly checks for 0 as the input, leading to unexpected behavior if either `a` or `b` is NaN.

## Solution
The solution employs a more robust approach. It explicitly checks for `isNaN` to manage scenarios where inputs are NaN. The function now returns NaN appropriately when either input is NaN, while correctly handling other cases.