function sum(x, y) {
     return (x !== y)
         ? x + y
         : 6 * x;
}
sum(4, 5);
function triangle(x, y) {
     return 1/2*x*y;
}
triangle(3, 5);

function multiple(x) {
   return ((x % 3 == 0) || (x % 7 == 0))
       ? "check"
       : "failed";
}
multiple(21);

function tempconvert(celsius) {
    return (5/9 * (celsius - 32));
}
function celconvert(temperatures) {
    return(9/5 * temperatures + 32);
}
tempconvert(5);
celconvert(17);

let name = "Jane";
console.log(name.toUpperCase);
let number = 12.5;
console.log(number.toFixed(1));
let a = NaN; //prompt("Write a number", "");
/*if (isNaN(a)) {
    console.log("This is string");
}else {
    console.log("This is number");
}*/
console.log(Math.floor(number));

function fibon(n) {
    let a = 1,
        b = 0,
        x;
    for (i = 0 ; i < n; i++) {
        x = a + b;
        b = a;
        b = x;
    }
    return b;

}

let  sub = "Example";console.log(fibon(9));
console.log(sub.substring(1, -4));

function ucFirst(number) {
    console.log(number[0].toUpperCase() + number.slice(1));
}
ucFirst("ajfiua");


function checkSpam(str) {
    if (~str.indexOf('XXX') || ~str.indexOf("viagra") ) {
        console.log(true);
    }else {
        console.log(false);
    }
}

checkSpam("XXXaffafaef");
checkSpam("hfoih");
checkSpam("Viagrahohasf");

//let continue = 0;
function isEmpty(obj) {
    for (key in shcedule)
        return true ;
} false;
let shcedule = {};

console.log(isEmpty(shcedule));

shcedule["Wek up"] = "at 8:30 pm";

console.log(isEmpty(shcedule));

let salaries = {
    "Emma": 100,
    "Dave": 300,
    "Helen": 250,
};
let value = 0;
let max = 0;
let maxname = "";
for (key in salaries) {
    value += salaries[key];
    if ( max < salaries[key] ){
        max = salaries[key];
        maxname = key;
    }
}
console.log( value );

console.log(key || "No one");

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
let user = {
    name: "Dav",
};
let clone = {};
for ( key in user ) {
    clone[key] = user[key]
};

console.log(clone[key]);

let nameOf = [];
nameOf[0] = "apple";
nameOf[1] = "persik";
nameOf.age = 25;
nameOf[999999] = "Banananna";
nameOf.push("one");

console.log( nameOf );

function eat(arr) {
    arr.pop();
}

var arr = ["This", "is", "JavaScript", "baby", "!"]

console.log( arr.length );  //5

eat(arr);
eat(arr);

console.log( arr.length ); //3  why here is 3?

let newArray = [ "One", "Two", "Three"];
let countarray = newArray[newArray.length - 1];
newArray.push("Four");

console.log(countarray);

console.log(newArray);

let styles = [ "Jazz", "Blues"];
styles.push("Roj&Roll");
styles[styles.length - 2 ] = "Classic";
styles.shift();

console.log(styles);

styles.unshift("Rep", "Reggi");

console.log(styles);

let rand = styles[Math.floor(Math.random() * styles.length)];
console.log(rand);

arr = ["test", 2, 1.5, false];
function find(arr, value) {
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i
        }
    }
    return "-1"
}
find(arr, 2);
console.log(find(arr, value));

let names = "Helen, Jasmine, Georgi";

let arrs = names.split(", ", 2);
for ( let i = 0; i < arrs.length; i++) {
    console.log( "You hahve massege " + arrs[i] );
}

let obj = {
    className: "Open menu"
};
function addClass(obj, cls) {
    let classes= obj.calssName ? obj.clasName.split() : [];
    for (let i = 0; i < obj.length; i++) {
        if (classes[i] == cls) return;
    }
    classes.push(cls);
    obj.className = classes.join( ' ');
}
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
console.log(obj.className);