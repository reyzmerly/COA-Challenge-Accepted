function transformString(text) {
  const length = text.length;

  // lets Check for divisibility and perform transformations
  if (length % 15 === 0) {
    //  we then Reverse and convert to ASCII codes (both 3 and 5)
    text = text.split('').reverse().join('');
    text = text.replace(/./g, (char) => char.charCodeAt(0) + ' '); // Then lets Replace each char with its ASCII code
  } else if (length % 5 === 0) {
    // By Converting to ASCII codes (only 5)
    text = text.replace(/./g, (char) => char.charCodeAt(0) + ' ');
  } else if (length % 3 === 0) {
    // Reverse (only 3)
    text = text.split('').reverse().join('');
  }
  return text;
}

// Example usage
const inputText = "Hamburger";
const transformedText = transformString(inputText);
console.log(transformedText); // Output: "regrubmaH"
