console.log("Javascript...");

var fib = function(n) {
  console.log("n = " + n);
  if(n===0 || n===1) {
    return n;
  } else if(n===2) {
    return 1; // Optimization for 2
  } else {
    return fib(n-1) + fib(n-2);
    /* This could be optimized to lookup previous values in an object. */
  }

  return null;

};

console.log("FIB:  " + fib(4) + " Molto buona!");

