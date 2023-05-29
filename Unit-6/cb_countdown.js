const someFunc = () => console.log("Callback invoked!");

const countdown = (duration, callback) => {
  let counter = 0;
  
  let countdownHelper  = () => {
    console.log(counter);
    counter++;

    if (counter > duration) {
      callback();
    } else {
        countdownHelper()
    }
  }

  countdownHelper();
}

  countdown(3, someFunc);
  
  // node ./Unit-6/cb_countdown.js