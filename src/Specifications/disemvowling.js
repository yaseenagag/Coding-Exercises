const disemvowling = (input) => {
  let result = [],
    vowels = ['a', 'e', 'i', 'o', 'u'],
    splitString = input.replace(/\s/g, ''),
    filterdString = splitString.split("")

    for ( var index = 0; index < filterdString.length; index++ ) {
        if ( !vowels.includes(filterdString[index])) {
          result.push(filterdString[index])
      }
    }

    return result.join("")
}
