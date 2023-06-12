const { result } = require("lodash");

function orderPizza(pizzaName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isPizzaDelivered = false;

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
orderPizza('Margarita')
    .then(result => {
        console.log(result);
        console.log('Finish');
        return orderPizza('Hawaii');
    })
    .then((result) => {
        console.log(result);
        return 10;
    })
    .then(result => {
        console.log(result) 
    })
    .catch((errorResult) => {
        console.log(errorResult);
        throw Error(errorResult);
    })
    