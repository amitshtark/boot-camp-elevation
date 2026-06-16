function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(num > 0)
            if(num % 7 === 0)
              resolve("Lucky!");
            else
              resolve("Not lucky");
          else
            reject(new Error("Invalid number"));
        }, 800);
    })
  }
checkLuckyNumber(14)
  .then(result => console.log(result))
  .catch(error => console.error(error.message));

checkLuckyNumber(10)
  .then(result => console.log(result))
  .catch(error => console.error(error.message));

checkLuckyNumber(-5)
  .then(result => console.log(result))
  .catch(error => console.error(error.message));

