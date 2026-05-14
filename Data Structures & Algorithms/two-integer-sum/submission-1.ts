class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number,number>()

        for( let i =0; i < nums.length; i++){
            const val= nums[i];
            const compare = target - val;

            if(map.has(compare)){
                const j = map.get(compare)!;
                return i < j  ? [i,j]: [j,i]
            }
        map.set(val,i);

        }

return [];    

    }
}
