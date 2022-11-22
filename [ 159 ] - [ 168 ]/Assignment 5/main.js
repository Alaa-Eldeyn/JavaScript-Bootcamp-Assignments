const startTime = performance.now();

for (i = 0; i < 99999; i++){
  document.write(`${i}<br>`)
}

const finishTime = performance.now();

console.log(`Loop Took ${Math.trunc(finishTime - startTime)} Milliseconds.`)


// Needed Output
// "Loop Took 1921 Milliseconds."