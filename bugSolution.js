function myFunc(a, b) {
  if (isNaN(a) || isNaN(b) || a === 0 || b === 0) {
    return NaN; // Correctly handles NaN and division by zero
  }
  return a / b; 
}