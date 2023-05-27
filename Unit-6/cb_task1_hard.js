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

// * The output of the code should be:
// * ...
// *   prints 10 and waits for 1 sec
// *   prints 9 and waits for 1 sec
// *   ...
// *   prints 0
// *   prints "Callback invoked!"
// * 
// * if someFunc = () => console.log("Callback invoked!");
// */