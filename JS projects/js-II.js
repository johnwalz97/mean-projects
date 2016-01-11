var first_variable = "Yipee I was first!";;
var food = 'Chicken';
var new_var = "NEW!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";      
}
function lastFunc() {
  new_var = "old";
}

console.log(first_variable);
console.log(first_variable);
eat();
console.log(food);
console.log(new_var);

//results
"Yipee I was first!"
"Yipee I was first!"
"half-chicken"
"Chicken"
"NEW!"