let myPromise = new Promise((resolve, reject) => {
  let success = false;
  setTimeout(() => {
    if (success) {
      resolve("Task completed!");
    } else {
      reject("Task failed!");
    }
  }, 2000);
});


myPromise
  .then((result) => console.log(result))   
  .catch((error) => console.log(error));  
