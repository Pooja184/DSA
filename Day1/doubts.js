//swap to variables

//In JavaScript, the syntax [a, b] = [b, a] is called array destructuring assignment. It is commonly used for swapping values between two         variables without needing a temporary variable.
// This works by creating a temporary array [b, a] and then using destructuring assignment to assign b to a and a to b.

const two=()=>{
    let a = 5;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
}
two()

//using three variables
const three = () => {
  let x = 2;
  let y = 4;
  let z = x;
  x = y;
  y = z;
  console.log(x, y);
};
three()

const twoD=()=>{
    let a=2;
    let b= 4;
    a=a+b;//6
    b=a-b;//2
    a=a-b;
    console.log(a,b,"twoD")

}
twoD()

//sum of all numbers
const operator=()=>{
    let num=84276;
    console.log(num%1000); // num%10 return the last digit
    console.log(Math.floor(num/10)); // num/10 return the first all digits except last. always apply math.floor function to floor value
}
operator();
