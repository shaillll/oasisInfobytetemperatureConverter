function convertTemperature() {
  const input = document.getElementById('temperatureInput').value;
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;
  const resultArea = document.getElementById('resultArea');

  if (input === '' || isNaN(input)) {
    resultArea.textContent = 'Please enter a valid number.';
    return;
  }

  const temp = parseFloat(input);
  let result;

  if (from === to) {
    result = temp;
  } else if (from === 'C' && to === 'F') {
    result = (temp * 9/5) + 32;
  } else if (from === 'C' && to === 'K') {
    result = temp + 273.15;
  } else if (from === 'F' && to === 'C') {
    result = (temp - 32) * 5/9;
  } else if (from === 'F' && to === 'K') {
    result = (temp - 32) * 5/9 + 273.15;
  } else if (from === 'K' && to === 'C') {
    result = temp - 273.15;
  } else if (from === 'K' && to === 'F') {
    result = (temp - 273.15) * 9/5 + 32;
  }

  resultArea.textContent = `${result.toFixed(2)} °${to}`;
}
