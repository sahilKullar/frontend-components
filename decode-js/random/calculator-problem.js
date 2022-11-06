// Problem statement #
//
// You are given three variables named left_operand, right_operand, and operator. Write code for operator values so that each value does the following:
//
// '+': Add left_operand to right_operand and assign the result to ans.
// '-': Subtract left_operand from right_operand and assign the result to ans.
// '*': Multiply left_operand with right_operand and assign the result to ans.
// '/': Divide right_operand with left_operand and assign the result to ans.
// For any other operator, assign NaN to ans.
//
// Remember, there are a lot of ifs to what the operator is. Find a solution to all ifs.

left_operand = 2; // left operand
right_operand = 3; // right operand
operator = "*";
let all_operators = ["+", "-", "*", "/"];
ans = NaN;
ans =
  operator === "+"
    ? left_operand + right_operand
    : operator === "-"
    ? right_operand - left_operand
    : operator === "*"
    ? left_operand * right_operand
    : operator === "/"
    ? right_operand / left_operand
    : NaN;
console.log(`Answer is ${ans}`);
