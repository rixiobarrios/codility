// This is a demo task.
// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
//
// let A = [1, 3, 6, 4, 1, 2];
//
// function solution(A) {
//     for (i = 1; i < 6; i++) {
//         if (!A.includes(i)) return i;
//     }
// }
//
// console.log(solution(A)); // 5
//
// let A = [1, 2, 3];

// Write a function solution that, given an integer N, return the maximum possible value obtained by inserting one '5' digit inside the decimal representation of integer N.
//
// Examples:
//
// 1. Given N = 268, the function should return 5268.
// 2. Given N = 670, the function should return 6750.
// 3. Given N = 0, the function should return 50.
// 4. Given N = -999, the function should return -5999.
//
// Assume that:
//
// N is an integer within the range [-8,000..8,000].
//
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
//
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//
// function solution(N) {
//     // write your code in JavaScript (Node.js 8.9.4)
// }

// A string is called balanced when every letter ocurring in the string, appears both upper-and lowercase. For example, the string "CATattac" is balanced('a', 'c' and 't' ocurr in both cases), but 'Madam' in not ('d' and 'a' appear only in lowercase). Note that the number of ocurrences does not matter.
//
// Write a function:
//
// that, given a string S of length N, return the length of the shortest balanced fragment of S. If S does not contain any balanced fragments, the function should return -1.
//
// Examples:
//
// 1. Given S = 'azABaabza', the function should return 5. The shortest balanced fragment of S is "ABaab".
//
// 2. Given S = "TacoCat", the function should return -1. There is no balanced fragment.
//
// 3. Given S = "AcZCbaBz", the function should return 8. The shortest balanced fragment is the whole string.
//
// 4. Given S = 'abcdefghijklmnopqrstuvwxyz', the functions should return -1.
//
// Assume that:
//
// N is an integer within the range [1.200];
// string S consist only of letters('a'-'z' and/or 'A'-'Z').N
//
// in your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
//
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
// }

// Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"). Write a javaScript function solution that, given a string S representing the day of the week and an integer K (between 0 and 500), returns the day of the week that is K days later. For example, given S = "Wed" and K = 2, the function should return "Fri". Given S = "Sat" and K = 23, the function should return "Mon".
//
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//
// function solution(S, K) {
//     // write your code in JavaScript (Node.js 8.9.4)
// }
//
// function solution(A, K) {
//     var n = A.length;
//     for (var i = 0; i < n - 1; i++) {
//         if (A[i] + 1 < A[i + 1]) return false;
//     }
//     if (A[0] != 1 && A[n - 1] != K) return false;
//     else return true;
// }
