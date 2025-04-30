

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



//RENDOM NUMBER GENERATOR

let randomN = Math.floor(Math.random()  * 6) + 1;

console.log(randomN);

//ovo mozemo uraditi i ovako

let random37;
let min = 3;
let max = 7;
random37 = Math.floor(Math.random()  * (max - min)) + min;

console.log(random37);

//DICE GAME

const submit5 = document.getElementById("submit5");
const Label1 = document.getElementById("label1");
const Label2 = document.getElementById("label2");
const Label3 = document.getElementById("label3");

const minN = 1;
const maxN = 6;
let randomNum1;
let randomNum2;
let randomNum3;

submit5.onclick = function(){
    randomNum1 = Math.floor(Math.random() * maxN)+ minN;
    randomNum2 = Math.floor(Math.random() * maxN)+ minN;
    randomNum3 = Math.floor(Math.random() * maxN)+ minN;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}   


//If statement

let age6 = 13;

if(age6 >= 18){
    console.log("You are old enough to enter this site.");
}
else{
    console.log("You must be 18+ to enter this site.");
}
    
// if statment super funkcionise sa buleanom..da se proverava da li je nesto tacno ili ne

let ifStudent = false;

if(ifStudent){
    console.log("You are a student!");
}
else{
    console.log("You are NOT a student!");
}


let age66 = 18;
let hasLicense = false;

if(age66 >= 16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license!")
    }
    else{
        console.log("You do not have your license!")
    }
}   
else{
    console.log("You are NOT old enough to drive")
}
    

let age666 = 18;

if(age666>=100){
    console.log("You are to old to enter this site!.")
}
else if(age666==0){
    console.log("You are just born!.")
}
else if(age666 >= 18){
    console.log("You are old enough to enter this site.");
}
else if(age666<=0){
    console.log("Your age can not be below 0.")
}

else{
    console.log("You must be 18+ to enter this site.");
}


//Input your age and recive massage acording to input    

const result6 = document.getElementById("result6");
const submit6 = document.getElementById("submit6");
const text6 = document.getElementById("text6");
let age6666;

submit6.onclick = function(){

    age6666 = text6.value;
    age6666 = Number(age6666);
    if(age6666 > 100){
        result6.textContent = "You are to old!";
    }
    else if(age6666 == 0){
        result6.textContent = "You are just born";
    }
    else if(age6666 < 0){
         result6.textContent = "It is imposible age";
    }
    else if( age6666 >= 18){
        result6.textContent = "You are en adult";
    }
    else{
        result6.textContent = "You are not en adult.";
    }

}


//Check proprety is checking if radio button or check box are checked

const checkBox = document.getElementById("myCheckBox");
const radioVisa = document.getElementById("visaBtn");
const radioMaster = document.getElementById("masterBtn");
const radioPayPal = document.getElementById("payPalBtn");
const submitResult = document.getElementById("submitResult");
const payResult = document.getElementById("payResult");
const submit7 = document.getElementById("submitBt");


submit7.onclick = function(){
    if(checkBox.checked){
        submitResult.textContent = "You are subscribed!"; 
    }
    else{
        submitResult.textContent = "You are NOT subscribed!"; 
    }

    if(radioVisa.checked){
        payResult.textContent = "You are paying with Visa card";
    }
    else if(radioMaster.checked){
        payResult.textContent = "You are paying with Master card";
    }
    else if(radioPayPal.checked){
        payResult.textContent = "You are paying with PayPal";
    }
    else{
        payResult.textContent = "You have not checked any of options!"
    }
}
   

// Ternary operator> shortcut to if{} and else{} statemet helps to assign a variable based on condtion 
// condition ? codeIfTrue : codeIfFalse;

/*let age =21;
let message = age >= 18 ? "You are an adult" : "You are a minor!";    
console.log(message);
*/
//ovo je isto kao da smo napisali 
/*
let age = 21;
let message;

if(age >= 18){
    message = "You are an adult";
}
else{
    message = "You are an minor";
}
*/
/*
let isStudent = true;
let message = isStudent ? "You are a stdent" : "You are not a student";

console.log(message);
*/

//vezba 2 Enter number/our recive message acordingly

const text8 = document.getElementById("text8");
const submit8 = document.getElementById("submit8");
const result8 = document.getElementById("result8");
let time;

