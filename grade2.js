// DEKLARASI BIASAs
let nama = "zidan rifqi"

console.log("nama saya " + nama)
console.log(typeof nama)

//IF ELSE ELSE IF
let number = 10;

if (number>10) {
    console.log("number lebih besar dari 10")
} else if (number === 10) {
    console.log("number sama dengan 10")
} else {
    console.log("number lebih kecil dari 10")
}

//SWITCH CASE
let score = 85;

switch (true) {
    case (score >= 60):
        console.log("Grade: A");
        break;
    default:
        console.log("Grade: B");
}

//FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//DO WHILE LOOP 
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// FUNCTION DECLARATION
function sayHello() {
    console.log("Hello, World!");
}
sayHello(); 

// FUNCTION DENGAN PARAMETER
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!

//Function RETURN
function getPi() {
    return 3.14159;
}
let pi = getPi();
console.log(pi); // Output: 3.14159

// FUNGSI RETURN DENGAN PARAMETER
function square(number) {
    return number * number;
}

let result = square(5);
console.log(result); // Output: 25

// FUNGSI MENGGUNAKAN VOID
function logMessage(message) {
    console.log(message);
    return void 0; // Menggunakan void untuk mengembalikan undefined secara eksplisit
}
logMessage("Hello, World!"); // Output: Hello, World!

let result = logMessage("Test message");
console.log(result); // Output: undefined

// FUNGSI MENGGUNAKAN VOID PADA PARAMETER
function executeAndIgnore(callback) {
    void callback(); // Memastikan bahwa nilai kembalian callback diabaikan
}
function sayHello() {
    console.log("Hello from callback!");
    return "This will be ignored";
}
executeAndIgnore(sayHello); // Output: Hello from callback!



