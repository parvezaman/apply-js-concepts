// function inchFeetConvertor() {
//     var userWants = parseInt(prompt("press 1 to convert 'inch to feet' and 2 to convert 'feet to inch.'"));
//     switch (userWants) {
//         case 1:
//             var userLengthToFeet = parseFloat(prompt("Please input your inches"));
//             var convertedFeet = userLengthToFeet/12;
//             return convertedFeet;
//             break;
    
//         case 2:
//             var userLengthToInch = parseFloat(prompt("Please input your feet"));
//             var convertedInch = userLengthToInch*12;
//             return convertedInch
//             break;
//     }
// }

// var result = console.log(inchFeetConvertor());




function inchFeetConverter(feet, inch) {
    var feet = parseFloat(prompt("Plese input feet: "));
    var inch = parseFloat(prompt("Plese input inch: "));
    var userWant = parseInt(prompt("Now press 1 to get result in feet and 2 to inch."));
    switch (userWant) {
        case 1:
            var lengthFeet = feet + inch/12;
            var resultFeet = console.log("your result is ", lengthFeet, " feet");
            break;
    
        case 2:
            var lengthInch = feet*12 + inch;
            var resultInch = console.log("your result is ", lengthInch, " inch");
            break;
    }
}

var output = inchFeetConverter();