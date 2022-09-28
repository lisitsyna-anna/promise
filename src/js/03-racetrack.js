import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0;

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  determineWinner(promises);
  updateWinnerField('');
  updateProgressField('Заезд начался, ставки не принимаются!');
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`Победил ${horse}, финишировал за ${time}`);
    updateResoltsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField(`Заезд окончен, принимаются ставки `);
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResoltsTable({ horse, time, raceCounter }) {
  const tr = `<tr>
                <td>${raceCounter}</td>
                <td>${horse}</td>
                <td>${time}</td>
              </tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
Для обработки коллекции промисов есть два метода:
- Promise.race([])  - принимает массив промисов, он ждет выполнения самого быстрого промиса,
после чего возращает еще один промис, и получим в результате выполнение самого быстрого промиса
- Promise.all([]) - принимает массив промисов, дожидается выполнения абсолютно всех промисов,
возращает промис, результатом котрого будет значение всех этих промисов

 * Promise.race([]) для ожидания первого выполнившегося промиса
 */

// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%cПобедил ${horse}, финишировал за ${time} `,
//     'color: green; font-size: 14px'
//   );
// }); // то есть мы можем получить самую быструю лошадь

/*
 * Promise.all([]) для ожидания всех промисов
 */
// Promise.all(promises).then(() => {
//   console.log(
//     `%cЗаезд окончен, принимаются ставки `,
//     'color: blue; font-size: 14px'
//   );
// });
