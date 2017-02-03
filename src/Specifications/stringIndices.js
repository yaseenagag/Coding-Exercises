function stringIndices() {
  let input = document.getElementById('phrase').value,
    position = document.getElementById('position').value,
    onlyLetters = input.replace(/[!@#$%^&*,]/g, ""),
    splitString = onlyLetters.split(" ")

    if ( isNaN(position) || position > splitString.length || position < 0 ) {
      return ""
    }

  alert( splitString[ position - 1 ] )
}
