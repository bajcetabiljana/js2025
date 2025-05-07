

h1.style.color = "white";
console.log(h1);
console.log(typeof h1);

//Varijable

let number;
number = 5;
console.log(typeof number);

let string = "Tekst";
console.log(typeof string);

let boolean = true;
let boolean2 = false;

console.log("Sajanje dve varijable: prva je" + number + "druga je" + string + "treca je" + boolean);


// 1 = prvi zadatak

let fullName = "Biljana Bajceta";
let age = 48;
let student = false;

document.getElementById("p1").textContent = "Your name is: " + fullName ;
document.getElementById("p2").textContent = "Your age is: " + age;
document.getElementById("p3").textContent = "You are a student: " + student;


// 2 = Arithmetic operators = operands (valuse, variables, etc.)
//                      =   operators (+, -, /, *)

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



//Operator precedence
/*
1. parenthesis ()
2. exponents
3. multiplications & division & modulo/reminder
4. addition & subtraction
*/

let resultPres = 1 + 2 * 3 + 4 ** 2;
console.log(resultPres);




// User input
/*
two ways:
1. easy way = window prompt
2. profecional way = HTML textbox
*/
/*
//Easy way
let userName;

userName = window.prompt("What is your name ?");
*/
//ovo moze da se napise i u jednoj liniji koda
/*
let userName = window.prompt("What is your name ?");

console.log(userName);
*/

//profetional way = html textbox

let userName;
let header;
document.getElementById("submit1").onclick = function(){
    userName = document.getElementById("text1").value;
    header = document.getElementById("h1").textContent = "Hello: " + userName;
}
   


//type conversion = change the datatype of a value to a nother (string, nummber, booleans)
/*
let age = window.prompt("Enter your age");
age = Number(age);

age+=2;

console.log(age, typeof age);
*/
//jos jedan primer

let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
//ovako mozemo da proverimo da li je neko uneo neki podatak u User input, posto je boolean za empty varijablu uvek false


//Konstante const = variables som can not be changed
//zadatak: napravi program gde za izracunavanje obim kruga gde user unosi precnik kruga.
/*
const PI = 3.1415926;
let radius;
let circumference;
let title = document.getElementById("title2").textContent = "Circumference of the circel"
*/
//kad user ubacuje vrednost preko prompta onda on automatski uzima unetu vrednost...ali kada user unosi neki podatak preko inputa i submita onda je neophodno da bi izvukli koja je to uneta vrednost napisemo code...    userVrednost = document.getElementById("input").value;
/*
radius = window.prompt("Enter radius of the cirkel");
radius = Number(radius);

circumference = 2 * radius * pi;

console.log(circumference);

*/


// Kad user ubacuje podatak preko inbox i submita
const PI = 3.1415926;
let radius;
let circumference;

document.getElementById("submit2").onclick = function(){
    radius = document.getElementById("text2").value;
    radius = Number(radius);
    circumference = 2 * radius * PI;
    document.getElementById("result2").textContent = "Circumference of the circel is:" + circumference + "cm";
};


//Counter

let title3 = document.getElementById("title3").textContent = "Counter";

const decreaseBt = document.getElementById("decrease");
const resetBt = document.getElementById("reset");
const increaseBt = document.getElementById("increase");
const countLabel = document.getElementById("label");

let count = 0;

increaseBt.onclick = function() {
    count ++;
    countLabel.textContent = count;
}

decreaseBt.onclick = function() {
    count --;
    countLabel.textContent = count;
}

resetBt.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}


//Math =  obezbedjuje da mozemo da koristimo razlicite funkcije koje nam proracunavaju razne matematicke zadatke.
/*
Math.PI
//daje vrednost pi
console.log(Math.PI);


let p = 3.81;
let t = 2;
let m;

//Math.round = zaokruzuje decimalni broj/do 5 na dole od 5 na gore
m = Math.round(p);

console.log(m);


Math.floor(m);
Math.ceil(m);
//izbacuje najvecu ili najmanju vrednost
Math.max(p,t,m);
Math.min(p,t,m);

*/

//Izbacuje neki RANDOM number izmedju 0 i 1
let randomNum = Math.random();

console.log(randomNum);

//ako hocemo da nam da neki random broj od 0 do 5 onda:

let random5 = Math.random() * 6;

//ali tada dobijamo neki decimalni broj do 6. Ako zelimo da bude celi broj moramo da:

random5 = Math.floor(Math.random()  * 6);

//na ovaj nacin dobijamo random brojeve od 0 do 5, a mi zelimo od 1 do 6. Onda:

let random6 = Math.floor(Math.random()  * 6)+1;
// sa +1 mu govorimo koji je broj minimum. ako mu kazemo +4, on ce poceti da izbacuje brojeve od 4



