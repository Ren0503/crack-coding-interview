# [04.06. Successor](https://leetcode-cn.com/problems/successor-lcci)

[中文文档](/lcci/04.06.Successor/README.md)

## Description

<p>Write an algorithm to find the &quot;next&quot; node (i.e., in-order successor) of a given node in a binary search tree.</p>

<p>Return <code>null</code> if there&#39;s no &quot;next&quot; node for the given node.</p>

<p><strong>Example 1:</strong></p>

<pre>

<strong>Input:</strong> root = <code>[2,1,3], p = 1



  2

 / \

1   3

</code>

<strong>Output:</strong> 2</pre>

<p><strong>Example 2:</strong></p>

<pre>

<strong>Input:</strong> root = <code>[5,3,6,2,4,null,null,1], p = 6



      5

     / \

    3   6

   / \

  2   4

 /   

1

</code>

<strong>Output:</strong> null</pre>

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
    def inorderSuccessor(self, root: TreeNode, p: TreeNode) -> TreeNode:
        def dfs(root):
            if root is None:
                return
            dfs(root.left)
            nonlocal ans, prev
            if prev == p:
                ans = root
            prev = root
            dfs(root.right)

        ans = prev = None
        dfs(root)
        return ans
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
    private TreeNode prev;
    private TreeNode p;
    private TreeNode ans;

    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
        prev = null;
        ans = null;
        this.p = p;
        dfs(root);
        return ans;
    }

    private void dfs(TreeNode root) {
        if (root == null) {
            return;
        }
        dfs(root.left);
        if (prev == p) {
            ans = root;
        }
        prev = root;
        dfs(root.right);
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
    TreeNode* prev;
    TreeNode* p;
    TreeNode* ans;

    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        this->p = p;
        dfs(root);
        return ans;
    }

    void dfs(TreeNode* root) {
        if (!root) return;
        dfs(root->left);
        if (prev == p) ans = root;
        prev = root;
        dfs(root->right);
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
func inorderSuccessor(root *TreeNode, p *TreeNode) *TreeNode {
	var prev, ans *TreeNode
	var dfs func(root *TreeNode)
	dfs = func(root *TreeNode) {
		if root == nil {
			return
		}
		dfs(root.Left)
		if prev == p {
			ans = root
		}
		prev = root
		dfs(root.Right)
	}
	dfs(root)
	return ans
}
```

### **...**

```

```

<!-- tabs:end -->
