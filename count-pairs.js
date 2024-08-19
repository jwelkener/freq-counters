function countPairs(arr, num) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Step 2: Initialize two pointers and a counter
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    
    // Step 3: Iterate through the array with two pointers
    while (start < end) {
        let sum = arr[start] + arr[end];
        
        // Step 4: Check if the sum of elements at start and end pointers equals the target number
        if (sum === num) {
            count++;
            start++;
            end--;
        } 
        // Step 5: If the sum is less than the target, move the start pointer to the right
        else if (sum < num) {
            start++;
        } 
        // Step 6: If the sum is greater than the target, move the end pointer to the left
        else {
            end--;
        }
    }
    
    // Step 7: Return the total count of pairs found
    return count;
}
