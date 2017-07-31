// Desciption
// You are given a non-empty list of integers (X).
// For this task, you should return a list consisting of only the non-unique elements in this list.
// To do so you will need to remove all unique elements (elements which are contained in a given list only once).
// When solving this task, do not change the order of the list. Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].

function nonUniqueElements(arr) {
    if (!Array.isArray(arr) || arr.length <= 0 || arr.length >= 1000) {
        return []
    }
    let uniqueEle = new Set(arr)
    let copyArr = arr
    let result = new Array()
    result.push(...arr)
    uniqueEle.forEach(ele => {
        let flag = 0
        for (let i = 0; i < copyArr.length + 1; i++) {
            if (copyArr.indexOf(ele) !== -1) {
                flag++
                copyArr.splice(copyArr.indexOf(ele), 1)
                continue
            }
        }
        if (flag === 1) {
            let index = result.indexOf(ele)
            result.splice(index, 1)
        }
    })
    return result
}

nonUniqueElements([1,3,2,1,3])


function betterSolution(arr) {
    return arr.filter(a => {
        return arr.indexOf(a) !== arr.lastIndexOf(a)
    })
}