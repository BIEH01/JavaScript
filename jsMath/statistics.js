const PlatziMath = {};

// Arithmetic Mean
// Loop for
PlatziMath.calcMean = function calcMean(list) {
  let sumList = 0;

  for (let i = 0; i < list.length; i++) {
    sumList = sumList + list[i];
  }

  const average = sumList / list.length;
  console.log(average);
  return average;
};

// Reduce
PlatziMath.calcMeanR = function calcMeanR(list) {
  const sumL = list.reduce((a, b) => a + b);

  const averageR = sumL / list.length;
  console.log(averageR);
  return averageR;
};

PlatziMath.isEven = function isEven(list) {
  return !(list.length % 2);
};

PlatziMath.isOdd = function isOdd(list) {
  return list.length % 2;
};

// Mode
PlatziMath.calcMode = function calcMode(list) {
  const countList = {};
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (countList[element]) {
      countList[element] += 1;
    } else {
      countList[element] = 1;
    }
  }

  const arrayList = Object.entries(countList);
  const orderedList = PlatziMath.orderTwoDimensionalList(arrayList, 1);
  const modaIndex = orderedList[orderedList.length - 1];
  const moda = modaIndex[0];

  console.log(countList, arrayList, orderedList, modaIndex);
  return moda;
};

// Median
PlatziMath.calcMedian = function calcMedian(unorderedList) {
  const list = PlatziMath.orderList(unorderedList);
  const evenList = PlatziMath.isEven(list);

  if (evenList) {
    const indexMid1 = list.length / 2 - 1;
    const indexMid2 = list.length / 2;
    const midList = [];
    midList.push(list[indexMid1]);
    midList.push(list[indexMid2]);
    const medianListEven = PlatziMath.calcAverageR([midList]);
    return medianListEven;
  } else {
    const iMidOddList = Math.floor(list.length / 2);
    const medianListOdd = list[iMidOddList];
    console.log(iMidOddList);
    return medianListOdd;
  }
};

PlatziMath.orderList = function orderList(unorderedList) {
  // function name(accumulatedValue, newValue) {
  // if (accumulatedValue > newValue) {
  //   return 1;
  // } else if (accumulatedValue == newValue) {
  //   return 0;
  // } else if (accumulatedValue < newValue) {
  //   return -1;
  // }

  // return accumulatedValue - newValue;
  // }
  const list = unorderedList.sort((a, b) => a - b);
  return list;
};

PlatziMath.orderTwoDimensionalList = function orderTwoDimensionalList(
  unorderedList,
  i
) {
  // function name(accumulatedValue, newValue) {
  // if (accumulatedValue > newValue) {
  //   return 1;
  // } else if (accumulatedValue == newValue) {
  //   return 0;
  // } else if (accumulatedValue < newValue) {
  //   return -1;
  // }

  // return accumulatedValue - newValue;
  // }
  const list = unorderedList.sort((a, b) => a[i] - b[i]);
  return list;
};
