const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

let multiply = (num1, num2) => {
  if (process.env.NODE_ENV === "development") {
    return num1 * num2;
  } else {
    return "Esse ambiente é de produção";
  }
};

module.exports = {
  add,
  subtract,
  multiply,
};
