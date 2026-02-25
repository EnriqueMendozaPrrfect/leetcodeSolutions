/*
You are given an integer array arr. Sort the integers in the array in ascending order by the
number of 1's in their binary representation and in case of two or more integers have the same
number of 1's you have to sort them in ascending order.

Return the array after sorting it.

Example 1:

Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]
Example 2:

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in
ascending order.

Constraints:

1 <= arr.length <= 500
0 <= arr[i] <= 104
*/

// SOLUTION
function sortByBits(arr: number[]): number[] {
  const regex = new RegExp(/1/, 'gi');
  const sortMatrix: number[][] = [];

  const arrayByteMap = arr.forEach((val) => {
    let sortDirection = val.toString(2).match(regex)?.length ?? 0;
    if (!sortMatrix[sortDirection]) {
      sortMatrix[sortDirection] = [val];
    } else {
      sortMatrix[sortDirection].push(val);
    }
  });

  return sortMatrix.map(arr => arr.sort((a, b) => a - b)).flat();
};

// COMMENTED SOLUTION
function sortByBitsExplained(arr: number[]): number[] {
  const regex = new RegExp(/1/, 'gi'); // we will use regex to count the number of 1's in the binary representation of each number
  const sortMatrix: number[][] = []; // this will store the sorted array

  const arrayByteMap = arr.forEach((val) => {
    // this will count the number of 1's in the binary representation of each number
    let sortDirection = val.toString(2).match(regex)?.length ?? 0;

    if (!sortMatrix[sortDirection]) {
      sortMatrix[sortDirection] = [val];
    } else {
      sortMatrix[sortDirection].push(val);
    }
  });

  return sortMatrix
    .map(arr => arr.sort((a, b) => a - b)) // this will sort the array in ascending order
    .flat(); // this will flatten the array
};

