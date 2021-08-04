var factorial = 1;
var factorialOfWhat = parseInt(prompt("input of whose factorial you want:"));
for (var i = 1; i <= factorialOfWhat; i++){
    factorial = i * factorial;
}
console.log("factorial of ",factorialOfWhat,"! is = ", factorial);
