

const typeOf=()=>{  //concept 1
    
//NOTE : typeof only takes one argument not multiple
console.log("TYPEOF")

let a = 10;
let b = 20;
console.log("a + b is " + a + b); // output : a+b is 1020, typeOf : string
console.log(typeof ("a + b is ", a + b)); // output : a+b is 30 , typeof :number
console.log(typeof ("a + b is " + (a + b))); // output : a+b is 30 , typeof: string
console.log(typeof (a + b + " is a + b ")); // output 30 is a+b , typeof : string

}

const typeCoercion=()=>{    //concept 2
 
    //Concept 2.    TYPE COERCION IN JS 
console.log(" TYPE COERCION  or type casting IN JS")
// Type coercion in JavaScript refers to the automatic conversion of one data type to another when performing operations. JavaScript is a loosely typed language, meaning variables do not have a fixed type, and type conversion happens implicitly in certain cases.

// Type coercion happens in three main ways:
       // 1. Implicit Coercion (Automatic conversion by JavaScript)
      // 2. explicit Coersion (Manual conversion by the developer)
      // 3. Boolen conversion (When values are converted into true or false)

// 1. Implicit Coercion Type - JavaScript automatically converts data types in certain operations.
     // ex. 1. string Coercion
     //   When a number is added to a string, JavaScript converts the number into a string.
       console.log("5" + 10); // "510" (number 10 is converted to string)
       console.log(10 + "5"); // "105"
     //    Explanation: The + operator triggers string concatenation when one operand is a string.
  
     //ex. 2 Numeber coercion
     // When performing mathematical operations (-, *, /), JavaScript converts strings to numbers.
      console.log("10" - 5);  // 5  (string "10" is converted to number)
      console.log("4" * "2"); // 8  (both are converted to numbers)
      console.log("10" / "2"); // 5  (both converted to numbers)
        //   Explanation: Since -, *, and / are not string concatenation operators, JavaScript treats them as mathematical operations.

//2.  Explicit Type Coercion- Developers can manually convert values using JavaScript functions.
       //1. Converting to a Number
        console.log(Number("123"));   // 123 (string to number)
        console.log(Number("abc"));   // NaN (invalid number)
        console.log(parseInt("10.5"));// 10 (integer conversion)
        console.log(parseFloat("10.5"));// 10.5 (float conversion)

        //2. Converting to a String
        console.log(String(100));   // "100"
        console.log((123).toString()); // "123"

        // Converting to Boolean
        console.log(Boolean(1));    // true
        console.log(Boolean(0));    // false
        console.log(Boolean(""));   // false (empty string is false)
        console.log(Boolean("abc"));// true (non-empty string is true)

//3. Boolean Coercion (Truthy & Falsy Values)-Some values automatically convert to true or false when used in a boolean context (like if conditions).
        // Falsy Values (convert to false)
        //ex.   0 , "" (empty string), null, undefined, NaN, false

        //Truthy Values (convert to true)
        // ex.  Any non-zero number (1, -1, 10, etc.), Non-empty strings ("hello"), Objects ({}, []), Functions
         
        if ("hello") {
            console.log("Truthy");  // This runs
        }
        
        if (0) {
            console.log("Falsy");  // This does NOT run
        }

//Common issues with type Coercion

//1. Mixing String and Number Operations
console.log(10 + "5" - 2); // 103 (string concatenation first, then number operation)

//2. Unexpected Boolean Coercion
console.log([] == false);  // true (empty array is treated as falsy)
console.log("" == 0);      // true (empty string converts to 0)


//Conclusion
//1. Type coercion is JavaScript's automatic type conversion.
//2. Implicit coercion happens in operations like +, -, *, and /.
//3. Explicit coercion is done using Number(), String(), Boolean(), etc.
//4. Understanding truthy and falsy values helps avoid unexpected behavior.


}

const dynamicInput=()=>{     //concept 3
    //concept 3. take input from user rather than using static values
    //we use prompt funtion to take input from user
    //the value we pass in prompt always comes in string type even if we passed the value as a number
    // we can manually convert that value in number using Number function
    let age=prompt("Enter your age");
    console.log(age)


}
// dynamicInput()

// const sum=()=>{         //concept 4
//     //sum of all numbers
//     // let num=84276;
//     // console.log(num%1000); // num%10 return the last digit
//     // console.log(num/10); // num/10 return the first all digits except last. always apply math.floor function to floor value

//     //post & pre increment, post & pre decrement
//     // let a=4;
//     // let b= a++;
//     // console.log(a);
//     // console.log(b); 

//     //Question 1
//     let i=11;
//     i=i++ + ++i;
//     console.log(i)//24

//     let j=11;
//     j=j-- - --j
//     console.log(j); // 2

//     //Q 2
//     let a=11,b=22;
//     let c= a + b + a++ +  b++ + ++a + ++b;
//     console.log(a);//13
//     console.log(b);//24
//     console.log(c); //103

//     //Q 3
//     let x=true;// true becomes 1 and then x++ meaning 1++ which is 2
//     x++;
//     console.log(x)//2

//     //Q 4
//     // let z=4++;
//     // console.log(z); // error because 4++ is trying to increment 4, which is a constant (not a variable), so it is not valid in JavaScript.

//     //Q 5
//     let f=10;
//     let k=++(f++); //++(f++) is invalid syntax in JavaScript.
//     console.log(k); //   You will get a SyntaxError because ++ cannot be applied to the result of f++.
// }
// sum()

const mathFunctions=()=>{
        // 1. Absolute value (removes negative sign)
        console.log(Math.abs(-10)); // Output: 10

        // 2. Rounding numbers
        console.log(Math.ceil(4.3));  // Rounds up -> Output: 5
        console.log(Math.floor(4.7)); // Rounds down -> Output: 4
        console.log(Math.round(4.5)); // Rounds to nearest -> Output: 5
        console.log(Math.trunc(4.9)); // Removes decimal part -> Output: 4

        // 3. Power and roots
        console.log(Math.pow(2, 3));  // 2^3 = 8
        console.log(2 ** 3);          // Same as pow() -> Output: 8
        console.log(Math.sqrt(25));   // Square root of 25 -> Output: 5
        console.log(Math.cbrt(27));   // Cube root of 27 -> Output: 3

        // 4. Max and Min
        console.log(Math.max(10, 20, 30)); // Largest number -> Output: 30
        console.log(Math.min(10, 20, 30)); // Smallest number -> Output: 10

        // 5. Random number (between 0 and 1)
        console.log(Math.random()); 

        // 6. Random integer between 1 and 10, it gives value between 0 and 1 only, we need to manually increase that value
        console.log(Math.floor(Math.random() *10)+1);

        // 7. Trigonometry functions
        console.log(Math.sin(Math.PI / 2)); // Sin(90°) = 1
        console.log(Math.cos(0));           // Cos(0°) = 1
        console.log(Math.tan(Math.PI / 4)); // Tan(45°) = 1

        // 8. Logarithms and Exponent
        console.log(Math.log(1));    // Natural log (ln 1) = 0
        console.log(Math.log10(100)); // Log base 10 of 100 = 2
        console.log(Math.exp(1));    // e^1 = 2.718 (Euler's number)

        // 9. Math constants
        console.log(Math.PI);  // Value of π = 3.14159...
        console.log(Math.E);   // Euler's number = 2.718

}
mathFunctions()