console.log("submit8");
console.log(submit8);
submit8.onclick = function(){
    console.log("pritisnuo dugme");
    time = text8.value;
    time = Number(time);
    result8.textContent = time <= 12 ?  "Good morning" : "Good afternoon!";

}
   

// Switch = zamena za puno if, ellse statmenta
/*
const input = document.getElementById("input8");
const submit = document.getElementById("submit8");
const result = document.getElementById("result8");
let day;
*/

/*
submit.onclick = function(){
    day = input.value;
    
    if(day == 1){
        result.textContent = "Monday";
    }
    else if(day ==2){
        result.textContent = "Thuesday";
    }
    else if(day ==3){
        result.textContent = "Wednesday";
    }
    else if(day ==4){
        result.textContent = "Thursday";
    }
    else if(day ==5){
        result.textContent = "Friday";
    }
    else if(day ==6){
        result.textContent = "Saturday";
    }
    else if(day ==7){
        result.textContent = "Sunday";
    }
    else{
        result.textContent = "You enterd the wrong number";
    }
}
    */

//umesto da ovoliko puta imamo if, else statment...ovo mozemo napisat i ovako:
const text9 = document.getElementById("text9");
const submit9 = document.getElementById("submit9");
const result9 = document.getElementById("result9");
let day9;

console.log(submit9);

submit9.onclick = function(){
    console.log("Da li me vidis?")
    

    day9 = text9.value;
    console.log(day9)

    switch(day9){
        case "1":
            result9.textContent("Monday");
            break;
        case "2":
            result9.textContent = "Thusday";
            break;
        case "3":
            result9.textContent = "Wednsday";
            break;
        case "4":
            result9.textContent = "Thursday";
            break;
        case "5":
            result9.textContent = "Friyday";
            break;
        case "6":
            result9.textContent = "Saturday";
            break;
        case "7":
            result9.textContent = "Sunday";
            break;
        default:
            result9.textContent = "You enterd a wrong number";
        
    }
    console.log(result9);

}

//2 zadatak SWICH
const text10 = document.getElementById("text10");
const submit10 = document.getElementById("submit10");
const result10 = document.getElementById("result10");

let testScore;

submit10.onclick = function(){

    testScore = text10.value;
    testScore = Number(testScore);

    switch(true){
        case testScore  >= 90:
            result10.textContent = "Your Grade is: A";
            break;
         case testScore >= 60:
            result10.textContent = "Your Grade is: B";
            break;
        case testScore >= 40:
            result10.textContent = "Your Grade is: C";
            break;
        default:
            result10.textContent = "Your Grade is: D";
    }
}

// STRING METHODS

let someString = "Zekaz";

someString.charAt(0); // ovaj metod govori koje slvo na mestu br 0 u datom stringu.
console.log(someString.charAt(3))

someString.indexOf("z");// koje mesto je odredjeno slovo u stringu
console.log(someString.indexOf("z"));

someString.lastIndexOf("z");// koje mesto je odredjeno slovo u stringu
console.log(someString.lastIndexOf("z"));// koje mesto zauzima poslednje slovo "a" u nekom stringu

someString.length;// ovaj property nam vraca koliko karaktera ima neki string
console.log(someString.length);

someString.trim();//trimuje/brise prazan prostor ako postoji ispred ili iza nekog stringa

someString.toUpperCase();//sva slova da budu velika
console.log(someString.toUpperCase());

someString.toLowerCase();
console.log(someString.toLowerCase());

someString.repeat(1);//ako zelimo da ponovi odredjeni broj puta neki string
console.log(someString.repeat(3));

someString.startsWith("");// proverava da li neki string pocinje sa necim..u ovom slucaju sa praznim prostorom.
console.log(someString.startsWith(" "));

let whiteSpace = someString.startsWith(" ");

if(whiteSpace){
    console.log("Your string can not start with a white spase.");
}
else{
    console.log(someString + " is ok written");
}

someString.endsWith("");

someString.includes();//da li sadrzi neki znak
console.log(someString.includes());

//zadatak kako da izbacimo neki znak iz stringa

let phoneNumber = "075/557/2524";
phoneNumber = phoneNumber.replaceAll("-", "/");// na prvom mestu u zagradi je sta zelimo da izbacimo a posle zareza je sa cime zelimo da ga zamenimo

console.log(phoneNumber);

