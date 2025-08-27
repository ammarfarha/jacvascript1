function maximum(x, y, z) {
    if (x > y && x > z) {
        return x;
        // console.log(x);
    }
    else if (y > x && y > z) {
        return y;
        // console.log(y);
    }
    else {
        return z;
        // console.log(z);
    }
}
// maximum(22, 33, 5);

function summing(m) {
    if (m < 0)
        return 0;
    else {
        let sum = 0;
        let i = 1;
        while (i <= m) {
            sum = sum + i
            i++
        }
        return sum;
    }
}

function summing2(m) {
    if (m <= 0) {
        return 0;
    }
    else {
        return m * (m + 1) / 2;
    }
}
// console.log(summing(20))
// console.log(summing2(20))

function isprime(n) {
    if (n <= 1) {
        return false;
    }
    let i = 2;
    while (i < n) {
        if (n % i === 0) {
            return false;
        }
        i++
    }
    return true
}
// console.log(isprime(15))

let i = 1;
while (i <= 1000) {
    if (isprime(i)) {
        console.log(i);
    }
    i++;
}