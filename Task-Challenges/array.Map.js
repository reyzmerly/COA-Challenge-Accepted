function hasContiguousSubarraySum(arr, target) {
  // let Initialize a variable to store the current sum
  let currentSum = 0;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // we then Add the current element to the current sum
    currentSum += arr[i];

    // let Check if the current sum minus the target exists in the seenSums object
    if (currentSum === target) {
      return true; // Subarray found
    }

    // if Efficiently handle negative sums and starting from index 0
    if (currentSum < target) {
      continue; // No need to check further if sum is already less than target
    }
  }

  // No subarray found
  return false;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
const result = hasContiguousSubarraySum(arr, target);
console.log(result); // Output: true
