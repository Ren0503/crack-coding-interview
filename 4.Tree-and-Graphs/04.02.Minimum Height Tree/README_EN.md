# [04.02. Minimum Height Tree](https://leetcode-cn.com/problems/minimum-height-tree-lcci)

[中文文档](/lcci/04.02.Minimum%20Height%20Tree/README.md)

## Description

<p>Given a sorted (increasing order) array with unique integer elements, write an algo&shy;rithm to create a binary search tree with minimal height.</p>

<p><strong>Example:</strong></p>

<pre>

Given sorted array: [-10,-3,0,5,9],



One possible answer is: [0,-3,9,-10,null,5]，which represents the following tree: 



          0 

         / \ 

       -3   9 

       /   / 

     -10  5 

</pre>

## Solutions

<!-- tabs:start -->

### **Python3**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        def dfs(i, j):
            if i > j:
                return None
            if i == j:
                return TreeNode(nums[i])
            mid = (i + j) >> 1
            node = TreeNode(nums[mid])
            node.left = dfs(i, mid - 1)
            node.right = dfs(mid + 1, j)
            return node

        return dfs(0, len(nums) - 1)
```

### **Java**

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    private int[] nums;

    public TreeNode sortedArrayToBST(int[] nums) {
        this.nums = nums;
        return dfs(0, nums.length - 1);
    }

    private TreeNode dfs(int i, int j) {
        if (i > j) {
            return null;
        }
        if (i == j) {
            return new TreeNode(nums[i]);
        }
        int mid = (i + j) >>> 1;
        TreeNode node = new TreeNode(nums[mid]);
        node.left = dfs(i, mid - 1);
        node.right = dfs(mid + 1, j);
        return node;
    }
}
```

### **C++**

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<int> nums;

    TreeNode* sortedArrayToBST(vector<int>& nums) {
        this->nums = nums;
        return dfs(0, nums.size() - 1);
    }

    TreeNode* dfs(int i, int j) {
        if (i > j) return nullptr;
        if (i == j) return new TreeNode(nums[i]);
        int mid = i + j >> 1;
        TreeNode* node = new TreeNode(nums[mid]);
        node->left = dfs(i, mid - 1);
        node->right = dfs(mid + 1, j);
        return node;
    }
};
```

### **Go**

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedArrayToBST(nums []int) *TreeNode {
	var dfs func(i, j int) *TreeNode
	dfs = func(i, j int) *TreeNode {
		if i > j {
			return nil
		}
		if i == j {
			return &TreeNode{Val: nums[i]}
		}
		mid := (i + j) >> 1
		return &TreeNode{Val: nums[mid], Left: dfs(i, mid-1), Right: dfs(mid+1, j)}
	}

	return dfs(0, len(nums)-1)
}
```

### **...**

```

```

<!-- tabs:end -->
