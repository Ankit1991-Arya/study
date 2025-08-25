function findSubstring(text: string, pattern: string): number {
    // Edge case: if pattern is longer than text
    if (pattern.length > text.length) {
        return -1;
    }

    // Loop through the text
    for (let i = 0; i <= text.length - pattern.length; i++) {
        let j = 0;

        // Check each character of pattern
        while (j < pattern.length && text[i + j] === pattern[j]) {
            j++;
        }

        // If full match found
        if (j === pattern.length) {
            return i;
        }
    }

    // If not found
    return -1;
}

// Test cases
console.log(findSubstring("hello world", "world"));       // 6
console.log(findSubstring("typescript interview", "script")); // 4
console.log(findSubstring("abcabcabc", "cab"));           // 2
console.log(findSubstring("openai", "chatgpt")); 