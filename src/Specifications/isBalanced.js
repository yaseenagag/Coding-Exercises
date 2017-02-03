function isBalanced(expr) {
  let result = []
    counterL = 0,
    counterR = 0


  for (var i = 0; i < expr.length; i++) {

    if ( expr[i] === '(' ) {
      counterL++
    }
    if ( ')' === expr[i]) {
      counterR++
    }
  }

  if ( counterR === counterL ) {
    return true
  } else {
    return false
  }
}

console.log(isBalanced('((a*b)+c*(d-e))'))
console.log(isBalanced('(a+b)-c)'))
// console.log('done')
