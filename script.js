let display = document.getElementById('display');
const toggleDarkMode = document.getElementById('toggle-dark-mode');

// Toggle between Light and Dark Mode
toggleDarkMode.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
