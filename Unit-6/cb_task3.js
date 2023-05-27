//const someFunc = () => console.log("Callback invoked!");

// const countdown = (duration, callback) => {
//     for (let counter = 0; counter <= duration; counter++) {
//         if (counter < duration) {
//             // console.log(counter) & wait 1 sec & increment counter by 1
//             setTimeout(() => console.log(counter), 1000)
//             counter ++;
//             console.log("test")
//         } else {
//             // return invoke the callback function.
//             callback();
//         }
//     }
//  }

// countdown(5, someFunc);


const someFunc = () => console.log("Callback invoked!");

function countdown(duration, callback) {
    let counter = 0;
  
    function countdownHelper() {
      console.log(counter);
      counter++;
  
      if (counter > duration) {
        callback();
      } else {
        setTimeout(countdownHelper, 1000);
      }
    }
  
    countdownHelper();
  }

  countdown(3, someFunc);
  
  // node ./Unit-6/callbacks_task3.js 