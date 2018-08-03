function stringIndices(input, position) {
  // let input = document.getElementById('phrase').value,
  //   position = document.getElementById('position').value,
     onlyLetters = input.replace(/[!@#$%^&*,]/g, "").split(" ")

    if ( isNaN(position) || position > onlyLetters.length || position < 0 ) {
      return ""
    }

  return onlyLetters[ position - 1 ]
}

console.log(stringIndices('yaseen coming home', 3))
