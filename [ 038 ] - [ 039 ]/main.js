let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim()
day = day.charAt(0).toUpperCase() + day.slice(1);

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("Sorry, No Appointments Available Today");
        break;
    case "Monday":
    case "Thursday":
        console.log("Today's Appointments Are Available From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("Today's Appointments Are Available From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("Today's Appointments Are Available From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its not a valid day")
};

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"