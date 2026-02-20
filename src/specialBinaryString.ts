/*
Special binary strings are binary strings with the following two properties:

The number of 0's is equal to the number of 1's.
Every prefix of the binary string has at least as many 1's as 0's.
You are given a special binary string s.

A move consists of choosing two consecutive, non-empty, special substrings of s, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.

Return the lexicographically largest resulting string possible after applying the mentioned operations on the string.
 

Example 1:

Input: s = "11011000"
Output: "11100100"
Explanation: The strings "10" [occuring at s[1]] and "1100" [at s[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.

Example 2:

Input: s = "10"
Output: "10"

Constraints:

1 <= s.length <= 50
s[i] is either '0' or '1'.
s is a special binary string.
*/

/*
  Explaning if you change te 1s and 0s to 1=( and 0=) you will understand the problem better
  Example:
  Input: s = "11011000" = (()(()))
  Output: "11100100" = ((()))()

  if you see the example you will notice some parentheses are enclosed in other parentheses
  this means this is a recursive problem
  we can solve this problem by using recursion
  
  level 1: "11011000" = (()(()))
  level 2: "10" and "1100" = () and (()) 
  level 3: "10" = ()
*/

// SOLUTION:

function makeLargestSpecial(s: string): string {
  let res = [];
  let check = 0;
  let breackpoint = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      check++;
    } else {
      check--;
    }

    if (check === 0) {
      const inner = makeLargestSpecial(s.slice(breackpoint + 1, i));
      res.push("1" + inner + "0");
      breackpoint = i + 1;
    }
  }

  res.sort().reverse();
  return res.join("");
};

// Explaning Solution:

function makeLargestSpecialExplaning(s: string): string {
  let res = []; // this array will store the special substrings
  let check = 0; // this variable will check the balance of 1s and 0s
  let breackpoint = 0; // this variable will store the breakpoint of the special substrings

  for (let i = 0; i < s.length; i++) { // we iterate through the string
    if (s[i] === "1") { // if the character is 1, we increment the check
      check++;
    } else { // if the character is 0, we decrement the check
      check--;
    }

    // when this check is 0 it means we have found a special substring
    if (check === 0) {
      /*
        For the first run we will send "101100" to the function and the order will be 110010
        For the second run we will send "10" to the function and the order will be 10
        For the third run we will send "1100" to the function and the order will be 1100
        For the fourth run we will send "10" to the function and the order will be 10
      */
      const inner = makeLargestSpecial(s.slice(breackpoint + 1, i)); // we recursively call the function for the inner substring

      res.push("1" + inner + "0"); // we push the inner substring to the result array
      breackpoint = i + 1; // we update the breakpoint
    }
  }

  res.sort().reverse(); // we sort the result array in descending order
  return res.join(""); // we join the result array to form the final string
};