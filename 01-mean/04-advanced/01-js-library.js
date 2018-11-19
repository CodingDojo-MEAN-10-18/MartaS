var _ = {
    map: function(arr, callback) {
      for (let i = 0; i < arr.length; i++) {
          arr[i] = callback(arr[i]);
      }
    },
   

    reduce: function(arr, callback, memo) { 
      let num = 0;
      if (!memo) {
          memo = arr[0];
          num = 1
      }
      for (let i = num; i < arr.length; i++) {
          memo = callback(arr[i], memo);
      }
      return memo;
    },


    find: function(arr, callback) {
        for (let i = 0; i < arr.length; i ++) {
            if( callback(arr[i])) {
                return arr[i]
            }
        }   
    },


    filter: function(arr, callback) {
        let tempArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                tempArr.push(arr[i]);
            }
        }
    },


    reject: function(arr, callback) {
        let noArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                noArr.push(arr[i]);
            }
        }
    }
  }
 // you just created a library with 5 methods!
const array = [1,2,3]
_.map(array, function callback(x) { return x + 1; });
console.log(array)
//returns [2,3,4]

console.log(_.reduce(array, function callback(x, memo) { return x + memo }));
//returns 9

console.log(_.find(array, function callback(x) { return x === 2 }));
//returns 2

console.log(_.filter(array, function callback(x) {return x > 0 }));

console.log(_.reject(array, function callback(x){ return x === 0 }))