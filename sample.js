// Problem Statement: Need to remove the repeated characters consecutively in a given string iteratively until no repeated characters consecutively presented after each iteration.
// Sample Input:
// "abcdeedcbazkz"
// Output:// "zkz"

function removeConsecutiveDuplicates11(s) {
    let stack = [];
    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); 
        } else {
            stack.push(char);
        }


    }    return stack.join('');
}

function removeConsecutiveDuplicates(str) {
  let changed = true;

  while (changed) {
    changed = false;
    let result = "";
    
    for (let i = 0; i < str.length; ) {
      if (i < str.length - 1 && str[i] === str[i + 1]) {
        // skip all consecutive duplicates
        let char = str[i];
        while (i < str.length && str[i] === char) i++;
        changed = true;  // something got removed
      } else {
        result += str[i];
        i++;
      }
    }
    str = result; // prepare for next iteration
  }

  return str;
}


console.log(removeConsecutiveDuplicates("abcdeeedcbazkz"));


