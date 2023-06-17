const { result } = require("lodash");

function orderPizza(pizzaName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isPizzaDelivered = true;

            if (isPizzaDelivered) {
                console.log('Will be resolved');
                const pizza = `Pizza ${pizzaName} created`;
                resolve(pizza);
            } else {
                const reason = 'Pizzeria is closed';
                reject(reason);
            }
        }, 5_000);
    })
}

console.log('Start');
Promise.all([orderPizza('Pizza1'), orderPizza('Pizza2'), orderPizza('Pizza3')])
    .then(result => {
        console.log(result);
        console.log('Finish');
    })
