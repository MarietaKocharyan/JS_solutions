function sum(x, y) {
    return (x !== y)
        ? x + y
        : 6 * x;
}
sum(4, 5);
function triangle(x, y) {
    return 1/2 * x * y;
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

function ucFirst(number) {
   // console.log(number[0].toUpperCase() + number.slice(1));
}
ucFirst("ajfiua");

function checkSpam(str) {
    if (~str.indexOf('XXX') || ~str.indexOf("viagra") ) {
        return true;
    }else {
        false;
    }
}
checkSpam("XXXaffafaef");
checkSpam("hfoih");
checkSpam("Viagrahohasf");

function isEmpty(obj) {
    for (key in shcedule)
        return true ;
} false;
let shcedule = {};
isEmpty(shcedule);
shcedule["Wek up"] = "at 8:30 pm";

isEmpty(shcedule);

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
clone[key];

let nameOf = [];
nameOf[0] = "apple";
nameOf[1] = "persik";
nameOf.age = 25;
nameOf[999999] = "Banananna";
nameOf.push("one");

function eat(arr) {
    arr.pop();
}
let arr = ["This", "is", "JavaScript", "baby", "!"]
//console.log( arr.length );  //5
eat(arr);
eat(arr);
//console.log( arr.length ); //3  why here is 3?

let newArray = [ "One", "Two", "Three"];
let countarray = newArray[newArray.length - 1];
newArray.push("Four");
let styles = [ "Jazz", "Blues"];
styles.push("Roj&Roll");
styles[styles.length - 2 ] = "Classic";
styles.shift();
styles.unshift("Rep", "Reggi");
let rand = styles[Math.floor(Math.random() * styles.length)];
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
//console.log(find(arr, value));
let names = "Helen, Jasmine, Georgi";
let arrs = names.split(", ", 2);
for ( let i = 0; i < arrs.length; i++) {
    //  return arrs[i];
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
//console.log(obj.className);

function camelize(str) {
    let  newStr = str.split('-');
    for (let i = 0 ; i < newStr.length; i++) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }
    return newStr.join( " ");
}
camelize("background-color");
camelize("list-style-image");

let arrnumber =[ 5, 3, 8, 1];
function filterRangeInPlace(arrnumber, a, b) {
    for (let i = 0; i < arrnumber.length; i++) {
        if (arrnumber[i] < a || arrnumber[i] > b) {
            arrnumber.splice(i--, 1);
        }
    }
}
filterRangeInPlace(arrnumber, 1, 4);
//console.log(arrnumber);
// https://trello.com/c/5BW0Zuik/32-write-a-javascript-program-to-perform-a-binary-search-of-each-element
let nameBinar = [2, 4, 5, 1, 52, 43]
function perform(nameBinar, argument) {
    for ( let i = 0; i < nameBinar.length; i++) {
        if ( nameBinar[i] == argument) {
            return i;
        }else {
            return  "-1"
        }
    }
}
perform(4);
//https://trello.com/c/g6YWEuzQ/35-write-a-bubble-sort-algorithm-in-javascript
function bubble_Sort(a) {
    let swapp;
    let n = a.length-1;
    let x=a;
    do {
        swapp = false;
        for (let  i=0; i < n; i++) {
            if (x[i] < x[i+1]) {
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x;
};
bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);

//https://trello.com/c/3FCZSbg7/33-write-a-javascript-function-to-find-the-difference-of-two-arrays
function difference(first, second) {
    let value = [];
    for ( let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            if (first[i] == second[j]) {
                value.push ( first[i] )
            }
        }
    }
    return value;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

function differenceOf2Arrays (array1, array2) {
    let temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
     for (let in array1) {
               if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
        }
        for(i in array2) {
           if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
        }
   return temp.sort((a,b) => a-b);
}
//console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
//https://trello.com/c/TxzxC2cA/30-write-a-javascript-program-to-compute-the-sum-and-product-of-an-array-of-integer
var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1)
{
    s += array[i];
    p *= array[i];
}
console.log('Sum : '+s + ' Product :  ' +p);
//https://trello.com/c/SmZnXqC1/31-write-a-javascript-program-to-remove-duplicate-items-from-an-array
function removeofduplicate(numberofdup) {
    for (let i = 0; i < numberofdup.length; i++){
        for (let j = 0; j < numberofdup.length; j++){
            if (numberofdup[i] == numberofdup[j]) {
                numberofdup= numberofdup.push(array00[i]);
                return numberofdup;
            }
        }
    }
};
let array00 = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(removeofduplicate(array00));
//https://trello.com/c/nJzvNaY7/34-write-a-javascript-function-to-get-a-part-of-a-string-before-a-specified-character
function stringofarray(arrayofstring, argument) {
        return arrayofstring.substring(0, arrayofstring.indexOf(argument));
};
