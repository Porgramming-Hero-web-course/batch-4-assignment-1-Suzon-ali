//problem 2


const removeDuplicates = (numOfArray : number[]) : number[] =>{
    return numOfArray.filter((item, index) => numOfArray.indexOf(item) === index);
}

const dublicatesArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(dublicatesArray)