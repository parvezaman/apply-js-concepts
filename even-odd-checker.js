// function evenOddChecker(number) {
//     var number = parseInt(prompt("please input any integer: "));
//     if (number%2 == 0){
//         document.write(number, " is an even number");
//     }
//     else{
//         document.write(number, " is an odd number");
//     }
// }

// evenOddChecker();


// Another way

// var myNumber =  parseInt(prompt("input any integer you want: "));

function isEven(myNumber) {
    if (myNumber % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1546;
const isNumberEven = isEven(myNumber);
console.log(isNumberEven);