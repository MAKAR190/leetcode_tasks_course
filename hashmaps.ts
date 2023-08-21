function checkIfPangram(sentence: string): boolean {
  const result = new Set([...sentence]);
  return Array.from(result).length === 26;
}

function missingNumber(nums: number[]): number {
  const set = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return 0;
}
function countElements(arr: number[]): number {
  const map = new Map();
  let ans: number = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i] + 1)) {
      ans += 1;
    }
  }
  return ans;
}

function findWinners(matches: number[][]): number[][] {
  const players = new Map();
  let losers = [];
  let winners = [];
  for (let i = 0; i < matches.length; i++) {
    const loser = matches[i][1];
    const winner = matches[i][0];

    players.set(loser, players.get(loser) + 1 || 1);
    players.set(
      winner,
      players.get(winner) && players.get(winner) !== 0 ? players.get(winner) : 0
    );
  }
  for (const [key, value] of players) {
    if (value === 1) {
      losers.push(key);
    } else if (value === 0) {
      winners.push(key);
    }
  }
  return [winners.sort((a, b) => a - b), losers.sort((a, b) => a - b)];
}

function largestUniqueNumber(nums: number[]): number {
  const map = new Map();
  let max: number = 0;
  let passed: boolean = true;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value > 1) {
      passed = false;
    } else {
      passed = true;
      max = Math.max(max, key);
    }
  }
  if (passed) {
    return max;
  }

  return -1;
}

function maxNumberOfBalloons(text: string): number {
  let total: number = Infinity;
  let word: string = "balloon";
  let count = new Map();
  for (let i = 0; i < text.length; i++) {
    count.set(text[i], (count.get(text[i]) || 0) + 1);
  }

  for (let char of word) {
    if (!count.has(char)) {
      return 0;
    }

    total = Math.min(
      total,
      Math.floor(count.get(char) / (char === "l" || char === "o" ? 2 : 1))
    );
  }

  return total;
}

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineMap = new Map();

  for (const char of magazine) {
    magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    const count = magazineMap.get(char);
    if (count === undefined || count <= 0) {
      return false;
    }

    magazineMap.set(char, count - 1);
  }

  return true;
}
function numJewelsInStones(jewels: string, stones: string): number {
  let count: number = 0;
  const jewelsMap = new Map();

  for (const jewel of jewels) {
    jewelsMap.set(jewel, (jewelsMap.get(jewel) || 0) + 1);
  }

  for (const stone of stones) {
    if (jewelsMap.has(stone)) {
      count += 1;
    }
  }

  return count;
}
function lengthOfLongestSubstring(s: string): number {
  let dic = new Map();
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (dic.has(s[i]) && dic.get(s[i]) >= start) {
      start = dic.get(s[i]) + 1;
    }
    dic.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}
