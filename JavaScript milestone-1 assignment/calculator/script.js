function clac() {
  const firstNum = document.getElementById("first-num");
  const secondNum = document.getElementById("second-num");
  const operator = document.getElementById("operator");
  const result = document.getElementById("result");
  console.log(operator.value);
  console.log(typeof operator.value);
  console.log(firstNum.value);
  console.log(typeof firstNum.value);

  console.log(secondNum.value);
  console.log(typeof secondNum.value);

  switch (operator.value) {
    case "+":
      result.innerText = parseInt(firstNum.value) + parseInt(secondNum.value);
      console.log(result.innerText);
      break;
    case "-":
      result.innerText = parseInt(firstNum.value) - parseInt(secondNum.value);
      break;
    case "*":
      result.innerText = parseInt(firstNum.value) * parseInt(secondNum.value);
      break;
    case "/":
      result.innerText = parseInt(firstNum.value) / parseInt(secondNum.value);
      break;
    default:
      result.innerText = 0;
      break;
  }
}
