// const makeChange = ({price, amountGiven}) => {
//   let change = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 },
//       remainder = amountGiven - price,
//       amountOfQuarters = Math.floor( remainder / 25 ),
//       amountOfDimes = Math.floor( (remainder%25) / 10 ),
//       amountOfNickels = Math.floor( (remainder%25) / 5 ),
//       amountOfPennies = Math.floor( remainder / 1 )
//
//       return {
//         quarters: amountOfQuarters,
//         dimes: amountOfDimes,
//         nickels: amountOfNickels,
//         pennies: amountOfPennies
//       }
//
//
//
//
//   // return  amountOfQuarters
//
// }

function makeChange(price, amountGiven) {
  var remains = price;
  var change = {};

  for (var currentValue in amountGiven) {
    if (remains/amountGiven[currentValue]>1) {
    change[amountGiven[currentValue]] = Math.floor(remains/amountGiven[currentValue]);
   remains = remains%amountGiven[currentValue];
    }
  }
return change;
}

export default makeChange
