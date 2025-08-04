const secondLargest=(arr)=>{
    if(arr.length<=0) return 0;
    
    let maximunEle=-Infinity;
    let secondMaximumEle=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maximunEle){
            secondMaximumEle=maximunEle;
            maximunEle=arr[i];
        }else if(arr[i]>secondMaximumEle && arr[i] != maximunEle){
            secondMaximumEle=arr[i]
        }
    }
    return secondMaximumEle;
}
// console.log(secondLargest([2,6,9,4,8,10]));

const removeDuplicates=(arr)=>{
    let newArr=[];
    if(arr.length<=0) return []
    for(let i=0;i<arr.length;i++){
        if(!newArr[arr[i]]){
            // newArr.push(arr[i])
            newArr[newArr.length]=arr[i]
        }
    }
    return newArr
}
// console.log(removeDuplicates([1,2,1,0,0,3,2]));

const removeDuplicates1=(arr)=>{
    let newArr=[];
    if(arr.length<0) return []
    for(let i=0;i<arr.length;i++){
        let isDuplicate=false;
        for(let j=0;j<newArr.length;j++){
            if(arr[i] === newArr[j]){
                isDuplicate=true;
                break;
            }
        }
        if(!isDuplicate){
            newArr[newArr.length]=arr[i]
        }
    }
    return newArr
}
// console.log(removeDuplicates1([1,0,0,1,2,5,2]));

const removeDuplicatesUsingSet=(arr)=>{
   return [...new Set(arr)];
}
// console.log(removeDuplicatesUsingSet([1,0,2,0,5,2,6]));

const leftRotationBy1=(arr)=>{
    let firstele=arr[0];
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=firstele;
    return arr;
}
// console.log(leftRotationBy1([1,2,3,4,5]));

const rigthRotationBy1=(arr)=>{
    let lastCopy=arr.length;
    // console.log(lastCopy)
    for(let i=arr.length-1;i>=0;i--){
        console.log(i)
        arr[i]=arr[i-1];
    }
    arr[0]=lastCopy
    return arr
}
console.log(rigthRotationBy1([1,2,3,4,5]));


