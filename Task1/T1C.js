const testArray = [1,1,1,2,2,3,4,4,5,5,5,5];

// low complexity

const getUniqueElement = arr => {
    let n = arr.length
    let B = []
    for (let i = 1, j = 0, t; i < n + 1; i++) {
        if (arr[i - 1] === arr[i]) t = arr[i - 1];
        if (arr[i - 1] !== t) B[j++] = arr[i - 1];
    }

    return B[0];
};

//console.log(getUniqueElement(testArray))  result 3



// high complexity

const uniqueValueOfArray = initArray => {

   return initArray.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0]
}

//console.log(uniqueValue(testArray))  result 3