const checkAnagrams=(str1,str2)=>{
    if(str1.length != str2.length) return "Strings are not anagrams";
    return str1.split("").sort().join("")=== str2.split("").sort().join("");
}
console.log(checkAnagrams("hello","heilo"));

const checkAnagrams1=(str1,str2)=>{
    if(str1.length != str2.length) return "Strings are not anagrams";

    let freq1={}
    let freq2={}
    for(let i=0;i<str1.length;i++){
        let char1=str1[i];
        let char2=str2[i];

        freq1[char1]=(freq1[char1]||0)+1;
        freq2[char2]=(freq2[char2]||0)+1;
    }
    for( let key in freq1){
        if(freq1[key] !== freq2[key]){
            return false;
        }
    }
    return true;
    // console.log(freq1,freq2)

}
console.log(checkAnagrams1("hello","hyllo"));

const countFreq=(str)=>{

    let freq={};
    for(let i=0;i<str.length;i++){
        if(freq[str[i]]){
            freq[str[i]]++
        }else{
            freq[str[i]]=1;
        }
    }
    return freq;
}
console.log(countFreq("hello"));