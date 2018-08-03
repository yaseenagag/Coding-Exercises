const readline = require('readline')

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const randomNumber = () => {
  return Math.floor(Math.random() * 5) + 1
}

let numberToGuess = randomNumber()

console.log('\nGuess a number between 1 and 100 (type exit to quit the game)\n')

readL.on('line', input => {
  if (input === 'exit') process.exit()

  else {
    if (parseInt(input) === numberToGuess) {
      console.log('\n************\n* You win! *\n************\n')
      console.log('Guess a number between 1 and 100 (type exit to exit)\n')
    } else if (parseInt(input) > numberToGuess)
      console.log('\nToo high, try again\n')
    else if (parseInt(input) < numberToGuess)
      console.log('\nToo low, try again\n')
  }
})
