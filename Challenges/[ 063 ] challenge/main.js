function checkStatus(a, b, c) {
    let check = [a, b, c]
    let zName, zAge, status;
    for (i = 0; i < check.length; i++){
        if (typeof check[i] === "string") {
            zName = check[i];
        } else if (typeof check[i] === "number") {
            zAge = check[i];
        } else if (typeof check[i] === "boolean") {
            if (check[i] === true) {
                status = "Available";
            } else {
                status = "Not available"
            }
        }
    }
    return `Hello ${zName}, Your age is ${zAge}, You are ${status} for hiring`
}

console.log(checkStatus(38, "Osama", true));

/* Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
 */