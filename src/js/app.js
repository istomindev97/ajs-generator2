function canIterate (input) {

  if (input == null) {
      return false;
  }

  return typeof input[Symbol.iterator] === 'function';
}

console.log(canIterate(new Map())); 
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate('ghbdtn'));