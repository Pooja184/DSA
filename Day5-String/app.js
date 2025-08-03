const lengthProperty = () => {
  //The length property in JavaScript is used to find out how many items are in something — like the number of elements in an array, the number of characters in a string, etc.
  let name = "Ratnagiri";
  console.log(name.length); // Output: 9

  let beaches = ["Ganpatipule", "Aare Ware", "Bhatye"];
  console.log(beaches.length); // Output: 3

  //for funtionns
  function tour(place, days) {}
  console.log(tour.length); // Output:
};
// lengthProperty();

const sliceMethod = () => {
  // The slice() method in JavaScript is used to extract a portion of a string or array without changing the original one.
  let city = "Ratnagiri";
  let part = city.slice(0, 4); // starts from index 0, ends before index 4
  console.log(part); // Output: "Ratn"

  // You can also use negative numbers to count from the end
  let endPart = city.slice(-3);
  console.log(endPart); // Output: "iri"
};

const substringMethod = () => {
  //     substring() is a built-in JavaScript method used to extract a part of a string, based on start and end index values.
  // It returns a new string without modifying the original.
  //Does not support negative index
  //If startIndex > endIndex, it swaps them in substring().

  let name = "Konkan";

  // Negative index becomes 0
  console.log(name.substring(-3, 3)); // Output: "Kon"

  // Swaps indexes
  console.log(name.substring(4, 1)); // Output: "onk"
};

const toUpperCase = () => {
  //toUpperCase() is a built-in JavaScript string method that returns a new string with all letters converted to uppercase.
  let str = "Hello World";
  console.log(str.toUpperCase());
};

const toLowerCase = () => {
  //toLowerCase() is a built-in JavaScript string method that returns a new string with all letters converted to lowercase.
  // It does not change the original string.
  let city = "RATNAGIRI";
  let lowerCity = city.toLowerCase();

  console.log(lowerCity); // Output: "ratnagiri"
};

const concatMethod = () => {
  //concat() is a built-in JavaScript method used to join two or more strings together and return a new combined string.
  // It does not change the original strings.
  let str = "Pooja";
  let addStr = str.concat(" ", "Bhambid");
  console.log(addStr);
};
// concatMethod()

const trimMethod = () => {
  //trim() is a built-in JavaScript string method that removes whitespace from both the beginning and end of a string.
  // It does not remove spaces inside the string and returns a new trimmed string.
  // The original string remains unchanged.

  let name = "   Ratnagiri   ";
  let cleanName = name.trim();

  console.log(cleanName); // Output: "Ratnagiri"
};

const indexOfMethod = () => {
  //indexOf() returns the position (index) of the first occurrence of a specified value in a string.
  // If the value is not found, it returns -1.

  //syntax
  string.indexOf(searchValue, startPosition);

  //example
  let str = "Ratnagiri is great";
  console.log(str.indexOf("i")); // Output: 4 (first "i")
  console.log(str.indexOf("z")); // Output: -1 (not found)
};

const lastIndex = () => {
  // lastIndexOf() returns the position (index) of the last occurrence of a specified value in a string.
  // If the value is not found, it returns -1.

  //syntax
  string.lastIndexOf(searchValue, fromIndex);

  //example
  let str = "Ratnagiri is great";
  console.log(str.lastIndexOf("i")); // Output: 14 (last "i")
};

const includesMethod = () => {
  //includes() is a built-in JavaScript method that checks if a string or array contains a specific value.
  // It returns **true** if found, otherwise **false**.

  //syntax
  string.includes(searchValue, startIndex);

  //Example
  let city = "Ratnagiri";
  console.log(city.includes("nag")); // Output: true

  let beaches = ["Ganpatipule", "Aare Ware", "Bhatye"];
  console.log(beaches.includes("Aare Ware")); // Output: true
  console.log(beaches.includes("Mandavi")); // Output: false
};

const startWithMethod = () => {
  //startsWith() checks if a string begins with a specified value.
  // It returns **true** if it does, otherwise **false**.

  //syntax
  string.startsWith(searchValue, startIndex);

  //example
  let place = "Ratnagiri";
  console.log(place.startsWith("Rat")); // true
  console.log(place.startsWith("nag")); // false
};

const endWithMethod = () => {
  //endsWith() checks if a string ends with a specified value.
  // It returns **true** if it does, otherwise **false**.

  //syntax
  string.endsWith(searchValue, length);

  //example
  let place = "Ratnagiri";
  console.log(place.endsWith("giri")); // true
  console.log(place.endsWith("Rat")); // false
};

