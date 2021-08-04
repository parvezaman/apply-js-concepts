var phones = ['iPhone', 'Samsung', 'Walton', 'Oppo', 'Xaomi', 'OnePlus'];
console.log(phones);
var phoneStock = prompt("Input your phone name: ")
var phoneIndex = phones.indexOf(phoneStock);
var phoneAvailability;
if (phoneIndex != -1) {
    console.log(phoneStock, "is available");
    phoneAvailability = true;
    
}
else{
    console.log(phoneStock, "is not available");
    phoneAvailability = false;
}

switch (phoneAvailability) {
    case true:
        console.log("here! feast your eyes watching your phone!!!");
        break;

    case false:
        var userConcent = prompt("please type yes if you want to add this item into our stock! ")
        if (userConcent === "yes") {
            var userPhoneName = prompt("please input your desired phone name: ");
            phones.push(userPhoneName);
            console.log("thank you very much!" , userPhoneName, " successfully added");

        }
        break;
}
console.log(phones);
