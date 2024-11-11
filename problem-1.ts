//problem 1

const sumArray = (numArray: number[]): number => {
    let totalSum = 0;
    for (let i = 0; i < numArray.length; i++) {
      totalSum += numArray[i]
    }
    return totalSum;
  };
  
  const sum = sumArray([1, 2, 3, 4, 5]);
  console.log(sum);