const replaceMethod = () => {
  //replace() returns a new string where the first match of a specified value is replaced with another value.
  // It does not change the original string.

  //syntax
  string.replace(searchValue, newValue);

  //example
  let text = "Ratnagiri is beautiful. Ratnagiri is peaceful.";
  let result = text.replace("Ratnagiri", "Konkan");

  console.log(result);
  // Output: "Konkan is beautiful. Ratnagiri is peaceful."
};

const replaceAllMethod = () => {
  //replaceAll() replaces all occurrences of a specified value with another value.

  //syntax
  string.replaceAll(searchValue, newValue);

  //example
  let text = "Ratnagiri is beautiful. Ratnagiri is peaceful.";
  let result = text.replaceAll("Ratnagiri", "Konkan");

  console.log(result);
  // Output: "Konkan is beautiful. Konkan is peaceful."
};

const charAtMethod=()=>{
    //charAt() is a method used to get the character at a specific index in a string.
// If the index is out of range, it returns an empty string.

//syntax
string.charAt(index)

//example
let word = "Ratnagiri";
console.log(word.charAt(0));  // Output: "R"
console.log(word.charAt(4));  // Output: "n"
console.log(word.charAt(10)); // Output: "" (empty string, index out of range)

}

const chatCodeAtMethod=()=>{
    //charCodeAt() returns the Unicode value (numeric code) of the character at a specific index in the string.
// This is useful when working with character encoding.

//syntax
string.charCodeAt(index)

//Example
let word = "Ratnagiri";
console.log(word.charCodeAt(0));  // Output: 82 (Unicode value of 'R')
console.log(word.charCodeAt(4));  // Output: 110 (Unicode value of 'n')
}


//Questions and answers
const reverseStr=()=>{
  let str="awdiz";
  for(let i=str.length;i>=0;i--){
    console.log(str.charAt(i));
  }
}
// reverseStr()

const reverseString=()=>{
  let str="awdiz";
  let rever="";
  for(let i=str.length-1;i>=0;i--){
    rever+=str.charAt(i);
    // rever+=str[i]; //both logics are correct
  }
  console.log(rever)
}
// reverseString()

const palindrome=()=>{
  let str="madama";
  let rev="";
  for(let i=str.length-1;i>=0;i--){
      rev+=str[i]
  }

  // console.log(str);
  // console.log(rev)
  if(str==rev){
    console.log("String is pallimdrome")
  }else{
    console.log("String is not pallimdrome")
  }
}
// palindrome()

const pallindrome=()=>{
  let str=prompt("Enter a string");
  let isPallindrome=true;
  let i=0, j=str.length-1;
  while(i<j){
    if(str.charAt(i)!=str.charAt(j)){
      isPallindrome=false;
      break;
    }
    i++;
    j--;
  }
  if(isPallindrome){
    console.log(str,"is pallindrome");
  }else{
    console.log(str,"is not pallindrome");
  }
}
// pallindrome()

const toggleStr=()=>{
    let str=prompt("Enter string");
    let newStr="";
    for(let i=0;i<=str.length-1;i++){
      // console.log(str[i]);
      if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
        // console.log(str[i].toLowerCase());
        newStr+=str[i].toLowerCase();

      }else{
        // console.log(str[i].toUpperCase());
        newStr+=str[i].toUpperCase();
      }
    }
    console.log(newStr);
}
// toggleStr();

const letterAppeared=()=>{
  let str=prompt("Enter a string");
  let arr= new Array(128).fill(0);
  for(let i=0;i<str.length;i++){
      let idx=str.charCodeAt(i);
      arr[idx]= arr[idx]+1;
  }
  // console.log(arr);
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
      console.log(String.fromCharCode(i)+" appears at " + arr[i]+ " times.")
    }
  }
}
// letterAppeared();

const letter=()=>{
  let str="the dog is lazzy";
  let obj={};
  for(let i=0;i<str.length;i++){
    // console.log(str[i])
    if(obj[str[i]]){
      obj[str[i]]++;
    }else{
      obj[str[i]]=1
    }
  }
  console.log(obj)
}
// letter();


const palindrome1 = () => {
  let str = "nitin";

  let len = 0;
  while (str[len] !== undefined) {
    len++;
  }
  // console.log(len)
  let isPalindrome = true;
  let start = 0;
  let end = len - 1;
  // console.log(end)
  while (start < end) {
    if (str[start] !== str[end]) {
      isPalindrome = false;
    } else {
      isPalindrome = true;
    }
    start++;
    end--;
  }
  if (isPalindrome != true) {
    console.log(str, "is not palindrome");
  }else{
    console.log(str, "is palindrome");

  }
};
// palindrome1();