// Point#1

const x = 10;
const y = 7;
const comparisonNumbers =
  x > y ? alert("х больше, чем y") : alert("х не больше, чем y");
/* пишу (x > y), при сохранении файла скобки убираются 'оптимизатором'
VSCode, в данном случае приоритет у логического оператора '>',
чем у оператора '?', поэтому так тоже верно */

// Point#2

const num = +prompt("Enter a number, please: ");
if (isNaN(num)) {
  alert("You need to enter the number.");
} else if (num % 2 === 0) {
  alert("Number " + num + " is even");
} else {
  alert("Number " + num + " is odd");
}

// Point#3

const wholeNumber = prompt("Enter a whole number, please:");
const amountDigits = wholeNumber.length;
if (wholeNumber.includes(".") || isNaN(wholeNumber)) {
  alert("You entered not whole number");
} else if (wholeNumber.length === 2 && wholeNumber.startsWith("-")) {
  alert(
    `Number ${wholeNumber} is negative and it contains ${
      amountDigits - 1
    } digit.` //I specified 'digit' in singular
  );
} else if (wholeNumber.length && wholeNumber.startsWith("-")) {
  alert(
    `Number ${wholeNumber} is negative and it contains ${
      amountDigits - 1
    } digits.` //I specified 'digitS' in plural
  );
} else if (wholeNumber.length === 1) {
  alert(
    `Number ${wholeNumber} is positive and it contains ${amountDigits} digit.`
  ); //I specified 'digit' in singular
} else if (wholeNumber.length) {
  alert(
    `Number ${wholeNumber} is positive and it contains ${amountDigits} digits.`
    //I specified 'digit' in plural
  );
}

// Point#4

const firstNumber = +prompt(`Enter the first number, please:`);
const secondNumber = +prompt(`Enter the second number, please:`);
const thirdNumber = +prompt(`Enter the third number, please:`);
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  alert(`Number ${firstNumber} is greater than other numbers`);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  alert(`Number ${secondNumber} is greater than other numbers`);
} else {
  alert(`Number ${thirdNumber} is greater than other numbers`);
}

// Point#5

const firstSideTriangle = +prompt(
  `Enter the first side of a triangle, please:`
);
const secondSideTriangle = +prompt(
  `Enter the second side of a triangle, please:`
);
const thirdSideTriangle = +prompt(
  `Enter the third side of a triangle, please:`
);
if (
  firstSideTriangle + secondSideTriangle > thirdSideTriangle &&
  firstSideTriangle + thirdSideTriangle > secondSideTriangle &&
  secondSideTriangle + thirdSideTriangle > firstSideTriangle
) {
  alert(`We'll get a triangle under these conditions.`);
} else {
  alert("We will not get a triangle under these conditions.");
}
