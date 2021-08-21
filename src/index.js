module.exports = function reverse (n) {

    if (n < 0) {
      let string1= n * -1;
      let string2 = string1.toString().split('').reverse().join('');
      return string2;

      } else {
  
            let string = n.toString().split('').reverse().join('');
            return string;
            
      }
    }
