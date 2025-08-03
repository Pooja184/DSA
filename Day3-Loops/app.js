const question1=()=>{
    //Sum of n natural numbers

    let num=Number(prompt("Enter number"));
    let sum=0;
    for(let i=0;i<=num;i++){
        sum += i

    }
    console.log(sum)
}
// question1()

const question2=()=>{
    //factorial of a given number
    let num=Number(prompt("Enter number"));
     
    if(isNaN(num)){
        console.log("Please Enter valid input")
    }

    if (num>0) {
        let factorial=1;
        for(let i=num;i>=1;i--){
            factorial *= i
        // console.log(factorial)

        }
        console.log(factorial)
    }else{
        console.error("Number should be greater than zero")

    }


}
// question2()

const question3=()=>{
    //Factors of number

    let num=36;
    if(isNaN(num)){
        console.log("Enter valid input")
    }

    if (num>0) {
        for(let i=1;i<=Math.floor(num/2);i++){
            // console.log(i)
            if(num%i==0){
                console.log(i)
            }
        }
        console.log(num)
    } else {
        console.log("Number should be positive")
    }
}
// question3()

const question4=()=>{
    //prime numbers

    let num=6;
    if(isNaN(num)){
        console.log("Enter valid input")
    }

    if (num>0) {
        let prime=true;
        for(let i=2;i<=Math.floor(num/2);i++){
            if(num%i===0){
                prime=false;
                break;
            }
            if(prime){
        console.log(i);
    }
        }
        console.log(prime)
       
    } else {
        console.log("Number should be positive")
    }

    
    // function isPrime(n){
    //     if(n<=1) return false;
    //     if(n==2) return true;
    //     if(n%2==0) return false;
    //     for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
    //         if(n%i==0) return false
    //     }
    //     return true
    // }
    // console.log(isPrime(11))
    
    
   
}
question4()

const question5=()=>{
   // sum of all digit
    let n=1234;
    let sum=0;
    while(n>0){
        let rem=n%10; //return last digit
        sum +=rem
        n=Math.floor(n/10);//remove last digit
    }
    console.log(sum)
}
// question5()

const question6=()=>{
    //reverse a number
     let num=123;
     let rev=0;
     while(num>0){
        let rem=num%10;//provides last digit 
        rev=rev*10 + rem;
        num= Math.floor(num/10);        //provide all digits except last 
     }
     console.log(rev)
}
// question6()

const question7=()=>{
    //Strong number
    let num=6;
    let sum=0;
    let copy=num;
    while(num>0){
        let rem=num%10;
        let fact=1;
        for(let i=1;i<=rem;i++){
            fact +=i
        }
        sum += fact;
        num=Math.floor(n/10);
    }
    if (num===copy) {
        
        console.log("Strong")
    }else{
        console.log("Not strong")
    }
}

const question8=()=>{
    //repeate hello world using do-while
    let userInput=prompt("Enter something")
    do {
        userInput=prompt("Enter Something")
        console.log("hello world")
    } while (userInput!== "exit");
}
// question8()

const question9=()=>{
    //guess the number
    let num=Number(Math.floor(Math.random()*10)+1)
    console.log(num)
    let userNum=1;
    let attempt=0;
    while(userNum !==num && attempt<=5){
        if(attempt===5){
            alert("Your attempt limit is completed")
            break
        }
         userNum=Number(prompt("Enter the number"))
            // console.log("wrong")
             if(num>userNum){
                alert("number is high")
            }else if(num<userNum){
                alert("number is low")
            }else{
                alert("congrats! You won")
               
            }
            attempt++
            // userNum=Number(prompt("Enter the number"))
    }
}
// question9();

const question10=()=>{

    let operation=Number(prompt("Enter number to perform operation"));
   


    while(operation<=4){
        let num1=Number(prompt("Enter 1st number"));
        let num2=Number(prompt("Enter 2nd number"));
        if(operation=== 1){
            console.log(num1+num2)
        }
        
    }
   


}
// question10();