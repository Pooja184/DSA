const leftRotationBy1 = () => {
  let arr = [3, 5, 7, 1, 9];
  let copy = arr[0];
  for (let i = 0; i <= arr.length - 2; i++) {
    arr[i] = arr[i + 1];
  }
  // console.log(object)
  arr[arr.length - 1] = copy;
  console.log(arr);
};
// leftRotationBy1();

const rightRotationBy1 = () => {
  let arr = [2, 6, 4, 7, 1];
  let lastCopy = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastCopy;
  console.log(arr);
};
// rightRotationBy1();

const removeDuplicates = () => {
  let arr = [3, 2, 5, 2, 4, 7, 4];
  let newArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    let isDuplicate = false;
    for (let j = 0; j <= newArr.length - 1; j++) {
      if (arr[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (isDuplicate === false) {
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
};
// removeDuplicates();

const leftRotationByUserDValue = () => {
  let arr = [1, 2, 3, 4, 5];
  // let k=Number(prompt("Enter a number"));

  let k = 6;
  k=k%arr.length;

  for (let j = 0; j < k; j++) {
    let firstele = arr[0];
    for (let i = 0; i < arr.length-1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = firstele;
  }
  console.log(arr);
};
// leftRotationByUserDValue();  // by using this approch the time complexity of program is n^2. hench bad approch

const leftRotationByUserDValueModifyVersion=()=>{
  let arr=[1, 2, 3, 4, 5, 6, 7];
  let tempArr=new Array(arr.length);
  // let num=Number(prompt("Enter a number:"));
  let num=3;
  num=num%arr.length;
  for(let i=0;i<arr.length;i++){
      tempArr[i]=arr[(i+num)%arr.length]
  }
console.log(tempArr);
}
// leftRotationByUserDValueModifyVersion();

const leftRotationByUserDValueModifyVersionBest=()=>{
  

}
// leftRotationByUserDValueModifyVersionBest();

const rightRotationByUserDValueModifyVersion=()=>{
  let arr=[1,2,3,4,5];
  let tempArr=new Array(arr.length);
  // let num=Number(prompt("Enter a number:"));
  let num=2;
  num=num%arr.length;
  for(let i=0;i<arr.length;i++){
      tempArr[(i+num)%arr.length]=arr[i];
  }
console.log(tempArr);
}
// rightRotationByUserDValueModifyVersion();

