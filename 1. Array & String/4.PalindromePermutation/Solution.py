from collections import Counter


class Solution:
    def canPermutePalindrome(self, s: str) -> bool:
        counter = Counter(s)
        cnt = 0
        for val in counter.values():
            if (val & 1) == 1:
                cnt += 1
            if cnt > 1:
                return False
        return True
