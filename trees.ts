/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
    if(!root){
        return 0;
    }

    let left = minDepth(root.left);
    let right = minDepth(root.right);
    if(left && right){
        return Math.min(left, right) + 1;
    }
    return Math.max(left, right) + 1;
};


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxAncestorDiff(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    function dfs(node, minSoFar, maxSoFar) {
        if (!node) {
            return maxSoFar - minSoFar;
        }

        minSoFar = Math.min(minSoFar, node.val);
        maxSoFar = Math.max(maxSoFar, node.val);

        const leftDiff = dfs(node.left, minSoFar, maxSoFar);
        const rightDiff = dfs(node.right, minSoFar, maxSoFar);

        return Math.max(leftDiff, rightDiff);
    }

    return dfs(root, root.val, root.val);
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    if(!root){
        return 0;
    }

    function height(node){
        if(!node){
            return 0;
        }
        return Math.max(height(node.left), height(node.right)) + 1;
    }

    function callTheDiameter(node){

        if(!node){
            return 0;
        }

        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        let diameterThroughNode = leftHeight + rightHeight;

        let leftDiameter = callTheDiameter(node.left);
        let rightDiameter = callTheDiameter(node.right);

        return Math.max(diameterThroughNode, leftDiameter, rightDiameter);

    }
    return callTheDiameter(root);

};
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deepestLeavesSum(root: TreeNode | null): number {
    if(!root){
        return 0;
    }

    let ans:number = 0;
    let queue = [root]

    while(queue.length){
        let lengthOfCurrentLevel = queue.length;
        let nextQueue = [];

        for (let i = 0; i < lengthOfCurrentLevel; i++) {

            let node = queue[i];

            if(node.left){
                nextQueue.push(node.left)
            }
            if(node.right){
                nextQueue.push(node.right)
            } else if(!nextQueue.length){
                ans = queue.reduce((acc, el)=>acc+=el.val, 0);
            }
        }
        queue = nextQueue
    }

    return ans;
};


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {

    if (!root) {
        return [];
    }

    let result = []
    let isReverse = true
    let queue = [root]

    while (queue.length) {
        let currentLevelLength = queue.length;
        let newQueue = [];

        for (let i = 0; i < currentLevelLength; i++){
            let node = queue.shift();
            newQueue.push(node.val)

            if(node.right){
                queue.push(node.right)
            }
            if(node.left){
                queue.push(node.left)

            }

        }

        if (isReverse) {
            newQueue.reverse();
        }

        result.push(newQueue)
        isReverse = !isReverse
    }
    return result;
};