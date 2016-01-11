var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
function traverse_array(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
traverse_array(x);

x.push(100);

x.push([1, 2, 3]);

function sum(first, second) {
    var sum = first;
    for (var i = first + 1; i <= second; i++){
        sum += i;
    }
    console.log(sum);
}
sum(1, 500);

function min_val(arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
min_val([1, 5, 90, 25, -3, 0]);

function average(arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum/arr.length);
}
average([1, 5, 90, 25, -3, 0]);