// lets do it in my way inshallah 

// To determine whether a year is a leap year, follow these steps:

// If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).


function leapYearTest(year) {
    var year = parseInt(prompt("please input a year!"));
    if (year%100 != 0) {
        if (year%4 == 0) {
            console.log(year, " is leap year");
        }
        else{
            console.log(year, " is not a leap year");
        }
    }
    else{
        if (year%400 == 0) {
            console.log(year, " is a leap year");
        }
        else{
            console.log(year, " is not a leap year");
        }
    }
}

leapYearTest();


// stack overflow
// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }