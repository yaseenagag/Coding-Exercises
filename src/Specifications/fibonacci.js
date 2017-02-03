// function fibonacci(input, cb) {
//   let result = [];
//
//   if( input <= 1 ) return 1;
//
//   let newValue = fibonacci(input - 1, cb) + fibonacci(input - 2, cb)
//   cb(newValue)
//   return(newValue)
//
// }
//
//
// console.log(fibonacci(6, v => {
//   console.log(v)
// }))

function fibonacci(n, cb) {
    if(n>=1){
      cb(1)
    }

    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n+1; i++) {
        f = a + b;
        a = b;
        b = f;
        cb(f)
    }
    return f;
};

fibonacci(6, console.log)
