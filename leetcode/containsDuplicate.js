const hasDuplicates = (nums) => {
  const sort = nums.sort((a, b) => a - b);
  const map = new Map();
  let result = false;
  sort.forEach((num) => {
    map.set(num, !map.get(num) ? 1 : map.get(num) + 1);
  });

  map.forEach((value) => {
    if (value > 1) {
      result = true;
    }
  });

  return result;
};

const num_arr = [1, 2, 3, 4];
const result = hasDuplicates(num_arr);
console.log(result);
