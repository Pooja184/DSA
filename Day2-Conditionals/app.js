const ifElse = () => {
  //Q1
  // let age=prompt("Enter your age");
  // let agea=Number(age);
  // console.log(typeof(agea))
  // if(isNaN(agea)){
  //     console.log("Add valid input")
  // }else if(agea>=18){
  //     console.log("valid")
  // }else {
  //     console.log("Not valid")
  // }
  //Q2 find discount
  // let price=Number(prompt("Enter price"));
  //  let dis=0;
  // console.log(price)
  //  if(price>=0 && price<=5000){
  //       dis=0;
  // }else if(price>=5001 && price<=7000){
  //       dis=10;
  // }else if(price>=7001 && price<=9000){
  //       dis=20;
  // }else if(price>=9001){
  //     console.log()
  // }
  // console.log((`${price-Math.floor(dis*price)/100}rs you need to pay`));
};
ifElse();

const ifQ = () => {
  // Q3 find light bill that user need to pay
  //     let unit = Number(prompt("Enter unit"));
  //     let amount=0;
  //     if(unit<=100){
  //         amount=unit*4;
  //         // console.log(`you need to pay ${unit*4.2} rs`)
  //     }else if(unit >100 && unit<=200){
  //         amount=((100*4)+(unit-100)*6)
  //         // console.log(((unit-100)*6)+(100*4.2),"units")
  //     }else if(unit >200 && unit<=400){
  //         amount=(100*4)+(100*6)+((unit-200)*8)
  //         // console.log((100*4)+((unit-100)*6)+((unit-100)*8),"units")
  //     }else{
  //         amount=(100*4)+(100*6)+(200*8)+((unit-400)*13)
  //         // console.log((100*4)+((unit-100)*6)+((unit-100)*8)+((unit-100)*10),"units")
  //     }
  //    alert(`You need to pay ${amount}rs.`)
  // Another Way
  // let units=Number(prompt("Enter Unit"));
  // let amountPay=0;
  // if(units>400){
  //     amountPay=(units-400)*13;
  //     units=400;
  // }
  // if(units>200 && units<=400){
  //     amountPay += (units-200)*8;
  //     units=200
  // }
  // if(units>100 && units<=200){
  //     amountPay +=(units-100)*6;
  //     units=100
  // }
  // if(units<=100){
  //     amountPay += units*4;
  // }
  // alert(`You need to pay ${amountPay} rs.`)
};
ifQ();

const cashQ = () => {
  let cash = Number(prompt("Enter Cash")); //1100
//   let amt=1;

//   console.log(typeof(cash))
   
  if(cash>=500){
     console.log("500 notes", Math.floor(cash/500));
     cash =cash%500;
    //  console.log(cash)  
  }
  if(cash>=200){
    console.log("200 notes", Math.floor(cash/200));
    cash =cash%200;
    // console.log(cash)  
 }
 if(cash>=100){
    console.log("100 notes", Math.floor(cash/100));
    cash =cash%100;
    // console.log(cash)  
 }
 if(cash>=50){
    console.log("50 notes", Math.floor(cash/50));
    cash =cash%50;
    // console.log(cash)  
 }
 if(cash>=20){
    console.log("20 notes", Math.floor(cash/20));
    cash =cash%20;
    // console.log(cash)  
 }
 if(cash>=10){
    console.log("10 notes", Math.floor(cash/10));
    cash =cash%10;
    // console.log(cash)  
 }
 if(cash>=5){
    console.log("5 rs", Math.floor(cash/5));
    cash =cash%5;
    // console.log(cash)  
 }
 if(cash>=2){
    console.log("2rs", Math.floor(cash/2));
    cash =cash%2;
    // console.log(cash)  
 }
 if(cash>=1){
    console.log("1rs ", Math.floor(cash/1));
    cash =cash%1;
    // console.log(cash)  
 }
};
cashQ();
