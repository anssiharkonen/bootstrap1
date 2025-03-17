function convertToFahrenheit() {
  clearMessages();
  const tempInput = document.getElementById('temperature').value;
  const temperature = parseFloat(tempInput);

  if (isNaN(temperature)) {
    displayError('Anna kelvollinen numero lämpötilaksi.');
    return;
  }

  if (temperature < -273.15) {
    displayError('Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste (-273,15°C).');
    return;
  }

  const fahrenheit = (temperature * 9/5) + 32;
  displayResult(`${temperature}°C on ${fahrenheit.toFixed(2)}°F`);
}

function convertToCelsius() {
  clearMessages();
  const tempInput = document.getElementById('temperature').value;
  const temperature = parseFloat(tempInput);

  if (isNaN(temperature)) {
    displayError('Anna kelvollinen numero lämpötilaksi.');
    return;
  }

  if (temperature < -459.67) {
    displayError('Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste (-459,67°F).');
    return;
  }

  const celsius = (temperature - 32) * 5/9;
  displayResult(`${temperature}°F on ${celsius.toFixed(2)}°C`);
}

function displayResult(message) {
  document.getElementById('result').innerText = message;
}

function displayError(message) {
  document.getElementById('error').innerText = message;
}

function clearMessages() {
  document.getElementById('result').innerText = '';
  document.getElementById('error').innerText = '';
}
