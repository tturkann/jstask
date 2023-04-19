// task1
// function registration() { 
//     const lastName = prompt("Enter your lastName:"); 
//     const firstName =  prompt("Enter your firstName:"); 
//     const email =  prompt("Enter your email"); 
//     const registrationString = `${email} - ${lastName} ${firstName}`; 
//     return  registrationString; 
// } 
// const registrationInfo =  registration(); 
// console.log(registrationInfo);


// task2 
// function delivery() { 
//     const kilometres = prompt("Enter kilometres"); 
// return 5 + kilometres * 0.25  
 
// } 
// const deliveryCost = delivery(); 
// console.log(deliveryCost);

// task3
// function products() {  
//     const productName = prompt("Enter product name");  
//     const unitePrice =  prompt("Enter unite price");  
//     const quantity =  prompt("Enter quantity"); 
//     const participates=  prompt("Participates in the promotion or not ");  
//     const discount1 = unitePrice * 0.1 
//     if (  quantity>= 5) { 
//        console.log(discount1); 
//     }  
//      const discount2 = unitePrice * 0.15 
//     if ( participates == "yes") { 
//       console.log(discount2); 
       
//     }else if ( participates == "no"){ 
//       console.log(unitePrice) 
//     } 
//   }  
   
//   const customerInfo = products();  
//   console.log(customerInfo);

// task4
// function tables() { 
//     const numGuest = prompt("enter guests number from 1 to 8"); 
//     const small = "small table"; 
//     const medium = "medium table"; 
//     const large = "large table"; 
//     const none = "none "
   
//     if (numGuest <= 2) { 
//       console.log(small); 
//     } else if (numGuest <= 4) { 
//       console.log(medium); 
//     }  else  if (numGuest <= 8) { 
//       console.log(large); 
//     } 
//     else{
//        console.log (none);
//     }
//   } 
//    tables();


// task5 
// function numbers() {
//     const number1 = prompt("Enter first number: ");
//     const number2 = prompt("Enter second number: ");
//     const number3 = prompt("Enter third number: ");
    
//     if(number1 >= number2 && number1 >= number3) {
//         if (number2> number3) {
//             console.log(number1 + "," + number2 + "," + number3 )
//         }else{
//            console.log(number1 + ","  + number3 + "," + number2)
//         }
//     }
//     else if (number2 >= number1 && number2 >= number3) {
//         if (number1>number3) {
//             console.log(number2+ ","  + number1 + "," + number3)
//         }else{
//             console.log(number2+ ","  + number3 + "," + number1)
//         }
//     }
//     else {
//         console.log(number3 + "," + number2 + "," + number1)
//     }
//     }
//     numbers();


// task 6
// I'll fixed


//task7 
// function services() { 
//      const length =parseInt(prompt(" Please enter length")); 
//      const width = parseInt(prompt("Plase enter width")) ; 
//      const height = parseInt(prompt("Please enter height ")); 
//    const weight = prompt("Please enter weight"); 
//       const distDelivery = prompt("Please enter delivery distance"); 
//      const sum = length + width +height; 
 
// if (sum < 150 && length < 100 && width < 100 && height < 100 && weight < 10 
//           && distDelivery < 10 && distDelivery > 3 
//       ) { 
//        console.log("Accepted"); 
//       } else { 
//         console.log("Couldn't accept") 
//     } 
// } 
//  services(); 
 
//task8 
// function textNum() { 
//     const input = prompt("Please enter the number"); 
//     const numSpecial = { 
//       1: "one", 
//       2: "two", 
//       3: "three", 
//       4: "four", 
//       5: "five", 
//       6: "six", 
//       7: "seven", 
//       8: "eight", 
//       9: "nine", 
//       10: "ten", 
//       11: "eleven", 
//       12: "twelve", 
//       13: "thirteen", 
//       14: "fourteen", 
//       15: "fifteen", 
//       16: "sixteen", 
//       17: "seventeen", 
//       18: "eighteen", 
//       19: "nineteen", 
//       20: "twenty", 
//       30: "thirty", 
//       40: "forty", 
//       50: "fifty", 
//       60: "sixty", 
//       70: "seventy", 
//       80: "eighty", 
//       90: "ninety", 
//     }; 
//     if (input < 10) { 
//       console.log(onesPlace[input]); 
//     } 
//     if (input >= 10 && input < 20) { 
//       console.log(numSpecial[input]); 
//     } 
//   const onesDigit = input % 10; 
//       if (onesDigit === 0) { 
//         console.log( numSpecial[input[0]+"0"]); 
         
//       } else { 
//           console.log(`${numSpecial[input[0]+"0"]} ${numSpecial[input[1]]}`) 
//       } 
//   } 
//   textNum();


// task 9
// const input = prompt("enter") 
// let A = "100" 
// for (i = 1 ; i < 1000; i++){ 
// if(i % input == 0 ) { 
// console.log(i)} 
// }


// task10
// function depositAmountt() { 
//     const initialAmount =parseInt (prompt("Please enter the initial amount: ")); 
//     const years = parseInt(prompt(" Please enter the duration in years: ")); 
//     const rate = parseInt(prompt(" Please enter the annual interest rate in %: ")); 
   
//     let depositAmount = initialAmount; 
//     for (let i = 0; i < years; i++) { 
//       const interestAmount = depositAmount * rate / 100; 
//       depositAmount += interestAmount; 
//     } 
   
//     console.log( depositAmount); 
//   } 
//   depositAmountt()
// task 11

// task 12
// function sumDigits(code) {
//     let sum = 0;
//     while (code > 0) {
//       sum += code % 10;
//       code = Math.floor(code / 10);
//     }
//     return sum;
//   }
//   let code = 12345;
// let digitSum = sumDigits(code);
// console.log(digitSum); 
