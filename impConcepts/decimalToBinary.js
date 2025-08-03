const decimalToBinary=(decNum)=>{
    let ans=0,power=1;
    while(decNum>0){
        let rem=Math.floor(decNum%2);
        decNum=Math.floor(decNum/2);
        ans+=(rem*power);
        power*=10;
    }
    console.log(ans);
}

const finalAns=()=>{
    decimalToBinary(5);
}
finalAns();