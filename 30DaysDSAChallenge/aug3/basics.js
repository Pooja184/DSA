const reverseArr = (arr) => {
  if (arr.length === 0) {
    return [];
  } else {
    let right = arr.length - 1;
    let left = 0;
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    return arr;
  }
};
console.log(reverseArr([1, 2, 4, 5, 6, 7]));

const maxElement = (arr) => {
  if (arr.length === 0) {
    return null;
  } else {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
};
console.log(maxElement([2, 1, 4, 6, 3, 9]));

const minElement = (arr) => {
  if (arr.length === 0) {
    return null;
  } else {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
};
console.log(minElement([2, 4, 1, 7, 0, 5]));

const sumOfAllEle = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
};

console.log(sumOfAllEle([1, 2, 3, 4]));
