const initArray = [1, 2, 3, 4, 5];

Array.prototype.polyMap = function (callBack) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callBack(this[i]));
    }
    return result;
};

initArray.polyMap(a => a * 2) // result [2, 4, 6, 8, 10]



Array.prototype.polyFilter = function (callBack) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};

initArray.polyFilter(a => a !== 3)  // result [1, 2, 4, 5]



Array.prototype.polyReduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
};

initArray.polyReduce((a, b) => a + b) // result 15
