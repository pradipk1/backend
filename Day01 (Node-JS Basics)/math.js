

function fibonacci(n) {
    let a = [1,1];

    for(let i=2; i<n; i++) {
        a.push(a[i-1]+a[i-2]);
    }

    return a[n-1];
}

module.exports = {
    fibonacci
}