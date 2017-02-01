function stringIndices( input , position ) {
  let onlyLetters = input.replace(/[!@#$%^&*,]/g, ""),
      splitString = onlyLetters.split(" ")

      if ( isNaN(position) || position > splitString.length || position < 0 ) {
        return ("Empty")
      }

    return splitString[ position - 1 ]
}
