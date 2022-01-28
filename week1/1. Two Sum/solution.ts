function twoSum(nums: number[], target: number): number[] {
const map: Map<number, number> = new Map();
    let result: number[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const match = map.get(target - current);

        if (match !== undefined) {
            result = [i, match];
            break;
        }
        map.set(current, i); 
    }

    return result;
};
