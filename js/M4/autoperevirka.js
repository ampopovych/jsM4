//  2 Задача
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback ;
}
makeMessage('Royal Grand', makePizza);
makeMessage('Ultracheese', deliverPizza);