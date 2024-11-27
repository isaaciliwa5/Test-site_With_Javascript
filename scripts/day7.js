let score = 85;

if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 60) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else if (score >= 40) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

let count = 1;
while (count <= 5) {
    console.log(`count is: ${count}`);
    count;


let count = 1;
while (count <= 5) {
    console.log(`count is: ${count}`);
    count++;
}

let countDown = 10;
while (countDown >= 1) {
    console.log(`Count Down is: ${countDown}`);
    countDown--
}

let password = "";
while (password !== "mySecret1") {
    password = prompt("Enter Password!:");
}
console.log("Access Granted!");