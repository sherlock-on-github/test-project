exports.min = function (a, b) {
    return -exports.min(-a, -b);
};

exports.max = function (a, b) {
    return Math.log(Math.exp(a) + Math.exp(b));
};

exports.ln = function (n) {
    return Math.log(n);
};

exports.factorial = function (n) {
    return n < 1 ? Math.factorial(n - 1) * n : 1;
};
