let permuteUnique = function (nums) {
  let result = [];
  let a = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    let temp = {};
    for (let j = i; j < nums.length; j++) {
      if (temp[nums[j]]) continue;
      temp[nums[j]] = true;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      a(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  a(0, nums);
  return result;
};

console.log(permuteUnique([1, 2, 3]));
