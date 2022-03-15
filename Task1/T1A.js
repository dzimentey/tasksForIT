let initArray = [1,2,3,4,5];

export const myMap = function (arr, callback, thisArg) {
    let results = [];
    for (let i = 0; i < arr.length;  i ++) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }
    return results;
};

const mappedArray = myMap(initArray, a => a + 1) // result [2, 3, 4, 5, 6]



export const myFilter = function(arr, callback, thisArg) {
    let results = [];
    for (let i = 0; i < arr.length;  i ++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    return results;
};

const filteredArray = myFilter(initArray, a => a !== 3) // result [1, 2, 4, 5]



export const myReduce = function(arr, callback, startValue) {
    let result = startValue;
    for (let i = 0; i < arr.length; i ++) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
};

const reducedArray = myReduce(initArray, (a,b) => a + b, 0) // result 15
