//create count variable to increment
let count = 3;

//write a fx to update the DOM with the new count
function addCount(countParameter) {
    const newCount = document.querySelector(".instrument-count");
console.log(newCount)
    newCount.textContent = `(Instruments: ${countParameter})`;

    //newCount.innerText = `(test)`;
} 