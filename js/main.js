
// // step 1

// function getDaysUntilChristmas() {


// }


function getDaysUntilChristmas() {

    var today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 25);
        christmas.setFullYear(today.getFullYear() + 1);
    


    var timeDiff = christmas.getTime() - today.getTime();
    var daysUntilChristmas = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysUntilChristmas;
    }

var daysLeft = getDaysUntilChristmas();
console.log("Number of days remaining until Christmas" + daysLeft);



// step 2

let array= {}



let numGladiators = 5
function square(num) {
    return Math.pow(num, 2);
}
console.log(fullName.length - 1);
