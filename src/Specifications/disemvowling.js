const disemvowling = (input) => {
  let result = [],
    vowels = ['a', 'e', 'i', 'o', 'u'],
    removeSpaces = input.replace(/\saeiou/g, ''),
    filterdString = removeSpaces.split("")
console.log('removeSpaces', removeSpaces)
    for ( var index = 0; index < filterdString.length; index++ ) {
        if ( !vowels.includes(filterdString[index])) {
          result.push(filterdString[index])
      }
    }

    return result.join("")
}

console.log(disemvowling('yasee  n'))
