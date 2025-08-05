const checkPalindrome=(str)=>{
    if(str.length<=0) return " ";
    
    let firstidx=0;
    let lastidx=str.length-1;
    let isPalindrome=true;
    while(firstidx<lastidx){
            //  console.log(str[firstidx])
            // console.log(str[lastidx])
        if(str[firstidx]!==str[lastidx]){
       
            isPalindrome=false;
            break;
        }
        firstidx++;
        lastidx--;
    }
    if(isPalindrome){
        return "String is palindrome";
    }else{
        return "string is not palindrome";
    }
}
// console.log(checkPalindrome("maam"));

const reverseStr1=(str)=>{
    if(str.length<=0) return " ";
    let newStr=str.split("").reverse().join("");
    return newStr;
}
// console.log(reverseStr1("Hello"))


const reverseStr=(str)=>{
    if(str.length<=0) return " ";
   let newStr="";
   for(let i=str.length-1;i>=0;i--){
        newStr+=str[i]
   } 
   return newStr   
}
// console.log(reverseStr("Hello"))

const countVowels=(str)=>{
    if(str.length<=0) return 0;
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==="a" ||str[i]==="A" ||str[i]==="e" ||str[i]==="E" ||str[i]==="i" ||str[i]==="I" ||str[i]==="o" ||str[i]==="O" ||str[i]==="u" ||str[i]==="U"){
            count++;
        }
    }
    return count;
}
// console.log(countVowels("DSA Challenge"));

const vowelsCount=(str)=>{
    let vowels=new Set(['a','e','i','o','u']);
    let count=0;
    for(let char of str.toLowerCase()){
        if(vowels.has(char)) count++
    }
    return count;
}
console.log(vowelsCount("DSA Challenge"))

