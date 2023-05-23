const myTimeout1 = (cb1) => {
    setTimeout(() => {
        console.log('My timeout - 5 sec');
        cb1();
    }, 5_000);
}

const myTimeout2 = (cb2) => {
    setTimeout(() => {
        console.log('My timeout - 10 sec');
        cb2();
    }, 10_000);
}

const myTimeout3 = (cb3) => {
    setTimeout(() => {
        console.log('My timeout - 2 sec');
        cb3();
    }, 2_000);
}

console.log('Start');

myTimeout1(() => {
    myTimeout2(() => {
        myTimeout3(() => {
            console.log('The end');
        });
    });
});

console.log('Finish');

// Start
// Finish
// My timeout - 5 sec 
// My timeout - 10 sec
// My timeout - 2 sec
// The end