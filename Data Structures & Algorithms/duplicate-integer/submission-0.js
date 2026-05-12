class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const noDuplicateLength = new Set(nums);

        console.log('noDuplicateLength',noDuplicateLength.size)

        return  noDuplicateLength.size !== nums.length  
    }
}
