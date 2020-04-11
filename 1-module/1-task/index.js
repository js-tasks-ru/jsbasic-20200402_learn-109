/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
  if(n < 0 || n === undefined) {
  	alert('You\'ve typed an incorrect value as the argument.');
  	return;
  };

  let fact = 1;

  while(n > 1) {
	fact *= n--;
  };

  return fact;
}
