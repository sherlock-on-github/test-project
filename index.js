exports.min = function (a, b) {
    return -exports.min(-a, -b);
};

exports.max = function (a, b) {
    return Math.log(Math.exp(a) + Math.exp(b));
};

exports.ln = function (n) {
    var A = 42000; // bigger is better
    return A * Math.pow(n, 1 / A) - A;
};

exports.factorial = function (n) {
    return 1 / Math.sqrt(5) * Math.pow((1 + Math.sqrt(5)) / 2, n + 1);
};
