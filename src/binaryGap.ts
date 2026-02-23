/*
  Given a positive integer n, find and return the longest distance between any two adjacent 1's in
  the binary representation of n. If there are no two adjacent 1's, return 0.

  Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance
  between two 1's is the absolute difference between their bit positions. For example, the two 1's
  in "1001" have a distance of 3.

  Example 1:

  Input: n = 22
  Output: 2
  Explanation: 22 in binary is "10110".
  The first adjacent pair of 1's is "10110" with a distance of 2.
  The second adjacent pair of 1's is "10110" with a distance of 1.
  The answer is the largest of these two distances, which is 2.
  Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.
  Example 2:

  Input: n = 8
  Output: 0
  Explanation: 8 in binary is "1000".
  There are not any adjacent pairs of 1's in the binary representation of 8, so we return 0.
  Example 3:

  Input: n = 5
  Output: 2
  Explanation: 5 in binary is "101".
*/
/*
  the easier way to understand this problem is, in a number you recive, convert that number to binary
  and then count the number of 0's between two 1's.

  thinking 11 is distance 1, 101 is distance 2, 1001 is distance 3;
*/

// SOLUTION
function binaryGap(n: number): number {
  let binary: string[] = n.toString(2).split("");
  let x: number, hight = 0;

  binary.forEach((val) => {
    if (val === "1") {
      if (x > hight) hight = x;

      x = 1;
    } else {
      x++;
    }
  });


  return hight;
};

// EXPLANATION
function binaryGapExplanation(n: number): number {
  let binary: string[] = n.toString(2).split(""); // we convert the number to binary and split it into an array of strings
  let x: number, hight = 0; // x is the distance between two 1's, hight is the maximum distance

  binary.forEach((val) => {
    if (val === "1") { // if the value is 1, we check if the distance is greater than the maximum distance
      if (x > hight) hight = x;

      x = 1; // we reset the distance
    } else { // if the value is 0, we increment the distance
      x++;
    }
  });


  return hight;
};
