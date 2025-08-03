
const binaryTodecimal=(binaryNum)=>{
    let ans=0,power=1;
    while(binaryNum>0){
        let rem=Math.floor(binaryNum%10);
        Math.floor(binaryNum/=10);
        ans+=(rem*power);
        power*=2;
    }
    // return ans;
    console.log(ans);
}

const finalAns=()=>{
    // let num=10011;
    binaryTodecimal(10011);
}
finalAns();