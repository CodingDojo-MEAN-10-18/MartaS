module.exports = function (){
    return {
      add: function(num1, num2) { 
           console.log(num1 + num2);
      },
      multiply: function(num1, num2) {
        console.log(num1 * num2); 
      },
      square: function(num) {
        console.log(num * num);
      },
      random: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        randomNum = Math.floor(Math.random() * (max - min)) + min;
        console.log(randomNum);
      }
    }
  };