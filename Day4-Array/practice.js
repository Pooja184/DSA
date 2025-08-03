//find maximum number
const max=()=>{
    let arr=[2,5,42,2,1,7];
    let maxN=arr[0];
    for(let i=0;i<=arr.length;i++){
         if(arr[i]>maxN){
            maxN=arr[i]
         }
    }
    console.log(maxN);
}
// max();

const secMAx=()=>{
    let arr=[3,2,5,6,4];
    let max=Math.max(arr[0],arr[1]);
    let secMax=Math.min(arr[0],arr[1]);
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>max){
            secMax=max;
            max=arr[i]
        }else if(arr[i]>secMax && max != arr[i]){
            secMax =arr[i]
        }
    }
  console.log(secMax);
}
// secMAx();

const evenNum=()=>{
    let arr=[2,6,5,4,3,9];
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i])
        }
    }
}
// evenNum();

const sqa=()=>{
   let arr=[2,4,5,3];
   let newArr=[];
   for(let i=0;i<=arr.length-1;i++){
    let sq=arr[i]*arr[i]
    newArr.push(sq)
   }
   console.log(newArr)
}
// sqa();

// Count how many numbers are greater than a given value
const greaterN=()=>{
   let num=Number(prompt("Enter value"));
   if(isNaN(num)){
    console.log("Please Enter Valid Number")
   }
   let arr=[2,5,8,9,3,4];
   let count=0;
   for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>num){
        // console.log(arr[i])
        count++

    }
   }
   console.log(count)
}
// greaterN()

//Remove duplicates
const duplicate=()=>{
   let arr=[2,4,6,2,5,6];
   let newArr=[];
   for(let i=0;i<=arr.length-1;i++){
    let isDuplicate=false;
      
    for(let j=0;j<=newArr.length-1;j++){
        if(arr[i]===newArr[j]){
            isDuplicate=true;
            break;
        }
    }
    if(!isDuplicate){
        newArr[newArr.length]=arr[i]
    }

   }
   console.log(newArr)

}
// duplicate();
