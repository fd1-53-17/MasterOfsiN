function min() {
    var min = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) min = arguments[i];
    }
    alert("minimal number : " + min);
}
min(1, 2, 3, 4, -15, 5, 6, 7, 8, 9, 0, -4)

function max() {
    var max = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) max = arguments[i];
    }
    alert("maximal number:" + max)
}
max(1,2,3,4,5,13,67,9,11,435,1456,12,10)