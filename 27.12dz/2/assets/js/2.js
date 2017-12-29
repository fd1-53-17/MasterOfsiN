var str = prompt("Введите ваше слово или фразу");
str = str.toLowerCase().split(" ").join("").split(",").join("").split(".").join("").split("-").join("");
var strRev = str.split("").reverse().join("");
if (str == strRev) {
    alert("Палиндром");
}
else { alert("Не палиндром"); }
