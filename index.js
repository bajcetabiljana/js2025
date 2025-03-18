const h1 = document.getElementById("h1");
h1.textContent = "Header1";
h1.style.color = "white";
console.log(h1);
console.log(typeof h1);

//Varijable
/*
let number;
number = 5;
console.log(typeof number);

let string = "Tekst";
console.log(typeof string);

let boolean = true;
let boolean2 = false;

console.log("Sajanje dve varijable: prva je" + number + "druga je" + string + "treca je" + boolean);
*/

//prvi zadatak

let fullName = "Biljana Bajceta";
let age = 48;
let student = false;

document.getElementById("p1").textContent = "Your name is: " + fullName ;
document.getElementById("p2").textContent = "Your age is: " + age;
document.getElementById("p3").textContent = "You are a student: " + student;

// Arithmetic operators = operands (valuse, variables, etc.)
//                      =   operators (+, -, /, *)
/*
let students = 30;
console.log(students);

students = students + 1;
students += 1;
students ++; //ovako uvecavamo samo za jedan
//ovo isto moze da se napise i na ovaj skraceni nacin

students = students - 1;
students -= 1;
students --; // smanjujemo samo za jedan

students = students / 2;
students /= 2;

students = students * 2;
students *= 2;

students = students ** 3;
students **= 2;
// ** exponents = to je kvadrat nekog broja, odnosno koliko puta da se sam sa sobom pomnozi

students = students % 2; 
students %= 2;
// Modulo = Reminder = ostatak / kad se sttudents podeli sa tim brojem daje nam ostatak.
let ExtraStudents = students ** 3;
console.log(students);
*/

//Operator precedence
1. parenthesis ()
2. exponents
3. multiplications & division & modulo/reminder
4. addition & subtraction

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
