function sayHello(name) {
  console.log(`Hello ${name}`);
}

function sayGoodbye(name) {
  console.log(`Goodbye ${name}`);
}

function printMessage(func,name) {
  console.log('Printing message...');
  func(name);
}

// printMessage(sayHello, '섭이')
printMessage((name) => {
  console.log(`Goodbye ${name}`);
},'섭이')