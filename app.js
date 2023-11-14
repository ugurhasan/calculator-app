// Get the display element
const display = document.querySelector('.display');

// Get all the keys
const keys = document.querySelectorAll('.keys button');

// Add event listeners to all the keys
keys.forEach(key => {
  key.addEventListener('click', () => {
    // Get the value of the clicked key
    const keyValue = key.value;

    // Handle the clear button
    if (keyValue === 'clear') {
      display.value = '';
    }
    // Handle the equals button
    else if (keyValue === '=') {
      // Evaluate the expression in the display and set the result as the display value
      display.value = eval(display.value);
    }
    // Handle all other buttons
    else {
      display.value += keyValue;
    }
  });
});
