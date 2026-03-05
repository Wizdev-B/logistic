// // conditional statement
// // if (condition){
// // set of instruction to execute
// // }
// // else {otherwise
// // set of alternative instruction
// // }

//     // IF STATEMENTS IN JS

// const speed = 75;
//  if (speed > 90) {
//     console.log("high risk:Engine will fail");
//  } else if (speed > 70){
//     console.log("Moderate Risk:Approaching Speed limit");
//  }else if (speed > 60){
//     console.log("Escape Velocity Speed Attained");
//  }else {
//     console.log ("Gathering momentum");
//  }

//                     //  SWITCHCASE IN JS
//                     // ADMIN | STUDENT | EDITOR | GUEST | SUPERVISOR |AUDITOR
//                     // WRITING AN IF STATEMENT STARTS WITH SWITCH
//     const userrole = "admin";
//      switch(userrole) {
//         case 'admin': console.log("full access Granted")
//                            break;
//         case 'student': console.log("only access to student resources")
//                            break;
//         case 'editor': console.log ("only access to editor component")
//                            break;

//         case 'guest': console.log ("only access to guest assets")
//                            break;

//         case 'supervisor': console.log ("only access to comment and remarks")
//                            break;

//         case 'auditor': console.log ("only access to school fees record")
//                            break;
//         default:
//         console.log ("access denied")
//      }

//                         //  classwork
//                         const product= "A1";
//                         switch(product){
//                   case 'A1': console.log("Dispensing Chips....Cost:$1.50")
//                               break;
//                   case 'B2': console.log("Dispensing Soda....Cost:$2.00")
//                              break;
//                   case 'C3': console.log("Dispensing Water....Cost:$1.00")
//                              break;
//                              default:
//                                 console.log("Error:Item not found.please try again.")
//                         }

// console.log("trying coding and it stressful");
//  const candidateScore = document.getElementById("score");
//  const trigger = document.getElementById("button");
//  trigger.addEventlistener("click", ()=> {console.log("my button", candidateScore.value)
// console.log("this is score", candidateScore);});
//  conditional statement

// console.log("Interest Rate Calculator");
// const submit = document.getElementById("submit");

// submit.addEventListener("click", () => {
//   const principal = document.getElementById("principal");
//   const Interest = document.getElementById("interest");
//   const time = document.getElementById("time");

//   console.log("principal", principal.value);
//   console.log("interest", Interest.value);
//   console.log("time", time.value);

//   let p = Number(principal.value);
//   let t = Number(time.value);
//   let r = Number(Interest.value) / 100;

//   const new_interest = p * t * r;

//   console.log("New Principal amount", p+=new_interest);
// });

// const speed = 75;
//  if (speed > 90) {
//     console.log("high risk:Engine will fail");
//  } else if (speed > 70){
//     console.log("Moderate Risk:Approaching Speed limit");
//  }else if (speed > 60){
//     console.log("Escape Velocity Speed Attained");
//  }else {
//     console.log ("Gathering momentum");
//  }
//   ASSIGNMENT SECTION

// const packageWeight = document.getElementById("weight");
// const destinationZone = document.getElementById("zone");
// let baseCost = 2000;
// // const isExpressDelivery = document.getElementById("checkbox");
// const placeOrder = document.getElementById("submit");
// placeOrder.addEventListener("click", () => {
//   const totalCost =
//     destinationZone.value === "ibadan"
//       ? (baseCost + 5000)
//       : destinationZone.value === "lagos"
//         ? (baseCost += 1000)
//         : destinationZone.value === "abeokuta"
//           ? baseCost
//           : "not a destination";

//   console.log(totalCost)
// });

//  SECTION 2
const destinationZone = document.getElementById("zone");
const packageWeight = document.getElementById("weight");
const isExpressDelivery = document.getElementById("checkbox");
let baseCost = 2000;
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  let totalCost = 0;
  if (destinationZone.value == "ibadan") {
    totalCost = baseCost + 5000;
  } else if (destinationZone.value == "lagos") {
    totalCost = baseCost + 1000;
  } else if (destinationZone.value == "abeokuta") {
    totalCost = baseCost;
  } else {
    baseCost;
  }
  if (packageWeight.value > 5) {
    totalCost += 1500;
  }

  console.log(totalCost);

  if (isExpressDelivery.checked) {
    totalCost *= 1.5;
  }
  console.log("Your total shipping cost is: " + totalCost);
  const resultDisplay = document.getElementById("result");
  resultDisplay.textContent = "Your DELIVERY Fee is: N"+totalCost;
});
