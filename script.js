function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  const displayValue = document.getElementById('display').value;
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

function squareRoot() {
  const displayValue = document.getElementById('display').value;
  const result = Math.sqrt(eval(displayValue));
  document.getElementById('display').value = result;
}

function modulo() {
  const displayValue = document.getElementById('display').value;
  const result = eval(displayValue) % 1;
  document.getElementById('display').value = result;
}