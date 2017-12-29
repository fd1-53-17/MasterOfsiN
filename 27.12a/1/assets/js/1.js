function min(a, b) {
    if (a <= b) {
        console.log(arguments);
        return a;
    }
    else {
        return b;
    }

}
console.log(min(10, 20, 4, 77))

function max(a, b) {
    if (a <= b)
        return b;
    else
        return a;
}
console.log(max(10, 20));

function selfCount() {
    var counter = 0;

    function countIncrement() {
        counter++;
        console.log(counter);
    }
    return countIncrement;
}
var myFun = selfCount();
myFun();
var myFun2 = selfCount();
myFun2();
myFun2();
myFun2();
myFun();
