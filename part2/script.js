import regExp from 'https://tistory2.daumcdn.net/tistory/4741094/skin/images/regExp.js';

function calculaterHandler() {
  const loan = parseFloat(regExp.uncomma($('#loan').val()));
  const interest = parseFloat(regExp.uncomma($('#interest').val()));
  const period = parseFloat(regExp.uncomma($('#period').val()));

  const interestMonth = interest / 12 / 100;
  const div1 = loan * interestMonth * (1 + interestMonth) ** period; //분자계산
  const div2 = (1 + interestMonth) ** period - 1; //분모계산
  const result = regExp.comma(Math.round(div1 / div2));

  const resultText = `고객님의 ${period}개월동안 상환 금액은 <mark>${result}원</mark> 입니다!`;
  $('#result').html(resultText);
}
function loan100Handler() {
  let loan = $('#loan').val();
  if(loan === "") loan = 0;
  loan = parseFloat(regExp.uncomma(loan)) + 1000000
  $('#loan').val(regExp.comma(loan));
}
function loan1000Handler() {
  let loan = $('#loan').val();
  if(loan === "") loan = 0;
  loan = parseFloat(regExp.uncomma(loan)) + 10000000
  $('#loan').val(regExp.comma(loan));
}
function loan10000Handler() {
  let loan = $('#loan').val();
  if(loan === "") loan = 0;
  loan = parseFloat(regExp.uncomma(loan)) + 100000000
  $('#loan').val(regExp.comma(loan));
}

function interest3Handler() {
  $('#interest').val(3);
}

function interest4Handler() {
  $('#interest').val(4);
}

function interest5Handler() {
  $('#interest').val(5);
}

function period1Handler() {
  $('#period').val(12);
}

function period3Handler() {
  $('#period').val(36);
}

function period5Handler() {
  $('#period').val(60);
}

$(document).ready(function() {
  $('#calculate').click(calculaterHandler);
  $('#loan-100').click(loan100Handler);
  $('#loan-1000').click(loan1000Handler);
  $('#loan-10000').click(loan10000Handler);

  $('#interest-3').click(interest3Handler);
  $('#interest-4').click(interest4Handler);
  $('#interest-5').click(interest5Handler);

  $('#period-1').click(period1Handler);
  $('#period-3').click(period3Handler);
  $('#period-5').click(period5Handler);
});