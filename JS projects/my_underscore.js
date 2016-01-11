var _ = {
   map: function(arr, callback){
      for(var i = 0; i < arr.length; i++){
         arr[i] = callback(arr[i]);
      }
      return arr;
   },
   reduce: function(arr, callback){
      var sum = arr[0];
      for(var i = 1; i < arr.length; i++){
         sum = callback(arr[i], sum);
      }
      return sum;
   }, 
   find: function(arr, callback){
      for(var i = 0; i < arr.length; i++){
         if(callback(arr[i])){
            return arr[i];
         }
      }
      return undefined;
   },
   filter: function(arr, callback){
      var arr1 = [];
      for(var i = 0; i < arr.length; i++){
         if(callback(arr[i])){
            arr1.push(arr[i]);
         }
      }
      return arr1;
   }, 
   reject: function(arr, callback){
      var arr1 = [];
      for(var i = 0; i < arr.length; i++){
         if(!callback(arr[i])){
            arr1.push(arr[i]);
         }
      }
      return arr1;
   }
 }
 
console.log(_.map([1,2,3], function(num){return num * 3}));
console.log(_.reduce([1,2,3], function(num, sum){return num + sum}));
console.log(_.find([1,2,3], function(num){return num == 3}));
console.log(_.filter([2,4,5,6], function(num){return num % 2 == 0}));
console.log(_.reject([2,4,5,6], function(num){return num % 2 == 0}));