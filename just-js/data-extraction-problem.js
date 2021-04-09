// Problem statement #
//
// You are given four variables: raw_array, row, s, and e. Each variable represents the following:
//
// raw_array: variable to which the data set in a two-dimensional array is assigned
// row: row index in which the sub-array resides
// s: starting index of the sub-array in raw_array
// e: last index of the sub-array in raw_array
//
// Create a copy of the single-dimension sub-array at row index row which starts from index s and ends at index e. Assign it to ans.

const raw_arr = [
  [200, 50, 300, 5],
  [10, 25, 7, 100],
  [25, 20, 70, 45],
  [500, 170, 11, 35],
]; // Input Data
const row = 1; // Row index
const s = 0; // subarray start index
const e = 2; // subarray end index
let ans = null; // final answer
ans =
  raw_arr.length <= row || row < 0
    ? undefined
    : (ans =
        raw_arr[row].length <= e || raw_arr[row].length <= s
          ? undefined
          : (ans =
              e < 0 || s < 0
                ? undefined
                : (ans = s > e ? undefined : raw_arr[row].slice(s, e + 1))));

console.log(`Answer is: ${ans}`);

// if(raw_arr.length <= row || row < 0){
//     // check if row index is within the array
//     ans = undefined;
// }
// else if(raw_arr[row].length<= e || raw_arr[row].length<= s){
//     // check if s or e is greater than length of the array
//     // they are indices of
//     ans = undefined;
// }
// else if(e < 0 || s < 0){
//     // Check if s or e is negative
//     ans = undefined;
// }
// else if(s > e){
//     // Check if start is greater than end
//     ans = undefined;
// }
// else{
//     // If all indices in bounds, then assign ans a slice
//     // of raw_arr at index row from s to e
//     ans = raw_arr[row].slice(s,e+1);
// }
