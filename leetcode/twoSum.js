const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
};

const nums = [-1, -2, -3, -4, -5];
const target = -8;
const result = twoSum(nums, target);

console.log(result);
