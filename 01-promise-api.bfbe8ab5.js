new Promise((function(n,o){var e=Math.random()>.5;setTimeout((function(){e&&n("Промис выполнился успешно, с результатом (исполнен, fulfilled)"),o("Промис выполнился с ошибкой (отклонён, rejected)")}),1e3)})).then((function(n){console.log("onFulfilled -> onFulfilled"),console.log("✅ ".concat(n))})).then((function(n){return console.log(n),10})).then((function(n){console.log(n)})).catch((function(n){return console.log(n)})).finally((function(){return console.log("Я буду выполнен в любом случае")}));
//# sourceMappingURL=01-promise-api.bfbe8ab5.js.map