
// function counter() {
//     let count = 0;
//     const interval = setInterval(() => {
//       count++;
//       console.log(count);
//     }, 1000);
//     return interval;
//   }

//   function stopCounter(counter) {
//     clearInterval(counter);
//   }

//  const counting = counter()

// setTimeout(() => {
//     stopCounter(counting)

// }, 5000);


/// counter without setInterval
function counter2(delay, min , max){
    if(min > max){
        return
    }
    console.log(min)    
  
        setTimeout(() => {
            counter2(delay, min+1, max)
  
        }, delay)
  }
  counter2(1000, 0, 5)