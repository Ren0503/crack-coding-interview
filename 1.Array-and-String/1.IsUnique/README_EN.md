# Is Unique

## Question

Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 

## Hint

- Try a hash table
- Could a bit vector be useful? 
- Can you solve it in O(N log N) time? What might a solution like that look like? 

## Solution

You should first ask your interviewer if the string is an ASCII string or a Unicode string. Asking this question will show an eye for detail and a solid foundation in computer science. We'll assume for simplicity the character set is ASCII. If this assumption is not valid, we would need to increase the storage size.

One solution is to create an array of boolean values, where the flag at index i indicates whether character i in the alphabet is contained in the string. The second time you see this character you can immediately return false.

We can also immediately return false if the string length exceeds the number of unique characters in the alphabet. After all, you can't form a string of 280 unique characters out of a 128-character alphabet. 

> It's also okay to assume 256 characters. This would be the case in extended ASCII. You should clarify your assumptions with your interviewer.

The code below implements this algorithm.

```java
boolean isUniqueChars(String str) {
    if (str.length() > 128) return false;

    boolean[] char_set = new boolean[128];
    for (int i= 0; i < str.length(); i++) {
        int val= str.charAt(i);
        if (char_set[val]) {
            //Already found this char in string
            return false;
        }
        char_set[val] = true;
    }
    return true;
}
```

The time complexity for this code is O(n), where n is the length of the string. The space complexity is O(l). (You could also argue the time complexity is 0(1), since the for loop will never iterate through more than 128 characters.) If you didn't want to assume the character set is fixed, you could express the complexity as O(c) space and O(min(c, n)) or O(c) time, where c is the size of the character set.

We can reduce our space usage by a factor of eight by using a bit vector. We will assume, in the below code, that the string only uses the lowercase letters a through z. This will allow us to use just a single int.

```java
boolean isUniqueChars(String str) {
    int checker = 0;
    for (int i= 0; i < str.length(); i++) {
        int val= str.charAt(i) - 'a';
        if ((checker & (1 << val)) > 0) {
            return false;
        }
        checker != (1 << val);
    }
    return true;
}
```
If we can't use additional data structures, we can do the following:
1. Compare every character of the string to every other character of the string. This will take 0(n^2) time and 0(1) space.
2. If we are allowed to modify the input string, we could sort the string in O(n log(n)) time and then linearly check the string for neighboring characters that are identical. Careful, though: many sorting algorithms take up extra space.

These solutions are not as optimal in some respects, but might be better depending on the constraints of the problem.