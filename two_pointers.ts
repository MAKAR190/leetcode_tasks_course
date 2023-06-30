/**
 Do not return anything, modify s in-place instead.
 */

function reverseString(s: string[]): void {
  let left: number = 0;
  for (let right = s.length - 1; right >= left; right--) {
    let temp: string = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
  }
}

// --------------------------------------------

function sortedSquares(nums: number[]): number[] {
  let ans: number[] = [];
  let left: number = 0;
  let right: number = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    let square:number;
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      square = nums[right];
      right--;
    } else {
      square = nums[left];
      left++;
    }
    ans.unshift(square * square);
  }

  return ans;
}
