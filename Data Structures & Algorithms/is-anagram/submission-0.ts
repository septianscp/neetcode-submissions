class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if( s.length === t.length){
            let left = s.split('').sort().join();
            let right = t.split('').sort().join();
             
            return left === right;
        }

        return false
    }
}
