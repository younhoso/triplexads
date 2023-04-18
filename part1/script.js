function plusHandler() {
  const firstNumber = parseFloat($('#first-number').val());
  const secondNumber = parseFloat($('#second-number').val());
  $('#result').text(firstNumber + secondNumber);
}

function minusHandler() {
  const firstNumber = parseFloat($('#first-number').val());
  const secondNumber = parseFloat($('#second-number').val());
  $('#result').text(firstNumber - secondNumber);
}

function multiplyHandler() {
  const firstNumber = parseFloat($('#first-number').val());
  const secondNumber = parseFloat($('#second-number').val());
  $('#result').text(firstNumber * secondNumber);
}

function divideHandler() {
  const firstNumber = parseFloat($('#first-number').val());
  const secondNumber = parseFloat($('#second-number').val());
  $('#result').text(firstNumber / secondNumber);
}

$(document).ready(function() {
  $('#plus').click(plusHandler);
  $('#minus').click(minusHandler);
  $('#multiply').click(multiplyHandler);
  $('#divide').click(divideHandler);
});