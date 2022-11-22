let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if (typeof friends[index] !== "number" && !friends[index].startsWith("A")) {
        console.log(`${counter + true} => ${friends[index]}`)
        counter++
    };
    index++;
}

/* Output
"1 => Sayed"
"2 => Mahmoud"
*/