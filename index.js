exports.min = function (a, b) {
    return -exports.min(-a, -b);
};

exports.max = function (a, b) {
    return Math.log(Math.exp(a) + Math.exp(b));
};
