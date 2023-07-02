function findMaxAverage(nums: number[], k: number): number {
  let ans = 0;
  let curr = 0;

  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }
  ans = curr;

  for (let i = k; i < nums.length; i++) {
    curr += nums[i] - nums[i - k];
    ans = Math.max(ans, curr);
  }

  return ans / k;
}

function longestOnes(nums: number[], k: number): number {
  let left: number = 0;
  let curr: number = 0;
  let ans: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      curr += 1;
    }

    while (curr > k) {
      if (nums[left] === 0) {
        curr -= 1;
      }
      left += 1;
    }

    ans = Math.max(ans, i - left + 1);
  }
  return ans;
}

function getAverages(nums: number[], k: number): number[] {
  if (k === 0) {
    return nums;
  }

  let avgs = new Array(nums.length).fill(-1);

  if (2 * k + 1 > nums.length) {
    return avgs;
  }

  let windowSum = 0;
  for (let i = 0; i < 2 * k + 1; i++) {
    windowSum += nums[i];
  }

  avgs[k] = Math.floor(windowSum / (2 * k + 1));

  for (let i = 2 * k + 1; i < nums.length; i++) {
    windowSum = windowSum - nums[i - 2 * k - 1] + nums[i];
    avgs[i - k] = Math.floor(windowSum / (2 * k + 1));
  }

  return avgs;
}
[2,4,3,45,45,4,6]