phoneNumber.padStart(15,"0");// koliko ukupno znakova treba da bude dugacak taj string , a posle zareza sa cime da ga nadopunimo ukoliko nije dovoljno dugacak
console.log(phoneNumber.padStart(15,"0"));

phoneNumber.padEnd();


// STRING SLICING = creating a substring from a portion of another string

//string.slice(start, end); end je do tog broja, ne ukljucuje taj broj

const MyFullName = "Bilja Bajceta";
let stringLength = MyFullName.length;
console.log(stringLength);

let firstName = MyFullName.slice(0, 5);
let lastName = MyFullName.slice(6, stringLength);
console.log(firstName + " " + lastName);

let firstChar = MyFullName.slice(0, 1);
let lastChar = MyFullName.slice(-3);//pokazuje poslednja 3 karaktera
console.log(firstChar + " " + lastChar);

//ovo sve moze da se napise i na vise dinamican nacin

let yourFullName = "Miki Maus";
let yourFirstName = yourFullName.slice(0, yourFullName.indexOf(" "));
console.log(yourFirstName);
let yourLastName = yourFullName.slice(yourFullName.indexOf(" ")+1); //ovo +1 smo uradili da ne bi poceo od 0 karaktera koji je spejs vec od 1 karaktera koji je pocetak prezimena

console.log(yourFirstName + " " + yourLastName);
console.log(yourFirstName);
console.log(yourLastName);

//
const email = "biljanara@yahoo.com";

let sliceUserName = email.slice(0, email.indexOf("@"));
console.log(sliceUserName);

let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);

//Method CHAINING = calling one method after another in one continuosu line of code.

// NO METHOD CHAINING
/*let ime = window.prompt("Enter your name: ");

ime = ime.trim();
let firstLetter = ime.charAt(0);
firstLetter = firstLetter.toUpperCase();

console.log(firstLetter);

let otherLetters = ime.slice(1,ime.length);
otherLetters = otherLetters.toLowerCase();

console.log(otherLetters);
console.log(ime);

ime = firstLetter + otherLetters;
console.log(ime);
*/
// with Method Chaninig

//let enterName = window.prompt("Unesi svoje ime:");
//enterName = enterName.trim().charAt(0).toUpperCase() + enterName.trim().slice(1, enterName.length).toLowerCase();

//console.log(enterName);

// Logical operators = AND && OR || NOT !

const temp = 20;

// && AND that meens that bouth conditions most be true
if(temp>0 && temp<=30){
    console.log("The wether is good!");
}
else{
    console.log("The wether is bad!");
}

// OR || that means that oneof conditions most be true if we want that code be exequted.

// = assignement operator
// == comparison operator (comper if values are equal), ne gleda da li su to isti tipovi podataka(string, number, bulean);
// === strict equality ooperator (comper if values & datatype are equal), gleda i da li su isti tipovi podataka>string, number, bulean.
// != inequality opertor
// !== strict inequality operator


//WHILE LOOP = repeat some code While some condition is true

let expl = document.getElementById("exp16");
expl.textContent = "It will repeat some code While some condition is true";

let korisnickoIme = "";
const result16 = document.getElementById("result16");
const submit16 = document.getElementById("submit16");
const text16 = document.getElementById("text16");

submit16.onclick = function(){
    korisnickoIme = text16.value;
   /* if(korisnickoIme === ""){
        result16.textContent = "You did not enter your name!";
    }
    else {
        result16.textContent = "Hello" + " " + korisnickoIme ;
    }
        */
       while(korisnickoIme === ""){
        result16.textContent = "You did not enter your name!";
       }
       //ovo moze da se napise i ovako
      /* do{
        result16.textContent = "You did not enter your name!";
       }
       while(korisnickoIme === "");
       */
       result16.textContent = "Hello" + " " + korisnickoIme ;
}

//primer 2 while loop
/*
const potvrda = document.getElementById("res16"); 
let logedIn = false;
let korisnik;
let password;

do {
    korisnik = window.prompt("Uneki korisnicko ime!");
    password = window.prompt("Unesi svoju sifru!");

    if(korisnik==="bilja" && password==="7777"){
        logedIn = true;
        console.log(korisnik + " " + "Ulogovani ste");
    }
    else {
        console.log("You enterd invalid data");

    }
}

while(!logedIn)

*/