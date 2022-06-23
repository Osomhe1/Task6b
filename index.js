
console.log('Hiiiii');

document.write('<p>Click the button and start calculating.</p>')


function myFunction() {
  var x,y,z,operator;
  x=prompt("Type first number");
  y=prompt("Type second number");
  operator = prompt('Type an operator');
  
  if (operator == '+') {
    z = Number(x) + Number(y)
  } else if ((oper = !null)) {
    z = 'Error'
  } else if ((x = !null)) {
    z = 'Error'
  } else if ((y = !null)) {
    z = 'Error'
  } else if (operator == '/') {
    z = Number(x) / Number(y)
  } else if (operator == '*') {
    z = Number(x) * Number(y)
  } else if (operator == '-') {
    z = Number(x) - Number(y)
  }
  
  return z;
    }
document.getElementById("demo").innerHTML =myFunction();


