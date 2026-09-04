import { fibs, fibsRec } from "./fibonacci"

test('Should return an array up to the 10th number in the fib seq', () => {
    expect(fibs(9)).toEqual([0,1,1,2,3,5,8,13,21,34])
})

test('Should return an array up to the 10th number in the fib seq', () => {
    expect(fibsRec(10)).toEqual([0,1,1,2,3,5,8,13,21,34])
})

