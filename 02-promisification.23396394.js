new Promise((function(n,e){var o=Math.random()>.5;setTimeout((function(){o&&n("куку, все хорошо, это resolve"),e("все пропало, это reject")}),2e3)})).then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}));
//# sourceMappingURL=02-promisification.23396394.js.map
