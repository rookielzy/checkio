// Description
// A median is a numerical value separating the upper half of a sorted array of numbers from the lower half.
// In a list where there are an odd number of entities, the median is the number found in the middle of the array.
// If the array contains an even number of entities, then there is no single middle value, instead the median becomes the average of the two numbers found in the middle. For this mission, you are given a non-empty array of natural numbers (X). With it, you must separate the upper half of the numbers from the lower half and find the median.

// Input: An array as a list of integers.

// Output: The median as a float or an integer.

function median(data) {
    let result
    if (!Array.isArray(data) || data.length < 0 || data.length >= 10 ** 6) {
        return
    }
    let copyData = data.sort((a, b) => a - b)
    let length = copyData.length
    if (length % 2 !== 0) {
        result = copyData[(length - 1) / 2]
        return result
    } else {
        let left = copyData[(length / 2) - 1]
        let right = copyData[length / 2]
        result = (left + right) / 2
        return result
    }
}


median([10,9,8,7,6,5,4,3,2,1,0])