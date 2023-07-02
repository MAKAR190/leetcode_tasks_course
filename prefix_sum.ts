function runningSum(nums: number[]): number[] {
  let prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  return prefix;
}

function minStartValue(nums: number[]): number {
  let startValue: number = 1;
  while (true) {
    let isValid: boolean = true;
    let total = startValue;
    for (const num of nums) {
      total += num;
      if (total < 1) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      return startValue;
    } else {
      startValue += 1;
    }
  }
}
