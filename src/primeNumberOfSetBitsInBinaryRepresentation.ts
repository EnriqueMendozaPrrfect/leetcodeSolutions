/*
  Prime Number of Set Bits in Binary Representation

  Given two integers left and right, return the count of numbers in the inclusive range [left,
  right] having a prime number of set bits in their binary representation.

  Recall that the number of set bits an integer has is the number of 1's present when written in binary.

  For example, 21 written in binary is 10101, which has 3 set bits.
  
  Example 1:

  Input: left = 6, right = 10
  Output: 4
  Explanation:
  6  -> 110 (2 set bits, 2 is prime)
  7  -> 111 (3 set bits, 3 is prime)
  8  -> 1000 (1 set bit, 1 is not prime)
  9  -> 1001 (2 set bits, 2 is prime)
  10 -> 1010 (2 set bits, 2 is prime)
  4 numbers have a prime number of set bits.
  Example 2:

  Input: left = 10, right = 15
  Output: 5
  Explanation:
  10 -> 1010 (2 set bits, 2 is prime)
  11 -> 1011 (3 set bits, 3 is prime)
  12 -> 1100 (2 set bits, 2 is prime)
  13 -> 1101 (3 set bits, 3 is prime)
  14 -> 1110 (3 set bits, 3 is prime)
  15 -> 1111 (4 set bits, 4 is not prime)
  5 numbers have a prime number of set bits.
*/
/*
  Maybe an easier way to understand the problem is, betewn 2 numbers, the number of 1s into each
  number as a binary number is a prime number? and how many numbers have a prime number of 1s?
*/

// SOLUTION
const isPrime = (number: number) => {
  if (
    number == 2
    || number == 3
    || number == 5
    || number == 7
    || number == 11
    || number == 13
    || number == 17
    || number == 19
  ) {
    return true;
  }

  return false
}

function countPrimeSetBits(left: number, right: number): number {
  let x: number, response = 0;

  for (let i = left; i <= right; i++) {
    x = 0;
    i.toString(2)
      .split("")
      .forEach(e => e === "1" ? x++ : x);

    response = isPrime(x)
      ? response + 1
      : response;
  }

  return response;
};

// SOULTION EXPLANATION
/*
  isPrime is a function that checks if a number is prime
  it returns true if the number is prime and false otherwise,
  we use the or operator because it complexity is O(1)
*/
const isPrimeExplanation = (number: number) => {
  // ...
}

function countPrimeSetBitsExplanation(left: number, right: number): number {
  let prime: number, response = 0;

  for (let i = left; i <= right; i++) {
    prime = 0; // we will use prime as a variable to count the number of set bits

    i.toString(2) // we convert the number to binary
      .split("") // we split the binary number to array of strings
      .forEach(e => e === "1" ? prime++ : prime); // we iterate through the array and count the number of set bits

    response = isPrime(prime) // we check if the number of set bits is prime
      ? response + 1
      : response;
  }

  return response;
}