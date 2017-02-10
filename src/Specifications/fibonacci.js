function fibonacci(input) {
  let current = 0,
    pervious = 1,
    fibonacci = 1,
    result = []

    for(var index = 2; index <= input+1; index++) {
        fibonacci = current + previous
        current = previous
        previous = fibonacci
        result.push(previous)

    }
    return fibonacci;
};

console.log(fibonacci(6))
