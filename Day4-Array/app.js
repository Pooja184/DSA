//arr is linear Data Structure which stores multiple value in a continuous manner

const arrIdx=()=>{
  let arr=new Array(4);
  arr.push(100);
  console.log(arr); // the output will be [empty x 4 , 100]
}
// arrIdx();

const insertEleInArr=()=>{
    //how elements are inserting in an array using Prompt
    let arr= new Array(5);
    for(let i=0;i<arr.length;i++){
         arr[i]=Number(prompt("enter number to insert in an array"));
        }
        console.log(arr)

    // for(let i=0;i<5;i++){//wrong method but imp concept
    //     let arr1= [];

    //      let ans=Number(prompt("enter number to insert in an array"));
    //      arr1.push(ans)
    //      console.log(arr1)
    //     }
}
// insertEleInArr()

const sumOfAllEle=()=>{
    //Sum of all elements in an array
    let arr=[1,2,3,6];
    let sum=0;
    for(let i=0;i<arr.length;i++){
       sum+=arr[i]
    }
    console.log(sum)
//try using prompts
    
}
// sumOfAllEle()

const maxEle=()=>{
   let arr=[3,6,4,10];
   let max=arr[0];
   for(let i=0;i<arr.length;i++){
    // console.log(i,arr[i])
    if(arr[i]>max){
        max=arr[i]
    }

   }
   console.log(max)
}
// maxEle()

const secondMax=()=>{
    //dry run
   let arr=[2,1,4,6,5];
   let max=Math.max(arr[0],arr[1]);
   let secMax=Math.min(arr[0],arr[1]);
   for(let i=2;i<arr.length;i++){
      if(arr[i]>max){
        secMax=max;
        max=arr[i]
      }else if(arr[i]>secMax && max !=arr[i]){
        secMax=arr[i]
      }
   }
//    console.log(max)
   console.log(secMax)
}
// secondMax();

const reverseArr=()=>{
    let arr=[2,5,4,1,7];
    // console.log(arr.length-1)
    // for(let i=arr.length-1;i>=0;i--){
    //     console.log(arr[i])
    // }

    // sheryians code
    let i=0,j=arr.length-1;
    while(i<j){
      let temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp
      i++;
      j--
    }
    console.log(arr)
}
reverseArr()

const allZerosAndOnes=()=>{
     let arr=[1,0,0,1,0,1,1,0];

     let i=0, j=0;
     while(i<arr.length){
      if(arr[i]==0){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j++;
      }
      i++;
     }
     console.log(arr)
}
// allZerosAndOnes()

const secMax=()=>{
  let arr=[2,5,1,6,3,9];
  let max=Math.max(arr[0],arr[1]);
  let secMax=Math.min(arr[0],arr[1]);
  for(let i=2;i<=arr.length;i++){
    if(arr[i]>max){
      secMax=max;
      max=arr[i]
    }else if(arr[i]>secMax && max !=arr[i]){
      secMax=arr[i]
    }
  }
  console.log(secMax)
}
// secMax()