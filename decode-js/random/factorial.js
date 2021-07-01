function factorial(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Driver code
console.log("Factorial :", factorial(0));
console.log("Factorial :", factorial(1));
console.log("Factorial :", factorial(2));
console.log("Factorial :", factorial(5));
console.log("Factorial :", factorial(7));
console.log("Factorial :", factorial(12));
