new Promise(((e,o)=>{const t=Math.random()>.5;setTimeout((()=>{t&&e("куку, все хорошо, это resolve"),o("все пропало, это reject")}),2e3)})).then((e=>console.log(e))).catch((e=>console.log(e)));
//# sourceMappingURL=02-promisification.235ca1f5.js.map
