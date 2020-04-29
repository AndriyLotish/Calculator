let number1 = null;
let number2 = null;
let action = '';

let field = document.getElementById('input');

function input(number) {
  //1. Записати number в інтпут

  field.value = field.value + number;
}

function getNumber(char) { // a (action)

  action = char; // + - / *

  number1 = field.value;

  field.value = '';
}

function equal() {

  number2 = field.value;

//  if (action == '+') {
//    number1 + number2;
//  } else if (action == '-') {
//    number1 - number2;
//  } else if (action == '/') {
//    number1 / number2;
//  } else if (action == '*') {
//    number1 * number2;
//  } else {
//    alert('Ти взагалі знаєш шо таке калькулятор? (треба вибрати дію.') -_-');
//  }

  let result = '';

  switch (action) {
    case '+': result = Number(number1) + Number(number2); break;
    case '-': result = number1 - number2; break;
    case '/': result = number1 / number2; break;
    case '*': result = number1 * number2; break;
    default: {
      alert('Ти взагалі знаєш шо таке калькулятор? (треба вибрати дію.) -_-');
    }
  }

  console.log(result);

  field.value = result;
}

function clearInput() {

  field.value = '';

  number1 = null;
  number2 = null;
}



