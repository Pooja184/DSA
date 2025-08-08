const smallestOfThree = (num1, num2, num3) => {
  // Find the Smallest of Three Numbers
  if (num1 < num2 && num1 < num3) {
    // console.log(`${num1} is smallest`);
    return `${num1} is smallest`;
  } else if (num2 < num1 && num2 < num3) {
    return `${num2} is smallest`;
  } else {
    return `${num3} is smallest`;
  }
};
// console.log(smallestOfThree(4,1,2));

const reverseStr = (str) => {
  //Reverse a String Without Using Built-in Methods
  let newStr=""
  for(let i=str.length-1;i>=0;i--){
    newStr+=str[i]
  }
  return newStr
};
// console.log(reverseStr("hello"));

const movesAllZerosToRight=(arr)=>{
    
    // Move All Zeros to the Right in an Array
    
      let count = 0;  

    // If the element is non-zero, replace the element at
    // index 'count' with this element and increment count
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0){
            arr[count++] = arr[i];
        }
    }

    // Now all non-zero elements have been shifted to
    // the front. Make all elements 0 from count to end.
    while (count < arr.length)
        arr[count++] = 0;
    
    return arr
   
}
console.log(movesAllZerosToRight([1,2,0,5,0,8,0]));
