/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 *
 *
 * new Promise()- принимает аргументом коллбек-ф-цию, которая всегда своим параметром принимает
 * 2 аргумента - resolve и reject
 *
 * resolve(value) - функция для вызова при успешной операции.
 * Переданный ей аргумент будет значением выполненного промиса.
 *  reject(error) - функция для вызвова в случае ошибки.
 * Переданный ей аргумент будет значением отклоненного промиса.
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно с результатом (исполнен fullfiled)');
    }
    reject('Промис выполнился с ошибкой (отклонен, rejected)');
  }, 1000);
});

//*  метод then() - если промис выполниться успешно, тогда...
// then(onSuccess, onError)
// onSuccess - ф-ция будет отвечать за обработку успешного результата
// onError - ф-ция будет отвечать за обработку ошибки

// then - возращает еще один промис, и его значением будетто что возращает внутренняя колбек ф-ция

// promise.then(onFullfilled, onRejected);

function onFullfilled(result) {
  console.log('Выполнился onFullfilled');
  console.log(`${result}`);
}

function onRejected(error) {
  console.log(' Выполнился onRejected');
  console.log(`${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */
promise
  .then(onFullfilled)
  .then(x => {
    console.log(x);

    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(() => {
    console.log('Я буду выполнен в любом случае');
  });
