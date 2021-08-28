/*
 * @Autor: Guo Kainan
 * @Date: 2021-08-27 13:34:25
 * @LastEditors: Guo Kainan
 * @LastEditTime: 2021-08-27 13:34:25
 * @Description: 
 */
/**
 * @param {number[]} nums 升序数字列表
 * @param {number} target 目标数字
 * @return {number}
 */
 var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start < end) {
      const center = start + Math.floor((end - start) / 2)
      if (nums[center] === target) { 
          return center 
      }
      else if (nums[center] < target) {
          start = center + 1
      }
      else {
          end = center - 1
      }
  }

  return nums[start] === target ? start : -1
}