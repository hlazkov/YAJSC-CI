function orderPizza(pizzaName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isPizzaDelivered = true;

            if (isPizzaDelivered) {
                console.log('Will be resolved');
                const pizza = `${pizzaName} created`;
                resolve(pizza);
            } else {
                const reason = 'Pizzeria is closed';
                reject(reason);
            }
        }, 5_000);
    })
}

const someOtherPromiseFunc = () => Promise.resolve('someOtherPromiseFunc is resolved');

const myFunc = async () => {
    try {
        console.log('Start');
        const result = await orderPizza('Margarita');
        console.log(await orderPizza('Hawaii'));
        //console.log(await someOtherPromiseFunc());
        console.log('Finish');
        console.log(result);
    } catch (err) {
        console.log('AAAA ' + err);
    }

}

myFunc();