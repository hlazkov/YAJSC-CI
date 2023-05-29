const someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);

const calculateSum = (arr, someFuncWithParam) => {
    let sum = 0;
    arr.forEach(element => {
        //console.log(element);
        sum = sum + element;
        //console.log(sum);
    });
    someFuncWithParam(sum);
}

calculateSum([1, 2, 3, 4], someFuncWithParam);

// node ./Unit-6/cb_calculateSum.js