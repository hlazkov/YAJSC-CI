const someFunc = () => console.log("Callback invoked!");

const countdown2 = (duration, callback) => {
  let counter = duration;
  
  function countdownHelper() {
    console.log(counter);
    counter--;

    if (counter < 0) {
      callback();
    } else {
      setTimeout(countdownHelper, 1000);
    }
  }

  countdownHelper();
}

  countdown2(10, someFunc);

// node ./Unit-6/cb_countdown2.js