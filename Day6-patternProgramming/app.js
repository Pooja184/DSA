let prompt = require("prompt-sync")();

const preRequirements = () => {
  //process.stdout.write("hello"); is a Node.js command used to write output directly to the console (standard output) without adding a newline at the end.

  process.stdout.write("hello");
  process.stdout.write("world");

  //prompt sync- npm i prompt-sync
  //We need the prompt-sync package in Node.js to allow the program to take user input from the terminal (synchronously) — something that Node.js doesn’t support natively out of the box in a simple way.

  let prompt = require("prompt-sync")();

  let a = prompt("Enter a number");
  process.stdout.write(a);
};
// preRequirements();

const practice = () => {
  let n = Number(prompt("Enter a number"));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
};

// practice()

const rightAngleTriangle = () => {
  let n = Number(prompt("Enter a number"));
  // let n=Number(prompt("Enter a number:"));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
      // console.log("*");
    }
    console.log();
  }
};
// rightAngleTriangle();

const rightATUsingNumbers = () => {
  let n = Number(prompt("Enter a number : "));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // process.stdout.write(j); it throws error because this method works only with strings
      process.stdout.write(j.toString()); // The method **process.stdout.write()** in Node.js expects a     string as its argument. If you try to pass a number, it will throw an error or behave unexpectedly.

      // process.stdout.write(j+" "); we can write this way also
    }
    console.log();
  }
};
// rightATUsingNumbers();

const rightATUsingLetters = () => {
  let n = Number(prompt("Enter a number : "));
  for (let i = 1; i <= n; i++) {
    let ascii = 65;
    for (j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(ascii));
      ascii++;
    }
    console.log();
  }
};
// rightATUsingLetters();

const invertedRAT = () => {
  let n = Number(prompt("Enter a number : "));
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      //for(let j=n;j<=i;j--)
      process.stdout.write("*");
    }
    console.log();
  }
};
// invertedRAT();

const mirrorRAT = () => {
  let n = Number(prompt("Enter a number"));
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
};
// mirrorRAT();

const xletterStar = () => {
  //incomplete
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // process.stdout.write("* ")
      if (j == i) {
        process.stdout.write("*");
      }
    }
    console.log();
  }
};
// xletterStar();

const triangle = () => {
  let n = Number(prompt("Enter a number"));
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write("* ");
    }
    for (let j = n; j >= i; j--) {
      process.stdout.write(" ");
    }
    console.log();
  }
};
// triangle();

const squareStar=()=>{
  let n=Number(prompt("Enter number: "));
  for(let i=0;i<n;i++){
    // console.log(n[i])
    for(let j=0;j<n;j++){
      if(i==0 || i==n-1 || j==0 || j==n-1){
        process.stdout.write("*");
      }else{
        process.stdout.write(" ")
      }
    }
    console.log();
  }
}
squareStar();

