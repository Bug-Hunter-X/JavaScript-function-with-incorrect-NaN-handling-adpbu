function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This is the problematic line, it should handle NaN correctly.
  }
  return a / b; 
}