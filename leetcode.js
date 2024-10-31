/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};
console.log(
  reduce(
    [1, 2, 3],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
);
