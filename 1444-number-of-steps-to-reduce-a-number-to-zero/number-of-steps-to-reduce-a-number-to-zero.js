/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let counter = 0;
    while (num != 0) {
        if (num % 2 == 0) {
            num /= 2;
            counter++;
       } 
       else if (num % 2 != 0) {
            num--;
            counter++;
       }
    }
    return counter;
};