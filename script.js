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