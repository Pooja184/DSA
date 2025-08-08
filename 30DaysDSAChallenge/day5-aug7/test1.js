const checkSortedArr=(arr)=>{
let sorted=true;
    for(let i=0;i<arr.length-1;i++){
        // sorted=false
        console.log(arr[i+1]-arr[i])
        if(arr[i+1]-arr[i]===1){
            sorted=true;
        }else{
            sorted=false;
            break;
        }
    }
    return sorted;
}
// console.log(checkSortedArr([1,2,3,4,5]));

const multiplicationWithoutMulOp=(a,b)=>{
    let mul=0;
    for(let i=1;i<=a;i++){
        mul+=b
    }
    return mul;
}
// console.log(multiplicationWithoutMulOp(8,3))
