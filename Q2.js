let nums = [9,6,4,2,3,5,7,0,1]
let exectedSum = (nums.length * (nums.length + 1)) / 2;
let sum = 0;

for(let i = 0 ; i < nums.length ; i++)
    sum += nums[i]

console.log(exectedSum - sum);

// The concept involves calculating the anticipated sum of the array assuming that no numbers are missing.
// We then deduce this calculated sum from the actual sum, the result is the missing number. 
// This process operates in linear time complexity O(n), 
// as we iterate through the array once, and the time complexity for other operations is constant O(1), 
// and the space complexity remains constant since no additional memory is utilized.