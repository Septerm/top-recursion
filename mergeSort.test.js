import { mergeSort } from "./mergeSort"


test("Should return the list in ascending order", () => {
    expect(mergeSort([5,2,1,3,7,8])).toEqual([1,2,3,5,7,8])
})

test("Array of one value should return the value", () => {
    expect(mergeSort([5])).toEqual([5])
})

test("Empty array should return an empty array", () => {
    expect(mergeSort([])).toEqual([])
})

test("uneven array should return a sorted array", () => {
    expect(mergeSort([1,5,2,6,9])).toEqual([1,2,5,6,9])
})

