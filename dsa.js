function fibonacci(n){
    const fib = [0,1];
    for (let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonacci(7));

 

function factorial(n){
    let fact = 1;
    for(let i = 2; i<=n; i++){
        fact = fact*i;
    }
    return fact;
}

console.log(factorial(0));


function prime(n){
    if (n<2){
        return false;
    }
    for (let i=2; i<n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

console.log(prime(1));
console.log(prime(5));

