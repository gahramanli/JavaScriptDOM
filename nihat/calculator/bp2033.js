let result;

const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
function toplama(num1,num2){
    result = num1+num2;
    console.log(`${num1} + ${num2} = ${result}`);
}
function chixma(num1,num2){
    result = num1-num2;
    console.log(`${num1} - ${num2} = ${result}`);
}
function vurma(num1,num2){
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
}
function bolme(num1,num2){
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
}

switch(operator) {
    case '+':
      toplama(number1,number2)
        break;
    case '-':
     chixma(number1,number2)
        break;
    case '*':
       vurma(number1,number2)
        break;
    case '/':
       bolme(number1,number2)
        break;

    default:
        console.log('False operator');
        break;
}