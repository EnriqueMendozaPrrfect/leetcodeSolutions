/*
  Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.

  Example 1:

  Input: s = "00110110", k = 2
  Output: true
  Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.
  Example 2:

  Input: s = "0110", k = 1
  Output: true
  Explanation: The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring. 
  Example 3:

  Input: s = "0110", k = 2
  Output: false
  Explanation: The binary code "00" is of length 2 and does not exist in the array.
  

  Constraints:

  1 <= s.length <= 5 * 105
  s[i] is either '0' or '1'.
  1 <= k <= 20
 */

/*
  you need considering the number of binary codes of length k is 2^k
  so we need to check if the set size is equal to 2^k

  for example if k = 2, then 2^2 = 4, so we need to check if the set size is equal to 4
  [00, 01, 10, 11]

  if k = 3, then 2^3 = 8, so we need to check if the set size is equal to 8
  [000, 001, 010, 011, 100, 101, 110, 111]
*/

// SOLUTION
function hasAllCodes(s: string, k: number): boolean {
  const set = new Set<string>();

  for (let i = 0; i <= s.length - k; i++) {
    set.add(s.substring(i, i + k));
  }

  return set.size === Math.pow(2, k);
}

// EXPLANATION
function hasAllCodesExplanation(s: string, k: number): boolean {
  // IMPORTANT:  Remember Set only store unique values
  const set = new Set<string>(); // we create a set to store the binary codes

  for (let i = 0; i <= s.length - k; i++) { // we iterate through the string
    set.add(s.substring(i, i + k)); // we add the binary code to the set
  }

  return set.size === Math.pow(2, k); // we return true if the size of the set is equal to 2^k
}